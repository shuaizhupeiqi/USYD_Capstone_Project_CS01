import React, { Component, useMemo, useState } from "react";
import Router, {useRouter, withRouter } from "next/router";
import { Form, Select, Button, Divider, Popover, Popconfirm, Input, Avatar, Badge } from "antd";
import { PlusOutlined,CloseCircleFilled} from '@ant-design/icons';
import { useRecoilState } from "recoil";
import {mulUserInfo, currentUser } from "../store/useInfo";
import Layout from "./layout";
import { LanguageHelper } from "../helpers/languageHelper";
import LoadingCard from "./../components/LoadingCard";
import Profile from "../components/Profile";
import {
  LoginOutlined,
  CloseCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import LanguageSelect from "./../components/LanguageSelect";
import { trackInputChange } from "../helpers/withGoogleAnalytics";
import {getAllValue} from "../helpers/storage"
import { checkUserLoggedIn, getUserInfo } from "../helpers/authHelper";
import showAlert from "./../components/Notification";
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
} from "./../helpers/firebaseClient.js";
import { isEmpty, isNil } from "lodash";
import { nanoid } from 'nanoid'


const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;


const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
/**
  * 1. Add three account buttons to the home page done
  * 2. Click the account button to switch the selected curUser done
  * 3. Click the plus sign to add user done
  * 4. The entire project displays the information corresponding to the selected user done
  * 5. Directly enter the setting page to modify the information for curUser information done
  * 6. The cache obtained when obtaining information needs to correspond to the user information of curUser done
  * 7. If you are not logged in, you can add users through the three buttons on the homepage done
  * 8. There is no distinction between primary and secondary users, that is, you can add 3 users done
  * 9. Initialize and obtain the data in the cache done
  */

class SettingPage extends Component {
  constructor(props) {
    super(props);
  }
  formRef = React.createRef();


