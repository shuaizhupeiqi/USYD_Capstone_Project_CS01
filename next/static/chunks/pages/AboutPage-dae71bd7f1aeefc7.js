(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{71525:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/AboutPage",function(){return i(20783)}])},20783:function(e,t,i){"use strict";i.r(t);var n=i(67573),a=i(85893),o=i(67294),s=i(11163),r=i(23681),d=i(81921),l=i(74740),h=i(19996),c=i(24688),u=i(15045),p=i(85813);let{Title:m,Text:f,Paragraph:g,Link:w}=c.Z,{Panel:y}=u.Z;class b extends o.Component{componentDidMount(){this.loadTranslation(),this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}componentWillUnmount(){window.removeEventListener("resize",this.updateWindowDimensions)}async loadTranslation(){let{languageHelper:e}=this.props,t=await e.translation("AboutPage");this.setState({loading:!1,translation:t})}render(){return this.state.windowWidth,(0,a.jsx)("div",{children:(0,a.jsx)(r.default,{children:this.state.loading?(0,a.jsx)(h.Z,{}):(0,a.jsxs)("div",{children:[(0,a.jsx)(p.Z,{bordered:!1,style:{textAlign:"center",borderRadius:0,width:"116%",marginLeft:"-8%",marginRight:"-8%",backgroundColor:"#5A5A5A"},children:(0,a.jsx)(m,{style:{fontSize:"300%",fontWeight:"bold",color:"white"},children:"About Heat Stress Scale (HSS)"})}),(0,a.jsx)(l.D,{children:this.state.translation.mainText})]})})})}constructor(e){super(e),(0,n.Z)(this,"state",{loading:!0,translation:{mainText:"# About Heat Stress Scale (HSS)\n\n## Definition and aim\n\nThe Heat Stress Scale (HSS) aims at enhancing community resilience to heatwave disasters. \nThe HSS consists of four stratified risk categories (low, moderate, high, and extreme). \n\n## More about the scale\nThe HSS provides a simple interpretation of the current and forecasted heat stress risk.\nIt does so by using outdoor air temperature, humidity, solar radiation, and wind speed. \nThese parameters are obtained from the [Norwegian Meteorological Institute](https://www.met.no/).\nEnvironmental parameters are then combined with personal parameters and used as an input in a physiological human thermoregulation model.\n\nThe approach used to calculate and interpret thermal balance is based on the most recent findings in science. \nFurther developments regarding the computation of the various terms in the heat balance equation or their interpretation will be considered as they become available.\nThis model estimates the risk of overheating and dehydration and associated negative health effects.\n\nThis tool evaluates the risk for a typical individual.\nConsequently, it cannot accurately estimate the exact risk encountered by every single individual.\nFor this reason, this application is intended for informational use only.\nIt is not intended to provide medical advice or replace professional medical judgment, diagnosis, or treatment. \n\n## Disclaimer and User Agreement\nThis application is intended for informational and educational purposes only. \nIt is not intended to provide medical advice or replace professional medical judgment, diagnosis, or treatment. \n\nIt visualises meteorological data form the [Norwegian Meteorological Institute](https://www.met.no/) and calculates heat stress risk using a thermophysiological model.\nThe authors of this application do not take any responsibility for the accuracy, completeness, or reliability of the information presented. \n\nUsers should always consult with a qualified healthcare professional for any questions regarding their health or medical conditions. \nBy using this application, users acknowledge and agree that they assume full responsibility for their use of the information provided.\nThe users also acknowledge that the authors of this application are not liable for any damages arising from the use of this application.\n\n## Data Confidentiality Statement:\nThis application uses Google Analytics to collect de-identified data for the purpose of improving the user experience and providing insights into how the application is being used. \nNo personally identifiable information is collected or stored. \nAll data is treated as confidential and is securely stored in compliance with applicable data protection regulations. \nWe do not sell or share any data with third parties.\nBy using this application, you agree to the collection and use of data as described in this statement."}}),(0,n.Z)(this,"updateWindowDimensions",()=>{this.setState({windowWidth:window.innerWidth})})}}t.default=(0,s.withRouter)((0,d.O)(b))}},function(e){e.O(0,[3662,5871,5045,4740,3681,9774,2888,179],function(){return e(e.s=71525)}),_N_E=e.O()}]);