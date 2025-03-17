"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[1710],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7809:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:1},i="Discover the Tutorial Target",s={unversionedId:"project-panel/discover/discover-tutorial-target/README",id:"project-panel/discover/discover-tutorial-target/README",title:"Discover the Tutorial Target",description:"In this tutorial, you will learn how to set up a multitenant Software as a Service (SaaS) application using CAP in your SAP Business Technology Platform (SAP BTP) environment. For this use-case, the Kyma Runtime runtime was chosen, which is SAP's managed Kubernetes Cluster. You can develop similar SaaS applications in the SAP BTP Cloud Foundry runtime or the SAP BTP ABAP Cloud environment. If you are interested in the implementation of this application on Cloud Foundry, you can find it here.",source:"@site/docs/project-panel/1-discover/1-discover-tutorial-target/README.md",sourceDirName:"project-panel/1-discover/1-discover-tutorial-target",slug:"/project-panel/discover/discover-tutorial-target/",permalink:"/PAA/@navyakhurana-patch-99/project-panel/discover/discover-tutorial-target/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya Khurana",lastUpdatedAt:1742203675,formattedLastUpdatedAt:"Mar 17, 2025",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Discover",permalink:"/PAA/@navyakhurana-patch-99/category/discover"},next:{title:"The Basics of SAP BTP, Kyma and CAP",permalink:"/PAA/@navyakhurana-patch-99/project-panel/discover/learn-basics-btp-kyma-cap/"}},l={},p=[{value:"1. Tutorial Versions",id:"1-tutorial-versions",level:2},{value:"2. GitHub Repository",id:"2-github-repository",level:2},{value:"3. Tutorial Audience",id:"3-tutorial-audience",level:2},{value:"4. Focus Topics",id:"4-focus-topics",level:2},{value:"5. Obtain Support",id:"5-obtain-support",level:2},{value:"6. Provide Feedback",id:"6-provide-feedback",level:2},{value:"7. What&#39;s New",id:"7-whats-new",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"discover-the-tutorial-target"},"Discover the Tutorial Target"),(0,r.kt)("p",null,"In this tutorial, you will learn how to set up a multitenant Software as a Service (SaaS) application using CAP in your SAP Business Technology Platform (SAP BTP) environment. For this use-case, the ",(0,r.kt)("strong",{parentName:"p"},"Kyma Runtime")," runtime was chosen, which is SAP's ",(0,r.kt)("strong",{parentName:"p"},"managed Kubernetes Cluster"),". You can develop similar SaaS applications in the SAP BTP ",(0,r.kt)("strong",{parentName:"p"},"Cloud Foundry")," runtime or the SAP BTP ",(0,r.kt)("strong",{parentName:"p"},"ABAP Cloud")," environment. If you are interested in the implementation of this application on ",(0,r.kt)("strong",{parentName:"p"},"Cloud Foundry"),", you can find it ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas"},"here"),"."),(0,r.kt)("p",null,"The sample application has a focus on the topic of Sustainability and is called ",(0,r.kt)("strong",{parentName:"p"},"Sustainable SaaS")," (SusaaS). It allows ",(0,r.kt)("strong",{parentName:"p"},"consumers")," of your SaaS application to extend their SAP solutions like SAP S/4HANA with additional features provided by you as a SaaS ",(0,r.kt)("strong",{parentName:"p"},"Provider"),". "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#discover-the-tutorial-target"},"Discover the Tutorial Target"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-tutorial-versions"},"1. Tutorial Versions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-github-repository"},"2. GitHub Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-tutorial-audience"},"3. Tutorial Audience")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#4-focus-topics"},"4. Focus Topics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#5-obtain-support"},"5. Obtain Support")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#6-provide-feedback"},"6. Provide Feedback")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#7-whats-new"},"7. What's New"))))),(0,r.kt)("p",null,"In this simple scenario, the application allows you to assign users to multiple projects, in which they can assess dedicated circularity metrics of products imported from an SAP backend system like SAP S/4HANA. Besides the assessment of financial product sales data, the app also allows to import or to enter recycling data or product design information. See the following screenshots to get an idea of the application features. The details will be described in later parts of the tutorial (click to enlarge)."),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/App_Overview.png&quot; width=&quot;250&quot; /&gt;",src:a(2445).Z,width:"1794",height:"1188"}),"\n",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/App_Launchpad.png&quot; width=&quot;300&quot; /&gt;",src:a(34969).Z,width:"1212",height:"646"}),"\n",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/App_Assessment_01.png&quot; width=&quot;300&quot; /&gt;",src:a(4452).Z,width:"714",height:"375"}),"\n",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/App_Assessment_02.png&quot; width=&quot;300&quot; /&gt;",src:a(82123).Z,width:"724",height:"375"})),(0,r.kt)("p",null,"Due to the technical and theoretical complexity of the topic, the sample application shall not be seen or used in any kind for productive scenarios. Furthermore, it shall give you a lot of ideas and approaches for your own scenario implementation. We aim to cover as many topics as possible but not in the greatest depth that might justify productive usability. Below you can find a solution architecture diagram of the sample application. As you can see, the app contains a lot of services and tools which you will use during the course of this tutorial."),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/App_Architecture.png&quot; width=&quot;600&quot; /&gt;",src:a(60985).Z,width:"2686",height:"1368"})),(0,r.kt)("p",null,"For the Kubernetes experts amongst you, please feel free to check out a more detailed and Kubernetes focused architecture below. If you are new to Kubernetes, don't worry as we will get you covered along the way. "),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/App_ArchitectureDetails.png&quot; width=&quot;600&quot; /&gt;",src:a(22727).Z,width:"1716",height:"986"})),(0,r.kt)("h2",{id:"1-tutorial-versions"},"1. Tutorial Versions"),(0,r.kt)("p",null,"This tutorial is structured in three major versions which are the ",(0,r.kt)("strong",{parentName:"p"},"Basic")," and ",(0,r.kt)("strong",{parentName:"p"},"Advanced Version")," of the SaaS application, complemented by additional ",(0,r.kt)("strong",{parentName:"p"},"Expert Features"),". This section will give you a brief overview of the versions and the requirements from an SAP BTP perspective. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Basic Version")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Basic Version")," contains a very comprehensive version of the ",(0,r.kt)("strong",{parentName:"p"},"SusaaS (Sustainable SaaS)")," application, which can be deployed to your SAP BTP account using ",(0,r.kt)("strong",{parentName:"p"},"free (tier) service plans")," only. It is the foundation of the Advanced Version. The objective of this version is a SaaS application that can be deployed and tested by each and every developer in the community. It contains all major SaaS components (including an Inbound API) which are also part of the Advanced Version but excludes additional services (not available in Trial environments) which will be part of the next version. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advanced Version")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Advanced")," version adds further enterprise features to your SusaaS application like "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a SAP S/4HANA backend pushing data to the SaaS APIs"),(0,r.kt)("li",{parentName:"ul"},"SAP API Management for managing your SaaS API"),(0,r.kt)("li",{parentName:"ul"},"users being centrally managed in SAP Identity Authentication Service")),(0,r.kt)("p",null,"Some Advanced Version features are not available in the SAP BTP Trial environment like SAP Identity Authentication Service. For this reason, you will either need a Free Tier or SAP BTP enterprise account to use these services. The same applies to an SAP S/4HANA system, which you either need to bring yourself or you need to set up a ",(0,r.kt)("a",{parentName:"p",href:"https://cal.sap.com/"},"CAL instance")," which will cost you a few dollars per month (don't forget to stop your system if not in use :)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Expert Features")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important")," - The Expert Features are still Work-in-Progress. The code and documentation are subject to change. ")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Expert Features")," contain a lot of additional expert knowledge for developers implementing SaaS applications on SAP BTP. The different topics of the Expert Features mostly result from experiences of the latest learnings and challenges of a Proof-of-Concept which was conducted with SAP partners. "),(0,r.kt)("p",null,"The topics include but are not limited to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using a custom domain for your SaaS app "),(0,r.kt)("li",{parentName:"ul"},"Handling Tenant database containers"),(0,r.kt)("li",{parentName:"ul"},"Providing your SaaS application in multiple regions"),(0,r.kt)("li",{parentName:"ul"},"Applying extensions for your SaaS consumers"),(0,r.kt)("li",{parentName:"ul"},"Integrating a customer's Identity Provider"),(0,r.kt)("li",{parentName:"ul"},"Sending e-mails using Microsoft Graph"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("h2",{id:"2-github-repository"},"2. GitHub Repository"),(0,r.kt)("p",null,"You can find the code of the sample application in the following sap-samples GitHub repository. You can either clone or fork the repository to your own GitHub account. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas"},"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas")),(0,r.kt)("p",null,"The repository contains one branch ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/tree/main/"},(0,r.kt)("strong",{parentName:"a"},"main"))," for the tutorial documentation and source code."),(0,r.kt)("h2",{id:"3-tutorial-audience"},"3. Tutorial Audience"),(0,r.kt)("p",null,"While the ecosystem of partner-built software for SAP On-Premise solutions has grown very well over the last decades, the available partner offerings and the interest in building solutions on SAP BTP starts to increase. A lot of SAP partners wonder how to port their existing developments to the cloud, to satisfy the demand of their existing customers moving to SAP BTP, or reach out to a much broader market than before. "),(0,r.kt)("p",null,"For that reason, this tutorial and the related topic of developing multitenant SaaS applications using the ",(0,r.kt)("strong",{parentName:"p"},"SAP BTP, Kyma Runtime")," is of great interest to partners and customers. It is supposed to give all interested stakeholders an introduction to the theoretical basics of Software as a Service on SAP BTP and provides a great codebase that can be used to kickstart your own implementation. Whereas a similar tutorial already exists for the ",(0,r.kt)("strong",{parentName:"p"},"SAP BTP, Cloud Foundry runtime")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-cf-cap-multitenant-susaas"},"see here"),"), the current scenario makes use of the ",(0,r.kt)("strong",{parentName:"p"},"SAP BTP, Kyma runtime"),". "),(0,r.kt)("p",null,"There is no previous knowledge required for this tutorial, so all new but also experienced developers can set up the sample application. Nevertheless, a basic understanding of SAP BTP service offerings will help you grasp the ideas and concepts. "),(0,r.kt)("h2",{id:"4-focus-topics"},"4. Focus Topics"),(0,r.kt)("p",null,"The main topics of the tutorial include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understanding Software as a Service and multitenancy"),(0,r.kt)("li",{parentName:"ul"},"Discover how CAP supports developing multitenant apps"),(0,r.kt)("li",{parentName:"ul"},"Using SaaS-features of SAP Business Technology Platform"),(0,r.kt)("li",{parentName:"ul"},"Developing extensions for SAP solutions like S/4HANA based on ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the latest SAP CAP release features"),(0,r.kt)("li",{parentName:"ul"},"a UI based on SAP Fiori Elements for OData v4 "),(0,r.kt)("li",{parentName:"ul"},"SAP HANA Cloud as a powerful persistence layer"),(0,r.kt)("li",{parentName:"ul"},"APIs for flexible Subscriber data integration"),(0,r.kt)("li",{parentName:"ul"},"and many more..."))),(0,r.kt)("li",{parentName:"ul"},"Expert topics to consider when building SaaS apps like",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"set up a custom domain for your app"),(0,r.kt)("li",{parentName:"ul"},"deploying your app to multiple regions"),(0,r.kt)("li",{parentName:"ul"},"handling Tenant database containers"),(0,r.kt)("li",{parentName:"ul"},"approaching local development and hybrid testing"),(0,r.kt)("li",{parentName:"ul"},"and many more...")))),(0,r.kt)("h2",{id:"5-obtain-support"},"5. Obtain Support"),(0,r.kt)("p",null,"Please check if you find your issue described in the ",(0,r.kt)("strong",{parentName:"p"},"Known Issues")," section (",(0,r.kt)("a",{parentName:"p",href:"/PAA/@navyakhurana-patch-99/#known-issues"},"click here"),"). If not, please create a GitHub issue to get support or to report a bug (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/issues"},"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/issues"),")."),(0,r.kt)("p",null,"docs/overview.md"),(0,r.kt)("h2",{id:"6-provide-feedback"},"6. Provide Feedback"),(0,r.kt)("p",null,"Nobody is perfect so please let us know how we can improve our samples so that you can take the most out of it! Feel free to share your feedback with us by creating an issue in GitHub as described above. This will help us to improve this tutorial and further content for you and other stakeholders. "),(0,r.kt)("h2",{id:"7-whats-new"},"7. What's New"),(0,r.kt)("p",null,"Check the latest release and ",(0,r.kt)("strong",{parentName:"p"},"What's New")," details in the respective card of the ",(0,r.kt)("strong",{parentName:"p"},"Discover")," tutorial version (",(0,r.kt)("a",{parentName:"p",href:"/PAA/@navyakhurana-patch-99/project-panel/discover/whats-new/"},"click here"),")."))}d.isMDXComponent=!0},60985:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/App_Architecture-b2b19061f107b465d03a4fc64bfc049b.png"},22727:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/App_ArchitectureDetails-413621d553782d75563c31cf33071cfd.png"},4452:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/App_Assessment_01-b5181397e5957ef9586dc2fd43f107a0.png"},82123:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/App_Assessment_02-9b475936dbd606ba8536d2141fee96ff.png"},34969:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/App_Launchpad-fbbf380c858fe7a2eb26a4e9a587a366.png"},2445:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/App_Overview-81ba09203c3522a3036ebe2d3bdaddfe.png"}}]);