(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{32004:function(e,t,a){Promise.resolve().then(a.bind(a,10219))},10219:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return AdminPage}});var r=a(31113),n=a(99548),s=a(26504),l=a(19757),i=a(59175),o=a(15506),u=a(33501),c=a(64103),d=a(23125),p=a(83960),m=a(45631),x=a(58409),f=a(62531),b=a(35057),v=a(33737),g=a(11292),h=a(41440);let j=[{label:"资产利息率",value:"Y"},{label:"目标AAR",value:"AART"},{label:"安全AAR",value:"AARS"},{label:"上顶AAR",value:"AARU"},{label:"熔断AAR",value:"AARC"},{label:"赎回手续费",value:"C"},{label:"进入国库比例",value:"TreasuryFeeRate"},{label:"Discount冷静时间",value:"CircuitBreakPeriod",units:0},{label:"低买池最小成交量USB",value:"PtyPoolMinUsbAmount"},{label:"高卖池最小成交量",value:"PtyPoolMinAssetAmount"},{label:"RateR",value:"RateR"}];function Expandable(e){let{children:t,tit:a,disable:n}=e,[s,l]=(0,c.useState)(!1);return(0,r.jsxs)("div",{className:"flex flex-col w-full bg-white dark:bg-transparent rounded-2xl overflow-hidden border border-solid border-blue-400",children:[(0,r.jsxs)("div",{className:"px-5 py-2 flex justify-between items-center text-sm",children:[(0,r.jsx)("div",{className:"font-medium text-base",children:a}),n?t:(0,r.jsxs)("div",{className:"px-2 py-1 rounded-full border border-solid border-[#6466F1] flex items-center text-xs text-[#6466F1] cursor-pointer ",onClick:()=>l(!s),children:[(0,r.jsx)("span",{className:"mr-[5px]",children:s?"Close":"Expand"}),s?(0,r.jsx)(p.iRh,{}):(0,r.jsx)(p.tv1,{})]})]}),(0,r.jsx)(d.Collapse,{isOpened:s,theme:{content:"bg-gray-200 dark:bg-transparent p-4 flex flex-col gap-2"},children:t})]})}function UpdateVaultVaule(e){let{vc:t}=e,a=(0,i.p)(),d=(0,c.useMemo)(()=>j.map(e=>({...e,label:"".concat(e.label,"(").concat(e.value,")")})),[]),[{value:p,param:g},h]=(0,x.Z)({value:"",param:d[0]}),{data:w}=(0,o.uX)({contracts:j.map(e=>({abi:s.$4,address:l.e_[a],functionName:"vaultParamValue",args:[t.vault,(0,f.$G)(e.value,{size:32})]}))}),y=(0,c.useMemo)(()=>(w||[]).map((e,t)=>{let a=j[t];return"".concat(a.label,"(").concat(a.value,"): ").concat((0,b.b)(e.result||0n,"number"==typeof a.units?a.units:10))}),[w]),A="number"==typeof g.units?g.units:10;return(0,r.jsxs)(Expandable,{tit:"Vault Param Vaule",children:[(0,r.jsx)(m.ZP,{maxMenuHeight:340,value:g,options:d,onChange:e=>h({param:e})}),(0,r.jsx)("input",{value:p.toString(),onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");h({value:t})},type:"number",className:(0,u.Z)("bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none"),pattern:"[0-9.]{36}",step:1,placeholder:"0"}),(0,r.jsx)(n.v,{tx:"Write",config:{abi:s.$4,address:l.e_[a],functionName:"updateVaultParamValue",args:[t.vault,(0,f.$G)(g.value,{size:32}),(0,v.v)(p,A)]},onTxSuccess:()=>{h({value:""})},className:"btn-primary flex items-center justify-center gap-4"}),(0,r.jsx)("div",{className:"text-sm flex flex-col items-start",children:y.map((e,t)=>(0,r.jsx)("div",{children:e},"info_".concat(t)))})]})}function UpdateVaultPrice(e){let{vc:t}=e,[{feed:a},l]=(0,x.Z)({feed:""});return(0,r.jsxs)(Expandable,{tit:"Vault Price Feed",children:[(0,r.jsx)("input",{type:"text",placeholder:"_assetTokenPriceFeed_",value:a,onChange:e=>l({feed:e.target.value}),className:(0,u.Z)("bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,r.jsx)(n.v,{tx:"Write",config:{abi:s.WW,address:t.vault,functionName:"updatePriceFeed",args:[a]},onTxSuccess:()=>{l({feed:""})},className:"btn-primary flex items-center justify-center gap-4"})]})}function ActionVault(e){let{vc:t,functionName:a,abi:l=s.WW}=e;return(0,r.jsx)(Expandable,{tit:"Vault "+a,disable:!0,children:(0,r.jsx)(n.v,{tx:"Write",config:{abi:l,address:t.vault,functionName:a,args:[]},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})})}function WandTxOwner(){let e=(0,i.p)(),[{owner:t},a]=(0,x.Z)({owner:""});return(0,r.jsxs)(Expandable,{tit:"WandOwner transferOwnership",children:[(0,r.jsx)("input",{type:"text",placeholder:"newOwner",value:t,onChange:e=>a({owner:e.target.value}),className:(0,u.Z)("bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,r.jsx)(n.v,{tx:"Write",config:{abi:s.EF,address:l.Vq[e],functionName:"transferOwnership",args:[t]},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})]})}function ClaimYieldsForBuyPool(e){let{vc:t}=e,{data:a}=(0,o.D2)({abi:s.aT,address:t.ptyPoolBelowAddress,functionName:"claimableYields"}),l=t.ptyPoolBelowAddress&&a||0n,[{address:i},c]=(0,x.Z)({address:""});return(0,r.jsxs)(Expandable,{tit:"ClaimYields for Buy Low Pool",children:[(0,r.jsxs)("span",{children:["Yields: ",(0,g.d)(l)]}),(0,r.jsx)("input",{type:"text",placeholder:"recipient",value:i,onChange:e=>c({address:e.target.value}),className:(0,u.Z)("bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,r.jsx)(n.v,{tx:"Write",disabled:!t.ptyPoolBelowAddress||l<=0n,config:{abi:s.aT,address:t.ptyPoolBelowAddress,functionName:"claimYields",args:[i]},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})]})}function SetTester(e){let{vc:t}=e,{data:a}=(0,o.D2)({abi:s.Og,address:t.assetTokenFeed,functionName:"getTestersCount"}),{data:l}=(0,o.D2)({abi:s.Og,address:t.assetTokenFeed,functionName:"owner"}),i=a||0n,{data:c}=(0,o.uX)({contracts:Array.from(Array(parseInt(i.toString()))).map((e,a)=>({abi:s.Og,address:t.assetTokenFeed,functionName:"getTester",args:[BigInt(a)]}))}),d=(null==c?void 0:c.map(e=>e.result))||[],[{address:p},m]=(0,x.Z)({address:""});return(0,r.jsxs)(Expandable,{tit:"Set tester",children:[(0,r.jsxs)("div",{children:["Owner: ",l]}),(0,r.jsxs)("div",{children:["Tester Count: ",i.toString()]}),(0,r.jsx)("div",{children:"Testers"}),d.map(e=>(0,r.jsx)("div",{children:e},e)),(0,r.jsx)("input",{type:"text",placeholder:"recipient",value:p,onChange:e=>m({address:e.target.value}),className:(0,u.Z)("bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none")}),(0,r.jsx)(n.v,{tx:"Write",disabled:!p,config:{abi:s.Og,address:t.assetTokenFeed,functionName:"setTester",args:[p,!0]},className:"!mt-0 btn-primary max-w-[100px] flex items-center justify-center gap-4"})]})}let w=[{label:"赎回手续费",value:"C"}];function UpdatePlainVaultParam(e){let{vc:t}=e,a=(0,c.useMemo)(()=>w.map(e=>({...e,label:"".concat(e.label,"(").concat(e.value,")")})),[]),[{value:l,param:i},d]=(0,x.Z)({value:"",param:a[0]}),{data:p}=(0,o.uX)({contracts:w.map(e=>({abi:s.a4,address:t.vault,functionName:"vaultParamValue",args:[(0,f.$G)(e.value,{size:32})]}))}),g=(0,c.useMemo)(()=>(p||[]).map((e,t)=>{let a=w[t];return"".concat(a.label,"(").concat(a.value,"): ").concat((0,b.b)(e.result||0n,"number"==typeof a.units?a.units:10))}),[p]),h="number"==typeof i.units?i.units:10;return(0,r.jsxs)(Expandable,{tit:"Plain Vault Param Vaule",children:[(0,r.jsx)(m.ZP,{maxMenuHeight:340,value:i,options:a,onChange:e=>d({param:e})}),(0,r.jsx)("input",{value:l.toString(),onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");d({value:t})},type:"number",className:(0,u.Z)("bg-white dark:bg-transparent border-slate-400  focus:border-blue-400 ","w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2 text-slate-700 rounded-md outline-none"),pattern:"[0-9.]{36}",step:1,placeholder:"0"}),(0,r.jsx)(n.v,{tx:"Write",config:{abi:s.a4,address:t.vault,functionName:"updateVaultParamValue",args:[(0,f.$G)(i.value,{size:32}),(0,v.v)(l,h)]},onTxSuccess:()=>{d({value:""})},className:"btn-primary flex items-center justify-center gap-4"}),(0,r.jsx)("div",{className:"text-sm flex flex-col items-start",children:g.map((e,t)=>(0,r.jsx)("div",{children:e},"info_".concat(t)))})]})}function AdminPage(){let e=(0,i.p)(),t=l.iK[e]||[],a=l.VQ[e]||[],{chain:n}=(0,h.m)(),o=(0,c.useMemo)(()=>{let e=t.map(e=>({label:e.assetTokenSymbol,value:e.vault,data:e,isPlain:!1})),r=a.map(e=>({label:e.assetTokenSymbol,value:e.vault,data:e,isPlain:!0}));return[...e,...r]},[t,a]),[{current:u},d]=(0,x.Z)({current:o[0]});return(0,r.jsx)("div",{className:"w-full flex",children:(0,r.jsxs)("div",{className:"flex flex-col gap-2 w-full max-w-[840px] mx-auto px-5",children:[(0,r.jsx)(m.ZP,{defaultValue:o[0],options:o,onChange:e=>e&&d({current:e})}),u.isPlain?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(UpdatePlainVaultParam,{vc:u.data}),["configureBlastYieldsAndGas","configureBlastPoints"].map(e=>(0,r.jsx)(ActionVault,{vc:u.data,functionName:e,abi:s.a4},e))]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(UpdateVaultVaule,{vc:u.data}),(0,r.jsx)(UpdateVaultPrice,{vc:u.data}),["pauseMint","unpauseMint","pauseRedeem","unpauseRedeem","pauseUsbToMarginTokens","unpauseUsbToMarginTokens"].map(e=>(0,r.jsx)(ActionVault,{vc:u.data,functionName:e},e)),(0,r.jsx)(WandTxOwner,{}),(0,r.jsx)(ClaimYieldsForBuyPool,{vc:u.data}),(null==n?void 0:n.testnet)&&(0,r.jsx)(SetTester,{vc:u.data})]})]})})}},99548:function(e,t,a){"use strict";a.d(t,{v:function(){return ApproveAndTx}});var r=a(31113),n=a(19757),s=a(26361),l=a(64103),i=a(47259),o=a(58714),u=a(41440),c=a(41774),d=a(48914);let p={},useApproves=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:r,chainId:m}=(0,u.m)(),x=(0,c.t)(),{data:f}=(0,d.p)(),[b,v]=(0,l.useState)(!1),g=(0,l.useMemo)(()=>Object.keys(e).filter(e=>e!==n.K8),[e]),[h,j]=(0,l.useState)(t&&p[t]||{}),updateAllownce=(e,a)=>{t&&(p[t]={...p[t]||{},[e]:a},j(t=>({...t,[e]:a})))},w=(0,c.t)();(0,l.useEffect)(()=>{r&&t&&x&&m&&g.forEach(e=>{x.readContract({abi:o.Wo,address:e,functionName:"allowance",args:[r,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[g,m,r]);let[y,A]=(0,l.useState)(!1),N=(0,l.useMemo)(()=>g.filter(t=>(0,s.ok)(e,t)>0n&&(0,s.ok)(e,t)>(0,s.ok)(h,t)),[e,g,h]),approve=async()=>{if(0!=N.length&&t)try{A(!0),v(!1);for(let r=0;r<N.length;r++){let n=N[r],s=!1===a?e[n]:a,l=await (null==f?void 0:f.writeContract({abi:o.Wo,address:n,functionName:"approve",args:[t,s]}));l&&await (null==w?void 0:w.waitForTransactionReceipt({hash:l})),updateAllownce(n,s)}i.A.success("Approve success"),A(!1),v(!0)}catch(e){i.A.error((0,s.az)(e)),A(!1),v(!1)}};return{approve,loading:y,shouldApprove:N.length>0,isSuccess:b}};var m=a(78354),x=a(88501),f=a(36762);function ApproveAndTx(e){let{className:t,tx:a,approves:n,spender:s,requestAmount:i,config:o,toast:u=!0,disabled:c,onTxSuccess:d,onApproveSuccess:p}=e,{write:b,isDisabled:v,isLoading:g}=(0,m.R)(o,{onSuccess:()=>d&&d(),autoToast:u}),h=c||v||g||!1===o.enabled,{approve:j,shouldApprove:w,loading:y,isSuccess:A}=useApproves(n||{},s,i),N=(0,l.useRef)();return(N.current=p,(0,l.useEffect)(()=>{N.current&&A&&N.current()},[A]),w)?(0,r.jsxs)("button",{className:(0,x.m)("btn-primary flex items-center justify-center gap-4",t),onClick:j,disabled:c||!j||y,children:[y&&(0,r.jsx)(f.$,{}),"Approve"]}):(0,r.jsxs)("button",{className:(0,x.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>b(),disabled:h,children:[g&&(0,r.jsx)(f.$,{}),a]})}},36762:function(e,t,a){"use strict";a.d(t,{$:function(){return Spinner}});var r=a(31113),n=a(33501);let Spinner=e=>{let{className:t}=e;return(0,r.jsxs)("svg",{fill:"none",className:(0,n.Z)(t,"animate-spin h-5 w-5 2-ml-1 2mr-3"),viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},78354:function(e,t,a){"use strict";a.d(t,{R:function(){return useWrapContractWrite}});var r=a(26361),n=a(64103),s=a(47259),l=a(41774),i=a(48914),o=a(15506);function useWrapContractWrite(e,t){let{autoToast:a=!0,onSuccess:u}=t||{},[c,d]=(0,n.useState)(!1),[p,m]=(0,n.useState)(!1),x=(0,l.t)(),{data:f}=(0,i.p)(),b=!x||!f||!f.account||c||!e,v=(0,o.hp)(),write=async()=>{if(!b){d(!0),m(!1);try{let t="function"==typeof e?await e():e,{request:r}=await x.simulateContract({account:f.account,...t}),n=await f.writeContract(r),l=await x.waitForTransactionReceipt({hash:n});if("success"!==l.status)throw"Transaction reverted";m(!0),u&&u(),a&&s.A.success("Transaction success"),v.update()}catch(e){a&&s.A.error((0,r.az)(e))}d(!1)}};return{write,isDisabled:b,isLoading:c,isSuccess:p}}}},function(e){e.O(0,[7495,4431,8410,5631,966,1578,7093,604,1744],function(){return e(e.s=32004)}),_N_E=e.O()}]);