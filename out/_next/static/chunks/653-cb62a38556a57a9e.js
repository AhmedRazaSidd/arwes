"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[653],{17141:function(e,t,n){var r=n(63153),i=n(36325),o=n(85893);const c={default:"h-[24px]",sm:"h-5 text-[10px]",lg:"h-12 text-[14px]"},s={filled:{default:"bg-gray-700 text-white",white:"bg-high-emphesis text-dark-700",purple:"bg-purple bg-opacity-25 text-purple",yellow:"bg-yellow bg-opacity-[0.35] text-yellow",blue:"bg-blue bg-opacity-[0.35] text-blue",green:"bg-green bg-opacity-25 text-green",pink:"bg-pink bg-opacity-25 text-pink",red:"bg-red bg-opacity-25 text-red"}};t.Z=({label:e,color:t="default",variant:n="filled",size:l="default",className:a="",onClick:u,icon:d,endIcon:x=(0,o.jsx)(r.b0D,{width:12,height:12,strokeWidth:5}),id:m=""})=>(0,o.jsxs)("div",{id:m,className:(0,i.AK)(s[n][t],c[l],u?"pr-1":"pr-3","whitespace-nowrap inline-flex rounded-[12px] py-0.5 pl-3 font-bold text-xs leading-5 gap-2 items-center justify-center",a),children:[d&&(0,o.jsx)("div",{className:"rounded",onClick:u,children:d}),e,u&&(0,o.jsx)("div",{className:"rounded bg-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.24)] cursor-pointer p-0.5",onClick:u,children:x})]})},493:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(59499),i=n(26835),o=n(36325),c=n(52631),s=n(67294),l=n(73935),a=n(66441),u=n(75851),d=n(85893);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f({content:e,children:t,placement:n="auto",show:r,modifiers:x}){const{0:f,1:h}=(0,s.useState)(null),{0:p,1:v}=(0,s.useState)(null),{0:j,1:y}=(0,s.useState)(null),{styles:g,update:b,attributes:w}=(0,a.D)(f,p,{placement:n,strategy:"fixed",modifiers:x||[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:j}}]}),O=(0,s.useCallback)((()=>{b&&b()}),[b]);return(0,c.Z)(O,r?100:null),(0,d.jsx)(i.J,{as:s.Fragment,children:({open:n})=>(0,d.jsxs)(d.Fragment,{children:[s.Children.map(t,(e=>(0,d.jsx)(i.J.Button,{as:s.Fragment,ref:h,children:e}))),(null!==r&&void 0!==r?r:n)&&l.createPortal((0,d.jsxs)(i.J.Panel,m(m({static:!0,ref:v,style:g.popper},w.popper),{},{children:[(0,d.jsx)(u.RQ,{animate:!0,level:3,corners:4,layer:"primary",children:e}),(0,d.jsx)("div",m({className:(0,o.AK)("w-2 h-2 z-50"),ref:y,style:g.arrow},w.arrow))]})),document.querySelector("#popover-portal"))]})})}},54962:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(63801),i=n(36325),o=n(67294);var c=n(70518),s=n(85893);var l=({className:e,children:t,text:n,icon:l=(0,s.jsx)(r.AV5,{width:14,height:14})})=>{const{0:a,1:u}=(0,o.useState)(!1),[d,x]=function(e=!1){const{0:t,1:n}=(0,o.useState)(e);return[t,(0,o.useCallback)((()=>n((e=>!e))),[])]}(!1),m=(0,o.useRef)(null);!function(e,t){const n=(0,o.useRef)(t);(0,o.useEffect)((()=>{n.current=t}),[t]),(0,o.useEffect)((()=>{const t=t=>{var r,i;null!==(r=null===(i=e.current)||void 0===i?void 0:i.contains(t.target))&&void 0!==r&&r||n.current&&n.current()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}}),[e])}(m,d?x:void 0);const f=(0,o.useCallback)((()=>u(!0)),[u]),h=(0,o.useCallback)((()=>u(!1)),[u]);return t?(0,s.jsx)(c.ZP,{text:n,show:a||d,className:e,children:o.cloneElement(t,{ref:m,onClick:x,className:(0,i.AK)(t.props.className,"flex items-center justify-center w-full outline-none"),onMouseEnter:f,onMouseLeave:h})}):(0,s.jsx)(c.ZP,{text:n,show:a||d,className:e,children:(0,s.jsx)("div",{ref:m,onClick:x,className:"flex items-center justify-center ml-1 outline-none cursor-help hover:text-primary",onMouseEnter:f,onMouseLeave:h,children:l})})}},70518:function(e,t,n){n.d(t,{ZP:function(){return m},ud:function(){return f}});var r=n(59499),i=n(4730),o=n(36325),c=n(67294),s=n(493),l=n(85893);const a=["text","children","className"],u=["children"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){let{text:t,children:n,className:r}=e,c=(0,i.Z)(e,a);return(0,l.jsx)(s.Z,x(x({placement:"bottom",content:(0,l.jsx)("div",{className:(0,o.AK)(r,"w-full max-w-[228px] px-3 py-2 font-bold bg-dark-900 border border-dark-700 rounded text-sm shadow-lg"),children:t})},c),{},{children:n}))}function f(e){let{children:t}=e,n=(0,i.Z)(e,u);const{0:r,1:o}=(0,c.useState)(!1),s=(0,c.useCallback)((()=>o(!0)),[o]),a=(0,c.useCallback)((()=>o(!1)),[o]);return(0,l.jsx)(m,x(x({},n),{},{show:r,children:(0,l.jsx)("div",{onMouseEnter:s,onMouseLeave:a,children:t})}))}},34604:function(e,t,n){var r=n(36325),i=n(52631),o=n(67294),c=n(85893);t.Z=({auction:e,children:t})=>{const{0:n,1:s}=(0,o.useState)();return(0,i.Z)((()=>{s(e.currentPrice)}),1e3),"function"===typeof t?t({price:n}):n?(0,c.jsxs)(c.Fragment,{children:[(0,r.uf)(null===n||void 0===n?void 0:n.toSignificant(6))," ",null===n||void 0===n?void 0:n.quoteCurrency.symbol]}):(0,c.jsx)(c.Fragment,{})}},41909:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(85169),i=n(36325),o=n(52631),c=n(67294);const s=()=>{const e=document.createDocumentFragment(),t=document.createElement("canvas");return e.appendChild(t),t.getContext("2d")};var l=e=>{const t=(0,c.useMemo)((()=>"text"in e?e:void 0),[e]),n=(0,c.useMemo)((()=>"ref"in e?e:void 0),[e]);return(0,c.useMemo)((()=>{var e,r;if(null!==n&&void 0!==n&&null!==(e=n.ref.current)&&void 0!==e&&e.textContent){const e=s(),t=window.getComputedStyle(n.ref.current);e.font=t.font;return e.measureText(n.ref.current.textContent).width}return null!==t&&void 0!==t&&t.text?((e,t)=>{const n=s();return n.font=t,Array.isArray(e)?Math.max(...e.map((e=>n.measureText(e).width))):n.measureText(e).width})(t.text,null!==(r=t.font)&&void 0!==r?r:"16px times"):NaN}),[null===t||void 0===t?void 0:t.text,null===t||void 0===t?void 0:t.font,null===n||void 0===n?void 0:n.ref])},a=n(11728),u=n(63153),d=n(54962),x=n(4840),m=n(85893);const f=({orientation:e,x:t,y:n,auction:i})=>{var o,c,s,a,f;const{i18n:h}=(0,r.mV)(),p=null!==i&&void 0!==i&&i.minimumPrice?null===i||void 0===i||null===(o=i.minimumPrice)||void 0===o||null===(c=o.quoteCurrency)||void 0===c?void 0:c.symbol:null===i||void 0===i||null===(s=i.paymentToken)||void 0===s?void 0:s.symbol,v=t+10,j=n-35,y=t+145,g=n-45,b=t+10,w=n-10,O=t-(l({text:"Current Token Value",font:"14px DM Sans"})+20),S=n+20,P=t-17.5,N=n+10,C=t-(l({text:"".concat(null===i||void 0===i||null===(a=i.currentPrice)||void 0===a?void 0:a.toSignificant(6)," ").concat(p),font:"16px DM Sans"})+10),k=n+45;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("line",{x1:t+1,x2:t+1,y1:"bottom"===e?n+50:n,y2:"bottom"===e?n:n-50,stroke:"currentColor",strokeWidth:"2",opacity:.2}),(0,m.jsx)("text",{x:"bottom"===e?O:v,y:"bottom"===e?S:j,fill:"#7f7f7f",fontSize:"14px",children:h._(h._("Current Token Value"))}),(0,m.jsx)("foreignObject",{width:"10",height:"30",x:"bottom"===e?P:y,y:"bottom"===e?N:g,children:(0,m.jsx)(d.Z,{text:(0,x.od)(h)[i.template],children:(0,m.jsx)("span",{children:(0,m.jsx)(u.zqj,{width:12,height:12,className:"ml-0 text-secondary mb-[4px] text-dark-400"})})})}),(0,m.jsxs)("text",{x:"bottom"===e?C:b,y:"bottom"===e?k:w,fill:"#ffffff",children:[null===i||void 0===i||null===(f=i.currentPrice)||void 0===f?void 0:f.toSignificant(6)," ",p]})]})};var h=({auction:e,prices:t,showPriceIndicator:n})=>{const{i18n:s}=(0,r.mV)(),u=l({text:"Current Token Value",font:"14px DM Sans"}),d=e.auctionInfo.startTime.mul("1000").toNumber(),x=e.auctionInfo.endTime.mul("1000").toNumber(),h=Date.now(),{0:p,1:v}=(0,c.useState)(Math.min(1,Math.max((h-d)/(x-d),0)));(0,o.Z)((()=>{v(Math.min(1,Math.max((h-d)/(x-d),0)))}),1e3);const j=20,y=t?"min-h-[234px]":"min-h-[94px]";return(0,m.jsx)("div",{className:(0,i.AK)("relative w-full h-full",y),children:(0,m.jsx)(a.Z,{children:({width:r,height:i})=>{var o,c;const l=t?i-60:i,a=j+(r-40)*p,d=l/2,x=a+u+15<r?"top":"bottom";return(0,m.jsxs)("div",{className:"relative",children:[(0,m.jsxs)("svg",{className:"text-green",width:r,height:l,viewBox:"0 0 ".concat(r," ").concat(l),children:[(0,m.jsx)("circle",{r:"4",cx:j,cy:l/2,fill:"currentColor"}),(0,m.jsx)("line",{x1:j,y1:d,x2:r-j,y2:d,stroke:"currentColor",strokeWidth:"2",opacity:.2}),(0,m.jsx)("line",{x1:j,y1:d,x2:a,y2:d,stroke:"currentColor",strokeWidth:"2"}),(0,m.jsx)("circle",{r:"4",cx:r-j,cy:d,fill:"currentColor"}),n&&(0,m.jsx)(f,{x:a,y:d,auction:e,orientation:x})]}),t&&(0,m.jsxs)("svg",{className:"text-green",width:r,height:60,viewBox:"0 0 ".concat(r," ").concat(60),children:[(0,m.jsx)("text",{x:20,y:14,fill:"#7f7f7f",fontSize:"14px",children:s._(s._("Price"))}),(0,m.jsxs)("text",{x:20,y:40,fill:"#FFFFFF",fontSize:"18px",fontWeight:700,children:[null===e||void 0===e||null===(o=e.startPrice)||void 0===o?void 0:o.toSignificant(6)," ",null===e||void 0===e||null===(c=e.startPrice)||void 0===c?void 0:c.quoteCurrency.symbol]})]})]})}})})},p=n(68411);function v(e,t){return t.addedTime-e.addedTime}var j=()=>{const{0:e,1:t}=(0,c.useState)(!1),n=(0,p.kf)(),r=!!(0,c.useMemo)((()=>Object.values(n).filter(p.mH).sort(v)),[n]).filter((e=>!e.receipt)).map((e=>e.hash)).length;return(0,c.useEffect)((()=>{t(r)}),[r]),e};var y=({auction:e,prices:t,showPriceIndicator:n})=>{var o,s;const{i18n:u}=(0,r.mV)(),d=l({text:"Ending Price",font:"14px DM Sans"}),x=l({text:"".concat(null===e||void 0===e||null===(o=e.minimumPrice)||void 0===o?void 0:o.toSignificant(6)," ").concat(null===e||void 0===e||null===(s=e.minimumPrice)||void 0===s?void 0:s.quoteCurrency.symbol),font:"18px DM Sans"}),h=l({text:"Current Token Value",font:"14px DM Sans"}),p=e.auctionInfo.startTime.mul("1000").toNumber(),v=e.auctionInfo.endTime.mul("1000").toNumber(),y=Date.now(),{0:g,1:b}=(0,c.useState)(Math.min(1,Math.max((y-p)/(v-p),0)));!function(e,t,n=!0){const r=(0,c.useRef)(),i=j();(0,c.useEffect)((()=>{r.current=e}),[e]),(0,c.useEffect)((()=>{function e(){const e=r.current;e&&e()}if(null!==t){n&&e();const r=setInterval(e,t);return()=>clearInterval(r)}}),[t,n,i])}((()=>{b(Math.min(1,Math.max((y-p)/(v-p),0)))}),1e3);const w=60,O=28,S=n?60:28,P=20,N=t?"min-h-[234px]":"min-h-[94px]";return(0,m.jsx)("div",{className:(0,i.AK)("relative w-full h-full",N),children:(0,m.jsx)(a.Z,{children:({width:r,height:i})=>{var o,c,s,l;const a=t?i-w:i,p=O+(r-56)*g,v=S+(a-2*S)*g,j=p+h+15<r?"top":"bottom";return(0,m.jsxs)("div",{className:"relative",children:[(0,m.jsxs)("svg",{className:"text-green",width:r,height:a,viewBox:"0 0 ".concat(r," ").concat(a),children:[(0,m.jsx)("circle",{r:"4",cx:O,cy:S,fill:"currentColor"}),(0,m.jsx)("line",{x1:O,y1:S,x2:r-O,y2:a-S,stroke:"currentColor",strokeWidth:"2",opacity:.2}),(0,m.jsx)("line",{x1:O,y1:S,x2:p,y2:v,stroke:"currentColor",strokeWidth:"2"}),(0,m.jsx)("circle",{r:"4",cx:r-O,cy:a-S,fill:"currentColor"}),n&&(0,m.jsx)(f,{x:p,y:v,auction:e,orientation:j})]}),t&&(0,m.jsxs)("svg",{className:"text-green",width:r,height:w,viewBox:"0 0 ".concat(r," ").concat(w),children:[(0,m.jsx)("text",{x:P,y:14,fill:"#7f7f7f",fontSize:"14px",children:u._(u._("Starting price"))}),(0,m.jsxs)("text",{x:P,y:40,fill:"#FFFFFF",fontSize:"18px",fontWeight:700,children:[null===e||void 0===e||null===(o=e.startPrice)||void 0===o?void 0:o.toSignificant(6)," ",null===e||void 0===e||null===(c=e.startPrice)||void 0===c?void 0:c.quoteCurrency.symbol]}),(0,m.jsx)("text",{x:r-P-d,y:14,fill:"#7f7f7f",fontSize:"14px",textAnchor:"right",children:u._(u._("Ending price"))}),(0,m.jsxs)("text",{x:r-P-x,y:40,fill:"#FFFFFF",fontSize:"18px",fontWeight:700,textAnchor:"right",children:[null===e||void 0===e||null===(s=e.minimumPrice)||void 0===s?void 0:s.toSignificant(6)," ",null===e||void 0===e||null===(l=e.minimumPrice)||void 0===l?void 0:l.quoteCurrency.symbol]})]})]})}})})},g=n(64527);var b=({auction:e,prices:t=!0,showPriceIndicator:n=!0})=>e.template===g.tn.DUTCH_AUCTION?(0,m.jsx)(y,{auction:e,prices:t,showPriceIndicator:n}):(0,m.jsx)(h,{auction:e,prices:t,showPriceIndicator:n})},74604:function(e,t,n){var r=n(59499),i=n(4730),o=n(42144),c=n(64527),s=(n(67294),n(85893));const l=["auctionTemplate"];function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=e=>{let{auctionTemplate:t}=e,n=(0,i.Z)(e,l);return t===c.tn.CROWDSALE?(0,s.jsx)(o.rs,u({},n)):t===c.tn.DUTCH_AUCTION?(0,s.jsx)(o.VK,u({},n)):t===c.tn.BATCH_AUCTION?(0,s.jsx)(o.gW,u({},n)):(0,s.jsx)(s.Fragment,{})}},77837:function(e,t,n){var r=n(56785),i=n(52631),o=n(67294),c=n(85893);t.Z=({auction:e,children:t})=>{const{0:n,1:s}=(0,o.useState)();return(0,i.Z)((()=>{if(null===e||void 0===e||!e.remainingTime)return;const{days:t,hours:n,minutes:r,seconds:i}=e.remainingTime;s({days:String(Math.max(t,0)).padStart(2,"0"),hours:String(Math.max(n,0)).padStart(2,"0"),minutes:String(Math.max(r,0)).padStart(2,"0"),seconds:String(Math.max(i,0)).padStart(2,"0")})}),1e3),n&&"function"===typeof t?t(n):n?(0,c.jsxs)("div",{className:"flex gap-1 text-high-emphesis",children:[(0,c.jsxs)("div",{className:"flex items-baseline gap-1",children:[(0,c.jsxs)(r.Z,{variant:"xs",className:"text-mono",children:[n.days,"D"]}),(0,c.jsx)(r.Z,{variant:"xxs",className:"text-mono text-secondary",children:":"})]}),(0,c.jsxs)("div",{className:"flex items-baseline gap-2",children:[(0,c.jsxs)(r.Z,{variant:"xs",className:"text-mono",children:[n.hours,"H"]}),(0,c.jsx)(r.Z,{variant:"xxs",className:"text-mono text-secondary",children:":"})]}),(0,c.jsxs)("div",{className:"flex items-baseline gap-2",children:[(0,c.jsxs)(r.Z,{variant:"xs",className:"text-mono",children:[n.minutes,"M"]}),(0,c.jsx)(r.Z,{variant:"xxs",className:"text-mono text-secondary",children:":"})]}),(0,c.jsx)("div",{className:"flex items-baseline gap-2",children:(0,c.jsxs)(r.Z,{variant:"xs",className:"text-mono",children:[n.seconds,"S"]})})]}):(0,c.jsx)(c.Fragment,{})}}}]);