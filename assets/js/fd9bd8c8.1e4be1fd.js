"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[5699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,h=p["".concat(s,".").concat(b)]||p[b]||d[b]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"Running a job over S3 data ",sidebar_position:3},i="Running a Job over S3 data",l={unversionedId:"data-ingestion/s3",id:"data-ingestion/s3",title:"Running a Job over S3 data",description:"Here is a quick tutorial on how to copy Data from S3 to a public storage. In this tutorial, we will scrape all the links from a public AWS S3 buckets and then copy the data to IPFS using Bacalhau.",source:"@site/docs/data-ingestion/s3.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/s3",permalink:"/data-ingestion/s3",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/data-ingestion/s3.md",tags:[],version:"current",lastUpdatedAt:1686142130,formattedLastUpdatedAt:"Jun 7, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Running a job over S3 data ",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Pinning data",permalink:"/data-ingestion/pin"},next:{title:"Process",permalink:"/process"}},s={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of the Command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Extract Result CID",id:"extract-result-cid",level:2},{value:"Publishing Results to S3-Compatible Destinations",id:"publishing-results-to-s3-compatible-destinations",level:2},{value:"Publisher Spec",id:"publisher-spec",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Content Identification",id:"content-identification",level:2},{value:"Support for the S3-compatible storage provider",id:"support-for-the-s3-compatible-storage-provider",level:2},{value:"Need Support?",id:"need-support",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-job-over-s3-data"},"Running a Job over S3 data"),(0,o.kt)("p",null,"Here is a quick tutorial on how to copy Data from S3 to a public storage. In this tutorial, we will scrape all the links from a public AWS S3 buckets and then copy the data to IPFS using Bacalhau."),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,o.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash --out job_id\nbacalhau docker run \\\n-i "s3://noaa-goes16/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01*:/inputs,opt=region=us-east-1" \\\n--id-only \\\n--wait \\\nalpine \\\n-- sh -c "cp -r /inputs/* /outputs/"\n')),(0,o.kt)("h3",{id:"structure-of-the-command"},"Structure of the Command"),(0,o.kt)("p",null,"Let's look closely at the command above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'-i "s3://noaa-goes16/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01*:/inputs,opt=region=us-east-1'),": defines S3 objects as inputs to the job. In this case, it will download all objects that match the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01")," from the bucket ",(0,o.kt)("inlineCode",{parentName:"p"},"noaa-goes16")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"us-east-1")," region, and mount the objects under ",(0,o.kt)("inlineCode",{parentName:"p"},"/inputs")," path inside the docker job.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'-- sh -c "cp -r /inputs/* /outputs/"'),": copies all files under ",(0,o.kt)("inlineCode",{parentName:"p"},"/inputs")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"/outputs"),", which is by default the result output directory which all of its content will be published to the specified destination, which is IPFS by default"))),(0,o.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This only works with datasets that are publicly accessible and don't require an AWS account or pay to use buckets.")),(0,o.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results # Temporary directory to store the results\nbacalhau get $JOB_ID --output-dir results # Download the results\n")),(0,o.kt)("p",null,"After the download has finished you should see the following contents in results directory."),(0,o.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,o.kt)("p",null,"To view your file, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls -1 results/outputs\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"OR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170671748180.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170691603180.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170751219598.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170752149454.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170752204183.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170752234173.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170901216521.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170951807462.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171000619157.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171061215161.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171071918365.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171091517487.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171152112459.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171221432456.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171232313205.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171301618116.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171572234151.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171592127442.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171801512461.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171941452463.nc\n")),(0,o.kt)("h2",{id:"extract-result-cid"},"Extract Result CID"),(0,o.kt)("p",null,"Installing jq to extract CID from the result description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"%%bash\nsudo apt update\nsudo apt install jq\nExtracting the CIDs from output json\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"%%bash\nbacalhau describe ${JOB_ID} --json \\\n| jq -r '.State.Executions[].PublishedResults.CID | select (. != null)'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"QmYFhG668yJZmtk84SMMdbrz5Uvuh78Q8nLxTgLDWShkhR\n")),(0,o.kt)("h2",{id:"publishing-results-to-s3-compatible-destinations"},"Publishing Results to S3-Compatible Destinations"),(0,o.kt)("p",null,"You can publish your results to Amazon s3 or other S3-compatible destinations like MinIO, Ceph, or SeaweedFS to conveniently store and share your outputs. W"),(0,o.kt)("h3",{id:"publisher-spec"},"Publisher Spec"),(0,o.kt)("p",null,"To facilitate publishing results, define publishers and their configurations using the PublisherSpec structure. "),(0,o.kt)("p",null,"For S3-compatible destinations, the configuration is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type PublisherSpec struct {\n    Type   Publisher              `json:"Type,omitempty"`\n    Params map[string]interface{} `json:"Params,omitempty"`\n}\n')),(0,o.kt)("p",null,"For Amazon S3, you can specify the PublisherSpec configuration as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"PublisherSpec:\n  Type: S3\n  Params:\n    Bucket: <bucket>              # Specify the bucket where results will be stored\n    Key: <object-key>             # Define the object key (supports dynamic naming using placeholders)\n    Compress: <true/false>        # Specify whether to publish results as a single gzip file (default: false)\n    Endpoint: <optional>          # Optionally specify the S3 endpoint\n    Region: <optional>            # Optionally specify the S3 region\n")),(0,o.kt)("h3",{id:"example-usage"},"Example Usage"),(0,o.kt)("p",null,"Let's explore some examples to illustrate how you can utilize this feature effectively:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Publishing results to S3 using default settings")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau docker run -p s3://<bucket>/<object-key> ubuntu ...\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Publishing results to S3 with a custom endpoint and region:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau docker run -p s3://<bucket>/<object-key>,opt=endpoint=http://s3.example.com,opt=region=us-east-1 ubuntu ...\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Publishing results to S3 as a single compressed file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau docker run -p s3://<bucket>/<object-key>,opt=compress=true ubuntu ...\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Utilizing naming placeholders in the object key")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau docker run -p s3://<bucket>/result-{date}-{jobID} ubuntu ...\n")),(0,o.kt)("h2",{id:"content-identification"},"Content Identification"),(0,o.kt)("p",null,"Tracking content identification and maintaining lineage across different jobs' inputs and outputs can be challenging. To address this, the publisher encodes the SHA-256 checksum of the published results, specifically when publishing a single compressed file. "),(0,o.kt)("p",null,"Here's an example of a sample result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "NodeID": "QmYJ9QN9Pbi6gBKNrXVk5J36KSDGL5eUT6LMLF5t7zyaA7",\n    "Data": {\n        "StorageSource": "S3",\n        "Name": "s3://<bucket>/run3.tar.gz",\n        "S3": {\n            "Bucket": "<bucket>",\n            "Key": "run3.tar.gz",\n            "Checksum": "e0uDqmflfT9b+rMfoCnO5G+cy+8WVTOPUtAqDMnXWbw=",\n            "VersionID": "hZoNdqJsZxE_bFm3UGJuJ0RqkITe9dQ1"\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"support-for-the-s3-compatible-storage-provider"},"Support for the S3-compatible storage provider"),(0,o.kt)("p",null,"To enable support for the S3-compatible storage provider, no additional dependencies are required. However, valid AWS credentials are necessary to sign the requests. The storage provider uses the default credentials chain, which checks the following sources for credentials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Environment variables, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY")," "),(0,o.kt)("li",{parentName:"ul"},"Credentials file ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.aws/credentials")),(0,o.kt)("li",{parentName:"ul"},"IAM Roles for Amazon EC2 Instances")),(0,o.kt)("h2",{id:"need-support"},"Need Support?"),(0,o.kt)("p",null,"For questions, feedback, please reach out in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/discussions"},"forum")))}d.isMDXComponent=!0}}]);