(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{493:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(59499),o=n(26835),s=n(36325),i=n(52631),l=n(67294),c=n(73935),a=n(66441),d=n(75851),u=n(85893);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h({content:e,children:t,placement:n="auto",show:r,modifiers:m}){const{0:h,1:p}=(0,l.useState)(null),{0:x,1:v}=(0,l.useState)(null),{0:j,1:b}=(0,l.useState)(null),{styles:g,update:w,attributes:y}=(0,a.D)(h,x,{placement:n,strategy:"fixed",modifiers:m||[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:j}}]}),O=(0,l.useCallback)((()=>{w&&w()}),[w]);return(0,i.Z)(O,r?100:null),(0,u.jsx)(o.J,{as:l.Fragment,children:({open:n})=>(0,u.jsxs)(u.Fragment,{children:[l.Children.map(t,(e=>(0,u.jsx)(o.J.Button,{as:l.Fragment,ref:p,children:e}))),(null!==r&&void 0!==r?r:n)&&c.createPortal((0,u.jsxs)(o.J.Panel,f(f({static:!0,ref:v,style:g.popper},y.popper),{},{children:[(0,u.jsx)(d.RQ,{animate:!0,level:3,corners:4,layer:"primary",children:e}),(0,u.jsx)("div",f({className:(0,s.AK)("w-2 h-2 z-50"),ref:b,style:g.arrow},y.arrow))]})),document.querySelector("#popover-portal"))]})})}},54962:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(63801),o=n(36325),s=n(67294);var i=n(70518),l=n(85893);var c=({className:e,children:t,text:n,icon:c=(0,l.jsx)(r.AV5,{width:14,height:14})})=>{const{0:a,1:d}=(0,s.useState)(!1),[u,m]=function(e=!1){const{0:t,1:n}=(0,s.useState)(e);return[t,(0,s.useCallback)((()=>n((e=>!e))),[])]}(!1),f=(0,s.useRef)(null);!function(e,t){const n=(0,s.useRef)(t);(0,s.useEffect)((()=>{n.current=t}),[t]),(0,s.useEffect)((()=>{const t=t=>{var r,o;null!==(r=null===(o=e.current)||void 0===o?void 0:o.contains(t.target))&&void 0!==r&&r||n.current&&n.current()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}}),[e])}(f,u?m:void 0);const h=(0,s.useCallback)((()=>d(!0)),[d]),p=(0,s.useCallback)((()=>d(!1)),[d]);return t?(0,l.jsx)(i.ZP,{text:n,show:a||u,className:e,children:s.cloneElement(t,{ref:f,onClick:m,className:(0,o.AK)(t.props.className,"flex items-center justify-center w-full outline-none"),onMouseEnter:h,onMouseLeave:p})}):(0,l.jsx)(i.ZP,{text:n,show:a||u,className:e,children:(0,l.jsx)("div",{ref:f,onClick:m,className:"flex items-center justify-center ml-1 outline-none cursor-help hover:text-primary",onMouseEnter:h,onMouseLeave:p,children:c})})}},70518:function(e,t,n){"use strict";n.d(t,{ZP:function(){return f},ud:function(){return h}});var r=n(59499),o=n(4730),s=n(36325),i=n(67294),l=n(493),c=n(85893);const a=["text","children","className"],d=["children"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){let{text:t,children:n,className:r}=e,i=(0,o.Z)(e,a);return(0,c.jsx)(l.Z,m(m({placement:"bottom",content:(0,c.jsx)("div",{className:(0,s.AK)(r,"w-full max-w-[228px] px-3 py-2 font-bold bg-dark-900 border border-dark-700 rounded text-sm shadow-lg"),children:t})},i),{},{children:n}))}function h(e){let{children:t}=e,n=(0,o.Z)(e,d);const{0:r,1:s}=(0,i.useState)(!1),l=(0,i.useCallback)((()=>s(!0)),[s]),a=(0,i.useCallback)((()=>s(!1)),[s]);return(0,c.jsx)(f,m(m({},n),{},{show:r,children:(0,c.jsx)("div",{onMouseEnter:l,onMouseLeave:a,children:t})}))}},56585:function(e,t,n){"use strict";n.d(t,{iA:function(){return r.i}});var r=n(37601);n(2551),n(27958)},52624:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var r=n(19485),o=n(2593),s=n(63801),i=n(85169),l=n(71862),c=n(72457),a=n(15097),d=n(3382),u=n(50442),m=n(38212),f=n(54962),h=n(56585),p=n(34189),x=n(9456),v=n(51566),j=n(47630),b=n(16387),g=n(45897),w=n(43165),y=n(47448),O=n(87433),N=n(31611),k=n(90849),S=n(59499),_=n(71923),P=n(16682),C=n(92659),Z=n(85926),E=n(12614),I=n(1569),L=n(68411),F=n(67294);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,S.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const D={};function H(e){const{chainId:t}=(0,E.a)(),n="".concat(t,":").concat(e),{0:o,1:s}=(0,F.useState)({});return(0,F.useEffect)((()=>{e&&t&&function(e,t){var n;if(!(0,r.UJ)(e))return Promise.reject(new Error("Invalid address"));const o="".concat(t,":").concat(e);return D[o]=null!==(n=D[o])&&void 0!==n?n:fetch(P.tb).then((e=>e.json())).then((t=>{var n;const o=null!==(n=t.claims[(0,r.Kn)(e)])&&void 0!==n?n:void 0;return o?{index:o.index,amount:o.amount,proof:o.proof}:null})).catch((e=>console.error("Failed to get claim data",e)))}(e,t).then((e=>s((t=>A(A({},t),{},{[n]:e})))))}),[e,t,n]),e&&t?o[n]:void 0}function T(e){const{chainId:t}=(0,E.a)(),n=H(e),r=function(e){var t;const n=H(e),r=(0,Z.mj)(),o=(0,I.Wk)(r,"isClaimed",[null===n||void 0===n?void 0:n.index]);return Boolean(n&&!o.loading&&!1===(null===(t=o.result)||void 0===t?void 0:t[0]))}(e),o=t?_.hs[t]:void 0;if(o)return r&&n?_.ih.fromRawAmount(o,_.QA.BigInt(n.amount)):_.ih.fromRawAmount(o,_.QA.BigInt(0))}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,S.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const B={};function J(e){const{chainId:t}=(0,E.a)(),n="".concat(t,":").concat(e),{0:o,1:s}=(0,F.useState)({});return(0,F.useEffect)((()=>{e&&t&&function(e,t){var n;if(!(0,r.UJ)(e))return Promise.reject(new Error("Invalid address"));const o="".concat(t,":").concat(e);return B[o]=null!==(n=B[o])&&void 0!==n?n:fetch(P.y).then((e=>e.json())).then((t=>{var n;const o=null!==(n=t.claims[(0,r.Kn)(e)])&&void 0!==n?n:void 0;return o?{index:o.index,amount:o.amount,proof:o.proof}:null})).catch((e=>console.error("Failed to get claim data",e)))}(e,t).then((e=>s((t=>M(M({},t),{},{[n]:e})))))}),[e,t,n]),e&&t?o[n]:void 0}function G(e){const{chainId:t}=(0,E.a)(),n=J(e),r=function(e){var t;const n=J(e),r=(0,Z.wv)(),o=(0,I.Wk)(r,"isClaimed",[null===n||void 0===n?void 0:n.index]);return Boolean(n&&!o.loading&&!1===(null===(t=o.result)||void 0===t?void 0:t[0]))}(e),o=t?_.hs[t]:void 0;if(o)return r&&n?_.ih.fromRawAmount(o,_.QA.BigInt(n.amount)):_.ih.fromRawAmount(o,_.QA.BigInt(0))}var W=n(99154),R=n(2528),Q=n(9008),z=n(41664),K=n(85893);const $=()=>{const{i18n:e}=(0,i.mV)(),{inputValue:t,outputValue:n}=(0,W.j$)(),{tokens:r,general:o}=(0,W.vG)(),{balances:l}=(0,W.If)();return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(Q.default,{children:[(0,K.jsx)("title",{children:"Vesting | NEXUSSwap"}),(0,K.jsx)("meta",{name:"description",content:"Vesting..."}),(0,K.jsx)("meta",{name:"twitter:description",content:"Vesting..."},"twitter:description"),(0,K.jsx)("meta",{property:"og:description",content:"Vesting..."},"og:description")]}),(0,K.jsxs)(c.Z,{maxWidth:"5xl",className:"flex flex-col gap-8 px-4 py-8",children:[(0,K.jsx)("div",{className:"flex items-center gap-8",children:(0,K.jsx)(Y,{})}),(0,K.jsxs)("div",{className:"grid grid-cols-12 space-y-10 md:gap-10 md:space-y-0",children:[(0,K.jsx)("div",{className:"col-span-12 md:col-span-3",children:(0,K.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,K.jsx)(g.Z,{}),(0,K.jsx)(z.default,{href:"/tools/meowshi",children:(0,K.jsx)("a",{className:"bg-dark-900 cursor-pointer border border-transparent pl-5 py-2 rounded whitespace-nowrap w-full font-bold h-[48px] flex items-center text-sm",children:"SUSHI \u2192 MEOW"})})]})}),(0,K.jsxs)("div",{className:"grid col-span-12 gap-4 md:col-span-9",children:[(0,K.jsxs)("div",{className:"flex flex-col justify-between gap-4 md:flex-row md:items-center",children:[(0,K.jsx)(w.Z,{}),(0,K.jsx)(b.Z,{})]}),(0,K.jsx)(d.Z,{className:"max-w-[100%]",children:(0,K.jsxs)("div",{className:"grid gap-8 p-5 border-2 rounded bg-dark-900 border-dark-700",children:[(0,K.jsxs)("div",{className:"flex flex-col items-start md:flex-row",children:[(0,K.jsx)("div",{className:"w-full mr-2 md:w-3/5",children:(0,K.jsx)(x.Z,{label:e._(e._("From")),showMax:!0,value:t,token:null===r||void 0===r?void 0:r.inputToken,symbol:null===o||void 0===o?void 0:o.inputSymbol,balance:null===l||void 0===l?void 0:l.inputTokenBalance,field:R.g.INPUT})}),(0,K.jsx)("div",{className:"flex items-center md:w-[60px] z-1 relative md:ml-[-16px] md:mr-[-16px] md:mt-[34px] justify-center w-full",children:(0,K.jsx)("div",{className:"w-[60px] h-[60px] rounded-full md:bg-dark-800 border-2 border-dark-900 p-2 flex items-center justify-center transform rotate-90 md:rotate-0",children:(0,K.jsx)(s.LZ3,{width:24,height:24,className:"text-high-emphesis"})})}),(0,K.jsx)("div",{className:"w-full md:w-2/5 md:ml-2",children:(0,K.jsx)(x.Z,{label:e._(e._("To")),value:n,token:null===r||void 0===r?void 0:r.outputToken,symbol:null===o||void 0===o?void 0:o.outputSymbol,balance:null===l||void 0===l?void 0:l.outputTokenBalance,field:R.g.OUTPUT})})]}),(0,K.jsx)(v.Z,{color:"gradient",className:"font-bold",children:"Execute"}),(0,K.jsx)("div",{className:"relative mt-0 -m-5 rounded-b p-7 bg-dark-700",children:(0,K.jsx)(j.Z,{})})]})})]})]})]})]})},Y=()=>{const{i18n:e}=(0,i.mV)();return(0,K.jsxs)("div",{className:"flex flex-col w-full space-y-4 md:flex-row md:space-x-8 md:space-y-0",children:[(0,K.jsx)("div",{className:"hidden space-y-10 md:block",children:(0,K.jsxs)("div",{className:"relative w-full p-4 overflow-hidden rounded bg-dark-900",children:[(0,K.jsx)("div",{className:"font-bold text-white",children:e._(e._("Community Approval"))}),(0,K.jsx)("div",{className:"pt-2 text-sm font-bold text-gray-400",style:{maxWidth:"300px",minHeight:"150px"},children:(0,K.jsxs)(K.Fragment,{children:[e._(e._("Vesting is executed within the guidelines selected by the community in"))," ",(0,K.jsx)(u.Z,{href:"https://snapshot.org/#/sushi/proposal/QmPwBGy98NARoEcUfuWPgzMdJdiaZub1gVic67DcSs6NZQ",children:"SIMP3"}),".",(0,K.jsx)("br",{}),(0,K.jsx)("br",{}),e._(e._("Please refer to the"))," ",(0,K.jsx)(u.Z,{href:"https://forum.sushiswapclassic.org/t/simp-3-vesting-and-the-future-of-sushiswap/1794",children:e._(e._("forum discussion"))})," ",e._(e._("for deliberations on additional points.")),(0,K.jsx)("br",{}),(0,K.jsx)("br",{}),e._(e._("Additional records and weekly merkle updates can be found on"))," ",(0,K.jsx)(u.Z,{href:"https://github.com/sushiswap/sushi-vesting",children:"GitHub"})]})})]})}),(0,K.jsx)(q,{}),(0,K.jsx)(X,{})]})},X=()=>{var e;const{i18n:t}=(0,i.mV)(),n=(0,k.oL)(N.Lk.SELF_CLAIM),s=(0,k.G_)(),{account:c}=(0,E.a)(),{0:d,1:u}=(0,F.useState)(!1),{claimCallback:p}=function(e){const{library:t,chainId:n}=(0,E.a)(),r=H(e),o=T(e),s=(0,L.h7)(),i=(0,Z.mj)();return{claimCallback:async function(){if(!r||!e||!t||!n||!i)return;const l=[r.index,e,r.amount,r.proof];return i.estimateGas.claim(...l,{}).then((t=>i.claim(...l,{value:null,gasLimit:(0,C.yC)(t)}).then((t=>(s(t,{summary:"Claimed ".concat(null===o||void 0===o?void 0:o.toSignificant(4)," SUSHI"),claim:{recipient:e}}),t.hash)))))}}}(c),x=T(c),{claimSubmitted:v}=(0,L.bh)(null!==c&&void 0!==c?c:void 0),j=!1;(0,F.useEffect)((()=>{j}),[d,j,v,n,s]);const{0:b,1:g}=(0,F.useState)();(0,F.useEffect)((()=>{(async()=>{c&&fetch("https://raw.githubusercontent.com/sushiswap/sushi-vesting/master/amounts-protocols-10959148-12171394.json").then((e=>e.json())).then((e=>{const t=e[c.toLowerCase()]?e[c.toLowerCase()]:"0",n=h.iA.from(o.O$.from(t),o.O$.from(10).pow(18)).toString();g(n)})).catch((e=>{console.log(e)}))})()}),[c]);const w=!1;return(0,K.jsx)("div",{className:"flex flex-col gap-3 md:max-w-[400px]",children:(0,K.jsx)("div",{className:"relative w-full h-full overflow-hidden rounded bg-dark-900",children:(0,K.jsxs)("div",{className:"flex flex-col gap-3 p-4",children:[(0,K.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,K.jsx)("div",{className:"font-bold text-white",children:t._(t._("Claimable SUSHI from Protocols"))}),(0,K.jsx)(f.Z,{text:"If you participated in staking progammes from Alpha Homora, Cream, DefiDollar, Dracula, Harvest, Pickle, Yam, or Badger you can claim your vested SUSHI directly here"})]}),(0,K.jsxs)("div",{className:"flex flex-col items-baseline pb-4",children:[(0,K.jsx)("div",{className:"font-bold text-white text-[36px]",children:null===x||void 0===x?void 0:x.toFixed(4,null!==(e={groupSeparator:","})&&void 0!==e?e:{})}),c?(0,K.jsx)("div",{className:"text-sm text-secondary",children:b?t._(t._("Historical Total Locked: {0} SUSHI",{0:(0,y.uf)(b)})):(0,K.jsx)(a.Z,{children:t._(t._("Historical Total Locked: Fetching Total"))})}):(0,K.jsx)("div",{className:"text-sm text-secondary",children:t._(t._("Historical Total Locked: Connect Wallet"))})]}),(0,K.jsxs)(l.ZP,{color:!(0,r.UJ)(null!==c&&void 0!==c?c:"")||!x||Number(null===x||void 0===x?void 0:x.toFixed(8))<=0?"gray":"gradient",disabled:!(0,r.UJ)(null!==c&&void 0!==c?c:"")||!x||Number(null===x||void 0===x?void 0:x.toFixed(8))<=0||w,size:"default",onClick:function(){u(!0),p().catch((e=>{u(!1),console.log(e)}))},className:"inline-flex items-center justify-center",children:[(0,K.jsxs)(K.Fragment,{children:[" ",t._(t._("Claim SUSHI"))]}),d&&(0,K.jsx)(m.Z,{stroke:"white",style:{marginLeft:"10px"}})]})]})})})},q=()=>{var e;const{i18n:t}=(0,i.mV)(),n=(0,k.oL)(N.Lk.SELF_CLAIM),s=(0,k.G_)(),{account:c}=(0,E.a)(),{0:d,1:u}=(0,F.useState)(!1),{claimCallback:p}=function(e){const{library:t,chainId:n}=(0,E.a)(),r=J(e),o=G(e),s=(0,L.h7)(),i=(0,Z.wv)();return{claimCallback:async function(){if(!r||!e||!t||!n||!i)return;const l=[r.index,e,r.amount,r.proof];return i.estimateGas.claim(...l,{}).then((t=>i.claim(...l,{value:null,gasLimit:(0,C.yC)(t)}).then((t=>(s(t,{summary:"Claimed ".concat(null===o||void 0===o?void 0:o.toSignificant(4)," SUSHI"),claim:{recipient:e}}),t.hash)))))}}}(c),x=G(c),{claimSubmitted:v}=(0,L.bh)(null!==c&&void 0!==c?c:void 0),j=!1;(0,F.useEffect)((()=>{j}),[d,j,v,n,s]);const{0:b,1:g}=(0,F.useState)();(0,F.useEffect)((()=>{(async()=>{c&&fetch("https://raw.githubusercontent.com/sushiswap/sushi-vesting/master/amounts-10959148-12171394.json").then((e=>e.json())).then((e=>{const t=e[c.toLowerCase()]?e[c.toLowerCase()]:"0",n=h.iA.from(o.O$.from(t),o.O$.from(10).pow(18)).toString();g(n)})).catch((e=>{console.log(e)}))})()}),[c]);const w=!1;let O="";return Number(null===x||void 0===x?void 0:x.toFixed(8))>0?O="https://raw.githubusercontent.com/sushiswap/sushi-content/master/images/sushi-vault-reverse.png":Number(null===x||void 0===x?void 0:x.toFixed(8))<=0&&(O="https://raw.githubusercontent.com/sushiswap/sushi-content/master/images/vesting-safe-off.png"),(0,K.jsx)("div",{className:"flex flex-col gap-3 md:max-w-[400px]",children:(0,K.jsx)("div",{className:"relative w-full h-full overflow-hidden rounded bg-dark-900",children:(0,K.jsxs)("div",{className:"flex flex-col gap-3 p-4",children:[(0,K.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,K.jsx)("div",{className:"font-bold text-white",children:t._(t._("Your Claimable SUSHI this Week"))}),(0,K.jsx)(f.Z,{text:"Your Vested SUSHI will be released each week for the next 6 months. The amount released each week is determined by your historical farming rewards. You do not need to harvest each week as unclaimed amounts from each week will continue to accrue onto the next."})]}),(0,K.jsxs)("div",{className:"flex flex-col items-baseline pb-4",children:[(0,K.jsx)("div",{className:"font-bold text-white text-[36px]",children:null===x||void 0===x?void 0:x.toFixed(4,null!==(e={groupSeparator:","})&&void 0!==e?e:{})}),c?(0,K.jsx)("div",{className:"text-sm text-secondary",children:b?t._(t._("Historical Total Locked: {0} SUSHI",{0:(0,y.uf)(b)})):(0,K.jsx)(a.Z,{children:t._(t._("Historical Total Locked: Fetching Total"))})}):(0,K.jsx)("div",{className:"text-sm text-secondary",children:t._(t._("Historical Total Locked: Connect Wallet"))})]}),(0,K.jsxs)(l.ZP,{color:!(0,r.UJ)(null!==c&&void 0!==c?c:"")||!x||Number(null===x||void 0===x?void 0:x.toFixed(8))<=0?"gray":"gradient",disabled:!(0,r.UJ)(null!==c&&void 0!==c?c:"")||!x||Number(null===x||void 0===x?void 0:x.toFixed(8))<=0||w,size:"default",onClick:function(){u(!0),p().catch((e=>{u(!1),console.log(e)}))},className:"inline-flex items-center justify-center",children:[(0,K.jsxs)(K.Fragment,{children:[" ",t._(t._("Claim SUSHI"))]}),d&&(0,K.jsx)(m.Z,{stroke:"white",style:{marginLeft:"10px"}})]})]})})})};$.Guard=(0,O.Z)(p.L.VESTING);var ee=$},92059:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vesting",function(){return n(52624)}])}},function(e){e.O(0,[6441,1626,5311,9774,2888,179],(function(){return t=92059,e(e.s=t);var t}));var t=e.O();_N_E=t}]);