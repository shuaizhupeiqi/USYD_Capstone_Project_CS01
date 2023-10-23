import React, { Component } from "react";
import { withRouter } from "next/router";
import Layout from "./layout";
import { LanguageHelper } from "../helpers/languageHelper";
import ReactMarkdown from "react-markdown";
import LoadingCard from "./../components/LoadingCard";

import { Card, Typography,Modal, Divider, Row, Col, Collapse, Image as AntdImage} from 'antd';

const { Title, Text,Paragraph,Link} = Typography;
const {Panel}=Collapse;



class AboutPage extends Component {
  
  constructor(props) {
    super(props);
    //TODO: put necessary init process here
  }

  state = {
    loading: true,
    translation: {
      mainText:
        "# About Heat Stress Scale (HSS)\n\n## Definition and aim\n\nThe Heat Stress Scale (HSS) aims at enhancing community resilience to heatwave disasters. \nThe HSS consists of four stratified risk categories (low, moderate, high, and extreme). \n\n## More about the scale\nThe HSS provides a simple interpretation of the current and forecasted heat stress risk.\nIt does so by using outdoor air temperature, humidity, solar radiation, and wind speed. \nThese parameters are obtained from the [Norwegian Meteorological Institute](https://www.met.no/).\nEnvironmental parameters are then combined with personal parameters and used as an input in a physiological human thermoregulation model.\n\nThe approach used to calculate and interpret thermal balance is based on the most recent findings in science. \nFurther developments regarding the computation of the various terms in the heat balance equation or their interpretation will be considered as they become available.\nThis model estimates the risk of overheating and dehydration and associated negative health effects.\n\nThis tool evaluates the risk for a typical individual.\nConsequently, it cannot accurately estimate the exact risk encountered by every single individual.\nFor this reason, this application is intended for informational use only.\nIt is not intended to provide medical advice or replace professional medical judgment, diagnosis, or treatment. \n\n## Disclaimer and User Agreement\nThis application is intended for informational and educational purposes only. \nIt is not intended to provide medical advice or replace professional medical judgment, diagnosis, or treatment. \n\nIt visualises meteorological data form the [Norwegian Meteorological Institute](https://www.met.no/) and calculates heat stress risk using a thermophysiological model.\nThe authors of this application do not take any responsibility for the accuracy, completeness, or reliability of the information presented. \n\nUsers should always consult with a qualified healthcare professional for any questions regarding their health or medical conditions. \nBy using this application, users acknowledge and agree that they assume full responsibility for their use of the information provided.\nThe users also acknowledge that the authors of this application are not liable for any damages arising from the use of this application.\n\n## Data Confidentiality Statement:\nThis application uses Google Analytics to collect de-identified data for the purpose of improving the user experience and providing insights into how the application is being used. \nNo personally identifiable information is collected or stored. \nAll data is treated as confidential and is securely stored in compliance with applicable data protection regulations. \nWe do not sell or share any data with third parties.\nBy using this application, you agree to the collection and use of data as described in this statement.",
    },
  };

  componentDidMount() {
    this.loadTranslation();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  async loadTranslation() {
    const { languageHelper } = this.props;

    let res = await languageHelper.translation("AboutPage"); //The input will take the name of this class to get the corresponding translation for this page

    this.setState({
      loading: false,
      translation: res,
    });
  }

  render() {
    const isMobile = this.state.windowWidth <= 768; // 你可以根据需要调整这个值
    const bigTitleStyle = {
      backgroundColor: '#5A5A5A',
      color: 'white',
      fontSize: isMobile ? '2em' : '3em',
      padding: '10%',
      textAlign: 'center',
      height: '3vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    return (
      <div>


        <Layout>
          {this.state.loading ? (
            <LoadingCard />
          ) : (
            <div>
               
            
               <Card bordered={false} style={{ textAlign: 'center', width: '114.5%', marginLeft: '-8%', marginRight: '-8%' , backgroundColor: "black"}}>
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
</div>  </Card>
              <ReactMarkdown>{this.state.translation.mainText}</ReactMarkdown>
            
            </div>
          )}
        </Layout>
      </div>
    );
  }
}

export default withRouter(LanguageHelper(AboutPage));
