(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6984],{66223:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var i=t(36325),s=(t(67294),t(41626)),n=t(85893);function l({currency0:e,currency1:r,className:t="",logoClassName:l="",size:a=16}){return(0,n.jsxs)("div",{className:(0,i.AK)("flex items-center space-x-2",t),children:[(0,n.jsx)(s.X,{className:l,currency:e,size:a.toString()+"px"}),(0,n.jsx)(s.X,{className:l,currency:r,size:a.toString()+"px"})]})}},64958:function(e,r,t){"use strict";var i=t(59499),s=t(4730),n=t(41664),l=t(11163),a=t(67294),o=t(85893);const c=["children","exact","activeClassName"];function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=e=>{let{children:r,exact:t=!1,activeClassName:i="text-high-emphesis"}=e,d=(0,s.Z)(e,c);const{asPath:h,pathname:m,route:p,query:g,basePath:x}=(0,l.useRouter)(),v=a.Children.only(r),f=v.props.className||"",y=(t?(d.as||d.href.pathname||d.href)===h:h.startsWith(d.as||d.href.pathname||d.href))?"".concat(f," ").concat(i).trim():f;return(0,o.jsx)(n.default,u(u({href:d.href},d),{},{children:a.cloneElement(v,{className:y||null})}))}},67320:function(e,r,t){"use strict";var i=t(85169),s=(t(67294),t(49513)),n=t(75851),l=t(85893);r.Z=({term:e,search:r})=>{const{i18n:t}=(0,i.mV)();return(0,l.jsx)(n.RQ,{animate:!0,level:3,corners:3,className:"w-full",layer:"primary",children:(0,l.jsx)("div",{className:"flex flex-grow items-center gap-4 w-full sm:w-auto",children:(0,l.jsxs)("div",{className:"focus-within:ring-2 ring-blue flex flex-grow gap-2 items-center rounded border border-dark-800 bg-dark-900 bg-opacity-50 py-2 px-3 w-full sm:w-auto",children:[(0,l.jsx)(s.Z,{strokeWidth:3,width:20,height:20}),(0,l.jsx)("input",{className:"bg-transparent text-high-emphesis w-full placeholder:text-low-emphesis",placeholder:t._(t._("Search by token or pair")),onChange:e=>r(e.target.value),value:e})]})})})}},31820:function(e,r,t){"use strict";t.d(r,{Z:function(){return h}});var i=t(59499),s=t(63801),n=t(11163),l=t(67294),a=t(79521),o=t(36325),c=t(85893);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function h({columns:e,data:r,columnsHideable:t=[],defaultSortBy:i={id:"",desc:!1},link:d,loading:h=!0}){const{0:m,1:p}=(0,l.useState)(0!==t.length),g=(0,n.useRouter)(),{getTableProps:x,getTableBodyProps:v,headerGroups:f,prepareRow:y,rows:j,page:b,nextPage:C,previousPage:w,canPreviousPage:N,canNextPage:k,setPageSize:O,allColumns:S,state:{pageIndex:P,pageSize:D}}=(0,a.useTable)({columns:e,data:r,defaultCanSort:!1,autoResetSortBy:!1,initialState:{hiddenColumns:t,sortBy:[{id:i.id,desc:i.desc}]}},a.useSortBy,a.usePagination);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"w-full overflow-x-auto",children:(0,c.jsxs)("table",u(u({className:"w-auto min-w-full border-collapse table-fixed"},x()),{},{children:[(0,c.jsx)("thead",{children:f.map((e=>(0,c.jsx)("tr",u(u({},e.getHeaderGroupProps()),{},{children:e.headers.map(((r,i,s)=>(0,c.jsx)("th",u(u({},r.getHeaderProps(r.getSortByToggleProps())),{},{children:(0,c.jsx)("div",{className:(0,o.AK)(0===i&&"pl-2",i===e.headers.length-1&&"pr-2","select-none w-full"),children:(0,c.jsx)("div",{className:"flex flex-row pb-2 text-sm text-secondary",children:(0,c.jsxs)("div",{className:(0,o.AK)(0!==i&&"right"===r.align&&"justify-end",0!==i&&"left"===r.align&&"justify-start",!r.align&&(0!==i?"justify-start":"justify-end"),0!==i&&"ml-2",i!==s.length-1&&"mr-2",0===i&&"flex-row-reverse",0===i?"right"===r.align?"justify-start":"justify-end":"","w-full flex whitespace-nowrap xl:mx-auto"),children:[(0,c.jsx)("span",{className:(0,o.AK)("flex items-center",r.isSorted?"block":"hidden"),children:(0,c.jsx)("div",{className:(0,o.AK)("fill-current text-secondary",!r.isSortedDesc&&"rotate-180 transform"),children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})}),r.render("Header"),r.HideHeader&&m&&(0,c.jsx)("button",{onClick:e=>(e=>{S.filter((e=>t.find((r=>r===e.id)))).forEach((e=>e.toggleHidden(!m))),p(!m),e.stopPropagation()})(e),className:"ml-1 text-dark-700",children:r.render("HideHeader")})]})})})}),i)))}),"tr")))}),(0,c.jsx)("tbody",u(u({},v()),{},{children:b.map(((e,r)=>(y(e),(0,c.jsx)("tr",u(u({},e.getRowProps()),{},{children:e.cells.map(((r,t)=>(0,c.jsx)("td",u(u({className:"pb-3 pl-0 pr-0"},r.getCellProps()),{},{children:(0,c.jsx)("div",{onClick:d?()=>g.push(d.href+((e,r)=>{var t=r.split(".");if(1===t.length)return e[r];if(!Array.isArray(t))throw"parts is not valid array";for(var i=t.pop(),s=t.length,n=1,l=t[0];(e=e[l])&&n<s;)l=t[n],n++;return e?e[i]:void 0})(r.row.original,d.id)):()=>{},children:(0,c.jsx)("div",{className:(0,o.AK)(0===t&&"rounded-l pl-4",t===e.cells.length-1&&"rounded-r pr-4",d&&"cursor-pointer","h-20 text-primary bg-dark-900 flex items-center"),children:(0,c.jsx)("div",{className:(0,o.AK)("right"===r.column.align&&"text-right","left"===r.column.align&&"text-left",0!==t&&"ml-2",t!==e.cells.length-1&&"mr-2","w-full xl:mx-auto"),children:r.render("Cell")})})})}),t)))}),r))))}))]}))}),(null===r||void 0===r?void 0:r.length)>10&&(0,c.jsxs)("div",{className:"flex justify-between w-full",children:[(0,c.jsxs)("div",{className:"flex text-sm font-bold text-secondary",children:[(0,c.jsx)("div",{children:"Rows per page: "}),(0,c.jsx)("select",{value:D,onChange:e=>O(Number(e.target.value)),className:"ml-1 bg-transparent",children:[10,20,30,40,50].map((e=>(0,c.jsx)("option",{className:"bg-dark-1000",value:e,children:e},e)))})]}),(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("div",{className:"text-sm text-secondary",children:"".concat(D*P+1,"-").concat(D*(P+1)," of ").concat(j.length)}),(0,c.jsx)("button",{onClick:()=>w(),className:(0,o.AK)(N?"":"opacity-50 hover:cursor-default","ml-3"),children:(0,c.jsx)(s.Y4O,{width:16,height:16})}),(0,c.jsx)("button",{onClick:()=>C(),className:(0,o.AK)(k?"":"opacity-50 hover:cursor-default","ml-3"),children:(0,c.jsx)(s.LZ3,{width:16,height:16})})]})]})]})}},74665:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var i=t(9008),s=t(72457),n=(t(67294),t(64958)),l=t(85893);var a=({items:e})=>(0,l.jsx)("div",{className:"mt-4 space-y-4",children:e.map(((e,r)=>(0,l.jsx)(n.Z,{href:e.href,activeClassName:"font-bold text-high-emphesis bg-dark-800",children:(0,l.jsx)("a",{className:"flex items-center px-1 py-3 border-transparent rounded hover:bg-dark-900",children:(0,l.jsx)("div",{className:"ml-5",children:e.text})})},r)))});function o({children:e}){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.default,{children:[(0,l.jsx)("title",{children:"NEXUSSwap Analytics | NEXUSSwap"}),(0,l.jsx)("meta",{name:"description",content:"NEXUSSwap Liquidity Pair (NLP) Analytics by NEXUSSwap"})]}),(0,l.jsxs)(s.Z,{id:"analytics",maxWidth:"full",className:"grid h-full grid-flow-col grid-cols-10 mx-auto lg:px-4 gap-9",children:[(0,l.jsx)("div",{className:"sticky top-0 hidden lg:block md:col-span-2 3xl:col-start-1 3xl:col-span-2",children:(0,l.jsx)(a,{items:[{text:"Dashboard",href:"/analytics/dashboard"},{text:"Farms",href:"/analytics/farms"},{text:"Pairs",href:"/analytics/pairs"},{text:"Tokens",href:"/analytics/tokens"},{text:"BentoBox",href:"/analytics/bentobox"}]})}),(0,l.jsx)("div",{className:"col-span-10 lg:border-l lg:col-span-8 3xl:col-span-7 border-dark-700",children:e})]})]})}},30860:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});t(67294);var i=t(36325),s=t(85893);const n={dashboard:"/images/analytics/analytics-background-dashboard.jpg",bar:"/images/analytics/analytics-background-bar.jpg",farms:"/images/analytics/analytics-background-farms.jpg",pool:"/images/analytics/analytics-background-pool.svg",pools:"/images/analytics/analytics-background-pools.jpg",token:"/images/analytics/analytics-background-token.svg",tokens:"/images/analytics/analytics-background-tokens.jpg"};function l({background:e,children:r}){return(0,s.jsxs)("div",{className:"h-[200px] md:h-[151px] w-full relative bg-dark-900",children:[(0,s.jsx)("div",{className:(0,i.AK)("absolute w-full h-full",!n[e].includes("svg")&&"bg-cover bg-center opacity-[0.15]"),style:{backgroundImage:"url('".concat(n[e],"')"),WebkitMaskImage:"url('".concat(n[e],"')")}}),(0,s.jsx)("div",{className:"absolute w-full px-8 py-8 lg:px-14 z-1",children:r})]})}},73803:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var i=t(36325),s=t(85893);function n({number:e,scaleNumber:r=!0,percent:t=!1,className:n=""}){return(isNaN(e)||e===1/0)&&(e=0),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:(0,i.AK)(e>0?"text-green":e<0&&"text-red","font-normal",n),children:(e>0?"+":e<0?"-":"")+(t?(0,i.T3)(e).replace("-",""):r?(0,i.nH)(e,!0).replace("-",""):(0,i.uf)(e,!0,!1).replace("-",""))})})}},55759:function(e,r,t){"use strict";t.d(r,{Z:function(){return g}});var i=t(66223),s=t(31820),n=t(73803),l=t(36325),a=t(3410),o=t(62483),c=t(67294),d=t(85893);function u({pair:e}){var r,t,s,n;const l=(0,o.U8)(null===e||void 0===e||null===(r=e.token0)||void 0===r?void 0:r.id),a=(0,o.U8)(null===e||void 0===e||null===(t=e.token1)||void 0===t?void 0:t.id);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsx)(i.Z,{className:"-space-x-3",logoClassName:"rounded-full",currency0:l,currency1:a,size:40}),(0,d.jsx)("div",{className:"flex flex-col ml-3 whitespace-nowrap",children:(0,d.jsxs)("div",{className:"font-bold text-high-emphesis",children:[null===e||void 0===e||null===(s=e.token0)||void 0===s?void 0:s.symbol,"-",null===e||void 0===e||null===(n=e.token1)||void 0===n?void 0:n.symbol]})})]})})}const h=(e,r)=>{const t=(0,a.O)(e/7*365*.0025/r*100,3650);return t>1e3?">10,000%":(0,l.T3)(t)},m=[{Header:"Pair",accessor:"pair",Cell:e=>(0,d.jsx)(u,{pair:e.value}),align:"left"},{Header:"TVL",accessor:"liquidity",Cell:e=>(0,l.nH)(e.value,!0),align:"right"},{Header:"Annual APY",accessor:e=>(0,d.jsx)("div",{className:"text-high-emphesis",children:h(e.volume1w,e.liquidity)}),align:"right",sortType:(e,r)=>e.original.volume1w/e.original.liquidity-r.original.volume1w/r.original.liquidity},{Header:"Daily / Weekly Volume",accessor:e=>(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,l.uf)(e.volume1d,!0,!1,2)}),(0,d.jsx)("div",{className:"font-normal text-primary",children:(0,l.uf)(e.volume1w,!0,!1,2)})]}),align:"right"},{Header:"Daily / Weekly Fees",accessor:e=>(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,l.uf)(.003*e.volume1d,!0,!1,2)}),(0,d.jsx)("div",{className:"font-normal text-primary",children:(0,l.uf)(.003*e.volume1w,!0,!1,2)})]}),align:"right"}],p=[{Header:"Pair",accessor:"pair",Cell:e=>(0,d.jsx)(u,{pair:e.value}),disableSortBy:!0,align:"left"},{Header:"Daily / Weekly Liquidity Change",id:"liquidity",accessor:e=>(0,d.jsxs)("div",{className:"inline-flex flex-col",children:[(0,d.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,d.jsx)(n.Z,{number:e.liquidityChangeNumber1d,scaleNumber:!1})}),(0,d.jsx)("div",{children:(0,l.uf)(e.liquidityChangeNumber1w,!0,!1)})]}),align:"right",sortType:(e,r)=>e.original.liquidityChangeNumber1d-r.original.liquidityChangeNumber1d},{Header:"%",accessor:e=>(0,d.jsx)("div",{className:"inline-flex",children:(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,l.T3)(e.liquidityChangePercent1d)}),(0,d.jsx)("div",{children:(0,l.T3)(e.liquidityChangePercent1w)})]})}),align:"right",sortType:(e,r)=>e.original.liquidityChangePercent1d-r.original.liquidityChangePercent1d},{Header:"Daily / Weekly Volume Change",accessor:e=>(0,d.jsxs)("div",{className:"inline-flex flex-col",children:[(0,d.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,d.jsx)(n.Z,{number:e.volumeChangeNumber1d,scaleNumber:!1})}),(0,d.jsx)("div",{children:(0,l.uf)(e.volumeChangeNumber1w,!0,!1)})]}),align:"right",sortType:(e,r)=>e.original.volumeChangeNumber1d-r.original.volumeChangeNumber1d},{Header:" %",accessor:e=>(0,d.jsx)("div",{className:"inline-flex",children:(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,l.T3)(e.volumeChangePercent1d)}),(0,d.jsx)("div",{children:(0,l.T3)(e.volumeChangePercent1w)})]})}),align:"right",sortType:(e,r)=>e.original.volumeChangePercent1d-r.original.volumeChangePercent1d}];function g({pairs:e,type:r}){const t=c.useMemo((()=>{switch(r){case"all":case"gainers":return{id:"liquidity",desc:!0};case"losers":return{id:"liquidity",desc:!1}}}),[r]),i=c.useMemo((()=>{switch(r){case"all":return m;case"gainers":case"losers":return p}}),[r]);return(0,d.jsx)(d.Fragment,{children:e&&(0,d.jsx)(s.Z,{columns:i,data:e,defaultSortBy:t,link:{href:"/analytics/pairs/",id:"pair.id"}})})}},73299:function(e,r,t){"use strict";t.d(r,{Z:function(){return n}});var i=t(36325),s=t(85893);function n({tabs:e,currentType:r,setType:t}){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"border-t border-b border-gray-700",children:(0,s.jsx)("nav",{className:"grid items-center grid-flow-col -mb-px overflow-x-auto whitespace-nowrap","aria-label":"Tabs",children:e.map((e=>(0,s.jsx)("div",{className:(0,i.AK)(e.type!==r&&"opacity-40 hover:opacity-80","flex flex-col font-bold cursor-pointer text-high-emphesis"),onClick:()=>t(e.type),children:(0,s.jsx)("div",{className:"inline-flex items-center justify-center pt-4 pb-2",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"pb-2",children:e.name}),(0,s.jsx)("div",{className:(0,i.AK)(e.type===r&&"border-dark-700","-mb-2 border-4 border-transparent")})]})})},e.name)))})})})}},76294:function(e,r,t){"use strict";var i=t(59499),s=t(74221),n=t(67294);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}r.Z=function({data:e,options:r}){const{0:t,1:a}=(0,n.useState)(""),o=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},r);return{result:function({fuse:e,data:r,term:t}){const i=e.search(t);return t?i.map((e=>e.item)):r}({fuse:new s.Z(e||[],o),data:e,term:t}),search:a,term:t,reset:()=>a("")}}},7692:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return g}});var i=t(67320),s=t(74665),n=t(30860),l=t(55759),a=t(73299),o=t(85893);const c=[{name:"All",type:"all",icon:(0,o.jsxs)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M0.625 4.25C0.625 3.28859 1.00692 2.36656 1.68674 1.68674C2.36656 1.00692 3.28859 0.625 4.25 0.625H18.75C19.7114 0.625 20.6334 1.00692 21.3133 1.68674C21.9931 2.36656 22.375 3.28859 22.375 4.25V18.75C22.375 19.7114 21.9931 20.6334 21.3133 21.3133C20.6334 21.9931 19.7114 22.375 18.75 22.375H4.25C3.28859 22.375 2.36656 21.9931 1.68674 21.3133C1.00692 20.6334 0.625 19.7114 0.625 18.75V4.25ZM12.7083 19.9583H18.75C19.0705 19.9583 19.3778 19.831 19.6044 19.6044C19.831 19.3778 19.9583 19.0705 19.9583 18.75V12.7083H12.7083V19.9583ZM10.2917 12.7083H3.04167V18.75C3.04167 19.0705 3.16897 19.3778 3.39558 19.6044C3.62219 19.831 3.92953 19.9583 4.25 19.9583H10.2917V12.7083ZM12.7083 10.2917H19.9583V4.25C19.9583 3.92953 19.831 3.62219 19.6044 3.39558C19.3778 3.16897 19.0705 3.04167 18.75 3.04167H12.7083V10.2917ZM10.2917 3.04167H4.25C3.92953 3.04167 3.62219 3.16897 3.39558 3.39558C3.16897 3.62219 3.04167 3.92953 3.04167 4.25V10.2917H10.2917V3.04167Z",fill:"url(#paint0_linear)"}),(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"paint0_linear",x1:"-1.04808",y1:"0.625",x2:"26.0692",y2:"7.24706",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#0993EC"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#F338C3"})]})})]})},{name:"Gainers",type:"gainers",icon:(0,o.jsxs)("svg",{width:"22",height:"21",viewBox:"0 0 22 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M2.1716 10.5001C2.1716 8.28996 3.06423 6.17035 4.65314 4.60755C6.24204 3.04474 8.39706 2.16677 10.6441 2.16677C12.8912 2.16677 15.0462 3.04474 16.6351 4.60755C18.224 6.17035 19.1166 8.28996 19.1166 10.5001C19.1166 12.7102 18.224 14.8299 16.6351 16.3927C15.0462 17.9555 12.8912 18.8334 10.6441 18.8334C8.39706 18.8334 6.24204 17.9555 4.65314 16.3927C3.06423 14.8299 2.1716 12.7102 2.1716 10.5001ZM10.6441 0.0834351C4.7949 0.0834351 0.0534668 4.74698 0.0534668 10.5001C0.0534668 16.2532 4.7949 20.9168 10.6441 20.9168C16.4933 20.9168 21.2347 16.2532 21.2347 10.5001C21.2347 4.74698 16.4933 0.0834351 10.6441 0.0834351ZM8.26863 11.6459C8.08507 11.4368 7.82457 11.308 7.54442 11.2877C7.26428 11.2675 6.98744 11.3576 6.77482 11.5381C6.56219 11.7187 6.43119 11.9749 6.41063 12.2504C6.39008 12.526 6.48165 12.7983 6.6652 13.0074C7.52305 13.9834 8.8257 14.6668 10.6441 14.6668C12.4615 14.6668 13.7652 13.9834 14.623 13.0074C14.8066 12.7983 14.8981 12.526 14.8776 12.2504C14.857 11.9749 14.726 11.7187 14.5134 11.5381C14.3008 11.3576 14.0239 11.2675 13.7438 11.2877C13.4636 11.308 13.2031 11.4368 13.0196 11.6459C12.5758 12.1511 11.8642 12.5834 10.6441 12.5834C9.42407 12.5834 8.71238 12.1511 8.26863 11.6459ZM6.40785 8.41677C6.40785 8.1405 6.51943 7.87555 6.71804 7.6802C6.91666 7.48485 7.18603 7.3751 7.46692 7.3751H7.47751C7.75839 7.3751 8.02776 7.48485 8.22638 7.6802C8.42499 7.87555 8.53657 8.1405 8.53657 8.41677C8.53657 8.69304 8.42499 8.95799 8.22638 9.15334C8.02776 9.34869 7.75839 9.45844 7.47751 9.45844H7.46692C7.18603 9.45844 6.91666 9.34869 6.71804 9.15334C6.51943 8.95799 6.40785 8.69304 6.40785 8.41677ZM13.8213 7.3751C13.5404 7.3751 13.271 7.48485 13.0724 7.6802C12.8738 7.87555 12.7622 8.1405 12.7622 8.41677C12.7622 8.69304 12.8738 8.95799 13.0724 9.15334C13.271 9.34869 13.5404 9.45844 13.8213 9.45844H13.8319C14.1128 9.45844 14.3821 9.34869 14.5808 9.15334C14.7794 8.95799 14.891 8.69304 14.891 8.41677C14.891 8.1405 14.7794 7.87555 14.5808 7.6802C14.3821 7.48485 14.1128 7.3751 13.8319 7.3751H13.8213Z",fill:"url(#paint0_linear)"}),(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"paint0_linear",x1:"-1.57586",y1:"0.0834354",x2:"24.7824",y2:"6.62764",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#0993EC"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#F338C3"})]})})]})},{name:"Losers",type:"losers",icon:(0,o.jsxs)("svg",{width:"22",height:"21",viewBox:"0 0 22 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M8.28581 14.8459C9.08023 14.0648 10.1575 13.626 11.2808 13.626C12.4041 13.626 13.4815 14.0648 14.2759 14.8459H8.28581ZM8.10365 8.41673H8.11424H8.10365ZM14.458 8.41673H14.4686H14.458ZM20.8124 10.5001C20.8124 11.7312 20.5659 12.9503 20.0869 14.0877C19.6079 15.2251 18.9058 16.2586 18.0207 17.1292C17.1356 17.9997 16.0848 18.6903 14.9284 19.1614C13.772 19.6326 12.5325 19.8751 11.2808 19.8751C10.0291 19.8751 8.78969 19.6326 7.63327 19.1614C6.47684 18.6903 5.42609 17.9997 4.541 17.1292C3.65591 16.2586 2.95382 15.2251 2.47482 14.0877C1.99581 12.9503 1.74927 11.7312 1.74927 10.5001C1.74927 8.01366 2.75348 5.62909 4.541 3.87093C6.32852 2.11278 8.75291 1.12506 11.2808 1.12506C13.8088 1.12506 16.2332 2.11278 18.0207 3.87093C19.8082 5.62909 20.8124 8.01366 20.8124 10.5001Z",stroke:"url(#paint0_linear)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("defs",{children:(0,o.jsxs)("linearGradient",{id:"paint0_linear",x1:"0.282871",y1:"1.12506",x2:"24.0053",y2:"7.01484",gradientUnits:"userSpaceOnUse",children:[(0,o.jsx)("stop",{stopColor:"#0993EC"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#F338C3"})]})})]})}];function d({currentType:e,setType:r}){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Z,{tabs:c,currentType:e,setType:r})})}var u=t(76294),h=t(22339),m=t(12614),p=t(67294);function g(){const{0:e,1:r}=(0,p.useState)("all"),{chainId:t}=(0,m.a)(),a=(0,h.ZU)({chainId:t,shouldFetch:!!t}),c=(0,h.G9)({chainId:t,shouldFetch:!!t}),g=(0,h.T5)({chainId:t,shouldFetch:!!t}),x=(0,h.Yc)({chainId:t,shouldFetch:!!t}),v=(0,h.__)({chainId:t}),f=(0,h.__)({variables:{block:a},shouldFetch:!!a,chainId:t}),y=(0,h.__)({variables:{block:c},shouldFetch:!!c&&"all"!==e,chainId:t}),j=(0,h.__)({variables:{block:g},shouldFetch:!!g,chainId:t}),b=(0,h.__)({variables:{block:x},shouldFetch:!!x&&"all"!==e,chainId:t}),C=(0,p.useMemo)((()=>"all"===e?null===v||void 0===v?void 0:v.map((e=>{var r,t;const i=null!==(r=null===f||void 0===f?void 0:f.find((r=>e.id===r.id)))&&void 0!==r?r:e,s=null!==(t=null===j||void 0===j?void 0:j.find((r=>e.id===r.id)))&&void 0!==t?t:i;return{pair:{token0:e.token0,token1:e.token1,id:e.id},liquidity:e.reserveUSD,volume1d:e.volumeUSD-i.volumeUSD,volume1w:e.volumeUSD-s.volumeUSD}})):null===v||void 0===v?void 0:v.map((e=>{var r,t,i,s;const n=null!==(r=null===f||void 0===f?void 0:f.find((r=>e.id===r.id)))&&void 0!==r?r:e,l=null!==(t=null===y||void 0===y?void 0:y.find((r=>e.id===r.id)))&&void 0!==t?t:n,a=null!==(i=null===j||void 0===j?void 0:j.find((r=>e.id===r.id)))&&void 0!==i?i:l,o=null!==(s=null===b||void 0===b?void 0:b.find((r=>e.id===r.id)))&&void 0!==s?s:a;return{pair:{token0:e.token0,token1:e.token1,id:e.id},liquidityChangeNumber1d:e.reserveUSD-n.reserveUSD,liquidityChangePercent1d:e.reserveUSD/n.reserveUSD*100-100,liquidityChangeNumber1w:e.reserveUSD-a.reserveUSD,liquidityChangePercent1w:e.reserveUSD/a.reserveUSD*100-100,volumeChangeNumber1d:e.volumeUSD-n.volumeUSD-(n.volumeUSD-l.volumeUSD),volumeChangePercent1d:(e.volumeUSD-n.volumeUSD)/(n.volumeUSD-l.volumeUSD)*100-100,volumeChangeNumber1w:e.volumeUSD-a.volumeUSD-(a.volumeUSD-o.volumeUSD),volumeChangePercent1w:(e.volumeUSD-a.volumeUSD)/(a.volumeUSD-o.volumeUSD)*100-100}})).sort(((e,r)=>r.liquidityChangeNumber1d-e.liquidityChangeNumber1d))),[e,v,f,y,j,b]),w=(0,p.useMemo)((()=>({keys:["pair.token0.symbol","pair.token1.symbol","pair.token0.name","pair.token1.name"],threshold:.4})),[]),{result:N,term:k,search:O}=(0,u.Z)({data:C,options:w});return(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(n.Z,{background:"pools",children:(0,o.jsxs)("div",{className:"grid items-center justify-between grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"text-3xl font-bold text-high-emphesis",children:"Pairs"}),(0,o.jsx)("div",{className:"",children:"Click on the column name to sort pairs by its TVL, volume or fees gained."})]}),(0,o.jsx)(i.Z,{term:k,search:O})]})}),(0,o.jsx)(d,{currentType:e,setType:r}),(0,o.jsx)("div",{className:"px-4 pt-4 lg:px-14",children:(0,o.jsx)(l.Z,{pairs:N,type:e})})]})}},39190:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics/pairs",function(){return t(7692)}])},49513:function(e,r,t){"use strict";var i=t(67294),s=t(45697),n=t.n(s);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,i,s=function(e,r){if(null==e)return{};var t,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=(0,i.forwardRef)((function(e,r){var t=e.color,s=void 0===t?"currentColor":t,n=e.size,o=void 0===n?24:n,c=a(e,["color","size"]);return i.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.createElement("circle",{cx:"11",cy:"11",r:"8"}),i.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))}));o.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},o.displayName="Search",r.Z=o}},function(e){e.O(0,[4221,9521,1626,9774,2888,179],(function(){return r=39190,e(e.s=r);var r}));var r=e.O();_N_E=r}]);