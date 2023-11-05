import React, { Component,useState, useEffect } from "react";
import { Menu, BackTop,Row, Col, ConfigProvider, Typography, Button} from "antd";
import { UpOutlined,MenuFoldOutlined, MenuUnfoldOutlined,HomeOutlined,SettingOutlined,LineChartOutlined ,BookOutlined,EyeOutlined ,EllipsisOutlined,MenuOutlined } from "@ant-design/icons";

import { volcano,gray } from '@ant-design/colors';
import Router, { withRouter } from "next/router";

import { LanguageHelper } from "../helpers/languageHelper";

import LoadingCard from "./../components/LoadingCard";

// const { Search } = Input;
// const { Option } = Select;

const { SubMenu } = Menu;
const { Title } = Typography;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const menuStyle = {
  backgroundColor: "#001219",
  color:"white"
};
const menuItemStyle = {
  color: "white",
};


class NavBar extends Component{
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }

  state = {
    
    landscape: false,
    loading: true,
    submenuVisible: false,
 
    sidebarButtonVisible: false,
    miniNavbarVisible: false,
    isSubMenuOpen: false,
    translation: {
      // webTitlemob: "heat stress scale",
      // webTitle: "HSS",
      // moreTap: "More",
      // settingTap: "Setting",
      // languageTap: "Language",
      // documentTap: "Documentation",
      // aboutTap: "About",
      // homePage: "Home",
      // introductionTap:"Introduction",
      // mobileMenuTitle: "Menu",
      // aboutTTap: "About"
    },
    color: {
      WebSiteThemeColor: "black",
    },
    supportedLanguages: [],
 
    interactiveItemKey: null,
    sel_keys: "",
  };

  componentDidMount() {
    this.loadTranslation();
    window.addEventListener("resize", this.handleResize);
    //Newly added scroll listener
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
    this.loadSupportedLanguage();
    this.setState({ loading: false });
  }
  handleMenuOutlinedClick = () => {
    this.setState(prevState => ({
      isSubMenuOpen: !prevState.isSubMenuOpen
    }));
  };
  

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    //Newly added scroll listener
    window.removeEventListener('scroll', this.handleScroll);
  }

  async loadTranslation() {
    const { languageHelper } = this.props;
    let res = await languageHelper.translation("NavigationBar");
    this.setState({ translation: res });
  }

  async loadSupportedLanguage() {
    const { languageHelper } = this.props;
    let res = await languageHelper.loadSupoortLanguage();
    this.setState({ supportedLanguages: res });
  }

  handleResize() {
    this.setState({ landscape: window.innerWidth > 770,
    windowWidth: window.innerWidth});
  }

  handleBackToHomePage = (e) => {
    this.setState({
      sel_keys: e,
    });
    Router.push({
      pathname: "/HomePage",
    });
  };
  handleBackIntroductionPage = (e) => {
    this.setState({
      sel_keys: e,
    });
    Router.push({
      pathname: "/IntroductionPage",
    });
  };
  handleAboutPage = (e) => {
    this.setState({
      sel_keys: e,
    });
    Router.push({
      pathname: "/AboutPage",
    });
  };
  handleMorePage = (e) => {
    this.setState({
      sel_keys: e,
    });
    Router.push({
      pathname: "/Newfuc",

    });
  };

  handlePage = (e) => {
    this.setState({
      sel_keys: e,
    });
    Router.push({
      pathname: "/IntroductionPage",
    });
  };

  handleSettingPage = (e) => {
    this.setState({
      sel_keys: e,
    });
    Router.push({
      pathname: "/setpage",
    });
  };

  handleDocumentationPage = (e) => {
    this.setState({
      sel_keys: e,
    });
    Router.push({
      pathname: "/DocumentPage",
    });
  };

  handleIntroductionPage = (e) => {
    this.setState({
      sel_keys: e,
    });
    Router.push({
      pathname: "/IntroductionPage",
    });
  };

  mainView = () => {
    if (this.state.landscape) {
      return this.landScapeView();
    } else {
      return this.portialView();
    }
  };

  handleMenuOutlinedClick = (e) => {
    this.setState((prevState) => ({
      submenuVisible: !prevState.submenuVisible,
    }));
  };

  handleTitleClick = (e) => {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    }
    this.handleBackToHomePage();
};

