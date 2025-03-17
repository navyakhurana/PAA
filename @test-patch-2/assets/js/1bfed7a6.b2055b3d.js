"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[6230],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},23491:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},l="Deep Dive into Helper Classes",s={unversionedId:"project-panel/basic/explore-the-components/components/HelperClasses",id:"project-panel/basic/explore-the-components/components/HelperClasses",title:"Deep Dive into Helper Classes",description:"In this part of the tutorial, you will learn about the different helper classes implemented in the business application service. These classes mainly support the automation of the Tenant subscription process. Furthermore, they contain the logic of the in-app user management.",source:"@site/docs/project-panel/2-basic/9-explore-the-components/components/HelperClasses.md",sourceDirName:"project-panel/2-basic/9-explore-the-components/components",slug:"/project-panel/basic/explore-the-components/components/HelperClasses",permalink:"/PAA/@test-patch-2/project-panel/basic/explore-the-components/components/HelperClasses",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya Khurana",lastUpdatedAt:1742201256,formattedLastUpdatedAt:"Mar 17, 2025",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/PAA/@test-patch-2/category/components-1"},next:{title:"Deep Dive into Multitenancy",permalink:"/PAA/@test-patch-2/project-panel/basic/explore-the-components/components/Multitenancy"}},o={},p=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Automator",id:"2-automator",level:2},{value:"3. Cloud Management Helper",id:"3-cloud-management-helper",level:2},{value:"4. Service Manager Helper",id:"4-service-manager-helper",level:2},{value:"5. Token Helper",id:"5-token-helper",level:2},{value:"6. Destination Helper",id:"6-destination-helper",level:2},{value:"7. API Rule Helper",id:"7-api-rule-helper",level:2},{value:"8. User Management Helper",id:"8-user-management-helper",level:2},{value:"9. Alert Notification Helper",id:"9-alert-notification-helper",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deep-dive-into-helper-classes"},"Deep Dive into Helper Classes"),(0,r.kt)("p",null,"In this part of the tutorial, you will learn about the different helper classes implemented in the business application service. These classes mainly support the automation of the Tenant subscription process. Furthermore, they contain the logic of the in-app user management.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deep-dive-into-helper-classes"},"Deep Dive into Helper Classes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-overview"},"1. Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-automator"},"2. Automator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-cloud-management-helper"},"3. Cloud Management Helper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#4-service-manager-helper"},"4. Service Manager Helper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#5-token-helper"},"5. Token Helper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#6-destination-helper"},"6. Destination Helper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#7-api-rule-helper"},"7. API Rule Helper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#8-user-management-helper"},"8. User Management Helper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#9-alert-notification-helper"},"9. Alert Notification Helper"))))),(0,r.kt)("h2",{id:"1-overview"},"1. Overview"),(0,r.kt)("p",null,"The table below shows all helper classes used by the Sustainable SaaS business application service:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Util"),(0,r.kt)("th",{parentName:"tr",align:null},"Source Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#2-Automator"},"Automator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/automator.js"},"automator.js")),(0,r.kt)("td",{parentName:"tr",align:null},"Helper class for automatic creation and deletion of artifacts on Tenant (un-)subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#3-Cloud-Management-Helper"},"Cloud-Management-Helper")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/cis-central.js"},"cis-central.js")),(0,r.kt)("td",{parentName:"tr",align:null},"Helper class interacting with Cloud Management Service (central plan)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#4-Service-Manager-Helper"},"Service-Manager-Helper")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/service-manager.js"},"service-manager.js")),(0,r.kt)("td",{parentName:"tr",align:null},"Helper class interacting with Service Manager Subaccount (admin plan)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#5-Token-Helper"},"Token-Helper")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/token-utils.js"},"token-utils.js")),(0,r.kt)("td",{parentName:"tr",align:null},"Helper class retrieving tokens from relevant OAuth2 servers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#6-Destination-Helper"},"Destination-Helper")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/destination.js"},"destination.js")),(0,r.kt)("td",{parentName:"tr",align:null},"Helper module interacting with the SAP Destination Service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#7-API-Rule-Helper"},"API-Rule-Helper")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/destination.js"},"apiRule.js")),(0,r.kt)("td",{parentName:"tr",align:null},"Helper module interacting with SAP Kyma Runtime API Rule CRD's")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#8-User-Management-Helper"},"User-Management-Helper")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/user-management-utils.js"},"user-management.js")),(0,r.kt)("td",{parentName:"tr",align:null},"Helper class for User and Role management interacting with SAP Identity Authentication and XSUAA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#9-Alert-Notification-Helper"},"Alert-Notification-Helper")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/alertNotification.js"},"alertNotification.js")),(0,r.kt)("td",{parentName:"tr",align:null},"Helper class for interacting with SAP Alert Notification service")))),(0,r.kt)("h2",{id:"2-automator"},"2. Automator"),(0,r.kt)("p",null,"For effortless Tenant on-offboarding in the SaaS context, it is essential to automate the process of onboarding as much as it can be automated. Therefore, the sample application automates as many steps as possible during the subscription of the SaaS Tenant instance. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/automator.js"},"Automator")," module helps to provide a fully automated, self-service (un-) subscription experience."),(0,r.kt)("p",null,"The Automator is responsible for the following topics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creation of destinations in a Consumer Subaccount on subscription with the help of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/destination.js"},"destination.js"),"."),(0,r.kt)("li",{parentName:"ul"},"Deletion of destinations from Consumer Subaccount on unsubscription with the help of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/destination.js"},"destination.js"),"."),(0,r.kt)("li",{parentName:"ul"},"Creation of a Cloud Management service instance & binding within the Provider Subaccount ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/cis-central.js"},"cis-central.js")),(0,r.kt)("li",{parentName:"ul"},"Deletion of a Cloud Management service instance & binding from the Provider Subaccount ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/cis-central.js"},"cis-central.js")),(0,r.kt)("li",{parentName:"ul"},"Creation of a service manager service instance & binding within a Consumer Subaccount with the help of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/cis-central.js"},"cis-central.js"),"."),(0,r.kt)("li",{parentName:"ul"},"Deletion of a service manager service instance & binding from a Consumer Subaccount with the help of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/cis-central.js"},"cis-central.js"),"."),(0,r.kt)("li",{parentName:"ul"},"Registering of a service broker in a Consumer Subaccount on subscription with the help of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/service-manager.js"},"service-manager.js"),"."),(0,r.kt)("li",{parentName:"ul"},"Unregistering of a service broker from a Consumer Subaccount on unsubscription with the help of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/service-manager.js"},"service-manager.js"),".")),(0,r.kt)("p",null,"When a Tenant subscribes to the Sustainable SaaS app,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A new Cloud Management Service instance (central plan) will be created in the Provider Subaccount. "),(0,r.kt)("li",{parentName:"ol"},"A new Service Manager instance will be created in the Consumer Subaccount using the Cloud Management Service instance."),(0,r.kt)("li",{parentName:"ol"},"The API Broker will be registered by the Service Manager instance created in step 2."),(0,r.kt)("li",{parentName:"ol"},"A sample destination called ",(0,r.kt)("strong",{parentName:"li"},"*","_S4HANA_CLOUD")," will be created."),(0,r.kt)("li",{parentName:"ol"},"The Service Manager instance created in step 2 will be deleted again."),(0,r.kt)("li",{parentName:"ol"},"The Cloud Management Service instance created in step 1 will be deleted again.")),(0,r.kt)("p",null,"When a Tenant unsubscribes from the Sustainable SaaS app,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A new Cloud Management Service instance (central plan) will be created in the Provider Subaccount. "),(0,r.kt)("li",{parentName:"ol"},"A new Service Manager instance will be created in the Consumer Subaccount using the Cloud Management Service instance."),(0,r.kt)("li",{parentName:"ol"},"The API Broker will be unregistered by the Service Manager instance created in Step 2."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"*","_S4HANA_CLOUD")," destination will be deleted."),(0,r.kt)("li",{parentName:"ol"},"The Service Manager instance created in Step 2 will be deleted."),(0,r.kt)("li",{parentName:"ol"},"The Cloud Management Service instance created in step 1 will be deleted again.")),(0,r.kt)("h2",{id:"3-cloud-management-helper"},"3. Cloud Management Helper"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/17b6a171552544a6804f12ea83112a3f.html?locale=en-US&q=Cloud%20Management%20Central"},"SAP BTP Cloud Management Service")," enables SAP BTP administrators to handle administrative tasks via APIs."),(0,r.kt)("p",null,"In this Sustainable SaaS application context, we are using ",(0,r.kt)("strong",{parentName:"p"},"SAP BTP Cloud Management Service")," to create and delete Service Manager instances in Consumer Subaccounts. To be able to do this, the Cloud Management helper class also contains functions to create and to delete a new Cloud Management Service instance (central plan) on runtime within the Provider Subaccount."),(0,r.kt)("p",null,'Only a Cloud Management Service instance of plan "central" and grant type ',(0,r.kt)("strong",{parentName:"p"},"clientCredentials"),' can be used to create service instances in other subaccounts (like in this case a service manager instance). This special type of Cloud Management Service cannot be created during deployment, but has to be created and deleted during runtime, using a dedicated service manager instance of plan "subaccount-admin". The default service manager instance used by Kyma (plan service-operator-access) cannot be used to create such an instance. '),(0,r.kt)("h2",{id:"4-service-manager-helper"},"4. Service Manager Helper"),(0,r.kt)("p",null,"Service Manager is a central registry for service brokers and platforms. It tracks service instances creation and allows sharing of services and service instances between different platform instances. The Service Manager allows an application to use services and service instances of multiple platforms."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/service-manager.js"},"Service Manager helper")," module is used for (un-)registering the API Broker in the Sustainable SaaS App context by interacting with the ",(0,r.kt)("a",{parentName:"p",href:"https://api.sap.com/api/APIServiceManagment/overview"},"Service Manager service instance"),"."),(0,r.kt)("h2",{id:"5-token-helper"},"5. Token Helper"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/token-utils.js"},"Token helper")," module is used for retrieving tokens from OAuth2 servers using the client credentials type."),(0,r.kt)("h2",{id:"6-destination-helper"},"6. Destination Helper"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./user-management.js"},"Destination Helper Module")," is used for retrieving, creating, and deleting destinations in any given subaccount."),(0,r.kt)("h2",{id:"7-api-rule-helper"},"7. API Rule Helper"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./apiRule.js"},"API Rule Helper Module")," is used during subscription, to create new API Rules in the Kyma cluster. These API rules expose a dedicated host for each Subscriber like ",(0,r.kt)("strong",{parentName:"p"},"customer.saasapp.com"),". If user creating the subscription does not provide a custom domain, the default host pattern incl. the subaccount subdomain will be used like ",(0,r.kt)("strong",{parentName:"p"},"customer-379a13f-susaas-router-susaas.saasapp.com"),"."),(0,r.kt)("h2",{id:"8-user-management-helper"},"8. User Management Helper"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/user-management-utils.js"},"User Management Helper")," module is used for handling users and role assignments on both SAP IAS and XSUAA. For this use-case, it is required to allow in-app user management for consumers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requirements")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A Tenant administrator should be able to create users without accessing the SAP BTP Consumer Subaccount."),(0,r.kt)("li",{parentName:"ol"},"A Tenant administrator should be able to assign role collections to users without accessing the SAP BTP Consumer Subaccount."),(0,r.kt)("li",{parentName:"ol"},"A Tenant administrator should be able to delete users without accessing the SAP BTP Consumer Subaccount.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How does the creation of a user work?")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A User is created in ",(0,r.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/IDENTITY_AUTHENTICATION/6d6d63354d1242d185ab4830fc04feb1/d17a116432d24470930ebea41977a888.html?version=Cloud&locale=en-US"},"SAP IAS")," (",(0,r.kt)("strong",{parentName:"li"},"Only if IAS usage is enabled!"),")."),(0,r.kt)("li",{parentName:"ol"},"An XSUAA shadow user is created in the SAP BTP Consumer Subaccount."),(0,r.kt)("li",{parentName:"ol"},"The chosen role is assigned to the Shadow User for authorization purposes.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How does the deletion of a user work?")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user is deleted from the Tenant Subaccount."),(0,r.kt)("li",{parentName:"ol"},"The User is deleted from SAP IAS (",(0,r.kt)("strong",{parentName:"li"},"Only if IAS usage is enabled!"),").")),(0,r.kt)("p",null,"To be able to provide this functionality, the User-Management-Helper interacts with SAP IAS APIs as well as XSUAA APIs."),(0,r.kt)("h2",{id:"9-alert-notification-helper"},"9. Alert Notification Helper"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/main/code/srv/utils/alertNotification.js"},"Alert Notification Helper")," helper is used to interact with SAP BTP Alert Notification Service. In this sample, the provided functions allow you to send a generic notification to recipients of the event."))}m.isMDXComponent=!0}}]);