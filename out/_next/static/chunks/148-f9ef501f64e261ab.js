"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{49932:function(e,n,t){var r=t(59499),o=t(85169),i=t(71923),a=t(71862),u=t(27262),c=t(69137),s=t(44232),d=t(12614),l=t(90849),p=t(67294),v=t(85893);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const y=(0,p.memo)((({inputAmount:e,onStateChange:n,tokenApproveOn:t,id:r,onSLPPermit:i})=>{var c;const{i18n:d}=(0,o.mV)(),[l,f]=(0,u.qL)(null===e||void 0===e?void 0:e.wrapped,t),{gatherPermitSignature:y,signatureData:O}=(0,s.j3)(["Uniswap V2","NEXUSSwap LP Token"].includes(null!==(c=null===e||void 0===e?void 0:e.currency.name)&&void 0!==c?c:"")?null===e||void 0===e?void 0:e.wrapped:void 0,t),b=(0,p.useCallback)((async()=>{if(y)try{await y()}catch(e){await f()}else await f()}),[f,y]);return(0,p.useEffect)((()=>{if(O&&e&&l===u.UK.NOT_APPROVED){if(!i)throw new Error("onSLPPermit callback not defined");i(O)}}),[l,e,i,n,O]),(0,p.useEffect)((()=>{if(null!==e&&void 0!==e&&e.currency.wrapped.address)return n((n=>m(m({},n),{},{[e.currency.wrapped.address]:O?u.UK.APPROVED:l}))),()=>n((n=>{const t=m({},n);return t[e.currency.wrapped.address]&&delete t[e.currency.wrapped.address],t}))}),[l,e,null===e||void 0===e?void 0:e.currency.wrapped.address,n,O]),!O&&[u.UK.NOT_APPROVED,u.UK.PENDING].includes(l)?(0,v.jsx)(a.ZP,{fullWidth:!0,id:r,loading:l===u.UK.PENDING,color:"blue",onClick:b,children:d._(d._("Approve {0}",{0:null===e||void 0===e?void 0:e.currency.symbol}))}):(0,v.jsx)(v.Fragment,{})}));n.Z=({inputAmounts:e,tokenApproveOn:n,children:t,withPermit:r=!1,masterContractAddress:s,permit:f,onPermit:m,onSLPPermit:O,onPermitError:b})=>{const{account:g}=(0,d.a)(),{i18n:P}=(0,o.mV)(),h=(0,l.mq)(),{0:w,1:N}=(0,p.useState)({}),{0:D,1:E}=(0,p.useState)(!1),{approve:S,approvalState:A,getPermit:j,permit:k}=(0,c.ZP)(r?s:void 0,{}),U=Object.values(w).some((e=>e===u.UK.UNKNOWN))||!!r&&A===c.kG.UNKNOWN,L=Object.values(w).every((e=>e===u.UK.APPROVED))&&(!r||A===c.kG.APPROVED),T=(0,p.useCallback)((async()=>{if(r&&!D){const e=await j();null!==e&&void 0!==e&&e.signature&&m?m(e.signature):b&&(E(!0),b())}else await S()}),[S,j,m,b,D,r]);return(0,v.jsxs)("div",{className:"flex flex-col gap-3",children:[e.every((e=>null===e||void 0===e?void 0:e.greaterThan(i.xE)))&&[c.kG.NOT_APPROVED,c.kG.PENDING].includes(A)&&(0,v.jsx)(a.ZP,{loading:A===c.kG.PENDING,id:"btn-approve",onClick:T,children:P._(P._("Approve BentoBox"))}),e.reduce(((e,t,r)=>(null!==t&&void 0!==t&&t.currency.isNative||null===t||void 0===t||!t.greaterThan(i.xE)||e.push((0,v.jsx)(y,{id:"btn-approve",inputAmount:t,onStateChange:N,tokenApproveOn:n,onSLPPermit:O},r)),e)),[]),g?t({approved:L||!!f,loading:U,permit:k}):(0,v.jsx)(a.ZP,{color:"gradient",onClick:h,children:P._(P._("Connect Wallet"))})]})}},83304:function(e,n,t){t.d(n,{UK:function(){return r.UK},qL:function(){return r.qL},x7:function(){return l},rO:function(){return d.rO},HW:function(){return d.HW},mX:function(){return d.mX},cq:function(){return d.cq},MQ:function(){return d.MQ},JY:function(){return d.JY},wq:function(){return d.wq},mi:function(){return d.mi},ou:function(){return d.ou},JE:function(){return d.JE},Ib:function(){return d.Ib},i7:function(){return d.i7},sL:function(){return d.sL},oF:function(){return p.ZP},lz:function(){return d.lz}});var r=t(27262),o=t(19485),i=t(9279),a=t(71923),u=t(12614),c=t(68411),s=t(67294),d=t(85926);var l=function(){const{account:e,chainId:n}=(0,u.a)(),t=(0,c.h7)(),r=(0,d.rO)();return{deposit:(0,s.useCallback)((async(u,c)=>{if(c&&n)try{const s=(0,o.Kn)(u);if(s===a.df[n]){const n=await(null===r||void 0===r?void 0:r.deposit(i.d,e,e,c,0,{value:c}));return t(n,{summary:"Deposit to Bentobox"})}{const n=await(null===r||void 0===r?void 0:r.deposit(s,e,e,c,0));return t(n,{summary:"Deposit to Bentobox"})}}catch(s){return console.error("bentobox deposit error:",s),s}}),[e,t,r,n]),withdraw:(0,s.useCallback)((async(i,u,c)=>{if(u&&n)try{const s=(0,o.Kn)(i),d=await(null===r||void 0===r?void 0:r.withdraw(s===a.df[n]?"0x0000000000000000000000000000000000000000":s,e,e,u,c?c.toString():0));return t(d,{summary:"Withdraw from Bentobox"})}catch(s){return console.error("bentobox withdraw error:",s),s}}),[e,t,r,n]),harvest:(0,s.useCallback)((async(e,o=!1)=>{if(n)try{const n=await(null===r||void 0===r?void 0:r.harvest(e,o,0));return t(n,{summary:o?"Harvest & Rebalance":"Harvest"})}catch(i){return console.error("bentobox harvest error:",i),i}}),[])}};t(89638),t(37601);t(82766),t(76294),t(80113);var p=t(90573)},44232:function(e,n,t){t.d(n,{pO:function(){return D},j3:function(){return E}});var r,o=t(59499),i=t(16441),a=t(71923),u=t(62793),c=t(12614),s=t(67294),d=t(1569),l=t(85926),p=t(67993),v=t(74272);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e[e.AMOUNT=1]="AMOUNT",e[e.ALLOWED=2]="ALLOWED"}(r||(r={}));const y={1:{[u.gn.address]:{type:r.AMOUNT,name:"USD Coin",version:"2"},[u.h1.address]:{type:r.ALLOWED,name:"Dai Stablecoin",version:"1"},[a.hs[1].address]:{type:r.AMOUNT,name:"NEXUSSwap"}},4:{"0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735":{type:r.ALLOWED,name:"Dai Stablecoin",version:"1"},[a.hs[4].address]:{type:r.AMOUNT,name:"NEXUSSwap"}},3:{[a.hs[3].address]:{type:r.AMOUNT,name:"NEXUSSwap"},"0x07865c6E87B9F70255377e024ace6630C1Eaa37F":{type:r.AMOUNT,name:"USD Coin",version:"2"}},5:{[a.hs[5].address]:{type:r.AMOUNT,name:"NEXUSSwap"}},42:{[a.hs[42].address]:{type:r.AMOUNT,name:"NEXUSSwap"}}};let O;!function(e){e[e.NOT_APPLICABLE=0]="NOT_APPLICABLE",e[e.LOADING=1]="LOADING",e[e.NOT_SIGNED=2]="NOT_SIGNED",e[e.SIGNED=3]="SIGNED"}(O||(O={}));const b=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],g=[{name:"name",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],P=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],h=[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}];function w(e,n,t){var o,u;const{account:f,chainId:w,library:N}=(0,c.a)(),D=(0,v.Z)(),E=null!==e&&void 0!==e&&null!==(o=e.currency)&&void 0!==o&&o.isToken?e.currency.address:void 0,S=(0,l.N9)(E),A=(0,p.Z)(),j=(0,s.useMemo)((()=>[null!==f&&void 0!==f?f:void 0]),[f]),k=(0,d.Wk)(S,"nonces",j),U=null!==t&&void 0!==t?t:w&&E?null===(u=y[w])||void 0===u?void 0:u[E]:void 0,{0:L,1:T}=(0,s.useState)(null);return(0,s.useMemo)((()=>{var t,o;if(A||!e||!S||!f||!w||!D||!N||!k.valid||!E||!n||!U)return{state:O.NOT_APPLICABLE,signatureData:null,gatherPermitSignature:null};const u=null===(t=k.result)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.toNumber();if(k.loading||"number"!==typeof u)return{state:O.LOADING,signatureData:null,gatherPermitSignature:null};const c=L&&L.owner===f&&L.deadline>=D.toNumber()&&L.tokenAddress===E&&L.nonce===u&&L.spender===n&&("allowed"in L||a.QA.equal(a.QA.BigInt(L.amount),e.quotient));return{state:c?O.SIGNED:O.NOT_SIGNED,signatureData:c?L:null,gatherPermitSignature:async function(){const t=U.type===r.ALLOWED,o=D.toNumber()+1200,a=e.quotient.toString(),c=t?{holder:f,spender:n,allowed:t,nonce:u,expiry:o}:{owner:f,spender:n,value:a,nonce:u,deadline:o},s=U.version?{name:U.name,version:U.version,verifyingContract:E,chainId:w}:{name:U.name,verifyingContract:E,chainId:w},d=JSON.stringify({types:{EIP712Domain:U.version?b:g,Permit:t?h:P},domain:s,primaryType:"Permit",message:c});return N.send("eth_signTypedData_v4",[f,d]).then(i.N).then((e=>{T(m(m({v:e.v,r:e.r,s:e.s,deadline:o},t?{allowed:t}:{amount:a}),{},{nonce:u,chainId:w,owner:f,spender:n,tokenAddress:E,permitType:U.type}))}))}}}),[A,e,S,f,w,D,N,k.valid,k.result,k.loading,E,n,U,L])}const N={version:"1",name:"NEXUSSwap LP Token",type:r.AMOUNT};function D(e,n){return w(e,n,N)}function E(e,n){const t=(0,l.N9)(null===e||void 0===e?void 0:e.currency.address),o=(0,d.Wk)(t,"name"),i=(0,s.useMemo)((()=>{var e;return null!==o&&void 0!==o&&null!==(e=o.result)&&void 0!==e&&e.length?null===o||void 0===o?void 0:o.result[0]:void 0}),[o]);return w(e?a.ih.fromRawAmount(e.currency,a.Bz):void 0,n,{version:"1",name:null!==i&&void 0!==i?i:"",type:r.AMOUNT})}},76294:function(e,n,t){var r=t(59499),o=t(74221),i=t(67294);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}n.Z=function({data:e,options:n}){const{0:t,1:u}=(0,i.useState)(""),c=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n);return{result:function({fuse:e,data:n,term:t}){const r=e.search(t);return t?r.map((e=>e.item)):n}({fuse:new o.Z(e||[],c),data:e,term:t}),search:u,term:t,reset:()=>u("")}}},67993:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(12614),o=t(1569),i=t(67294),a=t(85926);function u(){var e,n;const{account:t}=(0,r.a)(),u=(0,a.c5)(),c=(0,i.useMemo)((()=>[null!==t&&void 0!==t?t:void 0]),[t]),s=(0,o.Wk)(u,"isArgentWallet",c,o.DB);return null!==(e=null===s||void 0===s||null===(n=s.result)||void 0===n?void 0:n[0])&&void 0!==e&&e}},80113:function(e,n,t){var r=t(2593),o=t(67294);function i(e,n,t="."){try{return n.replace("[",t).replace("]","").split(t).reduce(((e,n)=>e[n]),e)}catch(r){return}}n.Z=(e,n=null)=>{const{0:t,1:a}=(0,o.useState)(n);return{items:(0,o.useMemo)((()=>{if(e&&e.length>0){const n=[...e];return null!==t&&n.sort(((e,n)=>{const o=i(e,t.key),a=i(n,t.key);if(o instanceof r.O$&&a instanceof r.O$){if(o.lt(a))return"ascending"===t.direction?-1:1;if(o.gt(a))return"ascending"===t.direction?1:-1}else{if(o===1/0)return"ascending"===t.direction?-1:1;if(a===1/0)return"ascending"===t.direction?1:-1;if(o<a)return"ascending"===t.direction?-1:1;if(o>a)return"ascending"===t.direction?1:-1}return 0})),n}return[]}),[e,t]),requestSort:(e,n="ascending")=>{t&&t.key===e&&"ascending"===t.direction?n="descending":t&&t.key===e&&"descending"===t.direction&&(n="ascending"),a({key:e,direction:n})},sortConfig:t}}},74272:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(16339),o=t(67294),i=t(1569),a=t(85926);function u(){const e=(0,r.C)((e=>e.user.userDeadline)),n=function(){var e,n;const t=(0,a.Fe)();return null===(e=(0,i.Wk)(t,"getCurrentBlockTimestamp"))||void 0===e||null===(n=e.result)||void 0===n?void 0:n[0]}();return(0,o.useMemo)((()=>{if(n&&e)return n.add(e)}),[n,e])}}}]);