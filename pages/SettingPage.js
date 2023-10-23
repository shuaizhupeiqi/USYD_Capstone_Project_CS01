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
import settingPageStyle from "../styles/SettingPage.module.css";
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
 * 1.home页面增加三个账户按钮 done
 * 2.账户按钮点击可切换选中的curUser done
 * 3.点击加号可以新增user done
 * 4.整个项目展示选中的user对应的信息 done
 * 5.直接进入setting页面修改的信息为curUser信息 done
 * 6.获取信息的时候拿的缓存需要是curUser的用户信息对应的 done
 * 7.如果没有登陆，可以在主页的三个按钮增加用户 done
 * 8.没有主次用户之分，就是可以增加3个用户 done
 * 9.初始化获取缓存中的数据 done
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

          // const parsedData = parseJSONValues(dataFromFirebase.settings);

          this.setState({
            data: dataFromFirebase.settings,
            translation: res.translation,
            settingOptions: res.data, //res是有关language的data
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
        if (allValue && isNil(this.props?.query?.userIndex)) { //如果当前是更改的话，将这个值
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
  // 根据选项类型生成表单元素

  generateFormElements(option, index) {
    if (option.optionType === "multiple") { //多选
      return this.generateMultipleOption(option, index);
    } else if(option.optionType === "input") { //输入
      return this.generateInput(option, index);
    }
    return this.generateSingleOption(option, index);//单选
  }
  generateInput(option, index) { //渲染输入框类型的表单
    return (
      <Form.Item key={index} label={option.label} name={option.name}>
        <Input allowClear/>
      </Form.Item>
    );
  }
  // 生成单选项

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
  // 生成多选项

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

  // onFormLayoutChange = ({size}) => {
  //     this.setState({componentSize: size})
  // }
  // 当表单值变化时的处理函数

  onFormValueChange = (changedValue, allValue) => {
    // const fieldName = Object.keys(changedValue)[0];
    // const fieldValue = changedValue[fieldName];

    // Send event to Google Analytics
    // trackInputChange(fieldName, fieldValue);

    // localStorage.setItem("allValue", JSON.stringify(allValue));

    //this.onFormLayoutChange(allValue)
    this.setState({ latestFormValues: allValue });
  };
  // 处理返回首页的事件

  handleBackToHomePage = (e) => { //保存之后，跳转到首页的操作
    this.setState({
      loading: true,
    });
    Router.push({
      pathname: "/",
    });
  };
  // 处理开关变化的事件

  handleOpenChange = (open) => {
    if (!open) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true }, () => {
        this.doLogin();
      });
    }
  };
  // 关闭弹窗

  handlePopoverClose = () => {
    this.setState({ open: false });
  };
  // 执行登录操作

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
  // 执行登出操作

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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> {/* 确保内容居中 */}
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
                    <h4>&nbsp;</h4> {/* 保持空间占位，以保证垂直对齐 */}
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
  

  handleCreateUser = (data) => { //data是从onsavedata方法中拿到的，就是用户填的信息
    
    const {curIndex} = this.state
    const { setUserInfo,  userInfo } = this.props
    const nowUser=userInfo?.[curIndex] //想要操作的是第几个用户

    let user={uid:nanoid(), ...nowUser, ...data} //更新或者创建的用户信息

      let list = [...userInfo] 
      list.splice(curIndex,1,user)
  
      if(list?.filter((item)=>!!item)?.length===1){//过滤3个用户，判断是否有一个不为null的用户，选中当前这个用户
        // setCurUser(user)
        // localStorage.setItem("allValue", JSON.stringify(user)); //默认选中第一个用户
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
      this.formRef.current?.setFieldsValue({...nameList}) //清空当前表单（清除不同用户缓存的操作）
  

  }
  

  onSaveData = async (values, redirect = true) => {
    let user = await getUserInfo(); //firebace里存的用户信息

    if (redirect) {
      this.setState({ saveButtonClicked: true });
    }

    if (user) {
      if (user.emailVerified) { //验证是否登录
        createOrUpdateData(`users/${user.uid}`, { settings: values }) //firebace的方法，创建或者更新用户信息
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
  
        this.handleCreateUser(values);//如果验证失败，则走创建用户的方法
      }
    } else {
      showAlert(
        "info",
        this.state.translation.Alert.Info.SettingSavedTitle,
        this.state.translation.Alert.Info.LoginToSaveYourDataDescription
      );
    
      this.handleCreateUser(values);
    }

    // Send event to Google Analytics，实际好像并没用到
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
  // 保存数据失败时的处理函数

  onSaveDataFailed = (errorInfo) => {
    console.log(errorInfo);
    showAlert(
      "error",
      this.state.translation.Alert.Error.SaveFailedTitle,
      this.state.translation.Alert.Error.SomethingWentWrongTitle
    );
  };
  // 重新发送验证邮件

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
  // 渲染未验证头部

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
  // 渲染用户名头部

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
  // 打开个人资料页面

  openProfilePage() {
    this.setState({ openProfile: true });
  }
  // 关闭个人资料页面

  closeProfilePage = () => {
    this.setState({ openProfile: false });
  };
  // 渲染已登录按钮

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
  // 渲染组件

  render() {
    return (
      <div style={this.state.openProfile ? { width: '100vw', position: 'fixed' } : null}>
    
      {/*判断用户是否打开了profile */}
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
                  // 在此处添加其他必要的样式属性，例如 fontSize、margin 等
                }}>
                {this.state.isLoggedIn ? this.UserNameHeader() : null}
              </Divider>
              <Form.Item>
                {this.state.isLoggedIn ? (
                  this.renderLoggedInButton()
                ) : (
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
                  >
                    <Button style={{
                          backgroundColor: "#005B8E",
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                        icon={<LoginOutlined />}
                        >
                      {this.state.translation.LoginButton}
                    </Button>
                  </Popover>
                )}
              </Form.Item>
              <Divider orientation="left">
                {this.state.translation.LanguageSelector}
              </Divider>
              <Form.Item>
                <LanguageSelect />
              </Form.Item>
              <Divider orientation="left">
                {this.state.translation.FormLabel}
              </Divider>

            
              {this.state.settingOptions.map((option, index) => {
                return this.generateFormElements(option, index + "FormOption"); //渲染setting page里的选项
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

const SettingPageFn = (props) => {   //因为这个页面没有改成函数组件，所以将这个页面套在一个函数组件中
  const [userInfo, setUserInfo] = useRecoilState(mulUserInfo)
  // const [curUser, setCurUser] = useRecoilState(currentUser)
  // const router = useRouter(); //存储路由信息和操作
  const curIndex = useMemo(()=>{
    /**
     * 1.用户从首页点击加号到setting，代表新增操作，直接返回当前的userindex
     * 2.用户直接进入setting page，
     *  2.1判断当前选中的是哪一个用户，找到索引并返回，代表更新当前这一个用户信息
     *  2.2如果当前没有创建过用户，返回索引0，来创建第一个用户
     *  
    */
    // if(!isNil(router?.query?.userIndex)){ //判断是否获得了userindex，如果是，返回相应的索引
    //   return Number(router?.query?.userIndex) 
    // }
  const idx=userInfo?.findIndex((item)=>item?.check) //如果没有userindex，看选中的是第几个，找到它的索引
  return idx!==-1? idx:0 
  },[userInfo])

  return (
    <SettingPage {...props} 
      userInfo={userInfo}
      // curUser={curUser}
      curIndex={curIndex}
      // query={router.query}   //需要使用query对每个用户特殊标识进行存储
      setUserInfo={setUserInfo}
      // setCurUser={setCurUser}
    />
  )
}

export default withRouter(LanguageHelper(SettingPageFn));