import React, { useState, useEffect } from "react";
import { withRouter } from "next/router";
import Layout from "./layout";
import { LanguageHelper } from "../helpers/languageHelper";
import ReactMarkdown from "react-markdown";
import LoadingCard from "./../components/LoadingCard";
import { Card, Typography  } from 'antd';
import cookie from "react-cookies";

const { Title } = Typography;
const { Meta } = Card;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const AboutPage = (props) => {
    const [loading, setLoading] = useState(true);
    const [translation, setTranslation] = useState({ AboutPageitle: "About Heat Stress Scale (HSS)" });  // Other initial state values omitted
    const [windowWidth, setWindowWidth] = useState(0);
    const [language, setLanguage] = useState("en");  // Default is English

    useEffect(() => {
        const adjustFontSizes = () => {
            if (window.innerWidth <= 768) {
                // Mobile terminal
                setFontSizes({ cardWidth: "100%" });
            } else {
                //Desktop
                setFontSizes({ cardWidth: "80%" });
            }
        };
        let loadedLanguage = cookie.load("language");
        const configJsonData = require("./../languages/config.json");
        let config = configJsonData.config;
        if (loadedLanguage === undefined) {
            loadedLanguage = config.defaultLanguage.language;
        }
        setLanguage(loadedLanguage);

        loadTranslation();
        updateWindowDimensions();
        adjustFontSizes();  // AdjustFontSizes is called when the component is mounted
        window.addEventListener('resize', adjustFontSizes);  // AdjustFontSizes is called when the window size changes
        return () => { window.removeEventListener('resize', adjustFontSizes); };  // Clear event listener
    }, []);

    const updateWindowDimensions = () => { setWindowWidth(window.innerWidth); };

    const loadTranslation = async () => {
        const { languageHelper } = props;
        let res = await languageHelper.translation("AboutPage");
        setLoading(false);
        setTranslation(res);
    };

    const isMobile = windowWidth <= 768;
    const bigTitleStyle = {};  // Style attributes omitted

    const ExpandableText = ({ text, language }) => {
      const [isExpanded, setIsExpanded] = useState(false);
      const previewLength = language === 'cn' ? 100 : 300;
      const previewText = text.slice(0, previewLength);
  
      const toggleExpanded = () => { setIsExpanded(!isExpanded); };
  
      return (
          <div>
              <ReactMarkdown>{isExpanded ? text : previewText}</ReactMarkdown>
              <a onClick={toggleExpanded} style={{ color: '#088587', cursor: 'pointer' }}>{isExpanded ? translation.Readless : translation.Readmore}</a>
          </div>
      );
  };
  

    const [fontSizes, setFontSizes] = useState({ title: '24px', text: '16px' });  // Default desktop title size and text size

    return (
        <div>
            <Layout>
                {loading ? (<LoadingCard />) : (
                    <div>
                        <Card bordered={false} style={{
                            textAlign: 'center', borderRadius: 0, width: '110.2%', marginLeft: '-8%', marginRight: '-8%', marginBottom: "50px",
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${basePath}/Heat-Stress-Scale.png)`,
                            backgroundSize: "cover"
                        }}>
                            <Title style={{
                                fontSize: "300%", fontWeight: 'bold',
                                background: `url(${basePath}/Heat-Stress-Scale.png`,
                                backgroundSize: "cover",
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent', 
                            }}>
                                {translation.AboutPageitle}
                            </Title>
                        </Card>
                        <div style={{ textAlign: 'center', marginBottom: "10px" }}>
                            {[...Array(1)].map((_, index) => (<img key={index} src={basePath+'/divider.gif'} />))}
                        </div>
                        <Card hoverable style={{
                            width: fontSizes.cardWidth, margin: "auto", textAlign: "center", marginBottom: "50px", backgroundColor: "#F9F4E7"
                        }} bodyStyle={{
                            textAlign: "justify", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        }} cover={<div style={{ textAlign: 'center' }}><img src={basePath+'/definition.png'} style={{ width: "250px", height: "250px" }} /></div>}>
                            <Meta title={<span style={{ fontWeight: 'bold', fontSize: '20px' }}>{translation.DefinitionTitle}</span>} />
                            <div style={{ fontSize: '18px', width: '100%', textAlign: 'justify' }}>
                            <ReactMarkdown>{translation.Definition}</ReactMarkdown>
                            </div>
                        </Card>
                        <div style={{ textAlign: 'center', marginBottom: "10px" }}>
                            {[...Array(2)].map((_, index) => (<img key={index} src={basePath+'/divider.gif'} />))}
                        </div>
                        <Card hoverable style={{
                            width: fontSizes.cardWidth, margin: "auto", textAlign: "center", marginBottom: "50px", backgroundColor: "#F9F4E7"
                        }} bodyStyle={{
                            textAlign: "justify", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        }} cover={<div style={{ textAlign: 'center' }}><img src={basePath+'/more-about-scale.png'} style={{ width: "250px", height: "250px" }} /></div>}>
                            <Meta title={<span style={{ fontWeight: 'bold', fontSize: '20px' }}>{translation.MoreAboutScaleTitle} </span>}/>
                            <div style={{ fontSize: '18px', width: '100%', textAlign: 'justify' }}>
                            <ExpandableText text={translation.MoreAboutScale} language={language} />
                            </div>
                        </Card>
                        <div style={{ textAlign: 'center', marginBottom: "10px" }}>
                            {[...Array(3)].map((_, index) => (<img key={index} src={basePath+'/divider.gif'} />))}
                        </div>
                        <Card hoverable style={{
                            width: fontSizes.cardWidth, margin: "auto", textAlign: "center", marginBottom: "50px", backgroundColor: "#F9F4E7"
                        }} bodyStyle={{
                            textAlign: "justify", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        }} cover={<div style={{ textAlign: 'center' }}><img src={basePath+'/disclaimer.png'} style={{ width: "350px", height: "250px" }} /></div>}>
                            <Meta title={<span style={{ fontWeight: 'bold', fontSize: '20px' }}>{translation.DisclaimerTitle}</span>} />
                            <div style={{ fontSize: '18px', width: '100%', textAlign: 'justify' }}>
                            <ExpandableText text={translation.Disclaimer} language={language}/>
                            </div>
                        </Card>
                        <div style={{ textAlign: 'center', marginBottom: "10px" }}>
                            {[...Array(4)].map((_, index) => (<img key={index} src={basePath+'/divider.gif'} />))}
                        </div>
                        <Card hoverable style={{
                            width: fontSizes.cardWidth, margin: "auto", textAlign: "center", marginBottom: "50px", backgroundColor: "#F9F4E7"
                        }} bodyStyle={{
                            textAlign: "justify", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        }} cover={<div style={{ textAlign: 'center' }}><img src={basePath+'/data-confidentiality.png'} style={{ width: "300px", height: "250px" }} /></div>}>
                            <Meta title={<span style={{ fontWeight: 'bold', fontSize: '20px' }}>{translation.DataConfidentialityStatementTitle}</span>}/>
                            <div style={{ fontSize: '18px', width: '100%', textAlign: 'justify' }}>
                            <ExpandableText text={translation.DataConfidentialityStatement} language={language} />
                            </div>
                        </Card>
                    </div>
                )}
            </Layout>
        </div>
    );
}

export default withRouter(LanguageHelper(AboutPage));