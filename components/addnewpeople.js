import React, {useState, useMemo, useEffect } from 'react';
import { Button, Avatar, Badge } from 'antd';
import { PlusOutlined,CloseCircleFilled} from '@ant-design/icons';
import Router from 'next/router';
import { nanoid } from 'nanoid';
import { useRecoilState, useRecoilValue } from "recoil";
import { isEmpty } from "lodash";
import { mulUserInfo, currentUser } from "../store/useInfo";
import { refreshState } from '../store/useInfo';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from "../hooks/useLanguage";

import { LanguageHelper } from "../helpers/languageHelper";

const ButtonGroup = ({ data, languageHelper }) => { 
  const [userInfo, setUserInfo] = useRecoilState(mulUserInfo) || [[],null]  // In the recoil library, store user information and current user information
  const [refresh, setRefresh] = useRecoilState(refreshState);

  const translation = useLanguage(languageHelper, 'UserInfo')

const carouselItems = ["Add profile for your family and friends",
"Learn more at Intorduction Page "];
const TextCarousel = ({ items, interval = 5000 }) => {
 const [activeIndex, setActiveIndex] = useState(0);
 const [goingUp, setGoingUp] = useState(true);
 const [isExpanded, setIsExpanded] = useState(true);

 useEffect(() => {
   const timer = setInterval(() => {
     setActiveIndex((prevActiveIndex) => {
       const nextIndex = goingUp ? (prevActiveIndex + 1) % items.length : (prevActiveIndex - 1 + items.length) % items.length;
 
       // Update the direction based on the index value that will be set
       if (nextIndex === items.length - 1) {
         setGoingUp(false);
       } else if (nextIndex === 0) {
         setGoingUp(true);
       }
 
       return nextIndex; // Returns the updated index
     });
   }, interval);
 
   return () => clearInterval(timer); // Clear timers to prevent memory leaks
 }, [items, interval, goingUp]); // Remove activeIndex from the dependencies, since we handle this logic in the callbacks

 const handleIconClick = () => {
   setIsExpanded(!isExpanded); //Toggle the expand/collapse state of the rotation
 };

 const carouselContainerStyle = {
   width: '100%',
   height:'20px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-start', // Center the content when it is collapsed
   marginBottom: '10px',

   marginTop: '7px',  // Here we have added a top margin
 };

 const carouselStyle = {
   width: '100%', 
   height:'18px',
   position: 'relative',
   textAlign: 'center',
   display: 'flex',
   alignItems: 'center',
   background: isExpanded ? '#339BFF' : 'transparent', // If the rotation is shrinking, set the background to transparent
   color: 'white',
   padding: isExpanded ? '3px' : '0', //If the rotation is shrinking, the inner margin is set to 0
   borderRadius: '10px',
   overflow: 'hidden',
   transition: 'all 0.5s ease-in-out', // transition effect
   maxHeight: isExpanded ? '100px' : '0', // Controlling rotation shrinkage
   width: isExpanded ? '100%' : '0', // Control the expansion/contraction of the rotation
   overflow: 'hidden', // Hide the portion that extends beyond the container
   transition: 'width 0.5s ease-in-out', // Add smooth transitions for width changes
   whiteSpace: 'nowrap', // Keep content on one line
 };

 const itemStyle = {
   flexShrink: 0, // Guarantee that the project will not be downsized
   whiteSpace: 'nowrap', // Preventing text line breaks
   overflow: 'hidden', // Hide Excess Text
   textOverflow: 'ellipsis', // Excesses are shown as ellipses
   overflow: 'hidden',
 };

 const slideIn = goingUp ? 'slide-in' : 'slide-out';
};

  const handleCurUserChange = (index) =>{ //The personal information entered by the user is stored in allvalue, which recalculates the parameters to refresh the page.
    // setCurUser(user)
    const list=userInfo?.map((item,i)=>{
      if(!!item){
        return ({...item, check:index===i})
      }
      return item
    })
    setUserInfo(list)
    localStorage.setItem("allValue", JSON.stringify(list));
   // Router.reload()
     setRefresh(!refresh);

  }

return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
    <TextCarousel items={carouselItems} />
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
      {
        userInfo?.map((item, index) => (
         <>
          {!isEmpty(item) ? (
              <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              
              <Avatar 
  size={80} 
  onClick={() => handleCurUserChange(index)}
  style={{ 
    backgroundColor: item?.check ? '#f56a00' :'#eee',
    cursor: "pointer",
    marginTop: '15px',
    marginBottom: '-10px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }}
>
  <div style={{ fontSize: '0.8em' }}> {/* Adjust font size to fit Avatar */}
    {item?.firstName} {/* Display full name directly */}
  </div>
</Avatar>
                <h4 
                  style={{ 
                    backgroundColor: '#005B8E',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    maxWidth: '150px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    marginBottom: '-2px' 
                  }}
                >
                  {item?.Relationship ? translation?.Relationship?.[(JSON.parse(item?.Relationship)?.label)] : translation?.Relationship?.Anonymous}
                </h4>
                </div>
              
            ) : null
          }
         </>
        ))
      }
    </div>
  </div>
);

};

export default LanguageHelper(ButtonGroup);