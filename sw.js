if(!self.define){let e,n={};const s=(s,t)=>(s=new URL(s+".js",t).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let a={};const _=e=>s(e,o),r={module:{uri:o},exports:a,require:_};n[o]=Promise.all(t.map((e=>r[e]||_(e)))).then((e=>(c(...e),a)))}}define(["./workbox-7b405d62"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/USYD_Capstone_Project_CS01/Heat-Stress-Scale.png",revision:"ab668ecfa036bc128bf4f85e5b14e826"},{url:"/USYD_Capstone_Project_CS01/_next/server/middleware-build-manifest.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/server/middleware-react-loadable-manifest.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/server/next-font-manifest.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/server/next-font-manifest.json",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/WWVvhSCmFK6nMkppEpF7Y/_buildManifest.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/WWVvhSCmFK6nMkppEpF7Y/_ssgManifest.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/0b7b90cd.6a44c42605c5160b.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/1308.0cb8db48cc0bcfcd.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/1352.042a422bc77cadce.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/1520-8fdeafb7f7ebc0ec.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/155-f65a1e5359ec325e.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/1591.ed7974ef42426621.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/1639.98f905ba9900cab6.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/1795.11deed5041416066.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/29107295-54c46f60208f68c8.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/3230-b9bdcb9b73e8c034.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/3287.63a5334b58b206a3.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/3681-f33e36f7321b97c5.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/3840-462da8428cafc1b8.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/3952.42631867ab92481e.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/397.befdb8104b93468e.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/3983.acb2856b8a4bca6c.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/4335.2afa59400dace0b6.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/4496-f1f6da4d639b72a0.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/4503.aed3306954f55bb1.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/4520-df97a2df7babce39.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/4689-5c0c58b5b2ec69a8.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/4740-7f1c2e5917a7d0d4.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/5016.85c22328d7557f1b.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/5045-9f8315422c90d26e.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/5236.e36483cab53dd9dc.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/5715.d313d321a37fd08d.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/5871-49b31c87fdd9c3b9.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/5912.e6e75817ceb48301.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/5995.c471d280be032d7d.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/6014.32406df3e7d38e58.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/6476.67d76448558b3744.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/6668.4474a54a9b1a78f0.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/6746.66108be8c6117d21.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/6785-33b2857e28539f37.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/6984.b7221de93b43701c.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/7112840a-ce6f619005f17df5.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/7129.bbafd98de2c709e3.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/7200.6850cec88e9e2777.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/7394.5bdbac645cd80d2b.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/7561.edeb7c0d788ac4a2.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/762.6f0a1f809bf54877.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/7882-212baa894729b363.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/7985-f45a658a0ebda7db.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/8158.562c0ac2b5b0dfaf.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/8200-0b2f835b0a5ab962.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/8272.f509a014e26c6910.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/8302.89321190f11fc4d0.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/8331.365d4d636a3b3c30.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/8585.1c99ca9ce783b4a7.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/9081.00e8287b6abc8518.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/9128-dfab37a840cb659b.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/939-e8ac1547058381e0.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/9546.36b65b8a8e8a8fd8.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/a198fdd9-e99880c5845b1761.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/a2c2a696-6b3f226306d870d4.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/e90c0614-64ae67a83a5a75bd.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/framework-ce84985cd166733a.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/main-854ae81792ca5298.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/pages/AboutPage-7b08ae1950bdeae9.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/pages/HomePage-e5f01c70171563ab.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/pages/IntroductionPage copy-79e9759a24a886b2.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/pages/IntroductionPage-a3ca4acacd4efbcb.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/pages/Newfuc-ec1a02324a7f0e2e.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/pages/SettingPage-379ee8bfdc806321.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/pages/_app-600bfaa31c4209bf.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/pages/_error-82b79221b9ed784b.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/pages/index-46c9ae7035f608e7.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/pages/layout-299e79679ba73a5f.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/pages/setpage-f46d586c56a39bf4.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/chunks/webpack-4ff2c99ab2d443c1.js",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/css/63886c537bbf62a1.css",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/css/b119cae7fda3629a.css",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/media/42d52f46a26971a3-s.woff2",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/media/627622453ef56b0d-s.p.woff2",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/media/a5b77b63ef20339c-s.woff2",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/media/a6d330d7873e7320-s.woff2",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/media/d117eea74e01de14-s.woff2",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/media/dfa8b99978df7bbc-s.woff2",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/media/eb52b768f62eeeb4-s.woff2",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/media/layers-2x.9859cd12.png",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/media/layers.ef6db872.png",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/_next/static/media/marker-icon.d577052a.png",revision:"WWVvhSCmFK6nMkppEpF7Y"},{url:"/USYD_Capstone_Project_CS01/android-chrome-192x192.png",revision:"411449f01be12def71ad57bb160831c9"},{url:"/USYD_Capstone_Project_CS01/android-chrome-512x512.png",revision:"85d1e8e6bad4868d7ae785ce2bc8c9c3"},{url:"/USYD_Capstone_Project_CS01/apple-touch-icon.png",revision:"14893e16aac85097571899610ae6a0b4"},{url:"/USYD_Capstone_Project_CS01/favicon-16x16.png",revision:"b130cf80c578601514ee308e2b4596e5"},{url:"/USYD_Capstone_Project_CS01/favicon-32x32.png",revision:"4a744902e99aad9532470ef3755d265b"},{url:"/USYD_Capstone_Project_CS01/favicon.ico",revision:"8abd63cc43f5c1bf0b8c6a9fe84ee574"},{url:"/USYD_Capstone_Project_CS01/globals.css",revision:"faff5204b85390ec465e6ad478d61e78"},{url:"/USYD_Capstone_Project_CS01/icons/HHRI logo.png",revision:"c77bfb05f84bfcc950d88256619c46cf"},{url:"/USYD_Capstone_Project_CS01/icons/HomePage.webp",revision:"15b5d22482f6e2303c5f6b60cc34c11f"},{url:"/USYD_Capstone_Project_CS01/icons/Map.webp",revision:"87c51d365b25c2ab1d4a67ed86efc94c"},{url:"/USYD_Capstone_Project_CS01/icons/Setting.webp",revision:"c6ddb22ecaa1b5cbc4858a903dc3c118"},{url:"/USYD_Capstone_Project_CS01/icons/Use_fans.webp",revision:"1e635a081406e93421fbccb2a7592720"},{url:"/USYD_Capstone_Project_CS01/icons/ac.png",revision:"a75f690b28bbf839cb0ef6e60b466b0f"},{url:"/USYD_Capstone_Project_CS01/icons/alone.png",revision:"74c1b54b479d3bb378861c61934e79a5"},{url:"/USYD_Capstone_Project_CS01/icons/android-chrome-192x192.png",revision:"411449f01be12def71ad57bb160831c9"},{url:"/USYD_Capstone_Project_CS01/icons/android-chrome-512x512.png",revision:"85d1e8e6bad4868d7ae785ce2bc8c9c3"},{url:"/USYD_Capstone_Project_CS01/icons/apple-touch-icon.png",revision:"14893e16aac85097571899610ae6a0b4"},{url:"/USYD_Capstone_Project_CS01/icons/blinds.png",revision:"c9211157b04cce981fbd7c53ff7d4dae"},{url:"/USYD_Capstone_Project_CS01/icons/calendar.webp",revision:"ebc51aea39ce047f55dc80fb504bf4ad"},{url:"/USYD_Capstone_Project_CS01/icons/comorbidity.png",revision:"2648ae40dbb7241574be4fa63fc96682"},{url:"/USYD_Capstone_Project_CS01/icons/evaporative.png",revision:"a36651d22174d7335addb67aaf6fbe24"},{url:"/USYD_Capstone_Project_CS01/icons/fan.png",revision:"c311518fbc61a94e2e7986cf5fa9d04c"},{url:"/USYD_Capstone_Project_CS01/icons/favicon-16x16.png",revision:"b130cf80c578601514ee308e2b4596e5"},{url:"/USYD_Capstone_Project_CS01/icons/favicon-32x32.png",revision:"4a744902e99aad9532470ef3755d265b"},{url:"/USYD_Capstone_Project_CS01/icons/favicon.ico",revision:"8abd63cc43f5c1bf0b8c6a9fe84ee574"},{url:"/USYD_Capstone_Project_CS01/icons/gazebo.png",revision:"cce2df1101fe25abbaa9b35ef620ad99"},{url:"/USYD_Capstone_Project_CS01/icons/grandparents.png",revision:"0e8159963037017aad8ae8ccec69a44f"},{url:"/USYD_Capstone_Project_CS01/icons/healthy-adults.png",revision:"11d2dfc6afe0d625f35adcf78f686ae5"},{url:"/USYD_Capstone_Project_CS01/icons/healthy-older-adults, pregnant-women, children.png",revision:"9759b3f472b3dbc27c10ef2ee95be9e9"},{url:"/USYD_Capstone_Project_CS01/icons/healthy.png",revision:"3445f1c71456cdf16f5e1b22887e7be3"},{url:"/USYD_Capstone_Project_CS01/icons/house_cool.webp",revision:"f5fbd021ca4e72d7b9bed4136d8a4864"},{url:"/USYD_Capstone_Project_CS01/icons/ice-cubes.png",revision:"8cfaea44db7c7ba47d9e9fdc2b997664"},{url:"/USYD_Capstone_Project_CS01/icons/lounger.png",revision:"f91d0ebecee3e8cf9cffa9544e70323c"},{url:"/USYD_Capstone_Project_CS01/icons/maps-and-flags.png",revision:"1d740ad2a3dca0d7abd45e65739b3d0e"},{url:"/USYD_Capstone_Project_CS01/icons/misting_fan.png",revision:"17162b964c017f7f7b725ea08de70c39"},{url:"/USYD_Capstone_Project_CS01/icons/no-running.png",revision:"b5ba61676afe7f6c601160ec27fce571"},{url:"/USYD_Capstone_Project_CS01/icons/notifiacation.png",revision:"d352702d400b13b74250cf96f5c68475"},{url:"/USYD_Capstone_Project_CS01/icons/notification.png",revision:"d26435f4cc7fa00a261a4457cc21139a"},{url:"/USYD_Capstone_Project_CS01/icons/pause.png",revision:"5fd50fe6bd9d9f9740032d6900a4d212"},{url:"/USYD_Capstone_Project_CS01/icons/people-with-chronic-illnesses.png",revision:"2648ae40dbb7241574be4fa63fc96682"},{url:"/USYD_Capstone_Project_CS01/icons/pharmacy.png",revision:"f77b67b18df0d3fca106d6ce2ab3056f"},{url:"/USYD_Capstone_Project_CS01/icons/photo.png",revision:"487c4fbaf08c4ecd7c9f284dc4c7656e"},{url:"/USYD_Capstone_Project_CS01/icons/shirt.png",revision:"d8cda24d2d2439bace9b478a57924c39"},{url:"/USYD_Capstone_Project_CS01/icons/slush-drink.png",revision:"08673deb6499fb7299f1e3b93698564d"},{url:"/USYD_Capstone_Project_CS01/icons/spray.png",revision:"8f5aac394af02ec9c654cfc2152d278d"},{url:"/USYD_Capstone_Project_CS01/icons/squeeze.png",revision:"1b17394be49751552c371c95e9ffe082"},{url:"/USYD_Capstone_Project_CS01/icons/stop.png",revision:"f4b8858f18acf647c3c87f616554689e"},{url:"/USYD_Capstone_Project_CS01/icons/tank-top.png",revision:"337687966020fa033803a2662b88cf85"},{url:"/USYD_Capstone_Project_CS01/icons/tshirt.png",revision:"c42396d07441d6bc7dbd8b449c436add"},{url:"/USYD_Capstone_Project_CS01/icons/usyd-logo.png",revision:"972113c77eb3fa910084464b03bea967"},{url:"/USYD_Capstone_Project_CS01/icons/ventilation.png",revision:"e8c16418a8b4112b7577b8b0bd7fda82"},{url:"/USYD_Capstone_Project_CS01/icons/vulnerable.png",revision:"9759b3f472b3dbc27c10ef2ee95be9e9"},{url:"/USYD_Capstone_Project_CS01/icons/vulnerable_alter.png",revision:"5ffb7c573e3046d11e95296933886671"},{url:"/USYD_Capstone_Project_CS01/icons/vulnerable_heat.png",revision:"49d5c96cbd242e40c85bf58965f804f7"},{url:"/USYD_Capstone_Project_CS01/icons/vulnerable_new.png",revision:"1f7937aea175bfc8139ffbc7b313567a"},{url:"/USYD_Capstone_Project_CS01/icons/warm-water.png",revision:"fcf5c20bfc0978e9c41c11019610983f"},{url:"/USYD_Capstone_Project_CS01/icons/water-bottle.png",revision:"0d61c68579587314aa0b673f55fc5220"},{url:"/USYD_Capstone_Project_CS01/icons/water.png",revision:"ce376aeb7a500769c1a14f6f07d16e03"},{url:"/USYD_Capstone_Project_CS01/leaflet/images/marker-icon-2x.png",revision:"401d815dc206b8dc1b17cd0e37695975"},{url:"/USYD_Capstone_Project_CS01/leaflet/images/marker-icon.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/USYD_Capstone_Project_CS01/leaflet/images/marker-shadow.png",revision:"44a526eed258222515aa21eaffd14a96"},{url:"/USYD_Capstone_Project_CS01/manifest.json",revision:"824ac388e1cde30ca409658e294a35a7"},{url:"/USYD_Capstone_Project_CS01/new_data.json",revision:"a4d1dd35aceb09f723407d1f520476eb"},{url:"/USYD_Capstone_Project_CS01/postcodes.csv",revision:"49b652ce040b1955e80cef4aa96e429f"},{url:"/USYD_Capstone_Project_CS01/postcodes.json",revision:"6c03e37864d20c6a772c3614af6ee2c8"},{url:"/USYD_Capstone_Project_CS01/settingOption.json",revision:"86d916a3f879939b51ebc2dbe291deef"},{url:"/USYD_Capstone_Project_CS01/test.py",revision:"dc4b793d38eea772b69473e28396b7b7"},{url:"/USYD_Capstone_Project_CS01/tips/ageGroupTips.json",revision:"d4dba0dd080a57a03d1f957a12071149"},{url:"/USYD_Capstone_Project_CS01/tips/allGeneralTips.json",revision:"3593337bfecb2a6fb10875d7545c7625"},{url:"/USYD_Capstone_Project_CS01/tips/detailedRecommendationTips.json",revision:"eb4b8ce1ea4075873031d34328df817d"},{url:"/USYD_Capstone_Project_CS01/tips/generalTips.json",revision:"6973700aca6f51c71250411633b40ec0"},{url:"/USYD_Capstone_Project_CS01/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/USYD_Capstone_Project_CS01",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:t})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/.*/,new e.CacheFirst({cacheName:"app-cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));