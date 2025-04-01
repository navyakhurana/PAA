"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[2147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:5},r="Understand SAP BTP Multitenancy",s={unversionedId:"project-panel/discover/understand-btp-multitenancy/README",id:"project-panel/discover/understand-btp-multitenancy/README",title:"Understand SAP BTP Multitenancy",description:"In SAP BTP, you can develop and run multitenant applications that can be accessed by multiple consumers (tenants) through a dedicated URL. In this sample scenario, we decided to implement the solution based on a standardized toolset including the SAP Cloud Application Programming (CAP) Model.",source:"@site/docs/project-panel/1-discover/5-understand-btp-multitenancy/README.md",sourceDirName:"project-panel/1-discover/5-understand-btp-multitenancy",slug:"/project-panel/discover/understand-btp-multitenancy/",permalink:"/PAA/@navyakhurana-navyakhurana-patch-2/project-panel/discover/understand-btp-multitenancy/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya khurana",lastUpdatedAt:1691981746,formattedLastUpdatedAt:"Aug 14, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Get the idea of a SaaS application",permalink:"/PAA/@navyakhurana-navyakhurana-patch-2/project-panel/discover/get-idea-saas-applications/"},next:{title:"What's new",permalink:"/PAA/@navyakhurana-navyakhurana-patch-2/project-panel/discover/whats-new/"}},l={},c=[{value:"Context",id:"context",level:2},{value:"SAP BTP Multitenancy Model",id:"sap-btp-multitenancy-model",level:2},{value:"Provider&#39;s Point of View",id:"providers-point-of-view",level:2},{value:"SAP CAP (MTXS)",id:"sap-cap-mtxs",level:2},{value:"Further information",id:"further-information",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"understand-sap-btp-multitenancy"},"Understand SAP BTP Multitenancy"),(0,o.kt)("p",null,"In SAP BTP, you can develop and run multitenant applications that can be accessed by multiple consumers (tenants) through a dedicated URL. In this sample scenario, we decided to implement the solution based on a standardized toolset including the SAP Cloud Application Programming (CAP) Model."),(0,o.kt)("p",null,"Check SAP Help and linked GitHub repositories below for further details on how to develop multitenant SaaS applications in the different SAP BTP environments. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/"},"Kyma Environment - Develop a Multitenant Extension Application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-cf-cap-multitenant-susaas/"},"Cloud Foundry Environment - Developing Multitenant Applications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/81659c0f5a2b4ca0999329b5b6c60548.html?locale=en-US"},"ABAP Environment - Multitenancy and SaaS Applications"))),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"When developing tenant-aware applications in the SAP BTP, keep in mind the following general programming guidelines."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Shared in-memory data is available to all tenants"),(0,o.kt)("li",{parentName:"ul"},"Avoid any possibility that application users can execute custom code in the application, as this may give them access to data of other tenants"),(0,o.kt)("li",{parentName:"ul"},"Avoid any possibility that application users can access a file system, as this may give them access to data of other tenants"),(0,o.kt)("li",{parentName:"ul"},"To perform internal Tenant onboarding activities, such as creating a database schema for tenants, you must implement the Subscription callbacks of the ",(0,o.kt)("em",{parentName:"li"},"SAP Software as a Service Provisioning service")," (saas-registry) and use the information provided in the subscription event. You can also implement the getDependencies callback to obtain the dependencies of any SAP reuse services by your application. ")),(0,o.kt)("p",null,"Check out the following content in SAP Help for further information (",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/products/BTP/65de2977205c403bbc107264b8eccf4b/ff540477f5404e3da2a8ce23dcee602a.html"},"click here"),")."),(0,o.kt)("h2",{id:"sap-btp-multitenancy-model"},"SAP BTP Multitenancy Model"),(0,o.kt)("p",null,"In this tutorial, we are using some keywords like Provider (sub)account, consumer/Tenant Subaccount, provisioning, onboarding, and data isolation. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Provider (Sub)account"),"\nThe Provider is the vendor of the SaaS application. This is the company that is going to build, deliver, and operate the multitenant SaaS solution for all consumers. The vendor has a ",(0,o.kt)("strong",{parentName:"p"},"Provider account"),", a Global Account in SAP BTP."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Consumer/Tenant Subaccount"),"\nA Consumer or Tenant is the user of the SaaS application. This can be another team or company that is going to use the multitenant SaaS solution. This Consumer subscribes to the SaaS solution from their ",(0,o.kt)("strong",{parentName:"p"},"Consumer Subaccount")," which is a subaccount of the vendor's Global Account in SAP BTP."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,o.kt)("p",{parentName:"admonition"},"It's important to differentiate between ",(0,o.kt)("em",{parentName:"p"},"Consumer")," and ",(0,o.kt)("em",{parentName:"p"},"Tenant"),". While a Consumer can consume multiple SaaS applications, a Tenant is a specific instance of a SaaS application of a dedicated Consumer. Still, a ",(0,o.kt)("em",{parentName:"p"},"Tenant Subaccount")," and a ",(0,o.kt)("em",{parentName:"p"},"Consumer Subaccount")," refer to the same entity, meaning a dedicated subaccount in which one or multiple Tenant instances of a Consumer are subscribed. "),(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},"Subaccount (1..1) Consumer - For each subaccount, there can only be one Consumer assignment",(0,o.kt)("br",{parentName:"p"}),"\n","Subaccount (1..1) Tenant - For each subaccount, there can only be one Tenant per SaaS application",(0,o.kt)("br",{parentName:"p"}),"\n","Consumer (1..1) Tenant - For each consumer, there can only be one Tenant per SaaS application  "))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Onboarding"),"\nThis is the end-to-end process of creating a subaccount for a new SaaS Consumer in the vendor's Global Account in SAP BTP and giving him access to the actual Consumer Tenant SaaS application instance. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Provisioning"),"\nThis is the process of onboarding new consumers to the multitenant SaaS solution. During the provisioning process, a Tenant database schema is created and dependencies are injected into the Consumer Subaccount."),(0,o.kt)("h2",{id:"providers-point-of-view"},"Provider's Point of View"),(0,o.kt)("p",null,"Putting together the general account model of an SAP BTP SaaS solution results in the following structure:"),(0,o.kt)("p",null," ",(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/account-model.png&quot; width=&quot;500&quot; /&gt;",src:n(25073).Z,width:"935",height:"587"})),(0,o.kt)("h2",{id:"sap-cap-mtxs"},"SAP CAP (MTXS)"),(0,o.kt)("p",null,"The sample application has been developed using the SAP Cloud Application Programming (CAP) Model. This framework offers a dedicated npm package for handling multitenancy which is called ",(0,o.kt)("strong",{parentName:"p"},"cap-mtxs")," (",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@sap/cds-mtxs"},"click here"),"). The ",(0,o.kt)("strong",{parentName:"p"},"@sap/cds-mtxs")," package provides a set of services that implement ",(0,o.kt)("strong",{parentName:"p"},"m"),"ultitenancy, features ",(0,o.kt)("strong",{parentName:"p"},"t"),"oggles, and e",(0,o.kt)("strong",{parentName:"p"},"x"),"tensibility (\u2018MTX\u2019 stands for these three features). "),(0,o.kt)("p",null,"Please refer to the official CAP MTXS documentation for further details (",(0,o.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/guides/multitenancy/mtxs"},"click here"),")."),(0,o.kt)("h2",{id:"further-information"},"Further information"),(0,o.kt)("p",null,"Please use the following links to find further information on the topics above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLkzo92owKnVx3Sh0nemX8GoSNzJGfsWJM"},"Youtube - SAP BTP - Multitenant Business Applications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sap.github.io/cloud-sdk/docs/js/tutorials/multi-tenant-application"},"SAP Cloud SDK - Introduction to multi-tenant concepts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/saphanaacademy/generator-saphanaacademy-saas"},"GitHub - generator-saphanaacademy-saas")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/5e8a2b74e4f2442b8257c850ed912f48.html"},"SAP Help - Multitenant Applications in the Cloud Foundry Environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2022/08/27/fundamentals-of-multitenancy-in-sap-btp/"},"SAP Blogs - Fundamentals of Multitenancy in SAP BTP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2020/08/20/getting-your-head-into-cloud-application-programming-model-multitenancy/"},"SAP Blogs - Getting your head into Cloud Application Programming model multitenancy"))))}m.isMDXComponent=!0},25073:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/account-model-5d9f4ebf7497f9be03fbed6c550543ca.png"}}]);