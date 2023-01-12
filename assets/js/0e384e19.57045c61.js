"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_label:"Home",sidebar_position:1,slug:"/",hide_title:!0},i=void 0,l={unversionedId:"intro",id:"intro",title:"intro",description:"Overview",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Home",sidebar_position:1,slug:"/",hide_title:!0},sidebar:"documentationSidebar",next:{title:"Introduction",permalink:"/about-bacalhau/introduction"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Why Bacalhau?",id:"why-bacalhau",level:2},{value:"Our Vision",id:"our-vision",level:2},{value:"Roadmap",id:"roadmap",level:2},{value:"Community",id:"community",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"img/bacalhau-horizontal.jpg",alt:"Bacalhau Logo",width:"300"})),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Bacalhau is a platform for public, transparent, and optionally verifiable distributed computation. It enables users to run arbitrary Docker containers and WebAssembly (wasm) images as tasks against data stored in the InterPlanetary File System (IPFS). "),(0,n.kt)("p",null,"Bacalhau operates on a network of open compute resources made available to serve any data processing workload. This architecture is also referred to as ",(0,n.kt)("strong",{parentName:"p"},"Compute Over Data")," (or CoD). ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://translate.google.com/?sl=pt&tl=en&text=bacalhau&op=translate"},"Bacalhau")," was coined from the Portuguese word for salted Cod fish"),".  ",(0,n.kt)("strong",{parentName:"p"},"At the moment we are free volunteer network, enjoy;)")," "),(0,n.kt)("h2",{id:"why-bacalhau"},"Why Bacalhau?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u26a1\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Process jobs fast"),": Jobs in Bacalhau are processed where the data was created (meaning no ingress/egress) and all jobs are parallel by default."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcb8 ",(0,n.kt)("strong",{parentName:"li"},"Low cost:")," Bacalhau uses the compute that produced the data in the first place and reuses the existing hardware you already have. You also save on any ingress/egress fees you may have been charged. The cost of computing is much cheaper than managed services."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd10 ",(0,n.kt)("strong",{parentName:"li"},"Secure"),": Data is not collected in a central location before processing, meaning all scrubbing and security can be applied at the point of collection."),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcda ",(0,n.kt)("strong",{parentName:"li"},"Large-scale data"),": With Bacalhau, you can manage your own containers that can scale to batch process petabytes (quadrillion bytes) files.")),(0,n.kt)("h2",{id:"our-vision"},"Our Vision"),(0,n.kt)("p",null,"Bacalhau seeks to transform data processing for large-scale datasets to improve cost and efficiency, and to open up data processing to larger audiences. Our goals with the project center around creating an open, collaborative Compute ecosystem. We created Bacalhau to bring useful Compute resources to data stored in Filecoin. We believe that the same benefits of open collaboration on datasets stored in IPFS and Filecoin should be available to generic compute tasks."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(8792).Z,width:"1752",height:"978"})),(0,n.kt)("h2",{id:"roadmap"},"Roadmap"),(0,n.kt)("p",null,"Initially, the Bacalhau project will focus on serving data processing and analytics use cases. Over time, Bacalhau will expand to other Compute workloads. You can find Bacalhau's ",(0,n.kt)("a",{parentName:"p",href:"https://www.starmaps.app/roadmap/github.com/filecoin-project/bacalhau/issues/115"},"Public Roadmap here"),"!"),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("p",null,"Bacalhau has a very friendly community and we are always happy to help you get started:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://filecoin.io/slack"},"Join the Slack Community")," and go to ",(0,n.kt)("strong",{parentName:"li"},"#bacalhau")," channel \u2013 it is the easiest way engage with other members in the community and get help."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/filecoin-project/bacalhau/discussions"},"GitHub Discussions")," \u2013 ask anything about the project, give feedback or answer questions that will help other users."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/community/ways-to-contribute"},"Contributing")," \u2013 learn how to contribute to the Bacalhau project.")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"\ud83d\udc49 Continue with ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"Getting Started guide")," to learn how to install and run a job with the Bacalhau client."),(0,n.kt)("p",null,"\ud83d\udc49 Or jump directly to try out the different ",(0,n.kt)("a",{parentName:"p",href:"/examples/"},"Examples")," that showcases Bacalhau abilities."))}p.isMDXComponent=!0},8792:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bacalhau-high-level-view-4866977e82dcfd7b4ec1872ce327f856.png"}}]);