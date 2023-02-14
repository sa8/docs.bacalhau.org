"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8410],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),h=r,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_label:"R - Hello World",sidebar_position:50},l="Running a Simple R Script in Bacalhau",s={unversionedId:"examples/workload-onboarding/r-hello-world/index",id:"examples/workload-onboarding/r-hello-world/index",title:"Running a Simple R Script in Bacalhau",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/r-hello-world/index.md",sourceDirName:"examples/workload-onboarding/r-hello-world",slug:"/examples/workload-onboarding/r-hello-world/",permalink:"/examples/workload-onboarding/r-hello-world/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/r-hello-world/index.md",tags:[],version:"current",lastUpdatedAt:1676395600,formattedLastUpdatedAt:"Feb 14, 2023",sidebarPosition:50,frontMatter:{sidebar_label:"R - Hello World",sidebar_position:50},sidebar:"documentationSidebar",previous:{title:"Rust - WASM",permalink:"/examples/workload-onboarding/rust-wasm/"},next:{title:"R - Facebook Prophet - Custom Container",permalink:"/examples/workload-onboarding/r-custom-docker-prophet/"}},i={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Running an R Script Locally",id:"1-running-an-r-script-locally",level:2},{value:"2. Running an R Script on Bacalhau**",id:"2-running-an-r-script-on-bacalhau",level:2},{value:"Bonus: Futureproofing your R Scripts",id:"bonus-futureproofing-your-r-scripts",level:3}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-simple-r-script-in-bacalhau"},"Running a Simple R Script in Bacalhau"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/r-hello-world/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/r-hello-world/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,r.kt)("p",null,"You can use official Docker containers for each language like R or Python. In this example, we will use the official R container and run it on bacalhau. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please make sure that you have all the dependencies installed and the scripts shouldn\u2019t make any external requests because networking is disabled in Bacalhau.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A working R environment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/getting-started/installation"},"Bacalhau"))),(0,r.kt)("h2",{id:"1-running-an-r-script-locally"},"1. Running an R Script Locally"),(0,r.kt)("p",null,"To install R follow these instructions ",(0,r.kt)("a",{parentName:"p",href:"https://rstudio-education.github.io/hopr/starting.html"},"A Installing R and RStudio | Hands-On Programming with R"),". After R and RStudio is installed, create and run a script called hello.R."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile hello.R\nprint("hello world")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Overwriting hello.R\n")),(0,r.kt)("p",null,"Run the script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript hello.R\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[1] "hello world"\n')),(0,r.kt)("p",null,"Recall that Bacalhau does now provide any external connectivity whilst running a job. So you must place the script in a container or, as shown below, upload the script to IPFS for long term storage. Check out the ",(0,r.kt)("a",{parentName:"p",href:"/examples/data-ingestion/"},"data ingestion documentation")," for more information on how to upload data to IPFS."),(0,r.kt)("p",null,"We've already uploaded the script to IPFS and the CID is: ",(0,r.kt)("inlineCode",{parentName:"p"},"QmVHSWhAL7fNkRiHfoEJGeMYjaYZUsKHvix7L54SptR8ie"),". You can look at this by browsing to one of the HTTP IPFS proxies like ",(0,r.kt)("a",{parentName:"p",href:"https://cloudflare-ipfs.com/ipfs/QmVHSWhAL7fNkRiHfoEJGeMYjaYZUsKHvix7L54SptR8ie/"},"ipfs.io")," or ",(0,r.kt)("a",{parentName:"p",href:"https://w3s.link/ipfs/QmVHSWhAL7fNkRiHfoEJGeMYjaYZUsKHvix7L54SptR8ie"},"w3s.link"),"."),(0,r.kt)("h2",{id:"2-running-an-r-script-on-bacalhau"},"2. Running an R Script on Bacalhau**"),(0,r.kt)("p",null,"Now it's time to run the script on the Bacalhau network. Bacalhau is a decentralised network of compute nodes. To run a job on Bacalhau you need to submit a job request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run \\\n--wait \\\n--id-only \\\n-v QmQRVx3gXVLaRXywgwo8GCTQ63fHqWV88FiwEqCidmUGhk:/hello.R \\\nr-base \\\n-- Rscript hello.R\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"env: JOB_ID=d6ad3239-31d7-4b44-8125-980e89b2dbbb\n")),(0,r.kt)("p",null,"Running the commands will output a UUID (like ",(0,r.kt)("inlineCode",{parentName:"p"},"54506541-4eb9-45f4-a0b1-ea0aecd34b3e"),"). This is the ID of the job that was created. You can check the status of the job with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter ${JOB_ID}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 14:26:05 \x1b[0m\x1b[97;40m d6ad3239 \x1b[0m\x1b[97;40m Docker r-base Rscrip... \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmQ1Yci2Gbptoc... \x1b[0m\n")),(0,r.kt)("p",null,"Where it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Published"),", that means the job is done, and we can get the results."),(0,r.kt)("p",null,"To find out more information about your job, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau describe  ${JOB_ID}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'APIVersion: V1beta1\nClientID: 77cf46c04f88ffb1c3e0e4b6e443724e8d2d87074d088ef1a6294a448fa85d2e\nCreatedAt: "2022-11-23T14:26:05.742836012Z"\nDeal:\n  Concurrency: 1\nExecutionPlan:\n  ShardsTotal: 1\nID: d6ad3239-31d7-4b44-8125-980e89b2dbbb\nJobState:\n  Nodes:\n    QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG:\n      Shards:\n        "0":\n          NodeId: QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG\n          PublishedResults:\n            CID: QmQ1Yci2GbptoccHy46txBK28gtnbKcb7nvFNHYpS6Gbn7\n            Name: job-d6ad3239-31d7-4b44-8125-980e89b2dbbb-shard-0-host-QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG\n            StorageSource: IPFS\n          RunOutput:\n            exitCode: 0\n            runnerError: ""\n            stderr: ""\n            stderrtruncated: false\n            stdout: |\n              [1] "hello world"\n            stdouttruncated: false\n          State: Completed\n          Status: \'Got results proposal of length: 0\'\n          VerificationResult:\n            Complete: true\n            Result: true\n    QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF:\n      Shards:\n        "0":\n          NodeId: QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF\n          PublishedResults: {}\n          State: Cancelled\n          VerificationResult: {}\nRequesterNodeID: QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3\nRequesterPublicKey: CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDF5pYaTdt4UwzslPRDr8XFXv1clttGGIWENlnECLVqswrQVp5xrMsI/57MrJUsMADsz6a/cip9LOxiym3bZVIeZ5WmbrFp48F0Wb7RCELAsUcl/zx4FHCK+A2FKqmuhpY9NyVNGupIDBUCPvCWsDb87Ur//a9BdCOETuab4577e3vFCa3fE+9jn5Fuhoa0m5Z7GfuZtU0W2FX6nc4VIfseMWrWpHD+Bqe/kXs+8RFBVW2AYyzO8lCcHtRC4Lb1Ml1V5hcoAN1pe5yfVuPlT9qyAgCnH3nIIWtvEYz8BnSDgXXTHdT+N+6lrm9oMglNh7TpT6ZbmpioIbJalelAyhG3AgMBAAE=\nSpec:\n  Docker:\n    Entrypoint:\n    - Rscript\n    - hello.R\n    Image: r-base\n  Engine: Docker\n  Language:\n    JobContext: {}\n  Publisher: Estuary\n  Resources:\n    GPU: ""\n  Sharding:\n    BatchSize: 1\n    GlobPatternBasePath: /inputs\n  Timeout: 1800\n  Verifier: Noop\n  Wasm: {}\n  inputs:\n  - CID: QmQRVx3gXVLaRXywgwo8GCTQ63fHqWV88FiwEqCidmUGhk\n    StorageSource: IPFS\n    path: /hello.R\n  outputs:\n  - Name: outputs\n    StorageSource: IPFS\n    path: /outputs\n')),(0,r.kt)("p",null,"Since there is no error we can\u2019t see any error instead we see the state of our job to be complete, that means\nwe can download the results!\nwe create a temporary directory to save our results"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir results\n")),(0,r.kt)("p",null,"To Download the results of your job, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau get ${JOB_ID} --output-dir results\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Fetching results of job 'd6ad3239-31d7-4b44-8125-980e89b2dbbb'...\nResults for job 'd6ad3239-31d7-4b44-8125-980e89b2dbbb' have been written to...\nresults\n")),(0,r.kt)("p",null,"After the download has finished you should\nsee the following contents in results directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls results/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"combined_results\nper_shard\nraw\n")),(0,r.kt)("p",null,"Viewing the result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat results/combined_results/stdout\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[1] "hello world"\n')),(0,r.kt)("h3",{id:"bonus-futureproofing-your-r-scripts"},"Bonus: Futureproofing your R Scripts"),(0,r.kt)("p",null,"You can generate the the job request with the following command. This will allow you to re-run that job in the future."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau describe ${JOB_ID} --spec > job.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat job.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'APIVersion: V1beta1\nClientID: 77cf46c04f88ffb1c3e0e4b6e443724e8d2d87074d088ef1a6294a448fa85d2e\nCreatedAt: "2022-11-23T14:26:05.742836012Z"\nDeal:\n  Concurrency: 1\nExecutionPlan:\n  ShardsTotal: 1\nID: d6ad3239-31d7-4b44-8125-980e89b2dbbb\nJobState:\n  Nodes:\n    QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG:\n      Shards:\n        "0":\n          NodeId: QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG\n          PublishedResults:\n            CID: QmQ1Yci2GbptoccHy46txBK28gtnbKcb7nvFNHYpS6Gbn7\n            Name: job-d6ad3239-31d7-4b44-8125-980e89b2dbbb-shard-0-host-QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG\n            StorageSource: IPFS\n          RunOutput:\n            exitCode: 0\n            runnerError: ""\n            stderr: ""\n            stderrtruncated: false\n            stdout: |\n              [1] "hello world"\n            stdouttruncated: false\n          State: Completed\n          Status: \'Got results proposal of length: 0\'\n          VerificationResult:\n            Complete: true\n            Result: true\n    QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF:\n      Shards:\n        "0":\n          NodeId: QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF\n          PublishedResults: {}\n          State: Cancelled\n          VerificationResult: {}\nRequesterNodeID: QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3\nRequesterPublicKey: CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDF5pYaTdt4UwzslPRDr8XFXv1clttGGIWENlnECLVqswrQVp5xrMsI/57MrJUsMADsz6a/cip9LOxiym3bZVIeZ5WmbrFp48F0Wb7RCELAsUcl/zx4FHCK+A2FKqmuhpY9NyVNGupIDBUCPvCWsDb87Ur//a9BdCOETuab4577e3vFCa3fE+9jn5Fuhoa0m5Z7GfuZtU0W2FX6nc4VIfseMWrWpHD+Bqe/kXs+8RFBVW2AYyzO8lCcHtRC4Lb1Ml1V5hcoAN1pe5yfVuPlT9qyAgCnH3nIIWtvEYz8BnSDgXXTHdT+N+6lrm9oMglNh7TpT6ZbmpioIbJalelAyhG3AgMBAAE=\nSpec:\n  Docker:\n    Entrypoint:\n    - Rscript\n    - hello.R\n    Image: r-base\n  Engine: Docker\n  Language:\n    JobContext: {}\n  Publisher: Estuary\n  Resources:\n    GPU: ""\n  Sharding:\n    BatchSize: 1\n    GlobPatternBasePath: /inputs\n  Timeout: 1800\n  Verifier: Noop\n  Wasm: {}\n  inputs:\n  - CID: QmQRVx3gXVLaRXywgwo8GCTQ63fHqWV88FiwEqCidmUGhk\n    StorageSource: IPFS\n    path: /hello.R\n  outputs:\n  - Name: outputs\n    StorageSource: IPFS\n    path: /outputs\n')))}c.isMDXComponent=!0}}]);