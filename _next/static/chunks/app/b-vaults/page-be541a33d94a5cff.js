(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9102],{92537:function(e,a,t){Promise.resolve().then(t.bind(t,47684))},47684:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return Vaults}});var s=t(31113),n=t(30639),l=t(4283),r=t(70258),i=t(73216),c=t(90168),o=t(22139),d=t(15506),m=t(26361),u=t(3106),x=t(18358),p=t(84944),b=t(78321),h=t(83978),f=t.n(h),v=t(42487),j=t.n(v),g=t(69708),N=t(64103),w=t(12485),y=t(14993),k=t(85665),T=t(20265),S=t(67541),C=t(4408),B=t(30308),P=t(96670),E=t(99548),A=t(91214),V=t(68535),R=t(64370),F=t(49041),D=t(64217),I=t(11292);let bnToNum=e=>f().round(parseFloat((0,I.d)(BigInt(e))),5),logTrans=e=>f().round(Math.log10(90*e+1),5),revertLog=e=>f().round((Math.pow(10,e)-1)/90,5);function BvaultEpochYtPrices(e){let{bvc:a,epochId:t}=e,{data:n}=(0,R.a)({queryKey:["bvualt-epoch-yt-prices",a.vault,t],queryFn:()=>(0,V.l6)(a.vault,t),initialData:[]}),[l,r]=(0,y.Z)(!0),{options:i}=(0,N.useMemo)(()=>{let e=n.map(e=>[(0,m.G$)(1e3*e.time,m.mv.ALL),l?logTrans(bnToNum(e.price)):bnToNum(e.price)]),valueFormater=e=>l?revertLog(e).toString():e.toString(),a={animation:!0,animationDuration:200,tooltip:{trigger:"axis",valueFormatter:valueFormater},grid:{top:30,bottom:30,right:20,show:!1},toolbox:{show:!1},xAxis:{type:"category",boundaryGap:!1,axisLine:{onZero:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1},max:e=>1.1*e.max,axisLabel:{formatter:valueFormater}},dataZoom:[{type:"inside",start:0,end:100,minValueSpan:10},{show:!1}],series:[{name:"YT Price",type:"line",symbol:"none",sampling:"lttb",itemStyle:{color:"rgb(30, 202, 83)"},areaStyle:{origin:"start",color:new D.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(30, 202, 83)"},{offset:1,color:"rgba(30, 202, 83, 0.2)"}])},data:e}]};return{data:e,options:a}},[n,l]);return(0,s.jsxs)("div",{className:"card p-4 mx-auto max-w-4xl w-full min-w-0",children:[(0,s.jsxs)("div",{className:"flex justify-between gap-2 items-center",children:[(0,s.jsx)("span",{className:"text-base font-bold",children:"YT Price Chart"}),(0,s.jsx)("span",{className:"text-xs font-medium dark:text-[#FBECEC]"})]}),(0,s.jsx)("div",{className:"flex gap-2 justify-end items-center mt-2",children:(0,s.jsx)("span",{className:(0,m.cn)("cursor-pointer text-xs px-1 py-0 rounded border-primary border",l?"bg-primary":"bg-transparent"),onClick:()=>r(),children:"LOG"})}),(0,s.jsx)(F.Z,{option:i,style:{height:240}})]})}var L=t(95702),Y=t(75496),q=t(16738);function Switch(e){return(0,s.jsx)("div",{style:{padding:1,border:"1px solid transparent",backgroundRepeat:"no-repeat",backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",backgroundImage:e.checked?"radial-gradient(#0B1215,#0B1215),radial-gradient(122.5% 122.5% at 52.9% 16.25%, #15D264 0%, #2CBD35 36.26%, #DCF45D 92.54%)":"radial-gradient(#0A1114,#0A1114),radial-gradient(#4A5546,#4A5546)"},className:(0,m.cn)("relative h-[1em] w-[2.5em] cursor-pointer rounded-[0.4em] text-xl"),onClick:()=>{var a;return null===(a=e.onChange)||void 0===a?void 0:a.call(e,!e.checked)},children:(0,s.jsx)("div",{className:(0,m.cn)("transition-all h-full w-[1.5em] absolute top-0 rounded-[0.4em]",e.checked?"-left-[1px]":"left-[1em]"),style:{background:e.checked?"radial-gradient(76.25% 76.25% at 50.3% 23.75%, #1BCD59 0%, #B3E854 100%)":"#3B4144"}})})}var W=t(6371),G=t(32036);function TupleTxt(e){return(0,s.jsxs)("div",{className:"flex items-center gap-5",children:[(0,s.jsx)("div",{className:"text-xs dark:text-white/60 font-medium",children:e.tit}),(0,s.jsx)("div",{className:(0,m.cn)("text-lg  font-medium flex items-center",e.subClassname),children:e.sub})]})}function BVaultRedeem(e){let{bvc:a}=e,[t,n]=(0,N.useState)(""),l=(0,m.su)(t),i=(0,x.nr)(a.vault),c=(0,x.Vw)(a.vault)[0],o=(0,u.R)(e=>e.sliceTokenStore.balances[a.pToken]||0n),d=(0,x.R3)(a),p=i.current.duration>0n?"Waiting Time: ~".concat((0,m.Y)((i.current.duration+i.current.startTime)*1000n-BigInt(f().now()))):"";return(0,s.jsxs)("div",{className:(0,m.cn)("flex flex-col gap-1"),children:[(0,s.jsx)(A.W,{asset:a.pTokenSymbol,assetIcon:"Panda",amount:t,balance:o,setAmount:n}),(0,s.jsxs)("div",{className:"text-xs font-medium text-center",children:[p," ",(0,s.jsx)(W.C,{children:"Wait to claim after the Epoch ends."})]}),(0,s.jsx)(E.v,{className:"mx-auto mt-6",tx:"Request",spender:null==c?void 0:c.redeemPool,approves:{[a.pToken]:l},disabled:c&&l<=0n||l>o,config:{abi:i.closed?r.j5:r.gg,address:i.closed?a.vault:(null==c?void 0:c.redeemPool)||S.DR,functionName:"redeem",args:[l]},onTxSuccess:()=>{n(""),d()}})]})}function BVaultClaim(e){let{bvc:a}=e,t=(0,x.nr)(a.vault),l=(0,x.Vw)(a.vault)[0],i=(null==l?void 0:l.redeemingBalance)||0n,{ids:c,claimable:o}=(0,x.gz)(a.vault),d=(0,x.R3)(a);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex justify-between text-base font-medium items-center gap-5 pt-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-black/60 dark:text-white/60 text-sm",children:"Available to Claim"}),(0,s.jsxs)("div",{className:"flex gap-4 items-center whitespace-nowrap mt-2",children:[(0,s.jsx)(L.c,{symbol:a.assetSymbol,size:24}),(0,s.jsx)("span",{className:"font-semibold",children:a.assetSymbol}),(0,s.jsx)("span",{className:"text-black/60 dark:text-white/60 ",children:(0,p.d)(o)})]})]}),(0,s.jsx)(E.v,{className:"ml-auto w-1/3",busyShowTxet:!1,tx:"Claim",disabled:o<=0n,config:{abi:r.j5,address:a.vault,functionName:"batchClaimRedeemAssets",args:[c.length>40?c.slice(c.length-40):c]},onTxSuccess:()=>{d()}})]}),(0,s.jsx)("div",{className:"h-[1px] bg-border my-4"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-black/60 dark:text-white/60 mb-4",children:"Pending Requests"}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)(n.Z,{showBg:!0,className:"text-2xl"}),(0,s.jsx)("span",{className:"font-semibold",children:a.pTokenSymbol}),(0,s.jsx)("span",{className:"text-black/60 dark:text-white/60",children:(0,p.d)(i)}),(0,s.jsxs)("div",{className:"ml-auto text-xs text-black/60 dark:text-white/60 ",children:["Settlement Time : ",(0,s.jsx)("span",{className:"text-black dark:text-white font-semibold pr-2",children:(0,m.G$)((t.current.duration+t.current.startTime)*1000n,m.mv.DATE2)})," ",(0,m.Y)((t.current.duration+t.current.startTime)*1000n-BigInt(f().now()))]})]})]})]})}function BVaultP(e){var a;let{bvc:t}=e,[l,o]=(0,N.useState)(""),d=(0,m.su)(l),b=c.P[t.asset],h=!!b,f=h?"PT":t.pTokenSymbol,v=h?"LP":t.assetSymbol,w=(0,x.nr)(t.vault),y=(0,u.R)(e=>e.sliceTokenStore.balances[t.asset]||0n),[k]=(0,x.oU)(t.vault),{data:T}=(0,C.p)(),S=(0,x.R3)(t),B=(0,g.useSearchParams)(),P=B.get("subtab"),V=[{tab:"Buy",content:(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)(A.W,{asset:t.assetSymbol,amount:l,balance:y,setAmount:o}),(0,s.jsx)("div",{className:"text-xs font-medium flex justify-end items-center",children:h&&(0,s.jsx)(j(),{target:"_blank",className:"underline",href:(0,i.FN)(t.asset),children:"Get LP on BEX"})}),(0,s.jsx)("div",{className:"text-xs font-medium text-center",children:"Receive 1 ".concat(f," for every ").concat(v)}),(0,s.jsx)(E.v,{className:"mx-auto mt-4",tx:"Buy",disabled:d<=0n||d>y,spender:t.vault,approves:{[t.asset]:d},config:{abi:r.j5,address:t.vault,functionName:"deposit",args:[d]},onTxSuccess:()=>{o(""),S()}})]})},{tab:"Withdraw",content:(0,s.jsx)(BVaultRedeem,{bvc:t})},{tab:"Claim",content:(0,s.jsx)(BVaultClaim,{bvc:t})}],R=null===(a=V.find(e=>e.tab.toLowerCase()==P))||void 0===a?void 0:a.tab;return(0,s.jsxs)("div",{className:(0,m.cn)("flex flex-col gap-5","max-w-4xl mx-auto w-full","max-w-xl"),children:[(0,s.jsxs)("div",{className:"card !p-0 overflow-hidden w-full",children:[(0,s.jsxs)("div",{className:"flex p-5 bg-[#A3D395] gap-5",children:[(0,s.jsx)(n.Z,{className:"text-[3.375rem]",showBg:!0}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("div",{className:"text-xl text-black font-semibold",children:t.pTokenSymbol}),(0,s.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Interest bearing rebase principal token"})]})]}),(0,s.jsxs)("div",{className:"flex items-baseline justify-between px-5 pt-5 gap-5",children:[(0,s.jsx)(TupleTxt,{tit:"APY Est.",sub:k}),(0,s.jsx)(TupleTxt,{tit:"Total Supply",sub:(0,s.jsx)(s.Fragment,{children:(0,p.d)(w.pTokenTotal)})})]}),(0,s.jsx)("div",{className:"flex px-2 pb-5",children:(0,s.jsx)("button",{className:"btn-link ml-auto text-black/60 dark:text-white/60 text-xs",onClick:()=>{null==T||T.watchAsset({type:"ERC20",options:{address:t.pToken,symbol:t.pTokenSymbol,decimals:18}}).catch(m.S3)},children:"Add to wallet"})})]}),(0,s.jsx)("div",{className:"md:col-span-2 card !p-4",children:(0,s.jsx)(q.x,{currentTab:R,data:V})})]})}function BVaultYInfo(e){let{bvc:a}=e,t=a.assetSymbol.includes("-"),n=t?"YT":a.yTokenSymbol,r=t?"LP token":a.assetSymbol,i=(0,x.nr)(a.vault),c=i.current,d=i.current.yTokenAmountForSwapYT>0n?i.lockedAssetTotal*o.Pq/i.current.yTokenAmountForSwapYT:0n,[u]=(0,x.v7)(a.vault);return(0,s.jsxs)("div",{className:"card !p-0 overflow-hidden flex flex-col",children:[(0,s.jsxs)("div",{className:"flex p-5 bg-[#F0D187] gap-5",children:[(0,s.jsx)(l.Z,{className:"text-[3.375rem]",showBg:!0}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("div",{className:"text-xl text-black font-semibold",children:a.yTokenSymbol}),(0,s.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Yield token"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-between p-5 gap-5 flex-1",children:[(0,s.jsxs)("div",{className:"flex justify-between items-baseline gap-4 flex-wrap",children:[(0,s.jsxs)("div",{className:"text-base font-semibold flex gap-5 items-end",children:[(0,s.jsxs)("span",{className:"text-4xl font-medium",children:[u,"x"]}),"Yield Boosted"]}),(0,s.jsxs)("span",{className:"text-xs",children:["1",n," = Yield of ",(0,p.d)(d,2)," ",r]})]}),(0,s.jsx)(TupleTxt,{tit:"Circulation amount",sub:(0,s.jsx)(s.Fragment,{children:(0,p.d)(i.current.yTokenAmountForSwapYT)})}),c&&(0,s.jsxs)("div",{className:"dark:text-white/60 text-xs whitespace-nowrap gap-1 flex w-full flex-col",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("span",{children:"Epoch ".concat(c.epochId.toString())}),(0,s.jsxs)("span",{className:"scale-90",children:["~",(0,m.Y)((c.startTime+c.duration)*1000n-BigInt(new Date().getTime()))," remaining"]})]}),(0,s.jsx)(b.Z,{value:(e=>{let a=BigInt(Math.floor(new Date().getTime()/1e3));if(a<e.startTime)return 0;if(a-c.startTime>=c.duration)return 100;let t=(a-c.startTime)*100n/e.duration;return parseInt(t.toString())})(c),className:"mt-2 rounded-full overflow-hidden"}),(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("span",{className:"scale-90",children:(0,m.G$)(1000n*c.startTime,m.mv.ALL2)}),(0,s.jsx)("span",{className:"scale-90",children:(0,m.G$)((c.startTime+c.duration)*1000n,m.mv.ALL2)})]})]})]})]})}function BVaultYTrans(e){let{bvc:a}=e,t=a.assetSymbol.includes("-");t||a.pTokenSymbol;let n=t?"YT":a.yTokenSymbol,l=t?"LP token":a.assetSymbol,[i,c]=(0,N.useState)(""),b=(0,m.su)(i),h=(0,x.nr)(a.vault);h.current;let f=(0,u.R)(e=>e.sliceTokenStore.balances[a.asset]||0n),{data:v,refetch:j}=(0,B.u)({abi:r.j5,address:a.vault,functionName:"calcSwap",args:[b],query:{retry:!0}}),g=(0,d.hp)();(0,N.useEffect)(()=>{j()},[g.time]);let[k,T]=(0,y.Z)(!1),S=h.current.vaultYTokenBalance,C=(0,m.ok)(v,"1"),P=S>0n?h.Y*o.Pq/S:0n,V=P>0n?o.Pq*o.Pq/P:0n,R=k?"1 ".concat(l,"=").concat((0,p.d)(V)," ").concat(n):"1 ".concat(n,"=").concat((0,p.d)(P)," ").concat(l),F=S>C?(h.Y+b)*o.Pq/(S-C):0n,D=(0,m.Kl)(C,void 0,!0),I=F>P&&P>0n?(F-P)*BigInt(1e10)/P:0n,L=(0,x.R3)(a);return(0,s.jsxs)("div",{className:"card !p-4 flex flex-col h-[24.25rem] gap-1",children:[(0,s.jsx)(A.W,{asset:a.assetSymbol,amount:i,balance:f,setAmount:c}),(0,s.jsx)("div",{className:"text-base font-bold my-2",children:"Receive"}),(0,s.jsx)(A.W,{asset:a.yTokenSymbol,assetIcon:"Venom",readonly:!0,disable:!0,checkBalance:!1,amount:D}),(0,s.jsxs)("div",{className:"text-xs font-medium  flex justify-between select-none",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(w.k$E,{className:"text-sm text-primary cursor-pointer inline-block",onClick:()=>T()}),(0,s.jsx)("span",{children:"Price: ".concat(R)})]}),(0,s.jsx)("span",{children:"Price Impact: ".concat((0,m.Jh)(I,10,2))})]}),(0,s.jsx)(E.v,{className:"mx-auto mt-auto",tx:"Buy",disabled:b<=0n||b>f,config:{abi:r.j5,address:a.vault,functionName:"swap",args:[b]},approves:{[a.asset]:b},spender:a.vault,onTxSuccess:()=>{c(""),L()}})]})}function BribeTit(e){return(0,s.jsxs)("div",{className:"flex items-center justify-start pl-5 gap-3",children:[(0,s.jsx)(L.c,{symbol:"GreenDot",size:14}),(0,s.jsx)("span",{className:"text-sm font-medium",children:e.name})]})}function BVaultPools(e){var a;let{bvc:t}=e,{address:n}=(0,P.m)(),[l,i]=(0,N.useState)(!1),c=(0,x.Vw)(t.vault),d=(0,N.useMemo)(()=>l?c.filter(e=>e.bribes.reduce((e,a)=>e+a.bribeAmount,0n)>0n):c,[c,l]),[u,b]=(0,k.Z)(),h="text-black/60 dark:text-white/60 text-sm",[f,v]=(0,N.useState)(null===(a=d[0])||void 0===a?void 0:a.epochId),j=(0,N.useMemo)(()=>d.find(e=>e.epochId==f),[d,f]),g=(null==j?void 0:j.userBalanceYToken)||0n,w=(null==j?void 0:j.userBalanceYTokenSyntyetic)||0n,onRowClick=e=>{var a;v(null===(a=d[e])||void 0===a?void 0:a.epochId)};(0,N.useEffect)(()=>{!f&&d.length&&onRowClick(0)},[d,f]);let y=(null==j?void 0:j.bribes)||[],S=(0,N.useMemo)(()=>{let e=y.find(e=>e.bribeAmount>0n);return e&&0n!=e.bribeTotalAmount?(0,m.Jh)(e.bribeAmount*o.Pq/e.bribeTotalAmount,18):(0,m.Jh)(0n,0n)},[y]),C=(0,x.R3)(t);return(0,s.jsxs)("div",{className:"md:h-[24.25rem] card !p-4",children:[(0,s.jsx)("div",{className:"font-bold text-base",children:"Harvest"}),(0,s.jsxs)("div",{className:(0,m.cn)("flex flex-col md:flex-row gap-4 mt-2"),children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4 shrink-0 w-full md:w-[14.375rem]",ref:u,children:[(0,s.jsxs)("div",{className:"flex items-center gap-8 text-sm font-semibold",children:[(0,s.jsx)("span",{children:"My Pool Only"}),(0,s.jsx)(Switch,{checked:l,onChange:i})]}),(0,s.jsx)(T.aV,{className:d.length>6?"pr-5":"",width:b.width,height:280,rowHeight:e=>{let{index:a}=e;return a<d.length-1?76:56},overscanRowCount:6,rowCount:d.length,rowRenderer:function(e){let{key:a,style:t,index:n}=e,l=d[n],r="".concat((0,m.G$)(1000n*l.startTime),"-").concat((0,m.G$)((l.startTime+l.duration)*1000n));return(0,s.jsx)("div",{style:t,className:"cursor-pointer",onClick:()=>onRowClick(n),children:(0,s.jsxs)("div",{className:(0,m.cn)("h-[56px] card !rounded-lg !px-5 !py-2 font-semibold",n<d.length-1?"mb-[20px]":""),children:[(0,s.jsxs)("div",{className:"text-sm",children:["Epoch ",d[n].epochId.toString()]}),(0,s.jsx)("div",{className:"text-xs dark:text-white/60 mt-1",children:r})]})},a)}})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,s.jsxs)("div",{className:"flex gap-6 items-end font-semibold",children:[(0,s.jsx)("span",{className:"text-sm",children:"Accumulated Rewards"}),(0,s.jsxs)("span",{className:"text-xs dark:text-white/60",children:["Epoch ",((null==j?void 0:j.epochId)||1n).toString()]})]}),(0,s.jsx)("div",{className:"mt-2 rounded-lg border border-solid border-border px-4 py-1 h-[8.125rem] overflow-auto",children:(0,s.jsx)(Y.ZP,{headerClassName:"text-center text-black/60 dark:text-white/60 border-b-0",headerItemClassName:"py-1",rowClassName:"text-center",cellClassName:"py-0",header:["","","Total","Mine",""],span:{1:2,2:1,3:1},data:y.map(e=>["",(0,s.jsx)(BribeTit,{name:e.bribeSymbol},"1"),(0,p.d)(e.bribeTotalAmount),(0,p.d)(e.bribeAmount),""])})}),(0,s.jsxs)("div",{className:"rounded-lg border border-solid border-border px-4 py-2 flex justify-between items-center",children:[(0,s.jsxs)("div",{className:"font-semibold text-xs",children:[(0,s.jsxs)("div",{children:["My yToken: ",(0,s.jsx)("span",{className:(0,m.cn)(h),children:(0,p.d)(g)})]}),(0,s.jsxs)("div",{children:["Time Weighted Points:"," ",(0,s.jsx)("span",{className:(0,m.cn)(h),children:g>0n&&0n==w?"Reward received":(0,p.d)(w)})]})]}),(0,s.jsxs)("div",{className:"text-sm",children:["My Share: ",(0,s.jsx)("span",{className:(0,m.cn)(h,"text-xl"),children:S})]})]}),(0,s.jsx)("span",{className:"text-xs mx-auto",children:"You can harvest at the end of Epoch"}),(0,s.jsx)(E.v,{className:"mx-auto mt-4",tx:"Harvest",disabled:!j||!(null==j?void 0:j.settled),config:{abi:r.j5,address:t.vault,functionName:"claimBribes",args:[null==j?void 0:j.epochId]},onTxSuccess:()=>{C()}})]})]})]})}function BVaultB(e){let{bvc:a}=e,t=(0,x.nr)(a.vault);return(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-5",children:[(0,s.jsx)(BVaultYInfo,{bvc:a}),(0,s.jsx)(BvaultEpochYtPrices,{bvc:a,epochId:t.epochCount}),(0,s.jsx)(BVaultYTrans,{bvc:a}),(0,s.jsx)(BVaultPools,{bvc:a})]})}function BVaultCard(e){let{vc:a}=e,t=(0,g.useRouter)(),[n,l]=a.assetSymbol.split("-"),r=(0,x.nr)(a.vault),i=c.P[a.asset],d=(0,u.R)(e=>e.sliceTokenStore.prices),b=i&&d[i.base]||0n,h=i&&d[i.quote]||0n,v=r.lpBase||0n,j=r.lpQuote||0n,N=v*b/o.Pq,w=j*h/o.Pq,y=N+w,[k]=(0,x.v7)(a.vault),[T]=(0,x.oU)(a.vault),S="Epoch ".concat(((null==r?void 0:r.epochCount)||0n).toString()),C=0n==r.epochCount?"-- -- --":(0,m.G$)((r.current.startTime+r.current.duration)*1000n,m.mv.DATE2),B=0n==r.epochCount?"":(0,m.Y)((r.current.startTime+r.current.duration)*1000n-BigInt(f().now()));return(0,s.jsxs)("div",{className:(0,m.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden",{}),onClick:()=>t.push("/b-vaults?vault=".concat(a.vault)),children:[(0,s.jsxs)("div",{className:(0,m.cn)(G.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center"),children:[(0,s.jsx)(L.c,{symbol:a.assetSymbol,size:44}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:a.assetSymbol}),(0,s.jsx)("div",{className:" text-sm font-medium",children:a.assetSymbol.includes("-")?"LP Token":""})]}),(0,s.jsxs)("div",{className:"ml-auto",children:[(0,s.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,s.jsxs)("div",{className:"text-sm font-medium",children:["$",(0,p.d)(y,2)]})]})]}),(0,G.BW)(n,v,N),(0,G.BW)(l,j,w,!0),(0,G.yP)("Settlement Time",r.closed?"status-red":"status-green",r.closed?"Closed":(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("div",{className:"flex gap-2 items-end",children:[(0,s.jsx)("span",{children:C}),(0,s.jsx)("span",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:B})]}),r.epochCount>0n&&(0,s.jsx)("div",{className:"absolute top-full mt-1 left-0 text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:S})]})),(0,G.yP)("Reward","iBGT","iBGT",!0),(0,G.Sn)("Panda","Principal Panda",T,"Venom","Boost Venom","".concat(k,"x"),e=>{e.stopPropagation(),t.push("/b-vaults?vault=".concat(a.vault,"&tab=principal_panda"))},e=>{e.stopPropagation(),t.push("/b-vaults?vault=".concat(a.vault,"&tab=boost_venom"))})]})}function BVaultCardComming(e){let{symbol:a}=e;return(0,s.jsxs)("div",{className:(0,m.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden h-[367px]",{}),children:[(0,s.jsxs)("div",{className:(0,m.cn)(G.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center h-20"),children:[(0,s.jsx)(L.c,{symbol:a,size:44}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:a}),(0,s.jsx)("div",{className:" text-sm font-medium",children:a.includes("-")?"LP Token":""})]}),(0,s.jsxs)("div",{className:"ml-auto",children:[(0,s.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,s.jsx)("div",{className:"text-sm font-medium",children:"$-"})]})]}),(0,s.jsx)("div",{className:(0,m.cn)(G.bG,"col-span-2"),children:(0,s.jsx)("div",{className:"text-xs font-semibold leading-[12px] whitespace-nowrap",children:"New Vault Comming Soon..."})})]})}var M=t(78403),_=t(36602),U=t(95499),Z=t(83960),O=t(47259),$=t(61766),H=t(58714);function PulseTokenItem(){return(0,s.jsxs)("div",{className:"animate-pulse flex px-4 py-2 items-center gap-4 rounded-lg",children:[(0,s.jsx)("div",{className:"rounded-full w-10 h-10 bg-slate-400"}),(0,s.jsx)("div",{className:"w-28 h-5 rounded-lg bg-slate-400"}),(0,s.jsx)("div",{className:"ml-auto w-12 h-5 rounded-lg bg-slate-400"})]})}var K=t(2987),z=t(36762),J=t(19757);let Q=[{symbol:"HONEY",name:"HONEY Token",address:"0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03"},{symbol:"USDC",name:"USD Coin",address:"0xd6d83af58a19cd14ef3cf6fe848c9a4d21e5727c"},{symbol:"WBERA",name:"BERA Token",address:"0x7507c1dc16935b82698e4c63f2746a2fcf994df8"},{symbol:"iBGT",name:"Infrared BGT",address:"0x46eFC86F0D7455F135CC9df501673739d513E982"},{symbol:"USDT",name:"Tether USD",address:"0x05D0dD5135E3eF3aDE32a9eF9Cb06e8D37A6795D"},{symbol:"DAI",name:"Decentralized USD",address:"0x806Ef538b228844c73E8E692ADCFa8Eb2fCF729c"},{symbol:"WBTC",name:"Wrapped Bitcoin",address:"0x2577D24a26f8FA19c1058a8b0106E2c7303454a4"},{symbol:"WETH",name:"Wrapped Ether",address:"0xE28AfD8c634946833e89ee3F122C06d7C537E8A8"}];function TokenSelect(e){let{tokens:a,onSelect:t,hiddenNative:n}=e,l=(0,u.R)(e=>e.sliceTokenStore.defTokenList),r=(0,N.useMemo)(()=>{let e=f().isEmpty(a)?f().isEmpty(l)?Q:l:a;return n?e.filter(e=>e.address!==S.DR&&e.address!==J.K8):e},[a,l,n]),[i,c]=(0,N.useState)(""),o=(0,_.l)(),{address:d}=(0,P.m)(),[x,b]=(0,N.useState)(["searchTokens",i,r]),h=(0,N.useMemo)(()=>f().debounce((e,a)=>{b(["searchTokens",e,a])},300,{leading:!0,maxWait:300}),[]);(0,N.useEffect)(()=>{h(i,r)},[i,r]);let{data:v,isFetching:j}=(0,R.a)({initialData:r,queryFn:async()=>{if((0,$.U)(i)){let e=r.find(e=>e.address==i);if(e)return[e];let a=(0,M.B)(),[t]=await Promise.all([a.readContract({abi:H.Wo,address:i,functionName:"symbol"}),a.readContract({abi:H.Wo,address:i,functionName:"totalSupply"})]);return d&&u.w.getState().sliceTokenStore.updateTokensBalance([i],d),[{symbol:t,address:i}]}return i?r.filter(e=>{let a=i.toLowerCase(),t=!!e.symbol.toLowerCase().match(a),s=!!e.name&&!!e.name.toLowerCase().match(a);return t||s}):r},queryKey:x}),g=v||r;return(0,R.a)({queryKey:["updateBalancesForUnknowToken",r],enabled:!!d,queryFn:()=>u.w.getState().sliceTokenStore.updateTokensBalance(r.map(e=>e.address),d)}),(0,s.jsxs)("div",{className:"flex flex-col gap-4 p-5",children:[(0,s.jsx)("div",{className:"page-sub text-center",children:"Select a token"}),(0,s.jsx)("input",{className:(0,m.cn)("bg-white dark:bg-transparent","border-slate-400  focus:border-primary","w-full h-14 text-right px-4 font-bold text-base border-[#4A5546] border focus:border-2 text-slate-700 rounded-lg outline-none dark:text-slate-50"),placeholder:"Search by name, symbol or address",value:i,onChange:e=>c(e.target.value)}),(0,s.jsx)("div",{className:"flex flex-col overflow-y-auto h-[18.75rem]",children:j?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(PulseTokenItem,{}),(0,s.jsx)(PulseTokenItem,{}),(0,s.jsx)(PulseTokenItem,{})]}):(0,s.jsx)(s.Fragment,{children:g.map(e=>(0,s.jsxs)("div",{className:"flex px-4 py-2 items-center gap-4 rounded-lg cursor-pointer hover:bg-primary/20",onClick:()=>{null==t||t(e)},children:[(0,s.jsx)(L.c,{className:"rounded-full",size:40,symbol:e.symbol,url:e.url}),(0,s.jsx)("span",{children:e.symbol}),(0,s.jsx)("span",{className:"ml-auto",children:(0,p.d)(o[e.address])})]},e.address))})})]})}function BVaultAddReward(e){let{bvc:a}=e,t=(0,_.l)(),n=(0,x.nr)(a.vault),l=(0,u.R)(e=>e.sliceTokenStore.defTokenList),i=f().isEmpty(l)?Q[0]:l[0],[c,o]=(0,N.useState)(i),[d,p]=(0,N.useState)(""),b=t[c.address],h=(0,m.su)(d),v=(0,N.useRef)(null),j=(0,C.p)(),{address:g}=(0,P.m)(),{mutate:w,isPending:y}=(0,U.D)({mutationFn:async()=>{if(k)return;let e=(0,M.B)(),t=await e.readContract({abi:r.j5,address:a.vault,functionName:"bribeTokens",args:[n.epochCount]});if(console.info("tokens:",t,c.address),!t.find(e=>e.toLowerCase()==c.address.toLowerCase())){let t=await j.data.writeContract({abi:r.j5,address:a.vault,functionName:"addBribeToken",args:[c.address]});await e.waitForTransactionReceipt({hash:t,confirmations:3})}let s=await e.readContract({abi:H.Wo,address:c.address,functionName:"allowance",args:[g,a.vault]});if(s<h){let t=await j.data.writeContract({abi:H.Wo,address:c.address,functionName:"approve",args:[a.vault,h-s]});await e.waitForTransactionReceipt({hash:t,confirmations:3})}let l=await j.data.writeContract({abi:r.j5,address:a.vault,functionName:"addBribes",args:[c.address,h]});await e.waitForTransactionReceipt({hash:l,confirmations:3}),u.w.getState().sliceTokenStore.updateTokensBalance([c.address],g),p(""),O.A.success("Transaction success")},mutationKey:["addReward"],onError:m.S3}),k=!j.data||!g||0n==h||h>b||y||0n==n.epochCount;return(0,s.jsxs)("div",{className:"max-w-4xl mx-auto mt-8 card",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(A.W,{asset:c.symbol,assetURL:c.url,balance:t[c.address],amount:d,setAmount:p}),(0,s.jsx)(K.o,{trigger:(0,s.jsxs)("div",{ref:v,className:"absolute left-0 top-0 flex cursor-pointer justify-end items-center py-4",children:[(0,s.jsx)("span",{className:"invisible pl-12",children:c.symbol}),(0,s.jsx)(Z.tv1,{className:"ml-2"})]}),children:(0,s.jsx)(TokenSelect,{hiddenNative:!0,onSelect:e=>{var a;o(e),null===(a=v.current)||void 0===a||a.click()}})})]}),(0,s.jsxs)("button",{className:"btn-primary w-full flex justify-center items-center gap-2",disabled:k,onClick:()=>w(),children:[y&&(0,s.jsx)(z.$,{})," Add"]})]})}var X=t(6868),ee=t(44939),ea=t(87031),et=t(59175),es=t(31889),en=t(62600);let el=["redeem","principal_panda","boost_venom"];function BVaultPage(e){var a;let{bvc:t,currentTab:n}=e,{address:l}=(0,P.m)(),i=(0,x.nr)(t.vault);(0,R.a)({queryKey:["UpdateVaultDetails",t,i],queryFn:async()=>0n!=i.epochCount&&(await u.w.getState().sliceBVaultsStore.updateEpoches(t),!0)});let c=(0,x.Vw)(t.vault);(0,R.a)({queryKey:["UpdateUserData",t,c,l],queryFn:async()=>0!=c.length&&!!l&&(console.info("epochesOld:",c),await u.w.getState().sliceUserBVaults.updateEpoches(t,l,c),!0)});let{data:d}=(0,R.a)({queryKey:["checkIsBriber",l,t],queryFn:async()=>{if(!l)return!1;let e=(0,M.B)(),a=await Promise.all([e.readContract({abi:r.j5,address:t.vault,functionName:"isBriber",args:[l]}),e.readContract({abi:r.j5,address:t.vault,functionName:"owner"}).then(e=>e==l)]);return a.includes(!0)}}),m=[{tab:i.closed?"Redeem":"Principal Panda",content:i.closed?(0,s.jsx)("div",{className:"max-w-4xl mx-auto pt-8",children:(0,s.jsx)(BVaultRedeem,{bvc:t})}):(0,s.jsx)(BVaultP,{bvc:t})},{tab:"Boost Venom",content:(0,s.jsx)(BVaultB,{bvc:t})}],p=d&&o._u?[...m,{tab:"Add Reward",content:(0,s.jsx)(BVaultAddReward,{bvc:t})}]:m,tabToSearchParams=e=>e.toLowerCase().replaceAll(" ","_"),b=null===(a=p.find(e=>tabToSearchParams(e.tab)==n))||void 0===a?void 0:a.tab,h=(0,g.useRouter)();return(0,s.jsx)(q.x,{currentTab:b,onTabChange:e=>h.push("/b-vaults?vault=".concat(t.vault,"&tab=").concat(tabToSearchParams(e))),listClassName:"flex-wrap p-0 mb-5 md:gap-14",triggerClassName:'text-lg sm:text-xl md:text-2xl py-0 data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap',contentClassName:"gap-5",data:p})}function Vaults(){let e=(0,et.p)(),a=(0,N.useMemo)(()=>ea.Fw[e].filter(e=>e.onEnv&&e.onEnv.includes(o.Vi)),[e,o.Vi]),t=(0,g.useSearchParams)(),n=t.get("vault"),l=t.get("tab"),r=el.includes(l)?l:"",i=a.find(e=>e.vault==n);return(0,es.Ev)(),(0,s.jsx)(ee.E,{children:(0,s.jsx)("div",{className:"w-full max-w-[1232px] px-4 mx-auto md:pb-8",children:i?(0,s.jsx)(BVaultPage,{bvc:i,currentTab:r}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"page-title",children:"B-Vaults"}),(0,s.jsx)(X.K,{data:"A pendle-like product with more innovation."}),(0,s.jsxs)(en.r,{numItems:1,numItemsMd:2,numItemsLg:3,className:"gap-5 mt-4",children:[a.map((e,a)=>(0,s.jsx)(BVaultCard,{vc:e},"group_vault_item_".concat(a))),0==a.length&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(BVaultCardComming,{symbol:"HONEY-USDC"}),(0,s.jsx)(BVaultCardComming,{symbol:"HONEY-WBTC"}),(0,s.jsx)(BVaultCardComming,{symbol:"HONEY-WETH"})]})]})]})})})}},75496:function(e,a,t){"use strict";var s=t(31113),n=t(26361);function DefEmpty(){return(0,s.jsx)("tr",{className:"text-lg font-normal text-center text-black ",children:(0,s.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top"})})}t(64103),a.ZP=e=>{let{header:a,data:t,span:l={},empty:r=(0,s.jsx)(DefEmpty,{}),className:i="relative min-w-full bg-transparent ",headerClassName:c,headerItemClassName:o,tbodyClassName:d="",rowClassName:m,rowStyle:u,cellClassName:x,onClickRow:p,onRowMouseHover:b}=e;return(0,s.jsxs)("table",{className:(0,n.cn)("relative min-w-full bg-transparent ",i),children:[(0,s.jsx)("thead",{className:"",children:(0,s.jsx)("tr",{className:(0,n.cn)("text-left whitespace-nowrap font-normal text-black border-b border-gray-100 pt-5 pb-6 dark:text-slate-50 dark:border-zinc-600",c),children:a.map((e,a)=>(0,s.jsx)("th",{colSpan:l[a],scope:"col",className:(0,n.cn)(0==l[a]?"p-0 w-0":"p-3 font-normal text-sm",o),children:e},a))})}),(0,s.jsxs)("tbody",{className:(0,n.cn)(d),children:[t.map((e,t)=>(0,s.jsx)("tr",{onClick:()=>p&&p(t),onMouseEnter:()=>b&&b(t),onMouseLeave:()=>b&&b(-1),style:"function"==typeof u?u(t):u,className:(0,n.cn)("text-slate-700 dark:text-slate-50 font-medium whitespace-nowrap",p?"cursor-pointer hover:bg-slate-400/10":"","function"==typeof m?m(t):m),children:e.map((e,r)=>r>=a.length?(0,s.jsx)(s.Fragment,{children:e}):(0,s.jsx)("td",{colSpan:l[r],className:(0,n.cn)(0==l[r]?"p-0 w-max":"px-3 py-2 text-sm w-max","function"==typeof x?x(t,r):x),children:e},r))},t)),0===t.length&&r]})]})}}},function(e){e.O(0,[4881,7495,7622,3113,5294,4105,9590,4167,8410,652,4300,5116,3960,5790,2653,3783,2487,5061,1037,5974,7112,6976,7093,604,1744],function(){return e(e.s=92537)}),_N_E=e.O()}]);