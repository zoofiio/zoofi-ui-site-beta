(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6161],{16299:function(e,t,n){Promise.resolve().then(n.bind(n,71080))},71080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return TesterPage}});var r=n(31113),a=n(99548),s=n(88702),i=n(44939),c=n(70258),l=n(48405),o=n(15506),u=n(26361),d=n(84944),p=n(64103),f=n(45631),m=n(33737);function MockPrice(e){let{vc:t}=e,{data:n}=(0,o.D2)({abi:c.nq,address:t.assetTokenFeed,functionName:"latestPrice"}),i=n||0n,[l,f]=(0,p.useState)("");return(0,r.jsxs)(s.Ak,{tit:"MockPrice",children:[(0,r.jsx)("input",{value:l.toString(),onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");f(t)},type:"number",className:(0,u.cn)(s.pk),pattern:"[0-9.]{36}",step:1,placeholder:"0"}),(0,r.jsxs)("div",{children:["Price: ",(0,d.d)(i,2,8)]}),(0,r.jsx)(a.v,{tx:"Update",config:{abi:c.Og,address:t.assetTokenFeed,functionName:"mockPrice",args:[(0,m.v)(l,8)]},onTxSuccess:()=>{f("")},className:"btn-primary flex items-center justify-center gap-4"})]})}function AddBribes(e){let{vc:t}=e,[n,a]=(0,p.useState)(["",""]),[i,l]=n,o={};return i&&42==i.length&&i.startsWith("0x")&&(o[i]=(0,u.su)(l)),(0,r.jsx)(s.UT,{abi:c.j5,address:t.vault,functionName:"addBribes",convertArg:(e,t)=>1==t?(0,u.su)(e):e,onArgs:a,txProps:{spender:t.vault,approves:o},infos:(0,r.jsxs)("div",{children:["Example:",(0,r.jsxs)("div",{className:"pl-2",children:[(0,r.jsx)("div",{children:"0x46eFC86F0D7455F135CC9df501673739d513E982"}),(0,r.jsx)("div",{children:"12.3"})]})]})})}function TesterPage(){let{current:e,setState:t,options:n}=(0,l.G)();return(0,r.jsx)(i.E,{children:(0,r.jsx)("div",{className:"w-full flex",children:(0,r.jsxs)("div",{className:"flex flex-col gap-1 w-full max-w-[840px] mx-auto px-5",children:[(0,r.jsx)(f.ZP,{classNames:s.At,defaultValue:n[0],options:n,onChange:e=>e&&t({current:e})}),(null==e?void 0:e.type)=="L-Vault"&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(MockPrice,{vc:e.data})}),(null==e?void 0:e.type)=="B-Vault"&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.UT,{abi:c.j5,address:e.data.vault,functionName:"addBribeToken"}),(0,r.jsx)(AddBribes,{vc:e.data})]})]})})})}},99548:function(e,t,n){"use strict";n.d(t,{v:function(){return ApproveAndTx}});var r=n(31113),a=n(19757),s=n(26361),i=n(78403),c=n(64103),l=n(47259),o=n(58714),u=n(96670),d=n(4408);let p={},useApproves=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:r,chainId:f}=(0,u.m)(),{data:m}=(0,d.p)(),[x,h]=(0,c.useState)(!1),v=(0,c.useMemo)(()=>Object.keys(e).filter(e=>e!==a.K8),[e]),[b,g]=(0,c.useState)(t&&p[t]||{}),updateAllownce=(e,n)=>{t&&(p[t]={...p[t]||{},[e]:n},g(t=>({...t,[e]:n})))};(0,c.useEffect)(()=>{r&&t&&f&&v.forEach(e=>{(0,i.B)().readContract({abi:o.Wo,address:e,functionName:"allowance",args:[r,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[v,f,r]);let[y,j]=(0,c.useState)(!1),w=(0,c.useMemo)(()=>v.filter(t=>(0,s.ok)(e,t)>0n&&(0,s.ok)(e,t)>(0,s.ok)(b,t)),[e,v,b]),approve=async()=>{if(0!=w.length&&t)try{j(!0),h(!1);for(let r=0;r<w.length;r++){let a=w[r],s=!1===n?e[a]:n,c=await (null==m?void 0:m.writeContract({abi:o.Wo,address:a,functionName:"approve",args:[t,s]}));c&&await (0,i.B)().waitForTransactionReceipt({hash:c}),updateAllownce(a,s)}l.A.success("Approve success"),j(!1),h(!0)}catch(e){l.A.error((0,s.az)(e)),j(!1),h(!1)}};return{approve,loading:y,shouldApprove:w.length>0,isSuccess:x}};var f=n(78354),m=n(88501),x=n(36762);function ApproveAndTx(e){let{className:t,txType:n="btn-primary",tx:a,busyShowTxet:s=!0,approves:i,spender:l,requestAmount:o,config:u,toast:d=!0,skipSimulate:p=!1,disabled:h,onTxSuccess:v,onApproveSuccess:b}=e,{write:g,isDisabled:y,isLoading:j}=(0,f.R)(u,{onSuccess:()=>v&&v(),autoToast:d,skipSimulate:p}),w=h||y||j||!1===u.enabled,{approve:k,shouldApprove:A,loading:N,isSuccess:C}=useApproves(i||{},l,o),S=(0,c.useRef)();return(S.current=b,(0,c.useEffect)(()=>{S.current&&C&&S.current()},[C]),A)?(0,r.jsxs)("button",{className:(0,m.m)(n,"flex items-center justify-center gap-4",t),onClick:k,disabled:h||!k||N,children:[N&&(0,r.jsx)(x.$,{}),"Approve"]}):(0,r.jsxs)("button",{className:(0,m.m)(n,"flex items-center justify-center gap-4",t),onClick:()=>g(),disabled:w,children:[j&&(0,r.jsx)(x.$,{}),(s||!j)&&a]})}},88702:function(e,t,n){"use strict";n.d(t,{Ak:function(){return Expandable},At:function(){return d},UT:function(){return GeneralAction},pk:function(){return p}});var r=n(31113),a=n(62531),s=n(99548),i=n(26361),c=n(64103),l=n(83960),o=n(23125),u=n(58409);let d={menu:()=>(0,i.cn)("bg-white dark:bg-black dark:border"),option:e=>(0,i.cn)({"!bg-primary/50":e.isFocused,"!bg-primary":e.isSelected}),control:()=>"bg-white dark:bg-black !min-h-[58px] !border-primary/70 !shadow-none",singleValue:()=>"dark:text-white"},p="bg-white dark:bg-transparent border-primary/70 w-full h-14 text-right pr-4 font-bold text-sm border focus:border-2  rounded-md outline-none ",defConvertArg=(e,t,n)=>n.type.startsWith("uint")?BigInt(e):"bytes32"==n.type?(0,a.$G)(e,{size:32}):"bool"==n.type?"true"==e:e,convertArgs=(e,t,n)=>e.map((e,r)=>{let a=t[r];return n?n(e,r,a):defConvertArg(e,r,a)});function Expandable(e){let{children:t,tit:n,disable:a}=e,[s,i]=(0,c.useState)(!1);return(0,r.jsxs)("div",{className:"flex flex-col w-full bg-white dark:bg-transparent rounded-lg overflow-hidden border border-solid border-primary/40",children:[(0,r.jsxs)("div",{className:"px-5 py-2 min-h-[58px] flex justify-between items-center text-sm",children:[(0,r.jsx)("div",{className:"font-medium text-base",children:n}),a?t:(0,r.jsxs)("div",{className:"px-2 py-1 rounded-full border border-solid border-primary flex items-center text-xs text-primary cursor-pointer ",onClick:()=>i(!s),children:[(0,r.jsx)("span",{className:"mr-[5px]",children:s?"Close":"Expand"}),s?(0,r.jsx)(l.iRh,{}):(0,r.jsx)(l.tv1,{})]})]}),(0,r.jsx)(o.Collapse,{isOpened:s,theme:{content:"bg-gray-200 dark:bg-transparent p-4 flex flex-col gap-2"},children:t})]})}function GeneralAction(e){var t,n;let{abi:a,address:l,functionName:o,tit:d,infos:f,convertArg:m,txProps:x,onArgs:h}=e,v=a.find(e=>"function"==e.type&&e.name==o),[{args:b},g]=(0,u.Z)({args:Array((null==v?void 0:null===(t=v.inputs)||void 0===t?void 0:t.length)||0).fill("")});if((0,c.useEffect)(()=>{h&&h(b)},[b]),!v)return;let y=!v.inputs||0==v.inputs.length;return(0,r.jsxs)(Expandable,{tit:d||o,disable:y,children:[null===(n=v.inputs)||void 0===n?void 0:n.map((e,t)=>(0,r.jsx)("input",{type:"text",placeholder:e.name,value:b[t],onChange:e=>g({args:b.map((n,r)=>t==r?e.target.value:n)}),className:(0,i.cn)(p)},"input_".concat(t))),f,(0,r.jsx)(s.v,{...x||{},tx:"Write",config:{abi:a,address:l,functionName:o,...b.length?{args:convertArgs(b,v.inputs,m)}:{}},className:(0,i.cn)("!mt-0 btn-primary flex items-center justify-center gap-4",y?"max-w-[100px]":"w-full")})]})}},44939:function(e,t,n){"use strict";n.d(t,{E:function(){return PageWrap}});var r=n(31113);n(64103);var a=n(26361),s=n(69708),i=n(12045);function PageWrap(e){let{children:t,className:n}=e,c=(0,i.l)(e=>e.theme),l=(0,s.usePathname)();return(0,r.jsx)("div",{className:(0,a.cn)("min-h-[calc(100vh+1px)] h-auto pt-[90px] pb-6",n),style:{backgroundSize:"contain",background:"light"==c?"#eeeeee":"/"==l?"url(bg_home.svg) center bottom no-repeat,linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%)":"linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%)"},children:t})}},36762:function(e,t,n){"use strict";n.d(t,{$:function(){return Spinner}});var r=n(31113),a=n(26361);let Spinner=e=>{let{className:t}=e;return(0,r.jsxs)("svg",{fill:"none",className:(0,a.cn)("animate-spin h-5 w-5 2-ml-1 2mr-3",t),viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},48405:function(e,t,n){"use strict";n.d(t,{G:function(){return useVaultsConfigs}});var r=n(87031),a=n(19757),s=n(22139),i=n(64103),c=n(58409),l=n(59175);function useVaultsConfigs(){let e=(0,l.p)(),t=a.iK[e]||[],n=a.VQ[e]||[],o=(0,i.useMemo)(()=>(r.Fw[e]||[]).filter(e=>e.onEnv&&e.onEnv.includes(s.Vi)),[e]),u=(0,i.useMemo)(()=>{let e=t.map(e=>({label:e.assetTokenSymbol,value:e.vault,data:e,type:"L-Vault"})),r=n.map(e=>({label:e.assetTokenSymbol,value:e.vault,data:e,type:"P-Vault"})),a=o.map(e=>({label:e.assetSymbol,value:e.vault,data:e,type:"B-Vault"}));return[...e,...r,...a].map(e=>({...e,label:"".concat(e.label,"(").concat(e.type,")")}))},[t,n,o]),[{current:d},p]=(0,c.Z)({current:u[0]});return{current:d,setState:p,options:u}}},15506:function(e,t,n){"use strict";n.d(t,{D2:function(){return useWandContractRead},uX:function(){return useWandContractReads}}),n(78403);var r=n(83978),a=n.n(r);n(64103);var s=n(30308),i=n(59307),c=n(93108);let l=(0,c.Ue)(e=>({time:a().now(),update:()=>{e({time:a().now()})}}));function useWandContractRead(e){let{time:t}=l();return(0,s.u)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}function useWandContractReads(e){let{time:t}=l();return(0,i.N)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}},78354:function(e,t,n){"use strict";n.d(t,{R:function(){return useWrapContractWrite}});var r=n(26361),a=n(78403),s=n(64103),i=n(47259),c=n(4408);function useWrapContractWrite(e,t){let{autoToast:n=!0,onSuccess:l}=t||{},[o,u]=(0,s.useState)(!1),[d,p]=(0,s.useState)(!1),{data:f}=(0,c.p)(),m=!f||!f.account||o||!e,write=async()=>{if(!m){u(!0),p(!1);try{let r="function"==typeof e?await e():e,s=(0,a.B)(),c={account:f.account,...r};if(!(null==t?void 0:t.skipSimulate)){let e=await s.simulateContract(c);c=e.request}let o=await f.writeContract(c),u=await s.waitForTransactionReceipt({hash:o});if("success"!==u.status)throw"Transaction reverted";p(!0),l&&l(),n&&i.A.success("Transaction success")}catch(e){n&&i.A.error((0,r.az)(e))}u(!1)}};return{write,isDisabled:m,isLoading:o,isSuccess:d}}},84944:function(e,t,n){"use strict";n.d(t,{d:function(){return displayBalance}});var r=n(35057);let displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:18;if(!e)return"0";let fmtNumber=e=>e.toLocaleString("en-US",{maximumFractionDigits:t}),a=Number((0,r.b)(e,n)),s=Number((.1**t).toFixed(t));return a>0&&a<s?a<.001?fmtNumber(1e6*a)+"μ":"<"+s:a<0&&a>-s?"≈0":fmtNumber(a)}}},function(e){e.O(0,[4881,7495,7622,9590,8410,4300,7661,6525,1037,7093,604,1744],function(){return e(e.s=16299)}),_N_E=e.O()}]);