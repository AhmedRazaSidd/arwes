(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9164],{493:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(59499),o=n(26835),i=n(36325),l=n(52631),s=n(67294),a=n(73935),c=n(66441),d=n(75851),u=n(85893);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p({content:e,children:t,placement:n="auto",show:r,modifiers:v}){const{0:p,1:h}=(0,s.useState)(null),{0:m,1:g}=(0,s.useState)(null),{0:b,1:x}=(0,s.useState)(null),{styles:j,update:w,attributes:y}=(0,c.D)(p,m,{placement:n,strategy:"fixed",modifiers:v||[{name:"offset",options:{offset:[0,8]}},{name:"arrow",options:{element:b}}]}),P=(0,s.useCallback)((()=>{w&&w()}),[w]);return(0,l.Z)(P,r?100:null),(0,u.jsx)(o.J,{as:s.Fragment,children:({open:n})=>(0,u.jsxs)(u.Fragment,{children:[s.Children.map(t,(e=>(0,u.jsx)(o.J.Button,{as:s.Fragment,ref:h,children:e}))),(null!==r&&void 0!==r?r:n)&&a.createPortal((0,u.jsxs)(o.J.Panel,f(f({static:!0,ref:g,style:j.popper},y.popper),{},{children:[(0,u.jsx)(d.RQ,{animate:!0,level:3,corners:4,layer:"primary",children:e}),(0,u.jsx)("div",f({className:(0,i.AK)("w-2 h-2 z-50"),ref:x,style:j.arrow},y.arrow))]})),document.querySelector("#popover-portal"))]})})}},54962:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(63801),o=n(36325),i=n(67294);var l=n(70518),s=n(85893);var a=({className:e,children:t,text:n,icon:a=(0,s.jsx)(r.AV5,{width:14,height:14})})=>{const{0:c,1:d}=(0,i.useState)(!1),[u,v]=function(e=!1){const{0:t,1:n}=(0,i.useState)(e);return[t,(0,i.useCallback)((()=>n((e=>!e))),[])]}(!1),f=(0,i.useRef)(null);!function(e,t){const n=(0,i.useRef)(t);(0,i.useEffect)((()=>{n.current=t}),[t]),(0,i.useEffect)((()=>{const t=t=>{var r,o;null!==(r=null===(o=e.current)||void 0===o?void 0:o.contains(t.target))&&void 0!==r&&r||n.current&&n.current()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}}),[e])}(f,u?v:void 0);const p=(0,i.useCallback)((()=>d(!0)),[d]),h=(0,i.useCallback)((()=>d(!1)),[d]);return t?(0,s.jsx)(l.ZP,{text:n,show:c||u,className:e,children:i.cloneElement(t,{ref:f,onClick:v,className:(0,o.AK)(t.props.className,"flex items-center justify-center w-full outline-none"),onMouseEnter:p,onMouseLeave:h})}):(0,s.jsx)(l.ZP,{text:n,show:c||u,className:e,children:(0,s.jsx)("div",{ref:f,onClick:v,className:"flex items-center justify-center ml-1 outline-none cursor-help hover:text-primary",onMouseEnter:p,onMouseLeave:h,children:a})})}},70518:function(e,t,n){"use strict";n.d(t,{ZP:function(){return f},ud:function(){return p}});var r=n(59499),o=n(4730),i=n(36325),l=n(67294),s=n(493),a=n(85893);const c=["text","children","className"],d=["children"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){let{text:t,children:n,className:r}=e,l=(0,o.Z)(e,c);return(0,a.jsx)(s.Z,v(v({placement:"bottom",content:(0,a.jsx)("div",{className:(0,i.AK)(r,"w-full max-w-[228px] px-3 py-2 font-bold bg-dark-900 border border-dark-700 rounded text-sm shadow-lg"),children:t})},l),{},{children:n}))}function p(e){let{children:t}=e,n=(0,o.Z)(e,d);const{0:r,1:i}=(0,l.useState)(!1),s=(0,l.useCallback)((()=>i(!0)),[i]),c=(0,l.useCallback)((()=>i(!1)),[i]);return(0,a.jsx)(f,v(v({},n),{},{show:r,children:(0,a.jsx)("div",{onMouseEnter:s,onMouseLeave:c,children:t})}))}},67347:function(e,t,n){"use strict";n.d(t,{x:function(){return o},H7:function(){return i},CG:function(){return l},Wb:function(){return s},gc:function(){return a},Il:function(){return c},uE:function(){return d},VU:function(){return u}});var r=n(84243);const o=({contract:e,fn:t,args:n})=>e.interface.encodeFunctionData(t,n),i=({contract:e,actions:t=[]})=>{const n=t.filter(Boolean);if(0===n.length)throw new Error("No valid actions");return 1===n.length?n[0]:n.length>1?e.interface.encodeFunctionData("batch",[n]):void 0},l=({router:e,address:t,amount:n,recipient:o,receiveToWallet:i,liquidityOutput:l})=>e.interface.encodeFunctionData("burnLiquidity",[t,n,r.$.encode(["address","bool"],[o,i]),l]),s=({router:e,token:t,address:n,amount:o,recipient:i,receiveToWallet:l,minWithdrawal:s})=>e.interface.encodeFunctionData("burnLiquiditySingle",[n,o,r.$.encode(["address","address","bool"],[t,i,l]),s]),a=({router:e,recipient:t,amountMinimum:n})=>e.interface.encodeFunctionData("unwrapWETH",[n,t]),c=({router:e,token:t,amount:n,recipient:r})=>e.interface.encodeFunctionData("sweepNativeToken",[t,n,r]),d=({router:e,signature:t})=>{if(!t)return;const{v:n,r:r,s:o}=t;return e.interface.encodeFunctionData("approveMasterContract",[n,r,o])},u=({router:e,signatureData:t})=>{if(!t)return;const{tokenAddress:n,amount:r,deadline:o,v:i,r:l,s:s}=t;return e.interface.encodeFunctionData("permitThis",[n,r,o,i,l,s])}},82766:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(71923),o=(n(93036),n(1082)),i=n.n(o),l=n(83852),s=n(67294),a=n(75438);function c(e){const{0:t,1:n}=(0,s.useState)("#0094ec");return(0,s.useLayoutEffect)((()=>{let t=!1;return e&&async function(e){if(e.chainId===r.a_.RINKEBY&&"0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735"===e.address)return Promise.resolve("#FAAB14");const t="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/".concat(e.address,"/logo.png");return i().from(t).getPalette().then((e=>{if(null!==e&&void 0!==e&&e.Vibrant){let t=e.Vibrant.hex,n=(0,a.$v)(t,"#FFF");for(;n<3;)t=(0,l.wj)(.005,t),n=(0,a.$v)(t,"#FFF");return t}return null})).catch((()=>null))}(e).then((e=>{t||null===e||n(e)})),()=>{t=!0,n("#0094ec")}}),[e]),t}},62603:function(e,t,n){"use strict";n.d(t,{Y:function(){return s},A:function(){return a}});var r=n(8198),o=n(71923),i=n(89638),l=n(1569);const s=e=>{var t;return(0,l._Y)(null!==(t=null===e||void 0===e?void 0:e.map((e=>null!==e&&void 0!==e&&e.isToken?e.address:void 0)))&&void 0!==t?t:[],new r.vU(i),"totalSupply").map(((t,n)=>{var r,i,l;return i=null===(r=t.result)||void 0===r?void 0:r[0],null!==(l=null===e||void 0===e?void 0:e[n])&&void 0!==l&&l.isToken&&i?o.ih.fromRawAmount(l,i.toString()):void 0})).reduce(((t,n,r)=>(n&&null!==e&&void 0!==e&&e[r]&&(t[e[r].wrapped.address]=n),t)),{})},a=e=>{const t=s([e]);return e?t[e.wrapped.address]:void 0}},78405:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ce}});var r=n(63153),o=n(85169),i=n(71862),l=n(59018),s=n(56785),a=n(38239),c=n(15097),d=n(90695),u=n(59499),v=n(92552),f=n(53654);const p=(e,t,n)=>n.indexOf(e)===t,h=e=>{const t=[];for(const n of Object.values(f.at).filter(Number)){const r=e.filter((e=>e.swapFee===n)).map((e=>e.twapEnabled)).filter(p);2!==r.length&&(1===r.length&&t.push({fee:n,twap:!r[0]}),r.length||(t.push({fee:n,twap:!0}),t.push({fee:n,twap:!1})))}return t};var m=n(36325),g=n(67294),b=n(85893);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t){return e.filter((e=>e.fee===t)).map((e=>e.twap)).filter(p)}const y=({selectedPoolConfig:e,allPoolConfigs:t,onClick:n})=>{const{i18n:r}=(0,o.mV)();return(0,b.jsxs)("div",{className:(0,m.AK)("flex flex-col gap-3 bg-dark-800 rounded p-4 m-3",!e&&"hover:bg-dark-700 hover:cursor-pointer",e&&"border-2 border-blue p-3.5"),onClick:()=>!e&&n(t[0]),children:[(0,b.jsxs)("div",{children:[r._(r._("Create New Pool"))," ",!e&&"\u2192"]}),e&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{children:r._(r._("Fee tier"))}),t.map((e=>e.fee)).filter(p).map((r=>(0,b.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,b.jsx)(v.Z,{checked:r==e.fee,set:o=>{((e,t,n,r,o)=>{if(!e)return;const i=w(r,t);2===i.length&&o({fee:t,twap:n}),1===i.length&&o({fee:t,twap:i[0]})})(o,r,e.twap,t,n)}}),(0,b.jsxs)("span",{className:"text-xs",children:[r/100,"%"]})]},r))),(0,b.jsx)("div",{children:r._(r._("TWAP"))}),(0,b.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,b.jsx)(v.Z,{checked:e.twap,set:()=>{return o=n,void(2===w(t,(r=e).fee).length&&o(j(j({},r),{},{twap:!r.twap})));var r,o}}),(0,b.jsx)("span",{className:"text-xs",children:r._(r._("Yes create an oracle"))})]})]})]})},P=({pool:e,onClick:t,active:n})=>{const{i18n:i}=(0,o.mV)();return(0,b.jsxs)("div",{onClick:t,className:(0,m.AK)("flex justify-between bg-dark-800 rounded p-4 m-3",!n&&"hover:bg-dark-700 hover:cursor-pointer",n&&"border-2 border-blue p-3.5"),children:[(0,b.jsxs)("div",{className:"flex-grow",children:[(0,b.jsxs)("div",{className:"text-md",children:[e.swapFee/100,i._(i._("% Fee"))]}),e.twapEnabled?(0,b.jsxs)("div",{className:"flex gap-1 text-xs",children:[(0,b.jsx)("span",{children:i._(i._("TWAP"))}),(0,b.jsx)(r.nQG,{className:"w-4 text-blue"})]}):(0,b.jsx)("div",{className:"text-low-emphesis text-xs",children:i._(i._("No TWAP"))})]}),(0,b.jsxs)("div",{className:"text-right text-xs flex flex-col justify-center",children:[(0,b.jsx)("div",{children:i._(i._("TVL"))}),(0,b.jsx)("div",{children:(0,m.uf)(e.liquidityUSD,!0)})]})]})};var O=n(13063),k=n(34776);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const _=({migration:e,source:t,setFunc:n,tridentPools:r})=>{const{i18n:l}=(0,o.mV)(),{matches:s,availableToCreate:a}=(0,g.useMemo)((()=>((e,t)=>{const n=((e,t)=>t.filter((t=>{if(2!==t.assets.length)return!1;const n=t.assets[0].address.toLowerCase(),r=t.assets[1].address.toLowerCase(),o=e.token0.address.toLowerCase(),i=e.token1.address.toLowerCase();return n===o&&r===i||n===i&&r===o})))(e,t);return{matches:n,availableToCreate:h(n)}})(e.v2Pair,r)),[e.v2Pair,r]);return(0,b.jsxs)("div",{className:"w-full border border-1 border-dark-700 rounded bg-dark-900",children:[(0,b.jsxs)("div",{className:"flex justify-between p-3 items-center rounded-t",children:[(0,b.jsx)(O.W,{pair:e.v2Pair}),(0,b.jsx)("div",{className:"flex",children:(0,b.jsx)(i.ZP,{color:"blue",variant:"outlined",size:"xs",children:t})})]}),(0,b.jsx)(k.c,{pair:e.v2Pair}),(0,b.jsx)("div",{className:"m-3 text-high-emphesis",children:l._(l._("Select a Pool:"))}),s.map(((t,r)=>{var o;return(0,b.jsx)(P,{active:(null===(o=e.matchingTridentPool)||void 0===o?void 0:o.address)===t.address,pool:t,onClick:()=>n(S(S({},e),{},{matchingTridentPool:t,poolToCreate:void 0}))},r)})),a.length>0&&(0,b.jsx)(y,{selectedPoolConfig:e.poolToCreate,allPoolConfigs:a,onClick:t=>n(S(S({},e),{},{poolToCreate:t,matchingTridentPool:void 0}))})]})};var D=n(6269),N=n(14894),T=n(7656),Z=n(67347),F=n(53344),E=n(31611);const U=(0,E.i8)({content:{txn:{hash:"",success:!1,summary:"Missing dependencies needed for migration"}}}),A=e=>(0,E.i8)({content:{txn:{hash:"",success:!1,summary:e}}});var L=n(2250),I=n(37643);const q=e=>{var t,n;const r=null===(t=e.matchingTridentPool)||void 0===t?void 0:t.twapEnabled,o=null===(n=e.poolToCreate)||void 0===n?void 0:n.twap;return void 0!==r?r:void 0!==o?o:void 0},V=e=>{var t,n;return(null===(t=e.matchingTridentPool)||void 0===t?void 0:t.swapFee)||(null===(n=e.poolToCreate)||void 0===n?void 0:n.fee)};function M(e,t,n,r,o){if(null===r||void 0===r||!r.pool||!o)return"1";if(!t[0]||!t[1])throw new Error("Rebases Missing");const i=r.pool.getLiquidityMinted(o,(0,m.HW)(t[0],n.token0),(0,m.HW)(t[1],n.token1));return(0,m.uc)(i,e)[0].toString()}var R=n(83304),B=n(61647),W=n(6314),Y=n(62603),K=n(12614),z=n(16339),H=n(68411),G=n(98950);const $=()=>{const{i18n:e}=(0,o.mV)(),{library:t,account:n}=(0,K.a)(),r=(0,z.T)(),i=(0,H.h7)(),l=(0,R.i7)(),s=(0,R.sL)(),a=(0,z.C)(T.Gi),c=(0,G.Z)(null!==n&&void 0!==n?n:void 0,a.map((e=>e.v2Pair.liquidityToken))),d=(0,W.TD)(a.map((e=>[e.v2Pair.token0,e.v2Pair.token1,V(e),q(e)]))),u=(0,Y.Y)(a.map((e=>e.v2Pair.liquidityToken))),v=(0,Y.Y)(d.map((e=>{var t;return null===(t=e.pool)||void 0===t?void 0:t.liquidityToken}))),{rebases:f,loading:p}=(0,B.Z)([...d.flatMap((e=>{var t,n;return[null===(t=e.pool)||void 0===t?void 0:t.token0,null===(n=e.pool)||void 0===n?void 0:n.token1]}))]);return async()=>{if(n&&t&&l&&s&&Object.keys(c).length&&!p)try{const o=a.filter((e=>e.slpPermit)).map((e=>(0,Z.VU)({router:s,signatureData:e.slpPermit}))),p=a.map(((e,t)=>{const n=d[t].pool;return(({contract:e,migration:t,v2LpTokenAmount:n,v2PoolTotalSupply:r,selectedTridentPool:o,tridentPoolSupply:i,rebases:l})=>{const s=V(t),a=q(t);if(!s||void 0===a)throw new Error("Missing required selection: Swap Fee");const c={token0:t.v2Pair.getLiquidityValue(t.v2Pair.token0,r,n),token1:t.v2Pair.getLiquidityValue(t.v2Pair.token1,r,n)},d=(0,I.tE)(L.ZP.getState()),u=(0,m.uc)(c.token0,d)[0],v=(0,m.uc)(c.token1,d)[0],f=[t.v2Pair.liquidityToken.address,n.quotient.toString(),s,a,u.toString(),v.toString(),M(d,l,c,o,i)];return e.interface.encodeFunctionData("migrate",f)})({contract:l,migration:e,v2LpTokenAmount:c[e.v2Pair.liquidityToken.address],v2PoolTotalSupply:u[e.v2Pair.liquidityToken.address],selectedTridentPool:d[t],tridentPoolSupply:n?v[null===n||void 0===n?void 0:n.liquidityToken.address]:void 0,rebases:n?[f[n.token0.address],f[n.token1.address]]:[void 0,void 0]})})),h=await t.getSigner().sendTransaction({from:n,to:l.address,data:(0,Z.H7)({contract:l,actions:[...o,...p]}),value:"0x0"});r((0,T.EO)(h.hash)),i(h,{summary:e._(e._("Migrating {0} LP tokens",{0:a.length}))})}catch(o){((e,t)=>{if(e instanceof Error)t(A(e.message));else if("string"===typeof e)t(A(e));else if((0,F.UR)(e)){if(e.code===F.PM)return;t(A("".concat(e.message," (code: ").concat(e.code,")")))}else t(A("Error attempting migration"));console.error(e)})(o,r)}else r(U)}};var Q=n(63929),J=n(11163);const X=()=>{const{i18n:e}=(0,o.mV)(),t=(0,J.useRouter)(),n=(0,z.T)(),r=(0,z.C)(T.ZR);return(0,b.jsx)(Q.Z.Controlled,{isOpen:Boolean(r),onDismiss:()=>{},children:(0,b.jsx)(Q.Z.SubmittedModalContent,{onDismiss:()=>{n((0,T.Cl)()),t.replace("/trident/migrate")},header:e._(e._("Migration Transaction")),txHash:r})})};var ee=n(54962);const te=()=>{const{i18n:e}=(0,o.mV)(),t=(0,z.T)(),{input:n,error:r,percent:l}=(0,z.C)(I.Tz),a=l.equalTo(I.Ru);return(0,b.jsxs)("div",{className:"flex items-center md:self-start self-center gap-2",children:[(0,b.jsxs)("div",{className:"flex items-center",children:[(0,b.jsx)(s.Z,{variant:"xs",weight:700,className:"text-high-emphesis",children:e._(e._("Slippage tolerance"))}),(0,b.jsx)(ee.Z,{text:e._(e._("Your transaction will revert if the price changes unfavorably by more than this percentage."))})]}),(0,b.jsxs)("div",{className:(0,m.AK)("border-2 h-[36px] flex items-center px-2 rounded bg-dark-1000/40 relative",r?"border-red":"border-low-emphesis"),children:[(0,b.jsx)("input",{className:"bg-transparent placeholder-low-emphesis min-w-0 font-bold w-16",value:n,onChange:e=>t((0,I.l_)(e.target.value)),onBlur:()=>r===I.Hd.INVALID_INPUT?t((0,I.l_)(I.QK)):t((0,I.w5)())}),(0,b.jsx)("div",{className:"text-low-emphesis",children:"%"})]}),(0,b.jsx)(i.ZP,{size:"sm",color:a?"blue":"gray",variant:"outlined",onClick:()=>t((0,I.l_)(I.QK)),children:e._(e._("Auto"))})]})};var ne=n(49932),re=n(25361);const oe=()=>{const{i18n:e}=(0,o.mV)(),t=(0,J.useRouter)(),n=(0,z.T)(),r=(0,z.C)(T.Gi);0===r.length&&t.replace("/trident/migrate");const l=(0,z.C)(T.mZ),{data:a,error:u,isValidating:v}=(0,re.fv)(),{account:f,chainId:p}=(0,K.a)(),h=(0,G.Z)(null!==f&&void 0!==f?f:void 0,r.map((e=>e.v2Pair.liquidityToken))),m=p?D.r[p]:void 0,g=$();return(0,b.jsxs)("div",{children:[(0,b.jsx)(X,{}),(0,b.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,b.jsx)(s.Z,{variant:"h3",className:"text-high-emphesis",weight:700,children:0===l?e._(e._("All set \u2705")):e._(e._("Pools left to select: {leftToSelect}",{leftToSelect:l}))}),(0,b.jsx)(d.T,{active:v}),u&&(0,b.jsx)("span",{className:"text-red",children:"\u26a0\ufe0f Loading Error"})]}),r.length>0&&(0,b.jsx)("div",{className:"flex flex-col",children:(0,b.jsx)("div",{className:N.T,children:r.map(((e,t)=>(0,b.jsx)(_,{migration:e,tridentPools:null!==a&&void 0!==a?a:[],source:T.Iv.SUSHI_V2,setFunc:e=>n((0,T.y$)({indexToReplace:t,migration:e}))},t)))})}),(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-3 mt-10",children:[0!==l?(0,b.jsx)(i.ZP,{disabled:!0,children:e._(e._("Pools left to select: {leftToSelect}",{leftToSelect:l}))}):(0,b.jsx)(ne.Z,{inputAmounts:Object.values(h),tokenApproveOn:m,onSLPPermit:e=>n((0,T.Ii)(e)),children:({loading:t,approved:n})=>t?(0,b.jsxs)(i.ZP,{disabled:!0,children:[e._(e._("Loading")),(0,b.jsx)(c.Z,{})]}):n?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.ZP,{color:"gradient",onClick:()=>g(),children:e._(e._("Confirm Migration"))}),(0,b.jsx)(te,{})]}):void 0}),(0,b.jsx)("div",{className:"cursor-pointer text-blue text-center md:text-left md:mt-3",onClick:()=>t.replace("/trident/migrate"),children:e._(e._("\u2190 Previous Step"))})]})]})};var ie=n(87433),le=n(22680),se=n(9008);const ae=()=>{const{i18n:e}=(0,o.mV)(),t=(0,J.useRouter)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(se.default,{children:(0,b.jsx)("title",{children:e._(e._("Confirm Migration | NEXUSSwap"))})}),(0,b.jsx)(l._,{}),(0,b.jsxs)(le.CV,{pattern:"bg-binary",className:"!gap-2",children:[(0,b.jsx)("div",{children:(0,b.jsx)(i.ZP,{color:"blue",variant:"outlined",size:"xs",onClick:()=>t.replace("/trident/migrate"),className:"flex-none h-6 pl-0 pr-3 rounded-full",startIcon:(0,b.jsx)(r.wyc,{width:24,height:24}),children:e._(e._("Go Back"))})}),(0,b.jsx)(s.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:e._(e._("Select Pools & Confirm"))}),(0,b.jsx)("div",{className:"max-w-2xl",children:(0,b.jsx)(s.Z,{variant:"sm",className:"mt-4",weight:400,children:e._(e._("Select which pool configuration you want to migrate to."))})})]}),(0,b.jsx)(le.A9,{className:"mb-14",children:(0,b.jsx)(oe,{})})]})};ae.Guard=(0,ie.Z)(a.L.TRIDENT),ae.Layout=le.ZP;var ce=ae},25361:function(e,t,n){"use strict";n.d(t,{By:function(){return f},Ll:function(){return p},IA:function(){return h},Mr:function(){return m},fv:function(){return g}});var r=n(59499),o=n(36325),i=n(22339),l=n(12614),s=n(35035),a=n.n(s),c=n(8100),d=n(94348);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f({chainId:e,variables:t,shouldFetch:n=!0,swrConfig:r}){const{data:o}=(0,c.ZP)(n&&e?["trident-pool-hour-buckets",e,t]:null,(()=>(0,d.$P)(e,t)),r);return o}function p({chainId:e,variables:t,shouldFetch:n=!0,swrConfig:r}){const{data:o}=(0,c.ZP)(n&&e?["trident-pool-day-buckets",e,t]:null,(()=>(0,d.BU)(e,t)),r);return o}function h({chainId:e,variables:t,shouldFetch:n=!0,swrConfig:r}){const{data:l,isValidating:s,error:u}=function({chainId:e,variables:t,shouldFetch:n=!0,swrConfig:r}){return(0,c.ZP)(n&&e?["trident-pool-kpis",e,t]:null,(()=>(0,d.zY)(e,t)),r)}({chainId:e,shouldFetch:n,variables:t,swrConfig:r}),{data:f,isValidating:p,error:h}=function({chainId:e,variables:t,shouldFetch:n=!0,swrConfig:r}){const o=(0,i.ZU)({chainId:e,shouldFetch:!!e}),l=v(v({},t),{},{block:o});return(0,c.ZP)(n&&e?["trident-pool-kpis",e,a()(l)]:null,(()=>(0,d.zY)(e,l)),r)}({chainId:e,shouldFetch:n,variables:t,swrConfig:r}),{data:m,isValidating:g,error:b}=function({chainId:e,variables:t,shouldFetch:n=!0,swrConfig:r}){const o=(0,i.G9)({chainId:e,shouldFetch:!!e}),l=v(v({},t),{},{block:o});return(0,c.ZP)(n&&e?["trident-pool-kpis",e,a()(l)]:null,(()=>(0,d.zY)(e,l)),r)}({chainId:e,shouldFetch:n,variables:t,swrConfig:r});return{isValidating:s||p||g,error:u||h||b,data:l&&f&&m?f.map(((e,t)=>{var n,r,i,s,a,c,d,u,v,p,h,g,b,x,j,w,y,P,O,k,C,S,_,D,N,T,Z,F,E,U;return{volume:(0,o.uf)((null===l||void 0===l||null===(n=l[t])||void 0===n?void 0:n.volumeUSD)-(null===f||void 0===f||null===(r=f[t])||void 0===r?void 0:r.volumeUSD),!0,!1),volume24hChange:((null===l||void 0===l||null===(i=l[t])||void 0===i?void 0:i.volumeUSD)-(null===f||void 0===f||null===(s=f[t])||void 0===s?void 0:s.volumeUSD))/((null===f||void 0===f||null===(a=f[t])||void 0===a?void 0:a.volumeUSD)-(null===m||void 0===m||null===(c=m[t])||void 0===c?void 0:c.volumeUSD))*100-100,fees:(0,o.uf)((null===l||void 0===l||null===(d=l[t])||void 0===d?void 0:d.feesUSD)-(null===f||void 0===f||null===(u=f[t])||void 0===u?void 0:u.feesUSD),!0,!1),fees24hChange:((null===l||void 0===l||null===(v=l[t])||void 0===v?void 0:v.feesUSD)-(null===f||void 0===f||null===(p=f[t])||void 0===p?void 0:p.feesUSD))/((null===f||void 0===f||null===(h=f[t])||void 0===h?void 0:h.feesUSD)-(null===m||void 0===m||null===(g=m[t])||void 0===g?void 0:g.feesUSD))*100-100,liquidity:(0,o.T3)(((null===l||void 0===l||null===(b=l[t])||void 0===b?void 0:b.volumeUSD)-(null===f||void 0===f||null===(x=f[t])||void 0===x?void 0:x.volumeUSD))/(null===l||void 0===l||null===(j=l[t])||void 0===j?void 0:j.liquidityUSD)*100),liquidity24hChange:((null===l||void 0===l||null===(w=l[t])||void 0===w?void 0:w.volumeUSD)-(null===f||void 0===f||null===(y=f[t])||void 0===y?void 0:y.volumeUSD))/(null===l||void 0===l||null===(P=l[t])||void 0===P?void 0:P.liquidityUSD)/(((null===f||void 0===f||null===(O=f[t])||void 0===O?void 0:O.volumeUSD)-(null===m||void 0===m||null===(k=m[t])||void 0===k?void 0:k.volumeUSD))/(null===f||void 0===f||null===(C=f[t])||void 0===C?void 0:C.liquidityUSD))*100-100,transactions:(null===l||void 0===l||null===(S=l[t])||void 0===S?void 0:S.transactionCount)-(null===f||void 0===f||null===(_=f[t])||void 0===_?void 0:_.transactionCount),transactions24hChange:((null===l||void 0===l||null===(D=l[t])||void 0===D?void 0:D.transactionCount)-(null===f||void 0===f||null===(N=f[t])||void 0===N?void 0:N.transactionCount))/((null===f||void 0===f||null===(T=f[t])||void 0===T?void 0:T.transactionCount)-(null===m||void 0===m||null===(Z=m[t])||void 0===Z?void 0:Z.transactionCount))*100-100,apy:(0,o.OB)(((null===l||void 0===l||null===(F=l[t])||void 0===F?void 0:F.feesUSD)-(null===f||void 0===f||null===(E=f[t])||void 0===E?void 0:E.feesUSD))/(null===l||void 0===l||null===(U=l[t])||void 0===U?void 0:U.liquidityUSD)*100,3650)}})):[]}}function m({chainId:e,variables:t,shouldFetch:n=!0,swrConfig:r}){const o=v({},t);return(0,c.ZP)(n&&e?["trident-transactions",e,a()(o)]:null,(()=>(0,d.MQ)(e,o)),r)}const g=()=>{const{chainId:e}=(0,l.a)();return(0,c.ZP)(["getAllTridentPools",e],(()=>(0,d.RD)(e)))}},66808:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trident/migrate/confirm",function(){return n(78405)}])}},function(e){e.O(0,[7440,4221,6441,1626,148,560,9774,2888,179],(function(){return t=66808,e(e.s=t);var t}));var t=e.O();_N_E=t}]);