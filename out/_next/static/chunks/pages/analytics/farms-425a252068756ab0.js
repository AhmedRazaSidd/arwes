(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4787],{29246:function(e,r,t){var n=t(98612),a=t(37005);e.exports=function(e){return a(e)&&n(e)}},40690:function(e,r,t){var n=t(34963),a=t(29932),s=t(40371),i=t(22545),l=t(29246),o=Math.max;e.exports=function(e){if(!e||!e.length)return[];var r=0;return e=n(e,(function(e){if(l(e))return r=o(e.length,r),!0})),i(r,(function(r){return a(e,s(r))}))}},4788:function(e,r,t){var n=t(5976)(t(40690));e.exports=n},66223:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(36325),a=(t(67294),t(41626)),s=t(85893);function i({currency0:e,currency1:r,className:t="",logoClassName:i="",size:l=16}){return(0,s.jsxs)("div",{className:(0,n.AK)("flex items-center space-x-2",t),children:[(0,s.jsx)(a.X,{className:i,currency:e,size:l.toString()+"px"}),(0,s.jsx)(a.X,{className:i,currency:r,size:l.toString()+"px"})]})}},64958:function(e,r,t){"use strict";var n=t(59499),a=t(4730),s=t(41664),i=t(11163),l=t(67294),o=t(85893);const c=["children","exact","activeClassName"];function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=e=>{let{children:r,exact:t=!1,activeClassName:n="text-high-emphesis"}=e,u=(0,a.Z)(e,c);const{asPath:f,pathname:h,route:p,query:m,basePath:x}=(0,i.useRouter)(),g=l.Children.only(r),v=g.props.className||"",y=(t?(u.as||u.href.pathname||u.href)===f:f.startsWith(u.as||u.href.pathname||u.href))?"".concat(v," ").concat(n).trim():v;return(0,o.jsx)(s.default,d(d({href:u.href},u),{},{children:l.cloneElement(g,{className:y||null})}))}},67320:function(e,r,t){"use strict";var n=t(85169),a=(t(67294),t(49513)),s=t(75851),i=t(85893);r.Z=({term:e,search:r})=>{const{i18n:t}=(0,n.mV)();return(0,i.jsx)(s.RQ,{animate:!0,level:3,corners:3,className:"w-full",layer:"primary",children:(0,i.jsx)("div",{className:"flex flex-grow items-center gap-4 w-full sm:w-auto",children:(0,i.jsxs)("div",{className:"focus-within:ring-2 ring-blue flex flex-grow gap-2 items-center rounded border border-dark-800 bg-dark-900 bg-opacity-50 py-2 px-3 w-full sm:w-auto",children:[(0,i.jsx)(a.Z,{strokeWidth:3,width:20,height:20}),(0,i.jsx)("input",{className:"bg-transparent text-high-emphesis w-full placeholder:text-low-emphesis",placeholder:t._(t._("Search by token or pair")),onChange:e=>r(e.target.value),value:e})]})})})}},31820:function(e,r,t){"use strict";t.d(r,{Z:function(){return f}});var n=t(59499),a=t(63801),s=t(11163),i=t(67294),l=t(79521),o=t(36325),c=t(85893);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f({columns:e,data:r,columnsHideable:t=[],defaultSortBy:n={id:"",desc:!1},link:u,loading:f=!0}){const{0:h,1:p}=(0,i.useState)(0!==t.length),m=(0,s.useRouter)(),{getTableProps:x,getTableBodyProps:g,headerGroups:v,prepareRow:y,rows:b,page:j,nextPage:w,previousPage:N,canPreviousPage:O,canNextPage:k,setPageSize:P,allColumns:S,state:{pageIndex:C,pageSize:Z}}=(0,l.useTable)({columns:e,data:r,defaultCanSort:!1,autoResetSortBy:!1,initialState:{hiddenColumns:t,sortBy:[{id:n.id,desc:n.desc}]}},l.useSortBy,l.usePagination);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"w-full overflow-x-auto",children:(0,c.jsxs)("table",d(d({className:"w-auto min-w-full border-collapse table-fixed"},x()),{},{children:[(0,c.jsx)("thead",{children:v.map((e=>(0,c.jsx)("tr",d(d({},e.getHeaderGroupProps()),{},{children:e.headers.map(((r,n,a)=>(0,c.jsx)("th",d(d({},r.getHeaderProps(r.getSortByToggleProps())),{},{children:(0,c.jsx)("div",{className:(0,o.AK)(0===n&&"pl-2",n===e.headers.length-1&&"pr-2","select-none w-full"),children:(0,c.jsx)("div",{className:"flex flex-row pb-2 text-sm text-secondary",children:(0,c.jsxs)("div",{className:(0,o.AK)(0!==n&&"right"===r.align&&"justify-end",0!==n&&"left"===r.align&&"justify-start",!r.align&&(0!==n?"justify-start":"justify-end"),0!==n&&"ml-2",n!==a.length-1&&"mr-2",0===n&&"flex-row-reverse",0===n?"right"===r.align?"justify-start":"justify-end":"","w-full flex whitespace-nowrap xl:mx-auto"),children:[(0,c.jsx)("span",{className:(0,o.AK)("flex items-center",r.isSorted?"block":"hidden"),children:(0,c.jsx)("div",{className:(0,o.AK)("fill-current text-secondary",!r.isSortedDesc&&"rotate-180 transform"),children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})}),r.render("Header"),r.HideHeader&&h&&(0,c.jsx)("button",{onClick:e=>(e=>{S.filter((e=>t.find((r=>r===e.id)))).forEach((e=>e.toggleHidden(!h))),p(!h),e.stopPropagation()})(e),className:"ml-1 text-dark-700",children:r.render("HideHeader")})]})})})}),n)))}),"tr")))}),(0,c.jsx)("tbody",d(d({},g()),{},{children:j.map(((e,r)=>(y(e),(0,c.jsx)("tr",d(d({},e.getRowProps()),{},{children:e.cells.map(((r,t)=>(0,c.jsx)("td",d(d({className:"pb-3 pl-0 pr-0"},r.getCellProps()),{},{children:(0,c.jsx)("div",{onClick:u?()=>m.push(u.href+((e,r)=>{var t=r.split(".");if(1===t.length)return e[r];if(!Array.isArray(t))throw"parts is not valid array";for(var n=t.pop(),a=t.length,s=1,i=t[0];(e=e[i])&&s<a;)i=t[s],s++;return e?e[n]:void 0})(r.row.original,u.id)):()=>{},children:(0,c.jsx)("div",{className:(0,o.AK)(0===t&&"rounded-l pl-4",t===e.cells.length-1&&"rounded-r pr-4",u&&"cursor-pointer","h-20 text-primary bg-dark-900 flex items-center"),children:(0,c.jsx)("div",{className:(0,o.AK)("right"===r.column.align&&"text-right","left"===r.column.align&&"text-left",0!==t&&"ml-2",t!==e.cells.length-1&&"mr-2","w-full xl:mx-auto"),children:r.render("Cell")})})})}),t)))}),r))))}))]}))}),(null===r||void 0===r?void 0:r.length)>10&&(0,c.jsxs)("div",{className:"flex justify-between w-full",children:[(0,c.jsxs)("div",{className:"flex text-sm font-bold text-secondary",children:[(0,c.jsx)("div",{children:"Rows per page: "}),(0,c.jsx)("select",{value:Z,onChange:e=>P(Number(e.target.value)),className:"ml-1 bg-transparent",children:[10,20,30,40,50].map((e=>(0,c.jsx)("option",{className:"bg-dark-1000",value:e,children:e},e)))})]}),(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("div",{className:"text-sm text-secondary",children:"".concat(Z*C+1,"-").concat(Z*(C+1)," of ").concat(b.length)}),(0,c.jsx)("button",{onClick:()=>N(),className:(0,o.AK)(O?"":"opacity-50 hover:cursor-default","ml-3"),children:(0,c.jsx)(a.Y4O,{width:16,height:16})}),(0,c.jsx)("button",{onClick:()=>w(),className:(0,o.AK)(k?"":"opacity-50 hover:cursor-default","ml-3"),children:(0,c.jsx)(a.LZ3,{width:16,height:16})})]})]})]})}},74665:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(9008),a=t(72457),s=(t(67294),t(64958)),i=t(85893);var l=({items:e})=>(0,i.jsx)("div",{className:"mt-4 space-y-4",children:e.map(((e,r)=>(0,i.jsx)(s.Z,{href:e.href,activeClassName:"font-bold text-high-emphesis bg-dark-800",children:(0,i.jsx)("a",{className:"flex items-center px-1 py-3 border-transparent rounded hover:bg-dark-900",children:(0,i.jsx)("div",{className:"ml-5",children:e.text})})},r)))});function o({children:e}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.default,{children:[(0,i.jsx)("title",{children:"NEXUSSwap Analytics | NEXUSSwap"}),(0,i.jsx)("meta",{name:"description",content:"NEXUSSwap Liquidity Pair (NLP) Analytics by NEXUSSwap"})]}),(0,i.jsxs)(a.Z,{id:"analytics",maxWidth:"full",className:"grid h-full grid-flow-col grid-cols-10 mx-auto lg:px-4 gap-9",children:[(0,i.jsx)("div",{className:"sticky top-0 hidden lg:block md:col-span-2 3xl:col-start-1 3xl:col-span-2",children:(0,i.jsx)(l,{items:[{text:"Dashboard",href:"/analytics/dashboard"},{text:"Farms",href:"/analytics/farms"},{text:"Pairs",href:"/analytics/pairs"},{text:"Tokens",href:"/analytics/tokens"},{text:"BentoBox",href:"/analytics/bentobox"}]})}),(0,i.jsx)("div",{className:"col-span-10 lg:border-l lg:col-span-8 3xl:col-span-7 border-dark-700",children:e})]})]})}},30860:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});t(67294);var n=t(36325),a=t(85893);const s={dashboard:"/images/analytics/analytics-background-dashboard.jpg",bar:"/images/analytics/analytics-background-bar.jpg",farms:"/images/analytics/analytics-background-farms.jpg",pool:"/images/analytics/analytics-background-pool.svg",pools:"/images/analytics/analytics-background-pools.jpg",token:"/images/analytics/analytics-background-token.svg",tokens:"/images/analytics/analytics-background-tokens.jpg"};function i({background:e,children:r}){return(0,a.jsxs)("div",{className:"h-[200px] md:h-[151px] w-full relative bg-dark-900",children:[(0,a.jsx)("div",{className:(0,n.AK)("absolute w-full h-full",!s[e].includes("svg")&&"bg-cover bg-center opacity-[0.15]"),style:{backgroundImage:"url('".concat(s[e],"')"),WebkitMaskImage:"url('".concat(s[e],"')")}}),(0,a.jsx)("div",{className:"absolute w-full px-8 py-8 lg:px-14 z-1",children:r})]})}},73803:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(36325),a=t(85893);function s({number:e,scaleNumber:r=!0,percent:t=!1,className:s=""}){return(isNaN(e)||e===1/0)&&(e=0),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:(0,n.AK)(e>0?"text-green":e<0&&"text-red","font-normal",s),children:(e>0?"+":e<0?"-":"")+(t?(0,n.T3)(e).replace("-",""):r?(0,n.nH)(e,!0).replace("-",""):(0,n.uf)(e,!0,!1).replace("-",""))})})}},34645:function(e,r,t){"use strict";t.d(r,{Z:function(){return h}});var n=t(66223),a=t(31820),s=t(36325),i=t(62483),l=t(25675),o=t(67294),c=t(73803),u=t(85893);function d({pair:e}){var r,t;const a=(0,i.U8)(null===e||void 0===e||null===(r=e.token0)||void 0===r?void 0:r.id),s=(0,i.U8)(null===e||void 0===e||null===(t=e.token1)||void 0===t?void 0:t.id);return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)(n.Z,{className:"-space-x-3",logoClassName:"rounded-full",currency0:a,currency1:s,size:40}),(0,u.jsxs)("div",{className:"flex flex-col ml-3 whitespace-nowrap",children:[(0,u.jsx)("div",{className:"font-bold text-high-emphesis",children:null===e||void 0===e?void 0:e.name}),(0,u.jsx)("div",{className:"text-secondary",children:e.type})]})]})})}function f({rewards:e}){return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"inline-flex items-center space-x-4 flex-inline",children:[(0,u.jsx)("div",{className:"flex flex-col items-center space-y-2",children:null===e||void 0===e?void 0:e.map(((e,r)=>(0,u.jsx)("div",{className:"flex items-center",children:e.icon&&(0,u.jsx)(l.default,{src:e.icon,width:"30px",height:"30px",className:"rounded-full",layout:"fixed",alt:e.currency.symbol})},r)))}),(0,u.jsx)("div",{className:"flex flex-col space-y-1",children:null===e||void 0===e?void 0:e.map(((e,r)=>{var t,n;const a=6-String(null===e||void 0===e||null===(t=e.rewardPerDay)||void 0===t?void 0:t.toFixed(0)).length;return(0,u.jsxs)("div",{className:"text-base whitespace-nowrap",children:[null===e||void 0===e||null===(n=e.rewardPerDay)||void 0===n?void 0:n.toFixed(a>0?a:0)," ",e.currency.symbol]},r)}))})]})})}function h({pools:e}){const r=o.useMemo((()=>({id:"liquidity",desc:!0})),[]),t=o.useMemo((()=>[{Header:"Pool Name",accessor:"pair",Cell:e=>(0,u.jsx)(d,{pair:e.value}),disableSortBy:!0,align:"left"},{Header:"Annual / Monthly / Daily APR",accessor:"apr",Cell:e=>(0,u.jsxs)("div",{className:"inline-flex flex-row font-medium",children:[e.value.annual<1e4?(0,u.jsx)(c.Z,{number:e.value.annual,percent:!0}):(0,u.jsx)("div",{className:"font-normal text-green",children:">10,000%"}),"\xa0/ ",e.value.monthly>1e4?">10,000%":(0,s.T3)(e.value.monthly),"\xa0/ ",e.value.daily>1e4?">10,000%":(0,s.T3)(e.value.daily)]}),align:"right",sortType:(e,r)=>e.original.apr.annual>r.original.apr.annual?1:r.original.apr.annual>e.original.apr.annual?-1:0},{Header:"TVL",accessor:"liquidity",Cell:e=>(0,u.jsx)("div",{className:"text-base font-medium text-primary",children:(0,s.uf)(e.value,!0,!1)}),align:"right"},{Header:"Daily Rewards",accessor:"rewards",Cell:e=>(0,u.jsx)(f,{rewards:e.value}),disableSortBy:!0,align:"right"}]),[]);return(0,u.jsx)(u.Fragment,{children:e&&(0,u.jsx)(a.Z,{columns:t,data:e,defaultSortBy:r})})}},83304:function(e,r,t){"use strict";t.d(r,{UK:function(){return n.UK},qL:function(){return n.qL},x7:function(){return d},rO:function(){return u.rO},HW:function(){return u.HW},mX:function(){return u.mX},cq:function(){return u.cq},MQ:function(){return u.MQ},JY:function(){return u.JY},wq:function(){return u.wq},mi:function(){return u.mi},ou:function(){return u.ou},JE:function(){return u.JE},Ib:function(){return u.Ib},i7:function(){return u.i7},sL:function(){return u.sL},oF:function(){return f.ZP},lz:function(){return u.lz}});var n=t(27262),a=t(19485),s=t(9279),i=t(71923),l=t(12614),o=t(68411),c=t(67294),u=t(85926);var d=function(){const{account:e,chainId:r}=(0,l.a)(),t=(0,o.h7)(),n=(0,u.rO)();return{deposit:(0,c.useCallback)((async(l,o)=>{if(o&&r)try{const c=(0,a.Kn)(l);if(c===i.df[r]){const r=await(null===n||void 0===n?void 0:n.deposit(s.d,e,e,o,0,{value:o}));return t(r,{summary:"Deposit to Bentobox"})}{const r=await(null===n||void 0===n?void 0:n.deposit(c,e,e,o,0));return t(r,{summary:"Deposit to Bentobox"})}}catch(c){return console.error("bentobox deposit error:",c),c}}),[e,t,n,r]),withdraw:(0,c.useCallback)((async(s,l,o)=>{if(l&&r)try{const c=(0,a.Kn)(s),u=await(null===n||void 0===n?void 0:n.withdraw(c===i.df[r]?"0x0000000000000000000000000000000000000000":c,e,e,l,o?o.toString():0));return t(u,{summary:"Withdraw from Bentobox"})}catch(c){return console.error("bentobox withdraw error:",c),c}}),[e,t,n,r]),harvest:(0,c.useCallback)((async(e,a=!1)=>{if(r)try{const r=await(null===n||void 0===n?void 0:n.harvest(e,a,0));return t(r,{summary:a?"Harvest & Rebalance":"Harvest"})}catch(s){return console.error("bentobox harvest error:",s),s}}),[])}};t(89638),t(37601);t(82766),t(76294),t(80113);var f=t(90573)},82766:function(e,r,t){"use strict";t.d(r,{r:function(){return c}});var n=t(71923),a=(t(93036),t(1082)),s=t.n(a),i=t(83852),l=t(67294),o=t(75438);function c(e){const{0:r,1:t}=(0,l.useState)("#0094ec");return(0,l.useLayoutEffect)((()=>{let r=!1;return e&&async function(e){if(e.chainId===n.a_.RINKEBY&&"0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735"===e.address)return Promise.resolve("#FAAB14");const r="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/".concat(e.address,"/logo.png");return s().from(r).getPalette().then((e=>{if(null!==e&&void 0!==e&&e.Vibrant){let r=e.Vibrant.hex,t=(0,o.$v)(r,"#FFF");for(;t<3;)r=(0,i.wj)(.005,r),t=(0,o.$v)(r,"#FFF");return r}return null})).catch((()=>null))}(e).then((e=>{r||null===e||t(e)})),()=>{r=!0,t("#0094ec")}}),[e]),r}},76294:function(e,r,t){"use strict";var n=t(59499),a=t(74221),s=t(67294);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}r.Z=function({data:e,options:r}){const{0:t,1:l}=(0,s.useState)(""),o=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},r);return{result:function({fuse:e,data:r,term:t}){const n=e.search(t);return t?n.map((e=>e.item)):r}({fuse:new a.Z(e||[],o),data:e,term:t}),search:l,term:t,reset:()=>l("")}}},80113:function(e,r,t){"use strict";var n=t(2593),a=t(67294);function s(e,r,t="."){try{return r.replace("[",t).replace("]","").split(t).reduce(((e,r)=>e[r]),e)}catch(n){return}}r.Z=(e,r=null)=>{const{0:t,1:i}=(0,a.useState)(r);return{items:(0,a.useMemo)((()=>{if(e&&e.length>0){const r=[...e];return null!==t&&r.sort(((e,r)=>{const a=s(e,t.key),i=s(r,t.key);if(a instanceof n.O$&&i instanceof n.O$){if(a.lt(i))return"ascending"===t.direction?-1:1;if(a.gt(i))return"ascending"===t.direction?1:-1}else{if(a===1/0)return"ascending"===t.direction?-1:1;if(i===1/0)return"ascending"===t.direction?1:-1;if(a<i)return"ascending"===t.direction?-1:1;if(a>i)return"ascending"===t.direction?1:-1}return 0})),r}return[]}),[e,t]),requestSort:(e,r="ascending")=>{t&&t.key===e&&"ascending"===t.direction?r="descending":t&&t.key===e&&"descending"===t.direction&&(r="ascending"),i({key:e,direction:r})},sortConfig:t}}},10996:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return d}});var n=t(67320),a=t(74665),s=t(30860),i=t(34645),l=t(4725),o=t(76294),c=t(67294),u=t(85893);function d(){const e=(0,l.ZP)(),r=(0,c.useMemo)((()=>null===e||void 0===e?void 0:e.map((e=>{var r;return{pair:{token0:e.pair.token0,token1:e.pair.token1,id:e.pair.id,name:null!==(r=e.pair.symbol)&&void 0!==r?r:"".concat(e.pair.token0.symbol,"-").concat(e.pair.token1.symbol),type:e.pair.symbol?"Kashi Farm":"Nexus Generator"},rewards:e.rewards,liquidity:e.tvl,apr:{daily:100*e.roiPerDay,monthly:100*e.roiPerMonth,annual:100*e.roiPerYear}}})).filter((e=>!!e))),[e]),t=(0,c.useMemo)((()=>({keys:["pair.token0.symbol","pair.token1.symbol"],threshold:.4})),[]),{result:d,term:f,search:h}=(0,o.Z)({data:r,options:t});return(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(s.Z,{background:"farms",children:(0,u.jsxs)("div",{className:"grid items-center justify-between grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"text-3xl font-bold text-high-emphesis",children:"Farms"}),(0,u.jsx)("div",{className:"",children:"Farms are incentivized pools. Click on the column name to sort by APR or volume."})]}),(0,u.jsx)(n.Z,{term:f,search:h})]})}),(0,u.jsx)("div",{className:"px-4 pt-4 lg:px-14",children:(0,u.jsx)(i.Z,{pools:d})})]})}},94743:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics/farms",function(){return t(10996)}])},49513:function(e,r,t){"use strict";var n=t(67294),a=t(45697),s=t.n(a);function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=(0,n.forwardRef)((function(e,r){var t=e.color,a=void 0===t?"currentColor":t,s=e.size,o=void 0===s?24:s,c=l(e,["color","size"]);return n.createElement("svg",i({ref:r,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("circle",{cx:"11",cy:"11",r:"8"}),n.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))}));o.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},o.displayName="Search",r.Z=o}},function(e){e.O(0,[7440,4221,9521,1626,4725,9774,2888,179],(function(){return r=94743,e(e.s=r);var r}));var r=e.O();_N_E=r}]);