//This page is the standard layout for all pages
import React, { useEffect } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useRecoilState, useRecoilValue } from "recoil";
import { isEmpty } from "lodash";
import { mulUserInfo, currentUser } from "../store/useInfo";


function Layout(props) {
  const [userInfo, setUserInfo] = useRecoilState(mulUserInfo) || [[],null]
  // const [curUser, setCurUser] = useRecoilState(currentUser)

    useEffect(() => {
    // const list = localStorage.getItem('allValueList')
    const user = localStorage.getItem('allValue')
    if (!isEmpty(user)) {
      setUserInfo?.(JSON.parse(user))
    }
    // if (!isEmpty(user)) {
    //   setCurUser?.(JSON.parse(user))
    // }
  },[])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <NavBar />
      <div style={{
        padding: '0 0.5rem',
        width: '100%',
        minHeight: 'calc(100vh - 50px)',
        margin: 'auto',
        boxSizing: 'border-box', // 添加 box-sizing 可以确保 padding 和 border 不会增加元素的宽度
      }}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}


export default Layout;