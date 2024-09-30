(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9102],{92537:function(e,t,s){Promise.resolve().then(s.bind(s,22801))},22801:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Vaults}});var a=s(31113),n=s(30639),l=s(4283),r=s(70258),i=s(73216),c=s(90168),o=s(22139),d=s(15506),m=s(26361),x=s(3106),u=s(18358),p=s(84944),h=s(78321),b=s(42487),v=s.n(b),j=s(69708),f=s(64103),g=s(12485),N=s(14993),w=s(85665),y=s(20265),k=s(67541),T=s(4408),B=s(96670),S=s(30308),C=s(99548),P=s(91214),V=s(68535),R=s(64370),E=s(49041),A=s(64217),Y=s(83978),F=s.n(Y),M=s(11292);let bnToNum=e=>F().round(parseFloat((0,M.d)(BigInt(e))),5),logTrans=e=>F().round(Math.log10(90*e+1),5),revertLog=e=>F().round((Math.pow(10,e)-1)/90,5);function BvaultEpochYtPrices(e){let{bvc:t,epochId:s}=e,{data:n}=(0,R.a)({queryKey:["bvualt-epoch-yt-prices",t.vault,s],queryFn:()=>(0,V.l6)(t.vault,s),initialData:[]}),[l,r]=(0,N.Z)(!0),{options:i}=(0,f.useMemo)(()=>{let e=n.map(e=>[(0,m.d3)(1e3*e.time,"all"),l?logTrans(bnToNum(e.price)):bnToNum(e.price)]),valueFormater=e=>l?revertLog(e).toString():e.toString(),t={animation:!0,animationDuration:200,tooltip:{trigger:"axis",valueFormatter:valueFormater},grid:{top:30,bottom:30,right:20,show:!1},toolbox:{show:!1},xAxis:{type:"category",boundaryGap:!1,axisLine:{onZero:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1},max:e=>1.1*e.max,axisLabel:{formatter:valueFormater}},dataZoom:[{type:"inside",start:0,end:100,minValueSpan:10},{show:!1}],series:[{name:"YT Price",type:"line",symbol:"none",sampling:"lttb",itemStyle:{color:"rgb(30, 202, 83)"},areaStyle:{origin:"start",color:new A.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(30, 202, 83)"},{offset:1,color:"rgba(30, 202, 83, 0.2)"}])},data:e}]};return{data:e,options:t}},[n,l]);return(0,a.jsxs)("div",{className:"card mx-auto max-w-4xl w-full",children:[(0,a.jsxs)("div",{className:"flex justify-between gap-2 items-center",children:[(0,a.jsx)("span",{className:"text-base font-bold",children:"YT Price Chart"}),(0,a.jsx)("span",{className:"text-xs font-medium dark:text-[#FBECEC]",children:"The value of YT will become ZERO at the end of the Epoch."})]}),(0,a.jsx)("div",{className:"flex gap-2 justify-end items-center mt-2",children:(0,a.jsx)("span",{className:(0,m.cn)("cursor-pointer text-xs px-1 py-0 rounded border-primary border",l?"bg-primary":"bg-transparent"),onClick:()=>r(),children:"LOG"})}),(0,a.jsx)(E.Z,{option:i,style:{height:240}})]})}var I=s(95702),q=s(75496),D=s(16738);function Switch(e){return(0,a.jsx)("div",{style:{padding:1,border:"1px solid transparent",backgroundRepeat:"no-repeat",backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",backgroundImage:e.checked?"radial-gradient(#0B1215,#0B1215),radial-gradient(122.5% 122.5% at 52.9% 16.25%, #15D264 0%, #2CBD35 36.26%, #DCF45D 92.54%)":"radial-gradient(#0A1114,#0A1114),radial-gradient(#4A5546,#4A5546)"},className:(0,m.cn)("relative h-[1em] w-[2.5em] cursor-pointer rounded-[0.4em] text-xl"),onClick:()=>{var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,!e.checked)},children:(0,a.jsx)("div",{className:(0,m.cn)("transition-all h-full w-[1.5em] absolute top-0 rounded-[0.4em]",e.checked?"-left-[1px]":"left-[1em]"),style:{background:e.checked?"radial-gradient(76.25% 76.25% at 50.3% 23.75%, #1BCD59 0%, #B3E854 100%)":"#3B4144"}})})}var L=s(6371),Z=s(718);function TupleTxt(e){return(0,a.jsxs)("div",{className:"flex flex-col gap-0.5",children:[(0,a.jsx)("div",{className:"text-xs dark:text-white/60 font-medium",children:e.tit}),(0,a.jsx)("div",{className:(0,m.cn)("text-lg  font-medium flex items-center",e.subClassname),children:e.sub})]})}let G="max-w-4xl mx-auto w-full";function BVaultRedeem(e){let{bvc:t}=e,s=c.P[t.asset],n=!!s,l=n?"PT":t.pTokenSymbol,i=n?"LP":t.assetSymbol,[o,d]=(0,f.useState)(""),h=(0,m.su)(o),b=(0,u.nr)(t.vault),v=(0,u.Vw)(t.vault)[0],{ids:j,claimable:g}=(0,u.gz)(t.vault);(0,x.R)(e=>e.sliceTokenStore.balances[t.asset]||0n);let N=(0,x.R)(e=>e.sliceTokenStore.balances[t.pToken]||0n),w=(null==v?void 0:v.redeemingBalance)||0n,y="Your ".concat(l," can be claimed 1:1 for ").concat(i," at the end of this Epoch"),T=(0,u.R3)(t),renderClaimable=()=>(0,a.jsxs)("div",{className:"flex text-xs items-center gap-5",children:["Claimable: ".concat((0,p.d)(g)),(0,a.jsx)(C.v,{className:"",busyShowTxet:!1,txType:"btn-link",tx:"Claim",disabled:g<=0n,config:{abi:r.j5,address:t.vault,functionName:"batchClaimRedeemAssets",args:[j.length>40?j.slice(j.length-40):j]},onTxSuccess:()=>{T()}})]});return(0,a.jsxs)("div",{className:(0,m.cn)("flex flex-col gap-1"),children:[(0,a.jsx)(P.W,{asset:t.pTokenSymbol,assetIcon:"Panda",amount:o,balance:N,setAmount:d}),v&&v.settled&&(0,a.jsxs)("div",{className:"flex flex-wrap justify-between items-center h-5",children:[(0,a.jsx)("div",{className:"text-xs font-medium",children:y}),renderClaimable()]}),(0,a.jsx)(C.v,{className:"mx-auto mt-6",tx:"Redeem",spender:null==v?void 0:v.redeemPool,approves:{[t.pToken]:h},disabled:v&&h<=0n||h>N,config:{abi:b.closed?r.j5:r.gg,address:b.closed?t.vault:(null==v?void 0:v.redeemPool)||k.DR,functionName:"redeem",args:[h]},onTxSuccess:()=>{d(""),T()}}),(!v||!v.settled)&&(0,a.jsxs)("div",{className:"flex flex-wrap justify-between items-center h-5 mt-5",children:[(0,a.jsxs)("div",{className:"text-xs font-medium",children:["In Redemption: ".concat((0,p.d)(w))," ",(0,a.jsx)(L.C,{children:"Redemption will be completed at the end of an Epoch."})]}),renderClaimable()]})]})}function BVaultP(e){let{bvc:t}=e,[s,l]=(0,f.useState)(""),o=(0,m.su)(s),d=c.P[t.asset],h=!!d,b=h?"PT":t.pTokenSymbol,j=h?"LP":t.assetSymbol,g=(0,u.nr)(t.vault),N=(0,x.R)(e=>e.sliceTokenStore.balances[t.asset]||0n),[w]=(0,u.oU)(t.vault),{data:y}=(0,T.p)(),k=(0,u.R3)(t);return(0,a.jsxs)("div",{className:(0,m.cn)("grid grid-cols-1 md:grid-cols-3 gap-5",G),children:[(0,a.jsxs)("div",{className:"card !p-0 overflow-hidden min-h-[16.875rem]",children:[(0,a.jsxs)("div",{className:"flex p-5 bg-[#A3D395] gap-5",children:[(0,a.jsx)(n.Z,{className:"text-[3.375rem]",showBg:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-xl text-black font-semibold",children:t.pTokenSymbol}),(0,a.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Interest bearing rebase principal token"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,a.jsx)(TupleTxt,{tit:"APY Est.",sub:w}),(0,a.jsx)(TupleTxt,{tit:"Total Minted",sub:(0,a.jsxs)(a.Fragment,{children:[(0,p.d)(g.pTokenTotal),(0,a.jsx)("button",{className:"btn-link ml-auto text-black/60 dark:text-white/60 text-xs",onClick:()=>{null==y||y.watchAsset({type:"ERC20",options:{address:t.pToken,symbol:t.pTokenSymbol,decimals:18}}).catch(m.S3)},children:"Add to wallet"})]})})]})]}),(0,a.jsx)("div",{className:"md:col-span-2 card !p-4",children:(0,a.jsx)(D.x,{data:[{tab:"Mint",content:(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)(P.W,{asset:t.assetSymbol,amount:s,balance:N,setAmount:l}),(0,a.jsx)("div",{className:"text-xs font-medium flex justify-end items-center",children:h&&(0,a.jsx)(v(),{target:"_blank",className:"underline",href:(0,i.FN)(t.asset),children:"Get LP on BEX"})}),(0,a.jsx)("div",{className:"text-xs font-medium text-center",children:"Receive 1 ".concat(b," for every ").concat(j)}),(0,a.jsx)(C.v,{className:"mx-auto mt-4",tx:"Mint",disabled:o<=0n||o>N,spender:t.vault,approves:{[t.asset]:o},config:{abi:r.j5,address:t.vault,functionName:"deposit",args:[o]},onTxSuccess:()=>{l(""),k()}})]})},{tab:"Redeem",content:(0,a.jsx)(BVaultRedeem,{bvc:t})}]})})]})}function BVaultY(e){let{bvc:t}=e,s=t.assetSymbol.includes("-");s||t.pTokenSymbol;let n=s?"YT":t.yTokenSymbol,i=s?"LP token":t.assetSymbol,[c,b]=(0,f.useState)(""),v=(0,m.su)(c),{address:j}=(0,B.m)(),w=(0,u.nr)(t.vault),y=w.current,k=(0,x.R)(e=>e.sliceTokenStore.balances[t.asset]||0n),{data:T,refetch:V}=(0,S.u)({abi:r.j5,address:t.vault,functionName:"calcSwap",args:[v],query:{retry:!0}}),R=(0,d.hp)();(0,f.useEffect)(()=>{V()},[R.time]);let[E,A]=(0,N.Z)(!1),Y=(null==y?void 0:y.vaultYTokenBalance)||0n,F=(0,m.ok)(T,"1"),M=Y>0n?w.Y*o.Pq/Y:0n,I=M>0n?o.Pq*o.Pq/M:0n,q=E?"1 ".concat(i,"=").concat((0,p.d)(I)," ").concat(n):"1 ".concat(n,"=").concat((0,p.d)(M)," ").concat(i),D=Y>F?(w.Y+v)*o.Pq/(Y-F):0n,L=(0,m.Kl)(F,void 0,!0),Z=D>M&&M>0n?(D-M)*BigInt(1e10)/M:0n,H=w.current.yTokenAmountForSwapYT>0n?w.lockedAssetTotal*o.Pq/w.current.yTokenAmountForSwapYT:0n,[O]=(0,u.v7)(t.vault),_=(0,u.R3)(t);return(0,a.jsxs)("div",{className:(0,m.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",G),children:[(0,a.jsxs)("div",{className:"card !p-0 overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex p-5 bg-[#F0D187] gap-5",children:[(0,a.jsx)(l.Z,{className:"text-[3.375rem]",showBg:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-xl text-black font-semibold",children:t.yTokenSymbol}),(0,a.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Yield token"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,a.jsxs)("div",{className:"text-base font-semibold flex gap-5 items-end",children:[(0,a.jsxs)("span",{className:"text-4xl font-medium",children:[O,"x"]}),"Yield Boosted"]}),(0,a.jsx)(TupleTxt,{tit:"Total Minted",sub:(0,a.jsxs)(a.Fragment,{children:[(0,p.d)(w.current.yTokenAmountForSwapYT),(0,a.jsxs)("span",{className:"text-xs ml-auto",children:["1",n," = Yield of ",(0,a.jsx)("br",{}),(0,p.d)(H,2)," ",i]})]})}),y&&(0,a.jsxs)("div",{className:"dark:text-white/60 text-xs whitespace-nowrap gap-1 flex w-full flex-col",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("span",{children:"Epoch ".concat(y.epochId.toString())}),(0,a.jsxs)("span",{className:"scale-90",children:["~",(0,m.Y)((y.startTime+y.duration)*1000n-BigInt(new Date().getTime()))," remaining"]})]}),(0,a.jsx)(h.Z,{value:(e=>{let t=BigInt(Math.floor(new Date().getTime()/1e3));if(t<e.startTime)return 0;if(t-y.startTime>=y.duration)return 100;let s=(t-y.startTime)*100n/e.duration;return parseInt(s.toString())})(y),className:"mt-2 rounded-full overflow-hidden"}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("span",{className:"scale-90",children:(0,m.d3)(1000n*y.startTime,"all-s")}),(0,a.jsx)("span",{className:"scale-90",children:(0,m.d3)((y.startTime+y.duration)*1000n,"all-s")})]})]})]})]}),(0,a.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-1",children:[(0,a.jsx)(P.W,{asset:t.assetSymbol,amount:c,balance:k,setAmount:b}),(0,a.jsx)("div",{className:"text-base font-bold my-2",children:"Receive"}),(0,a.jsx)(P.W,{asset:t.yTokenSymbol,assetIcon:"Venom",readonly:!0,disable:!0,checkBalance:!1,amount:L}),(0,a.jsxs)("div",{className:"text-xs font-medium  flex justify-between select-none",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(g.k$E,{className:"text-sm text-primary cursor-pointer inline-block",onClick:()=>A()}),(0,a.jsx)("span",{children:"Price: ".concat(q)})]}),(0,a.jsx)("span",{children:"Price Impact: ".concat((0,m.Jh)(Z,10,2))})]}),(0,a.jsxs)("div",{className:"text-xs font-medium text-black/80 dark:text-white/80",children:["1\xa0",n," represents the yield ",(0,a.jsx)("span",{className:"font-extrabold text-base",children:"at least"})," 1 ",i,"\xa0until the end of Epoch."]}),(0,a.jsx)(C.v,{className:"mx-auto mt-6",tx:"Buy",disabled:v<=0n||v>k,config:{abi:r.j5,address:t.vault,functionName:"swap",args:[v]},approves:{[t.asset]:v},spender:t.vault,onTxSuccess:()=>{b(""),_()}})]})]})}function BribeTit(e){return(0,a.jsxs)("div",{className:"flex items-center justify-center gap-3",children:[(0,a.jsx)(I.c,{symbol:"GreenDot",size:14}),(0,a.jsx)("span",{className:"text-sm font-medium",children:e.name})]})}function BVaultPools(e){var t;let{bvc:s}=e,{address:n}=(0,B.m)(),[l,i]=(0,f.useState)(!1),c=(0,u.Vw)(s.vault),d=(0,f.useMemo)(()=>l?c.filter(e=>e.bribes.reduce((e,t)=>e+t.bribeAmount,0n)>0n):c,[c,l]),[x,h]=(0,w.Z)(),b="text-black/60 dark:text-white/60 text-sm",[v,j]=(0,f.useState)(null===(t=d[0])||void 0===t?void 0:t.epochId),g=(0,f.useMemo)(()=>d.find(e=>e.epochId==v),[d,v]),N=(null==g?void 0:g.userBalanceYToken)||0n,k=(null==g?void 0:g.userBalanceYTokenSyntyetic)||0n,onRowClick=e=>{var t;j(null===(t=d[e])||void 0===t?void 0:t.epochId)};(0,f.useEffect)(()=>{!v&&d.length&&onRowClick(0)},[d,v]);let T=(null==g?void 0:g.bribes)||[],S=(0,f.useMemo)(()=>{let e=T.find(e=>e.bribeAmount>0n);return e&&0n!=e.bribeTotalAmount?(0,m.Jh)(e.bribeAmount*o.Pq/e.bribeTotalAmount,18):(0,m.Jh)(0n,0n)},[T]),P=(0,u.R3)(s);return(0,a.jsxs)("div",{className:(0,m.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",G),children:[(0,a.jsxs)("div",{ref:x,children:[(0,a.jsxs)("div",{className:"flex items-center gap-8 text-xl font-semibold mb-6",children:[(0,a.jsx)("span",{children:"My Pool Only"}),(0,a.jsx)(Switch,{checked:l,onChange:i})]}),(0,a.jsx)(y.aV,{className:d.length>6?"pr-5":"",width:h.width,height:h.height-52,rowHeight:e=>{let{index:t}=e;return t<d.length-1?76:56},overscanRowCount:6,rowCount:d.length,rowRenderer:function(e){let{key:t,style:s,index:n}=e,l=d[n],r="".concat((0,m.d3)(1000n*l.startTime,"date"),"-").concat((0,m.d3)((l.startTime+l.duration)*1000n,"date"));return(0,a.jsx)("div",{style:s,className:"cursor-pointer",onClick:()=>onRowClick(n),children:(0,a.jsxs)("div",{className:(0,m.cn)("flex h-[56px] card !rounded-lg !p-5 justify-between items-center font-semibold",n<d.length-1?"mb-[20px]":""),children:[(0,a.jsxs)("div",{className:"text-base",children:["Epoch ",d[n].epochId.toString()]}),(0,a.jsx)("div",{className:"text-xs dark:text-white/60",children:r})]})},t)}})]}),(0,a.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-2",children:[(0,a.jsxs)("div",{className:"flex gap-6 items-end font-semibold",children:[(0,a.jsx)("span",{className:"text-xl ",children:"Accumulated Rewards"}),(0,a.jsxs)("span",{className:"text-xs dark:text-white/60",children:["Epoch ",((null==g?void 0:g.epochId)||1n).toString()]})]}),(0,a.jsx)("div",{className:"flex-1 mt-3 rounded-lg border border-solid border-border p-4",children:(0,a.jsx)(q.ZP,{headerClassName:"text-center text-black/60 dark:text-white/60 border-b-0",rowClassName:"text-center",header:["","","Total","Mine",""],span:{1:2,2:1,3:1},data:T.map(e=>["",(0,a.jsx)(BribeTit,{name:e.bribeSymbol},"1"),(0,p.d)(e.bribeTotalAmount),(0,p.d)(e.bribeAmount),""])})}),(0,a.jsxs)("div",{className:"rounded-lg border border-solid border-border px-4 py-2 flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"font-semibold text-xs",children:[(0,a.jsxs)("div",{children:["My yToken: ",(0,a.jsx)("span",{className:(0,m.cn)(b),children:(0,p.d)(N)})]}),(0,a.jsxs)("div",{children:["Time Weighted Points:"," ",(0,a.jsx)("span",{className:(0,m.cn)(b),children:N>0n&&0n==k?"Reward received":(0,p.d)(k)})]})]}),(0,a.jsxs)("div",{children:["My Share: ",(0,a.jsx)("span",{className:(0,m.cn)(b,"text-2xl"),children:S})]})]}),(0,a.jsx)("span",{className:"text-xs mx-auto",children:"You can harvest at the end of Epoch"}),(0,a.jsx)(C.v,{className:"mx-auto mt-4",tx:"Harvest",disabled:!g||!(null==g?void 0:g.settled),config:{abi:r.j5,address:s.vault,functionName:"claimBribes",args:[null==g?void 0:g.epochId]},onTxSuccess:()=>{P()}})]})]})}function BVaultMint(e){let{bvc:t}=e,s=(0,u.nr)(t.vault);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(BVaultP,{bvc:t}),(0,a.jsx)(BVaultY,{bvc:t}),s.epochCount&&(0,a.jsx)(BvaultEpochYtPrices,{bvc:t,epochId:s.epochCount})]})}function BVaultHarvest(e){let{bvc:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(BVaultPools,{bvc:t})})}function BVaultCard(e){let{vc:t}=e,s=(0,j.useRouter)(),[n,l]=t.assetSymbol.split("-"),r=(0,u.nr)(t.vault),i=c.P[t.asset],d=(0,x.R)(e=>e.sliceTokenStore.prices),h=i&&d[i.base]||0n,b=i&&d[i.quote]||0n,v=r.lpBase||0n,f=r.lpQuote||0n,g=v*h/o.Pq,N=f*b/o.Pq,w=g+N,[y]=(0,u.v7)(t.vault),[k]=(0,u.oU)(t.vault),T="Epoch ".concat(((null==r?void 0:r.epochCount)||0n).toString());return(0,a.jsxs)("div",{className:(0,m.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden",{}),onClick:()=>s.push("/b-vaults?vault=".concat(t.vault)),children:[(0,a.jsxs)("div",{className:(0,m.cn)(Z.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center"),children:[(0,a.jsx)(I.c,{symbol:t.assetSymbol,size:44}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:t.assetSymbol}),(0,a.jsx)("div",{className:" text-sm font-medium",children:t.assetSymbol.includes("-")?"LP Token":""})]}),(0,a.jsxs)("div",{className:"ml-auto",children:[(0,a.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,a.jsxs)("div",{className:"text-sm font-medium",children:["$",(0,p.d)(w,2)]})]})]}),(0,Z.BW)(n,v,g),(0,Z.BW)(l,f,N,!0),(0,Z.yP)("Status",r.closed?"status-red":"status-green",r.closed?"Closed":T),(0,Z.yP)("Reward","iBGT","iBGT",!0),(0,Z.Sn)("Panda","Principal Panda",k,"Venom","Boost Venom","".concat(y,"x"))]})}function BVaultCardComming(e){let{symbol:t}=e;return(0,a.jsxs)("div",{className:(0,m.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden h-[367px]",{}),children:[(0,a.jsxs)("div",{className:(0,m.cn)(Z.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center h-20"),children:[(0,a.jsx)(I.c,{symbol:t,size:44}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:t}),(0,a.jsx)("div",{className:" text-sm font-medium",children:t.includes("-")?"LP Token":""})]}),(0,a.jsxs)("div",{className:"ml-auto",children:[(0,a.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,a.jsx)("div",{className:"text-sm font-medium",children:"$-"})]})]}),(0,a.jsx)("div",{className:(0,m.cn)(Z.bG,"col-span-2"),children:(0,a.jsx)("div",{className:"text-xs font-semibold leading-[12px] whitespace-nowrap",children:"New Vault Comming Soon..."})})]})}var H=s(78403);function BVaultAddReward(e){let{bvc:t}=e;return(0,a.jsx)("div",{className:"max-w-4xl mx-auto mt-8 card",children:(0,a.jsx)("div",{className:"relative"})})}s(2987),s(36602);var O=s(6868),_=s(44939),W=s(87031),U=s(59175),K=s(31889),z=s(62600);let J=["mint","harvest"];function BVaultPage(e){let{bvc:t}=e,{address:s}=(0,B.m)(),n=(0,u.nr)(t.vault);(0,R.a)({queryKey:["UpdateVaultDetails",t,n],queryFn:async()=>0n!=n.epochCount&&(await x.w.getState().sliceBVaultsStore.updateEpoches(t),!0)});let l=(0,u.Vw)(t.vault);(0,R.a)({queryKey:["UpdateUserData",t,l,s],queryFn:async()=>0!=l.length&&!!s&&(console.info("epochesOld:",l),await x.w.getState().sliceUserBVaults.updateEpoches(t,s,l),!0)});let{data:i}=(0,R.a)({queryKey:["checkIsBriber",s,t],queryFn:async()=>{if(!s)return!1;let e=(0,H.B)(),a=await Promise.all([e.readContract({abi:r.j5,address:t.vault,functionName:"isBriber",args:[s]}),e.readContract({abi:r.j5,address:t.vault,functionName:"owner"}).then(e=>e==s)]);return a.includes(!0)}}),c=i&&o.hc?[{tab:n.closed?"Redeem":"Mint",content:n.closed?(0,a.jsx)("div",{className:"max-w-4xl mx-auto pt-8",children:(0,a.jsx)(BVaultRedeem,{bvc:t})}):(0,a.jsx)(BVaultMint,{bvc:t})},{tab:"Harvest",content:(0,a.jsx)(BVaultHarvest,{bvc:t})},{tab:"Add Reward",content:(0,a.jsx)(BVaultAddReward,{bvc:t})}]:[{tab:n.closed?"Redeem":"Mint",content:n.closed?(0,a.jsx)("div",{className:"max-w-4xl mx-auto pt-8",children:(0,a.jsx)(BVaultRedeem,{bvc:t})}):(0,a.jsx)(BVaultMint,{bvc:t})},{tab:"Harvest",content:(0,a.jsx)(BVaultHarvest,{bvc:t})}];return(0,a.jsx)(D.x,{listClassName:"flex-wrap p-0 mb-5 md:gap-14",triggerClassName:'text-lg sm:text-xl md:text-2xl py-0 data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap',contentClassName:"gap-5",data:c})}function Vaults(){let e=(0,U.p)(),t=(0,f.useMemo)(()=>W.Fw[e].filter(e=>e.onEnv&&e.onEnv.includes(o.Vi)),[e,o.Vi]),s=(0,j.useSearchParams)(),n=s.get("vault"),l=s.get("tab");J.includes(l);let r=t.find(e=>e.vault==n);return(0,K.Ev)(),(0,a.jsx)(_.E,{children:(0,a.jsx)("div",{className:"w-full max-w-[1160px] px-4 mx-auto md:pb-8",children:r?(0,a.jsx)(BVaultPage,{bvc:r}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"page-title",children:"B-Vaults"}),(0,a.jsx)(O.K,{data:"A pendle-like product with more innovation."}),(0,a.jsxs)(z.r,{numItems:1,numItemsMd:2,numItemsLg:3,className:"gap-5 mt-4",children:[t.map((e,t)=>(0,a.jsx)(BVaultCard,{vc:e},"group_vault_item_".concat(t))),0==t.length&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-USDC"}),(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-WBTC"}),(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-WETH"})]})]})]})})})}},75496:function(e,t,s){"use strict";var a=s(31113),n=s(26361);function DefEmpty(){return(0,a.jsx)("tr",{className:"text-lg font-normal text-center text-black ",children:(0,a.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top"})})}s(64103),t.ZP=e=>{let{header:t,data:s,span:l={},empty:r=(0,a.jsx)(DefEmpty,{}),className:i="relative min-w-full bg-transparent ",headerClassName:c,headerItemClassName:o,tbodyClassName:d="",rowClassName:m,rowStyle:x,cellClassName:u,onClickRow:p,onRowMouseHover:h}=e;return(0,a.jsxs)("table",{className:(0,n.cn)("relative min-w-full bg-transparent ",i),children:[(0,a.jsx)("thead",{className:"",children:(0,a.jsx)("tr",{className:(0,n.cn)("text-left whitespace-nowrap font-normal text-black border-b border-gray-100 pt-5 pb-6 dark:text-slate-50 dark:border-zinc-600",c),children:t.map((e,t)=>(0,a.jsx)("th",{colSpan:l[t],scope:"col",className:(0,n.cn)(0==l[t]?"p-0 w-0":"p-3 font-normal text-sm",o),children:e},t))})}),(0,a.jsxs)("tbody",{className:(0,n.cn)(d),children:[s.map((e,s)=>(0,a.jsx)("tr",{onClick:()=>p&&p(s),onMouseEnter:()=>h&&h(s),onMouseLeave:()=>h&&h(-1),style:"function"==typeof x?x(s):x,className:(0,n.cn)("text-slate-700 dark:text-slate-50 font-medium whitespace-nowrap",p?"cursor-pointer hover:bg-slate-400/10":"","function"==typeof m?m(s):m),children:e.map((e,r)=>r>=t.length?(0,a.jsx)(a.Fragment,{children:e}):(0,a.jsx)("td",{colSpan:l[r],className:(0,n.cn)(0==l[r]?"p-0 w-max":"px-3 py-2 text-sm w-max","function"==typeof u?u(s,r):u),children:e},r))},s)),0===s.length&&r]})]})}}},function(e){e.O(0,[4881,7495,7622,3113,5294,4105,9955,4167,8410,652,4300,5116,2653,2038,3783,2487,5061,1037,5974,7112,6735,7093,604,1744],function(){return e(e.s=92537)}),_N_E=e.O()}]);