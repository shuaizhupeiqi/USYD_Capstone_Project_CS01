//This page is the standard layout for all pages
import React, { useEffect } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useRecoilState, useRecoilValue } from "recoil";
import { isEmpty } from "lodash";
import { mulUserInfo, currentUser } from "../store/useInfo";


function Layout(props) {
  const [userInfo, setUserInfo] = useRecoilState(mulUserInfo) || [[],null]
    useEffect(() => {
    // const list = localStorage.getItem('allValueList')
    const user = localStorage.getItem('allValue')
    if (!isEmpty(user)) {
      setUserInfo?.(JSON.parse(user))
    }
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
        boxSizing: 'border-box', // Adding box-sizing ensures that padding and borders do not increase the width of the element
      }}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}


export default Layout;