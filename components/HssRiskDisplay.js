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
import ButtonGroup from './addnewpeople'; // 请确保路径正确
import { HoverScaleText } from "./motionEffect";
//yzz
import { useInView } from 'react-intersection-observer';



// Client Components:
const CustomizedMap = dynamic(() => import("./CustomizedMap"))
// const Chart = dynamic(() => import("./Chart"))


const { Panel } = Collapse;

//用户信息设置
const handlePersonaliseRiskClick = () => {
  console.log("Personalise HSS Risk button clicked.");
  // 使用 Router 对象导航到新页面
  Router.push('/SettingPage');
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const HssRiskDisplay = (props) => {
// 1. 添加新的状态变量来跟踪当前激活的面板
  const [activePanelKey, setActivePanelKey] = useState(null);
  // 2. 定义一个函数来处理面板的改变，并设置 activePanelKey
  const handlePanelChange = (key) => {
    setActivePanelKey(key.length ? key[0] : null);
  };
  const [shouldRenderMap, setShouldRenderMap] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true, // 只触发一次
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
      fontSize: '15px',
      marginRight: '10px',
    },
    riskLevelTodayMaxLabel: {
      fontSize: '20px',
      fontWeight: 'bold',
      textDecoration: 'underline',
      marginLeft: '1%',
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

  const calculateRiskLevel = useCallback((riskValue) => { //根据风险等级设计相应的样式类名
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

// 设置字号为20px
  const categoryHeaderStyle = {
    fontSize: '18px'
  }
  ;

// 定义各个风险等级的建议
  const recommendations = {
    "Low": {
        "Cool yourself": [
            {tip: "Keep hydrated by drinking water", imgSrc: "/icons/water-bottle.png" }],
        "Use fans effectively": [
            {tip: "Use fans", imgSrc: "/icons/fan.png" }],
        "Keep your house cool": [
            {tip: "Open windows only if it is hotter inside than outside", imgSrc: "/icons/ventilation.png" },
            {tip: "Block sunlight using blinds or curtains", imgSrc: "/icons/blinds.png" },
            {tip: "Set the air conditioner at 27˚C and use a fan pointing at you", imgSrc: "/icons/ac.png" },
            {tip: "Use an evaporative cooler", imgSrc: "/icons/evaporative.png" },
        ],
        "Plan your day": [
            {tip: "Wear lightweight, loose-fitting clothing preferably white", imgSrc: "/icons/tank-top.png" }],
    },
    "Moderate": {
        "Cool yourself": [
            {tip: "Drink a glass of water every hour even if you do not feel thirsty", imgSrc: "/icons/slush-drink.png" },
            {tip: "Wrap a wet towel loosely around your head and neck", imgSrc: "/icons/squeeze.png" },
        ],
        "Use fans effectively": [
            {tip: "Use fans", imgSrc: "/icons/fan.png" },
            {tip: "Use a misting fan in a shaded well-ventilated area", imgSrc: "/icons/misting_fan.png" },
        ],
        "Keep your house cool": [
            {tip: "Block sunlight using blinds or curtains", imgSrc: "/icons/blinds.png" },
            {tip: "Open windows only if it is hotter inside than outside", imgSrc: "/icons/ventilation.png" },
            {tip: "Set the air conditioner at 27˚C and use a fan pointing at you", imgSrc: "/icons/ac.png" },
        ],
        "Plan your day": []
    },
    "High": {
        "Cool yourself": [
            {tip: "Drink a glass of water every hour even if you do not feel thirsty", imgSrc: "/icons/slush-drink.png" },
            {tip: "Keep your skin wet with a spray bottle or by applying water", imgSrc: "/icons/spray.png" },
            {tip: "Wrap a wet towel loosely around your head and neck", imgSrc: "/icons/squeeze.png" },
        ],
        "Use fans effectively": [
             {tip: "Use a misting fan in a shaded well-ventilated area", imgSrc: "/icons/misting_fan.png" },
        ],
        "Keep your house cool": [
            {tip: "Block sunlight using blinds or curtains", imgSrc: "/icons/blinds.png" },
            {tip: "Open windows only if it is hotter inside than outside", imgSrc: "/icons/ventilation.png" },
            {tip: "Set the air conditioner at 27˚C and use a fan pointing at you", imgSrc: "/icons/ac.png" },
            {tip: "Use an evaporative cooler", imgSrc: "/icons/evaporative.png" },
        ],
        "Plan your day": [
            {tip: "Wear lightweight, loose-fitting clothing preferably white", imgSrc: "/icons/tank-top.png" },
            {tip: "Rest more often, in a shaded place with natural air movement", imgSrc: "/icons/alone.png" },
            {tip: "Avoid strenuous activities", imgSrc: "/icons/no-running.png" },
            {tip: "Check on people who may be vulnerable to the heat", imgSrc: "/icons/vulnerable_heat.png" },
        ]
    },
    "Extreme": {
        "Cool yourself": [
            {tip: "Drink a glass of water every hour even if you do not feel thirsty", imgSrc: "/icons/slush-drink.png" },
            {tip: "Keep your skin wet with a spray bottle or by applying water", imgSrc: "/icons/spray.png" },
            {tip: "Wrap a wet towel loosely around your head and neck", imgSrc: "/icons/squeeze.png" },
        ],
        "Use fans effectively": [
            {tip: "Use a misting fan in a shaded well-ventilated area", imgSrc: "/icons/misting_fan.png" },
        ],
        "Keep your house cool": [
            {tip: "Block sunlight using blinds or curtains", imgSrc: "/icons/blinds.png" },
            {tip: "Open windows only if it is hotter inside than outside", imgSrc: "/icons/ventilation.png" },
            {tip: "Set the air conditioner at 27˚C and use a fan pointing at you", imgSrc: "/icons/ac.png" },
            {tip: "Use an evaporative cooler", imgSrc: "/icons/evaporative.png" },
        ],
        "Plan your day": [
            {tip: "Wear lightweight, loose-fitting clothing preferably white", imgSrc: "/icons/tank-top.png" },
            {tip: "Rest more often, in a shaded place with natural air movement", imgSrc: "/icons/alone.png" },
            {tip: "Avoid strenuous activities", imgSrc: "/icons/no-running.png" },
            {tip: "Check on people who may be vulnerable to the heat", imgSrc: "/icons/vulnerable_heat.png" },
        ]
    }
  };


  const detailedRecommendation = useCallback((riskLevel) => {
    const data = recommendations[riskLevel];
    if (!data) return null;

    // 类别与图片的映射
    const categoryIcons = {
        "Cool yourself": "/icons/ice-cubes.png",
        "Use fans effectively": "/icons/Use_fans.webp",
        "Keep your house cool": "/icons/house_cool.webp",
        "Plan your day": "/icons/calendar.webp"
    };

    return (
      <div>
          <div style={{ marginBottom: '10px' }}>Below is the list of proven scientific methods to reduce the effects of heat stress on the human's body.</div>
          <Collapse style={{width:"100%"}} defaultActiveKey="1">
              {Object.entries(data).map(([category, tips], index) => (
                  <Collapse.Panel
                      header={
                          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                              <img src={categoryIcons[category]} alt={category} width={35} height={35} />
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
}, [basePath]);




  const riskTips = useMemo(() => {  //渲染风险提示
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
              />
              <p>{translation?.[label]}</p>
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
        alignItems: 'center', // 垂直居中
        justifyContent: 'center',
        background: `${riskStyles[riskLevel].backgroundColor}`,
      //  background: `linear-gradient(to bottom, transparent 0%, ${riskStyles[riskLevel].backgroundColor} 50%)`, // 从透明到风险颜色的渐变
    }}>
          {detailedRecommendationTips ? (
              <div>
                  <Col>
            <Row span={3} style={HssStyles.currentRiskLabelRow}>
                                <p style={HssStyles.riskLevelHeader}>
                                    {translation.CurrentHssLabel}
                                </p>
                               
                                    <PopOver
                                        content={a}
                                        child={
                                            <p style={HssStyles.riskLevelLabel}>
                                                {translation?.[riskLevel]}
                                            </p>
                                        }
                                    />
                                
                            </Row>
  
                      {/* 添加新的按钮 */}
                      <Row justify="center" style={{ marginTop: '10px' }}>
                        <Button 
                          onClick={handlePersonaliseRiskClick} 
                          style={{backgroundColor:"#005B8E", display: 'inline-flex', alignItems: 'center', color: '#fff'}}  // 保持按钮文字颜色为白色
                          type="primary"
                          icon={<img src="https://s2.loli.net/2023/10/22/9NxvWwmOjILct6g.png" style={{ width: '20px', marginRight: '8px' }} />}  // 将图标嵌入到按钮中，并调整大小
                        >
                            Personalise HSS Risk
                        </Button>
                    </Row>
                  </Col>
                  {riskTips}
                  <Row style={{ ...HssStyles.currentRiskLabelMaxRow, marginBottom: "10px" }}>
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
                            <p style={HssStyles.riskLevelHeaderTodayMaxTime}>
                                {translation.AtTimeLabel}{" "}
                                {maxLevelForecast?.[0]?.time}:00
                            </p>
              </Row>
          </div>
          ) : null}
      </div>
  );
  
   }, [translation, maxLevelForecast, detailedRecommendationTips, riskLevel, riskTips, detailedRecommendation, calculateRiskLevel])

   //  //第三个组件，三个人群，

   const renderAgeGroupRiskDisplay = useMemo(() => { //风险值的显示及年龄组风险显示
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

//新功能添加新人群

const renderButtonGroup = useMemo(() => {
  return  (
    <ButtonGroup/>
  );
}, []);

  const handleSettingPage = useCallback(() => {  //导航到setting的页面
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
                        padding: '0', // 减少左侧的 padding 值
                        fontSize: '20px !import', // 使用 !important 规则
                        width: '100%',
                        backgroundColor: activePanelKey === '1' ? '#E0F2F1' : 'transparent',
                    }}
                >
                    <span>Detailed Recommendations</span>
                </div>
            }
            key="1"
            style={{
              backgroundColor: activePanelKey === '1' ? '#E0F2F1' : 'transparent', // 修改背景颜色
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

  // const renderMap = useMemo(() => {
  //   return loading ? (
  //     <LoadingCard />
  //   ) : (
  //     <CustomizedMap
  //       centerCoordinates={[
  //         parameters.latitude,
  //         parameters.longitude,
  //       ]}
  //       markerCoordinates={[
  //         parameters.latitude,
  //         parameters.longitude,
  //       ]}
  //       content={
  //         detailedRecommendationTips
  //           ? detailedRecommendation(riskLevel)
  //           : null
  //       }
  //     />
  //   );
  // }, [loading, parameters, detailedRecommendationTips, detailedRecommendation])

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

  // const publicDisplayMainView = useMemo(() => {
  //   return (
  //     <div id={hssRiskDisplayStyle.publicDisplayContainer}>
  //       <div id={hssRiskDisplayStyle.publicDisplayInnerContainer}>
  //         {renderRiskValueDisplay}

  //         {/* {this.renderAgeGroupRiskDisplay()} */}

  //         {renderTodayForecastCollapsePublicDisplay}
  //       </div>
  //     </div>
  //   );
  // }, [renderRiskValueDisplay, renderTodayForecastCollapsePublicDisplay])

  return isPublicDisplay
    ? publicDisplayMainView
    :
    <div style={HssStyles.container}>
      {renderRiskValueDisplay}
      {/* 注释这一行是原有的三个人群 */}
      {/* {renderAgeGroupRiskDisplay} */}
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