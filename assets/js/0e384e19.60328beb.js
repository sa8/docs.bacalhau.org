"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9671],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),u=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9881:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_label:"Home",sidebar_position:1,slug:"/",hide_title:!0},i=void 0,s={unversionedId:"intro",id:"intro",title:"intro",description:"Bacalhau is a platform for fast, cost efficient, and secure computation by running jobs where the data is generated and stored. With Bacalhau, you can streamline your existing workflows without the need of extensive rewriting by running  arbitrary Docker containers and WebAssembly (wasm) images as tasks. This architecture is also referred to as Compute Over Data (or CoD). Bacalhau was coined from the Portuguese word for salted Cod fish.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/intro.md",tags:[],version:"current",lastUpdatedAt:1685034356,formattedLastUpdatedAt:"May 25, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Home",sidebar_position:1,slug:"/",hide_title:!0},sidebar:"documentationSidebar",next:{title:"Architecture",permalink:"/getting-started/architecture"}},l={},u=[{value:"Why Bacalhau?",id:"why-bacalhau",level:2},{value:"Fast Track \u23f1\ufe0f",id:"fast-track-\ufe0f",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Data ingestion",id:"data-ingestion",level:3},{value:"Security in Bacalhau",id:"security-in-bacalhau",level:3},{value:"Workloads Bacalhau is best suited for",id:"workloads-bacalhau-is-best-suited-for",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Roadmap",id:"roadmap",level:2},{value:"Community",id:"community",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:u},p="wrapper";function h(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"img/bacalhau-horizontal.jpg",alt:"Bacalhau Logo",width:"300"})),(0,r.kt)("h1",{id:"what-is-bacalhau"},"What is Bacalhau?"),(0,r.kt)("p",null,"Bacalhau is a platform for fast, cost efficient, and secure computation by running jobs where the data is generated and stored. With Bacalhau, you can streamline your existing workflows without the need of extensive rewriting by running  arbitrary Docker containers and WebAssembly (wasm) images as tasks. This architecture is also referred to as ",(0,r.kt)("strong",{parentName:"p"},"Compute Over Data")," (or CoD). ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://translate.google.com/?sl=pt&tl=en&text=bacalhau&op=translate"},"Bacalhau")," was coined from the Portuguese word for salted Cod fish"),". "),(0,r.kt)("p",null,"Bacalhau seeks to transform data processing for large-scale datasets to improve cost and efficiency, and to open up data processing to larger audiences. Our goals is to create an open, collaborative compute ecosystem that enables unparalleled collaboration. ",(0,r.kt)("strong",{parentName:"p"},"At the moment we are free volunteer network, enjoy;)")),(0,r.kt)("h2",{id:"why-bacalhau"},"Why Bacalhau?"),(0,r.kt)("p",null,"\u26a1\ufe0f Bacalhau simplifies the process of managing compute jobs by providing a ",(0,r.kt)("strong",{parentName:"p"},"unified platform")," for managing jobs across different regions, clouds, and edge devices."),(0,r.kt)("p",null,"\ud83e\udd1d Bacalhau provides ",(0,r.kt)("strong",{parentName:"p"},"reliable and network-partition")," resistant orchestration, ensuring that your jobs will complete even if there are network disruptions."),(0,r.kt)("p",null,"\ud83d\udea8 Bacalhau provides a ",(0,r.kt)("strong",{parentName:"p"},"complete and permanent audit log")," of exactly what happened, so you can be confident that your jobs are being executed securely."),(0,r.kt)("p",null,"\ud83d\udd10 You can run ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/next-steps/private-cluster"},"private workloads")," to ",(0,r.kt)("strong",{parentName:"p"},"reduce the chance of leaking private information")," or inadvertently sharing your data outside of your organization."),(0,r.kt)("p",null,"\ud83d\udcb8 Bacalhau ",(0,r.kt)("strong",{parentName:"p"},"reduces ingress/egress costs")," since jobs are processed closer to the source. "),(0,r.kt)("p",null,"\ud83e\udd13  You can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/#how-it-works"},"mount your data anywhere")," on your machine, and Bacalhau will be able to run against that data."),(0,r.kt)("p",null,"\ud83d\udca5 You can integrate with services running on nodes to run a jobs, such as on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/data-engineering/DuckDB/"},"DuckDB"),"."),(0,r.kt)("p",null,"\ud83d\udcda Bacalhau operates at scale over parallel jobs. You can batch process petabytes (quadrillion bytes) of data."),(0,r.kt)("p",null,"\ud83c\udf86 You can auto-generate art using a ",(0,r.kt)("a",{parentName:"p",href:"https://www.waterlily.ai/"},"Stable Diffusion AI model")," trained on the chosen artist\u2019s original works."),(0,r.kt)("h2",{id:"fast-track-\ufe0f"},"Fast Track \u23f1\ufe0f"),(0,r.kt)("p",null,"Understand Bacalhau in 1 minute "),(0,r.kt)("p",null,"Install the bacalhau client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,r.kt)("p",null,'Submit a "Hello World" job:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run ubuntu echo Hello World\n")),(0,r.kt)("p",null,"The job runs on the global Bacalhau network."),(0,r.kt)("p",null,"Download your result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau get 63d08ff0..... # make sure to use the right job id from the docker run command\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For a more detailed tutorial, check out our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"Getting Started tutorial"),".")),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The goal of the Bacalhau project is to make it easy to perform distributed computation next to where the data resides. In order to do this, first you need to ingest some data. "),(0,r.kt)("h3",{id:"data-ingestion"},"Data ingestion"),(0,r.kt)("p",null,"Data is identified by its content identifier (CID) and can be accessed by anyone who knows the CID. Here are some options that can help you mount your data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/data-ingestion/from-url"},"Copy data from a URL to public storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/data-ingestion/pin"},"Pin Data to public storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/data-ingestion/s3"},"Copy Data from S3 Bucket to public storage"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The options are not limited to the above mentioned. You can mount your data anywhere on your machine, and Bacalhau will be able to run against that data")),(0,r.kt)("h3",{id:"security-in-bacalhau"},"Security in Bacalhau"),(0,r.kt)("p",null,"You could use environment variables to store sensitive data such as access tokens, API keys, or passwords. These variables can be accessed by Bacalhau at runtime and are not visible to anyone who has access to the code or the server.\nEndpoints can also be used to provide secure access to Bacalhau. This way, the client can authenticate with Bacalhau using the token without exposing their credentials."),(0,r.kt)("h3",{id:"workloads-bacalhau-is-best-suited-for"},"Workloads Bacalhau is best suited for"),(0,r.kt)("p",null,"Bacalhau can be used for a variety of data processing workloads, including machine learning, data analytics, and scientific computing. It is well-suited for workloads that require processing large amounts of data in a distributed and parallelized manner."),(0,r.kt)("h3",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"Once you have more than 10 devices generating or storing around 100GB of data, you're likely to face challenges with processing that data efficiently. Traditional computing approaches may struggle to handle such large volumes, and that's where distributed computing solutions like Bacalhau can be extremely useful. Bacalhau can be used in various industries, including security, web serving, financial services, IoT, Edge, Fog, and multi-cloud. Bacalhau shines when it comes to data-intensive applications like ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/data-engineering/"},"data engineering"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/model-training/"},"model training"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/model-inference/"},"model inference"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/model-training/"},"model training"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/molecular-dynamics/"},"model dynanmics"),", etc."),(0,r.kt)("p",null,"Here are some example tutorials on how you can process your data with Bacalhau:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/model-inference/stable-diffusion-gpu/"},"Stable Diffusion AI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/model-inference/StyleGAN3/"},"Generate Realistic Images using StyleGAN3 and Bacalhau")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/model-inference/object-detection-yolo5/"},"Object Detection with YOLOv5 on Bacalhau")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/miscellaneous/Genomics/"},"Running Genomics on Bacalhau")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/model-training/Training-Pytorch-Model/"},"Training Pytorch Model with Bacalhau"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more tutorials, visit our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/"},"example page"))),(0,r.kt)("h2",{id:"roadmap"},"Roadmap"),(0,r.kt)("p",null,"Our mission is to transform the way that compute is run globally. You can find Bacalhau's ",(0,r.kt)("a",{parentName:"p",href:"https://starmap.site/roadmap/github.com/bacalhau-project/bacalhau/issues/1151"},"Public Roadmap here"),"!"),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("p",null,"Bacalhau has a very friendly community and we are always happy to help you get started:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bacalhau-project/bacalhau/discussions"},"GitHub Discussions")," \u2013 ask anything about the project, give feedback or answer questions that will help other users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bit.ly/bacalhau-project-slack"},"Join the Slack Community")," and go to ",(0,r.kt)("strong",{parentName:"li"},"#bacalhau")," channel \u2013 it is the easiest way engage with other members in the community and get help."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/community/ways-to-contribute"},"Contributing")," \u2013 learn how to contribute to the Bacalhau project.")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"\ud83d\udc49 Continue with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"Bacalhau Getting Started guide")," to learn how to install and run a job with the Bacalhau client."),(0,r.kt)("p",null,"\ud83d\udc49 Or jump directly to try out the different ",(0,r.kt)("a",{parentName:"p",href:"/examples/"},"Examples")," that showcases Bacalhau abilities."))}h.isMDXComponent=!0}}]);