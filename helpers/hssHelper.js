import { parseJSONValues, getAllValuesGivenKey } from "./jsonHelper";
import axios from "axios";
import { phs } from "jsthermalcomfort";
import { checkUserLoggedIn } from "./authHelper";
import { readData } from "./dataHelper";
import { getTimezone } from "../helpers/locationHelper";
import {getAllValue} from "./storage"

const riskStyles = {
  Extreme: { backgroundColor: '#BA2011', color: 'white', fontWeight: 'bold' },
  High: { backgroundColor: '#ED5711', color: 'white', fontWeight: 'bold' },
  Moderate: { backgroundColor: '#FFA600', color: 'white', fontWeight: 'bold' },
  Low: { backgroundColor: '#52B795', color: 'white', fontWeight: 'bold' },
};

export function findTheMaxRiskValue(data) {   // Find the maximum risk value from the given data, and determine the risk level based on this risk value
  let maxRisk = data.reduce((max, obj) => {
    return obj.riskValue > max.riskValue ? obj : max;
  });
  let maxRiskValue = maxRisk.riskValue;
  let maxRiskLevel = "Extreme";
   let style = riskStyles.Extreme;
  if (maxRiskValue < 0.75) {
    maxRiskLevel = "High";
    style = riskStyles.High;
  }
  if (maxRiskValue < 0.5) {
    maxRiskLevel = "Moderate";
    style = riskStyles.Moderate;
  }
  if (maxRiskValue < 0.25) {
    maxRiskLevel = "Low";
     style = riskStyles.Low;
  }
  return {
    maxRiskValue: maxRiskValue,
    maxRiskLevel: maxRiskLevel,
    style: style,
    time: maxRisk.time,
  };
}
function getData(data) {
  let wDivider = 1;

  //load personal setting from local storage
  if (data) {
    let wValues = getAllValuesGivenKey(data, "w");

    const isAllUndefined = (arr) =>
      arr.every((val) => typeof val === "undefined");

    //if is all undefined, means user did not set any personalized setting, return 1;
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

export async function getWDivider() {  //A value obtained based on user information
  return new Promise((resolve, reject) => {
    checkUserLoggedIn(async (isLoggedIn, user) => {
      const allValue=getAllValue()
      if (isLoggedIn && user && user.emailVerified) {
        try {
          const dataFromFirebase = await readData(`users/${user.uid}`);
          console.log('dataFromFirebase', dataFromFirebase)
          const parsedData = parseJSONValues(dataFromFirebase.settings);
          const wDivider = getData(parsedData);
          resolve(wDivider);
        } catch (error) {
          console.error("Operation failed:", error);

          let data = null;
          if (allValue) {
            data = parseJSONValues(allValue);
          }
          const wDivider = getData(data);
          resolve(wDivider);
        }
      } else {
        let data = null;
        if (allValue) {
          data = parseJSONValues(allValue);
        }
       

        const wDivider = getData(data);
        resolve(wDivider);
      }
    });
  });
}

export async function getHSSData(geoData, currentHour, translation) {
  let wDivider = 1; //Give wdivider an initial value
  try {
    wDivider = await getWDivider();
  } catch (error) {
    console.error("Error getting wDivider:", error);
    wDivider = 1;
  }

  let timeZone = getTimezone(geoData.latitude, geoData.longitude); //Get time zone

  const response = await axios.get(`https://api.open-meteo.com/v1/forecast`, { //axios requests weather data
    params: {
      latitude: geoData.latitude,
      longitude: geoData.longitude,
      hourly: "temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m",
      timezone: timeZone,
      forecast_days: "4",
    },  //status update
  });

  const hourlyData = response.data.hourly; //Hourly information of weather information obtained from api

  let temps = hourlyData.temperature_2m;
  let windSpeeds = hourlyData.windspeed_10m;
  let humidities = hourlyData.relativehumidity_2m; //Temperature, humidity, wind speed, use the parameters of the previous hourly status update to query

  const data = []; //Initialize data and store risk values

  for (let i = 0; i < 24 * 4; i++) {
    const time = i % 24;

    let rssValue = phs(
      temps[i],
      temps[i] + 20,
      humidities[i],
      windSpeeds[i] * 0.3,
      100,
      1,
      1
    ); 

    let res = rssValue.wp / wDivider; //Loop through each hour and calculate the risk value

    if (res > 1) {
      res = 1;
    }

    res = parseFloat(res.toFixed(2)); //Convert res to a floating point number with two decimal places

    data.push({ time: time, riskValue: res, divider: wDivider }); //Save these data in the data array
  }

  const dataForPublicDisplay = data.slice(0, 25); //Create an array containing the previous 25 hours
  //subArrays contains all the data for each day, 0: today, 1: tmr: 2: etc.
  const subArrays = [ 
   data.slice(currentHour, 24),
    data.slice(24, 48),
    data.slice(48, 72),
    data.slice(72, 96),
  ]; //Create an array containing data for each day

  let currentRiskValue = data[currentHour].riskValue; //Get the risk value at the current time

  let maxLevelForecast = []; //Create an empty array to store the maximum risk value

  for (let d of subArrays) {
    let max = findTheMaxRiskValue(d);
    maxLevelForecast.push(max);
  }  //Traverse each day's data to find the maximum daily risk value and store it

  let todayMax = maxLevelForecast[0].maxRiskValue; //Get today's maximum risk value
  //current label
  let current = translation.current;

  //max label
  let maxLabel = translation.maxLabel;

  let now = [];
  let max = [];
  let portialNow = [];
  let portialMax = [];

  if (currentRiskValue == todayMax) {
    maxLabel = translation.currentMax;
    max.push({ riskValue: todayMax, y: 0.5, label: maxLabel });
  } else {
    now.push({ riskValue: currentRiskValue, y: 0.5, label: current });
    max.push({ riskValue: todayMax, y: 0.5, label: maxLabel });
  }

  if (Math.abs(currentRiskValue - todayMax) < 0.10) {
    maxLabel = translation.currentMax;
    portialMax.push({ riskValue: todayMax, y: 0.5, label: maxLabel });
  } else {
    portialNow.push({ riskValue: currentRiskValue, y: 0.5, label: current });
    portialMax.push({ riskValue: todayMax, y: 0.5, label: maxLabel });
  }

  return {
    dataForPublicDisplay: dataForPublicDisplay,
    currentRiskValue: currentRiskValue,
    data: subArrays,
    maxLevelForecast: maxLevelForecast,
    now: now,
    max: max,
    portialNow: portialNow,
    portialMax: portialMax,
  };
}
