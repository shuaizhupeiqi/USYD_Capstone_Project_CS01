import React, { Component } from "react";
import { withRouter } from "next/router";
import Layout from "./layout";
import { LanguageHelper } from "../helpers/languageHelper";


import { Carousel,Button, Tabs,Card, Typography,Modal, Divider, Row, Col, List,Tooltip, Collapse, Image as AntdImage} from 'antd';

const cardWidth = '100%'; // 无需useState和useEffect，直接设置为百分比

const { Title, Text,Paragraph,Link} = Typography;
const {Panel}=Collapse;
const { TabPane } = Tabs;
const tabStyle = {
  flex: 1,
  display: 'block',  // 这是为了确保覆盖默认的antd样式
};

// import styles from '../styles/1.module.css';
class DocumentPage extends Component {
  
  constructor(props) {
    super(props);
  }

  state = {
    loading: true,
    translation: {
      mainText:
        "# Heat Stress Scale - Documentation\n\n\nThis tool evaluates the risk for a 'typical individual'.\nConsequently, it cannot accurately estimate the exact risk encountered by every single individual.\nFor this reason, this application is intended for informational use only.\nIt is not intended to provide medical advice or replace professional medical judgment, diagnosis, or treatment.\n\n# Age Groups and population\n\n**Healthy adults** a person that falls into the 19 to 65 age category.\n\n **Healthy older adults** People aged 65 years who do not have any medical conditions.\n\n **Children** People aged younger than 19 years old.",
    },
  };

  componentDidMount() {
    this.loadTranslation();
  }

  async loadTranslation() {
    const { languageHelper } = this.props;

    let res = await languageHelper.translation("DocumentPage");

    this.setState({
      loading: false,
      translation: res,
    });
  }

  render() {
    return (
      <div>
        <Layout>
        <Card  bordered={false} style={{ width: cardWidth, background: '#E8F5FA', padding: '0px', textAlign: 'center', borderRadius: '30px' }}
      activeTabKey="tab1"
      onTabChange={key => {
        console.log(key);
      }}

      >
          <Paragraph style={{color: '#767676', fontWeight: 'normal', fontSize: '16px', textAlign: 'justify'}}>
           On HSS, you can locate which group of people you belong to. You can also check for your family and friends.
             </Paragraph>

             
             <Tabs defaultActiveKey="tab1" size="small" centered tabBarStyle={{  width: '100%' }}>
  <TabPane
    tab={
      <span style={{ ...tabStyle, flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Healthy</span>
      
    }
    key="tab1"
  >
    {1}
  </TabPane>

  <TabPane
    tab={
      <span style={{ ...tabStyle, flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Vulnerable</span>
    }
    key="tab2"
  >
    {2}
  </TabPane>

  <TabPane
    tab={
      <span style={{ ...tabStyle, flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Comorbidity</span>
    }
    key="tab3"
  >
    {3}
  </TabPane>
</Tabs>



      </Card>
        </Layout>
      </div>
    );
  }
}

export default withRouter(LanguageHelper(DocumentPage));
