(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9102],{92537:function(e,t,s){Promise.resolve().then(s.bind(s,95778))},95778:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Vaults}});var a=s(31113),n=s(30639),l=s(4283),c=s(73417),o=s(73216),d=s(22139),i=s(15506),r=s(26361),m=s(3106),x=s(18358),u=s(84944),p=s(42487),b=s.n(p),h=s(69708),v=s(64103),f=s(85665),j=s(20265),g=s(67541),N=s(96670),y=s(4408),k=s(30308),w=s(99548),T=s(91214),S=s(95702);function DefEmpty(){return(0,a.jsx)("tr",{className:"text-lg font-normal text-center text-black ",children:(0,a.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top"})})}var simple_table=e=>{let{header:t,data:s,span:n={},empty:l=(0,a.jsx)(DefEmpty,{}),className:c="relative min-w-full bg-transparent ",headerClassName:o,headerItemClassName:d,tbodyClassName:i="",rowClassName:m,rowStyle:x,cellClassName:u,onClickRow:p,onRowMouseHover:b}=e;return(0,a.jsxs)("table",{className:(0,r.cn)("relative min-w-full bg-transparent ",c),children:[(0,a.jsx)("thead",{className:"",children:(0,a.jsx)("tr",{className:(0,r.cn)("text-left whitespace-nowrap font-normal text-black border-b border-gray-100 pt-5 pb-6 dark:text-slate-50 dark:border-zinc-600",o),children:t.map((e,t)=>(0,a.jsx)("th",{colSpan:n[t],scope:"col",className:(0,r.cn)(0==n[t]?"p-0 w-0":"p-3 font-normal text-sm",d),children:e},t))})}),(0,a.jsxs)("tbody",{className:(0,r.cn)(i),children:[s.map((e,s)=>(0,a.jsx)("tr",{onClick:()=>p&&p(s),onMouseEnter:()=>b&&b(s),onMouseLeave:()=>b&&b(-1),style:"function"==typeof x?x(s):x,className:(0,r.cn)("text-slate-700 dark:text-slate-50 font-medium whitespace-nowrap",p?"cursor-pointer hover:bg-slate-400/10":"","function"==typeof m?m(s):m),children:e.map((e,l)=>l>=t.length?(0,a.jsx)(a.Fragment,{children:e}):(0,a.jsx)("td",{colSpan:n[l],className:(0,r.cn)(0==n[l]?"p-0 w-max":"px-3 py-2 text-sm w-max","function"==typeof u?u(s,l):u),children:e},l))},s)),0===s.length&&l]})]})},B=s(16738);function Switch(e){return(0,a.jsx)("div",{style:{padding:1,border:"1px solid transparent",backgroundRepeat:"no-repeat",backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",backgroundImage:e.checked?"radial-gradient(#0B1215,#0B1215),radial-gradient(122.5% 122.5% at 52.9% 16.25%, #15D264 0%, #2CBD35 36.26%, #DCF45D 92.54%)":"radial-gradient(#0A1114,#0A1114),radial-gradient(#4A5546,#4A5546)"},className:(0,r.cn)("relative h-[1em] w-[2.5em] cursor-pointer rounded-[0.4em] text-xl"),onClick:()=>{var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,!e.checked)},children:(0,a.jsx)("div",{className:(0,r.cn)("transition-all h-full w-[1.5em] absolute top-0 rounded-[0.4em]",e.checked?"-left-[1px]":"left-[1em]"),style:{background:e.checked?"radial-gradient(76.25% 76.25% at 50.3% 23.75%, #1BCD59 0%, #B3E854 100%)":"#3B4144"}})})}var E=s(6371),C=s(718);function TupleTxt(e){return(0,a.jsxs)("div",{className:"flex flex-col gap-0.5",children:[(0,a.jsx)("div",{className:"text-xs dark:text-white/60 font-medium",children:e.tit}),(0,a.jsx)("div",{className:(0,r.cn)("text-lg  font-medium flex items-center",e.subClassname),children:e.sub})]})}let A="max-w-4xl mx-auto w-full";function BVaultP(e){let{bvc:t}=e,{address:s}=(0,N.m)(),[l,d]=(0,v.useState)(""),i=(0,r.su)(l),p=t.assetSymbol.includes("-"),h=p?"PT":t.pTokenSymbol,f=p?"LP":t.assetSymbol,[j,k]=(0,v.useState)(""),S=(0,r.su)(j),C=(0,x.nr)(t.vault),D=(0,x.Vw)(t.vault)[0],{ids:F,claimable:V}=(0,x.gz)(t.vault),R=(0,m.R)(e=>e.sliceTokenStore.balances[t.asset]||0n),Y=(0,m.R)(e=>e.sliceTokenStore.balances[t.pToken]||0n),P=(null==D?void 0:D.redeemingBalance)||0n,H="Your ".concat(h," can be claimed 1:1 for ").concat(f," at the end of this Epoch"),[O]=(0,x.oU)(t.vault),{data:M}=(0,y.p)(),q=(0,x.R3)(t),renderClaimable=()=>(0,a.jsxs)("div",{className:"flex text-xs items-center gap-5",children:["Claimable: ".concat((0,u.d)(V)),(0,a.jsx)(w.v,{className:"",busyShowTxet:!1,txType:"btn-link",tx:"Claim",disabled:V<=0n,config:{abi:c.j5,address:t.vault,functionName:"batchClaimRedeemAssets",args:[F.length>40?F.slice(F.length-40):F]},onTxSuccess:()=>{q()}})]});return(0,a.jsxs)("div",{className:(0,r.cn)("grid grid-cols-1 md:grid-cols-3 gap-5",A),children:[(0,a.jsxs)("div",{className:"card !p-0 overflow-hidden min-h-[16.875rem]",children:[(0,a.jsxs)("div",{className:"flex p-5 bg-[#A3D395] gap-5",children:[(0,a.jsx)(n.Z,{className:"text-[3.375rem]",showBg:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-xl text-black font-semibold",children:t.pTokenSymbol}),(0,a.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Interest bearing rebase principal token"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,a.jsx)(TupleTxt,{tit:"APY",sub:O}),(0,a.jsx)(TupleTxt,{tit:"Total Minted",sub:(0,a.jsxs)(a.Fragment,{children:[(0,u.d)(C.pTokenTotal),(0,a.jsx)("button",{className:"btn-link ml-auto text-black/60 dark:text-white/60 text-xs",onClick:()=>{null==M||M.watchAsset({type:"ERC20",options:{address:t.pToken,symbol:t.pTokenSymbol,decimals:18}}).catch(r.S3)},children:"Add to wallet"})]})})]})]}),(0,a.jsx)("div",{className:"md:col-span-2 card !p-4",children:(0,a.jsx)(B.x,{data:[{tab:"Mint",content:(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)(T.W,{asset:t.assetSymbol,amount:l,balance:R,setAmount:d}),(0,a.jsxs)("div",{className:"text-xs font-medium flex justify-between items-center",children:[(0,a.jsx)("span",{children:"Receive 1 ".concat(h," for every ").concat(f)}),p&&(0,a.jsx)(b(),{target:"_blank",className:"underline",href:(0,o.FN)(t.asset),children:"Get LP on BEX"})]}),(0,a.jsx)(w.v,{className:"mx-auto mt-6",tx:"Mint",disabled:i<=0n||i>R,spender:t.vault,approves:{[t.asset]:i},config:{abi:c.j5,address:t.vault,functionName:"deposit",args:[i]},onTxSuccess:()=>{d(""),q()}})]})},{tab:"Redeem",content:(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)(T.W,{asset:t.pTokenSymbol,assetIcon:"Panda",amount:j,balance:Y,setAmount:k}),D&&D.settled&&(0,a.jsxs)("div",{className:"flex flex-wrap justify-between items-center h-5",children:[(0,a.jsx)("div",{className:"text-xs font-medium",children:H}),renderClaimable()]}),(0,a.jsx)(w.v,{className:"mx-auto mt-6",tx:"Redeem",spender:null==D?void 0:D.redeemPool,approves:{[t.pToken]:S},disabled:D&&S<=0n||S>Y,config:{abi:c.gg,address:(null==D?void 0:D.redeemPool)||g.DR,functionName:"redeem",args:[S]},onTxSuccess:()=>{k(""),q()}}),(!D||!D.settled)&&(0,a.jsxs)("div",{className:"flex flex-wrap justify-between items-center h-5 mt-5",children:[(0,a.jsxs)("div",{className:"text-xs font-medium",children:["Redemption in transit: ".concat((0,u.d)(P))," ",(0,a.jsx)(E.C,{children:"Redemption will be completed at the end of an Epoch."})]}),renderClaimable()]})]})}]})})]})}function BVaultY(e){let{bvc:t}=e,s=t.assetSymbol.includes("-");s||t.pTokenSymbol;let n=s?"YT":t.yTokenSymbol,o=s?"LP token":t.assetSymbol,[p,b]=(0,v.useState)(""),h=(0,r.su)(p),{address:f}=(0,N.m)(),j=(0,x.nr)(t.vault),g=(0,x.qM)(t.vault),y=(0,x.Vw)(t.vault)[0],S=(0,m.R)(e=>e.sliceTokenStore.balances[t.asset]||0n),{data:B,refetch:E}=(0,k.u)({abi:c.j5,address:t.vault,functionName:"calcSwap",args:[h],query:{retry:!0}}),C=(0,i.hp)();(0,v.useEffect)(()=>{E()},[C.time]);let D=(null==y?void 0:y.vaultYTokenBalance)||0n,F=(0,r.ok)(B,"1"),V=D>0n?g.Y*d.Pq/D:0n,R=(0,u.d)(V),Y=D>F?(g.Y+h)*d.Pq/(D-F):0n,P=(0,r.Kl)(F),H=Y>V&&V>0n?(Y-V)*BigInt(1e10)/V:0n,O=g.yTokenAmountForSwapYT>0n?j.lockedAssetTotal*d.Pq/g.yTokenAmountForSwapYT:0n,[M]=(0,x.v7)(t.vault),q=(0,x.R3)(t);return(0,a.jsxs)("div",{className:(0,r.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",A),children:[(0,a.jsxs)("div",{className:"card !p-0 overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex p-5 bg-[#F0D187] gap-5",children:[(0,a.jsx)(l.Z,{className:"text-[3.375rem]",showBg:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-xl text-black font-semibold",children:t.yTokenSymbol}),(0,a.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Boost bribes yield"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,a.jsxs)("div",{className:"text-base font-semibold flex gap-5 items-end",children:[(0,a.jsxs)("span",{className:"text-4xl font-medium",children:[M,"x"]}),"Bribes Yield"]}),(0,a.jsx)(TupleTxt,{tit:"Total Minted",sub:(0,a.jsxs)(a.Fragment,{children:[(0,u.d)(g.yTokenAmountForSwapYT),(0,a.jsxs)("span",{className:"text-xs ml-auto",children:["1",n," = Yield of ",(0,a.jsx)("br",{}),(0,u.d)(O,2)," ",o]})]})}),y&&(0,a.jsx)(TupleTxt,{tit:"Epoch ".concat(y.epochId.toString()),subClassname:"text-xs",sub:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("span",{children:[(0,r.d3)(1000n*y.startTime,"date"),"-",(0,r.d3)((y.startTime+y.duration)*1000n,"date")]}),(0,a.jsxs)("span",{className:"ml-auto whitespace-nowrap",children:["~",(0,r.Y)((y.startTime+y.duration)*1000n-BigInt(new Date().getTime())),(0,a.jsx)("br",{}),"remaining"]})]})})]})]}),(0,a.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-1",children:[(0,a.jsx)(T.W,{asset:t.assetSymbol,amount:p,balance:S,setAmount:b}),(0,a.jsx)("div",{className:"text-base font-bold my-2",children:"Receive"}),(0,a.jsx)(T.W,{asset:t.yTokenSymbol,assetIcon:"Venom",readonly:!0,disable:!0,amount:P}),(0,a.jsxs)("div",{className:"text-xs font-medium  flex justify-between",children:[(0,a.jsx)("span",{children:"Price: 1 ".concat(n,"=").concat(R," ").concat(o)}),(0,a.jsx)("span",{children:"Price Impact: ".concat((0,r.Jh)(H,10,2))})]}),(0,a.jsxs)("div",{className:"text-xs font-medium text-black/80 dark:text-white/80",children:["1\xa0",n," represents the yield ",(0,a.jsx)("span",{className:"font-extrabold text-base",children:"at least"})," 1 ",o,"\xa0until the end of Epoch."]}),(0,a.jsx)(w.v,{className:"mx-auto mt-6",tx:"Buy",disabled:h<=0n||h>S,config:{abi:c.j5,address:t.vault,functionName:"swap",args:[h]},approves:{[t.asset]:h},spender:t.vault,onTxSuccess:()=>{b(""),q()}})]})]})}function BribeTit(e){return(0,a.jsxs)("div",{className:"flex items-center justify-center gap-3",children:[(0,a.jsx)(S.c,{symbol:"GreenDot",size:14}),(0,a.jsx)("span",{className:"text-sm font-medium",children:e.name})]})}function BVaultPools(e){let{bvc:t}=e,{address:s}=(0,N.m)(),[n,l]=(0,v.useState)(!1),o=(0,x.Vw)(t.vault),i=(0,v.useMemo)(()=>n?o.filter(e=>e.bribes.reduce((e,t)=>e+t.bribeAmount,0n)>0n):o,[o,n]),[m,p]=(0,f.Z)(),b="text-black/60 dark:text-white/60 text-sm",[h,g]=(0,v.useState)(i[0]);(0,v.useEffect)(()=>{g(i[0])},[i]);let y=(null==h?void 0:h.userBalanceYToken)||0n,onRowClick=e=>{g(i[e])},k=(null==h?void 0:h.bribes)||[],T=(0,v.useMemo)(()=>{let e=k.find(e=>e.bribeAmount>0n);return e?(0,r.Jh)(e.bribeAmount*d.Pq/e.totalRewards,18):(0,r.Jh)(0n,0n)},[k]),S=(0,x.R3)(t);return(0,a.jsxs)("div",{className:(0,r.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",A),children:[(0,a.jsxs)("div",{ref:m,children:[(0,a.jsxs)("div",{className:"flex items-center gap-8 text-xl font-semibold mb-6",children:[(0,a.jsx)("span",{children:"My Pool Only"}),(0,a.jsx)(Switch,{checked:n,onChange:l})]}),(0,a.jsx)(j.aV,{className:i.length>6?"pr-5":"",width:p.width,height:p.height-52,rowHeight:e=>{let{index:t}=e;return t<i.length-1?76:56},overscanRowCount:6,rowCount:i.length,rowRenderer:function(e){let{key:t,style:s,index:n}=e;return(0,a.jsx)("div",{style:s,className:"cursor-pointer",onClick:()=>onRowClick(n),children:(0,a.jsxs)("div",{className:(0,r.cn)("flex h-[56px] card !rounded-lg !p-5 justify-between items-center font-semibold",n<i.length-1?"mb-[20px]":""),children:[(0,a.jsxs)("div",{className:"text-base",children:["Epoch ",i[n].epochId.toString()]}),(0,a.jsx)("div",{className:"text-xs dark:text-white/60",children:"3/4/2024~4/4/2024"})]})},t)}})]}),(0,a.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-2",children:[(0,a.jsxs)("div",{className:"flex gap-6 items-end font-semibold",children:[(0,a.jsx)("span",{className:"text-xl ",children:"Accumulated bribes"}),(0,a.jsxs)("span",{className:"text-xs dark:text-white/60",children:["Epoch ",((null==h?void 0:h.epochId)||1n).toString()]})]}),(0,a.jsx)("div",{className:"flex-1 mt-3 rounded-lg border border-solid border-border p-4",children:(0,a.jsx)(simple_table,{headerClassName:"text-center text-black/60 dark:text-white/60 border-b-0",rowClassName:"text-center",header:["","","Total","Mine",""],span:{1:2,2:1,3:1},data:k.map(e=>["",(0,a.jsx)(BribeTit,{name:e.bribeSymbol},"1"),(0,u.d)(e.totalRewards),(0,u.d)(e.bribeAmount),""])})}),(0,a.jsxs)("div",{className:"rounded-lg border border-solid border-border px-4 py-2 flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"font-semibold text-xs",children:[(0,a.jsxs)("div",{children:["My yToken: ",(0,a.jsx)("span",{className:(0,r.cn)(b),children:(0,u.d)(y)})]}),(0,a.jsxs)("div",{children:["Time Weighted Points: ",(0,a.jsx)("span",{className:(0,r.cn)(b),children:(0,u.d)(null==h?void 0:h.userBalanceYTokenSyntyetic)})]})]}),(0,a.jsxs)("div",{children:["My Share: ",(0,a.jsx)("span",{className:(0,r.cn)(b,"text-2xl"),children:T})]})]}),(0,a.jsxs)("span",{className:"text-xs mx-auto",children:["You will receive ",T," of total bribes"]}),(0,a.jsx)(w.v,{className:"mx-auto mt-4",tx:"Harvest",disabled:!h||!(null==h?void 0:h.settled),config:{abi:c.j5,address:t.vault,functionName:"claimBribes",args:[null==h?void 0:h.epochId]},onTxSuccess:()=>{S()}})]})]})}function BVaultMint(e){let{bvc:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(BVaultP,{bvc:t}),(0,a.jsx)(BVaultY,{bvc:t})]})}function BVaultHarvest(e){let{bvc:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(BVaultPools,{bvc:t})})}function BVaultCard(e){let{vc:t}=e,s=(0,h.useRouter)(),[n,l]=t.assetSymbol.split("-"),c=(0,x.nr)(t.vault),[o]=(0,x.v7)(t.vault),[d]=(0,x.oU)(t.vault),i="Epoch ".concat(((null==c?void 0:c.epochCount)||0n).toString());return(0,a.jsxs)("div",{className:(0,r.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden",{}),onClick:()=>s.push("/b-vaults?vault=".concat(t.vault)),children:[(0,a.jsxs)("div",{className:(0,r.cn)(C.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center"),children:[(0,a.jsx)(S.c,{symbol:t.assetSymbol,size:44}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:t.assetSymbol}),(0,a.jsx)("div",{className:" text-sm font-medium",children:t.assetSymbol.includes("-")?"LP Token":""})]}),(0,a.jsxs)("div",{className:"ml-auto",children:[(0,a.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,a.jsx)("div",{className:"text-sm font-medium",children:(0,u.d)(null==c?void 0:c.lockedAssetTotal)})]})]}),(0,C.BW)(n,0n,0n),(0,C.BW)(l,0n,0n,!0),(0,C.yP)("Status","status",i),(0,C.yP)("Reward","iBGT","iBGT",!0),(0,C.Sn)("Panda","Principal Panda",d,"Venom","Boost Venom","".concat(o,"x"))]})}function BVaultCardComming(e){let{symbol:t}=e;return(0,a.jsxs)("div",{className:(0,r.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden h-[367px]",{}),children:[(0,a.jsxs)("div",{className:(0,r.cn)(C.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center h-20"),children:[(0,a.jsx)(S.c,{symbol:t,size:44}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:t}),(0,a.jsx)("div",{className:" text-sm font-medium",children:t.includes("-")?"LP Token":""})]}),(0,a.jsxs)("div",{className:"ml-auto",children:[(0,a.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,a.jsx)("div",{className:"text-sm font-medium",children:"$-"})]})]}),(0,a.jsx)("div",{className:(0,r.cn)(C.bG,"col-span-2"),children:(0,a.jsx)("div",{className:"text-xs font-semibold leading-[12px] whitespace-nowrap",children:"New Vault Comming Soon..."})})]})}var D=s(6868),F=s(44939),V=s(87031),R=s(59175),Y=s(64370),P=s(62600);let H=["mint","harvest"];function BVaultPage(e){let{bvc:t}=e,{address:s}=(0,N.m)(),n=(0,x.nr)(t.vault);(0,Y.a)({queryKey:["UpdateVaultDetails",t,n],queryFn:async()=>{if(0n==n.epochCount)return!1;let e=m.w.getState().sliceBVaultsStore;return await e.updateEpoches(t),await e.updateEpochesRedeemPool(t),!0}});let l=(0,x.Vw)(t.vault);return(0,Y.a)({queryKey:["UpdateUserData",t,l,s],queryFn:async()=>0!=l.length&&!!s&&(console.info("epochesOld:",l),await m.w.getState().sliceUserBVaults.updateEpoches(t,s,l),!0)}),(0,a.jsx)(B.x,{listClassName:"flex-wrap p-0 mb-5 md:gap-14",triggerClassName:'text-lg sm:text-xl md:text-2xl py-0 data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap',contentClassName:"gap-5",data:[{tab:"Mint",content:(0,a.jsx)(BVaultMint,{bvc:t})},{tab:"Harvest",content:(0,a.jsx)(BVaultHarvest,{bvc:t})}]})}function Vaults(){let e=(0,R.p)(),t=(0,v.useMemo)(()=>V.Fw[e].filter(e=>e.onEnv&&e.onEnv.includes(d.Vi)),[e,d.Vi]),s=(0,h.useSearchParams)(),n=s.get("vault"),l=s.get("tab");H.includes(l);let c=t.find(e=>e.vault==n);(0,Y.a)({queryKey:[t],queryFn:async()=>{let e=m.w.getState().sliceBVaultsStore;return await e.updateBvaults(t),await e.updateBvaultsCurrentEpoch(),!0}});let{address:o}=(0,N.m)(),i=(0,v.useMemo)(()=>t.map(e=>[e.asset,e.pToken]).flat(),[t]);return(0,Y.a)({queryKey:["UpdateBvautlsTokens",i],queryFn:async()=>(await m.w.getState().sliceTokenStore.updateTokenTotalSupply(i),!0)}),(0,Y.a)({queryKey:["UpdateUserBvautlsTokens",i,o],queryFn:async()=>!!o&&(await m.w.getState().sliceTokenStore.updateTokensBalance(i,o),!0)}),(0,a.jsx)(F.E,{children:(0,a.jsx)("div",{className:"w-full max-w-[1160px] px-4 mx-auto md:pb-8",children:c?(0,a.jsx)(BVaultPage,{bvc:c}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"page-title",children:"B-Vaults"}),(0,a.jsx)(D.K,{data:"A pendle-like product with more innovation."}),(0,a.jsxs)(P.r,{numItems:1,numItemsMd:2,numItemsLg:3,className:"gap-5 mt-4",children:[t.map((e,t)=>(0,a.jsx)(BVaultCard,{vc:e},"group_vault_item_".concat(t))),0==t.length&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-USDC"}),(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-WBTC"}),(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-WETH"})]})]})]})})})}},87031:function(e,t,s){"use strict";s.d(t,{Fw:function(){return c}});var a=s(73216);let n="0xF86a9a53D963B7a845F3496a97d0dB11cEc3c4E0",l="0x97d82C639835F4EfaCC366fdE78CA0c4EC2a2A83",c={[a.BG.id]:[{vault:"0x6a6B9817d221816187aD335030b0EF7c17051EfA",asset:"0xD69ADb6FB5fD6D06E6ceEc5405D95A37F96E3b96",assetSymbol:"HONEY-USDC",pToken:"0xbB6A3a94cccAe455444e9a1E1CD478CAc278Be3E",pTokenSymbol:"pHONEY-USDC",yTokenSymbol:"yHONEY-USDC",protocolAddress:n,protocolSettingsAddress:l,onEnv:["beta"]},{vault:"0xF484F7D00DD44c1F8B047b79cF8674e78FEcaba7",asset:"0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7",assetSymbol:"HONEY-WBERA",pToken:"0x9C476C0Ee24768fE74b5A6768a7E7c901e51E409",pTokenSymbol:"pHONEY-BERA",yTokenSymbol:"yHONEY-BERA",protocolAddress:n,protocolSettingsAddress:l,onEnv:["beta"]},{vault:"0xF778D2B9E0238D385008e916D7245F51959Ba279",asset:"0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7",assetSymbol:"HONEY-WBERA",pToken:"0x1f779e869E4769bD9129b7FE8B3a46350FA2Fbe7",pTokenSymbol:"pHONEY-BERA",yTokenSymbol:"yHONEY-BERA",protocolAddress:n,protocolSettingsAddress:l,onEnv:["beta"]},{vault:"0x686C72Aecf2D08410A8270D514B0Dc3Cc72e5288",asset:"0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7",assetSymbol:"HONEY-WBERA",pToken:"0x19fa905c43B7B3e4698266250f2f7909610b54B1",pTokenSymbol:"pHONEY-BERA",yTokenSymbol:"yHONEY-BERA",protocolAddress:n,protocolSettingsAddress:l,onEnv:["beta"]},{vault:"0xB0a0C11a77E67acBD161cc44743a1774f2C4Fff5",asset:"0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7",assetSymbol:"HONEY-WBERA",pToken:"0x8b117042C1C6C45656bE0A2160CEbD405C6016bc",pTokenSymbol:"pHONEY-BERA",yTokenSymbol:"yHONEY-BERA",protocolAddress:n,protocolSettingsAddress:l,onEnv:["beta","test"]}]}}},function(e){e.O(0,[4881,7495,7622,5294,3113,3339,1228,7348,776,4300,5545,2487,1678,4632,1523,8358,2877,5808,7093,604,1744],function(){return e(e.s=92537)}),_N_E=e.O()}]);