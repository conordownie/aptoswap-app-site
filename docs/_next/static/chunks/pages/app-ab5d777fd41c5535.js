(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{9301:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app",function(){return c(3157)}])},3157:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return R}});var d=c(7568),e=c(4051),f=c.n(e),g=c(5893),h=c(7294),i=c(8730),j=c(5192),k=c(6577),l=c(7838),m=c(8197),n=c(7318),o=c(1664),p=c.n(o),q=c(286),r=c(9694),s=c(9957),t=function(a){var b=a.onClick,c=a.title,d=(0,h.useState)(!1),e=d[0],f=d[1];return(0,g.jsx)("div",{className:"connect-button-frame",style:{backgroundColor:e?"#2e98f1":"#ffffff",cursor:void 0!==b?"pointer":"default"},onMouseOver:function(){f(!0)},onMouseOut:function(){f(!1)},onClick:b,children:(0,g.jsxs)("div",{className:"connect-button-inner-frame",children:[(0,g.jsx)(q.qN,{color:e?"#ffffff":"#2e98f1",size:17}),(0,g.jsx)("span",{style:{color:e?"#ffffff":"#2e98f1"},children:c})]})})},u=function(a){var b=a.children,c=a.href;return(0,g.jsx)(p(),{href:c,passHref:!0,children:(0,g.jsx)("a",{target:"_blank",className:"dtitlebar-nav-item",children:(0,g.jsx)("span",{children:b})})})},v=function(){var a=(0,l.O)(),b=a.connected,c=a.disconnect,d=a.presentModal,e=(0,r.i)(),f=(0,h.useMemo)(function(){return(0,s.A)(e,31)},[e]),i=f.name,j=f.logo;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"dtitle-bar",children:[(0,g.jsxs)("div",{className:"dtitle-bar-logo-frame",children:[j,(0,g.jsx)("div",{className:"dtitle-bar-logo-frame-text",children:(0,g.jsxs)("span",{children:[i,(0,g.jsx)("span",{children:" "}),(0,g.jsx)("span",{style:{fontStyle:"normal",fontWeight:"400",fontSize:"10px",lineHeight:"15px",color:"#9da3ae"},children:(0,g.jsx)("span",{children:"1.1.4"})})]})})]}),(0,g.jsxs)("div",{className:"dtitle-bar-items",children:[(0,g.jsx)(u,{href:"/",children:"Swap"}),(0,g.jsx)(u,{href:"/docs",children:"Documentation"}),(0,g.jsx)("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:"0px 0px 0px 12px"},children:"connected"!==b?(0,g.jsx)(t,{onClick:d,title:"Connect"}):void 0!==c?(0,g.jsx)(t,{onClick:c,title:"Disconnect"}):(0,g.jsx)("div",{style:{backgroundColor:"#2e98f1",width:8,height:8,borderRadius:4,overflow:"hidden"}})})]})]})})},w=function(){return(0,g.jsx)("div",{style:{margin:"12px 0px 0px 0px",padding:"0px"},children:(0,g.jsx)(v,{})})},x=c(5675),y=c.n(x),z=c(730),A=c(998),B=c(2766),C=function(a){var b,c,d,e,f=a.poolInfo,h=a.onClickDeposit,i=a.depositButtonEnabled,k=(0,z._)(f.type.xTokenType),l=(0,z._)(f.type.yTokenType),m=f.getPrice()*Math.pow(10,null!==(b=k.demical)&& void 0!==b?b:0)/Math.pow(10,null!==(c=l.demical)&& void 0!==c?c:0);return(0,g.jsxs)("div",{className:"pool-info-frame",children:[(0,g.jsxs)("div",{className:"pool-info-left-frame",children:[(0,g.jsx)("span",{className:"pool-info-left-frame-title",children:"Pool Token"}),(0,g.jsxs)("div",{className:"pool-info-left-frame-detail-frame",children:[(0,g.jsxs)("div",{className:"pool-info-left-frame-detail-frame-token-pair",children:[(0,g.jsx)("div",{style:{borderRadius:"17px",overflow:"hidden",position:"absolute"},children:(0,g.jsx)(y(),{src:null!==(d=k.logoUrl)&& void 0!==d?d:A.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29})}),(0,g.jsx)("div",{style:{borderRadius:"17px",overflow:"hidden",margin:"0px 0px 0px 17px"},children:(0,g.jsx)(y(),{src:null!==(e=l.logoUrl)&& void 0!==e?e:A.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29})})]}),(0,g.jsxs)("span",{className:"pool-info-left-frame-detail-frame-token-pair-info",children:[(0,g.jsx)("span",{children:k.symbol}),(0,g.jsx)("span",{style:{fontWeight:400},children:"/"}),(0,g.jsx)("span",{children:l.symbol})]})]})]}),(0,g.jsxs)("div",{className:"pool-info-middle-frame-detail-frame",children:[(0,g.jsx)("span",{className:"pool-info-left-frame-title",children:"Price"}),(0,g.jsx)("div",{className:"pool-info-middle-frame-detail-frame-price-info",children:(0,g.jsxs)("span",{children:[(0,g.jsx)("span",{children:(0,B.IZ)(m.toFixed(8))}),(0,g.jsx)("span",{children:" "}),(0,g.jsxs)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:[k.symbol,"/",l.symbol]})]})})]}),(0,g.jsx)(j.Hq,{enabled:i,icon:!0,onClick:function(){void 0!==h&&h(f)}})]})},D=function(a){var b=a.pools,c=a.onClickDeposit,d=a.depositButtonEnabled;return(0,g.jsx)("div",{className:"pool-panel-frame",children:b.map(function(a){return(0,g.jsx)(C,{depositButtonEnabled:d,poolInfo:a,onClickDeposit:c},a.addr)})})},E=function(a){var b=a.pools,c=a.onClickDeposit,d=a.depositButtonEnabled;return(0,g.jsxs)("div",{className:"pool-section-frame",children:[(0,g.jsx)(j.NZ,{children:"Pool"}),(0,g.jsx)(D,{depositButtonEnabled:d,pools:b,onClickDeposit:c})]})},F=function(){var a,b,c,d=(0,r.Y)(),e=null!==(a=d.twitter)&& void 0!==a?a:"https://twitter.com",f=null!==(b=d.github)&& void 0!==b?b:"https://github.com/vividnetwork",h=null!==(c=d.discord)&& void 0!==c?c:"https://discord.com";return(0,g.jsxs)("div",{className:"bottom-section-frame",children:[(0,g.jsxs)("div",{className:"bottom-section-frame-inner-frame",children:[(0,g.jsxs)("div",{className:"bottom-section-frame-inner-frame-left-frame",children:[(0,g.jsx)(q.TR,{size:60}),(0,g.jsx)("span",{children:"Vivid Network"})]}),(0,g.jsxs)("div",{className:"bottom-section-frame-inner-frame-right-frame",children:[(0,g.jsx)(u,{href:e,children:"Twitter"}),(0,g.jsx)(u,{href:f,children:"Github"}),(0,g.jsx)(u,{href:h,children:"Discord"})]})]}),(0,g.jsx)("div",{style:{width:"1px",height:"80px"}})]})},G=c(828),H=c(6628),I=function(a){var b=a.onClick,c=a.enabledMintButton;return(0,g.jsxs)("div",{className:"position-mint-token-frame",children:[(0,g.jsx)("span",{className:"position-mint-token-frame-title",children:"Mint Some Test Token For Test"}),(0,g.jsx)("button",{disabled:!c,onClick:b,className:"position-mint-token-frame-button",children:(0,g.jsx)("span",{className:"position-mint-token-frame-button-inner-span",children:"Mint It !"})})]})},J=function(a){var b,c,d,e,f=a.positionInfo,h=a.onClickHarvestButton,i=f.poolInfo,k=i.type.xTokenType,l=i.type.yTokenType,m=(0,z._)(k),n=(0,z._)(l),o=f.getShareRatio(),p=(0,G.Z)(f.getShareCoinAmounts(),2),q=p[0],r=p[1],s="";s=o<1e-4?(0,B.IZ)((1e4*o).toFixed(8),8)+"‱":o<.001?(0,B.IZ)((1e3*o).toFixed(8),8)+"‰":(0,B.IZ)(Math.min(100*o,100).toFixed(8),8)+"%";var t=new H.NS(q,null!==(b=m.demical)&& void 0!==b?b:0),u=new H.NS(r,null!==(c=n.demical)&& void 0!==c?c:0),v=null!==(d=m.logoUrl)&& void 0!==d?d:A.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,w=null!==(e=n.logoUrl)&& void 0!==e?e:A.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH;return(0,g.jsxs)("div",{className:"pool-info-frame",children:[(0,g.jsxs)("div",{className:"pool-info-left-frame",children:[(0,g.jsx)("span",{className:"pool-info-left-frame-title",children:"Pool Token"}),(0,g.jsxs)("div",{className:"pool-info-left-frame-detail-frame",children:[(0,g.jsxs)("div",{className:"pool-info-left-frame-detail-frame-token-pair",children:[(0,g.jsx)("div",{style:{borderRadius:"17px",overflow:"hidden",position:"absolute"},children:(0,g.jsx)(y(),{src:v,width:29,height:29})}),(0,g.jsx)("div",{style:{borderRadius:"17px",overflow:"hidden",margin:"0px 0px 0px 17px"},children:(0,g.jsx)(y(),{src:w,width:29,height:29})})]}),(0,g.jsxs)("span",{className:"pool-info-left-frame-detail-frame-token-pair-info",children:[(0,g.jsx)("span",{children:m.symbol}),(0,g.jsx)("span",{style:{fontWeight:400},children:"/"}),(0,g.jsx)("span",{children:n.symbol})]})]})]}),(0,g.jsxs)("div",{className:"pool-info-middle-frame-detail-frame",style:{width:"90px"},children:[(0,g.jsx)("span",{className:"pool-info-left-frame-title",children:"Share"}),(0,g.jsx)("div",{className:"pool-info-middle-frame-detail-frame-price-info",children:(0,g.jsx)("span",{children:s})})]}),(0,g.jsxs)("div",{className:"pool-info-middle-frame-detail-frame",style:{width:"260px"},children:[(0,g.jsx)("span",{className:"pool-info-left-frame-title",children:"Value"}),(0,g.jsx)("div",{className:"pool-info-middle-frame-detail-frame-price-info",children:(0,g.jsxs)("span",{children:[(0,g.jsx)(j.$z,{fontSize:16,value:t}),(0,g.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:" "}),(0,g.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:m.symbol}),(0,g.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:"/"}),(0,g.jsx)(j.$z,{fontSize:16,value:u}),(0,g.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:" "}),(0,g.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:n.symbol})]})})]}),(0,g.jsx)(j.eV,{enabled:!0,onClick:h})]})},K=function(a){var b=a.positionInfos,c=a.onClickPositionInfoHarvestButton,d=a.onClickMintTestToken,e=a.enabledMintButton;return(0,g.jsxs)("div",{className:"position-panel-frame",children:[(null!=b?b:[]).map(function(a){return(0,g.jsx)(J,{positionInfo:a,onClickHarvestButton:function(){void 0!==c&&c(a)}},a.lspCoin.addr)}),(0,g.jsx)(I,{enabledMintButton:e,onClick:d})]})},L=function(a){var b=a.positionInfos,c=a.onClickPositionInfoHarvestButton,d=a.enabledMintButton,e=a.onClickMintTestToken;return(0,g.jsxs)("div",{className:"position-section-frame",children:[(0,g.jsx)(j.NZ,{children:"Position"}),(0,g.jsx)(K,{positionInfos:b,onClickPositionInfoHarvestButton:c,enabledMintButton:d,onClickMintTestToken:e})]})},M=c(6875),N=c(8713),O=c(6116),P=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(j.UJ,{}),(0,g.jsx)(m.t,{children:(0,g.jsx)(l.z,{children:(0,g.jsx)(i.R,{children:(0,g.jsxs)(N.S,{children:[(0,g.jsx)(Q,{}),(0,g.jsx)(M.tP,{})]})})})})]})},Q=function(){var a=(0,i.s)(),b=a.client,c=(a.coins,a.pools),e=a.refresh,o=(0,l.O)(),p=o.wallet,q=o.connected,r=(0,N.K)(),s=r.accountAddr,t=r.positionInfos,u=r.refreshPositionInfos,v=null!==p&&"connected"===q&&null!==s,x=(0,h.useCallback)(function(a){if(null===p|| !1===v||null===b){(0,M._N)("Cannot correctly sign the operation, wallet is either not connected or we could not operate the sign operation");return}var c,g=(c=(0,d.Z)(f().mark(function c(){var d;return f().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,p.removeLiqudity({client:b,positionInfo:a});case 3:return d=c.sent,u(),e(),c.abrupt("return",d);case 9:throw c.prev=9,c.t0=c.catch(0),c.t0;case 12:case"end":return c.stop()}},c,null,[[0,9]])})),function(){return c.apply(this,arguments)});(0,M.pn)(b,"Harvest Position",g())},[p,v,M.pn,M._N,u,e]),y=(0,h.useState)(null),A=y[0],B=y[1],C=(0,h.useState)(!1),D=C[0],G=C[1],H=(0,h.useCallback)(function(a){B(a),G(!0)},[]),I=(0,h.useCallback)(function(){if(!v||null===b){(0,M._N)("Wallet is not connected or encoutering error when signing");return}var a,c=p.getMintTestCoinType(),d=null!==(a=(0,z._)(c).demical)&& void 0!==a?a:0;(0,M.pn)(b,"Mint Test Token",p.mintTestCoin({client:b,amount:BigInt(1e3)*(0,O.$)(BigInt(10),d)}))},[v,b,p,M.pn]);return(0,g.jsxs)("div",{children:[(0,g.jsxs)(j.Ku,{width:1290,children:[(0,g.jsx)(w,{}),(0,g.jsxs)("div",{className:"swap-section-frame",children:[(0,g.jsx)(j.NZ,{children:"Swap"}),(0,g.jsx)(k.O,{})]}),(0,g.jsx)(L,{positionInfos:t,onClickPositionInfoHarvestButton:x,onClickMintTestToken:I,enabledMintButton:v}),(0,g.jsx)(E,{pools:c,onClickDeposit:H,depositButtonEnabled:v}),(0,g.jsx)(j.nv,{}),(0,g.jsx)(F,{})]}),(0,g.jsx)(m.u,{presented:D,setPresented:G,children:(0,g.jsx)(n.TJ,{poolInfo:A,wallet:p,client:b,accountAddr:s,dismissModal:function(){G(!1)}})})]})},R=P}},function(a){a.O(0,[675,240,192,854,774,888,179],function(){var b;return a(a.s=9301)}),_N_E=a.O()}])