(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8090],{74638:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Newfuc",function(){return a(97388)}])},97388:function(e,l,a){"use strict";a.r(l);var i=a(85893),t=a(67294),n=a(75109),s=a(5152),r=a.n(s),d=a(23681),c=a(56029),o=a(40092),h=a(15045),u=a(24688),x=a(26981),p=a(85813),y=a(75081),j=a(79531),g=a(71577);let{Panel:f}=h.Z,{Title:w,Paragraph:m}=u.Z,{TabPane:b}=x.Z,v=r()(()=>Promise.all([a.e(9269),a.e(4335)]).then(a.bind(a,44335)),{loadableGenerated:{webpack:()=>[44335]},ssr:!1}),k=e=>{let[l,a]=(0,t.useState)({isPublicDisplay:e.isPublicDisplay,publicDisplayGeoData:e.publicDisplayGeoData,data:null,geoData:{latitude:-33.8,longitude:151.01,hourly:"temperature_2m,relativehumidity_2m,cloudcover,windspeed_10m",timezone:"Australia/Sydney"},loading:!0,translation:{},addressDefaultValue:"Parramatta Westfield, NSW, 2150",hour:0,week:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],forcasts:[],maxLevelForecast:[],chartType:"LineChart",currentRiskValue:0,legendNow:[],legendMax:[],portialLegendNow:[],portialLegendMax:[]}),s={},r=e=>{let l={latitude:e.lat,longitude:e.lng};a(e=>({...e,geoData:l}))};if((0,t.useEffect)(()=>{a(e=>({...e,loading:!0})),(0,n.ss)(l.geoData,10,s).then(e=>{a(l=>({...l,data:e,loading:!1}))}).catch(e=>{console.error("An error occurred:",e),a(e=>({...e,loading:!1}))})},[l.geoData]),l.loading)return(0,i.jsx)(d.default,{children:(0,i.jsx)(p.Z,{style:{textAlign:"center",marginTop:"20vh"},children:(0,i.jsx)(y.Z,{tip:"Loading..."})})});let{data:u,maxLevelForecast:w}=l.data;return(0,i.jsxs)(d.default,{children:[(0,i.jsx)("div",{style:{height:"15vh",backgroundColor:"#4CAF50",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)("h1",{style:{fontSize:"2em",color:"white"},children:"Test new func"})}),(0,i.jsxs)(p.Z,{style:{background:"#E8F5FA",width:"100%",borderRadius:"30px"},children:[(0,i.jsx)(m,{style:{color:"#767676",fontSize:"16px",textAlign:"justify"},children:"Click on the coordinates on the map to view the HSS value. (Test Phase)"}),(0,i.jsxs)(x.Z,{defaultActiveKey:"1",children:[(0,i.jsx)(b,{tab:"Hss for today",children:(0,i.jsx)(h.Z,{className:o.Z.collapseForecast,children:u.slice(0,1).map((e,a)=>(0,i.jsxs)(f,{header:"Day ".concat(a,": Max Level Forecast Chart"),children:[(0,i.jsxs)("p",{children:["Day ",a,": Max Risk Value ",w[a].maxRiskValue]}),(0,i.jsx)(c.Z,{data:e,chartType:l.chartType})]},a))})},"1"),(0,i.jsx)(b,{tab:"View local specific information",children:(0,i.jsx)(h.Z,{children:(0,i.jsx)(f,{header:"Detailed info",children:(0,i.jsx)("div",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:l.data?JSON.stringify(l.data,null,2):"Loading..."})})})},"2"),(0,i.jsx)(b,{tab:"Calculate HSS value manually",children:(0,i.jsx)(h.Z,{children:(0,i.jsx)(f,{header:"Calculator",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"input value："}),(0,i.jsxs)("div",{style:{margin:"10px 0"},children:[(0,i.jsx)("label",{children:"humidity："}),(0,i.jsx)(j.Z,{style:{width:"150px"},placeholder:"Humidity"})]}),(0,i.jsxs)("div",{style:{margin:"10px 0"},children:[(0,i.jsx)("label",{children:"windy："}),(0,i.jsx)(j.Z,{style:{width:"150px"},placeholder:"Windy"})]}),(0,i.jsxs)("div",{style:{margin:"10px 0"},children:[(0,i.jsx)("label",{children:"cloudy："}),(0,i.jsx)(j.Z,{style:{width:"150px"},placeholder:"Cloudy"})]}),(0,i.jsx)(g.ZP,{type:"primary",onClick:()=>console.log("数据已提交!"),children:"submit"})]})})})},"3")]})]}),(0,i.jsx)("div",{style:{height:"50vh",width:"100%"},children:(0,i.jsx)(v,{onMapClick:r,initialCenter:l.geoData})})]})};l.default=k}},function(e){e.O(0,[3662,2016,1627,2677,5871,4496,5045,6785,7882,7985,3681,8200,9774,2888,179],function(){return e(e.s=74638)}),_N_E=e.O()}]);