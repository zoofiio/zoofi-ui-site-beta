(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{32004:function(e,t,a){Promise.resolve().then(a.bind(a,10219))},10219:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return AdminPage}});var n=a(31113),s=a(99548),r=a(44939),o=a(16850),l=a(87031),c=a(19757),i=a(22139),d=a(59175),u=a(15506),p=a(26361),m=a(64103),f=a(23125),b=a(83960),x=a(45631),v=a(58409),A=a(85665),g=a(62531),y=a(35057),E=a(33737),h=a(11292),B=a(96670);let N={menu:()=>(0,p.cn)("bg-white dark:bg-black dark:border"),option:e=>(0,p.cn)({"!bg-primary/50":e.isFocused,"!bg-primary":e.isSelected}),control:()=>"bg-white dark:bg-black !min-h-[58px] !border-primary/70 !shadow-none",singleValue:()=>"dark:text-white"},C="bg-white dark:bg-transparent border-primary/70 w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2  rounded-md outline-none ",j=[{label:"资产利息率",value:"Y"},{label:"目标AAR",value:"AART"},{label:"安全AAR",value:"AARS"},{label:"上顶AAR",value:"AARU"},{label:"熔断AAR",value:"AARC"},{label:"赎回手续费",value:"C"},{label:"进入国库比例",value:"TreasuryFeeRate"},{label:"Discount冷静时间",value:"CircuitBreakPeriod",units:0},{label:"低买池最小成交量USB",value:"PtyPoolMinUsbAmount"},{label:"高卖池最小成交量",value:"PtyPoolMinAssetAmount"},{label:"RateR",value:"RateR"}],S=[{label:"产品周期",value:"D",units:0},{label:"初始定价",value:"APRi"},{label:"赎回手续费",value:"f1"},{label:"利息佣金",value:"f2"}];function Expandable(e){let{children:t,tit:a,disable:s}=e,[r,o]=(0,m.useState)(!1);return(0,n.jsxs)("div",{className:"flex flex-col w-full bg-white dark:bg-transparent rounded-lg overflow-hidden border border-solid border-primary/40",children:[(0,n.jsxs)("div",{className:"px-5 py-2 min-h-[58px] flex justify-between items-center text-sm",children:[(0,n.jsx)("div",{className:"font-medium text-base",children:a}),s?t:(0,n.jsxs)("div",{className:"px-2 py-1 rounded-full border border-solid border-primary flex items-center text-xs text-primary cursor-pointer ",onClick:()=>o(!r),children:[(0,n.jsx)("span",{className:"mr-[5px]",children:r?"Close":"Expand"}),r?(0,n.jsx)(b.iRh,{}):(0,n.jsx)(b.tv1,{})]})]}),(0,n.jsx)(f.Collapse,{isOpened:r,theme:{content:"bg-gray-200 dark:bg-transparent p-4 flex flex-col gap-2"},children:t})]})}function UpdateVaultParams(e){let{paramList:t,vault:a,protocoSettingAddress:r}=e,l=(0,m.useMemo)(()=>t.map(e=>({...e,label:"".concat(e.label,"(").concat(e.value,")")})),[t]),[{value:c,param:i},d]=(0,v.Z)({value:"",param:l[0]}),{data:f,refetch:b}=(0,u.uX)({contracts:t.map(e=>({abi:o.$4,address:r,functionName:"vaultParamValue",args:[a,(0,g.$G)(e.value,{size:32})]}))}),h=(0,m.useMemo)(()=>(f||[]).map((e,a)=>{let n=t[a];return"".concat(n.label,"(").concat(n.value,"): ").concat((0,y.b)(e.result||0n,"number"==typeof n.units?n.units:10))}),[f]),B="number"==typeof i.units?i.units:10,[j,S]=(0,A.Z)();return(0,n.jsxs)(Expandable,{tit:"Vault Param Vaule",children:[(0,n.jsx)(x.ZP,{classNames:N,maxMenuHeight:S.height+110,value:i,options:l,onChange:e=>d({param:e})}),(0,n.jsx)("input",{value:c.toString(),onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");d({value:t})},type:"number",className:(0,p.cn)(C),pattern:"[0-9.]{36}",step:1,placeholder:"0"}),(0,n.jsx)(s.v,{tx:"Write",config:{abi:o.$4,address:r,functionName:"updateVaultParamValue",args:[a,(0,g.$G)(i.value,{size:32}),(0,E.v)(c,B)]},onTxSuccess:()=>{d({value:""}),b()},className:"btn-primary w-full flex items-center justify-center gap-4"}),(0,n.jsx)("div",{className:"text-sm flex flex-col items-start",ref:j,children:h.map((e,t)=>(0,n.jsx)("div",{children:e},"info_".concat(t)))})]})}function UpdateVaultPrice(e){let{vc:t}=e,[{feed:a},r]=(0,v.Z)({feed:""});return(0,n.jsxs)(Expandable,{tit:"Vault Price Feed",children:[(0,n.jsx)("input",{type:"text",placeholder:"_assetTokenPriceFeed_",value:a,onChange:e=>r({feed:e.target.value}),className:(0,p.cn)(C)}),(0,n.jsx)(s.v,{tx:"Write",config:{abi:o.WW,address:t.vault,functionName:"updatePriceFeed",args:[a]},onTxSuccess:()=>{r({feed:""})},className:"btn-primary w-full flex items-center justify-center gap-4"})]})}let convertArgs=(e,t)=>e.map((e,a)=>{let n=t[a];return n.type.startsWith("uint")?BigInt(e):"bytes32"==n.type?(0,g.$G)(e,{size:32}):e});function GeneralAction(e){var t,a;let{abi:r,address:o,functionName:l,tit:c}=e,i=r.find(e=>"function"==e.type&&e.name==l),[{args:d},u]=(0,v.Z)({args:Array((null==i?void 0:null===(t=i.inputs)||void 0===t?void 0:t.length)||0).fill("")});if(!i)return;let m=!i.inputs||0==i.inputs.length;return(0,n.jsxs)(Expandable,{tit:c||l,disable:m,children:[null===(a=i.inputs)||void 0===a?void 0:a.map((e,t)=>(0,n.jsx)("input",{type:"text",placeholder:e.name,value:d[t],onChange:e=>u({args:d.map((a,n)=>t==n?e.target.value:a)}),className:(0,p.cn)(C)},"input_".concat(t))),(0,n.jsx)(s.v,{tx:"Write",config:{abi:r,address:o,functionName:l,args:convertArgs(d,i.inputs)},className:(0,p.cn)("!mt-0 btn-primary flex items-center justify-center gap-4",m?"max-w-[100px]":"w-full")})]})}function ClaimYieldsForBuyPool(e){let{vc:t}=e,{data:a}=(0,u.D2)({abi:o.aT,address:t.ptyPoolBelowAddress,functionName:"claimableYields"}),r=t.ptyPoolBelowAddress&&a||0n,[{address:l},c]=(0,v.Z)({address:""});return(0,n.jsxs)(Expandable,{tit:"ClaimYields for Buy Low Pool",children:[(0,n.jsxs)("span",{children:["Yields: ",(0,h.d)(r)]}),(0,n.jsx)("input",{type:"text",placeholder:"recipient",value:l,onChange:e=>c({address:e.target.value}),className:(0,p.cn)(C)}),(0,n.jsx)(s.v,{tx:"Write",disabled:!t.ptyPoolBelowAddress||r<=0n,config:{abi:o.aT,address:t.ptyPoolBelowAddress,functionName:"claimYields",args:[l]},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})]})}function SetTester(e){let{vc:t}=e,{data:a}=(0,u.D2)({abi:o.Og,address:t.assetTokenFeed,functionName:"getTestersCount"}),{data:r}=(0,u.D2)({abi:o.Og,address:t.assetTokenFeed,functionName:"owner"}),l=a||0n,{data:c}=(0,u.uX)({contracts:Array.from(Array(parseInt(l.toString()))).map((e,a)=>({abi:o.Og,address:t.assetTokenFeed,functionName:"getTester",args:[BigInt(a)]}))}),i=(null==c?void 0:c.map(e=>e.result))||[],[{address:d},m]=(0,v.Z)({address:""});return(0,n.jsxs)(Expandable,{tit:"Set tester",children:[(0,n.jsxs)("div",{children:["Owner: ",r]}),(0,n.jsxs)("div",{children:["Tester Count: ",l.toString()]}),(0,n.jsx)("div",{children:"Testers"}),i.map(e=>(0,n.jsx)("div",{children:e},e)),(0,n.jsx)("input",{type:"text",placeholder:"recipient",value:d,onChange:e=>m({address:e.target.value}),className:(0,p.cn)(C)}),(0,n.jsx)(s.v,{tx:"Write",disabled:!d,config:{abi:o.Og,address:t.assetTokenFeed,functionName:"setTester",args:[d,!0]},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})]})}let w=[{label:"赎回手续费",value:"C"}];function AdminPage(){let e=(0,d.p)(),t=c.iK[e]||[],a=c.VQ[e]||[],s=(0,m.useMemo)(()=>(l.Fw[e]||[]).filter(e=>e.onEnv&&e.onEnv.includes(i.Vi)),[e]),{chain:u}=(0,B.m)(),p=(0,m.useMemo)(()=>{let e=t.map(e=>({label:e.assetTokenSymbol,value:e.vault,data:e,type:"L-Vault"})),n=a.map(e=>({label:e.assetTokenSymbol,value:e.vault,data:e,type:"P-Vault"})),r=s.map(e=>({label:e.assetSymbol,value:e.vault,data:e,type:"B-Vault"}));return[...e,...n,...r].map(e=>({...e,label:"".concat(e.label,"(").concat(e.type,")")}))},[t,a,s]),[{current:f},b]=(0,v.Z)({current:p[0]});return(0,n.jsx)(r.E,{children:(0,n.jsx)("div",{className:"w-full flex",children:(0,n.jsxs)("div",{className:"flex flex-col gap-4 w-full max-w-[840px] mx-auto px-5",children:[(0,n.jsx)(x.ZP,{classNames:N,defaultValue:p[0],options:p,onChange:e=>e&&b({current:e})}),"L-Vault"==f.type&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(UpdateVaultParams,{vault:f.data.vault,paramList:j,protocoSettingAddress:c.e_[e]}),(0,n.jsx)(UpdateVaultPrice,{vc:f.data}),["pauseMint","unpauseMint","pauseRedeem","unpauseRedeem","pauseUsbToMarginTokens","unpauseUsbToMarginTokens"].map(e=>(0,n.jsx)(GeneralAction,{functionName:e,abi:o.WW,address:f.data.vault},"l-vault-".concat(e))),(0,n.jsx)(GeneralAction,{abi:o.EF,functionName:"transferOwnership",address:c.Vq[e]}),(0,n.jsx)(ClaimYieldsForBuyPool,{vc:f.data}),(null==u?void 0:u.testnet)&&(0,n.jsx)(SetTester,{vc:f.data})]}),"P-Vault"==f.type&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(UpdateVaultParams,{vault:f.data.vault,paramList:w,protocoSettingAddress:c.e_[e]}),["configureBlastYieldsAndGas","configureBlastPoints"].map(e=>(0,n.jsx)(GeneralAction,{abi:o.a4,functionName:e,address:f.data.vault},"p-vault-".concat(e)))]}),"B-Vault"==f.type&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(UpdateVaultParams,{vault:f.data.vault,paramList:S,protocoSettingAddress:f.data.protocolSettingsAddress}),["pause","unpause","pauseRedeemPool","unpauseRedeemPool","addBribeToken","addBribes"].map(e=>(0,n.jsx)(GeneralAction,{abi:o.j5,functionName:e,address:f.data.vault},"b-vault-".concat(e))),(0,n.jsx)(GeneralAction,{tit:"transferOwnership",abi:o.RR,functionName:"transferOwnership",address:f.data.protocolAddress}),(0,n.jsx)(GeneralAction,{tit:"upsertParamConfig",abi:o.$4,functionName:"upsertParamConfig",address:f.data.protocolSettingsAddress})]})]})})})}},99548:function(e,t,a){"use strict";a.d(t,{v:function(){return ApproveAndTx}});var n=a(31113),s=a(19757),r=a(26361),o=a(78403),l=a(64103),c=a(47259),i=a(58714),d=a(96670),u=a(4408);let p={},useApproves=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:n,chainId:m}=(0,d.m)(),{data:f}=(0,u.p)(),[b,x]=(0,l.useState)(!1),v=(0,l.useMemo)(()=>Object.keys(e).filter(e=>e!==s.K8),[e]),[A,g]=(0,l.useState)(t&&p[t]||{}),updateAllownce=(e,a)=>{t&&(p[t]={...p[t]||{},[e]:a},g(t=>({...t,[e]:a})))};(0,l.useEffect)(()=>{n&&t&&m&&v.forEach(e=>{(0,o.B)().readContract({abi:i.Wo,address:e,functionName:"allowance",args:[n,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[v,m,n]);let[y,E]=(0,l.useState)(!1),h=(0,l.useMemo)(()=>v.filter(t=>(0,r.ok)(e,t)>0n&&(0,r.ok)(e,t)>(0,r.ok)(A,t)),[e,v,A]),approve=async()=>{if(0!=h.length&&t)try{E(!0),x(!1);for(let n=0;n<h.length;n++){let s=h[n],r=!1===a?e[s]:a,l=await (null==f?void 0:f.writeContract({abi:i.Wo,address:s,functionName:"approve",args:[t,r]}));l&&await (0,o.B)().waitForTransactionReceipt({hash:l}),updateAllownce(s,r)}c.A.success("Approve success"),E(!1),x(!0)}catch(e){c.A.error((0,r.az)(e)),E(!1),x(!1)}};return{approve,loading:y,shouldApprove:h.length>0,isSuccess:b}};var m=a(78354),f=a(88501),b=a(36762);function ApproveAndTx(e){let{className:t,txType:a="btn-primary",tx:s,busyShowTxet:r=!0,approves:o,spender:c,requestAmount:i,config:d,toast:u=!0,disabled:p,onTxSuccess:x,onApproveSuccess:v}=e,{write:A,isDisabled:g,isLoading:y}=(0,m.R)(d,{onSuccess:()=>x&&x(),autoToast:u}),E=p||g||y||!1===d.enabled,{approve:h,shouldApprove:B,loading:N,isSuccess:C}=useApproves(o||{},c,i),j=(0,l.useRef)();return(j.current=v,(0,l.useEffect)(()=>{j.current&&C&&j.current()},[C]),B)?(0,n.jsxs)("button",{className:(0,f.m)(a,"flex items-center justify-center gap-4",t),onClick:h,disabled:p||!h||N,children:[N&&(0,n.jsx)(b.$,{}),"Approve"]}):(0,n.jsxs)("button",{className:(0,f.m)(a,"flex items-center justify-center gap-4",t),onClick:()=>A(),disabled:E,children:[y&&(0,n.jsx)(b.$,{}),(r||!y)&&s]})}},44939:function(e,t,a){"use strict";a.d(t,{E:function(){return PageWrap}});var n=a(31113);a(64103);var s=a(26361),r=a(69708),o=a(12045);function PageWrap(e){let{children:t,className:a}=e,l=(0,o.l)(e=>e.theme),c=(0,r.usePathname)();return(0,n.jsx)("div",{className:(0,s.cn)("min-h-[calc(100vh+1px)] h-auto pt-[90px] pb-6",a),style:{backgroundSize:"contain",background:"light"==l?"#eeeeee":"/"==c?"url(bg_home.svg) center bottom no-repeat,linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%)":"linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%)"},children:t})}},36762:function(e,t,a){"use strict";a.d(t,{$:function(){return Spinner}});var n=a(31113),s=a(33501);let Spinner=e=>{let{className:t}=e;return(0,n.jsxs)("svg",{fill:"none",className:(0,s.Z)(t,"animate-spin h-5 w-5 2-ml-1 2mr-3"),viewBox:"0 0 24 24",children:[(0,n.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,n.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},87031:function(e,t,a){"use strict";a.d(t,{Fw:function(){return c},TE:function(){return l},_C:function(){return o},cc:function(){return i}});var n=a(73216);let s="0xF86a9a53D963B7a845F3496a97d0dB11cEc3c4E0",r="0x97d82C639835F4EfaCC366fdE78CA0c4EC2a2A83",o={[n.BG.id]:"0x8685CE9Db06D40CBa73e3d09e6868FE476B5dC89"},l={[n.BG.id]:"0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03"},c={[n.BG.id]:[{vault:"0x6a6B9817d221816187aD335030b0EF7c17051EfA",asset:"0xD69ADb6FB5fD6D06E6ceEc5405D95A37F96E3b96",assetSymbol:"HONEY-USDC",pToken:"0xbB6A3a94cccAe455444e9a1E1CD478CAc278Be3E",pTokenSymbol:"pHONEY-USDC",yTokenSymbol:"yHONEY-USDC",protocolAddress:s,protocolSettingsAddress:r},{vault:"0xF484F7D00DD44c1F8B047b79cF8674e78FEcaba7",asset:"0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7",assetSymbol:"HONEY-WBERA",pToken:"0x9C476C0Ee24768fE74b5A6768a7E7c901e51E409",pTokenSymbol:"pHONEY-BERA",yTokenSymbol:"yHONEY-BERA",protocolAddress:s,protocolSettingsAddress:r},{vault:"0xF778D2B9E0238D385008e916D7245F51959Ba279",asset:"0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7",assetSymbol:"HONEY-WBERA",pToken:"0x1f779e869E4769bD9129b7FE8B3a46350FA2Fbe7",pTokenSymbol:"pHONEY-BERA",yTokenSymbol:"yHONEY-BERA",protocolAddress:s,protocolSettingsAddress:r},{vault:"0x686C72Aecf2D08410A8270D514B0Dc3Cc72e5288",asset:"0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7",assetSymbol:"HONEY-WBERA",pToken:"0x19fa905c43B7B3e4698266250f2f7909610b54B1",pTokenSymbol:"pHONEY-BERA",yTokenSymbol:"yHONEY-BERA",protocolAddress:s,protocolSettingsAddress:r,onEnv:["beta"]},{vault:"0xB0a0C11a77E67acBD161cc44743a1774f2C4Fff5",asset:"0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7",assetSymbol:"HONEY-WBERA",pToken:"0x8b117042C1C6C45656bE0A2160CEbD405C6016bc",pTokenSymbol:"pHONEY-BERA",yTokenSymbol:"yHONEY-BERA",protocolAddress:s,protocolSettingsAddress:r,onEnv:["beta","test"]},{vault:"0xF4396DEe48A44A2191ec5763Fc4b6E5aDE7e41e7",asset:"0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7",assetSymbol:"HONEY-WBERA",pToken:"0xb6fa36aEF82BaF2589Cc31c69A33624612c95Ed9",pTokenSymbol:"pHONEY-BERA",yTokenSymbol:"yHONEY-BERA",protocolAddress:s,protocolSettingsAddress:r,onEnv:["beta"]},{vault:"0x90e0A49726c2fF0fa6e4382446688AF883d10133",asset:"0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7",assetSymbol:"HONEY-WBERA",pToken:"0xEA45BD60bc0f7848759ACaE9B938c24D2Ea7481c",pTokenSymbol:"pHONEY-BERA",yTokenSymbol:"yHONEY-BERA",protocolAddress:s,protocolSettingsAddress:r,onEnv:["beta"]},{vault:"0x9700FEa232560E4048DD924623491926282125bE",asset:"0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7",assetSymbol:"HONEY-WBERA",pToken:"0x575287Cd8CB9A49e0EE00Bf0C71Eac337Ab8FeBa",pTokenSymbol:"pHONEY-BERA",yTokenSymbol:"yHONEY-BERA",protocolAddress:s,protocolSettingsAddress:r,onEnv:["beta"]}]},i={[n.BG.id]:"0xa6b985dDa4D24B66fd4Ac2041395a82DcAdfD877"}},22139:function(e,t,a){"use strict";a.d(t,{Hj:function(){return r},Pq:function(){return o},SH:function(){return c},Vi:function(){return i},pn:function(){return l},v:function(){return s},xb:function(){return DOC_LINK}});var n=a(44769);let s="https://x.com/ZooFinanceIO",r="https://t.co/RJwdwdawe5",o=BigInt(1e18),l=BigInt(1e8),c=BigInt("31536000"),DOC_LINK=()=>"https://docs.".concat(n.Kh.value),i="beta";console.info("production")},44769:function(e,t,a){"use strict";a.d(t,{Kh:function(){return s},Vi:function(){return useConfigDomain}});var n=a(64103);let s={value:"zoofi.io"},r=["zoofi.io","zoofi.xyz"],getAvilableDomain=()=>{var e;if("localhost"==location.hostname||(null===(e=location.hostname.match(/^\d+\.\d+\.\d+\.\d+$/))||void 0===e?void 0:e.length)==1)return r[0];let t=location.hostname.split("."),a=t.slice(-2).join(".");return("ipns"==t[1]&&(a=t[0].replaceAll("-",".")),r.includes(a))?a:r[0]};function useConfigDomain(){(0,n.useEffect)(()=>{s.value=getAvilableDomain()},[])}},15506:function(e,t,a){"use strict";a.d(t,{D2:function(){return useWandContractRead},hp:function(){return c},uX:function(){return useWandContractReads}}),a(78403);var n=a(83978),s=a.n(n);a(64103);var r=a(30308),o=a(59307),l=a(93108);let c=(0,l.Ue)(e=>({time:s().now(),update:()=>{e({time:s().now()})}}));function useWandContractRead(e){let{time:t}=c();return(0,r.u)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}function useWandContractReads(e){let{time:t}=c();return(0,o.N)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}},78354:function(e,t,a){"use strict";a.d(t,{R:function(){return useWrapContractWrite}});var n=a(26361),s=a(78403),r=a(64103),o=a(47259),l=a(4408);function useWrapContractWrite(e,t){let{autoToast:a=!0,onSuccess:c}=t||{},[i,d]=(0,r.useState)(!1),[u,p]=(0,r.useState)(!1),{data:m}=(0,l.p)(),f=!m||!m.account||i||!e,write=async()=>{if(!f){d(!0),p(!1);try{let t="function"==typeof e?await e():e,n=(0,s.B)(),{request:r}=await n.simulateContract({account:m.account,...t}),l=await m.writeContract(r),i=await n.waitForTransactionReceipt({hash:l});if("success"!==i.status)throw"Transaction reverted";p(!0),c&&c(),a&&o.A.success("Transaction success")}catch(e){a&&o.A.error((0,n.az)(e))}d(!1)}};return{write,isDisabled:f,isLoading:i,isSuccess:u}}}},function(e){e.O(0,[4881,7495,7622,4876,8410,652,4300,8511,6243,7093,604,1744],function(){return e(e.s=32004)}),_N_E=e.O()}]);