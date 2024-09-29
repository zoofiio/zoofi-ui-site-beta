"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4477],{62600:function(e,t,a){a.d(t,{r:function(){return s.Z}});var s=a(62653)},99548:function(e,t,a){a.d(t,{v:function(){return ApproveAndTx}});var s=a(31113),n=a(19757),r=a(26361),l=a(78403),i=a(64103),o=a(47259),c=a(58714),u=a(96670),d=a(4408);let x={},useApproves=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:s,chainId:p}=(0,u.m)(),{data:m}=(0,d.p)(),[f,h]=(0,i.useState)(!1),v=(0,i.useMemo)(()=>Object.keys(e).filter(e=>e!==n.K8),[e]),[w,g]=(0,i.useState)(t&&x[t]||{}),updateAllownce=(e,a)=>{t&&(x[t]={...x[t]||{},[e]:a},g(t=>({...t,[e]:a})))};(0,i.useEffect)(()=>{s&&t&&p&&v.forEach(e=>{(0,l.B)().readContract({abi:c.Wo,address:e,functionName:"allowance",args:[s,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[v,p,s]);let[b,y]=(0,i.useState)(!1),j=(0,i.useMemo)(()=>v.filter(t=>(0,r.ok)(e,t)>0n&&(0,r.ok)(e,t)>(0,r.ok)(w,t)),[e,v,w]),approve=async()=>{if(0!=j.length&&t)try{y(!0),h(!1);for(let s=0;s<j.length;s++){let n=j[s],r=!1===a?e[n]:a,i=await (null==m?void 0:m.writeContract({abi:c.Wo,address:n,functionName:"approve",args:[t,r]}));i&&await (0,l.B)().waitForTransactionReceipt({hash:i}),updateAllownce(n,r)}o.A.success("Approve success"),y(!1),h(!0)}catch(e){o.A.error((0,r.az)(e)),y(!1),h(!1)}};return{approve,loading:b,shouldApprove:j.length>0,isSuccess:f}};var p=a(78354),m=a(88501),f=a(36762);function ApproveAndTx(e){let{className:t,txType:a="btn-primary",tx:n,busyShowTxet:r=!0,approves:l,spender:o,requestAmount:c,config:u,toast:d=!0,skipSimulate:x=!1,disabled:h,onTxSuccess:v,onApproveSuccess:w}=e,{write:g,isDisabled:b,isLoading:y}=(0,p.R)(u,{onSuccess:()=>v&&v(),autoToast:d,skipSimulate:x}),j=h||b||y||!1===u.enabled,{approve:k,shouldApprove:N,loading:S,isSuccess:B}=useApproves(l||{},o,c),T=(0,i.useRef)();return(T.current=w,(0,i.useEffect)(()=>{T.current&&B&&T.current()},[B]),N)?(0,s.jsxs)("button",{className:(0,m.m)(a,"flex items-center justify-center gap-4",t),onClick:k,disabled:h||!k||S,children:[S&&(0,s.jsx)(f.$,{}),"Approve"]}):(0,s.jsxs)("button",{className:(0,m.m)(a,"flex items-center justify-center gap-4",t),onClick:()=>g(),disabled:j,children:[y&&(0,s.jsx)(f.$,{}),(r||!y)&&n]})}},91214:function(e,t,a){a.d(t,{W:function(){return AssetInput}});var s=a(31113),n=a(26361),r=a(84944),l=a(33501),i=a(64103),o=a(45631),c=a(35057),u=a(95702),d=a(12045);function AssetInput(e){let{asset:t="ETH",assetIcon:a,checkBalance:x=!0,balance:p,balanceTit:m="Balance",balanceDecimals:f=18,exchange:h,readonly:v,selected:w,onClick:g,amount:b,setAmount:y,price:j,disable:k,hasInput:N=!1,options:S,onChange:B=()=>{},defaultValue:T,balanceClassName:V="",disableNegative:C}=e,A=(0,i.useRef)(null),L=x&&void 0!==p&&(0,n.su)("number"==typeof b?b+"":b||"")>("bigint"==typeof p?p:0n),q=(0,d.l)(e=>"dark"==e.theme);return(0,s.jsxs)("div",{className:"relative w-full",onClick:()=>{g&&!k&&g()},children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("div",{className:"absolute flex items-center h-fit gap-2 left-[48px] bottom-1 w-full  max-w-[calc(100%-56px)]",style:{pointerEvents:"none"},children:[j&&(0,s.jsx)("div",{className:"text-neutral-500 dark:text-slate-50/70 text-xs max-w-full overflow-hidden",children:j}),h&&(0,s.jsxs)("div",{className:"text-slate-500 dark:text-slate-50/70 text-xs max-w-full overflow-hidden",children:["~$",h]})]}),(0,s.jsxs)("div",{className:"absolute flex items-center gap-2 w-fit top-1/2 left-4 -translate-y-1/2",children:[(0,s.jsx)(u.c,{size:24,symbol:a||t}),(0,s.jsx)("div",{className:(0,l.Z)("relative",j||h?"-top-[6px]":""),children:N?(0,s.jsx)(o.ZP,{options:S,onChange:B,defaultValue:T,styles:{control:(e,t)=>({...e,border:"0px",outline:"none",boxShadow:"none",borderRadius:"0px",minHeight:"24px",padding:"0px",background:"transparent"}),singleValue:(e,t)=>({...e,color:q?"#fff":"#000"}),valueContainer:(e,t)=>({...e,padding:"0px"}),menu:(e,t)=>({...e,margin:0,background:q?"#444":"#fff"}),option:(e,t)=>({...e,color:q?"#fff":"#000",background:q?"transparent":"#fff"}),menuPortal:(e,t)=>({...e,margin:0})}}):(0,s.jsx)("div",{children:t})})]}),(0,s.jsx)("input",{value:b,onChange:e=>{if(v)return;let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");y(t)},ref:A,type:"number",disabled:k,className:(0,l.Z)(v?"bg-slate-50 cursor-not-allowed dark:bg-slate-800":"bg-white dark:bg-transparent",{"border-green-700 border-2":w,"border-red-400 !border-2 focus:border-red-400":L,"border-slate-400  focus:border-primary":!L&&!w},"w-full h-14 text-right pr-4 pl-[8rem] font-bold text-2xl border-[#4A5546] border focus:border-2 text-slate-700 rounded-lg outline-none dark:text-slate-50"),placeholder:"0.000",maxLength:36,pattern:"[0-9.]{36}",step:.01,title:"",readOnly:v})]}),void 0!=p&&(0,s.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 dark:text-slate-50/70 text-sm",children:[(0,s.jsxs)("div",{className:V,children:[(0,s.jsxs)("span",{children:[m,": ",(0,r.d)(p,3,f)]}),(0,s.jsx)("button",{className:"text-primary ml-2",onClick:()=>{let e=(0,c.b)(p,f);y(e),g&&!k&&g()},children:"Max"})]}),(0,s.jsx)("div",{className:"text-sm text-red-400",children:L?"Insufficient account balance":""})]})]})}},6868:function(e,t,a){a.d(t,{K:function(){return Noti}});var s=a(31113);a(64103);var n=a(63114);function Noti(e){let{data:t}=e;return(0,s.jsxs)("div",{className:"w-full mt-2 mb-3 md:mt-4 md:mb-6 flex text-[24px] md:text-[14px] text-[#64748B] dark:text-slate-50/60 font-medium leading-[24px] md:leading-[14px]",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(n.pMA,{size:20})}),(0,s.jsx)("div",{className:"text-sm ml-1 ",children:t})]})}},16738:function(e,t,a){a.d(t,{x:function(){return SimpleTabs}});var s=a(31113),n=a(26361),r=a(24626),l=a(64103);function SimpleTabs(e){let{className:t,listClassName:a,triggerClassName:i,contentClassName:o,hiddenConetent:c=!1,data:u,onTabChange:d}=e,[x,p]=(0,l.useState)(u[0].tab);return(0,s.jsxs)(r.fC,{value:x,className:(0,n.cn)("w-full",t),onValueChange:e=>{p(e),null==d||d(e)},children:[(0,s.jsx)(r.aV,{className:(0,n.cn)("p-1 w-fit rounded-md gap-5 flex bg-transparent",a),children:u.map(e=>(0,s.jsx)(r.xz,{className:(0,n.cn)('rounded-[3px] text-sm py-1.5 px-0 text-black/50 font-medium data-[state="active"]:bg-black data-[state="active"]:text-slate-900 !bg-transparent dark:text-white/50 dark:data-[state="active"]:text-white',i),value:e.tab,children:e.tab},e.tab))}),!c&&u.map(e=>(0,s.jsx)(r.VY,{value:e.tab,className:(0,n.cn)("flex flex-col gap-6 outline-none",o),children:e.content},e.tab))]})}},36762:function(e,t,a){a.d(t,{$:function(){return Spinner}});var s=a(31113),n=a(33501);let Spinner=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{fill:"none",className:(0,n.Z)(t,"animate-spin h-5 w-5 2-ml-1 2mr-3"),viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},6371:function(e,t,a){a.d(t,{C:function(){return Tip}});var s=a(31113),n=a(26361),r=a(52653),l=a(55966);function Tip(e){let{children:t,node:a,className:i,inFlex:o}=e,c=document.getElementById("tooltip-root");return t?(0,s.jsx)(r.zt,{children:(0,s.jsxs)(r.fC,{children:[(0,s.jsx)(r.xz,{asChild:!0,onClickCapture:e=>{e.preventDefault(),e.stopPropagation()},children:a?(0,s.jsx)("div",{className:(0,n.cn)("inline-block cursor-default",i),style:{verticalAlign:"text-bottom"},children:a}):(0,s.jsx)("div",{className:(0,n.cn)(o?"flex":"translate-y-[-6%] inline-block"," px-[3px] cursor-default relative",i),children:(0,s.jsx)(l.apP,{className:"inline-block stroke-slate-500"})})}),(0,s.jsx)(r.h_,{container:c,children:(0,s.jsxs)(r.VY,{className:"max-w-xs text-sm text-white bg-slate-900 shadow-lg dark:bg-[#333333] rounded-md p-4",children:[t,(0,s.jsx)(r.Eh,{})]})})]})}):a}},718:function(e,t,a){a.d(t,{bG:function(){return x},Sn:function(){return renderChoseSide},yP:function(){return renderStat},BW:function(){return renderToken}});var s=a(31113),n=a(26361),r=a(95702),l=a(84944),i=a(93680),o=a(26537),c=a(30639),u=a(4283);let d={Bera:i.Z,Bull:o.Z,Panda:c.Z,Venom:u.Z};i.Z,o.Z,c.Z,u.Z;let x="py-5 flex flex-col items-center gap-2 relative dark:border-border border-solid",renderToken=function(e,t,a){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,s.jsx)("div",{className:(0,n.cn)(x,"border-b",{"border-l":i}),children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap flex gap-2 items-center",children:[(0,s.jsx)(r.c,{symbol:e,size:14}),e]}),(0,s.jsxs)("div",{className:"flex mt-2 flex-col gap-1 pl-[1.375rem] text-xs font-medium",children:[(0,s.jsx)("span",{className:"",children:(0,l.d)(t)}),(0,s.jsx)("span",{className:" text-[#64748B] dark:text-slate-50/60",children:"$".concat((0,l.d)(a,2))})]})]})})},renderStat=function(e,t,a){let l=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return(0,s.jsx)("div",{className:(0,n.cn)(x,"border-b",{"border-l":l}),children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap",children:e}),(0,s.jsxs)("div",{className:"flex mt-2 items-center gap-2 text-sm font-medium",children:[(0,s.jsx)(r.c,{symbol:t,size:14}),(0,s.jsx)("span",{children:a})]})]})})},renderChoseSide=(e,t,a,r,l,i)=>{let o=d[e],c=d[r];return(0,s.jsxs)("div",{className:(0,n.cn)(x,"col-span-2 gap-4"),children:[(0,s.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Choose your side"}),(0,s.jsxs)("div",{className:"flex justify-between items-center gap-4 w-full px-4 md:px-5",children:[(0,s.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,s.jsx)(o,{className:"text-4xl",showBg:!0}),(0,s.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,s.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap",children:t}),(0,s.jsx)("span",{className:" text-[14px] leading-[14px] font-medium ml-[5px]",children:a})]})]}),(0,s.jsxs)("div",{className:"flex flex-row-reverse gap-4 items-center",children:[(0,s.jsx)(c,{className:"text-4xl",showBg:!0}),(0,s.jsxs)("div",{className:"flex flex-col items-end gap-2",children:[(0,s.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap",children:l}),(0,s.jsx)("span",{className:" text-[14px] leading-[14px] font-medium ml-[5px]",children:i})]})]})]})]})}},31889:function(e,t,a){a.d(t,{Ev:function(){return useLoadBVaults},a1:function(){return useLoadLVaults},g2:function(){return useLoadUserBVaults},z2:function(){return useLoadUserLVaults}});var s=a(19757),n=a(64103),r=a(96670),l=a(59175),i=a(3106),o=a(64370),c=a(83978),u=a.n(c),d=a(87031),x=a(22139);function useLoadLVaults(){let e=(0,l.p)(),t=s.iK[e],{address:a}=(0,r.m)(),c=(0,n.useMemo)(()=>u().chain(s.iK[e]).map(e=>[e.assetTokenAddress,e.xTokenAddress]).flatten().concat([s.O1[e]]).union().value(),[e]);(0,o.a)({queryKey:["UpdateLvautlsTokens",c],queryFn:async()=>(await i.w.getState().sliceTokenStore.updateTokenTotalSupply(c),!0)}),(0,o.a)({queryKey:["UpdateUserLvautlsTokens",c,a],queryFn:async()=>!!a&&(await i.w.getState().sliceTokenStore.updateTokensBalance(c,a),!0)}),(0,o.a)({queryKey:["UpdateLVautls",t],queryFn:async()=>(await i.w.getState().sliceLVaultsStore.updateLVaults(t),!0)})}function useLoadBVaults(){let e=(0,l.p)(),t=(0,n.useMemo)(()=>d.Fw[e].filter(e=>(e.onEnv||[]).includes(x.Vi)),[e,x.Vi]);(0,o.a)({queryKey:[t],queryFn:async()=>(await i.w.getState().sliceBVaultsStore.updateBvaults(t),await i.w.getState().sliceBVaultsStore.updateYTokenSythetic(t),!0)});let{address:a}=(0,r.m)(),s=(0,n.useMemo)(()=>t.map(e=>[e.asset,e.pToken]).flat().reduce((e,t)=>e.includes(t)?e:[...e,t],[]),[t]);(0,o.a)({queryKey:["UpdateBvautlsTokens",s],queryFn:async()=>(await i.w.getState().sliceTokenStore.updateTokenTotalSupply(s),await i.w.getState().sliceTokenStore.updateTokenPrices(s),!0),throwOnError:(e,t)=>(console.error(e),!1)}),(0,o.a)({queryKey:["UpdateUserBvautlsTokens",s,a],queryFn:async()=>!!a&&(await i.w.getState().sliceTokenStore.updateTokensBalance(s,a),!0)})}function useLoadUserLVaults(){let{address:e}=(0,r.m)(),t=(0,l.p)(),a=s.iK[t];(0,o.a)({queryKey:["UpdateAllUserLVaults",t,e,a],queryFn:async()=>!!e&&(await Promise.all(a.map(t=>i.w.getState().sliceLVaultsStore.updateUserLVault(t,e))),!0)})}function useLoadUserBVaults(){let{address:e}=(0,r.m)(),t=(0,l.p)(),a=(0,n.useMemo)(()=>d.Fw[t].filter(e=>(e.onEnv||[]).includes(x.Vi)),[t,x.Vi]),s=(0,i.R)(e=>u().keys(e.sliceBVaultsStore.bvaults).toString());(0,o.a)({queryKey:["UpdateAllUserBvaults",a,t,e,s],queryFn:async()=>{if(!e)return!1;let t=i.w.getState().sliceBVaultsStore.bvaults;for(let e of a)if(!t[e.vault])return!1;await Promise.all(a.map(e=>i.w.getState().sliceBVaultsStore.updateEpoches(e)));let getEpochesParams=e=>{let t=i.w.getState().sliceBVaultsStore.bvaults[e.vault],a=[];for(let s=parseInt(t.epochCount.toString());s>0;s--){let t=i.w.getState().sliceBVaultsStore.epoches["".concat(e.vault,"_").concat(s)];a.push(t)}return a};return await Promise.all(a.map(t=>i.w.getState().sliceUserBVaults.updateEpoches(t,e,getEpochesParams(t)))),!0}})}},15506:function(e,t,a){a.d(t,{D2:function(){return useWandContractRead},hp:function(){return o},uX:function(){return useWandContractReads}}),a(78403);var s=a(83978),n=a.n(s);a(64103);var r=a(30308),l=a(59307),i=a(93108);let o=(0,i.Ue)(e=>({time:n().now(),update:()=>{e({time:n().now()})}}));function useWandContractRead(e){let{time:t}=o();return(0,r.u)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}function useWandContractReads(e){let{time:t}=o();return(0,l.N)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}},78354:function(e,t,a){a.d(t,{R:function(){return useWrapContractWrite}});var s=a(26361),n=a(78403),r=a(64103),l=a(47259),i=a(4408);function useWrapContractWrite(e,t){let{autoToast:a=!0,onSuccess:o}=t||{},[c,u]=(0,r.useState)(!1),[d,x]=(0,r.useState)(!1),{data:p}=(0,i.p)(),m=!p||!p.account||c||!e,write=async()=>{if(!m){u(!0),x(!1);try{let s="function"==typeof e?await e():e,r=(0,n.B)(),i={account:p.account,...s};if(!(null==t?void 0:t.skipSimulate)){let e=await r.simulateContract(i);i=e.request}let c=await p.writeContract(i),u=await r.waitForTransactionReceipt({hash:c});if("success"!==u.status)throw"Transaction reverted";x(!0),o&&o(),a&&l.A.success("Transaction success")}catch(e){a&&l.A.error((0,s.az)(e))}u(!1)}};return{write,isDisabled:m,isLoading:c,isSuccess:d}}}}]);