//Mouse hover listening function web page
handleMouseEnter = (key) => {
  this.setState({interactiveItemKey: key});
};

handleMouseLeave = () => {
  this.setState({interactiveItemKey: null});
};
//Scroll listening function on mobile terminal
handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 50 && !this.state.sidebarButtonVisible) {
      this.setState({ sidebarButtonVisible: true });
  } else if (currentScrollY <= 50 && this.state.sidebarButtonVisible) {
      this.setState({ sidebarButtonVisible: false });
  }
};

//Mobile side button click
handleSidebarButtonClick = () => {
  this.setState(prevState => ({ miniNavbarVisible: !prevState.miniNavbarVisible }));
};



  landScapeView = () => {
    
    const { sel_keys } = this.state;
    // The original style of the navigation bar
    const hoverLandscapeStyle ={
      color: "white",
       padding: '0px',
       margin: '0px',
 
       height: '100%',
       backgroundColor: "#088587",
   
     }
    
    const menuItemRightStyle = {
      color: "white",
      marginLeft: "auto",
    };

    const hoverTitleStyle = {
      padding: '0 16px',
     color: "white",
   };

    let barTitle = this.state.windowWidth > 1200 ? 2 : 3;
    let barText = this.state.windowWidth > 1200 ? 3 : 4 ;


    let landScapeNavBarItems = [
   

      {
        label: (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center', 
                    cursor: 'pointer'
                }}
                onClick={this.handleIntroductionPage}
                onMouseEnter={() => this.handleMouseEnter(this.state.translation.webTitle)}
                onMouseLeave={this.handleMouseLeave}
            >
      
              
                <Title
                    level={barText}
                    style={this.state.interactiveItemKey === this.state.translation.webTitle ? { ...menuItemStyle, ...hoverTitleStyle } : menuItemStyle}
                >
                    {this.state.translation.webTitle}
                </Title>
            </div>
        ),
        key: this.state.translation.webTitle,
    },
    
      
      {
        label: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
      
            />
            <Title 
              level={barText}
              style={this.state.interactiveItemKey === this.state.translation.introductionTap ? {...menuItemStyle, ...hoverTitleStyle} : menuItemStyle}
              onClick={this.handleBackIntroductionPage}
              onMouseEnter={()=>this.handleMouseEnter(this.state.translation.introductionTap)}
              onMouseLeave={this.handleMouseLeave}
            >
              {this.state.translation.introductionTap}
            </Title>
          </div>
        ),
        key: this.state.translation.introductionTap,
      },
     
      {
        label: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
     
            />
            <Title 
              level={barText}
              style={this.state.interactiveItemKey === this.state.translation.homePage ? {...menuItemStyle, ...hoverTitleStyle} : menuItemStyle}
              onClick={this.handleBackToHomePage}
              onMouseEnter={()=>this.handleMouseEnter(this.state.translation.homePage)}
              onMouseLeave={this.handleMouseLeave}
            >
              {this.state.translation.homePage}
            </Title>
          </div>
        ),
        key: this.state.translation.homePage,
      },
   
      {
        label: (
           <Title level={barText}
           style={this.state.interactiveItemKey === this.state.translation.settingTap ? {...menuItemStyle, ...hoverTitleStyle} : menuItemStyle}
           onClick={this.handleSettingPage}
           onMouseEnter={()=>this.handleMouseEnter(this.state.translation.settingTap)}
           onMouseLeave={this.handleMouseLeave}
           >
             {this.state.translation.settingTap}
           </Title>
        ),
         key: this.state.translation.settingTap,
       },
      {
        label: (
          <Title level={barText}
          style={this.state.interactiveItemKey === this.state.translation.aboutTap ? {...menuItemStyle, ...hoverTitleStyle} : menuItemStyle}
          onClick={this.handleAboutPage}
          onMouseEnter={()=>this.handleMouseEnter(this.state.translation.aboutTap)}
          onMouseLeave={this.handleMouseLeave}
          >
            {this.state.translation.aboutTap}
          </Title>
        ),
        key: this.state.translation.aboutTap,
      }
    ];
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: volcano[5],
          },
        }}
      >
        <div style={menuStyle}>
         <Menu
             style={menuStyle}
             selectedKeys={[sel_keys]}
             key="navBar"
             mode="horizontal"
         >
      
           <Row style={{ width: "100%" }}>
             <Col flex="auto" style={{ height: "100%" }}>
             <img 
  src={basePath + "/icons/android-chrome-512x512.png" }
  loading="lazy"
  style={{ 
      marginLeft: '60px',  // Add this attribute to move the image to the right
      marginTop: '-15px',    // Use negative values to move the image upwards
      width: '50px', 
      height: '50px', 
      verticalAlign: 'middle' 
  }} 
  alt="icon" 
