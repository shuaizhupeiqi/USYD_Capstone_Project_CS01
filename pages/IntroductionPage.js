import React from 'react';
import { Carousel,Button, Tabs,Card, Typography,Modal, Divider, Row, Col, List,Tooltip, Collapse, Image as AntdImage} from 'antd';
import { useRouter,withRouter } from 'next/router';
import Layout from "./layout";
import  { useState, useEffect } from 'react';
import { loadDetailedRecommendationTips } from '../helpers/tipHelper';
import { SmileOutlined, MehOutlined, FrownOutlined } from '@ant-design/icons';
import { LanguageHelper } from '../helpers/languageHelper';
// import styles from '../styles/1.module.css';


const { Title, Text,Paragraph,Link} = Typography;
const {Panel}=Collapse;


  const IntroductionPage = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { TabPane } = Tabs;
    const contentList = {
      tab1: (
        <div style={{ display: 'flex', alignItems: 'center',  }}>
  <img src="/icons/healthy-adults.png" alt="Healthy"
       style={{ width: '30%', height: '30%', marginRight: '30px' }} /> {/* 添加 marginRight 以添加一些空间在图片和文本之间 */}
  <span>Healthy adults and young adults</span>
</div>
      ),
    

      tab2: (
        <div style={{ display: 'flex', alignItems: 'center',  }}>
        <img src="/icons/Vulnerable.png" alt="Vulnerable"
             style={{ width: '30%', height: '30%', marginRight: '30px' }} /> {/* 添加 marginRight 以添加一些空间在图片和文本之间 */}
        <span>People 65 years of age and older, pregnant women, infants, and children</span>
      </div>

    
      ),
      tab3: (
        <div style={{ display: 'flex', alignItems: 'center',  }}>
        <img src="/icons/comorbidity.png" alt="Vulnerable"
             style={{ width: '30%', height: '30%', marginRight: '30px' }} /> {/* 添加 marginRight 以添加一些空间在图片和文本之间 */}
        <span>People with chronic or acute illness, taking medications, overweight and obese</span>
      </div>

  
      )
    };


  // 这部分是对建议的内容进行翻译
  const [translations, setTranslations] = React.useState({});
  const [detailedRecommendationTips, setDetailedRecommendationTips] = React.useState({});
  const { languageHelper } = props;
  React.useEffect(() => {
    async function fetchData() {
      const data = await loadDetailedRecommendationTips();
      setDetailedRecommendationTips(data.detailedRecommendationTips);

      const translationData = await languageHelper.translation('CurrentHssRiskDisplay');
      setTranslations(translationData);
    }

    fetchData();
  }, []);



  // 这部分是对总建议的弹窗进行状态处理：
const [isModalVisible, setIsModalVisible] = useState(false);
const [currentRecommendation, setCurrentRecommendation] = useState('');
const showRecommendation = (recommendation) => {
  setCurrentRecommendation(recommendation);
   setIsModalVisible(true);
 };
 
// 默认card 桌面端的宽度
const cardWidth = '100%'; // 无需useState和useEffect，直接设置为百分比





const handleModalClose = () => {
  setIsModalVisible(false);
};
// 自定义截断文本



  // 使用 next/router 的 useRouter 钩子
  const router = useRouter();

  const goToHomePage = () => {
    router.push('/HomePage');
  };

  const goToSettingPage = () => {
    router.push('/setpage');
  };
  const goToNewfucPage = () => {
    router.push('/Newfuc');
  };
  const gointroductionPage = () => {
    router.push('/Newfuc');
  };
  const [fontSizes, setFontSizes] = useState({
    title: '24px', // 默认桌面端的标题大小
    text: '16px'  // 默认桌面端的文本大小
  });

  useEffect(() => {
    const adjustFontSizes = () => {
      if (window.innerWidth <= 768) {
        // 手机端
        setFontSizes({
          title: '20px',
          text: '13px',
          but: '200%',
          button: '70%',
          colorbac:'white',
          colorlet:'black',
          DifGsize:'0 0px',
        });
      } else {
        // 桌面端
        setFontSizes({
          title: '30px',
          text: '20px',
          but: '550%',
          button: '50%',
          colorbac:'#A67B5B',
          colorlet:'white',
          DifGsize:'0 80px',
          
        });
      }
    };

    adjustFontSizes(); // 初始化字体大小

    window.addEventListener('resize', adjustFontSizes);

    return () => {
      window.removeEventListener('resize', adjustFontSizes);
    };
  }, []);



  return (
    
      <Layout>

        <div>
          {/*Titles and buttons*/}
          {/* 包含标题和按钮的卡片 */}
          <Card bordered={false} style={{ textAlign: 'center', width: '114.5%', marginLeft: '-8%', marginRight: '-8%' , backgroundColor: fontSizes.colorbac}}>
     {/*  -------------- 模块1 hss searching     --------------------------------- */}

   

        {/* For the text */}
      
          <Title style={{ fontSize: fontSizes.but, fontWeight: 'bold', color: fontSizes.colorlet }}>
            Heat Stress Scale 
          </Title>
          <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    height: 'vh', 
    maxWidth: '80%', // Limiting the width to 70% of its parent
    margin: '0 auto' // Centering the div horizontally
}}>
    <p style={{ 
        textAlign: 'left',
        fontSize: '16px', // Reducing the font size
        lineHeight: '1.5', // Increasing line height for better readability
        color:fontSizes.colorlet
    }}>
      The HSS provides a simple interpretation of the current and forecasted heat stress risk. 
      It uses outdoor air temperature, humidity, solar radiation, and wind speed.
    </p>
