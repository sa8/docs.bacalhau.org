"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8199],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6377:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"Pinning data",sidebar_position:2,description:"How to pin data to public storage"},i="Pinning Data",l={unversionedId:"data-ingestion/pin",id:"data-ingestion/pin",title:"Pinning Data",description:"How to pin data to public storage",source:"@site/docs/data-ingestion/pin.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/pin",permalink:"/data-ingestion/pin",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/data-ingestion/pin.md",tags:[],version:"current",lastUpdatedAt:1684171521,formattedLastUpdatedAt:"May 15, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Pinning data",sidebar_position:2,description:"How to pin data to public storage"},sidebar:"documentationSidebar",previous:{title:"From A URL",permalink:"/data-ingestion/from-url"},next:{title:"From S3",permalink:"/data-ingestion/s3"}},s={},p=[{value:"Web3.Storage",id:"web3storage",level:2},{value:"Ways to pin using web3.storage",id:"ways-to-pin-using-web3storage",level:3},{value:"Estuary",id:"estuary",level:2},{value:"Ways to pin using Esturay",id:"ways-to-pin-using-esturay",level:3},{value:"View pinned files",id:"view-pinned-files",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pinning-data"},"Pinning Data"),(0,o.kt)("p",null,"If you have data that you want to make available to your Bacalhau jobs (or other people), you can pin it using a pinning service like Web3.Storage, Estuary, etc. Pinning services store data on behalf of users. The pinning provider is essentially guaranteeing that your data will be available if someone knows the CID. Most pinning services offer you a free tier, so you can try them out without spending any money. "),(0,o.kt)("h2",{id:"web3storage"},"Web3.Storage"),(0,o.kt)("p",null,"This example will demonstrate how to pin data using Web3.Storage. Web3.Storage is a pinning service that is built on top of IPFS and Filecoin. It is free to use for small amounts of data, and has a generous free tier. You can find more information about Web3.Storage ",(0,o.kt)("a",{parentName:"p",href:"https://web3.storage/"},"here"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First you need to create an ",(0,o.kt)("a",{parentName:"li",href:"https://web3.storage/login/"},"account")," (if you don't have one already)."),(0,o.kt)("li",{parentName:"ul"},"Next, sign in and browse to the ",(0,o.kt)("a",{parentName:"li",href:"https://web3.storage/tokens/?create=true"},"Create API Key")," page. Follow the instructions to create an API key. Once created, you will need to copy the API key to your clipboard.")),(0,o.kt)("h3",{id:"ways-to-pin-using-web3storage"},"Ways to pin using web3.storage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Pin a local file using their test client"),": To test that your API key is working, use ",(0,o.kt)("a",{parentName:"li",href:"https://bafybeic5r5yxjh5xpmeczfp34ysrjcoa66pllnjgffahopzrl5yhex7d7i.ipfs.dweb.link/"},"web3.storage's test client"),".")),(0,o.kt)("p",null,"You can now see (or upload) your file via the web3.storage ",(0,o.kt)("a",{parentName:"p",href:"https://web3.storage/account/"},"account page"),"."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Note that you shouldn't share your API key with anyone. Delete this API key once you have finished with this example.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Pin a local file via curl"),": You can also pin a file via curl. Please view the ",(0,o.kt)("a",{parentName:"li",href:"https://web3.storage/docs/reference/http-api/"},"API documentation")," to see all available commands. This example submits a single file to be pinned.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export TOKEN=YOUR_API_KEY\necho hello world > foo.txt\ncurl -X POST https://api.web3.storage/upload -H "Authorization: Bearer ${TOKEN}" -H "X-NAME: foo.txt" -d @foo.txt\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Pin multiple local files via Node.JS"),": Web3.Storage has a ",(0,o.kt)("a",{parentName:"li",href:"https://web3.storage/docs/reference/js-client-library/"},"node.js library")," to interact with their API. The following example requires node.js to be installed. The following code uses a docker container. The javascript code is located on ",(0,o.kt)("a",{parentName:"li",href:"https://web3.storage/docs/intro/#create-the-upload-script"},"their website")," or on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bacalhau-project/examples/blob/main/data-ingestion/nodejs/put-files.js"},"github"),".")),(0,o.kt)("p",null,"First create some files to upload."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile nodejs/test1.txt\nFirst test file\n")),(0,o.kt)("p",null,"Then run the following command, which uses the environmental variable ",(0,o.kt)("inlineCode",{parentName:"p"},"TOKEN")," to authenticate with the API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export TOKEN=YOUR_API_KEY\ndocker run --rm --env TOKEN=$TOKEN -v $PWD/nodejs:/nodejs node:18-alpine ash -c 'cd /nodejs && npm install && node put-files.js --token=$TOKEN test1.txt test2.txt'\n")),(0,o.kt)("p",null,"The response will return the CID of the file, which can now be used as an input to Bacalhau."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Pin a file from a URL via Curl"),": You can use curl to download a file then re-upload to web3.storage. For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export TOKEN=YOUR_API_KEY\ncurl -o train-images-idx3-ubyte.gz http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz\ncurl -X POST https://api.web3.storage/upload -H "Authorization: Bearer ${TOKEN}" -H "X-NAME: train-images-idx3-ubyte.gz" -d @train-images-idx3-ubyte.gz\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Pin a file from a URL via Node.JS"),": You can combine the node.js example above with a ",(0,o.kt)("inlineCode",{parentName:"li"},"wget")," to then upload it to web3.storage.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm --env TOKEN=$TOKEN -v $PWD/nodejs:/nodejs node:18-alpine ash -c 'cd /nodejs && wget http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz && npm install && node put-files.js --token=$TOKEN train-images-idx3-ubyte.gz'\n")),(0,o.kt)("h2",{id:"estuary"},"Estuary"),(0,o.kt)("p",null,"This example show you how to pin data using ",(0,o.kt)("a",{parentName:"p",href:"https://estuary.tech/api-admin"},"estuary"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Before you can upload files via estuary,create an ",(0,o.kt)("a",{parentName:"p",href:"https://estuary.tech"},"account")," (if you don't have one already).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Browse to ",(0,o.kt)("a",{parentName:"p",href:"https://estuary.tech/api-admin"},"the API Key management page")," and create a key."))),(0,o.kt)("h3",{id:"ways-to-pin-using-esturay"},"Ways to pin using Esturay"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Pin a local file via the Esturay UI"),": You can ",(0,o.kt)("a",{parentName:"li",href:"https://estuary.tech/upload"},"browse to the Estuary UI")," to upload a file via your web browser.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Due to the way Estuary batches files for pinning, it may take some time before your file is accessible/listable.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Pin a local file via Curl"),": Please view the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.estuary.tech/tutorial-uploading-your-first-file"},"API documentation")," to see all available commands. This example submits a single file to be pinned.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export TOKEN=YOUR_API_KEY\necho hello world > foo.txt\ncurl -X POST https://upload.estuary.tech/content/add -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: multipart/form-data" -F "data=@foo.txt"\n')),(0,o.kt)("p",null,"The response will return the CID of the file."),(0,o.kt)("h2",{id:"view-pinned-files"},"View pinned files"),(0,o.kt)("p",null,"If the upload was successful, you can view the file via your ",(0,o.kt)("a",{parentName:"p",href:"https://estuary.tech/home"},"estuary account page"),". Alternatively, you can obtain this information from the CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET -H "Authorization: Bearer ${TOKEN}" https://api.estuary.tech/content/list\n')))}d.isMDXComponent=!0}}]);