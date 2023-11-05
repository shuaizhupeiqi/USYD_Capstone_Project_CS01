/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
const axios = require("axios");
const { phs } = require("jsthermalcomfort");
const tzlookup = require("tz-lookup");
/**
 * Checks if a user has enough points to meet a specific condition.
 *
 *@param {Object} input - The user data retrieved from the Realtime Database.
 *@return {Object} - The user data retrieved from the Realtime Database.
 */
function parseJSONValues(input) {  // Process the input object or array and convert the string into a json object
  if (Array.isArray(input)) {
    return input.map((value) => parseJSONValues(value));
  } else if (typeof input === "object" && input !== null) {
    const parsedObj = {};
    for (const key in input) {
      if (Object.prototype.hasOwnProperty.call(input, key)) {
        parsedObj[key] = parseJSONValues(input[key]);
      }
    }
    return parsedObj;
  } else if (typeof input === "string") {
    try {
      return JSON.parse(input);
    } catch (error) {
      return input;
    }
  } else {
    return input;
  }
}

/**
 * Checks if a user has enough points to meet a specific condition.
 *
 *@param {Object} data - The user data retrieved from the Realtime Database.
 *@param {Object} key - The user data retrieved from the Realtime Database.
 *@return {Object} - The user data retrieved from the Realtime Database.
 */
function getAllValuesGivenKey(data, key) {  //Extract the key values ​​of all objects
  // const values = Object.values(data).map((item) => item[key]);

  const values = Object.values(data)
    .flatMap((item) => (Array.isArray(item) ? item : [item]))
    .map((item) => item[key]);

  return values;
}

/**
 * Checks if a user has enough points to meet a specific condition.
 *
 *@param {Object} data - The user data retrieved from the Realtime Database.
 *@return {Object} - The user data retrieved from the Realtime Database.
 */
function findTheMaxRiskValue(data) { //From a group of objects, find the object with the highest risk value and define the maximum risk value
  const maxRisk = data.reduce((max, obj) => {
    return obj.riskValue > max.riskValue ? obj : max;
  });
  const maxRiskValue = maxRisk.riskValue;
  let maxRiskLevel = "Extreme";
  if (maxRiskValue < 0.75) {
    maxRiskLevel = "High";
  }
  if (maxRiskValue < 0.5) {
    maxRiskLevel = "Moderate";
  }
  if (maxRiskValue < 0.25) {
    maxRiskLevel = "Low";
  }
  return {
    maxRiskValue: maxRiskValue,
    maxRiskLevel: maxRiskLevel,
    time: maxRisk.time,
  };
}

/**
 * Checks if a user has enough points to meet a specific condition.
 *
 *@param {Object} data - The user data retrieved from the Realtime Database.
 *@return {Object} - The user data retrieved from the Realtime Database.
 */
function getData(data) {  // Calculate the value of a wdivider
  let wDivider = 1;

  // load personal setting from local storage
  if (data) {
    data = parseJSONValues(data);
    const wValues = getAllValuesGivenKey(data, "w");

    const isAllUndefined = (arr) =>
      arr.every((val) => typeof val === "undefined");

    if (isAllUndefined(wValues)) {
      return wDivider;
    }

    const multiply = (accumulator, currentValue) => {
      if (typeof currentValue !== "undefined") {
        return accumulator * currentValue;
      } else {
        return accumulator * 1;
      }
    };

    wDivider = wValues.reduce(multiply, 1) * 0.85;
  }

  return wDivider;
}

/**
 * Checks if a user has enough points to meet a specific condition.
 *
 *@param {Object} geoData - The user data retrieved from the Realtime Database.
 *@param {Object} dataInput
 *@return {Object} - The user data retrieved from the Realtime Database.
 */
async function getHSSData(geoData, dataInput) { //请求经度纬度来获取天气信息，之后调用phs函数计算风险值
  ​
  let wDivider = 1;
  try {
    wDivider = getData(dataInput);
  } catch (error) {
    wDivider = 1;
  }
  console.log(wDivider);

  if (geoData == null) {
    geoData = {
      latitude: -33.8,
      longitude: 151.01,
    };
  }

  const timeZone = tzlookup(geoData.latitude, geoData.longitude);

  const response = await axios.get(`https://api.open-meteo.com/v1/forecast`, { //Request latitude and longitude to get weather parameters
    params: {
      latitude: geoData.latitude,
      longitude: geoData.longitude,
      hourly: "temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m", // Obtained hourly data type
      timezone: timeZone, //Get time zone information
      forecast_days: "4", //Hope to get forecast data for the next 4 days
    },
  });

  const hourlyData = response.data.hourly;

  const temps = hourlyData.temperature_2m;
  const windSpeeds = hourlyData.windspeed_10m;
  const humidities = hourlyData.relativehumidity_2m;

  const data = [];

  for (let i = 0; i < 24 * 4; i++) {
    const time = i % 24;

    const rssValue = phs(
      temps[i],
      temps[i] + 20,
      humidities[i],
      windSpeeds[i] * 0.3,
      100,
      1,
      1
    );

    let res = rssValue.wp / wDivider;

    if (res > 1) {
      res = 1;
    }

    res = parseFloat(res.toFixed(2));

    data.push({ time: time, riskValue: res, divider: wDivider });
  }

  // subArrays contains all the data for each day, 0: today, 1: tmr: 2: etc.
  const subArrays = [
    data.slice(0, 24),
    data.slice(24, 48),
    data.slice(48, 72),
    data.slice(72, 96),
  ];

  const currentRiskValue = data[0].riskValue;

  const maxLevelForecast = [];

  for (const d of subArrays) {
    const max = findTheMaxRiskValue(d);
    maxLevelForecast.push(max);
  }

  const todayMax = maxLevelForecast[0].maxRiskValue;

  return {
    currentRiskValue: currentRiskValue,
    todayData: subArrays[0],
    // data: subArrays,
    todayMax: todayMax,
    todayMaxLevel: maxLevelForecast[0].maxRiskLevel,
    todayMaxRiskValue: maxLevelForecast[0].maxRiskValue,
  };
}

module.exports = {
  getHSSData: getHSSData,
};
