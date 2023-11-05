import React, { Component } from "react";
import { useState, useEffect } from 'react';
import { withRouter } from "next/router";
import { Row, Col } from 'antd'; 
import { InfoCircleOutlined } from '@ant-design/icons'; 
import { LanguageHelper } from "../helpers/languageHelper";
import Image from "next/image"; 

import LoadingCard from "./LoadingCard";
import PopOver from "./Popover"; 
import { loadDetailedRecommendationTips } from "../helpers/tipHelper";
import { red, orange, yellow, green } from '@ant-design/colors';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const AgeGroupRisk = (props) => {
  const [landscape, setLandscape] = useState(false);
  const [translation, setTranslation] = useState({});
  const [detailedRecommendationTips, setDetailedRecommendationTips] = useState({});
  const [loading, setLoading] = useState(props.loading);
  const [data, setData] = useState(props.data);
  const [currentRiskValue, setCurrentRiskValue] = useState(props.currentRiskValue);
  const [maxLevelForecast, setMaxLevelForecast] = useState(props.maxLevelForecast);


  useEffect(() => {
    const handleResize = () => {
      setLandscape(window.innerWidth > 770);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const loadTranslation = async () => {
      const { languageHelper } = props;
      let detailedRecTips = await loadDetailedRecommendationTips();
      let res = await languageHelper.translation("CurrentHssRiskDisplay");
      setTranslation(res);
      setDetailedRecommendationTips(detailedRecTips.detailedRecommendationTips);
    };

    loadTranslation();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [props]);

  useEffect(() => {
    setLoading(props.loading);
    setData(props.data);
    setCurrentRiskValue(props.currentRiskValue);
    setMaxLevelForecast(props.maxLevelForecast);
  }, [props]);


  const detailedRecommendation = (tip, riskLevel) => {

    let data = detailedRecommendationTips[riskLevel]?.tips;
    let ageGroup = tip.label;

    if (data) {
      return (
        <div style={{ width: '100%' }}>
          <div>
            <p>
              {`${translation.TheCurrentHSSFor} `}
              <strong>{ageGroup}</strong>
              {` ${translation.Is} `}
              <strong>{translation[riskLevel]}</strong>.
            </p>
            <p>{translation.BelowIs}</p>
          </div>
          {data.map((tip, key) => {
            let label = tip.label;
   
            let text = translation.DetailedRecommendationTips[riskLevel][label];
            
            return (
              <Row key={key} style={{ width: '100%' }}>
                <Col style={{
                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'right',
                  width: '15%',
                }}>
                  <Image src={basePath + tip.icon} alt="" width={35} height={35} />
                </Col>
                <Col style={{ width: '80%' }}>
                  <p style={{ marginLeft: '2%' }}>
                    {text ? text : "Unable to read string"}
                  </p>
                </Col>
              </Row>
            );
          })}
        </div>
      );
    }
    return null;
  };

  const calculateRiskLevel = (riskValue) => {
    let res = "Extreme";
    let style = { backgroundColor: red[5] }; 
    
    if (riskValue < 0.75) {
      res = "High";
      style = { backgroundColor: orange[5] }; 
    }
    if (riskValue < 0.5) {
      res = "Moderate";
      style = { backgroundColor: yellow[5] }; 
    }
    if (riskValue < 0.25) {
      res = "Low";
      style = { backgroundColor: green[5] }; 
    }
    
    return {
      riskLevel: res,
      style: style,
    };
  };


  const generateData = () => {
    let divider = data[0][0].divider;
    let currentRiskVal = currentRiskValue * divider;
    let maxRiskVal = maxLevelForecast[0].maxRiskValue * divider;

    let healthAdultRes = calculateRiskLevel(currentRiskVal / 0.85);
    let healthAdultResMax = calculateRiskLevel(maxRiskVal / 0.85);
    let healthAdult = {
      iconLabel: translation.Healthy,
      riskValue: currentRiskVal / 0.85,
      style: healthAdultRes.style,
      riskLevel: healthAdultRes.riskLevel,
      maxRiskLevel: healthAdultResMax.riskLevel,
      maxRiskStyle: healthAdultResMax.style,
      icon: `${props.basePath}/icons/healthy-adults.png`,
      key: "healthAdult",
      label: translation.HealthAdultLabel,
    };

    let elderAdultRes = calculateRiskLevel(currentRiskVal / 0.85 / 0.8);
    let elderAdultResMax = calculateRiskLevel(maxRiskVal / 0.85 / 0.8);
    let elderAdult = {
      iconLabel: translation.Vulnerable,
      riskValue: currentRiskVal / 0.85 / 0.8,
      style: elderAdultRes.style,
      riskLevel: elderAdultRes.riskLevel,
      maxRiskLevel: elderAdultResMax.riskLevel,
      maxRiskStyle: elderAdultResMax.style,
      icon: `${props.basePath}/icons/vulnerable_adult.png`,
      key: "elderAdult",
      label: translation.ElderlyLabel,
    };

    let withMedicationRes = calculateRiskLevel(currentRiskVal / 0.85 / 0.7);
    let withMedicationResMax = calculateRiskLevel(maxRiskVal / 0.85 / 0.7);
    let withMedication = {
      iconLabel: translation.Comorbidity,
      riskValue: currentRiskVal / 0.85 / 0.7,
      style: withMedicationRes.style,
      riskLevel: withMedicationRes.riskLevel,
      maxRiskLevel: withMedicationResMax.riskLevel,
      maxRiskStyle: withMedicationResMax.style,
      icon: `${props.basePath}/icons/people-with-chronic-illnesses.png`,
      key: "withMedication",
      label: translation.ChronicIllnessLabel,
    };

    return [healthAdult, elderAdult, withMedication];
  };

  const riskLevelDiv = (text, style) => {
    return (
      <div
        style={{
          ...style, 
          borderRadius: '5px',
          width: landscape ? '120px' : (window.innerWidth <= 733 ? '70px' : '100px'),
          height: '25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: '10px',
          marginLeft: !landscape ? '5px' : undefined,
          fontSize: !landscape ? 'smaller' : undefined
        }}
      >
        <p>{text}</p>
        <InfoCircleOutlined style={{ marginLeft: '5px' }} />
      </div>
    );
  };



  const landscapeView = (tip) => {
    return (
      <Col style={{ width: '60%' }}>
        <Row style={{
          width: '70%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}>
          <PopOver
            content={detailedRecommendation(tip, tip.riskLevel)}
            trigger="click"
            child={riskLevelDiv(
              translation.current,
              tip.style
            )}
          />
        </Row>
        <Row style={{
          width: '70%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}>
          <PopOver
            content={detailedRecommendation(tip, tip.maxRiskLevel)}
            trigger="click"
            child={riskLevelDiv(
              translation.max,
              tip.maxRiskStyle
            )}
          />
        </Row>
      </Col>
    );
  }

  const mobileView = (tip) => {
    return (
      <Col style={{ width: '100%' }}>
        <Row style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <PopOver
            content={detailedRecommendation(tip, tip.riskLevel)}
            trigger="click"
            child={riskLevelDiv(
              translation.current,
              tip.style
            )}
          />
        </Row>
        <Row style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <PopOver
            content={detailedRecommendation(tip, tip.maxRiskLevel)}
            trigger="click"
            child={riskLevelDiv(
              translation.max,
              tip.maxRiskStyle
            )}
          />
        </Row>
      </Col>
    );
  }

  const riskTipForAgeGroup = () => {
    let data = generateData();
  
    return (
      <div style={{ width: '100%', marginBottom: '2%', marginTop: '1%' }}>
        <Row style={{ width: '95%' }}>
          {data.map((tip, key) => {
            return (
              <Col span={8} key={tip.key}>
                <Row
                  style={{
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '15px',
                  }}
                >
                  <p>{tip.iconLabel}</p>
                </Row>
                <Row style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: landscape ? 'right' : 'center',
                      alignItems: 'flex-end',
                      width: landscape ? '40%' : '100%',
                      marginTop: landscape ? '0' : '2%',
                    }}
                  >
                    <Image
                      src={props.basePath + tip.icon}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                  {landscape
                    ? landscapeView(tip)
                    : mobileView(tip)}
                </Row>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  };

  return (
    <div>
      {loading ? <LoadingCard /> : riskTipForAgeGroup()}
    </div>
  );
};

export default withRouter(LanguageHelper(AgeGroupRisk));