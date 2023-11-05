import React, { Component, useCallback, useEffect, useMemo, useState } from "react";
import { Col, Row, Collapse, Button } from "antd";
import { cloneDeep } from 'lodash';
import Router, { withRouter } from "next/router";
import { LanguageHelper } from "../helpers/languageHelper";
import {
  loadAgeGroupTips,
  loadAllGeneralTips,
  loadGeneralTips,
  loadDetailedRecommendationTips,
} from "../helpers/tipHelper";
import Chart from "./Chart";
import ChartForPublicDisplay from "./ChartForPublicDisplay";
import BottomLegend from "./BottomLegend";
import Image from "next/image";
import LoadingCard from "./LoadingCard";
import PopOver from "./Popover";
import AgeGroupRisk from "./AgeGroupRisk";
// import CustomizedMap from "./CustomizedMap";
import { SettingOutlined } from "@ant-design/icons";
import {useLanguage} from "../hooks/useLanguage"
import { useRecoilValue } from 'recoil'
import { locationState } from '../store/location'
import dynamic from 'next/dynamic'
import ButtonGroup from './addnewpeople'; // Please make sure the path is correct
import { HoverScaleText } from "./motionEffect";
//yzz
import { useInView } from 'react-intersection-observer';



// Client Components:
const CustomizedMap = dynamic(() => import("./CustomizedMap"))
// const Chart = dynamic(() => import("./Chart"))


const { Panel } = Collapse;

