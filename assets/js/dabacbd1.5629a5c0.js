"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[7729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:4,sidebar_label:"Networking"},i="Accessing the Internet from Jobs",s={unversionedId:"next-steps/networking",id:"next-steps/networking",title:"Accessing the Internet from Jobs",description:"By default, Bacalhau jobs do not have any access to the internet. This is to keep both compute providers and users safe from malicious activities.",source:"@site/docs/next-steps/networking.md",sourceDirName:"next-steps",slug:"/next-steps/networking",permalink:"/next-steps/networking",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/next-steps/networking.md",tags:[],version:"current",lastUpdatedAt:1682980302,formattedLastUpdatedAt:"May 1, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Networking"},sidebar:"documentationSidebar",previous:{title:"GPU Workloads",permalink:"/next-steps/gpu"},next:{title:"Private Cluster",permalink:"/next-steps/private-cluster"}},l={},p=[{value:"Using Data Volumes",id:"using-data-volumes",level:2},{value:"Specifying Jobs to Access the Internet",id:"specifying-jobs-to-access-the-internet",level:2},{value:"Support for networked jobs on the public network",id:"support-for-networked-jobs-on-the-public-network",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accessing-the-internet-from-jobs"},"Accessing the Internet from Jobs"),(0,a.kt)("p",null,"By default, Bacalhau jobs do not have any access to the internet. This is to keep both compute providers and users safe from malicious activities."),(0,a.kt)("p",null,"However, by using data volumes you can read and access your data from within jobs and write back results."),(0,a.kt)("h2",{id:"using-data-volumes"},"Using Data Volumes"),(0,a.kt)("p",null,"When you submit a Bacalhau job, you'll need to specify the internet locations to download data from and write results to. Both ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/docker-workload-onboarding"},"Docker")," and ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/wasm-workload-onboarding"},"WebAssembly")," jobs support these features."),(0,a.kt)("p",null,"When submitting a Bacalhau job, you can specify the CID (Content IDentifier) or HTTP(S) URL to download data from. The data will be retrieved before the job starts and made available to the job as a directory on the filesystem. When running Bacalhau jobs, you can specify as many CIDs or URLs as needed using ",(0,a.kt)("inlineCode",{parentName:"p"},"--input")," which is accepted by both ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau wasm run"),". See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/all-flags"},"command line flags")," for more information."),(0,a.kt)("p",null,"You can write back results from your Bacalhau jobs to your public storage location. By default, jobs will write results to the storage provider using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--publisher")," command line flag. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/all-flags"},"command line flags")," on how to configure this."),(0,a.kt)("p",null,"To use these features, the data to be downloaded has to be known before the job starts. For some workloads, the required data is computed as part of the job if the purpose of the job is to process web results. In these cases, networking may be possible during job execution."),(0,a.kt)("h2",{id:"specifying-jobs-to-access-the-internet"},"Specifying Jobs to Access the Internet"),(0,a.kt)("p",null,"To run Docker jobs on Bacalhau to access the internet, you'll need to specify one of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"full"),": unfiltered networking for any protocol ",(0,a.kt)("inlineCode",{parentName:"li"},"--network=full")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"http"),": HTTP(S)-only networking to a specified list of domains ",(0,a.kt)("inlineCode",{parentName:"li"},"--network=http")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"none"),": no networking at all, the default ",(0,a.kt)("inlineCode",{parentName:"li"},"--network=none"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"none")," will still allow Bacalhau to download and upload data before and after the job.")),(0,a.kt)("p",null,"Jobs using ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," must specify the domains they want to access when the job is submitted. When the job runs, only HTTP requests to those domains will be possible and data transfer will be rate limited to 10Mbit/sec in either direction to prevent ddos."),(0,a.kt)("p",null,"Jobs will be provided with ",(0,a.kt)("a",{parentName:"p",href:"https://about.gitlab.com/blog/2021/01/27/we-need-to-talk-no-proxy/"},(0,a.kt)("inlineCode",{parentName:"a"},"http_proxy")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"https_proxy")," environment variables")," which contain a TCP address of an HTTP proxy to connect through. Most tools and libraries will use these environment variables by default. If not, they must be used by user code to configure HTTP proxy usage."),(0,a.kt)("p",null,"The required networking can be specified using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--network")," flag. For ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," networking, the required domains can be specified using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--domain")," flag, multiple times for as many domains as required. Specifying a domain starting with a ",(0,a.kt)("inlineCode",{parentName:"p"},".")," means that all sub-domains will be included. For example, specifying ",(0,a.kt)("inlineCode",{parentName:"p"},".example.com")," will cover ",(0,a.kt)("inlineCode",{parentName:"p"},"some.thing.example.com")," as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"example.com"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Bacalhau jobs are explicitly prevented from starting other Bacalhau jobs, even if a Bacalhau requestor node is specified on the HTTP allowlist.")),(0,a.kt)("h2",{id:"support-for-networked-jobs-on-the-public-network"},"Support for networked jobs on the public network"),(0,a.kt)("p",null,"Bacalhau has support for ",(0,a.kt)("em",{parentName:"p"},"describing")," jobs that can access the internet during job execution. The ability for compute nodes to run jobs that require internet access depends on what compute nodes are currently part of the network."),(0,a.kt)("p",null,"Compute nodes that join the Bacalhau network do not accept networked jobs by default (i.e. they only accept jobs that specify ",(0,a.kt)("inlineCode",{parentName:"p"},"--network=none"),", which is also the default)."),(0,a.kt)("p",null,"The public compute nodes provided by the Bacalhau network will accept jobs that require HTTP networking as long as the domains are from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau/blob/main/ops/terraform/remote_files/scripts/http-domain-allowlist.txt"},"this allowlist"),"."),(0,a.kt)("p",null,"If you need to access a domain that isn't on the allowlist, you can make a request to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau/discussions"},"Bacalhau Project team")," to include your required domains. You can also set up your own compute node that implements the allowlist you need."))}d.isMDXComponent=!0}}]);