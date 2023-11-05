import { Col, message } from "antd";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import Layout from "./layout";
import cookie from "react-cookies";
import dayjs from "dayjs";
import { withRouter } from "next/router";
import { LanguageHelper } from "../helpers/languageHelper";
import { reverseGeocode, getTimezone } from "../helpers/locationHelper";
import AddressDropDown from "../components/AddressDropDown";
import HssRiskDisplay from "../components/HssRiskDisplay";
import LoadingCard from "../components/LoadingCard";
import showAlert from "../components/Notification";
import { getHSSData } from "../helpers/hssHelper";
import { useLanguage } from "../hooks/useLanguage";
import { useRecoilState } from 'recoil'
import { locationState } from '../store/location'
import { refreshState } from '../store/useInfo';
import {
  createOrUpdateData,
  deleteData,
  readData,
} from "../helpers/dataHelper";
import { parseJSONValues, getAllValuesGivenKey } from "../helpers/jsonHelper";
import { checkUserLoggedIn, getUserInfo } from "../helpers/authHelper";
import { ImportOutlined } from "@ant-design/icons";

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const HomePage = (props) => {
  const [refresh, setRefresh] = useRecoilState(refreshState);

  const { isPublicDisplay, publicDisplayGeoData, languageHelper, getHssDataCallBack } = props

  const [loading, setLoading] = useState(false)
  const [reloadAddress, setReloadAddress] = useState(false)
  const [data, setData] = useState([])

  const [addressDefaultValue, setAddressDefaultValue] = useState("Parramatta Westfield, NSW, 2150")
  const [hour, setHour] = useState(0)
  const [forcasts, setForcasts] = useState([])
  const [maxLevelForecast, setMaxLevelForecast] = useState([])
  const [chartType, setChartType] = useState("LineChart")
  const [currentRiskValue, setCurrentRiskValue] = useState(0)
  const [legendNow, setLegendNow] = useState([])
  const [legendMax, setLegendMax] = useState([])
  const [portialLegendNow, setPortialLegendNow] = useState([])
  const [portialLegendMax, setPortialLegendMax] = useState([])
  const [geoData, setGeoData] = useState({})
  const [dataForPublicDisplay, setDataForPublicDisplay] = useState({})

  const [location, setLocation] = useRecoilState(locationState)
  const translation = useLanguage(languageHelper, 'HomePage')

// Get the time in the next 3 days and display it above the chart
  const getWillDay = useCallback((day = 0) => {
    let willDay = dayjs().add(day, 'day')
    let tomorrowNum = willDay.day()
    let tomorrowDate = willDay.format('DD/MM')
    return [tomorrowNum, tomorrowDate]
  }, [])

  const setDay = useCallback(() => {
    let forcastWeekday = [1, 2, 3].map((item) => {
      const [weekNum, dayDate] = getWillDay(item)
      let aaa = week[weekNum]
      return { label: aaa, date: dayDate }
    })

    let hour = dayjs().hour();
    setHour(hour == 23 ? 0 : hour);
    setForcasts(forcastWeekday);
  }, [])

//Mainly a function used to obtain risk values
  const setLoadedData = useCallback(async (geoData = {}) => {
    try {
      // 
      if (Object.keys(geoData).length <= 0) return null;

      const hssRiskData = await getHSSData(
        geoData,
        hour,
        translation
      );
      console.log('assdf', hssRiskData)
      
      const { dataForPublicDisplay, currentRiskValue, data, maxLevelForecast, now, max, portialNow, portialMax, } = hssRiskData || {}
      if (isPublicDisplay) {
        getHssDataCallBack({
          dataForPublicDisplay,
          hour,
        });
      }
      const { suburb, state, postcode } = geoData
      setAddressDefaultValue(`${suburb}, ${state}, ${postcode}`)
      setGeoData(geoData)
      setCurrentRiskValue(currentRiskValue)
      setData(data)
      // setLoading(false)
      setMaxLevelForecast(maxLevelForecast)
      setLegendMax(max)
      setLegendNow(now)
      setPortialLegendNow(portialNow)
      setPortialLegendMax(portialMax)
      setDataForPublicDisplay(dataForPublicDisplay)
    } catch (err) {
      console.log('loadData err', err)
    } finally {
      setLoading(false)
    }
  }, [hour, translation, getHssDataCallBack, isPublicDisplay])

//Function components that save user data in cookies and call them later
  const loadGeodataFromCookie = useCallback(() => {
    let geoData = cookie.load("geoData");
    if (geoData) {
      const { latitude, longitude } = geoData
      const timeZone = getTimezone(latitude, longitude);
      setLocation({
        latitude,
        longitude,
        hourly: "temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m",
        timezone: timeZone,
      })
    } else {
      geoData = { ...location };
    }
    setLoadedData(geoData);
  }, [])

//loaddata
  const loadData = useCallback(async () => {

    setLoading(true)
    try {
      const user = await getUserInfo(); //Get user information

      if (user && user.emailVerified) {
      
        try {

          console.log('uuu',user)
          const dataFromFirebase = await readData(`users/${user.uid}`); //Read user data from firebase
          const geoData = parseJSONValues(dataFromFirebase.geoData);//Use the parseJSONValues function to parse the geodata in the user information
          const timeZone = getTimezone(geoData.latitude, geoData.longitude); //Get the time zone
          // update status
          setLocation({
            latitude: geoData.latitude,
            longitude: geoData.longitude,
            hourly: "temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m", //This string is a set of parameters when querying weather data
            timezone: timeZone,
          })
          await setLoadedData(geoData);
        } catch (error) {
          console.error(
            "Get user geo data from firebase operation failed:",
            error
          );
          await loadGeodataFromCookie(); //Get data from cookie when error occurs
        }
      } else {
        await loadGeodataFromCookie(); //When the if statement does not hold, try to get data from the cookie
      }
    } catch (err) {
      console.log('loadData err', err)
    }
    // setLoading(false)
  }, [loadGeodataFromCookie, setLoadedData])

  useEffect(() =>{
    setDay()
    loadData()
    setRefresh(false);

  },[refresh])

  const handleLocateMeCallBack = useCallback(async () => {
    // Set the state of loading and reloadAddress
    setLoading(true);
    setReloadAddress(true);
  
    // error handling function
    const handleError = (error) => {
      setLoading(false);
      setReloadAddress(false);
  
      let errorMessage = "There was an error getting your location.";
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = "Location permission was denied.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          errorMessage = "The request to get user location timed out.";
          break;
        default:
          errorMessage = "An unknown error occurred.";
          break;
      }
      showAlert("error", "Location Error", errorMessage);
    };
  
  //Try to get the user's geographical location
     //Added positioning failure exception handling
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
  
      try {
        const data = await reverseGeocode(lat, lon);
        if (data) {
          const { postcode, suburb, state } = data;
          const jsonVal = {
            postcode,
            suburb,
            latitude: lat,
            longitude: lon,
            state,
          };
  
          const user = await getUserInfo();
          setAddressDefaultValue(`${suburb}, ${state}, ${postcode}`);
          let timezone = getTimezone(lat, lon);
          setLocation({
            latitude: lat,
            longitude: lon,
            suburb,
            postcode,
            hourly: "temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m",
            timezone,
          });
  
          if (user && user.emailVerified) {
            try {
              await createOrUpdateData(`users/${user.uid}`, { geoData: jsonVal });
            } catch (error) {
              cookie.save("geoData", JSON.stringify(jsonVal));
            }
          } else {
            cookie.save("geoData", JSON.stringify(jsonVal));
          }
          loadData();
        } else {
          showAlert("error", "Location Error", "Unable to get your location.");
        }
      } catch (error) {
        showAlert("error", "Geocoding Error", "Failed to reverse geocode your location.");
      }
  
      setLoading(false);
      setReloadAddress(false);
    }, handleError); //Note that the error handling callback function is added here
  }, [setLoading, setReloadAddress, showAlert, loadData]);
  


  const setDataWhenHandleAddressCallBack = useCallback((values, lat, lon, jsonVal) => {
    const [postcode, suburb, latitude, longitude, state] = values || []
    let timeZone = getTimezone(latitude, longitude);
    setLocation({
      latitude,
      longitude,
      suburb,
      postcode,
      //variable needed, unchanged
      hourly: "temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m",
      timezone: timeZone,
    })
    loadData();
  }, [])

  const handleAddressCallBack = useCallback(async (values) => { //Drop down box event
    const [postcode, suburb, lat, lon, state] = values || []
    const jsonVal = {
      postcode,
      suburb,
      latitude: lat,
      longitude: lon,
      state,
    };

    const user = await getUserInfo();
    if (user && user.emailVerified) {
      try {
        await createOrUpdateData(`users/${user.uid}`, { geoData: jsonVal }) //Create user information, obtain user uid, and assign jsonVal information to the user's geodata

      } catch (error) { //.catch method, used to handle the result returned by the createOrUpdateData function failure
        cookie.save("geoData", JSON.stringify(jsonVal));
      }
    } else {
      cookie.save("geoData", JSON.stringify(jsonVal));
    }
    setDataWhenHandleAddressCallBack(values)
  }, [])
 

  const renderAddressDropdown = useMemo(() => {
    return reloadAddress || loading ? (
      <LoadingCard />
    ) : (
      <AddressDropDown
        handleLocateMeCallBack={handleLocateMeCallBack}
        handleAddressCallBack={handleAddressCallBack}
        defaultValue={addressDefaultValue}
        geoData={geoData}
      />
    );
  }, [reloadAddress,geoData,loading,addressDefaultValue])
  // reloadAddress, loading, geoData, addressDefaultValue
  return (
    <div>
      <Layout>
      <Col>
        {isPublicDisplay ? null : renderAddressDropdown}
        {reloadAddress || loading ? (
          <LoadingCard />
        ) : (
          <HssRiskDisplay
            isPublicDisplay={isPublicDisplay}
            maxLevelForecast={maxLevelForecast}
            currentRiskValue={currentRiskValue}
            data={data}
            loading={loading}
            forcasts={forcasts}
            chartType={chartType}
            legendNow={legendNow}
            legendMax={legendMax}
            portialLegendNow={portialLegendNow}
            portialLegendMax={portialLegendMax}
            dataForPublicDisplay={dataForPublicDisplay}
          />
        )}
      </Col>
      </Layout>

    </div>
  )
}

export default withRouter(LanguageHelper(HomePage));