  state = {
    componentSize: "middle",
    // settingdefauleuser:this.props.curUser,
    curIndex:this.props?.curIndex,
    loading: true,
    isLoggedIn: false,
    isEmailVerified: false,

    data: {},
    

    translation: {
      FormLabel: "Personalize your setting: ",
      LanguageSelector: "Change Language:",
      BackToHomePageButton: "Home Page",
      AddNewPeople:"add a new user",
      LoginButton: "Login to enable email notification",
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
    settingOptions: [],
    openProfile: false,
  };

  componentDidMount() {
    
    this.loadTranslation();
  }

  componentWillUnmount() {
    // This function will be called when the component is about to be unmounted
    if (this.state.latestFormValues && !this.state.saveButtonClicked) {
      this.onSaveData(this.state.latestFormValues, false);
    }
  }

  async loadTranslation() {
    const { languageHelper } = this.props;

    let res = await languageHelper.translation("SettingPage", true);

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
      const allValue=getAllValue()
      if (isLoggedIn && user && user.emailVerified) {
        try {
          const dataFromFirebase = await readData(`users/${user.uid}`);
          this.setState({
            data: dataFromFirebase.settings,
            translation: res.translation,
            settingOptions: res.data, 
            isLoggedIn: isLoggedIn,
            loading: false,
          });
        } catch (error) {
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
        if (allValue && isNil(this.props?.query?.userIndex)) { // If it is currently changing, change this value
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
// Generate form elements based on option type

  generateFormElements(option, index) {
    if (option.optionType === "multiple") { 
      return this.generateMultipleOption(option, index);
    } else if(option.optionType === "input") { 
      return this.generateInput(option, index);
    }
    return this.generateSingleOption(option, index);
  }
  generateInput(option, index) { 
    return (
      <Form.Item key={index} label={option.label} name={option.name}>
        <Input allowClear/>
      </Form.Item>
    );
  }
 // Generate single option

  generateSingleOption(option, index) {
    return (
      <Form.Item key={index} label={option.label} name={option.name}>
        <Select allowClear>
          {option.options.map((value, i) => {
            return (
              <Select.Option
                key={i + index}
                value={JSON.stringify(value.value)}
              >
                {value.label}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    );
  }
// Generate multiple options

  generateMultipleOption(option, index) {
    let allOps = option.options;

    let ops = allOps.map((item) => {
      return {
        label: item.label,
        value: JSON.stringify(item.value),
      };
    });

    return (
      <Form.Item key={index} label={option.label} name={option.name}>
        <Select
          mode="multiple"
          showArrow
          // tagRender={this.tagRender}
          style={{
            width: "100%",
          }}
          allowClear
          options={ops}
          // defaultValue={this.state.riskGroup}
        ></Select>
      </Form.Item>
    );
  }
  onFormValueChange = (changedValue, allValue) => {

    this.setState({ latestFormValues: allValue });
  };
// Handle the event of returning to the homepage

  handleBackToHomePage = (e) => { 
    this.setState({
      loading: true,
    });
    Router.push({
      pathname: "/",
    });
  };


  handleOpenChange = (open) => {
    if (!open) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true }, () => {
        this.doLogin();
      });
    }
  };
//Close pop-up window

  handlePopoverClose = () => {
    this.setState({ open: false });
  };
//Perform login operation

  doLogin = () => {
    let redirectPath = process.env.NODE_ENV === "production" ? basePath : "/";
    let firebaseui = require("firebaseui");
    let ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui", {
      callbacks: {
        signInSuccessWithAuthResult: async (authResult, redirectUrl) => {
          this.setState({ open: false });

          const isNewUser = authResult.additionalUserInfo.isNewUser;

          if (!authResult.user.emailVerified) {
            this.setState({ isEmailVerified: false });
          }

          // if is new user and is email verfied this means logged in via gmail, auto add a email subcritpion true into the database
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
              // Check if user's email has been verified
              showAlert(
                "success",
                this.state.translation.Alert.Success.LoginSuccessTitle,
                this.state.translation.Alert.Success.LoginSuccessDescription
              );
              // Send email verification
              authResult.user.sendEmailVerification().then(() => {
                // Show alert to inform the user
                showAlert(
                  "info",
                  this.state.translation.Alert.Info.EmailverficationTitle,
                  this.state.translation.Alert.Info.EmailverficationDescription
                );
              });

              this.setState({ loading: true });
              await this.loadTranslation();
            }
          }

          showAlert(
            "success",
            this.state.translation.Alert.Success.LoginSuccessTitle,
            this.state.translation.Alert.Success.LoginSuccessDescription
          );

          this.setState({ loading: true });
          await this.loadTranslation();

          return true;
        },
      },
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      //signInSuccessUrl:redirectPath,
      // Tercms of service url.
      tosUrl: "<your-tos-url>",
      // Privacy policy url.
      privacyPolicyUrl: "<your-privacy-policy-url>",
    });
  };
//Perform the logout operation

  doSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ user: null, openProfile: false });
        showAlert(
          "success",
          this.state.translation.Alert.Success.SignOutSuccessTitle,
          this.state.translation.Alert.Success.SignOutSuccessDescription
        );
        // save the current form value into the localstroage
        const formData = this.formRef.current.getFieldsValue();
        // localStorage.setItem("allValue", JSON.stringify(formData));
        this.handleCreateUser(formData)
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