</div>


    

      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '20px' }}>
        {/* For the button */}
   
          <Button
            type="primary"
            size="large"
            icon={
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 12H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            style={{
              width: '300px',
              height: '10vh',
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'linear-gradient(to right, #E64626, #FCA111)',
              border: 'none',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
            }}
            onClick={() => {
              // 跳转到核心主页面的代码
              window.location.href = "/HomePage";
            }}
          >
            Get Started Now
          </Button>
     
      </Row>
    </Card>

     {/*  -------------- 模块2 hss searching     --------------------------------- */}
          <Row justify="center">

       
    <Divider style={{margin: '0px 0 0px 0'}}>
            <Title level={2} style={{color: '#000', fontWeight: 'bold',fontSize: fontSizes.title}}>
              What is HSS？</Title>
          </Divider>
          <Card  bordered={false} style={{ width: cardWidth, background: '#F5F5F5', padding: '0px', textAlign: 'center', borderRadius: '30px' }}>


<Paragraph style={{color: '#767676', fontWeight: 'normal', fontSize: fontSizes.text, textAlign: 'justify'}}>
    The Heat Stress Scale (HSS) aims at enhancing community resilience to heatwave disasters.
</Paragraph>
</Card>
       

</Row>

     {/*  -------------- 模块3 hss calculation     --------------------------------- */}
          {/*Split line, and card 1 title*/}
          {/* 分割线1 & 块1标题 */}
          <Divider style={{margin: '0px 0 0px 0'}}>
            <Title level={2} style={{color: '#000', fontWeight: 'bold',fontSize: fontSizes.title}}>HSS calculation</Title>
          </Divider>

          {/* Card 1, displaying HSS information */}
          {/* 内容卡片1，显示 HSS 信息 */}


            <Row justify="center">
          
          <Card  bordered={false} style={{ width: cardWidth, background: '#E7EEF6', padding: '0px', textAlign: 'center', borderRadius: '30px' }}>

         
                {!isExpanded ? (
                    <>
                        <Paragraph
                            ellipsis={{ rows: 3 }}
                            style={{
                                color: '#767676',
                                fontWeight: 'normal',
                                fontSize: fontSizes.text,
                                textAlign: 'center'
                            }}
                        >
                          
                            The HSS assesses heat stress risk using outdoor temperature, humidity, solar radiation, and wind speed from{" "}
                            <Link
                                href="https://www.met.no/"
                                target="_blank"
                                style={{
                                    color: 'black',
                                    fontWeight: 'normal',
                                    textDecoration: 'underline',
                                    fontSize: fontSizes.text,
                                }}
                            >
                                Norwegian Meteorological Institute,
                            </Link>
                        </Paragraph>
                        <Link onClick={() => setIsExpanded(true)} style={{ color: 'blue' }}>Read more</Link>
                    </>
                ) : (
                    <>
                        <Paragraph
                            style={{
                                color: '#767676',
                                fontWeight: 'normal',
                                fontSize: '18px',
                                textAlign: 'center'
                            }}
                        >
                            The HSS assesses heat stress risk using outdoor temperature, humidity, solar radiation, and wind speed from{" "}
                            <Link
                                href="https://www.met.no/"
                                target="_blank"
                                style={{
                                    color: 'black',
                                    fontWeight: 'normal',
                                    textDecoration: 'underline'
                                }}
                            >
                                Norwegian Meteorological Institute,
                            </Link>
                            These factors are combined with personal data in a thermoregulation model, resulting in four risk categories: low, moderate, high, and extreme.
                        </Paragraph>
                        <Link onClick={() => setIsExpanded(false)} style={{ color: 'blue' }}>Read less</Link>

                    </>
                )}
          
                {/* 子块1.1，背景色为 #A8E5C7 */}



                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                    <div style={{ width: '25%', height: '100px', backgroundColor: '#4CAF50' }}></div>
                    <div style={{ width: '25%', height: '100px', backgroundColor: '#FDDA0D' }}></div>
                   <div style={{ width: '25%', height: '100px', backgroundColor: 'orange' }}></div>
                     <div style={{ width: '25%', height: '100px', backgroundColor: '#D72323' }}></div>
                   </div>
                    {/* 字体: Low, Medium, High, Extreme */}
                    <Row justify="space-between">
                      <Col><Text type="success" >Low</Text></Col>
                      <Col><Text type="warning">Medium</Text></Col>
                      <Col><Text style={{color: '#C87B0A'}}>High</Text></Col>
                      <Col><Text type="danger">Extreme</Text></Col>
                    </Row>

                    {/*Insert link*/}
                    {/* 插入链接 */}

                    <Row justify="center" gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                
               
                  </Row>


                </Card>

            </Row>

     {/*  -------------- 模块4 different group     --------------------------------- */}

          {/* Dividing Line & Subtitle 2 */}
          {/* 分割线 & 副标题2 */}
          {/* <Divider style={{margin: '0px 0 0px 0'}}>
            <Title level={2} style={{color: '#000', fontWeight: 'bold',fontSize: fontSizes.title}}>Different Groups</Title>
          </Divider>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
  <Card  bordered={false} style={{ width: cardWidth, background: '#E8F5FA', padding: '0px', textAlign: 'center', borderRadius: '30px' }}
      activeTabKey="tab1"
      onTabChange={key => {
        console.log(key);
      }}
      >
          <Paragraph style={{color: '#767676', fontWeight: 'normal', fontSize: '16px', textAlign: 'justify'}}>
           On HSS, you can locate which group of people you belong to. You can also check for your family and friends.
             </Paragraph>

  <Tabs defaultActiveKey="tab1" centered   size="small" tabBarStyle={{ display: 'flex' }}  >
  <TabPane
    tab={
      <div style={{ flex: 1,fontSize: '130%' , margin: fontSizes.DifGsize}}>
        Healthy
      </div>
    }
    key="tab1"
  >
    {contentList.tab1}
  </TabPane>

  <TabPane
    tab={
      <div style={{ flex: 1,fontSize: '130%', margin: fontSizes.DifGsize}}>
        Vulnerable
      </div>
    }
    key="tab2"
  >
    {contentList.tab2}
  </TabPane>

  <TabPane
    tab={
      <div style={{ flex: 1,fontSize: '130%', margin: fontSizes.DifGsize }}>
        Comorbidity
      </div>
    }
    key="tab3"
  >
    {contentList.tab3}
  </TabPane>
</Tabs>


<Button
  type="primary"
  style={{backgroundColor: '#1677FF',  width: '100%', overflow: 'hidden'}}
  onClick={goToSettingPage}
>
  <Text style={{fontSize: '16px', whiteSpace: 'normal', color: 'white'}}>
  Set profile
  </Text>
</Button>


      </Card>
    
    </Col> */}
     {/*  -------------- 模块5 recommendation    --------------------------------- */}
          {/* 建议卡片 */}
          <Divider style={{margin: '0px 0 0px 0'}}>
          <Title level={2} style={{color: '#000', fontWeight: 'bold',fontSize: fontSizes.title}}>HSS Recommendation</Title>
          </Divider>
     
      <Card  bordered={false} style={{ width: cardWidth, background: '#E8F5FA', padding: '0px', textAlign: 'center', borderRadius: '30px' }}
        onTabChange={key => {
          console.log(key);
        }}
      >

          <Paragraph style={{color: '#767676', fontWeight: 'normal', fontSize: fontSizes.text, textAlign: 'justify'}}>
            Please use or be aware of the belowing recommendations, and follow them as possible as you can for your heat stress safety.
          </Paragraph>
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
       {/* 总建议 */}


      {/* 详细建议列表，可折叠 */}

      <Collapse ghost defaultActiveKey="1">
     <Panel header={<span style={{ fontSize: '14px' }}>Detailed Recommendations</span>} key="2">
        <List
            dataSource={detailedRecommendationTips[riskLevel]?.tips || []}
            renderItem={item => (
                <List.Item>
                    <AntdImage width={64} src={item.icon} alt={item.label} />
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
     {/*  -------------- 模块6 Additional function    --------------------------------- */}

          <Divider style={{margin: '0px 0 0px 0'}}>
            <Title level={2} style={{color: '#000', fontWeight: 'bold',fontSize: fontSizes.title}}>Additional function</Title>
          </Divider>
          {/* 内容卡片3 */}
     <Card   style={{
              background: '#E8FAF1',

          }}>
          <Row gutter={[24,24]} justify="space-between">
    {/* Sub-card-1 */}

    <Col xs={8} lg={5} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

    <Card bordered={false}
          style={{
              background: '#A8E5C7',
              borderRadius: '30px',
              textAlign: 'center',
              margin: '0 0px',
              width: '100%',
              position: 'relative', // Add relative positioning here
              paddingBottom: '100%', // This makes the card always square
              height: 0 // Since we're using paddingBottom to set height
          }}
          onClick={goToNewfucPage}>

        {/* Positioned Image */}
        <img src="/icons/HomePage.webp" alt="Healthy"
             style={{
                 position: 'absolute', // Image is absolutely positioned
                 top: 0,
                 left: 0,
                 width: '100%',
                 height: '100%',
                 objectFit: 'contain',  // Use contain to ensure the image fits inside
                 borderRadius: '30px' // Ensure the image also has the border radius
             }} />
    </Card>

    
    <Typography.Text style={{ marginTop: '10px', color: '#000', fontSize: fontSizes.text, fontWeight: 'bold',paddingLeft: '15px' }}>
Home       </Typography.Text>
</Col>

<Col xs={8} lg={5} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <Card bordered={false}
          style={{
              background: '#A8E5C7',
              borderRadius: '30px',
              textAlign: 'center',
              margin: '0 0px',
              width: '100%',
              position: 'relative', // Add relative positioning here
              paddingBottom: '100%', // This makes the card always square
              height: 0 // Since we're using paddingBottom to set height
          }}
          onClick={goToSettingPage}>

        {/* Positioned Image */}
        <img src="/icons/Setting.webp" alt="Healthy"
             style={{
                 position: 'absolute', // Image is absolutely positioned
                 top: 0,
                 left: 0,
                 width: '100%',
                 height: '100%',
                 objectFit: 'contain',  // Use contain to ensure the image fits inside
                 borderRadius: '30px' // Ensure the image also has the border radius
             }} />
    </Card>
    <Typography.Text style={{ marginTop: '10px', color: '#000', fontSize: fontSizes.text, fontWeight: 'bold',paddingLeft: '15px' }}>
Setting       </Typography.Text>
</Col>




<Col xs={8} lg={5} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <Card bordered={false}
          style={{
              background: '#A8E5C7',
              borderRadius: '30px',
              textAlign: 'center',
              margin: '0 0px',
              width: '100%',
              position: 'relative', // Add relative positioning here
              paddingBottom: '100%', // This makes the card always square
              height: 0 // Since we're using paddingBottom to set height
          }}
          onClick={gointroductionPage}>
        
        {/* Positioned Image */}
        <img src="/icons/Map.webp" alt="Healthy"
             style={{ 
                 position: 'absolute', // Image is absolutely positioned
                 top: 0,
                 left: 0,
                 width: '100%',
                 height: '100%',
                 objectFit: 'contain',  // Use contain to ensure the image fits inside
                 borderRadius: '30px' // Ensure the image also has the border radius
             }} />
    </Card>
    <Typography.Text style={{ marginTop: '10px', color: '#000', fontSize: fontSizes.text, fontWeight: 'bold',paddingLeft: '15px' }}>
Map        </Typography.Text>


</Col>

</Row>

</Card>
        </div>
      
        </Layout>      
  );
};

export default LanguageHelper(IntroductionPage);