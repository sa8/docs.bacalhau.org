"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[5202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const l={sidebar_label:"Prolog Script",sidebar_position:4},r="Running a Prolog Script",i={unversionedId:"examples/workload-onboarding/Prolog-Hello-World/index",id:"examples/workload-onboarding/Prolog-Hello-World/index",title:"Running a Prolog Script",description:"stars - badge-generator",source:"@site/docs/examples/workload-onboarding/Prolog-Hello-World/index.md",sourceDirName:"examples/workload-onboarding/Prolog-Hello-World",slug:"/examples/workload-onboarding/Prolog-Hello-World/",permalink:"/examples/workload-onboarding/Prolog-Hello-World/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/Prolog-Hello-World/index.md",tags:[],version:"current",lastUpdatedAt:1684171521,formattedLastUpdatedAt:"May 15, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Prolog Script",sidebar_position:4},sidebar:"documentationSidebar",previous:{title:"Running-Jupyter-Notebook",permalink:"/examples/workload-onboarding/Running-Jupyter-Notebook/"},next:{title:"Python Custom Container",permalink:"/examples/workload-onboarding/Python-Custom-Container/"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running Locally\u200b",id:"running-locally",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of the Command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-prolog-script"},"Running a Prolog Script"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Prolog is intended primarily as a declarative programming language: the program logic is expressed in terms of relations, represented as facts and rules. A computation is initiated by running a query over these relations.\nProlog is well-suited for specific tasks that benefit from rule-based logical queries such as searching databases, voice control systems, and filling templates."),(0,o.kt)("h2",{id:"tdlr"},"TD;LR"),(0,o.kt)("p",null,"A quick guide on how to run a hello world script on Bacalhau"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,o.kt)("h2",{id:"running-locally"},"Running Locally\u200b"),(0,o.kt)("p",null,"To get started, install swipl "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nsudo add-apt-repository ppa:swi-prolog/stable\nsudo apt-get update\nsudo apt-get install swi-prolog\n")),(0,o.kt)("p",null,"Create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"helloworld.pl"),". The following script prints \u2018Hello World\u2019 to the stdout"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile helloworld.pl\nhello_world :- write('Hello World'), nl, \n               halt.\n")),(0,o.kt)("p",null,"Running the script to print out the output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nswipl -q -s helloworld.pl -g hello_world\n")),(0,o.kt)("p",null,"After the script has run successfully locally we can now run it on Bacalhau.  "),(0,o.kt)("p",null,"Before running it on Bacalhau we need to upload it to IPFS."),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"IPFS cli")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!wget https://dist.ipfs.io/go-ipfs/v0.4.2/go-ipfs_v0.4.2_linux-amd64.tar.gz\n!tar xvfz go-ipfs_v0.4.2_linux-amd64.tar.gz\n!mv go-ipfs/ipfs /usr/local/bin/ipfs\n!ipfs init\n!ipfs cat /ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/readme\n!ipfs config Addresses.Gateway /ip4/127.0.0.1/tcp/8082\n!ipfs config Addresses.API /ip4/127.0.0.1/tcp/5002\n!nohup ipfs daemon > startup.log &\n")),(0,o.kt)("p",null,"Run the command below to check if our script has been uploaded. This commmand outputs the CID."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!ipfs add helloworld.pl\n")),(0,o.kt)("p",null,"Copy the CID of the file which in this case is ",(0,o.kt)("inlineCode",{parentName:"p"},"QmYq9ipYf3vsj7iLv5C67BXZcpLHxZbvFAJbtj7aKN5qii")),(0,o.kt)("p",null,"Since the data uploaded To IPFS isn\u2019t pinned, we will need to do that manually. Check this information on how to pin your ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/data-ingestion/pin"},"data")," We recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://nft.storage/"},"NFT.Storage"),"."),(0,o.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,o.kt)("p",null,"To submit a job, run the following Bacalhau command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n-i ipfs://QmYq9ipYf3vsj7iLv5C67BXZcpLHxZbvFAJbtj7aKN5qii:/helloworld.pl \\\n--wait \\\n--id-only \\\nswipl \\\n -- swipl -q -s helloworld.pl -g hello_world\n")),(0,o.kt)("h3",{id:"structure-of-the-command"},"Structure of the Command"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i: ipfs://< CID >:/< name-of-the-script >"),": we will mount the script to the container using the -v flag"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Swipl"),": flag"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-q"),": running in quiet mode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-s"),": load file as a script in this case we want to run the script helloworld.pl"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-g"),": is the name of the function you want to execute in this case its hello_world"),(0,o.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,o.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,o.kt)("p",null,"To view the file, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat results/stdout\n")))}c.isMDXComponent=!0}}]);