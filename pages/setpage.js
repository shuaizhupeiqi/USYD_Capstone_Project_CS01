import React, { Component,useState, useEffect, useCallback } from "react";
import Router, { withRouter } from "next/router";
import { Form, Avatar,Tabs,Popover, Select, Button, Divider, Row, Col,Alert, Card,Breadcrumb } from "antd";
import Layout from "./layout";
import { LanguageHelper } from "../helpers/languageHelper";
import LoadingCard from "../components/LoadingCard";
import PopOver from "../components/Popover";
import Profile from "../components/Profile";
import {
  LoginOutlined,
  CloseCircleOutlined,
  SaveOutlined,
  ProfileOutlined,
  TranslationOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SetPage from "./setpage";
import { blue,gray, green } from '@ant-design/colors';
import LanguageSelect from "../components/LanguageSelect";
import {getAllValue} from "../helpers/storage"
import { trackInputChange } from "../helpers/withGoogleAnalytics";
import { checkUserLoggedIn, getUserInfo } from "../helpers/authHelper";
import showAlert from "../components/Notification";
import {
  createOrUpdateData,
  deleteData,
  readData,
} from "../helpers/dataHelper";
import { parseJSONValues, getAllValuesGivenKey } from "../helpers/jsonHelper";

import firebase from "firebase/compat/app";
import "firebaseui/dist/firebaseui.css";

import {
  trackInputChangeViaFirebase,
  app,
} from "../helpers/firebaseClient.js";

const {Meta} = Card;
const {TabPane} = Tabs;
// Get the basic path from the environment variable for login use
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

// Mobile terminal judgment
const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;

// structure
class SettingPage extends Component {
  constructor(props) {
    super(props);
  }
// Create a form reference for accessing and operating Form components
  formRef = React.createRef();
// The initial state of the component
  state = {
    componentSize: "middle",//Used for UI, rendering
    //Load authentication
    loading: true,

    isLoggedIn: false,

    isEmailVerified: false,
// Define empty data
    data: {},
    showAlert:true,
    // Translated text content
    translation: {
      FormLabel: "Personalize your setting:",
      LanguageSelector: "Change Language:",
      BackToHomePageButton: "Home Page",
      LoginButton: "Login/Signin",
      FormSizeLabel: "Form Size",
      FormSizeButtonSmall: "Small",
      FormSizeButtonMiddle: "Middle",
      FormSizeButtonLarge: "Large",
      FormAgeSelectionLabel: "Select your age group:",
      FormIsIllnessLabel: "Do you have any chronic illness?",
      FormRiskGroupLabel: "Are you in any this groups at greater risk?",
      FormIsTakingMedLabel: "Are you taking any medications?",
      yes: "yes",
      no: "no",
      Notice:"Notice",
      SettingBread:"Setting",
      LanguageBread:"Language",
      SaveButton:"Save and back",
      LoggedInText:"Your information will get protection",
      NotLoginText:"You haven't log in, please login to unlock the function of multiple profile",
      CardContentOne:"Set data",
    CardContentOneText:"Setting your and your family and friends' personal information and get personalised HSS data.",
    CardContentTwo:"Set Language",
    CardContentTwoText:"Change the language for your own, Chinese or English",
    CardContentThree:"Feature Comming Soon",
    CardContentThreeTextDisabled:"This place is for our future feature development, it doesn't provide any abled interaction now. ",
      riskGroupOptions: [
        {
          label: "people who are overweight",
          value: "gold",
        },
        {
          label: "pregnant women and breastfeeding mothers",
          value: "cyan",
        },
      ],
    },
    breadcrumbs:[],
    content:'cards',
    showForm: false,
    activeCard:'',
    // profiles: [{name: '', ...this.state.data}],
    settingOptions: [],
    openProfile: false,
  };
// Component added to DOM call
  componentDidMount() {
    this.loadTranslation(); //Load translation
    const width =window.innerWidth;
  }
// The life cycle method called before the component is unloaded
  componentWillUnmount() {
    // If the user does not click the save button, save the latest form values
    if (this.state.latestFormValues && !this.state.saveButtonClicked) {
      this.onSaveData(this.state.latestFormValues, false);
    }
  }
// Load translation
  async loadTranslation() {
    const { languageHelper } = this.props;
// Get translation from languageHelper
    let res = await languageHelper.translation("SettingPage", true);
    // Check user login status and email address verification
    checkUserLoggedIn(async (isLoggedIn, user) => {
      this.setState({ user: user });
      if (isLoggedIn) {
        this.setState({
          isLoggedIn: true,
        });
      }
      if (user && user.emailVerified) {
        this.setState({
          isEmailVerified: true,
        });
      }

      const allValue =getAllValue()
      // The user has logged in and verified his email, reading data from firebase
      if (isLoggedIn && user && user.emailVerified) {
        try {
          const dataFromFirebase = await readData(`users/${user.uid}`);//Call the read data in datahelper
          this.setState({
            data: dataFromFirebase.settings,
            translation: res.translation,
            settingOptions: res.data,
            isLoggedIn: isLoggedIn,
            loading: false,
          });
        } catch (error) {//If obtaining data from firebase fails, read data from localStorage.
          console.error("Operation failed:", error);

          let data = {};
          if (allValue) {
            data = allValue
          }

          this.setState({
            data: data,
            translation: res.translation,
            settingOptions: res.data,
            isLoggedIn: isLoggedIn,
            loading: false,
          });
        }
      } else {
        if (allValue) {
          let data = allValue
          this.setState({
            data: data,
            translation: res.translation,
            settingOptions: res.data,
            isLoggedIn: isLoggedIn,
            loading: false,
          });
        } else {
          this.setState({
            data: {},
            translation: res.translation,
            settingOptions: res.data,
            isLoggedIn: isLoggedIn,
            loading: false,
          });
        }
      }
    });
  }
// The function that generates the form, the option object is the data in SettingPage.json
  generateFormElements(option, index) {
    if (option.optionType === "multiple") {
      return this.generateMultipleOption(option, index);
    }
    return this.generateSingleOption(option, index);
  }
// Generate a radio selection box, accept the parameters returned by option and index, and return Form.Item
  generateSingleOption(option, index) {
    return (
      <Form.Item key={index} label={option.label} name={option.name}>
        {/* AntDesign */}
        <Select>
          {option.options.map((value, i) => {//Traverse options to generate a single selection form
            return (
              <Select.Option
                key={i + index}
                value={JSON.stringify(value.value)}//JSON stringified value
              >
                {value.label}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    );
  }
// Checkbox
  generateMultipleOption(option, index) {
    // Pass in option all options
    let allOps = option.options;
    // Convert each option into an object with label and value, where value is the value after json stringification
    let ops = allOps.map((item) => {
      return {
        label: item.label,
        value: JSON.stringify(item.value),
      };
    });

    return (//Antdesign
      <Form.Item key={index} label={option.label} name={option.name}>
        <Select
          mode="multiple"
          showArrow
          style={{
            width: "100%",
          }}
          options={ops}//Pass in the processed options array
        ></Select>
      </Form.Item>
    );
  }


  
  onFormValueChange = (changedValue, allValue) => {// Called when the form changes

    this.setState({ latestFormValues: allValue });
  };
// Handle return to home page
  handleBackToHomePage = (e) => {
    this.setState({//Update status, if you want to return to the home page, change loading to true
      loading: true,
    });
    // Use router navigation
    Router.push({
      pathname: "/",
    });
  };

// Process the state change of the selection box being opened or closed, and the incoming parameter open (the attribute open of Modal in the popover)
  handleOpenChange = (open) => {
    // Check the incoming open value, false indicates that the selection box is closed
    if (!open) {
      this.setState({ open: false });//If closed, update open
    } else {
      this.setState({ open: true }, () => {//When the selection box is opened, update the status and call doLogin
        this.doLogin();
      });
    }
  };
// Function to handle popover closing
  handlePopoverClose = () => {
    this.setState({ open: false });
  };
// Login logic
  doLogin = () => {
    // Determine the redirection path based on environment variables
    let redirectPath = process.env.NODE_ENV === "production" ? basePath : "/";
    // Import the firebaseui library, support authentication, etc., and provide built-in UI components
    let firebaseui = require("firebaseui");
    // Get the auth instance of firebaseui or create a new instance
    let ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    // Start the firebaseui auth flow using the specified configuration
    ui.start("#firebaseui", {//Present firebaseui authentication interface
      callbacks: {//Callback function when login is successful
        signInSuccessWithAuthResult: async (authResult, redirectUrl) => {
          // Close popover
          this.setState({ open: false });
          //Check if it is a new user
          const isNewUser = authResult.additionalUserInfo.isNewUser;
          // Check whether the user's email address has been verified
          if (!authResult.user.emailVerified) {
            this.setState({ isEmailVerified: false });
          }

          // If the new user has verified their email address, automatically set up email subscription in the database
          if (isNewUser) {
            if (authResult.user.emailVerified) {
              createOrUpdateData(`users/${authResult.user.uid}`, {
                emailSubscription: true,
              })
                .then(() => {
                  console.log("Operation successful");
                })
                //save the data into the local storage when save to cloud is failed
                .catch((error) => {
                  console.error("Operation failed:", error);
                  showAlert(
                    "error",
                    this.state.translation.Alert.Error.SomethingWentWrongTitle,
                    this.state.translation.Alert.Error.SaveDataErrorDescription
                  );
                  return false;
                });
            } else {
              // Email is not verified
              showAlert(
                "success",
                this.state.translation.Alert.Success.LoginSuccessTitle,
                this.state.translation.Alert.Success.LoginSuccessDescription
              );
              // Send email verification email
              authResult.user.sendEmailVerification().then(() => {
                // Show alert to inform the user
                showAlert(
                  "info",
                  this.state.translation.Alert.Info.EmailverficationTitle,
                  this.state.translation.Alert.Info.EmailverficationDescription
                );
              });
              // Set loading status to true
              this.setState({ loading: true });
              // Load translation
              await this.loadTranslation();
            }
          }
          // Show successful login
          showAlert(
            "success",
            this.state.translation.Alert.Success.LoginSuccessTitle,
            this.state.translation.Alert.Success.LoginSuccessDescription
          );
          // Set loading status
          this.setState({ loading: true });
          await this.loadTranslation();

          return true;
        },
      },
      // Login method is pop-up window
      signInFlow: "popup",
      // Login options are email and google
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      //signInSuccessUrl:redirectPath,
      // Terms of service url.
      tosUrl: "<your-tos-url>",
      // Privacy policy url.
      privacyPolicyUrl: "<your-privacy-policy-url>",
    });
  };

  //Logout logic
  doSignOut = () => {
   
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Log out successfully, update component status, close profile, set user to null (no user logged in)
        this.setState({ user: null, openProfile: false });
        // Show successful logout
        showAlert(
          "success",
          this.state.translation.Alert.Success.SignOutSuccessTitle,
          this.state.translation.Alert.Success.SignOutSuccessDescription
        );

        // Get the value of the current form,antDesign
        const formData = this.formRef.current.getFieldsValue();
        //Save the current form value to localstorage (web storage API)
        localStorage.setItem("allValue", JSON.stringify(formData));
      })
      .catch((error) => {
        console.error("Error logging out:", error);
        showAlert(
          "error",
          this.state.translation.Alert.Error.SignOutErrorTitle,
          this.state.translation.Alert.Error.SignOutErrorDescription
        );
      });
  };

  // Save data, accept two parameters, value is the value to be saved, and redirect is an optional redirect flag (save button)
  onSaveData = async (values, redirect = true) => {
    // Get current user information（authHelper getUserInfo）
    let user = await getUserInfo();
    // Redirect is true and sets the save button click state to true
    if (redirect) {
      this.setState({ saveButtonClicked: true });
    }
    // After obtaining user information
    if (user) {
      if (user.emailVerified) {
        // If the email is verified, create or update data for the user in the cloud and store the setting value (createOrUpdate--dataHelper)
        createOrUpdateData(`users/${user.uid}`, { settings: values })
          .then(() => {
            // Successful operation
            console.log("Operation successful");
          })
          //If saving data to the cloud fails, save it to LocalStorage
          .catch((error) => {
            console.error("Operation failed:", error);
            showAlert(
              "error",
              this.state.translation.Alert.Error.SomethingWentWrongTitle,
              this.state.translation.Alert.Error.SaveDataErrorDescription
            );
            localStorage.setItem("allValue", JSON.stringify(values));
          });
      } else {
        // User email is not verified, displays a prompt message and saves settings to LocalStorage
        showAlert(
          "info",
          this.state.translation.Alert.Info.SettingSavedTitle,
          this.state.translation.Alert.Info.SettingSavedAskToVeriftyDescription
        );
        localStorage.setItem("allValue", JSON.stringify(values));
      }
    } else {
      // If no user information is obtained (for example, the user is not logged in), a prompt message is displayed and the settings are saved to localStorage.
      showAlert(
        "info",
        this.state.translation.Alert.Info.SettingSavedTitle,
        this.state.translation.Alert.Info.LoginToSaveYourDataDescription
      );
      localStorage.setItem("allValue", JSON.stringify(values));
    }

    // Send events to Google Analytics to track user input changes
    trackInputChange(values);
    trackInputChangeViaFirebase(values);
    showAlert(
      "success",
      this.state.translation.Alert.Success.SettingSavedTitle,
      this.state.translation.Alert.Success.SettingSavedDescription
    );
    if (redirect) {
      this.handleBackToHomePage();
    }
  };

//Handling function for failure to save data
  onSaveDataFailed = (errorInfo) => {
   //Print error message on the console
    console.log(errorInfo);
    //  Display an error prompt box. The title and description are obtained from the translation field of the component's state.
    showAlert(
      "error",
      this.state.translation.Alert.Error.SaveFailedTitle,
      this.state.translation.Alert.Error.SomethingWentWrongTitle
    );
  };
// How to Resend Verification Email
  resendVerificationEmail = () => {
    // Get currently logged in user from firebase
    const user = firebase.auth().currentUser;
     // If the user exists
    if (user) {

      user
        .sendEmailVerification()
        .then(() => {
          showAlert(
            "info",
            this.state.translation.Alert.Info.EmailverficationTitle,
            this.state.translation.Alert.Info.EmailverficationDescription
          );
        })
        .catch((error) => {
          console.error("Error sending email verification:", error);
        });
    }
  };

// Title rendering for unauthenticated users
NotVerfiedHeader() {

  const notVerifiedHeaderStyle = {
    width: '97%',
    backgroundColor: 'salmon',
    marginTop: '1%',
    borderRadius: '10px',
    paddingLeft: '3%',
    color: 'white',
  };
  const resendLinkStyle = {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'blue',
  };

  return (
    <div>
      {isMobile ? null :(
      <div style={notVerifiedHeaderStyle}>
        <p>
          {this.state.translation.NotVerifiedNote} &emsp; 
          <span onClick={this.resendVerificationEmail} style={resendLinkStyle}>
            {this.state.translation.ResendLink}
          </span>
        </p>
      </div>
      )}
    </div>
  );
}


// Username title rendering function (after login)
  UserNameHeader() {
    let user = this.state.user;
    if (user) {
      return (
        <p>
          {this.state.translation.Hello}: {user.displayName}
        </p>
      );
    } else {
      return null;
    }
  }
// How to open the profile page
  openProfilePage() {
    this.setState({ openProfile: true });
  }
// Method to close profile page
  closeProfilePage = () => {
    this.setState({ openProfile: false });
  };
// Method to render the login button
  renderLoggedInButton() {
    return (
      <Button
        style={{
          backgroundColor: '#1677ff',
          color: 'white',
          fontWeight: 'bold'
        }}
        onClick={this.openProfilePage.bind(this)}
      >
        {this.state.translation.ManageYourProfile}
      </Button>
    );
}

//Ignore closing the message box
handleCloseAlert = () => {
  this.setState({
    showAlert: false, 
  });
};
//Personal information card
handleIndividualCardClick = () => {
  this.setState({ showForm: true, activeCard: 'individual' });
}

// For the "Language" card
handleLanguageCardClick = () => {
  this.setState({ showForm: true, activeCard: 'language' });
}

// For the "Multiplayer Profile" card
handleMultipleProfileCardClick = () => {
  this.setState({ showForm: true, activeCard: 'multiple' });
}

// form
renderForm = () => {
  if (this.state.showForm){
    if(this.state.activeCard === 'individual'){
      return(<Form
        ref={this.formRef}
        labelCol={{ span: 24, }}
        wrapperCol={{ span: 24, }}
        layout="vertical"
        initialValues={this.state.data}
        onValuesChange={this.onFormValueChange}
        size={this.state.componentSize}
        style={{ maxWidth: "100%", }}
        onFinish={this.onSaveData}
        onFinishFailed={this.onSaveDataFailed}
      >
        
            <Divider orientation="left">
              {this.state.translation.FormLabel}
            </Divider>
            {this.state.settingOptions.map((option, index) => {
              return this.generateFormElements(option, index + "FormOption");
            })}
            <Form.Item>
            <Button
              style={{
                backgroundColor: '#1677ff',
                color: 'white',
                fontWeight: 'bold',
                width: '100%',
              }}
              htmlType="submit"
              onClick={this.handleSwitchBackToCards}
              icon={<SaveOutlined />}
            >
                {this.state.translation.SaveButton}
              </Button>
              {/* <Button onClick={this.handleBackToHomePage.bind(this)} id={settingPageStyle.homePageButton} icon={<HomeOutlined />}>{this.state.translation.BackToHomePageButton}</Button> */}
            </Form.Item>

      </Form>);
    }else if (this.state.activeCard ==='language'){
      return(
        <Form>

          <Divider orientation="left">
                {this.state.translation.LanguageSelector}
              </Divider>
              <Form.Item>
                <LanguageSelect />
              </Form.Item>
          <Button
              style={{
                backgroundColor: '#1677ff',
                color: 'white',
                fontWeight: 'bold',
                width: '100%',
              }}
              htmlType="submit"
              onClick={this.handleSwitchBackToCards}
              icon={<SaveOutlined />}
            >
                {this.state.translation.SaveButton}
              </Button>
        </Form>
      );}

  }
};

handleCardClick = (cardType) => {
  if (!this.state.isLoggedIn) return;
  this.setState({
    showForm: true,
    activeCard: cardType,
  });
};

onProfileTabChange = activeKey => {
// Handle user switching tabs
};

onProfileTabEdit = (targetKey, action) => {
// Handle user editing tabs, such as adding or removing profiles
  if (action === 'add') this.addProfile();
  if (action === 'delete') this.removeProfile(targetKey);
};

handleSwitchBackToCards = () => {
  this.setState({ showForm: false });
};

getIconSize = () => {
  const width =this.width;
  if (width <= 992) return '60px'; // md
  if (width <= 1200) return '100px'; // lg
  if (width <= 1600) return '140px'; // xl
  return '60px'; // xxl
}

// Rendering of card content under personal information
renderCards = () => {
  switch (this.state.content){
    case 'cards':
  
        return(
          <div>
            <Row gutter ={[16,16]} justify="space-around">
              {/*first card */}
              <Col xs={24} sm={12} md={8} lg={6}>
                <Card 
                  hoverable
                  style={{ width: '100%', marginBottom:'20px' }}
                  onClick={() => {
                    
                      Router.push('/SettingPage');
                    
                  }}
                  cover={
                    <div style={{ backgroundColor: blue[2], display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                      <ProfileOutlined style={{ fontSize: '50px', color: "black", paddingTop:"30px",paddingBottom:"30px"}} />
                    </div>
                  }
                
                >
                 
                  <Meta title={this.state.translation.CardContentOne} 
                  description = {this.state.translation.CardContentOneText}/>
                
                </Card>
                </Col>
{/* second card */}
                <Col xs={24} sm={12} md={8} lg={6}>
                <Card 
                  hoverable
                  style={{ width: '100%', marginBottom:'20px' }}
                  onClick={() => {
                    
                      this.setState({ 
                        showForm: true, 
                        breadcrumbs: [this.state.translation.SettingBread, this.state.translation.LanguageBread],
                        activeCard: 'language',
                      });
                    
                  }}
                  cover={
                    <div style={{ backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                      <TranslationOutlined style={{ fontSize: '50px', color: "white", paddingTop:"30px",paddingBottom:"30px"}} />
                    </div>
                  }
                
                >
                  
                  <Meta title={this.state.translation.CardContentTwo} 
                  description = {this.state.translation.CardContentTwoText}/>
                
                </Card>
                </Col>
                {/* third card */}
                <Col xs={24} sm={12} md={8} lg={6}>
                <Card 
                  style={{ width: '100%', marginBottom:'10px',
                  opacity:  0.5, 
                  pointerEvents:  'none'
                }}
                  onClick={() => {
          
                    
                  }}
                  cover={
                    <div style={{ backgroundColor: green[2], display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                      <UsergroupAddOutlined style={{ fontSize: '50px', color: "black", paddingTop:"30px",paddingBottom:"30px"}} />
                    </div>
                  }
                  disabled={!this.state.isLoggedIn}
                >
            {/* You can add the content of the card here */}
                  <Meta title={this.state.translation.CardContentThree} 
                  description = {this.state.translation.CardContentThreeTextDisabled}/>
                
                </Card>
                </Col>
                <Button
                  style={{
                    backgroundColor: '#1677ff',
                    color: 'white',
                    fontWeight: 'bold',
                    width: '100%',
                    marginBottom:'10px',
                  }}
                  htmlType="submit"
                  onClick={this.handleBackToHomePage}
                  icon={<SaveOutlined />}
                >
                    {this.state.translation.SaveButton}
                  </Button>
                  </Row>
              </div>
            );
            break;
      case 'form':
        
          return this.renderForm;
        
        default:
          return <LoadingCard/>;
    
    }
  
  
};

  render() {

    return (
      <div style={this.state.openProfile ? { width: '100vw', position: 'fixed' } : null}>
        {this.state.openProfile ? (
          <Profile
            doSignOut={this.doSignOut}
            closeProfilePage={this.closeProfilePage}
          />
        ) : null}
        <Layout>
          {/* 提示信息 */}
          <Row style = {{marginTop: '10px'}}>
            <Col  span={24}>
            <Alert 
              message = {this.state.translation.Notice}
              description={
                <div style={{padding:"0 0px"}}>
                  <span style ={{color: gray[3]}}>
                    {this.state.isLoggedIn ? 
                  this.state.translation.LoggedInText : 
                  this.state.translation.NotLoginText}
                  </span>
                </div>
              } 
              type="info" 
              showIcon
              action={
                this.state.isLoggedIn?
                (
                  <Button size="small" type="primary" onClick={this.handleCloseAlert}>
                    Accept
                  </Button>
                ):null                
              }
              closable
            />
            </Col>
          </Row>
          <Divider orientation="left" 
                style={{
                  color: blue[6], 
         //Add other necessary style properties here, such as fontSize, margin, etc.
                }}></Divider>
          <Row style={{ marginTop: '20px',marginBottom:"20px",flexDirection: 'column', display:"flex",alignItems: 'center' }}> {/* 新增的Row */}
            <Col  style={{textAlign:"center",marginBottom: '10px' }}>
            <Avatar
                size={{
                  xs: 100,
                  sm: 100,
                  md: 100,
                  lg: 120,
                  xl: 150,
                  xxl: 180,
                }}
                icon={<UserOutlined style={{ fontSize: this.getIconSize(), color: "black"}} />}
              />
              
            </Col>
            <Col style={{textAlign:"center"}}>
              {this.state.isLoggedIn ? (
                <div>
                  <div>{this.state.user.name}</div>
                  <div>{this.state.user.email}</div>
                  <div>{this.state.user.phone}</div>
                 <div style={{marginTop:"5px"}}>
                 {this.renderLoggedInButton()}
                 </div>
                </div>
              ) : (
                <div>
                  <Popover
                    content={<div id={"firebaseui"} />}
                    title={
                      <div>
                        <LoginOutlined />
                        <CloseCircleOutlined
                          style={{ float: "right" }}
                          onClick={this.handlePopoverClose}
                        />
                      </div>
                    }
                    trigger="click"
                    open={this.state.open}
                    onOpenChange={this.handleOpenChange}
                    autoAdjustOverflow
                    getPopupContainer={(trigger) => trigger.parentNode}
                    overlayStyle={{width:'300px'}}
                  >
                    <Button style={{
                          backgroundColor: "#1677ff",
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                        icon={<LoginOutlined />}
                        >
                    {this.state.translation.LoginButton}
                    </Button>
                  </Popover>
                </div>
              )}
            </Col>
          </Row>
{/* If you are logged in, your email is not verified */}
          {this.state.isLoggedIn && !this.state.isEmailVerified
            ? this.NotVerfiedHeader()
            : null}
          {this.state.loading ? (
            <LoadingCard />
          ) : (
            <>
            <Divider orientation="left" 
                style={{
                  color: blue[6], 
         //Add other necessary style properties here, such as fontSize, margin, etc.
                }}/>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  {this.state.breadcrumbs.map((crumb, index) => (
                    <Breadcrumb.Item key={index}>{crumb}</Breadcrumb.Item>
                  ))}
                </Breadcrumb>
              <div>
              {this.state.showForm ? this.renderForm() : this.renderCards()}
              </div>
          </>
          )}
        </Layout>
      </div>
    );
  }
}

export default withRouter(LanguageHelper(SettingPage));