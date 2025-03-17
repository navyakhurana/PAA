"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[5183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:3},i="Prepare the Provider Subaccount",l={unversionedId:"project-panel/basic/prepare-provider-subaccount/README",id:"project-panel/basic/prepare-provider-subaccount/README",title:"Prepare the Provider Subaccount",description:"In this chapter, you will learn how to prepare your SAP BTP Provider Subaccount for the deployment of the sample SaaS solution by assigning the required entitlements and setting up the foundational components. This includes a SAP HANA Cloud instance which you need to share with your Kyma Cluster or Kyma Namespace before deployment.",source:"@site/docs/project-panel/2-basic/2-prepare-provider-subaccount/README.md",sourceDirName:"project-panel/2-basic/2-prepare-provider-subaccount",slug:"/project-panel/basic/prepare-provider-subaccount/",permalink:"/PAA/@navyakhurana-patch-9/project-panel/basic/prepare-provider-subaccount/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya Khurana",lastUpdatedAt:1742204286,formattedLastUpdatedAt:"Mar 17, 2025",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Understand the Repository Structure",permalink:"/PAA/@navyakhurana-patch-9/project-panel/basic/understand-repo-structure/"},next:{title:"Build, Pack and Push your Docker Images",permalink:"/PAA/@navyakhurana-patch-9/project-panel/basic/build-your-docker-images/"}},p={},s=[{value:"1. Prerequisites for Provider Subaccount",id:"1-prerequisites-for-provider-subaccount",level:2},{value:"2. Entitlements for Provider Subaccount",id:"2-entitlements-for-provider-subaccount",level:2},{value:"3. SAP HANA Cloud prerequisite",id:"3-sap-hana-cloud-prerequisite",level:2},{value:"4. Limitations of free services plans",id:"4-limitations-of-free-services-plans",level:2},{value:"5. Further information",id:"5-further-information",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"prepare-the-provider-subaccount"},"Prepare the Provider Subaccount"),(0,n.kt)("p",null,"In this chapter, you will learn how to prepare your SAP BTP Provider Subaccount for the deployment of the sample SaaS solution by assigning the required entitlements and setting up the foundational components. This includes a SAP HANA Cloud instance which you need to share with your Kyma Cluster or Kyma Namespace before deployment. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#prepare-the-provider-subaccount"},"Prepare the Provider Subaccount"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#1-prerequisites-for-provider-subaccount"},"1. Prerequisites for Provider Subaccount")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#2-entitlements-for-provider-subaccount"},"2. Entitlements for Provider Subaccount")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#3-sap-hana-cloud-prerequisite"},"3. SAP HANA Cloud prerequisite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#4-limitations-of-free-services-plans"},"4. Limitations of free services plans")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#5-further-information"},"5. Further information"))))),(0,n.kt)("h2",{id:"1-prerequisites-for-provider-subaccount"},"1. Prerequisites for Provider Subaccount"),(0,n.kt)("p",null,"As already mentioned, you can set up the ",(0,n.kt)("strong",{parentName:"p"},"Basic Version")," of the sample application in any SAP BTP environment using ",(0,n.kt)("strong",{parentName:"p"},"Free (Tier) service plans")," of your own ",(0,n.kt)("strong",{parentName:"p"},"Pay-as-you-Go")," (PAYG) or ",(0,n.kt)("strong",{parentName:"p"},"CPEA")," account. A tutorial how to setup a PAYG account (allowing you to use all Free Tier service plans) can be found in the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/btp-free-tier-account.html"},"Tutorial Navigator"),". "),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,n.kt)("p",{parentName:"admonition"},"A setup in a Trial subaccount is also possible, but comes with additional complexity due to missing service plans. So, we strongly recommend the usage of free tier services in a PAYG or CPEA account. If you decide to set up things in Trial, please make sure to choose the ",(0,n.kt)("strong",{parentName:"p"},"us10")," region to use SAP HANA Cloud.")),(0,n.kt)("p",null,"Please make sure to cater the following prerequisites:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Setup a the SAP BTP Kyma Runtime using the ",(0,n.kt)("strong",{parentName:"li"},"free")," service plan (assign service plan in entitlements if not visible). ",(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,n.kt)("p",{parentName:"admonition"},"Follow the official documentation in SAP Tutorial navigator (",(0,n.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cp-kyma-getting-started.html"},"click here"),") if required.")),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,n.kt)("p",{parentName:"admonition"},"Make sure to create your SAP BTP Kyma Runtime using the ",(0,n.kt)("strong",{parentName:"p"},"free")," plan and not the ",(0,n.kt)("strong",{parentName:"p"},"Standard")," plan. "))),(0,n.kt)("li",{parentName:"ul"},"Set up a SAP HANA Cloud instance (",(0,n.kt)("strong",{parentName:"li"},"hana-free")," service plan) using the ",(0,n.kt)("strong",{parentName:"li"},"SAP HANA Cloud Tools"),".",(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,n.kt)("p",{parentName:"admonition"},"Check the following blog post  to learn more (",(0,n.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2022/09/21/sap-hana-cloud-goes-multi-environment-part-2-getting-started/"},"click here"),").")),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,n.kt)("p",{parentName:"admonition"},"In SAP BTP ",(0,n.kt)("strong",{parentName:"p"},"Trial")," landscapes, the ",(0,n.kt)("strong",{parentName:"p"},"SAP HANA Cloud Tools")," are not available. Please create a respective SAP HANA Cloud Instance in a ",(0,n.kt)("strong",{parentName:"p"},"Cloud Foundry")," Space. Check our Cloud Foundry-based SaaS application to learn more (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas"},"click here"),").")))),(0,n.kt)("p",null,"Please check the limitations mentioned below when it comes to the usage of some SAP BTP service plans like e.g., hana-free. Furthermore, please note that the hana-free service plan is not available in all SAP BTP regions. You can check the availability in SAP Discovery Center (",(0,n.kt)("a",{parentName:"p",href:"https://discovery-center.cloud.sap/serviceCatalog/sap-hana-cloud?region=all&tab=service_plan&service_plan=free&commercialModel=cloud"},"click here"),")."),(0,n.kt)("h2",{id:"2-entitlements-for-provider-subaccount"},"2. Entitlements for Provider Subaccount"),(0,n.kt)("p",null,"The application requires the following set of SAP BTP entitlements in the Provider Subaccount:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Service"),(0,n.kt)("th",{parentName:"tr",align:null},"Free Tier / (Trial) Plans"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/alert-notification?region=all"},"SAP Alert Notification service for SAP BTP")),(0,n.kt)("td",{parentName:"tr",align:null},"Free / ",(0,n.kt)("em",{parentName:"td"},"(Trial: Lite)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/application-logging-service/?region=all"},"SAP Application Logging Service")),(0,n.kt)("td",{parentName:"tr",align:null},"Lite")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/authorization-and-trust-management-service?region=all&tab=feature"},"SAP Authorization and Trust Management Service")),(0,n.kt)("td",{parentName:"tr",align:null},"Broker  Application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/cloud-foundry-runtime?region=all"},"SAP BTP, Cloud Foundry Runtime"),"  (Required in ",(0,n.kt)("strong",{parentName:"td"},"Trial")," only!)"),(0,n.kt)("td",{parentName:"tr",align:null},"(Trial: Standard)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/kyma-runtime?region=all&tab=feature"},"SAP BTP, Kyma Runtime")),(0,n.kt)("td",{parentName:"tr",align:null},"Free / ",(0,n.kt)("em",{parentName:"td"},"(Trial: Trial)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/cloud-management-service/?region=all"},"SAP Cloud Management Service for SAP BTP")),(0,n.kt)("td",{parentName:"tr",align:null},"Central")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/destination?service_plan=lite&region=all&commercialModel=cloud"},"Destination Service")),(0,n.kt)("td",{parentName:"tr",align:null},"Lite")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/html5-application-repository-service?region=all"},"SAP HTML5 Application Repository Service for SAP BTP")),(0,n.kt)("td",{parentName:"tr",align:null},"App-host App-runtime")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/saas-provisioning-service?service_plan=application&region=all&commercialModel=cloud"},"SAP Software-as-a-Service Provisioning service")),(0,n.kt)("td",{parentName:"tr",align:null},"Application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/sap-hana-cloud?tab=customerreference&region=all"},"SAP HANA Cloud")),(0,n.kt)("td",{parentName:"tr",align:null},"hana-free ",(0,n.kt)("em",{parentName:"td"},"(Trial: HANA)"),"tools ",(0,n.kt)("em",{parentName:"td"},"(Trial: not available!)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://help.sap.com/docs/SAP_HANA_PLATFORM/3823b0f33420468ba5f1cf7f59bd6bd9/e28abca91a004683845805efc2bf967c.html?version=2.0.04&locale=en-US"},"SAP HANA Schemas & HDI Containers")),(0,n.kt)("td",{parentName:"tr",align:null},"hdi-shared")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/service-manager/?region=all"},"SAP Service Manager")),(0,n.kt)("td",{parentName:"tr",align:null},"Container  Subaccount-Admin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"If you need help assigning entitlements to your Provider Subaccount, you might find information ",(0,n.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/SERVICE_TICKET_INTELLIGENCE/fb95f4cf368448be94f0eaed1583f491/cda19c940bf5404c8e81770b0f879e82.html?locale=en-US"},"here"),"."),(0,n.kt)("h2",{id:"3-sap-hana-cloud-prerequisite"},"3. SAP HANA Cloud prerequisite"),(0,n.kt)("p",null,"If not available yet, please create a SAP HANA Cloud instance in your Provider subaccount or share an existing SAP HANA Cloud from any other subaccount within the same SAP BTP region (e.g., eu10). "),(0,n.kt)("p",null,"Any SAP HANA Cloud instance in the same region as your Kyma Cluster, can be enabled for usage within the Kyma Cluster of your Provider subaccount. Once you created the SAP HANA Cloud instance, please map it with your Kyma Cluster using the ",(0,n.kt)("strong",{parentName:"p"},"Instance Mapping")," feature. You can either map the SAP HANA Cloud instance with all namespaces in the Kyma Cluster or provide a dedicated namespace name. More information on how to share your SAP HANA Cloud instance with your Kyma Cluster can be found in the following blog post ",(0,n.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2022/12/15/consuming-sap-hana-cloud-from-the-kyma-environment/"},"(click here)"),". "),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,n.kt)("p",{parentName:"admonition"},"Please make sure to use the new ",(0,n.kt)("strong",{parentName:"p"},"SAP HANA Cloud Tools")," service (service plan ",(0,n.kt)("strong",{parentName:"p"},"tools"),") for this purpose! The instance mapping feature for Kyma is not available in the SAP HANA Cloud Central UI. The ",(0,n.kt)("strong",{parentName:"p"},"SAP HANA Cloud Tools")," are not yet available in the Trial environment! ")),(0,n.kt)("p",null," ",(0,n.kt)("img",{alt:"&lt;img src=&quot;./images/HanaCloudKyma.png&quot; width=&quot;600&quot;/&gt;",src:a(23552).Z,width:"1473",height:"687"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,n.kt)("p",{parentName:"admonition"},"In ",(0,n.kt)("strong",{parentName:"p"},"SAP BTP Trial")," landscapes, you cannot share a SAP HANA Cloud Instance with your Kyma Cluster. The required SAP HANA Cloud Tools are not available yet. In this case (which won't be covered in detail), please follow the official CAP documentation (",(0,n.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/guides/deployment/deploy-to-kyma#hana-cloud-instance"},"https://cap.cloud.sap/docs/guides/deployment/deploy-to-kyma#hana-cloud-instance"),"). It will explain in detail, how to create the required Service Key in the Cloud Foundry context and how to map to to a corresponding Secret in your Kyma Cluster. ")),(0,n.kt)("h2",{id:"4-limitations-of-free-services-plans"},"4. Limitations of free services plans"),(0,n.kt)("p",null,"When using ",(0,n.kt)("strong",{parentName:"p"},"free")," SAP BTP services plans like ",(0,n.kt)("strong",{parentName:"p"},"trial")," for Kyma or ",(0,n.kt)("strong",{parentName:"p"},"hana-free")," for SAP HANA Cloud, please be aware of the following limitations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SAP BTP Kyma ",(0,n.kt)("strong",{parentName:"li"},"trial")," service plans are usable for 14 days only (",(0,n.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2022/09/13/sap-btp-kyma-runtime-trial-clusters-lifespan-limited-to-14-days/"},"click here"),"). After this period, you need to setup a new SAP BTP Kyma Cluster. This limitation does not exist in Free Tier accounts using the ",(0,n.kt)("strong",{parentName:"li"},"free")," plan. "),(0,n.kt)("li",{parentName:"ul"},"Free ",(0,n.kt)("strong",{parentName:"li"},"SAP HANA Cloud")," instances will be stopped on a daily base to reduce resource consumption. Check (and if necessary restart) your SAP HANA Cloud instance before using your SaaS subscription. Furthermore, you have ",(0,n.kt)("strong",{parentName:"li"},"30 days")," to ",(0,n.kt)("strong",{parentName:"li"},"restart")," your instances or they will be ",(0,n.kt)("strong",{parentName:"li"},"deleted"),"."),(0,n.kt)("li",{parentName:"ul"},"As mentioned, the ",(0,n.kt)("strong",{parentName:"li"},"SAP HANA Cloud Tools")," are not available in ",(0,n.kt)("strong",{parentName:"li"},"Trial")," accounts yet. Therefore, in Trial scenarios you have to create your own SAP HANA Cloud instance and HDI Container within a ",(0,n.kt)("strong",{parentName:"li"},"Cloud Foundry Space"),". Afterwards, you have to create a respective Kyma Secret containing the Service Key details of your HDI Container instance (",(0,n.kt)("a",{parentName:"li",href:"https://cap.cloud.sap/docs/guides/deployment/deploy-to-kyma#hana-cloud-instance"},"see here"),"). "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Free Kyma Cluster")," have a restrictive resource limitation. Make sure you have enough resources left on your Cluster before deploying the sample application. If required, remove other workloads first. Check out the details provided in ",(0,n.kt)("a",{parentName:"li",href:"https://discovery-center.cloud.sap/serviceCatalog/kyma-runtime?region=all&tab=service_plan&service_plan=free&commercialModel=cloud"},"Discovery Center")," to learn more!")),(0,n.kt)("h2",{id:"5-further-information"},"5. Further information"),(0,n.kt)("p",null,"Please use the following links to find further information on the topics above:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/046f127f2a614438b616ccfc575fdb16.html?locale=en-US"},"SAP Help - Trial Accounts and Free Tier")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/171511cc425c4e079d0684936486eee6.html"},"SAP Help - Enterprise Accounts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/8061ecc529d74465b2b9566a634943ec.html"},"SAP Help - Account Administration in the Cockpit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/05280a123d3044ae97457a25b3013918.html?locale=en-US"},"SAP Help - Create a Subaccount")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/5ba357b4fa1e4de4b9fcc4ae771609da.html?locale=en-US"},"SAP Help - Configure Entitlements and Quotas for Subaccounts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discovery-center.cloud.sap"},"SAP Discovery Center"))))}m.isMDXComponent=!0},23552:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/HanaCloudKyma-e3fb19edfa6809c1078a4025acc2df8d.png"}}]);