  renderUserButton = () => {
    const { userInfo } = this.props;
    const { curIndex } = this.state;
    console.log('888', userInfo);
  
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', marginTop: '20px'  }}>
        {
          userInfo?.map((item, index) => (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
              {
                !isEmpty(item) ? (
                  <>
                    <Badge count={<CloseCircleFilled onClick={() => this.handleDelteuser(index)} style={{ color: 'red', fontSize: 22 }} />}>
                      <Avatar
                        size={100}
                        onClick={() => this.handleCurUserChange(item, index)}
                        style={{ backgroundColor: index === curIndex ? '#f56a00' : '#eee', cursor: "pointer" }}
                      >
                        {item?.firstName?.substring(0, 1)?.toLocaleUpperCase()}
                      </Avatar>
                    </Badge>
                    <h4>{item?.Relationship ? JSON.parse(item?.Relationship)?.label : ''}</h4>


                  </>
                ) : (
                  <>
                    <Avatar
                      size={100}
                      style={{ cursor: "pointer", backgroundColor: index === curIndex ? '#f56a00' : '#eee' }}
                      onClick={() => this.handleButtonClick(index)}
                      
                    >{this.state.translation.AddNewPeople}</Avatar>
                    <h4>&nbsp;</h4>{/* Maintain space to ensure vertical alignment */}
                  </>
                )
              }
            </div>
          ))
        }
      </div>
    );
  };
  handleDelteuser=(index)=>{
    const { setUserInfo, userInfo } = this.props
    const user=userInfo?.[index]
    const list = [...userInfo] 
    list.splice(index,1,null)
    // const haveValueUser=list?.filter((item)=>!!item)
    if(user?.check){
      const idx=list?.findIndex((item)=>!!item)
      idx!=-1 && list.splice(idx,1,{...(list?.[idx]),check:true})
      
      
    }
    setUserInfo(list)
    localStorage.setItem("allValue", JSON.stringify(list));
  
  }

  handleButtonClick = (index)=>{
    const nameList = this.state.settingOptions?.reduce((res,item) =>({...res,[item.name]: undefined}), {})
    console.log('111111111' ,nameList)
    this.formRef.current?.setFieldsValue({...nameList})

    this.setState({curIndex: index})
  }

   handleCurUserChange = (user, index) =>{ 
    this.formRef.current?.setFieldsValue({...user})
    this.setState({curIndex: index})
  }
  

  handleCreateUser = (data) => { //The data is obtained from the onsavedata method, which is the information filled in by the user.
    
    const {curIndex} = this.state
    const { setUserInfo,  userInfo } = this.props
    const nowUser=userInfo?.[curIndex] //Which user do you want to operate?

    let user={uid:nanoid(), ...nowUser, ...data} //Updated or created user information

      let list = [...userInfo] 
      list.splice(curIndex,1,user)
  
      if(list?.filter((item)=>!!item)?.length===1){//Filter 3 users, determine if there is a user that is not null, and select the current user
        // setCurUser(user)
        // localStorage.setItem("allValue", JSON.stringify(user)); //The first user is selected by default
        list=list?.map(item=>{
          if(!!item){
              return{...item,check:true}
          }
          return item
        })
      }
      
      setUserInfo(list)
      localStorage.setItem("allValue", JSON.stringify(list)); 
      console.log('798',list)
      const nameList = this.state.settingOptions?.reduce((res,item) =>({...res,[item.name]: undefined}), {})
      this.formRef.current?.setFieldsValue({...nameList}) //Clear the current form (clear operations cached by different users)
  

  }
  

  onSaveData = async (values, redirect = true) => {
    let user = await getUserInfo(); //User information stored in firebase

    if (redirect) {
      this.setState({ saveButtonClicked: true });
    }

    if (user) {
      if (user.emailVerified) { //Verify login
        createOrUpdateData(`users/${user.uid}`, { settings: values }) //Firebase method to create or update user information
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
            this.handleCreateUser(values);

          });
      } else {
        showAlert(
          "info",
          this.state.translation.Alert.Info.SettingSavedTitle,
          this.state.translation.Alert.Info.SettingSavedAskToVeriftyDescription
        );
  
        this.handleCreateUser(values);//If verification fails, take the method of creating a user
      }
    } else {
      showAlert(
        "info",
        this.state.translation.Alert.Info.SettingSavedTitle,
        this.state.translation.Alert.Info.LoginToSaveYourDataDescription
      );
    
      this.handleCreateUser(values);
    }

    // Send event to Google Analytics，
    //trackInputChange(values);
    // send event to firebase analytics
    //trackInputChangeViaFirebase(values);
    showAlert(
      "success",
      this.state.translation.Alert.Success.SettingSavedTitle,
      this.state.translation.Alert.Success.SettingSavedDescription
    );
    if (redirect) {
      this.handleBackToHomePage();
    }
  };
  // Handling function when saving data fails

  onSaveDataFailed = (errorInfo) => {
    console.log(errorInfo);
    showAlert(
      "error",
      this.state.translation.Alert.Error.SaveFailedTitle,
      this.state.translation.Alert.Error.SomethingWentWrongTitle
    );
  };
  // Resend verification email

  resendVerificationEmail = () => {
    const user = firebase.auth().currentUser;
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
  // Rendering unvalidated header

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
  // Render username header

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
  //Open profile page

  openProfilePage() {
    this.setState({ openProfile: true });
  }
  // Close profile page

  closeProfilePage = () => {
    this.setState({ openProfile: false });
  };
  // Render the logged in button

  renderLoggedInButton() {
    return (
      <Button
        style={{
          backgroundColor: '#005B8E',
          color: 'white',
          fontWeight: 'bold'
        }}
        onClick={this.openProfilePage.bind(this)}
      >
        {this.state.translation.ManageYourProfile}
      </Button>
    );
}
  //render component

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
          {this.state.isLoggedIn && !this.state.isEmailVerified
            ? this.NotVerfiedHeader()
            : null}
          {this.state.loading ? (
            <LoadingCard />
          ) : (
            <>
              {this.renderUserButton()}
             <Form
              ref={this.formRef}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              layout="vertical"
              initialValues={this.state.data}
              onValuesChange={this.onFormValueChange}
              size={this.state.componentSize}
              style={{
                maxWidth: "100%",
              }}
              onFinish={this.onSaveData}
              onFinishFailed={this.onSaveDataFailed}
            >
              <Divider orientation="left" 
                style={{
                  color: "#001219#", 
               //Add other necessary style properties here, such as fontSize, margin, etc.
                }}>
                {this.state.isLoggedIn ? this.UserNameHeader() : null}
              </Divider>
  
  
              <Divider orientation="middle" style={{ textAlign: 'center' }}>
    <span style={{
        fontFamily: 'Courier New, Courier, monospace', // Use different fonts
        fontWeight: 'bold', // Bold
        textTransform: 'uppercase', // Convert text to uppercase
        color: '', // change color
        fontSize: '22px' // Adjust font size

    }}>
        {this.state.translation.FormLabel}
    </span>
</Divider>


            
              {this.state.settingOptions.map((option, index) => {
                return this.generateFormElements(option, index + "FormOption"); //Render options in the settings page
              })}
              <Form.Item>
                <div style={{display:"flex", justifyContent:"center"}}> 
                <Button
                  style={{backgroundColor:"#005B8E",
                color:"white",
              fontWeight:"bold",
            justifyContent:"center"}}
                  htmlType="submit"
                  icon={<SaveOutlined />}
                >
                  {this.state.translation.SaveYourChanges}
                </Button>
                </div>
                {/* <Button onClick={this.handleBackToHomePage.bind(this)} id={settingPageStyle.homePageButton} icon={<HomeOutlined />}>{this.state.translation.BackToHomePageButton}</Button> */}
              </Form.Item>
            </Form>
            </>
          )}
        </Layout>
      </div>
    );
  }
}

const SettingPageFn = (props) => {  
  const [userInfo, setUserInfo] = useRecoilState(mulUserInfo)

  const curIndex = useMemo(()=>{
/**
      * 1. The user clicks the plus sign from the homepage to setting, which represents a new operation and returns directly to the current userindex.
      * 2. The user directly enters the setting page,
      * 2.1 Determine which user is currently selected, find the index and return it, which means updating the current user information
      * 2.2 If no user has been created currently, return index 0 to create the first user.
      *
     */
     // if(!isNil(router?.query?.userIndex)){ //Determine whether userindex is obtained, if so, return the corresponding index
     // return Number(router?.query?.userIndex)
     // }
  const idx=userInfo?.findIndex((item)=>item?.check) //If there is no userindex, check which number is selected and find its index.
  return idx!==-1? idx:0 
  },[userInfo])

  return (
    <SettingPage {...props} 
      userInfo={userInfo}
      // curUser={curUser}
      curIndex={curIndex}
      // query={router.query}   //Query needs to be used to store the special identification of each user
      setUserInfo={setUserInfo}
      // setCurUser={setCurUser}
    />
  )
}

export default withRouter(LanguageHelper(SettingPageFn));