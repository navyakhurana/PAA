"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[962],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},52530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:7},o="Push data to the SaaS API",s={unversionedId:"project-panel/basic/push-data-to-saas-api/README",id:"project-panel/basic/push-data-to-saas-api/README",title:"Push data to the SaaS API",description:"The SaaS sample application is equipped with a built-in SaaS API, that your subscribers can use, to push data to their Tenant database containers or to modify existing data. In this part of the tutorial, you will learn how to connect to this API endpoint as a SaaS Tenant and push some sample data.",source:"@site/docs/project-panel/2-basic/6-push-data-to-saas-api/README.md",sourceDirName:"project-panel/2-basic/6-push-data-to-saas-api",slug:"/project-panel/basic/push-data-to-saas-api/",permalink:"/PAA/@navyakhurana-navyakhurana-patch-3/project-panel/basic/push-data-to-saas-api/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya khurana",lastUpdatedAt:1693289879,formattedLastUpdatedAt:"Aug 29, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Subscribe a Tenant Subaccount",permalink:"/PAA/@navyakhurana-navyakhurana-patch-3/project-panel/basic/subscribe-consumer-subaccount/"},next:{title:"Test the application",permalink:"/PAA/@navyakhurana-navyakhurana-patch-3/project-panel/basic/test-the-application/"}},l={},p=[{value:"1. SaaS API access",id:"1-saas-api-access",level:2},{value:"2. Further Information",id:"2-further-information",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"push-data-to-the-saas-api"},"Push data to the SaaS API"),(0,r.kt)("p",null,"The SaaS sample application is equipped with a built-in SaaS API, that your subscribers can use, to push data to their Tenant database containers or to modify existing data. In this part of the tutorial, you will learn how to connect to this API endpoint as a SaaS Tenant and push some sample data. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#push-data-to-the-saas-api"},"Push data to the SaaS API"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-saas-api-access"},"1. SaaS API access")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-further-information"},"2. Further Information"))))),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Basic Version"),", we will keep it short and simple and explain how to interact with the SaaS API using the HTTP sample files provided as part of the GitHub repository. You can also run similar requests using tools like Postman or Insomnia. "),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/API_ArchDetails.png&quot; width=&quot;600&quot; /&gt;",src:a(10812).Z,width:"865",height:"355"})),(0,r.kt)("h2",{id:"1-saas-api-access"},"1. SaaS API access"),(0,r.kt)("p",null,"Below you can see the tables of the Tenant data model which can be maintained by subscribers using the SaaS API. Besides product master data, SaaS subscribers can also use the API for transactional data allowing them to prefill their Sustainability assessments."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/DM_Tables.png&quot; width=&quot;500&quot; /&gt;",src:a(71864).Z,width:"1564",height:"798"})),(0,r.kt)("p",null,"The main entities like Products, Sales Orders and further Recycling data can be maintained using the API. As you can see, also some sample endpoints are provided for bulk inserts, updates, and upserts (implemented using a SAP HANA Stored Procedure or native CAP Upsert features). "),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/API_Endpoints01.png&quot; width=&quot;300&quot; /&gt;",src:a(3623).Z,width:"1011",height:"633"}),"\n",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/API_Endpoints02.png&quot; width=&quot;300&quot; /&gt;",src:a(28975).Z,width:"1110",height:"754"})),(0,r.kt)("p",null,"To connect to the SaaS API as a subscriber, make sure you followed all steps described in ",(0,r.kt)("strong",{parentName:"p"},"Subscribe a Consumer Subaccount")," (",(0,r.kt)("a",{parentName:"p",href:"/PAA/@navyakhurana-navyakhurana-patch-3/project-panel/basic/subscribe-consumer-subaccount/"},"click here"),"). You will need the service binding credentials which you created for the API Broker service instance in the Subscriber Subaccount. If you haven't created this service binding yet, please go back and do it now. "),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/API_ServiceKey.png&quot; width=&quot;400&quot; /&gt;",src:a(65655).Z,width:"893",height:"477"})),(0,r.kt)("p",null,"1.1. Get started by switching to the ",(0,r.kt)("strong",{parentName:"p"},"/code/http")," directory. Here you will find sample API calls that you can use to push sample data to Tenant database containers using the multitenant SaaS API. In this sample we will push ",(0,r.kt)("strong",{parentName:"p"},"Product")," sample data (",(0,r.kt)("em",{parentName:"p"},"apiProducts.http"),") to the SaaS API which will be stored in the respective Tenant database container. Make sure you have the required plugin (e.g., for VS Code) installed to execute requests in HTTP files.  "),(0,r.kt)("p",null,"1.2. Each of the HTTP files contains a header section, in which you can provide the tenant-specific Client Credentials. Those are used to connect to the SaaS API as a specific Tenant. Please update the parameters using your Service Binding details. "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,r.kt)("p",{parentName:"admonition"},"Make sure ",(0,r.kt)("strong",{parentName:"p"},"not to commit")," these details to GitHub! Either remove the credentials before saving or rename your HTTP files to ",(0,r.kt)("strong",{parentName:"p"},"-private.http")," (e.g., apiProducts-private.http), which are excluded by the ",(0,r.kt)("em",{parentName:"p"},".gitignore")," file. ")),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/API_HttpCreds.png&quot; width=&quot;900&quot; /&gt;",src:a(13291).Z,width:"1595",height:"297"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("em",{parentName:"p"},"xsuaaHostname")," is equal to the ",(0,r.kt)("em",{parentName:"p"},"uaa.url")," parameter. The ",(0,r.kt)("em",{parentName:"p"},"apiEndpointBtp")," equals the ",(0,r.kt)("em",{parentName:"p"},"apiUrl")," parameter.")),(0,r.kt)("p",null,"1.3. After updating the relevant parameters based on your Tenant Subaccount Client Credentials, you can request an OAuth token for accessing the SaaS API. Therefore, execute the following request which will return a Bearer access token that can be used for the upcoming API calls. This token will allow the CAP framework to uniquely identify a certain Tenant and to connect it to the correct Tenant database container."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,r.kt)("p",{parentName:"admonition"},"If you're facing an ",(0,r.kt)("strong",{parentName:"p"},"Unauthorized")," error, please try to URL-encode (various web-tools or npm packages available to do so) your Client ID and Secret and try to fetch a token again!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"# @name getXsuaaToken\n\nPOST {{xsuaaHostname}}/oauth/token\nAccept: application/json\nContent-Type: application/x-www-form-urlencoded\n\nclient_id={{btpXsuaaClient}}\n&client_secret={{btpXsuaaSecret}}\n&grant_type=client_credentials\n")),(0,r.kt)("p",null,"1.4. Once you obtained an access token, run the following request to upload sample products to the SaaS API on behalf of your current Subscriber Tenant. The respective product data will be stored in the Tenant database container and can be used to create new assessments in the SaaS sample application instance of the Tenant. The required access token is taken from the results of the previous OAuth request. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,r.kt)("p",{parentName:"admonition"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Advanced Features"),", you will learn that the sample EPM model provides the same data values, and that your subscriber's on-premise solutions like SAP S/4HANA can use the same SaaS API endpoints to push this sample product data. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'@access_token = {{getXsuaaToken.response.body.$.access_token}}\n\n# @name uploadProductsBtp\n\nPOST {{apiEndpointBtp}}/rest/api/bulkUpsertProducts\nAuthorization: Bearer {{access_token}}\nContent-type: application/json\n\n{\n"products" : [\n        {"ID":"HT-1000","typeCode":"PR","category":"Notebooks","supplierId":"0100000046","taxTarifCode":1,"measureUnit":"EA","weightMeasure":4.2,"weightUnit":"KG","price":956,"text":"Notebook Basic 15","language_code":"E","currency_code":"EUR"},\n        {"ID":"HT-1001","typeCode":"PR","category":"Notebooks","supplierId":"0100000047","taxTarifCode":1,"measureUnit":"EA","weightMeasure":4.5,"weightUnit":"KG","price":1249,"text":"Notebook Basic 17","language_code":"E","currency_code":"EUR"},\n        {"ID":"HT-1002","typeCode":"PR","category":"Notebooks","supplierId":"0100000048","taxTarifCode":1,"measureUnit":"EA","weightMeasure":4.2,"weightUnit":"KG","price":1570,"text":"Notebook Basic 18","language_code":"E","currency_code":"USD"},\n        {"ID":"HT-1003","typeCode":"PR","category":"Notebooks","supplierId":"0100000049","taxTarifCode":1,"measureUnit":"EA","weightMeasure":4.2,"weightUnit":"KG","price":1650,"text":"Notebook Basic 19","language_code":"E","currency_code":"EUR"},\n        {"ID":"HT-1055","typeCode":"PR","category":"Multifunction Printers","supplierId":"0100000069","taxTarifCode":1,"measureUnit":"EA","weightMeasure":6.3,"weightUnit":"KG","price":99,"text":"Multi Print","language_code":"E","currency_code":"EUR"},\n        {"ID":"HT-1056","typeCode":"PR","category":"Multifunction Printers","supplierId":"0100000070","taxTarifCode":1,"measureUnit":"EA","weightMeasure":4.3,"weightUnit":"KG","price":119,"text":"Multi Color","language_code":"E","currency_code":"JPY"},\n        {"ID":"HT-1060","typeCode":"PR","category":"Mice","supplierId":"0100000071","taxTarifCode":1,"measureUnit":"EA","weightMeasure":0.09,"weightUnit":"KG","price":9,"text":"Cordless Mouse","language_code":"E","currency_code":"EUR"},\n        {"ID":"HT-1063","typeCode":"PR","category":"Keyboards","supplierId":"0100000074","taxTarifCode":1,"measureUnit":"EA","weightMeasure":2.1,"weightUnit":"KG","price":14,"text":"Ergonomic Keyboard","language_code":"E","currency_code":"BRL"},\n        {"ID":"HT-1120","typeCode":"PR","category":"Keyboards","supplierId":"0100000065","taxTarifCode":1,"measureUnit":"EA","weightMeasure":1,"weightUnit":"KG","price":29,"text":"Cordless Bluetooth Keyboard","language_code":"0","currency_code":"EUR"}\n    ]\n}\n')),(0,r.kt)("p",null,"1.5. Enrich the product data stored in your Tenant database container with further details, by using the following request. It will update existing product records with sales split details and additional sustainability notions. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,r.kt)("p",{parentName:"admonition"},"You might ask yourself why these additional details are not part of the initial product data request?! Unfortunately, this advanced product information is not part of the EPM model and has been added for illustration purposes of a potential sustainability use-case. Therefore, it has to be provided by a manual upload or maintained in the SaaS application itself. ")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,r.kt)("p",{parentName:"admonition"},"Do not use this API endpoint with a huge payload, as it processes the records one after another as the CAP CQL UPDATE feature does not yet allow us to provide multiple entity values at once.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'# @name uploadProductsExtendedBtp\n\nPOST {{apiEndpointBtp}}/rest/api/bulkUpdateProducts\nAuthorization: Bearer {{access_token}}\nContent-type: application/json\n\n{\n    "products" : [\n        {"ID": "HT-1000","eolProductDesign": 43,"traditionalSalesShare": 82,"repairSalesShare": 8,"resellSalesShare": 10},\n        {"ID": "HT-1001","eolProductDesign": 38,"traditionalSalesShare": 97,"repairSalesShare": 3,"resellSalesShare": 0},\n        {"ID": "HT-1002","eolProductDesign": 35,"traditionalSalesShare": 87,"repairSalesShare": 5,"resellSalesShare": 8},\n        {"ID": "HT-1003","eolProductDesign": 42,"traditionalSalesShare": 74,"repairSalesShare": 20,"resellSalesShare": 6},\n        {"ID": "HT-1055","eolProductDesign": 56,"traditionalSalesShare": 98,"repairSalesShare": 1,"resellSalesShare": 1},\n        {"ID": "HT-1056","eolProductDesign": 49,"traditionalSalesShare": 95,"repairSalesShare": 3,"resellSalesShare": 2},\n        {"ID": "HT-1060","eolProductDesign": 25,"traditionalSalesShare": 99,"repairSalesShare": 0,"resellSalesShare": 1},\n        {"ID": "HT-1063","eolProductDesign": 34,"traditionalSalesShare": 97,"repairSalesShare": 1,"resellSalesShare": 2},\n        {"ID": "HT-1120","eolProductDesign": 28,"traditionalSalesShare": 95,"repairSalesShare": 2.5,"resellSalesShare": 2.5}\n    ]\n}\n')),(0,r.kt)("p",null,"1.6. In case you want to go ahead and upload the same sample data which is also provided in the CSV test files (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/tree/basic/test/data"},"click here"),"), you can use the remaining HTTP files to do so. Simply provide the Tenant Subaccount specific Client Credentials in the header of the HTTP files and you're ready to push the sample content to dedicated Subscriber tenants. Don't forget to rename your files to *-private.http, preventing them from being committed to Git. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/basic/http/apiProducts.http"},"Products")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/basic/http/apiSalesOrders.http"},"Sales Orders")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/basic/http/apiRecyclingCountries.http"},"Recycling by Country")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/basic/http/apiRecyclingMaterials.http"},"Recycling by Material"))),(0,r.kt)("p",null,"1.7. After pushing all data provided in the HTTP files, you will be able to progress with the next part of this tutorial and test the SaaS sample application end-to-end. You can create Assessments for the uploaded products and even ",(0,r.kt)("strong",{parentName:"p"},"prefill")," Sales Orders, Materials, and Recycling sample values. Below you can see a sample Assessment which was created based on the provided data of product ",(0,r.kt)("strong",{parentName:"p"},"HT-1000"),"."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/API_SampleHT1000.png&quot; width=&quot;700&quot; /&gt;",src:a(33610).Z,width:"1542",height:"925"})),(0,r.kt)("p",null,"1.8. Feel free to proceed with the next part of the tutorial and test the SaaS sample application end-to-end from a Subscriber perspective."),(0,r.kt)("h2",{id:"2-further-information"},"2. Further Information"),(0,r.kt)("p",null,"Please use the following links to find further information on the topics above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/SERVICEMANAGEMENT/09cc82baadc542a688176dce601398de/6fcac08409db4b0f9ad55a6acd4d31c5.html?&locale=en-US"},"SAP Help - Creating Service Keys in Cloud Foundry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cap.cloud.sap/docs/node.js/cds-ql"},"Capire documentation - Embedded CQL with cds.ql")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.cloudfoundry.org/api/uaa/version/76.1.0/index.html#client-credentials-grant"},"Cloud Foundry Documentation - Client Credentials Grant")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=humao.rest-client"},"VS Code - REST Client")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c1d3f60099654ecfb3fe36ac93c121bb/ea8b6773be584203bcd99da76844c5ed.html?locale=en-US"},"SAP Help - HANA UPSERT Statement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/d1cb63c8dd8e4c35a0f18aef632687f0/d43d91578c3b42b3bacfd89aacf0d62f.html?locale=en-US"},"SAP Help - HANA Procedures"))))}u.isMDXComponent=!0},10812:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/API_ArchDetails-bc786d9461e678fab537754f6ef50d80.png"},3623:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/API_Endpoints01-844246cc82710b09a518a3a8832039e1.png"},28975:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/API_Endpoints02-f6c1ba3354e11fe43cf674f17d0fec62.png"},13291:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/API_HttpCreds-a9cd041fea8ad6f1c427bd157ee21dc8.png"},33610:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/API_SampleHT1000-bd645085521974dcbbed545ac86b0c70.png"},65655:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/API_ServiceKey-29908c3d61c68eed91ccd6bab015ac3a.png"},71864:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/DM_Tables-bc71ad404a604aba6486aed86cbe6d53.png"}}]);