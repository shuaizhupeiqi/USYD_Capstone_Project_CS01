"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[155],{53575:function(e,t,o){o.d(t,{Z:function(){return z}});var n=o(94184),r=o.n(n),a=o(62874),i=o(67294),s=o(53124),l=o(98787),c=o(96159),u=o(27431),d=o(67968),m=o(45503),b=o(63443),g=o(14747);let p=new u.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),f=new u.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),$=new u.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),h=new u.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),y=new u.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),S=new u.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),O=e=>{let{componentCls:t,iconCls:o,antCls:n,badgeFontHeight:r,badgeShadowSize:a,badgeHeightSm:i,motionDurationSlow:s,badgeStatusSize:l,marginXS:c,badgeRibbonOffset:u}=e,d=`${n}-scroll-number`,m=`${n}-ribbon`,O=`${n}-ribbon-wrapper`,w=(0,b.j)(e,(e,o)=>{let{darkColor:n}=o;return{[`${t}-color-${e}`]:{background:n}}}),C=(0,b.j)(e,(e,t)=>{let{darkColor:o}=t;return{[`&${m}-color-${e}`]:{background:o,color:o}}});return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,g.Wf)(e)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${t}-count`]:{zIndex:e.badgeZIndex,minWidth:e.badgeHeight,height:e.badgeHeight,color:e.badgeTextColor,fontWeight:e.badgeFontWeight,fontSize:e.badgeFontSize,lineHeight:`${e.badgeHeight}px`,whiteSpace:"nowrap",textAlign:"center",background:e.badgeColor,borderRadius:e.badgeHeight/2,boxShadow:`0 0 0 ${a}px ${e.badgeShadowColor}`,transition:`background ${e.motionDurationMid}`,a:{color:e.badgeTextColor},"a:hover":{color:e.badgeTextColor},"a:hover &":{background:e.badgeColorHover}},[`${t}-count-sm`]:{minWidth:i,height:i,fontSize:e.badgeFontSizeSm,lineHeight:`${i}px`,borderRadius:i/2},[`${t}-multiple-words`]:{padding:`0 ${e.paddingXS}px`},[`${t}-dot`]:{zIndex:e.badgeZIndex,width:e.badgeDotSize,minWidth:e.badgeDotSize,height:e.badgeDotSize,background:e.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${a}px ${e.badgeShadowColor}`},[`${t}-dot${d}`]:{transition:`background ${s}`},[`${t}-count, ${t}-dot, ${d}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`${o}-spin`]:{animationName:S,animationDuration:e.motionDurationMid,animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${t}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${t}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:l,height:l,verticalAlign:"middle",borderRadius:"50%"},[`${t}-status-success`]:{backgroundColor:e.colorSuccess},[`${t}-status-processing`]:{position:"relative",color:e.colorPrimary,backgroundColor:e.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:a,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:p,animationDuration:e.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${t}-status-default`]:{backgroundColor:e.colorTextPlaceholder},[`${t}-status-error`]:{backgroundColor:e.colorError},[`${t}-status-warning`]:{backgroundColor:e.colorWarning},[`${t}-status-text`]:{marginInlineStart:c,color:e.colorText,fontSize:e.fontSize}}}),w),{[`${t}-zoom-appear, ${t}-zoom-enter`]:{animationName:f,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`${t}-zoom-leave`]:{animationName:$,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`&${t}-not-a-wrapper`]:{[`${t}-zoom-appear, ${t}-zoom-enter`]:{animationName:h,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`${t}-zoom-leave`]:{animationName:y,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`&:not(${t}-status)`]:{verticalAlign:"middle"},[`${d}-custom-component, ${t}-count`]:{transform:"none"},[`${d}-custom-component, ${d}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${d}`]:{overflow:"hidden",[`${d}-only`]:{position:"relative",display:"inline-block",height:e.badgeHeight,transition:`all ${e.motionDurationSlow} ${e.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${d}-only-unit`]:{height:e.badgeHeight,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${d}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${t}-count, ${t}-dot, ${d}-custom-component`]:{transform:"translate(-50%, -50%)"}}}),[`${O}`]:{position:"relative"},[`${m}`]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,g.Wf)(e)),{position:"absolute",top:c,height:r,padding:`0 ${e.paddingXS}px`,color:e.colorPrimary,lineHeight:`${r}px`,whiteSpace:"nowrap",backgroundColor:e.colorPrimary,borderRadius:e.borderRadiusSM,[`${m}-text`]:{color:e.colorTextLightSolid},[`${m}-corner`]:{position:"absolute",top:"100%",width:u,height:u,color:"currentcolor",border:`${u/2}px solid`,transform:e.badgeRibbonCornerTransform,transformOrigin:"top",filter:e.badgeRibbonCornerFilter}}),C),{[`&${m}-placement-end`]:{insetInlineEnd:-u,borderEndEndRadius:0,[`${m}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${m}-placement-start`]:{insetInlineStart:-u,borderEndStartRadius:0,[`${m}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};var w=(0,d.Z)("Badge",e=>{let{fontSize:t,lineHeight:o,fontSizeSM:n,lineWidth:r,marginXS:a,colorBorderBg:i}=e,s=Math.round(t*o),l=e.colorBgContainer,c=e.colorError,u=e.colorErrorHover,d=(0,m.TS)(e,{badgeFontHeight:s,badgeShadowSize:r,badgeZIndex:"auto",badgeHeight:s-2*r,badgeTextColor:l,badgeFontWeight:"normal",badgeFontSize:n,badgeColor:c,badgeColorHover:u,badgeShadowColor:i,badgeHeightSm:t,badgeDotSize:n/2,badgeFontSizeSm:n,badgeStatusSize:n/2,badgeProcessingDuration:"1.2s",badgeRibbonOffset:a,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"});return[O(d)]});let C=e=>{let{className:t,prefixCls:o,style:n,color:a,children:c,text:u,placement:d="end"}=e,{getPrefixCls:m,direction:b}=i.useContext(s.E_),g=m("ribbon",o),p=(0,l.o2)(a,!1),f=r()(g,`${g}-placement-${d}`,{[`${g}-rtl`]:"rtl"===b,[`${g}-color-${a}`]:p},t),[$,h]=w(g),y={},S={};return a&&!p&&(y.background=a,S.color=a),$(i.createElement("div",{className:r()(`${g}-wrapper`,h)},c,i.createElement("div",{className:r()(f,h),style:Object.assign(Object.assign({},y),n)},i.createElement("span",{className:`${g}-text`},u),i.createElement("div",{className:`${g}-corner`,style:S}))))};function E(e){let t,{prefixCls:o,value:n,current:a,offset:s=0}=e;return s&&(t={position:"absolute",top:`${s}00%`,left:0}),i.createElement("span",{style:t,className:r()(`${o}-only-unit`,{current:a})},n)}function x(e){let t,o;let{prefixCls:n,count:r,value:a}=e,s=Number(a),l=Math.abs(r),[c,u]=i.useState(s),[d,m]=i.useState(l),b=()=>{u(s),m(l)};if(i.useEffect(()=>{let e=setTimeout(()=>{b()},1e3);return()=>{clearTimeout(e)}},[s]),c===s||Number.isNaN(s)||Number.isNaN(c))t=[i.createElement(E,Object.assign({},e,{key:s,current:!0}))],o={transition:"none"};else{t=[];let n=s+10,r=[];for(let e=s;e<=n;e+=1)r.push(e);let a=r.findIndex(e=>e%10===c);t=r.map((t,o)=>i.createElement(E,Object.assign({},e,{key:t,value:t%10,offset:o-a,current:o===a}))),o={transform:`translateY(${-function(e,t,o){let n=e,r=0;for(;(n+10)%10!==t;)n+=o,r+=o;return r}(c,s,d<l?1:-1)}00%)`}}return i.createElement("span",{className:`${n}-only`,style:o,onTransitionEnd:b},t)}var N=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let v=i.forwardRef((e,t)=>{var{prefixCls:o,count:n,className:a,motionClassName:l,style:u,title:d,show:m,component:b="sup",children:g}=e,p=N(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]);let{getPrefixCls:f}=i.useContext(s.E_),$=f("scroll-number",o),h=Object.assign(Object.assign({},p),{"data-show":m,style:u,className:r()($,a,l),title:d}),y=n;if(n&&Number(n)%1==0){let e=String(n).split("");y=e.map((t,o)=>i.createElement(x,{prefixCls:$,count:Number(n),value:t,key:e.length-o}))}return(u&&u.borderColor&&(h.style=Object.assign(Object.assign({},u),{boxShadow:`0 0 0 1px ${u.borderColor} inset`})),g)?(0,c.Tm)(g,e=>({className:r()(`${$}-custom-component`,null==e?void 0:e.className,l)})):i.createElement(b,Object.assign({},h,{ref:t}),y)});var k=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};let j=e=>{var{prefixCls:t,scrollNumberPrefixCls:o,children:n,status:u,text:d,color:m,count:b=null,overflowCount:g=99,dot:p=!1,size:f="default",title:$,offset:h,style:y,className:S,rootClassName:O,showZero:C=!1}=e,E=k(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","showZero"]);let{getPrefixCls:x,direction:N}=i.useContext(s.E_),j=x("badge",t),[z,I]=w(j),T=b>g?`${g}+`:b,D="0"===T||0===T,R=(null!=u||null!=m)&&(null===b||D&&!C),B=p&&!D,F=B?"":T,P=(0,i.useMemo)(()=>(null==F||""===F||D&&!C)&&!B,[F,D,C,B]),W=(0,i.useRef)(b);P||(W.current=b);let H=W.current,Z=(0,i.useRef)(F);P||(Z.current=F);let M=Z.current,_=(0,i.useRef)(B);P||(_.current=B);let A=(0,i.useMemo)(()=>{if(!h)return Object.assign({},y);let e={marginTop:h[1]};return"rtl"===N?e.left=parseInt(h[0],10):e.right=-parseInt(h[0],10),Object.assign(Object.assign({},e),y)},[N,h,y]),V=null!=$?$:"string"==typeof H||"number"==typeof H?H:void 0,L=P||!d?null:i.createElement("span",{className:`${j}-status-text`},d),U=H&&"object"==typeof H?(0,c.Tm)(H,e=>({style:Object.assign(Object.assign({},A),e.style)})):void 0,X=(0,l.o2)(m,!1),Y=r()({[`${j}-status-dot`]:R,[`${j}-status-${u}`]:!!u,[`${j}-color-${m}`]:X}),q={};m&&!X&&(q.color=m,q.background=m);let G=r()(j,{[`${j}-status`]:R,[`${j}-not-a-wrapper`]:!n,[`${j}-rtl`]:"rtl"===N},S,O,I);if(!n&&R){let e=A.color;return z(i.createElement("span",Object.assign({},E,{className:G,style:A}),i.createElement("span",{className:Y,style:q}),d&&i.createElement("span",{style:{color:e},className:`${j}-status-text`},d)))}return z(i.createElement("span",Object.assign({},E,{className:G}),n,i.createElement(a.Z,{visible:!P,motionName:`${j}-zoom`,motionAppear:!1,motionDeadline:1e3},e=>{let{className:t,ref:n}=e,a=x("scroll-number",o),s=_.current,l=r()({[`${j}-dot`]:s,[`${j}-count`]:!s,[`${j}-count-sm`]:"small"===f,[`${j}-multiple-words`]:!s&&M&&M.toString().length>1,[`${j}-status-${u}`]:!!u,[`${j}-color-${m}`]:X}),c=Object.assign({},A);return m&&!X&&((c=c||{}).background=m),i.createElement(v,{prefixCls:a,show:!P,motionClassName:t,className:l,count:M,title:V,style:c,key:"scrollNumber",ref:n},U)}),L))};j.Ribbon=C;var z=j},53416:function(e,t,o){o.d(t,{x0:function(){return n}});let n=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>((t&=63)<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"")}}]);