//User information settings
const handlePersonaliseRiskClick = () => {
  console.log("Personalise HSS Risk button clicked.");
  // Navigate to a new page using a Router object
  Router.push('/SettingPage');
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const HssRiskDisplay = (props) => {
// 1. Add a new state variable to track the currently activated panel
  const [activePanelKey, setActivePanelKey] = useState(null);
  // 2. Define a function to handle panel changes and set activePanelKey
  const handlePanelChange = (key) => {
    setActivePanelKey(key.length ? key[0] : null);
  };
  const [shouldRenderMap, setShouldRenderMap] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true, //Only trigger once
  });


  const {
    isPublicDisplay,

    dataForPublicDisplay,
    data,
    currentRiskValue,
    forcasts,
    chartType,
    maxLevelForecast,
    legendNow,
    legendMax,
    portialLegendNow,
    portialLegendMax,

    languageHelper
  } = props

  const riskStyles = {
    Extreme: { backgroundColor: '#BA2011', color: 'white', fontWeight: 'bold' },
    High: { backgroundColor: '#ED5711', color: 'white', fontWeight: 'bold' },
    Moderate: { backgroundColor: '#FFA600', color: 'white', fontWeight: 'bold' },
    Low: { backgroundColor: '#52B795', color: 'white', fontWeight: 'bold' },
  };
  const HssStyles = {
    detailedRecommendationMain: {
    width: '100%'},
    detailedRecommendatonImageCol: {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'flex-end', // 'right' is not a valid value for justifyContent, using 'flex-end' instead
      width: '15%',
    },
    detailedRecommendatonTextCol: {
      width: '80%',
    },
    detailedRecommendationText: {
      marginLeft: '2%',
    },
    riskTipCol: {
      width: '100%',
      marginBottom: '2%',
      marginTop: '1%',
    },
    generalTipRow: {
      width: '100%',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex', // Assuming that you want to align the items in a row using flexbox
    },
    currentRiskLabelRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
    },
    riskLevelHeader: {
      height: '5px',
      marginRight: '10px',
    },
    riskLevelLabel: {
      fontSize: '30px',
      fontWeight: 'bold',
      textDecoration: 'underline',
      marginLeft: '1%',
      marginTop: '6px',
      marginBottom: '6px',
      height: '25px',
    },
    currentRiskLabelMaxRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50px',
    },
    riskLevelHeaderTodayMax: {
      fontSize: '17px',
      marginRight: '10px',
    },
    riskLevelTodayMaxLabel: {
      fontSize: '22px',
      fontWeight: 'bold',
      textDecoration: 'underline',
      marginLeft: '1%',
      whiteSpace: 'nowrap',
    },
    riskLevelHeaderTodayMaxTime: {
      marginLeft: '1%',
      fontSize: '15px',
    },
    // personalizedButton: {
    //   backgroundColor: gray[10], 
    //   color: 'white', 
    //   justifyContent:'center',
    // },
    collapseForecast: {

      marginBottom: '10px', 
      marginTop: '5px',
  },
  forcastRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    align: 'middle',
    height:'30px'
  },
  
  forcastLevelMainRow: {
    height: '30px',
    width: '10%',
    display:'flex',
    justifyContent: 'flex-end',
  },
  
  forcastLevelMainRowLabel: {
    textAlign: 'center',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  maxRiskLevelText:  {
    color: 'white',
    fontWeight: 'bold',
    margin:'0 auto',
  },
  maxRiskLevelDiv: {
        borderRadius: '5px',
        textAlign: 'center',
        Width: '100px',
        height: '30px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
  publicDisplayContainer: {
    width: '100%',
    display: 'flex',
    alignitems: 'center',
    justifycontent: 'center',
  },
  
  publicDisplayInnerContainer: {
    width: '90%',
    margintop: '2%',
  },
  container: {
    width: '100%',
    marginbottom: '1%',
  }
}


  const [loading, setLoading] = useState(true)
  const [riskLevel, setRiskLevel] = useState('Extreme')
  const [riskStyle, setRiskStyle] = useState(riskStyles.Extreme)
  const [ageGroupTips, setAgeGroupTips] = useState({})
  const [allGeneralTips, setAllGeneralTips] = useState({})
  const [generalTips, setGeneralTips] = useState({})
  const [detailedRecommendationTips, setDetailedRecommendationTips] = useState({})
  const parameters = useRecoilValue(locationState)
  const translation = useLanguage(languageHelper, 'CurrentHssRiskDisplay')

  const generateRiskDisplay = useCallback((generalTips, allGeneralTips) => {
    let currentRiskLevel = riskLevel;
    let riskStyle = riskStyles.Extreme;
    let general = cloneDeep(generalTips)

    if (currentRiskValue < 0.25) {
      currentRiskLevel = "Low";
      riskStyle = riskStyles.Low;
      general = allGeneralTips.low;
    } else if (currentRiskValue < 0.5 && currentRiskValue >= 0.25) {
      currentRiskLevel = "Moderate";
      riskStyle = riskStyles.Moderate;
      general = allGeneralTips.moderate;
    } else if (currentRiskValue < 0.75 && currentRiskValue >= 0.5) {
      currentRiskLevel = "High";
      riskStyle = riskStyles.High;
      general = allGeneralTips.high;
    }
    setRiskLevel(currentRiskLevel)
    setRiskStyle(riskStyle)
    setGeneralTips(general)
  }, [currentRiskValue, riskStyle])

  const loadTips = useCallback(async () => {
    setLoading(true)
    //加载提示，状态更新，风险显示加成
    const { ageGroupTips = {} } = await loadAgeGroupTips();
    const { allGeneralTips = {} } = await loadAllGeneralTips();
    const { generalTips = {} } = await loadGeneralTips();
    const { detailedRecommendationTips = {} } = await loadDetailedRecommendationTips();

    setAgeGroupTips(ageGroupTips)
    setAllGeneralTips(allGeneralTips)
    setGeneralTips(generalTips)
    setDetailedRecommendationTips(detailedRecommendationTips)

    generateRiskDisplay(generalTips, allGeneralTips);
    setLoading(false)
  }, [])

  useEffect(() => {
    loadTips()
    setRiskStyle(riskStyles[riskLevel]);
}, [riskLevel]);

  const calculateRiskLevel = useCallback((riskValue) => { //Design corresponding style class names according to risk levels
    let res = "Extreme";
    let resStyle = riskStyles.Extreme;
    if (riskValue < 0.25) {
      res = "Low";
      resStyle = riskStyles.Low;
    } else if (riskValue < 0.5) {
      res = "Moderate";
      resStyle = riskStyles.Moderate;
    } else if (riskValue < 0.75) {
      res = "High";
      resStyle = riskStyles.High;
    }

    return {
      riskLevel: res,
      riskStyle: resStyle,
    };
  }, [])

// Set the font size to 20px
  const categoryHeaderStyle = {
    fontSize: '18px'
  }
  ;


 const recommendations = {
  "Low": {
      [translation.CoolYourself]: {
          icon: `${basePath}/icons/ice-cubes.png`,
          tips: [{ tip: translation.DrinkWater, imgSrc: `${basePath}/icons/water-bottle.png` }]
      },
      [translation.UseFansEffectively]: {
          icon: `${basePath}/icons/Use_fans.webp`,
          tips: [{ tip: translation.UseFans, imgSrc: `${basePath}/icons/fan.png` }]
      },
      [translation.KeepYourHouseCool]: {
          icon: `${basePath}/icons/house_cool.webp`,
          tips: [
              { tip: translation.OpenWindows, imgSrc: `${basePath}/icons/ventilation.png` },
              { tip: translation.BlockSunlight, imgSrc: `${basePath}/icons/blinds.png` },
              { tip: translation.SetAC, imgSrc: `${basePath}/icons/ac.png` },
              { tip: translation.UseEvaporativeCooler, imgSrc: `${basePath}/icons/evaporative.png` }
          ]
      },
      [translation.PlanYourDay]: {
          icon: `${basePath}/icons/calendar.webp`,
          tips: [{ tip: translation.WearLightClothing, imgSrc: `${basePath}/icons/tank-top.png` }]
      }
  },
  "Moderate": {
      [translation.CoolYourself]: {
          icon: `${basePath}/icons/ice-cubes.png`,
          tips: [{ tip: translation.DrinkHourly, imgSrc: `${basePath}/icons/slush-drink.png` },
                 { tip: translation.WetTowel, imgSrc: `${basePath}/icons/squeeze.png` }]
      },
      [translation.UseFansEffectively]: {
          icon: `${basePath}/icons/Use_fans.webp`,
          tips: [{ tip: translation.UseMistingFan, imgSrc: `${basePath}/icons/misting_fan.png` }]
      },
      [translation.KeepYourHouseCool]: {
          icon: `${basePath}/icons/house_cool.webp`,
          tips: [{ tip: translation.SetAC, imgSrc: `${basePath}/icons/ac.png` }]
      },
      [translation.PlanYourDay]: {
          icon: `${basePath}/icons/calendar.webp`,
          tips: []
      }
  },
  "High": {
      [translation.CoolYourself]: {
          icon: `${basePath}/icons/ice-cubes.png`,
          tips: [{ tip: translation.DrinkHourly, imgSrc: `${basePath}/icons/slush-drink.png` },
                 { tip: translation.WetSkin, imgSrc: `${basePath}/icons/spray.png` },
                 { tip: translation.WetTowel, imgSrc: `${basePath}/icons/squeeze.png` }]
      },
      [translation.UseFansEffectively]: {
          icon: `${basePath}/icons/Use_fans.webp`,
          tips: [{ tip: translation.UseMistingFan, imgSrc: `${basePath}/icons/misting_fan.png` }]
      },
      [translation.KeepYourHouseCool]: {
          icon: `${basePath}/icons/house_cool.webp`,
          tips: [{ tip: translation.SetAC, imgSrc: `${basePath}/icons/ac.png` }]
      },
      [translation.PlanYourDay]: {
          icon: `${basePath}/icons/calendar.webp`,
          tips: [{ tip: translation.RestMore, imgSrc: `${basePath}/icons/alone.png` }]
      }
  },
  "Extreme": {
      [translation.CoolYourself]: {
          icon: `${basePath}/icons/ice-cubes.png`,
          tips: [{ tip: translation.DrinkHourly, imgSrc: `${basePath}/icons/slush-drink.png` },
                 { tip: translation.WetSkin, imgSrc: `${basePath}/icons/spray.png` },
                 { tip: translation.WetTowel, imgSrc: `${basePath}/icons/squeeze.png` }]
      },
      [translation.UseFansEffectively]: {
          icon: `${basePath}/icons/Use_fans.webp`,
          tips: [{ tip: translation.UseMistingFan, imgSrc: `${basePath}/icons/misting_fan.png` }]
      },
      [translation.KeepYourHouseCool]: {
          icon: `${basePath}/icons/house_cool.webp`,
          tips: [{ tip: translation.SetAC, imgSrc: `${basePath}/icons/ac.png` }]
      },
      [translation.PlanYourDay]: {
          icon: `${basePath}/icons/calendar.webp`,
          tips: [{ tip: translation.AvoidStrenuousActivities, imgSrc: `${basePath}/icons/no-running.png` }]
      }
  }
};

const detailedRecommendation = useCallback((riskLevel) => {
  const data = recommendations[riskLevel];
  if (!data) return null;

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
            {translation.GuideHeader}
        </div>
        <Collapse style={{width:"100%"}} defaultActiveKey="1">

            {Object.entries(data).map(([category, { icon, tips }], index) => (

                <Collapse.Panel
                    header={
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <img src={icon} alt={category} width={35} height={35} />
                            <span style={{ ...categoryHeaderStyle, flexGrow: 1, marginLeft: '10px' }}>{category}</span>
                        </div>
                    }
                    key={index + 1}
                >
                    {tips.map(({ tip, imgSrc }, tipIndex) => (
                        <div key={tipIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', borderBottom: '1px solid #e8e8e8', paddingBottom: '10px' }}>
                            <img src={imgSrc} alt={tip} width={35} height={35} />
                            <span style={{ flexGrow: 1, marginLeft: '10px' }}>{tip}</span>
                        </div>
                    ))}
                </Collapse.Panel>
            ))}
        </Collapse>
    </div>
  );
}, [basePath, translation]);





const riskTips = useMemo(() => {  //Rendering risk warning
    return (
      <Row>
      
        <Col style={HssStyles.riskTipCol}>
          {generalTips?.map?.(({ key, icon, label }) => (
            <Row
              key={key}
              style={HssStyles.generalTipRow}
            >
              <Image
                src={basePath + icon}
                alt=""
                width={35}
                height={35}
                style={{ marginRight: '2px' }}
              />
              <p style={{ fontSize: '18px',lineHeight: '0.8' }}>{translation?.[label]}</p>
            </Row>
          ))}
        </Col>
      </Row>
    );
  }, [generalTips, translation])


  const renderRiskValueDisplay = useMemo(() => {

    const maxRiskLevel = calculateRiskLevel(maxLevelForecast?.[0]?.maxRiskValue)?.riskLevel
    const a = detailedRecommendation(riskLevel)

    return loading ? (
      <LoadingCard />
  ) : (
      <div style={{
        width: '100%',
        // height: '500px',
        display: 'flex',
        alignItems: 'center', // Center vertically
        justifyContent: 'center',
        background: `${riskStyles[riskLevel].backgroundColor}`,
      //  background: `linear-gradient(to bottom, transparent 0%, ${riskStyles[riskLevel].backgroundColor} 50%)`, // 从透明到风险颜色的渐变
    }}>
          {detailedRecommendationTips ? (
              <div>
                  <Col>
            <Row span={3} style={HssStyles.currentRiskLabelRow}>
            <p style={{ ...HssStyles.riskLevelHeader, fontSize: '24px' }}>
                                    {translation.CurrentHssLabel}
                                </p>
                               
                                    <PopOver
                                        content={a}
                                        child={
                                            <p style={{ ...HssStyles.riskLevelLabel, fontSize: '32px' }}>
                                                {translation?.[riskLevel]}
                                            </p>
                                        }
                                    />
                                
                            </Row>
  
                     {/* Add new button */}
                      <Row justify="center" style={{ marginTop: '20px' }}>
                        <Button 
                          onClick={handlePersonaliseRiskClick} 
                          style={{backgroundColor:"#005B8E", display: 'inline-flex', alignItems: 'center', color: '#fff', fontSize:'16px'}}  // 保持按钮文字颜色为白色
                          type="primary"
                          icon={<img src="https://s2.loli.net/2023/10/22/9NxvWwmOjILct6g.png" style={{ width: '20px', marginRight: '8px' }} />}  // 将图标嵌入到按钮中，并调整大小
                        >
                            {translation.handlePersonaliseRiskClick}
                        </Button>
                    </Row>
                  </Col>
                  {riskTips}
                  <Row style={{ ...HssStyles.currentRiskLabelMaxRow, marginBottom: "39px" }}>
                            <p style={HssStyles.riskLevelHeaderTodayMax}>
                                {translation.TodayMaxHssLabel}
                            </p>
                            <PopOver
                                content={a}
                                child={
                                   
                                        <p style={HssStyles.riskLevelTodayMaxLabel}>
                                            {translation[maxRiskLevel]}
                                        </p>
                                       
                                }
                            />
              </Row>
          </div>
          ) : null}
      </div>
  );
  
   }, [translation, maxLevelForecast, detailedRecommendationTips, riskLevel, riskTips, detailedRecommendation, calculateRiskLevel])

// //The third component, three groups of people,
   const renderAgeGroupRiskDisplay = useMemo(() => { //Display of risk value and age group risk display
   // console.log('Cookiestest:', data);

    return loading ? (
      
      <LoadingCard />
    ) : (
      <AgeGroupRisk
        loading={loading}
        data={data}
        currentRiskValue={currentRiskValue}
        maxLevelForecast={maxLevelForecast}
      />
    );


  }, [loading,data,currentRiskValue,maxLevelForecast])

//New features add new people

const renderButtonGroup = useMemo(() => {
  return  (
    <ButtonGroup/>
  );
}, []);

  const handleSettingPage = useCallback(() => {  //Navigate to the setting page
    Router.push({
      pathname: "/SettingPage",
    });
  }, [])

  const renderPersonalizedSettingsButton = useMemo(() => {
    return loading ? (
      <LoadingCard />
    ) : (
      <div>
        <Row>
          {/* <Button
            id={hssRiskDisplayStyle.personalizedButton}
            type="primary"
            onClick={handleSettingPage}
            icon={<SettingOutlined />}
          >
            {translation.PersonalizedButton}
          </Button> */}
        </Row>
        <BottomLegend
          legendNow={legendNow}
          legendMax={legendMax}
          loading={loading}
          portialLegendNow={portialLegendNow}
          portialLegendMax={portialLegendMax}
        />
      </div>
    );
  }, [translation, loading, legendNow, legendMax, portialLegendNow, portialLegendMax])

  const renderDetailedRecommendationCollapse = useMemo(() => {
    return loading ? (
      <LoadingCard />
    ) : (
      <div>
        <Collapse
          style={HssStyles.collapseForecast}
          onChange={handlePanelChange}
          activeKey={activePanelKey}
        >
          <Panel
            header={
                <div
                    style={{
                        padding: '0', // Reduce the padding value on the left
                        fontSize: '20px !import',// Use !important rule
                        width: '100%',
                        backgroundColor: activePanelKey === '1' ? '#E0F2F1' : 'transparent',
                    }}
                >
                    <span>{translation.DetailedRecommendations}</span>
                </div>
            }
            key="1"
            style={{
              backgroundColor: activePanelKey === '1' ? '#E0F2F1' : 'transparent', // Modify background color
            }}
          >
            {detailedRecommendationTips ? detailedRecommendation(riskLevel) : null}
          </Panel>
        </Collapse>
      </div>
    );
  }, [loading, detailedRecommendationTips, riskLevel, activePanelKey]);


  const todayForecastDividerHeader = useMemo(() => {
    let maxRiskValue = maxLevelForecast?.[0]?.maxRiskValue;
    let riskData = calculateRiskLevel(maxRiskValue);

    const a = detailedRecommendation(riskData.riskLevel)
   
    return (
      <Row 
      gutter = {[8,24]}
      style={HssStyles.forcastRow}>
        <Col xs={10} sm={6} md={6} lg={6} xl={6}>
          {translation.TodaysForecastLabel}</Col>
        <Col 
        xs={8} sm={14} md={14} lg={14} xl={14}
        style={HssStyles.forcastLevelMainRow}>
          <div style={HssStyles.forcastLevelMainRowLabel}>
            <p>{translation.MaxRiskLabel}</p>
          </div></Col>
          <Col xs={6} sm={4} md={4} lg={4} xl={4} 
          style={{borderRadius: '5px',
                                  textAlign: 'center',
                                  width: '140px',
                                  height: '30px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  ...riskData.riskStyle}}>
          <PopOver
            content={a}
            trigger="click"
            child={
              <div>
                  <p>
                    {translation[riskData.riskLevel]}
                </p>
              </div>
            }
          />
        </Col>
      </Row>
    );
          
  }, [maxLevelForecast, translation, calculateRiskLevel, detailedRecommendation])

  const renderTodayForecastCollapse = useMemo(() => {
    return loading ? (
      <LoadingCard />
    ) : (
      <div>
        <Collapse
          style={HssStyles.collapseForecast}
          defaultActiveKey={["1"]}
        >
          <Panel header={todayForecastDividerHeader} key="1">
            <Col>
              <Chart
                parameters={parameters}
                data={data[0]}
                loading={loading}
                chartType={chartType}
              />
            </Col>
          </Panel>
        </Collapse>
      </div>
    );
  }, [loading, parameters, data, chartType, todayForecastDividerHeader])



  const collapseHeader = useCallback((forecast, max) => {
    // console.log('258', JSON.parse(JSON.stringify(max)))
    console.log('259',forecast)
    const a = detailedRecommendation(max.maxRiskLevel)
    console.log('261',a)
    const maxRiskStyle = riskStyles[max?.["maxRiskLevel"]];
    return (
      <Row 
      gutter={[8,24]}
      style={HssStyles.forcastRow}>
        <Col xs={10} sm={6} md={6} lg={6} xl={6}>{forecast?.label + "-" + forecast?.date}</Col>
        <Col xs={8} sm={14} md={14} lg={14} xl={14}  
        style={HssStyles.forcastLevelMainRow}>
          <div style={HssStyles.forcastLevelMainRowLabel}>
            <p>{translation.MaxRiskLabel}</p>
          </div>
          </Col>
          <Col xs={6} sm={4} md={4} lg={4} xl={4}
           style={{borderRadius: '5px',
                                  textAlign: 'center',
                                  width: '140px',
                                  height: '30px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  ...maxRiskStyle}}>
          <PopOver
            content={a}

            trigger="click"
            child={
              <div
              
            >
              <p style={HssStyles.maxRiskLevelText}>
                {translation[max?.["maxRiskLevel"]]}
              </p>
            </div>
            }
          />
          </Col>

        
      </Row>
    );
  }, [translation, detailedRecommendation])




  const renderNextDaysForecast = useMemo(() => {

    return loading ? (
      <LoadingCard />
    ) : (
      <div>
        {/* <Divider orientation="left">{this.state.translation.ForecastsForNextDaysLabel}</Divider> */}
        {forcasts.map((forecast, key) => {

const a = collapseHeader(
  forecast,
  maxLevelForecast.slice(1)[key]
)
          return (
            <Collapse
              key={key + "collspa"}
              style={HssStyles.collapseForecast}
            >
              <Panel
                header={a}
                key={key + "panel"}
              >
                <Col key={key + "col"}>
                  <Chart
                    maxLevel={maxLevelForecast.slice(1)[key]}
                    parameters={parameters}
                    data={data.slice(1)[key]}
                    loading={loading}
                    chartType={chartType}
                  />
                </Col>
              </Panel>
            </Collapse>
          );
        })}
      </div>
    );
  }, [loading, forcasts, maxLevelForecast, parameters, data, chartType, collapseHeader])


//地图lazyloading
  useEffect(() => {
    if (inView && parameters) {
      setShouldRenderMap(true);
    }
  }, [inView, parameters]);

  const renderMap = useMemo(() => {
    return loading ? (
      <LoadingCard />
    ) : shouldRenderMap ? (
      <CustomizedMap
        centerCoordinates={[parameters.latitude, parameters.longitude]}
        markerCoordinates={[parameters.latitude, parameters.longitude]}
        content={detailedRecommendationTips ? detailedRecommendation(riskLevel) : null}
      />
    ) : (
      11
    );
  }, [loading, shouldRenderMap, parameters, detailedRecommendationTips, detailedRecommendation]);


  const renderTodayForecastCollapsePublicDisplay = useMemo(() => {
    return loading ? (
      <LoadingCard />
    ) : (
      <div>
        <Collapse
          style={HssStyles.collapseForecast}
          defaultActiveKey={["1"]}
        >
          <Panel header={todayForecastDividerHeader} key="1">
            <Col>
              <ChartForPublicDisplay
                parameters={parameters}
                dataForPublicDisplay={dataForPublicDisplay}
                loading={loading}
              />
            </Col>
          </Panel>
        </Collapse>
      </div>
    );
  }, [loading, parameters, dataForPublicDisplay, todayForecastDividerHeader])

  const publicDisplayMainView = useMemo(() => {
    return (
      <div style={HssStyles.publicDisplayContainer}>
        <div style={HssStyles.publicDisplayInnerContainer}>
          {renderRiskValueDisplay}

          {/* {this.renderAgeGroupRiskDisplay()} */}

          {renderTodayForecastCollapsePublicDisplay}
        </div>
      </div>
    );
  }, [renderRiskValueDisplay, renderTodayForecastCollapsePublicDisplay])


  return isPublicDisplay
    ? publicDisplayMainView
    :
    <div style={HssStyles.container}>
      {renderRiskValueDisplay}

      {renderButtonGroup}
      {renderPersonalizedSettingsButton}

      {renderDetailedRecommendationCollapse}

      {renderTodayForecastCollapse}

      {renderNextDaysForecast}
      <div ref={ref}>
        {renderMap}
      </div>

    </div>
    ;
}

export default withRouter(LanguageHelper(HssRiskDisplay));