/>

               <Menu.Item
                 key={landScapeNavBarItems[0].key}
                 style={
                  this.state.interactiveItemKey === landScapeNavBarItems[0].key
                      ? {...menuItemStyle, ...hoverLandscapeStyle}
                        : menuItemStyle
                }
               >
                 {landScapeNavBarItems[0].label}
               </Menu.Item>
             </Col>
             
             <Col flex="none" style={{ height: "100%", transform: 'translateX(-55px)' }}>
               {landScapeNavBarItems.slice(1).map((item) => (
                 <Menu.Item
                   key={item.key}
                   style={
                    this.state.interactiveItemKey === item.key 
                      ? {...menuItemRightStyle, ...hoverLandscapeStyle}
                        : menuItemRightStyle
                  }
                 >
                   {item.label}
                 </Menu.Item>
               ))}
             </Col>
           </Row>
         </Menu>
       </div>
     </ConfigProvider>
    );
  };

  portialView = () => {
// Return to the top style
    const backTopStyle = {
      height: 40,
      width: 40,
      lineHeight: '40px',
      borderRadius: 4,
      backgroundColor: gray[6],
      color: '#fff',
      textAlign: 'center',
      fontSize: 14,
  };
  const hoverPortialStyle ={
    color: "white",
     padding: '10px',
     margin: '0px',
 //In order to eliminate the influence of the built-in style of menu.item
     height: '100%',
     width:'100%',
     backgroundColor: "#088587",
//Time to over-color
     transition: 'color 0.3s ease',
   }
  
    return (
      <>
  {/* Side navigation, note that zIndex does not need to be set after the external css file is deleted */}
      {this.state.sidebarButtonVisible && (
            <div style={{ position: 'fixed', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex:1000 }}>
                <Button 
                    icon={this.state.miniNavbarVisible ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />} 
                    onClick={this.handleSidebarButtonClick}
                />

                {this.state.miniNavbarVisible && (
                    <div style={{ position: 'absolute', top: '100%', left: 0,zIndex:1000 }}>
                        <Menu mode="vertical">
                            <Menu.Item icon={<HomeOutlined />} onClick={this.handleIntroductionPage} />
                            <Menu.Item icon={<LineChartOutlined />} onClick={this.handleBackToHomePage} />
                            <Menu.Item icon={<SettingOutlined />} onClick={this.handleSettingPage} />
                            <Menu.Item icon={<BookOutlined />} onClick={this.handleAboutPage} />
                            <Menu.Item icon={<EllipsisOutlined />} onClick={this.handleMorePage} />
                        </Menu>
                    </div>
                )}
            </div>
        )}
      <ConfigProvider
      theme={{
        token: {
          colorPrimary: volcano[7],
        },
      }}
    >
      <Menu
        style={menuStyle}
        key="navBar"
        mode="inline"
      >
        <SubMenu
          title={
            <Row 
              gutter={8} 
              align="middle"
              justify="space-between"
              onClick={e => e.stopPropagation()}  // Stop bubbling events
              style={{color:"white"}}
            >
              
           <Col>
  <div onClick={this.handleTitleClick}>
    {/* The picture in the middle of the mobile phone */}
    <img 
     loading="lazy"
      src= {basePath + "/icons/android-chrome-512x512.png" }
      style={{ marginRight: '8px', width: '20px', height: '20px', verticalAlign: 'middle' }} 
      alt="icon" 
    />

<span style={{ fontWeight: 'bold', fontSize: 'larger', color: '' }}>
        {this.state.translation.webTitlemob}
    </span>
  </div>
</Col>
<Col>
  <div 
    onClick={this.handleMenuOutlinedClick} 
    style={{ 
      cursor: 'pointer', // Shown as a hand
      position: 'relative',
      left: '10px', // Adjust this value according to your needs
      zIndex: 1,  // Make sure this element is on top of other elements
      color:"white"
    }}
  >
    <MenuOutlined style={{color:"white"}}/>
  </div>

</Col>
<style>{`
      .ant-menu-submenu-title:active,
      .ant-menu-submenu-title:hover,
      .ant-menu-submenu-title:focus {
        color: white !important;
      }
      .ant-menu-submenu-title:active .ant-menu-submenu-arrow,
      .ant-menu-submenu-title:hover .ant-menu-submenu-arrow,
      .ant-menu-submenu-title:focus .ant-menu-submenu-arrow {
        color: white !important;
      }
    `}</style>

            </Row>
          }
          key="sub-menu"
     
          visible={this.state.isSubMenuOpen}
          onTitleClick={(e) => {
            e.domEvent.stopPropagation();  // Prevent default click event
          }}
        >
          <Menu.Item
            key="introductionTab"
            style={
              this.state.hoverItemKey === "introductionTab"
                ? { ...menuItemStyle, ...hoverPortialStyle }
                : menuItemStyle
            }
            
            onClick={this.handleIntroductionPage.bind(this)}
        >
            <span style={{ display: 'flex', alignItems: 'center' }}>
                <EyeOutlined style={{ marginRight: '8px', color: this.state.hoverItemKey === "introductionTab" ? hoverPortialStyle.color : undefined }} />
                {this.state.translation.introductionTap}
            </span>
        </Menu.Item>

        <Menu.Item
          key="websiteNameMobile"
          style={
            this.state.hoverItemKey === "homePage"
              ? { ...menuItemStyle, ...hoverPortialStyle }
              : menuItemStyle
          }
          
          onClick={this.handleBackToHomePage.bind(this)}
      >
          <span style={{ display: 'flex', alignItems: 'center' }}>
              <LineChartOutlined style={{ marginRight: '8px', color: this.state.hoverItemKey === "homePage" ? hoverPortialStyle.color : undefined }} />
              {this.state.translation.homePage}
          </span>
      </Menu.Item>


      <Menu.Item
        key="settingTap"
        style={
          this.state.hoverItemKey === "settingTap"
            ? { ...menuItemStyle, ...hoverPortialStyle }
            : menuItemStyle
        }
        
        onClick={this.handleSettingPage.bind(this)}
    >
        <span style={{ display: 'flex', alignItems: 'center' }}>
            <SettingOutlined style={{ marginRight: '8px', color: this.state.hoverItemKey === "settingTap" ? hoverPortialStyle.color : undefined }} />
            {this.state.translation.settingTap}
        </span>
    </Menu.Item>


          <Menu.Item
            key="aboutTap"
            style={
              this.state.hoverItemKey === "aboutTab"
                ? { ...menuItemStyle, ...hoverPortialStyle }
                : menuItemStyle
            }
            
            onClick={this.handleAboutPage.bind(this)}
          >
            <BookOutlined style={{ marginRight: '8px' }}/>
            {this.state.translation.aboutTap}
          </Menu.Item>

          <Menu.Item
            key="moreTap"
            style={
              this.state.hoverItemKey === "moreTab"
                ? { ...menuItemStyle, ...hoverPortialStyle}
                : menuItemStyle
            }
            
            onClick={this.handleMorePage.bind(this)}
          >
            <EllipsisOutlined style={{ marginRight: '8px' }}/>
            {this.state.translation.moreTap}
          </Menu.Item>

          </SubMenu>
          </Menu>
          </ConfigProvider>

          <BackTop>
          <div style={backTopStyle}><UpOutlined /></div>
        </BackTop>
        </>  );
        }
 

render() {
  console.log(this.state.translation);
  return (
    <div>
      {this.state.loading ? <LoadingCard /> : this.mainView()}
    </div>
    );
  }
}  

export default withRouter(LanguageHelper(NavBar));