(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2159],{79391:function(){},95702:function(e,t,a){"use strict";a.d(t,{c:function(){return CoinIcon}});var n=a(31113),o=a(26758);let s={iBGT:"webp"};function CoinIcon(e){let{symbol:t,size:a=48,...r}=e,l=t in s?s[t]:"svg",u="".concat(o.G,"/").concat(t,".").concat(l);return(0,n.jsx)("img",{...r,width:a,height:a,src:u,alt:t})}},87031:function(e,t,a){"use strict";a.d(t,{Fw:function(){return o}});var n=a(73216);let o={[n.BG.id]:[{vault:"0xc37dF6905923574AeFEb2aED3Ea3546b4112433a",asset:"0xD69ADb6FB5fD6D06E6ceEc5405D95A37F96E3b96",assetSymbol:"HONEY-USDC",pToken:"0x9CdcCf7784689e1Fe8C2ADDbdEb3b8D34c4F221b",pTokenSymbol:"pHONEY-USDC",yTokenSymbol:"yHONEY-USDC",protocolAddress:"0xF86a9a53D963B7a845F3496a97d0dB11cEc3c4E0",protocolSettingsAddress:"0x97d82C639835F4EfaCC366fdE78CA0c4EC2a2A83"}]}},26758:function(e,t,a){"use strict";a.d(t,{G:function(){return o}});var n=a(28070);let o=n.env.NEXT_PUBLIC_BASE_PATH||""},22139:function(e,t,a){"use strict";a.d(t,{Hj:function(){return s},Pq:function(){return r},SH:function(){return l},_u:function(){return i},pn:function(){return u},v:function(){return o},xb:function(){return DOC_LINK}});var n=a(44769);let o="https://x.com/ZooFinanceIO",s="https://t.co/RJwdwdawe5",r=BigInt(1e18),l=BigInt("31536000"),u=864e5,DOC_LINK=()=>"https://docs.".concat(n.Kh.value),i=!0},44769:function(e,t,a){"use strict";a.d(t,{Kh:function(){return o},Vi:function(){return useConfigDomain}});var n=a(64103);let o={value:"zoofi.io"},s=["zoofi.io","zoofi.xyz"],getAvilableDomain=()=>{var e;if("localhost"==location.hostname||(null===(e=location.hostname.match(/^\d+\.\d+\.\d+\.\d+$/))||void 0===e?void 0:e.length)==1)return s[0];let t=location.hostname.split("."),a=t.slice(-2).join(".");return("ipns"==t[1]&&(a=t[0].replaceAll("-",".")),s.includes(a))?a:s[0]};function useConfigDomain(){(0,n.useEffect)(()=>{o.value=getAvilableDomain()},[])}},88439:function(e,t,a){"use strict";a.d(t,{b:function(){return useMemoOfChainId}});var n=a(64103),o=a(59175);function useMemoOfChainId(e){let t=(0,o.p)(),a=(0,n.useRef)({});return(0,n.useMemo)(()=>(a.current[t]||(a.current[t]=e()),a.current[t]),[t])}},45438:function(e,t,a){"use strict";a.d(t,{i:function(){return i},p:function(){return useUpdatePtypoolApy}});var n=a(19757),o=a(22139),s=a(64103),r=a(33737),l=a(48338),u=a(59175);let i=(0,l.Ue)(e=>({update:e}));function useUpdatePtypoolApy(e,t,a){let l=(0,u.p)(),c=n.iK[l],d=Object.values(e).reduce((e,t)=>t.totalStake+e,0n),{update:m}=i();(0,s.useEffect)(()=>{c.forEach(s=>{let u=a[s.vault];if(s.ptyPoolAboveAddress&&e[s.ptyPoolAboveAddress]&&m({[s.ptyPoolAboveAddress]:{staking:(0,r.v)("0.025",10),matching:0n}}),s.ptyPoolBelowAddress&&e[s.ptyPoolBelowAddress]){let a=e[s.ptyPoolBelowAddress].totalStake*t[n.O1[l]];console.info("hhh:",a);let r=a>0n&&u.settingsDecimals>0n?u.M_ETHx*u.Y*t[s.xTokenAddress]*o.Pq/2n/a/u.settingsDecimals**10n:0n;m({[s.ptyPoolBelowAddress]:{staking:r*10n**10n/o.Pq,matching:0n}})}})},[c,d,e,t,a])}},49340:function(e,t,a){"use strict";let n;a.d(t,{g:function(){return F},A:function(){return FetcherProvider}});var o=a(31113),s=a(73417),r=a(44769),l=a(83606);let instance=()=>(n&&n.defaults.baseURL==="https://earlyaccess-beta.".concat(r.Kh.value,"/api")||(n=l.Z.create({baseURL:"https://earlyaccess-beta.".concat(r.Kh.value,"/api"),timeout:1e4,headers:{"Content-Type":"application/json"}})),n);var u={get:async function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.startsWith("/auth")){let e=localStorage.getItem("earlyaccess-token");if(!e)throw"Need token";n.headers={...n.headers||{},Authorization:e}}let o=await instance().get(e,{...n,params:a});if(console.info("res:",null==o?void 0:o.data),(null==o?void 0:null===(t=o.data)||void 0===t?void 0:t.code)!==200)throw o.data;return o.data.data},post:async function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.startsWith("/auth")){let e=localStorage.getItem("earlyaccess-token");if(!e)throw"Need token";n.headers={...n.headers||{},Authorization:e}}let o=await instance().post(e,a,n);if((null==o?void 0:null===(t=o.data)||void 0===t?void 0:t.code)!==200)throw o.data;return o.data.data}};let getPtypoolYields=async()=>{let e=await u.get("/common/ptypool/yields");return e};var i=a(19757);let getTokens=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return i.iK[e].map(e=>({symbol:e.assetTokenSymbol,address:e.assetTokenAddress})).concat(i.iK[e].map(e=>({symbol:e.xTokenSymbol,address:e.xTokenAddress}))).concat([{symbol:i.TW,address:i.O1[e]}]).concat((i.VQ[e]||[]).map(e=>({symbol:e.assetTokenSymbol,address:e.assetToken}))).filter(e=>!t||e.symbol!==i.Ku)};var c=a(22139),d=a(59175),m=a(64103),b=a(49276),f=a(87958),p=a(41340),v=a(73216),h=a(88439),g=a(26361),y=a(41440),k=a(15506),S=a(45438),A=a(64370),T=a(83978),B=a.n(T),C=a(68940),D=a(62531),Y=a(58714),N=a(35057),E=a(41774),P=a(39264),w=a(18358);let F=(0,m.createContext)({balances:(0,g.Yb)({},0n),totalSupplies:(0,g.Yb)({},0n),prices:(0,g.Yb)({},0n),assetLocked:(0,g.Yb)({},0n),aar:(0,g.Yb)({},0),vaultUSBTotal:(0,g.Yb)({},0n),vaultsMode:(0,g.Yb)({},0),vaultsDiscount:(0,g.Yb)({},!1),vaultsState:(0,g.Yb)({},(0,g.Yb)({},0n)),stableVaultsState:(0,g.Yb)({},(0,g.Yb)({},0n)),earns:(0,g.Yb)({},(0,g.Yb)({},0n)),usbApr:{apr:0n,aprDecimals:10},plainVaultsStat:(0,g.Yb)({},(0,g.Yb)({},0n)),bVaultsData:(0,w.mf)()}),FetcherProvider=e=>{let{children:t}=e,a=(0,k.hp)(),n=(0,d.p)();!function(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,b.m)({chainId:e});m.useMemo(()=>(t&&(v.ON.provider=function(e){var t,a;let{chain:n,transport:o}=e,s={chainId:n.id,name:n.name,ensAddress:null===(a=n.contracts)||void 0===a?void 0:null===(t=a.ensRegistry)||void 0===t?void 0:t.address};return"fallback"===o.type?new f.H(o.transports.map(e=>{let{value:t}=e;return new p.r(null==t?void 0:t.url,s)})):new p.r(o.url,s)}(t)),v.ON.provider),[t])}();let{address:r}=(0,y.m)(),{data:l}=(0,P.K)({address:r,chainId:n,query:{enabled:!!r,refetchOnMount:!1,refetchOnWindowFocus:!1},wandtime:a.time}),u=(0,m.useMemo)(()=>getTokens(n),[n]),{data:T}=(0,k.uX)({contracts:[...u.map(e=>({address:e.address,abi:Y.Wo,functionName:"balanceOf",args:[r],chainId:n}))],query:{enabled:!!r}}),{data:I}=(0,k.uX)({contracts:[...u.map(e=>({address:e.address,abi:Y.Wo,functionName:"totalSupply",chainId:n}))]}),M=(0,h.b)(()=>(0,g.Yb)({},0n));M[i.K8]=(0,g.ok)(l,"value"),u.forEach((e,t)=>{M[e.address]=(0,g.ok)(T,[t,"result"])});let O=(0,h.b)(()=>(0,g.Yb)({},0n));u.forEach((e,t)=>{O[e.address]=(0,g.ok)(I,[t,"result"])});let U=i.iK[n],W=function(){let e=(0,d.p)(),t=i.iK[e],{data:a}=(0,k.uX)({contracts:[...t.map(e=>({vc:e,abi:s.nq,address:e.assetTokenFeed,functionName:"latestPrice"}))]}),{data:n}=(0,k.uX)({query:{gcTime:c.pn},contracts:[...t.map(e=>({abi:s.nq,address:e.assetTokenFeed,functionName:"decimals"}))]});return(0,m.useMemo)(()=>{let e={};return t.forEach((t,o)=>{let s=(0,g.ok)(a,[o,"result"]),r=(0,g.ok)(n,[o,"result"]);e[t.assetTokenAddress]=[s,r]}),e},[a,n,t])}(),{data:_}=(0,k.uX)({contracts:[...U.map(e=>({vc:e,abi:s.WW,address:e.vault,functionName:"assetBalance"}))]}),{data:x}=(0,k.uX)({contracts:[...U.map(e=>({abi:s.WW,address:e.vault,functionName:"usdTotalSupply"}))]}),{data:V}=(0,k.uX)({contracts:[...U.map(e=>({vc:e,abi:s.Wn,address:i.O6[n],functionName:"AAR",args:[e.vault]}))]}),{data:R}=(0,k.uX)({query:{gcTime:c.pn},contracts:[...U.map(e=>({abi:s.WW,address:e.vault,functionName:"AARDecimals"}))]}),{data:q}=(0,k.uX)({contracts:[...U.map(e=>({abi:s.WW,address:e.vault,functionName:"vaultMode"}))]}),{data:K}=(0,k.uX)({contracts:[...U.map(e=>({vc:e,abi:s.Wn,address:i.O6[n],functionName:e.isStable?"getStableVaultState":"getVaultState",args:[e.vault]}))]}),{data:j}=(0,k.uX)({query:{gcTime:c.pn},contracts:[...U.map(e=>({vc:e,abi:s.WW,address:e.vault,functionName:"paramValue",args:[(0,D.$G)("Y",{size:32})]}))]}),X=(0,h.b)(()=>(0,g.Yb)({[i.O1[n]]:c.Pq},0n)),H=(0,h.b)(()=>(0,g.Yb)({},0n)),z=(0,h.b)(()=>(0,g.Yb)({},0n)),L=(0,h.b)(()=>(0,g.Yb)({},0n)),G=(0,h.b)(()=>(0,g.Yb)({},0)),$=(0,h.b)(()=>(0,g.Yb)({},(0,g.Yb)({},0n))),Z=(0,h.b)(()=>(0,g.Yb)({},(0,g.Yb)({},0n))),J=function(e,t,a){let n=(0,h.b)(()=>(0,g.Yb)({},!1)),o=(0,d.p)(),r=i.iK[o],{data:l}=(0,k.uX)({contracts:r.map(e=>({vc:e,abi:s.WW,address:e.vault,functionName:"paramValue",args:[(0,D.$G)("CircuitBreakPeriod",{size:32})]}))});return r.forEach((o,s)=>{if(o.isStable){let e=t[(null==o?void 0:o.vault)||"null"];n[o.vault]=e&&e.M_USDCx>0n&&e.aar<e.AARS}else{let t=(0,g.ok)(l,[s,"result"]),r=e[(null==o?void 0:o.vault)||"null"],u=a[(null==o?void 0:o.vault)||"null"],i=(0,g.ok)(r,"AARBelowCircuitBreakerLineTime"),c=2==u&&r&&((0,g.ok)(r,"aar")>=(0,g.ok)(r,"AARC")||BigInt(Math.floor(new Date().getTime()/1e3))-i>=t);n[o.vault]=c}}),n}($,Z,G);U.forEach((e,t)=>{var a,o,s;let r=(0,g.ok)(_,[t,"result"]),l=(0,g.ok)(x,[t,"result"]),u=(0,g.ok)(W[e.assetTokenAddress],[0]),d=(0,g.ok)(W[e.assetTokenAddress],[1]);L[e.vault]=l;let m=d>0n?u*c.Pq/10n**d:0n;X[e.assetTokenAddress]=m;let b=O[e.xTokenAddress],f=b>0n&&r>0n&&m>0n&&l>0n&&r*m>l*c.Pq?(r*m-l*c.Pq)/b:0n;b>0n&&r>0n&&m>0n&&l>0n&&r*m<l*c.Pq&&(X[i.O1[n]]=r*m/l),X[e.xTokenAddress]=f,H[e.assetTokenAddress]=r;let p=(0,N.b)((0,g.ok)(V,[t,"result"]),parseInt((0,g.ok)(R,[t,"result"]).toString()));z[e.vault]=parseFloat(p),e.isStable?Z[e.vault]=(0,g.Yb)({settingsDecimals:10n,...null==K?void 0:null===(o=K[t])||void 0===o?void 0:o.result,Y:(0,g.ok)(j,[t,"result"])},0n):$[e.vault]=(0,g.Yb)({settingsDecimals:10n,...null==K?void 0:null===(s=K[t])||void 0===s?void 0:s.result,Y:(0,g.ok)(j,[t,"result"])},0n);let v=Z[e.vault];G[e.vault]=e.isStable?v.aar<v.AARS&&v.M_USDC>0n?2:1:(null==q?void 0:null===(a=q[t])||void 0===a?void 0:a.result)||0});let Q=function(){let{address:e}=(0,y.m)(),t=(0,d.p)(),a=(0,m.useMemo)(()=>i.iK[t].filter(e=>!e.isStable&&e.ptyPoolAboveAddress&&e.ptyPoolBelowAddress).map(e=>[{poolAddress:e.ptyPoolBelowAddress,stakeSymbol:i.TW,matchSymbol:e.assetTokenSymbol,earnSymbol:e.xTokenSymbol,earnForMatchSymbol:e.assetTokenSymbol},{poolAddress:e.ptyPoolAboveAddress,stakeSymbol:e.assetTokenSymbol,matchSymbol:i.TW,earnSymbol:e.assetTokenSymbol,earnForMatchSymbol:e.xTokenSymbol}]).flat(),[t]),{data:n}=(0,k.uX)({query:{enabled:!!e},contracts:[...a.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"userStakingBalance",args:[e]}}),...a.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"earnedMatchedToken",args:[e]}}),...a.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"earnedStakingYields",args:[e]}}),...a.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"earnedMatchingYields",args:[e]}})]}),{data:o}=(0,k.uX)({contracts:[...a.map(e=>{let{poolAddress:t}=e;return{abi:s.aT,address:t,functionName:"totalStakingBalance"}})]}),r=(0,E.t)(),{data:l}=(0,A.a)({queryKey:[a,r],initialData:(0,g.Yb)({},0n),queryFn:async()=>{let e=(0,g.Yb)({},0n);if(!r)return e;let t=a.filter(e=>e.matchSymbol==i.Ku),n=await Promise.all(t.map(e=>r.getBalance({address:e.poolAddress})));return t.forEach((t,a)=>{e[t.poolAddress]=n[a]}),e}}),u=(0,h.b)(()=>(0,g.Yb)({},(0,g.Yb)({},0n)));return a.forEach((e,t)=>{let{poolAddress:s,stakeSymbol:r,matchSymbol:i,earnSymbol:c}=e,d=(0,g.ok)(n,[t,"result"]),m=(0,g.ok)(n,[t+a.length,"result"]),b=(0,g.ok)(n,[t+2*a.length,"result"]),f=(0,g.ok)(n,[t+3*a.length,"result"]),p=(0,g.ok)(o,[t,"result"]),v=(0,g.ok)(l,s);u[s]={stakeSymbol:r,matchSymbol:i,earnSymbol:c,stake:d,match:m,earn:b,earnForMatch:f,totalStake:p,balance:v}}),u}(),ee=function(e,t){let a=(0,d.p)(),n=0,o=0n,s=0n;return i.iK[a].forEach(a=>{if(a.isStable){let e=t[a.vault];o+=e.M_USB_USDC*e.Y*e.aar/10n**e.AARDecimals,s+=e.M_USB_USDC,e.M_USB_USDC>0n&&e.Y>0n&&n++}else{let t=e[a.vault];o+=t.M_USB_ETH*t.Y,s+=t.M_USB_ETH,t.M_USB_ETH>0n&&t.Y>0n&&n++}}),{apr:s>0n?o/s:0n,aprDecimals:10}}($,Z);(0,m.useEffect)(()=>{setInterval(()=>{let e=k.hp.getState();B().now()-e.time>=36e5&&e.update()},36e5)},[]);let{value:et={}}=(0,C.Z)(getPtypoolYields,[a.time]);(0,S.p)(Q,X,$);let ea=function(e){let t=(0,d.p)(),{address:a}=(0,y.m)(),n=i.VQ[t]||[],{data:o}=(0,k.uX)({contracts:[...n.map(e=>({abi:s.a4,address:e.vault,functionName:"totalSupply"})),...n.map(e=>({abi:s.a4,address:e.vault,functionName:"balanceOf",args:[a]}))]}),{data:r}=(0,k.uX)({contracts:[{abi:s.pE,address:"0xcD96262Df56127f298b452FA40759632868A472a",functionName:"latestRoundData"},{abi:s.pE,address:"0x0af23B08bcd8AD35D1e8e8f2D2B779024Bd8D24A",functionName:"latestRoundData"}]}),l=(0,g.ok)(r,[0,"result",1]),u=(0,g.ok)(r,[1,"result",1]),c=l*u*10n**2n,m=(0,h.b)(()=>(0,g.Yb)({},(0,g.Yb)({},0n)));return n.forEach((t,a)=>{"weETH"==t.assetTokenSymbol&&(e[t.assetToken]=c),m[t.vault]=m[t.vault],m[t.vault].totalSupply=(0,g.ok)(o,[a,"result"]),m[t.vault].userStaked=(0,g.ok)(o,[a+n.length,"result"])}),m}(X),en=(0,w.Rs)();return(0,o.jsx)(F.Provider,{value:{balances:M,totalSupplies:O,prices:X,assetLocked:H,aar:z,vaultUSBTotal:L,vaultsMode:G,vaultsDiscount:J,vaultsState:$,stableVaultsState:Z,earns:Q,usbApr:ee,ptypoolYields:et,plainVaultsStat:ea,bVaultsData:en},children:t})}},18358:function(e,t,a){"use strict";a.d(t,{Rs:function(){return useBVaultsData},gz:function(){return useCalcClaimable},mf:function(){return defBVaultsData},oU:function(){return useBVaultApy},v7:function(){return useBVaultBoost}});var n=a(73417),o=a(87031),s=a(22139),r=a(59175),l=a(88439),u=a(15506),i=a(26361),c=a(84944),d=a(64370),m=a(64103),b=a(67541),f=a(58714),p=a(62531),v=a(41774),h=a(41440);function defBVaultData(e){return(0,i.Yb)({epoches:[],pTokenTotal:0n,vault:e,userBalanceAssset:0n,userBalancePToken:0n,lockedAssetTotal:0n,assetAmountForSwapYT:0n,yTokenAmountForSwapYT:0n,f2:0n,Y:0n},0n)}function defBVaultsData(){return(0,i.Yb)({},e=>defBVaultData(e))}function useBVaultsData(){let e=(0,r.p)(),t=(0,u.hp)(e=>e.time),a=(0,l.b)(defBVaultsData),s=o.Fw[e],c=(0,v.t)({chainId:e}),{address:m}=(0,h.m)(),{data:g}=(0,d.a)({queryFn:async()=>{if(!c)return[];let e=await Promise.all(s.map(e=>c.readContract({abi:n.j5,address:e.vault,functionName:"epochIdCount"}).then(t=>({...e,epochCount:t})))),getRedeemPoolData=e=>Promise.all([c.readContract({abi:n.gg,address:e,functionName:"settled"}),m?c.readContract({abi:n.gg,address:e,functionName:"earnedAssetAmount",args:[m]}):Promise.resolve(0n),m?c.readContract({abi:n.gg,address:e,functionName:"userRedeemingBalance",args:[m]}):Promise.resolve(0n)]).then(e=>{let[t,a,n]=e;return{settled:t,claimableAssetBalance:a,redeemingBalance:n}}),getEpochData=(e,t)=>Promise.all([c.readContract({abi:n.j5,address:e.vault,functionName:"epochInfoById",args:[e.epochCount-BigInt(t)]}).then(e=>getRedeemPoolData(e.redeemPool).then(t=>({...e,...t}))),c.readContract({abi:n.j5,address:e.vault,functionName:"yTokenTotalSupply",args:[e.epochCount-BigInt(t)]}),c.readContract({abi:n.j5,address:e.vault,functionName:"yTokenTotalSupplySynthetic",args:[e.epochCount-BigInt(t)]}),t>0?c.readContract({abi:n.j5,address:e.vault,functionName:"calcBribes",args:[e.epochCount-BigInt(t),m||b.DR]}):Promise.resolve([]),c.readContract({abi:n.j5,address:e.vault,functionName:"yTokenUserBalance",args:[e.epochCount-BigInt(t),m||b.DR]}),c.readContract({abi:n.j5,address:e.vault,functionName:"yTokenUserBalance",args:[e.epochCount-BigInt(t),e.vault]})]).then(e=>{let[t,a,n,o,s,r]=e;return{...t,yTokenTotal:a,yTokenTotalSupplySynthetic:n,bribes:o.map(e=>({...e})),userBalanceYToken:s,vaultYTokenBalance:r}}),getEpoches=e=>(console.info("getEpoches:",e.assetSymbol,e.epochCount),e.epochCount>0n?Promise.all(Array(parseInt(e.epochCount.toString())).fill(0).map((t,a)=>getEpochData(e,a))):Promise.resolve([])),t=await Promise.all(e.map(e=>Promise.all([getEpoches(e),c.readContract({abi:f.Wo,address:e.pToken,functionName:"totalSupply"}),c.readContract({abi:f.Wo,address:e.asset,functionName:"balanceOf",args:[m||b.DR]}),c.readContract({abi:f.Wo,address:e.pToken,functionName:"balanceOf",args:[m||b.DR]}),c.readContract({abi:n.j5,address:e.vault,functionName:"assetBalance"}),c.readContract({abi:n.j5,address:e.vault,functionName:"paramValue",args:[(0,p.$G)("f2",{size:32})]}),e.epochCount?c.readContract({abi:n.j5,address:e.vault,functionName:"Y"}):Promise.resolve(0n)]).then(t=>{var a,n;let[o,s,r,l,u,c,d]=t;return{epoches:o,pTokenTotal:s,vault:e.vault,userBalanceAssset:r,userBalancePToken:l,lockedAssetTotal:u,f2:c,Y:d,assetAmountForSwapYT:(0,i.aE)(s-((null===(a=o[0])||void 0===a?void 0:a.yTokenTotal)||0n),c),yTokenAmountForSwapYT:s-((null===(n=o[0])||void 0===n?void 0:n.yTokenTotal)||0n)}})));return console.info("bVaultsData:",t),t},queryKey:[t,s,e,m],retry:!0});return null==g||g.forEach(e=>{Object.hasOwn(a,e.vault)||(a[e.vault]=defBVaultData(e.vault));let t=null==g?void 0:g.find(t=>t.vault==e.vault);t&&(a[e.vault]=t)}),a}function useCalcClaimable(e){return(0,m.useMemo)(()=>{let t=e.epoches.filter(e=>e.claimableAssetBalance&&e.settled);return{ids:t.map(e=>e.epochId),claimable:t.reduce((e,t)=>e+t.claimableAssetBalance,0n)}},[e.epoches])}function useBVaultBoost(e){let t=e.assetAmountForSwapYT>0n?100n*e.lockedAssetTotal/e.assetAmountForSwapYT:100000n;return[(0,c.d)(t,0,2),t]}function useBVaultApy(e){let t=e.epoches[0],a=(null==t?void 0:t.yTokenTotalSupplySynthetic)||0n,n=a>0n?e.assetAmountForSwapYT*s.SH*BigInt(1e10)/a:0n;return[(0,i.Jh)(n,10),n]}},84944:function(e,t,a){"use strict";a.d(t,{d:function(){return displayBalance}});var n=a(35057);let displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:18;if(!e)return"0";let fmtNumber=e=>e.toLocaleString("en-US",{maximumFractionDigits:t}),o=Number((0,n.b)(e,a)),s=Number((.1**t).toFixed(t));return o>0&&o<s?o<.001&&o>1e-6?fmtNumber(1e6*o)+"μ":o<1e-6&&o>1e-9?fmtNumber(1e9*o)+"n":o<1e-9&&o>1e-12?fmtNumber(1e12*o)+"p":"<"+s:o<0&&o>-s?o>-.001&&o<1e-6?fmtNumber(1e6*o)+"μ":"≈0":fmtNumber(o)}}}]);