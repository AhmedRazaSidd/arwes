"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5519],{93688:function(e,t,i){var r,n=i(13752),l=i(36325),s=i(85893);!function(e){e[e.REPEAT=0]="REPEAT",e[e.SINGLE=1]="SINGLE"}(r||(r={}));const o={"bg-bars":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/bars-pattern.png"},"bg-binary":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/binary-pattern.png"},"bg-bubble":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/bubble-pattern.png"},"bg-dots":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/dots-pattern.png"},"bg-x-times-y-is-k":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/x-times-y-is-k.png"},"bg-wavy":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/wavy-pattern.png"},"bg-chevron":{type:r.REPEAT,url:"https://app.sushi.com/images/trident/chevron-pattern.png"},"miso-bowl":{type:r.SINGLE,url:"https://app.sushi.com/images/miso/banner.jpg"}};t.Z=({variant:e})=>{if(!e)return(0,s.jsx)("div",{className:"absolute inset-0 bg-dark-900/30"});const{type:t,url:i}=o[e];return t===r.REPEAT?(0,s.jsx)("div",{className:(0,l.AK)("absolute inset-0 flex flex-col items-center bg-dark-900/30"),children:(0,s.jsx)("div",{className:(0,l.AK)("absolute inset-0 w-full h-full z-0 opacity-10",e)})}):(0,s.jsx)(n.Z,{alt:"background image",src:i,objectFit:"cover",objectPosition:"center",layout:"fill",priority:!0})}},27801:function(e,t,i){var r=i(59499),n=i(71923),l=i(36325),s=i(90573),o=(i(67294),i(17141)),a=i(41626),d=i(56785),c=i(75851),u=i(85893);function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){(0,r.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}const h=({header:e,items:t,footer:i,className:r=""})=>(0,u.jsxs)("div",{className:(0,l.AK)(r,"flex flex-col"),children:[e&&(0,u.jsx)("div",{className:"overflow-hidden border rounded-t border-dark-700",children:e}),t&&(0,u.jsx)(c.RQ,{animate:!0,level:3,corners:4,layer:"primary",className:(0,l.AK)(e?"":" rounded-t",i?"":" "," "),children:t}),i&&(0,u.jsx)("div",{className:"overflow-hidden border rounded-b bg-dark-900 border-dark-700",children:i})]}),m=({left:e,right:t})=>(0,u.jsxs)("div",{className:"flex grid items-center grid-cols-2 gap-2 px-3 py-3 lg:px-4 border-dark-700",children:[e,t]});h.Header=({title:e,value:t,subValue:i,className:r="",id:n})=>(0,u.jsxs)("div",{id:n,className:(0,l.AK)(r,"flex flex-row justify-between px-4 py-[10px] items-center"),children:[(0,u.jsx)(d.Z,{variant:"lg",className:"text-high-emphesis",weight:700,children:e}),(t||i)&&(0,u.jsxs)("div",{className:"flex flex-col text-right",children:[t&&(0,u.jsx)(d.Z,{className:"text-high-emphesis",weight:700,children:t}),i&&(0,u.jsx)(d.Z,{className:"text-secondary",variant:"xxs",weight:700,children:i})]})]}),m.Left=({amount:e,hideCurrencyLogo:t,startAdornment:i})=>(0,u.jsxs)("div",{className:"flex flex-row gap-1.5 lg:gap-3 items-center",children:[i&&i,!t&&(0,u.jsx)(a.X,{currency:null===e||void 0===e?void 0:e.currency,size:20,className:"rounded-full"}),(0,u.jsxs)(d.Z,{variant:"sm",className:"text-high-emphesis",weight:700,children:[null!==e&&void 0!==e&&e.greaterThan(n.xE)?null===e||void 0===e?void 0:e.toSignificant(6):"0.00"," ",null===e||void 0===e?void 0:e.currency.symbol]})]}),m.Right=({children:e})=>(0,u.jsx)(d.Z,{variant:"xs",weight:400,className:"text-right",children:e}),h.Item=m,h.CurrencyAmountItem=({amount:e,weight:t,displayTokenAmount:i=!1,id:r="",hideIfZero:c=!0,hideCurrencyLogo:p,hideUSDC:m=!1})=>{const x=(0,s.NF)(m?void 0:null!==e&&void 0!==e&&e.equalTo(n.xE)?n.ih.fromRawAmount(null===e||void 0===e?void 0:e.currency,"1"):e);return i?(0,u.jsxs)("div",{id:r,className:(0,l.AK)(c&&null!==e&&void 0!==e&&e.equalTo(n.xE)?"hidden":"","grid items-center grid-cols-3 gap-2 px-3 py-3 lg:px-4 border-dark-700"),children:[(0,u.jsxs)("div",{className:"flex items-center gap-3 -ml-1",children:[!p&&(0,u.jsx)(a.X,{currency:null===e||void 0===e?void 0:e.currency,size:30,className:"rounded-full"}),(0,u.jsx)(d.Z,{className:"text-high-emphesis",weight:700,children:null===e||void 0===e?void 0:e.currency.symbol})]}),(0,u.jsx)(d.Z,{className:"text-right text-high-emphesis",weight:700,children:null===e||void 0===e?void 0:e.toSignificant(6)}),!m&&(0,u.jsxs)(d.Z,{className:"text-right",variant:"sm",children:["$",null===x||void 0===x?void 0:x.toSignificant(6)]})]}):(0,u.jsx)("div",{id:"".concat(r),className:c&&null!==e&&void 0!==e&&e.equalTo(n.xE)?"hidden":"",children:(0,u.jsx)(h.Item,{left:(0,u.jsx)(h.Item.Left,v({hideCurrencyLogo:p,amount:e},t&&{startAdornment:(0,u.jsx)(o.Z,{color:"default",label:t,size:"sm"})})),right:!m&&(0,u.jsxs)(h.Item.Right,{children:["$",x?null===x||void 0===x?void 0:x.toFixed(2):"0.00"]})},0)})},h.Footer=({title:e,value:t})=>(0,u.jsxs)("div",{className:"flex flex-row items-center justify-between px-4 py-2",children:[(0,u.jsx)(d.Z,{variant:"xs",weight:400,className:"text-high-emphesis",children:e}),t&&(0,u.jsx)(d.Z,{className:"text-high-emphesis",variant:"sm",weight:700,children:t})]}),t.Z=h},62828:function(e,t,i){i.d(t,{x:function(){return m}});var r=i(71923),n=i(53654),l=i(50623),s=i(36325),o=i(61647),a=i(6314),d=i(62603),c=i(12614),u=i(98950),p=i(67294),v=i(85893);const h=(0,p.createContext)(void 0),m=()=>{const e=(0,p.useContext)(h);if(!e)throw new Error("Hook can only be used inside Pool Context");return e};t.Z=({children:e})=>{var t,i,m,x;const{account:f}=(0,c.a)(),{currencies:g,twap:y,fee:w}=(0,l.Z)(),j=(0,a.Z8)(g[0],g[1],w,y),b=(0,d.A)(null===j||void 0===j||null===(t=j.pool)||void 0===t?void 0:t.liquidityToken),N=(0,u.mM)(null!==f&&void 0!==f?f:void 0,null===j||void 0===j||null===(i=j.pool)||void 0===i?void 0:i.liquidityToken),{rebases:k,loading:E}=(0,o.Z)([null===j||void 0===j||null===(m=j.pool)||void 0===m?void 0:m.token0,null===j||void 0===j||null===(x=j.pool)||void 0===x?void 0:x.token1]),O=(0,p.useMemo)((()=>j.state===n.tK.NOT_EXISTS||Boolean(b&&r.QA.equal(b.quotient,r.xE))||Boolean(j.pool&&r.QA.equal(j.pool.reserve0.quotient,r.xE)&&r.QA.equal(j.pool.reserve1.quotient,r.xE))),[j.pool,j.state,b]),Z=(0,p.useMemo)((()=>{if(null!==j&&void 0!==j&&j.pool&&b&&N&&null!==b&&void 0!==b&&b.greaterThan(r.xE))return new r.gG(N.quotient,b.quotient)}),[N,null===j||void 0===j?void 0:j.pool,b]),A=(0,p.useMemo)((()=>null!==j&&void 0!==j&&j.pool&&N&&b&&null!==b&&void 0!==b&&b.greaterThan(r.xE)&&null!==k&&void 0!==k&&k[j.pool.token0.wrapped.address]&&null!==k&&void 0!==k&&k[j.pool.token1.wrapped.address]?[(0,s.nP)(k[j.pool.token0.wrapped.address],j.pool.getLiquidityValue(j.pool.token0,b.wrapped,N.wrapped)),(0,s.nP)(k[j.pool.token1.wrapped.address],j.pool.getLiquidityValue(j.pool.token1,b.wrapped,N.wrapped))]:[void 0,void 0]),[N,null===j||void 0===j?void 0:j.pool,k,b]);return(0,v.jsx)(h.Provider,{value:(0,p.useMemo)((()=>({poolWithState:j,totalSupply:b,poolBalance:N,rebases:k,noLiquidity:O,poolShare:Z,liquidityValue:A,currencies:g})),[g,A,O,N,Z,j,k,b]),children:j.state!==n.tK.LOADING&&!E&&e})}},50623:function(e,t,i){var r=i(59499),n=i(71923),l=i(53654),s=i(62483),o=i(12614),a=i(11163),d=i(67294);function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){(0,r.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}t.Z=()=>{var e,t,i;const{chainId:r}=(0,o.a)(),c=(0,a.useRouter)(),p=(0,s.U8)(null===(e=c.query.tokens)||void 0===e?void 0:e[0])||r&&n.B5[r]||void 0,v=(0,s.U8)(null===(t=c.query.tokens)||void 0===t?void 0:t[1])||r&&n.hs[r]||void 0,h=Number(null!==(i=c.query.fee)&&void 0!==i?i:l.at.DEFAULT),m="false"!==c.query.twap,x=(0,d.useCallback)((async()=>{if(!r)return;const e=n.B5[r].symbol;let t=[];var i,l;c.query&&c.query.tokens?t=[null===(i=c.query.tokens)||void 0===i?void 0:i[1],null===(l=c.query.tokens)||void 0===l?void 0:l[0]]:t=[null!==v&&void 0!==v&&v.isNative?e:null===v||void 0===v?void 0:v.wrapped.address,null!==p&&void 0!==p&&p.isNative?e:null===p||void 0===p?void 0:p.wrapped.address];await c.push({pathname:c.pathname,query:u({tokens:t},"/trident/swap"!==c.pathname&&{fee:h,twap:m})})}),[r,null===p||void 0===p?void 0:p.isNative,null===p||void 0===p?void 0:p.wrapped.address,null===v||void 0===v?void 0:v.isNative,null===v||void 0===v?void 0:v.wrapped.address,h,c,m]),f=(0,d.useCallback)((async(e,t)=>{var i,l,s;if(!r)return;const o=n.B5[r].symbol;let a=[null!==p&&void 0!==p&&p.isNative?o:null===p||void 0===p?void 0:p.wrapped.address,null!==v&&void 0!==v&&v.isNative?o:null===v||void 0===v?void 0:v.wrapped.address];if(r&&null!==(i=c.query)&&void 0!==i&&i.tokens&&(null===(l=c.query)||void 0===l?void 0:l.tokens.length)>0){if(a=[...c.query.tokens],a[(t+1)%2]===(e.isNative?o:e.wrapped.address))return x();const i=e.isNative?n.B5[r].symbol:e.wrapped.address;if(a.includes(i))return;a[t]=i}null!==(s=c.query)&&void 0!==s&&s.tokens||(a[t]=e.isNative?o:null===e||void 0===e?void 0:e.wrapped.address),await c.push({pathname:c.pathname,query:u({tokens:a},"/trident/swap"!==c.pathname&&{fee:h,twap:m})})}),[r,null===p||void 0===p?void 0:p.isNative,null===p||void 0===p?void 0:p.wrapped.address,null===v||void 0===v?void 0:v.isNative,null===v||void 0===v?void 0:v.wrapped.address,h,c,x,m]);return(0,d.useMemo)((()=>({currencies:[p,v],setURLCurrency:f,switchCurrencies:x,fee:h,twap:m})),[p,v,f,x,h,m])}},87433:function(e,t,i){var r=i(85169),n=i(71923),l=i(63929),s=i(64958),o=i(56785),a=i(87269),d=i(10552),c=i(90662),u=i(12614),p=i(49552),v=i.n(p),h=i(25675),m=i(67294),x=i(85893);const f=({children:e,feature:t})=>{const{i18n:i}=(0,r.mV)(),{chainId:p,library:f,account:g}=(0,u.a)(),y=(0,x.jsx)(s.Z,{href:"/swap",children:(0,x.jsx)("a",{className:"text-blue focus:outline-none",children:i._(i._("home page"))})}),w=Object.entries(a.Z).reduce(((e,[i,r])=>(r.includes(t)&&e.push(i),e)),[]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.Z.Controlled,{isOpen:!!g&&!a.Z[p].includes(t),onDismiss:()=>null,transparent:!0,children:(0,x.jsxs)("div",{className:"flex flex-col justify-center p-4 mt-10 gap-7 lg:mt-0",children:[(0,x.jsx)(o.Z,{variant:"h1",className:"max-w-2xl text-center text-white",weight:700,children:i._(i._("Roll it back - this feature is not yet supported on {0}.",{0:d.z[p]}))}),(0,x.jsx)(o.Z,{className:"text-center",children:(0,x.jsx)(r.cC,{id:"Either return to the {link}, or change to an available network.",values:{link:y},components:m.Fragment})}),(0,x.jsx)(o.Z,{className:"uppercase text-white text-center text-lg tracking-[.2rem]",weight:700,children:i._(i._("Available Networks"))}),(0,x.jsx)("div",{className:"flex justify-center gap-5 md:gap-10",children:w.map(((e,t)=>(0,x.jsxs)("button",{className:"flex flex-col items-center justify-start gap-2 text-primary hover:text-white",onClick:()=>{const t=c.b[e];v().set("chainId",e),e===n.a_.ETHEREUM.toString()?null===f||void 0===f||f.send("wallet_switchEthereumChain",[{chainId:"0x1"},g]):e===n.a_.KOVAN.toString()?null===f||void 0===f||f.send("wallet_switchEthereumChain",[{chainId:"0x2A"},g]):null===f||void 0===f||f.send("wallet_addEthereumChain",[t,g])},children:[(0,x.jsx)("div",{className:"w-[40px] h-[40px]",children:(0,x.jsx)(h.default,{src:d.w[e],alt:"Switch Network",className:"rounded-md filter drop-shadow-currencyLogo",width:"40px",height:"40px"})}),(0,x.jsx)(o.Z,{className:"text-sm",children:d.z[e]})]},t)))})]})}),e]})};t.Z=e=>({children:t})=>(0,x.jsx)(f,{feature:e,children:t})},62603:function(e,t,i){i.d(t,{Y:function(){return o},A:function(){return a}});var r=i(8198),n=i(71923),l=i(89638),s=i(1569);const o=e=>{var t;return(0,s._Y)(null!==(t=null===e||void 0===e?void 0:e.map((e=>null!==e&&void 0!==e&&e.isToken?e.address:void 0)))&&void 0!==t?t:[],new r.vU(l),"totalSupply").map(((t,i)=>{var r,l,s;return l=null===(r=t.result)||void 0===r?void 0:r[0],null!==(s=null===e||void 0===e?void 0:e[i])&&void 0!==s&&s.isToken&&l?n.ih.fromRawAmount(s,l.toString()):void 0})).reduce(((t,i,r)=>(i&&null!==e&&void 0!==e&&e[r]&&(t[e[r].wrapped.address]=i),t)),{})},a=e=>{const t=o([e]);return e?t[e.wrapped.address]:void 0}},22680:function(e,t,i){i.d(t,{CV:function(){return u},A9:function(){return p}});var r=i(93688),n=i(72457),l=i(39810),s=i(50654),o=i(52907),a=i(3990),d=i(36325),c=(i(67294),i(85893));const u=({children:e,className:t,pattern:i,maxWidth:l="7xl",condensed:s})=>(0,c.jsxs)("header",{className:"relative flex flex-col items-center justify-center w-full",children:[(0,c.jsx)(r.Z,{variant:i}),(0,c.jsx)(n.Z,{maxWidth:l,className:(0,d.AK)("flex flex-col gap-5 z-[1] p-6 lg:py-10",s&&"py-5",t),children:e})]}),p=({children:e,className:t,maxWidth:i="7xl"})=>(0,c.jsx)(o.Z,{children:(0,c.jsx)(n.Z,{maxWidth:i,className:(0,d.AK)("flex flex-col gap-10 z-[0] p-6 lg:py-10",t),children:e})});t.ZP=({children:e=[]})=>(0,c.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,c.jsx)(s.Z,{}),(0,c.jsxs)("div",{className:"flex flex-col items-center flex-grow w-full",children:[(0,c.jsx)("div",{className:"flex flex-col flex-grow w-full",children:e}),(0,c.jsx)(a.Z,{})]}),(0,c.jsx)(l.Z,{})]})}}]);