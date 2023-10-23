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

const ButtonGroup = ({ data }) => { 
  const [userInfo, setUserInfo] = useRecoilState(mulUserInfo) || [[],null]   //在recoil库中，存储用户信息和当前用户的信息
  // const [curUser, setCurUser] = useRecoilState(currentUser)
  // const handleButtonClick = (index) => {
  //   Router.push({
  //     pathname: '/SettingPage',
  //     query: {
  //       userIndex: index //生成一个具有标识意义的id
  //     }
  //   });
  // };
  const [refresh, setRefresh] = useRecoilState(refreshState);

// 轮播框

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
 
       // 基于即将设置的索引值更新方向
       if (nextIndex === items.length - 1) {
         setGoingUp(false);
       } else if (nextIndex === 0) {
         setGoingUp(true);
       }
 
       return nextIndex; // 返回更新的索引
     });
   }, interval);
 
   return () => clearInterval(timer); // 清除定时器防止内存泄露
 }, [items, interval, goingUp]); // 从依赖项中移除activeIndex，因为我们在回调中处理了这个逻辑

 const handleIconClick = () => {
   setIsExpanded(!isExpanded); // 切换轮播的展开/收缩状态
 };

 const carouselContainerStyle = {
   width: '100%',
   height:'20px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-start', // 使内容在收缩时居中显示
   marginBottom: '10px',

   marginTop: '7px',  // 这里增加了上边距
 };

 const carouselStyle = {
   width: '100%', 
   height:'18px',
   position: 'relative',
   textAlign: 'center',
   display: 'flex',
   alignItems: 'center',
   background: isExpanded ? '#339BFF' : 'transparent', // 如果轮播是收缩的，背景设为透明
   color: 'white',
   padding: isExpanded ? '3px' : '0', // 如果轮播是收缩的，内边距设为0
   borderRadius: '10px',
   overflow: 'hidden',
   transition: 'all 0.5s ease-in-out', // 过渡效果
   maxHeight: isExpanded ? '100px' : '0', // 控制轮播的收缩
   width: isExpanded ? '100%' : '0', // 控制轮播的展开/收缩
   overflow: 'hidden', // 隐藏超出容器的部分
   transition: 'width 0.5s ease-in-out', // 添加宽度变化的平滑过渡
   whiteSpace: 'nowrap', // 保持内容在一行显示
 };

 const itemStyle = {
   flexShrink: 0, // 保证项目不会缩小
   whiteSpace: 'nowrap', // 防止文本换行
   overflow: 'hidden', // 隐藏超出的文本
   textOverflow: 'ellipsis', // 超出部分显示为省略号
   overflow: 'hidden',
 };

 const slideIn = goingUp ? 'slide-in' : 'slide-out';

 
};

  const handleCurUserChange = (index) =>{ //将用户输入的个人信息存在allvalue里，从而重新计算出参数，以达到刷新页面的效果
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

// const handleDelteuser=(index)=>{
//   const user=userInfo?.[index]
//   const list = [...userInfo] //更新用户信息列表
//   list.splice(index,1,null)
//   setUserInfo(list)
//   localStorage.setItem("allValueList", JSON.stringify(list));
//   const haveValueUser=list?.filter((item)=>!!item)
//   if(user?.uid===curUser?.uid && haveValueUser?.length>=1){
//     const nowUser=list?.find((item)=>!!item)
//     handleCurUserChange(nowUser)
//   }

// }

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
  size={100} 
  onClick={() => handleCurUserChange(index)}
  style={{ 
    backgroundColor: item?.check ? '#f56a00' :'#eee',
    cursor: "pointer",
    marginTop: '5px', // 调整向下的上边距
    marginBottom: '-5px' // 调整向上的下边距
  }}
>
  {item?.firstName?.substring(0, 1)?.toLocaleUpperCase()}
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
                    whiteSpace: 'nowrap'
                  }}
                >
                  {item?.Relationship ? (JSON.parse(item?.Relationship)?.label) : 'Anonymous'}
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

export default ButtonGroup;