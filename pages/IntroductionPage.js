import React from 'react';
import { Carousel,Button, Tabs,Card, Typography,Modal, Divider, Row, Col, List,Tooltip, Collapse, Image as AntdImage} from 'antd';
import Layout from "./layout";
import  { useState, useEffect } from 'react';
import { loadDetailedRecommendationTips } from '../helpers/tipHelper';
import { SmileOutlined, MehOutlined, FrownOutlined,RightOutlined,LeftOutlined } from '@ant-design/icons';
import { LanguageHelper } from '../helpers/languageHelper';
import Router, {useRouter, withRouter } from "next/router";
import ReactMarkdown from 'react-markdown';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
const {Meta} = Card;

const { Title, Text,Paragraph,Link} = Typography;
const {Panel}=Collapse;
  const IntroductionPage = (props) => {
    const [loading, setLoading] = useState(true); 
    const [isExpanded, setIsExpanded] = useState(false);
    const [language, setLanguage] = useState("en");  //Default is English

    const { TabPane } = Tabs;
    const contentList = {
      tab1: (
        <div style={{ display: 'flex', alignItems: 'center',  }}>
  <img src={basePath+"/icons/healthy-adults.png"} alt="Healthy"
       style={{ width: '30%', height: '30%', marginRight: '30px' }} /> {/* Add marginRight to add some space between image and text */}
  <span>Healthy adults and young adults</span>
</div>
      ),

      tab2: (
        <div style={{ display: 'flex', alignItems: 'center',  }}>
        <img src= {basePath+"/icons/Vulnerable.png"}alt="Vulnerable"
             style={{ width: '30%', height: '30%', marginRight: '30px' }} /> {/* Add marginRight to add some space between image and text */}
        <span>People 65 years of age and older, pregnant women, infants, and children</span>
      </div>

    
      ),
      tab3: (
        <div style={{ display: 'flex', alignItems: 'center',  }}>
        <img src={basePath+"/icons/comorbidity.png"} alt="Vulnerable"
             style={{ width: '30%', height: '30%', marginRight: '30px' }} /> {/* Add marginRight to add some space between image and text */}
        <span>People with chronic or acute illness, taking medications, overweight and obese</span>
      </div>

  
      )
    };

  // This part is a translation of the suggested content
  const [translations, setTranslations] = React.useState({});
    const [translation, setTranslation] = useState({
    LocateMeButtonLabel: "Locate Me",
    LocationText: "Location",
    LocationDropdown: "Choose your location",
  });
  const [detailedRecommendationTips, setDetailedRecommendationTips] = React.useState({});
  const { languageHelper } = props;
  React.useEffect(() => {
    loadTranslation();
    async function fetchData() {
      const data = await loadDetailedRecommendationTips();
      setDetailedRecommendationTips(data.detailedRecommendationTips);
      const translationData = await languageHelper.translation('CurrentHssRiskDisplay');
      setTranslations(translationData);
    }
    fetchData();
  }, []);
  const riskLevels = [
    { key: 'Low', label: translation.Low },
    { key: 'Moderate', label: translation.Moderate },
    { key: 'High', label: translation.High },
    { key: 'Extreme', label: translation.Extreme }
  ];
 
  const loadTranslation = async () => {
    const { languageHelper } = props;
    let res = await languageHelper.translation("IntroductionPage"); 
    setLoading(false);
    setTranslation(res);
};

  // This part is to handle the status of the general suggestion pop-up window:
const [isModalVisible, setIsModalVisible] = useState(false);
const [currentRecommendation, setCurrentRecommendation] = useState('');
const showRecommendation = (recommendation) => {
  setCurrentRecommendation(recommendation);
   setIsModalVisible(true);
 };
//Default card desktop width
const cardWidth = '100%'; // No need for useState and useEffect, set directly to percentage

const handleModalClose = () => {
  setIsModalVisible(false);
};
//Custom truncate text
   //Use the useRouter hook of next/router
  const router = useRouter();



  const goToSettingPage = () => {
    router.push('/setpage');
  };
  const goToHomePage = () => {
    router.push('/HomePage');
  };
  const goMapPage = () => {
    router.push('/Newfuc');
  };
  const [fontSizes, setFontSizes] = useState({
    title: '24px', //Default desktop title size
    text: '16px' 
  });

  useEffect(() => {
    const adjustFontSizes = () => {
      if (window.innerWidth <= 768) {
       // Mobile terminal
        setFontSizes({
          title: '20px',
          text: '13px',
          but: '200%',
          button: '70%',
          colorbac:'#E5DFD1',
          colorlet:'black',
          DifGsize:'0 0px',
          backgroundImage: `url(${basePath}/Heat-Stress-Scale.png)`,
          // colorbac:'#E6D9B4',
          backgroundSize: 'cover',
          width:"100%",
          buttonWidth:"200px",
          buttonHeight:"5vh",
          buttonText:"20px",
          cardWidth:"100%"
        });
      } else {
   // Desktop
        setFontSizes({
          title: '30px',
          text: '20px',
          but: '550%',
          button: '50%',
          backgroundImage: `url(${basePath}/Heat-Stress-Scale.png)`,
          // colorbac:'#E6D9B4',
          backgroundSize: 'cover',
          colorbac:'#E5DFD1',
          colorlet:'black',
          DifGsize:'0 80px',
          shadow:'2px 2px 4px rgba(0, 0, 0, 0.5)',
          width:"80%",
          buttonWidth:"300px",
          buttonHeight:"10vh",
          buttonText:"22px",
          cardWidth:"70%"
        });
      }
    };
    adjustFontSizes(); //Initialize font size
    window.addEventListener('resize', adjustFontSizes);
    return () => {
      window.removeEventListener('resize', adjustFontSizes);
    };
  }, []);
  const arrowStyle = { margin: '0 5px', color: '#5A5D5E' };
  
  const renderArrows = (IconComponent) => {
    return Array(3).fill(0).map((_, index) => (
      <IconComponent key={index} style={arrowStyle} />
    ));
  };

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

  return (
      <Layout>
        <div>


<Card bordered={false} style={{ 
    textAlign: 'center', 
    width: '110%', 
    marginLeft: '-8%', 
    marginRight: '-8%', 
    marginBottom:"50px",
    backgroundImage:fontSizes.backgroundImage, 
    backgroundSize:fontSizes.backgroundSize,
    position: 'relative',  // Add position: relative here to facilitate positioning of the inner div
    overflow: 'hidden'  //Add overflow: hidden here to ensure that the mask does not exceed the boundaries of the Card
}}>
     

        <div style={{marginBottom:"30px"}}>
          <Title style={{ fontSize: fontSizes.but, fontWeight: 'bold', color: fontSizes.colorlet }}>
            
             {translation.mainText} 
          </Title>
          </div>
          <div key="para" style={{ 
    position: 'relative',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: 'vh',  
    maxWidth: '80%',  
    margin: '0 auto',
    marginBottom:"50px"
}}>
    <div style={{
        display: 'flex',  
        flexDirection: 'column',  
        alignItems: 'center',  
        backgroundColor: 'rgba(191, 175, 131, 0.9)', 
        padding: '10px 5px',  
        borderRadius: '5px' ,
        justifyContent:"center"
    }}>
        <p style={{ 
            textAlign: 'center', 
            fontSize: '16px',
            lineHeight: '1.5',
            color: fontSizes.colorlet,
            maxWidth: '600px', 
            width: '100%',  
            margin: "0 auto"
        }}>
            {translation.mainTextIntro} 
        </p>
    </div>
</div>

      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '20px' }}>
        {/* For the button */}
   
          <Button
          hoverable
            type="primary"
            size={fontSizes.buttonsize}
            icon={
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 12H3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            style={{
              width: fontSizes.buttonWidth,
              height: fontSizes.buttonHeight,
              fontSize: fontSizes.buttonText,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'linear-gradient(to left, #BC7936, 75%, #E1D1AB',
              border: 'none',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
            }}
            onClick={() => {
                    
              Router.push('/HomePage');
          }}
             >
            <div style={{color:"black"}}>
            {translation.GetStart} 
            </div>
          </Button>
      </Row>
    </Card>
</div>
    

    {/* -------------- Module 2+3 hss calculation --------------------------- ------ */}
           {/*Split line, and card 1 title*/}
           {/* dividing line 1 & block 1 title */}
          <div style={{ textAlign: 'center', marginBottom: "10px" }}>
                            {[...Array(1)].map((_, index) => (<img key={index} src={basePath+'/divider.gif'} />))}
                        </div>
          <div style={{ maxWidth: '100%', margin: '0 auto' , marginBottom:"50px"}}>
            <Row justify="center">
            <div style={{ textAlign: 'center', width: '100%', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  {renderArrows(RightOutlined)}
                </div>
                <Title level={2} style={{ color: 'black', fontWeight: 'bold', fontSize: fontSizes.title, margin: '0 5px' }}>
                  {translation.subtitle1}
                </Title>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                  {renderArrows(LeftOutlined)}
                </div>
              </div>
            </div>

                <div style={{  margin: '0 auto' }}>
            <Row justify="center">
                <Card bordered={false} style={{ backgroundColor: "#F9F4E7",width: fontSizes.cardWidth, padding: '5px', textAlign: 'left', borderRadius: '15px',boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)'}}>
                <Divider style={{ backgroundColor: "#F9F4E7",margin: '20px 0' }} orientation='left'>
                    <Title style={{ color: '#013039', fontWeight: 'bold', fontSize:"18px", textAlign: 'left' }}>
                        {translation.subtitle1_1}
                    </Title>
                  </Divider>
                  <div style={{ fontSize: '16px', width: '100%', textAlign: 'justify' }}>
                    <ReactMarkdown>{translation.card1content}</ReactMarkdown>       
                    </div>
                    <Divider style={{ margin: '20px 0' }} orientation='left'>
                        <Title  style={{  fontWeight: 'bold', fontSize: "18px", textAlign: 'left' }}>
                            {translation.subtitle1_2}
                        </Title>
                    </Divider>
                    <div style={{ fontSize: '16px', width: '100%', textAlign: 'justify' }}>
                    <ReactMarkdown>{translation.card2content}</ReactMarkdown>       
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                        <div style={{ width: '25%', height: '100px', backgroundColor: '#52B795' }}></div>
                        <div style={{ width: '25%', height: '100px', backgroundColor: '#FFA600' }}></div>
                        <div style={{ width: '25%', height: '100px', backgroundColor: '#ED5711' }}></div>
                        <div style={{ width: '25%', height: '100px', backgroundColor: '#BA2011' }}></div>
                    </div>
                    <Row justify="space-between">
                        <Col><Text style={{color:"#52B795"}}>{translation.Low}</Text></Col>
                        <Col><Text type="warning">{translation.Moderate}</Text></Col>
                        <Col><Text style={{ color: '#ED5711' }}>{translation.High}</Text></Col>
                        <Col><Text type="danger">{translation.Extreme}</Text></Col>
                    </Row>
                </Card>
            </Row>
        </div>


            </Row>
        </div>
{/* -------------- Module 5 recommendation ------------------------------ --- */}
           {/* Suggestion card */}
          <div style={{ textAlign: 'center', marginBottom: "10px" }}>
                            {[...Array(2)].map((_, index) => (<img key={index} src={basePath+'/divider.gif'} />))}
                        </div>
          <div style={{maxWidth: '100%', margin: '0 auto'}}>
         <Row justify="center">
          <div style={{ textAlign: 'center', width: '100%', marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          {renderArrows(RightOutlined)}
        </div>
        <Title level={2} style={{ color: 'black', fontWeight: 'bold', fontSize: fontSizes.title, margin: '0 5px' }}>
          {translation.subtitle2}
        </Title>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          {renderArrows(LeftOutlined)}
        </div>
      </div>
    </div>
     <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',marginBottom:"50px"}}>
    <Card  bordered={false} style={{ backgroundColor: "#F9F4E7",width: fontSizes.width,  padding: '5px', textAlign: 'left', borderRadius: '15px',boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)' }}
        onTabChange={key => {
          console.log(key);
        }}
      >

<div style={{ color:"#767676",fontSize: '16px', width: '100%', textAlign: 'justify' }}>
                    <ReactMarkdown>{translation.card3content}</ReactMarkdown>       
                    </div>
          <Tabs  defaultActiveKey="1">
    {["Low", "Moderate", "High", "Extreme"].map((riskLevel, index) => (
   <Tabs.TabPane 
 
   tab={
    <span style={{ fontSize: '130%', margin: fontSizes.DifGsize }}>
    
    {riskLevel}
    </span>} 
   key={index + 1
  }

>
{/* ...Other content... */}
      <Collapse ghost defaultActiveKey="1">
     <Panel header={<span style={{ fontSize: '16px' }}>{translation.DetRec}</span>} key="2">
        <List
            dataSource={detailedRecommendationTips[riskLevel]?.tips || []}
            renderItem={item => (
                <List.Item>
                    <AntdImage width={64} src={basePath + item.icon} alt={item.label} />
                    <div style={{ float: 'right', textAlign: 'justify', maxWidth: '75%' }}>
                        {translations.DetailedRecommendationTips[riskLevel][item.label]}
                        
                    </div>
                    
                </List.Item>
                
            )}
        />
    </Panel>
</Collapse>
    </Tabs.TabPane>
  ))}
</Tabs>


        </Card>
        </div>
        </Row>
{/* -------------- Module 6 Additional function -------------------------- ---- */}
     <div style={{ textAlign: 'center', marginBottom: "10px" }}>
                            {[...Array(3)].map((_, index) => (<img key={index} src={basePath+'/divider.gif'} />))}
                        </div>
     <div style={{marginBottom:"100px"}}>
         <Row justify="center">
     <div style={{ textAlign: 'center', width: '100%', marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          {renderArrows(RightOutlined)}
        </div>
        <Title level={2} style={{ color: 'black', fontWeight: 'bold', fontSize: fontSizes.title, margin: '0 5px' }}>
          {translation.subtitle3}
        </Title>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          {renderArrows(LeftOutlined)}
        </div>
      </div>
    </div>
          
{/* Content Card 3 */}
     
         
    {/* Sub-card-1 */}

    
    <Card hoverable
    onClick={goToHomePage}
    style={{
                            width: fontSizes.cardWidth, margin: "auto", textAlign: "center", marginBottom: "50px", backgroundColor: "#F9F4E7"
                        }} bodyStyle={{
                            textAlign: "justify", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        }} cover={<div style={{ textAlign: 'center' }}><img src={basePath+'/home.png'} style={{ width: "250px", height: "200px" }} /></div>}>
                            <Meta title={<span style={{ fontWeight: 'bold', fontSize: '20px' }}>{translation.Home} </span>}/>
                            <div style={{ fontSize: '16px', width: '100%', textAlign: 'justify' }}>
                    <ReactMarkdown>{translation.HomeContent}</ReactMarkdown>       
                    </div>
                        </Card>
    
    
<Card hoverable
    onClick={goToSettingPage}
    style={{
                            width: fontSizes.cardWidth, margin: "auto", textAlign: "center", marginBottom: "50px", backgroundColor: "#F9F4E7"
                        }} bodyStyle={{
                            textAlign: "justify", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        }} cover={<div style={{ textAlign: 'center' }}><img src={basePath+'/setting.png'} style={{ width: "250px", height: "250px" }} /></div>}>
                            <Meta title={<span style={{ fontWeight: 'bold', fontSize: '20px' }}>{translation.Setting} </span>}/>
                            <div style={{ fontSize: '16px', width: '100%', textAlign: 'justify' }}>
                    <ReactMarkdown>{translation.SettingContent}</ReactMarkdown>       
                    </div>
                        </Card>
    
<Card hoverable
    onClick={goMapPage}
    style={{
                            width: fontSizes.cardWidth, margin: "auto", textAlign: "center", marginBottom: "50px", backgroundColor: "#F9F4E7"
                        }} bodyStyle={{
                            textAlign: "justify", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                        }} cover={<div style={{ textAlign: 'center' }}><img src={basePath+'/more-about-scale.png'} style={{ width: "250px", height: "250px" }} /></div>}>
                            <Meta title={<span style={{ fontWeight: 'bold', fontSize: '20px' }}>{translation.Map} </span>}/>
                            <div style={{ fontSize: '16px', width: '100%', textAlign: 'justify' }}>
                    <ReactMarkdown>{translation.MapContent}</ReactMarkdown>       
                    </div>
                        </Card>
   

</Row>


</div>
        </div>
        </Layout>      
  );
};

export default LanguageHelper(IntroductionPage);