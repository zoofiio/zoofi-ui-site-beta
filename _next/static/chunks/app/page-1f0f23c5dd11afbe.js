(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{79391:function(){},20498:function(e,t,n){Promise.resolve().then(n.bind(n,17465))},17465:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var s=n(31113),o=n(93680),a=n(26537),r=n(30639),l=n(4283),u=n(95702),i=n(44939),c=n(19757),d=n(59175),f=n(5035),p=n(47518),v=n(26361),m=n(69708),x=n(64103),S=n(17695),b=x.useState,esm_useHover=function(e){var t,n,s=b(!1),o=s[0],a=s[1];return"function"==typeof e&&(e=e(o)),[x.cloneElement(e,{onMouseEnter:(t=e.props.onMouseEnter,function(e){(t||S.ZT)(e),a(!0)}),onMouseLeave:(n=e.props.onMouseLeave,function(e){(n||S.ZT)(e),a(!1)})}),o]},h=n(59781);let T=[{icon:o.Z,tit:"Interest Bear",sub:"Stablecoin",hoverTextColor:"#ff8080"},{icon:a.Z,tit:"Leverage Bull",sub:"Margin Token",hoverTextColor:"#53baff"},{icon:r.Z,tit:"Principal Panda",sub:"Principal Token",hoverTextColor:"#0ed19a"},{icon:l.Z,tit:"Boost Bribe Venom",sub:"Yield Token",hoverTextColor:"#ebc013"}];function CardItem(e){let[t]=esm_useHover(t=>(0,s.jsxs)("div",{className:(0,v.cn)("card flex items-center gap-5 py-4",e.className),children:[(0,s.jsx)(e.icon,{showBg:t,showOutline:!0,className:(0,v.cn)("text-[3.375rem] ",t?"text-white":"text-black dark:text-white")}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,s.jsx)("span",{style:{color:t?e.hoverTextColor:""},className:(0,v.cn)("font-semibold text-xl","text-black dark:text-white"),children:e.tit}),(0,s.jsx)("span",{className:"font-medium text-xs opacity-50 dark:text-white",children:e.sub})]})]},e.tit));return t}function Home(){let e=(0,d.p)(),{tvl:t}=(0,f.w)();(0,f.R)(),(0,p.m)();let n=c.iK[e];n.find(e=>"USDB"==e.assetTokenSymbol);let o=(0,m.useRouter)();return(0,s.jsx)(i.E,{children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row max-w-[1160px] mx-auto px-4 gap-10 md:gap-20 h-[calc(100vh-100px)] pt-[5vh] md:pt-[10vh] pb-8 md:justify-center",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex md:mt-10 text-[5vw] md:text-[min(2.5rem,2.7vw)] !leading-normal font-semibold text-slate-700 dark:text-slate-50",children:["A Structured Protocol for Better ",(0,s.jsx)("br",{}),"Liquidity Utilization."]}),(0,s.jsxs)("div",{className:"flex gap-5 mt-8 w-fit justify-start flex-wrap",children:[(0,s.jsx)("button",{className:"btn-primary !text-sm w-[150px] !mx-0  mt-0",onClick:()=>(0,h.k)(o),children:"Launch Dapp"}),(0,s.jsxs)("button",{className:"text-sm h-10 rounded-lg bg-btndis w-[193px] flex justify-center items-center gap-2",onClick:()=>open("https://www.berachain.com","_blank"),children:[(0,s.jsx)(u.c,{size:24,symbol:"berachain"}),"Built on Berachain"]})]})]}),(0,s.jsx)("div",{className:"flex flex-col gap-6",children:T.map(e=>(0,s.jsx)(CardItem,{...e},e.tit))})]})})}},88439:function(e,t,n){"use strict";n.d(t,{b:function(){return useMemoOfChainId}});var s=n(64103),o=n(59175);function useMemoOfChainId(e){let t=(0,o.p)(),n=(0,s.useRef)({});return(0,s.useMemo)(()=>(n.current[t]||(n.current[t]=e()),n.current[t]),[t])}},45438:function(e,t,n){"use strict";n.d(t,{i:function(){return c},p:function(){return useUpdatePtypoolApy}});var s=n(19757),o=n(22139),a=n(3106),r=n(64103),l=n(33737),u=n(93108),i=n(59175);let c=(0,u.Ue)(e=>({update:e}));function useUpdatePtypoolApy(e){let t=(0,i.p)(),n=s.iK[t],u=(0,a.o)(e=>e.sliceLVaultsStore.lvaults,["sliceLVaultsStore.lvaults"]);(0,r.useEffect)(()=>{console.info("updatePtypoolApy"),n.forEach(n=>{let a=u[n.vault];if(n.ptyPoolAboveAddress&&a&&a.sellPoolTotalStaking&&c.getState().update({[n.ptyPoolAboveAddress]:{staking:(0,l.v)("0.025",10),matching:0n}}),n.ptyPoolBelowAddress&&a&&a.buyPoolTotalStaking&&!a.isStable){let r=a&&a.sellPoolTotalStaking*e[s.O1[t]],l=r>0n&&a.settingsDecimals>0n?a.M_ETHx*a.Y*e[n.xTokenAddress]*o.Pq/2n/r/a.settingsDecimals**10n:0n;c.getState().update({[n.ptyPoolBelowAddress]:{staking:l*10n**10n/o.Pq,matching:0n}})}})},[n,u,e,t])}},5035:function(e,t,n){"use strict";n.d(t,{R:function(){return useTVLV1},w:function(){return useTVL}});var s=n(19757),o=n(59175),a=n(64103),r=n(52671),l=n(22139),u=n(15506),i=n(70258),c=n(26361),d=n(3106),f=n(83978),p=n.n(f),v=n(87031),m=n(90168);function useTVLV1(){var e,t;let n=(0,o.p)(),d=null===(e=s.Lh[n])||void 0===e?void 0:e[0],f=null===(t=s.Lh[n])||void 0===t?void 0:t[1],{prices:p}=(0,a.useContext)(r.g),{data:v}=(0,u.uX)({contracts:[{abi:i.Wn,address:s.O6[n],functionName:"getVaultState",args:[null==d?void 0:d.vault]},{abi:i.Wn,address:s.O6[n],functionName:"getStableVaultState",args:[null==f?void 0:f.vault]},{abi:i.aT,address:null==d?void 0:d.ptyPoolAboveAddress,functionName:"totalStakingBalance"}]}),m=(0,c.ok)(v,[0,"result","M_ETH"]),x=(0,c.ok)(v,[1,"result","M_USDC"]),S=(0,c.ok)(v,[2,"result"]);return(m+S)*p[s.K8]/l.Pq+x*p[null==f?void 0:f.assetTokenAddress]/l.Pq}function useTVL(){let e=(0,o.p)(),t=s.iK[e],n=v.Fw[e].filter(e=>(e.onEnv||[]).includes(l.Vi)),{prices:u}=(0,a.useContext)(r.g),i=(0,d.o)(e=>e.sliceLVaultsStore.lvaults),c=(0,d.o)(e=>e.sliceTokenStore.totalSupply),f=t.map(e=>{var t;return(null===(t=i[e.vault])||void 0===t?void 0:t.usbTotalSupply)||0n}).reduce((e,t)=>e+t,0n),x=(0,d.o)(e=>e.sliceBVaultsStore.bvaults),S=(0,d.o)(e=>e.sliceTokenStore.prices),b=[{name:s.TW,symbol:s.TW,address:s.O1[e]}].concat(t.map(e=>({name:e.xTokenSymbol+e.version,symbol:e.xTokenSymbol,address:e.xTokenAddress}))).map(e=>{let t=u[e.address],n=e.symbol==s.TW?f:c[e.address]||0n,o=t*n/l.Pq;return{...e,price:t,amount:n,usdAmount:o}}).concat(t.filter(e=>!e.isStable).map(e=>{let t=i[e.vault],n=((null==t?void 0:t.sellPoolTotalStaking)||0n)+((null==t?void 0:t.buyPoolBalance)||0n),s=u[e.assetTokenAddress],o=s*n/l.Pq;return{name:e.assetTokenSymbol+e.version,symbol:e.assetTokenSymbol,address:e.assetTokenAddress,price:s,amount:n,usdAmount:o}})).concat(p().chain(n).mapValues(e=>{let t=m.P[e.asset],n=x[e.vault];t&&n&&n.lpLiq&&n.lpBase&&n.lpQuote&&S[t.base]&&S[t.quote];let s=S[e.asset]||0n,o=(null==n?void 0:n.lpLiq)||0n;return{name:e.assetSymbol,symbol:e.assetSymbol,address:e.asset,price:s,amount:o,usdAmount:s*o/l.Pq}}).values().reduce((e,t)=>{let n=e.find(e=>e.symbol==t.symbol);return n?(n.amount+=t.amount,n.usdAmount+=t.usdAmount,e):[...e,t]},[]).value()),h=b.reduce((e,t)=>e+t.usdAmount,0n);return{tvl:h,tvlItems:b}}},47518:function(e,t,n){"use strict";n.d(t,{m:function(){return useTokenApys}});var s=n(26361),o=n(88439),a=n(45438),r=n(19757),l=n(52671),u=n(3106),i=n(39577),c=n(64103),d=n(33737),f=n(59175);function useTokenApys(){let e=(0,o.b)(()=>(0,s.Yb)({},0n)),t=(0,f.p)(),{prices:n,usbApr:p}=(0,c.useContext)(l.g),v=(0,i.aS)(),m=(0,a.i)(),x=(0,u.o)(e=>e.sliceLVaultsStore.lvaults,["sliceLVaultsStore.lvaults"]);return(0,c.useMemo)(()=>{let n=r.iK[t],o=(0,s.ok)(m[n[0].ptyPoolBelowAddress],"staking");e[r.O1[t]]=p.apr,e.USB_END=p.apr+o;let a=(0,d.v)("0.1",10);return n.forEach(t=>{let n=x[t.vault];if(t.assetTokenAddress!=r.K8&&n){let s=v[t.vault]>1n?(0,d.v)("".concat((v[t.vault]-1).toFixed(2)),10):0n,o=(0,d.v)("1",10);e[t.xTokenAddress]=(s*(a-n.Y*n.aar/o)+a*o)/o}}),null},[t,n,v,p,m]),e}},15506:function(e,t,n){"use strict";n.d(t,{D2:function(){return useWandContractRead},uX:function(){return useWandContractReads}}),n(78403);var s=n(83978),o=n.n(s);n(64103);var a=n(30308),r=n(59307),l=n(93108);let u=(0,l.Ue)(e=>({time:o().now(),update:()=>{e({time:o().now()})}}));function useWandContractRead(e){let{time:t}=u();return(0,a.u)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}function useWandContractReads(e){let{time:t}=u();return(0,r.N)({...e,query:{placeholderData:e=>e,refetchOnMount:!1,refetchOnWindowFocus:!1,...e.query||{}},wandtime:t})}},52671:function(e,t,n){"use strict";n.d(t,{g:function(){return h},A:function(){return FetcherProvider}});var s=n(31113),o=n(19757),a=n(22139),r=n(59175),l=n(64103),u=n(25233),i=n(87958),c=n(41340),d=n(73216),f=n(88439),p=n(45438),v=n(26361),m=n(64370),x=n(3106),S=n(18358),b=n(39577);let h=(0,l.createContext)({prices:(0,v.Yb)({},0n),usbApr:{apr:0n,aprDecimals:10}}),FetcherProvider=e=>{let{children:t}=e;(0,S.d6)();let n=(0,r.p)();!function(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,u.m)({chainId:e});l.useMemo(()=>(t&&(d.ON.provider=function(e){var t,n;let{chain:s,transport:o}=e,a={chainId:s.id,name:s.name,ensAddress:null===(n=s.contracts)||void 0===n?void 0:null===(t=n.ensRegistry)||void 0===t?void 0:t.address};return"fallback"===o.type?new i.H(o.transports.map(e=>{let{value:t}=e;return new c.r(null==t?void 0:t.url,a)})):new c.r(o.url,a)}(t)),d.ON.provider),[t])}();let T=(0,f.b)(()=>(0,v.Yb)({[o.O1[n]]:a.Pq},0n));(0,b.$$)(T);let k=(0,b.UM)();return(0,p.p)(T),(0,m.a)({queryKey:["updateDefTokenList"],staleTime:36e5,queryFn:async()=>(await x.w.getState().sliceTokenStore.updateDefTokenList(),!0)}),(0,s.jsx)(h.Provider,{value:{prices:T,usbApr:k},children:t})}},39577:function(e,t,n){"use strict";n.d(t,{$$:function(){return useSetLVaultPrices},UM:function(){return useUSBApr},aS:function(){return useValutsLeverageRatio},hC:function(){return useLVault},hY:function(){return useUserLVault},pK:function(){return d},so:function(){return useUpLVaultOnUserAction},z6:function(){return useVaultLeverageRatio}});var s=n(19757),o=n(22139),a=n(59175),r=n(88439),l=n(26361),u=n(3106),i=n(96670),c=n(73216);let d=(0,l.Yb)({vaultMode:0,discountEnable:!1},0n),f=(0,l.Yb)({},0n);function useLVault(e){return(0,u.o)(t=>t.sliceLVaultsStore.lvaults[e]||d,["sliceLVaultsStore.lvaults.".concat(e)])}function useUserLVault(e){return(0,u.o)(t=>t.sliceLVaultsStore.user[e]||f,["sliceLVaultsStore.user.".concat(e)])}function useVaultLeverageRatio(e){let t=useLVault(e.vault),n=(0,l.pF)(t.aar,t.AARDecimals);return Math.max(0,1+1/(n-1))}function useValutsLeverageRatio(){let e=(0,a.p)(),t=s.iK[e],n=(0,r.b)(()=>(0,l.Yb)({},0)),o=(0,u.o)(e=>e.sliceLVaultsStore.lvaults);return t.forEach(e=>{let t=o[e.vault],s=t?(0,l.pF)(t.aar,t.AARDecimals):0;n[e.vault]=Math.max(0,1+1/(s-1))}),n}function useSetLVaultPrices(e){let t=(0,u.o)(e=>e.sliceLVaultsStore.lvaults),n=(0,u.o)(e=>e.sliceTokenStore.totalSupply),r=(0,a.p)();s.iK[r].forEach(a=>{let l=t[a.vault]||d,u=l.assetBalance,i=l.latestPrice,c=l.usbTotalSupply,f=n[a.xTokenAddress]||0n,p=f>0n&&u>0n&&i>0n&&c>0n&&u*i>c*o.Pq?(u*i-c*o.Pq)/f:0n;e[a.xTokenAddress]=p,e[a.assetTokenAddress]=i,f>0n&&u>0n&&i>0n&&c>0n&&u*i<c*o.Pq&&(e[s.O1[r]]=u*i/c)})}function useUSBApr(){let e=(0,a.p)(),t=(0,u.o)(e=>e.sliceLVaultsStore.lvaults),n=0,o=0n,r=0n;return s.iK[e].forEach(e=>{let s=t[e.vault]||d;s.isStable?(o+=s.M_USB_USDC*s.Y*s.aar/10n**s.AARDecimals,r+=s.M_USB_USDC,s.M_USB_USDC>0n&&s.Y>0n&&n++):(o+=s.M_USB_ETH*s.Y,r+=s.M_USB_ETH,s.M_USB_ETH>0n&&s.Y>0n&&n++)}),{apr:r>0n?o/r:0n,aprDecimals:10}}function useUpLVaultOnUserAction(e){let{address:t}=(0,i.m)();return()=>{(0,l.XD)(async()=>{if(!t)return;let n=u.w.getState().sliceLVaultsStore,o=[e.assetTokenAddress,e.xTokenAddress,s.O1[(0,c.BV)()]];await Promise.all([n.updateLVaults([e]),n.updateUserLVault(e,t),u.w.getState().sliceTokenStore.updateTokensBalance(o,t),u.w.getState().sliceTokenStore.updateTokenTotalSupply(o)])},3,1e3).catch(console.error)}}},17695:function(e,t,n){"use strict";n.d(t,{S1:function(){return off},ZT:function(){return noop},jU:function(){return s},on:function(){return on}});var noop=function(){};function on(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function off(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var s="undefined"!=typeof window}},function(e){e.O(0,[4881,7495,7622,9590,4167,7625,1037,5974,8488,7093,604,1744],function(){return e(e.s=20498)}),_N_E=e.O()}]);