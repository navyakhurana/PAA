"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[6540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={},r="Deep Dive into Multitenancy",s={unversionedId:"project-panel/basic/explore-the-components/components/Multitenancy",id:"project-panel/basic/explore-the-components/components/Multitenancy",title:"Deep Dive into Multitenancy",description:"In this part of the tutorial, you will learn about different aspects of multitenancy and how multitenancy is handled by the SaaS application.",source:"@site/docs/project-panel/2-basic/9-explore-the-components/components/Multitenancy.md",sourceDirName:"project-panel/2-basic/9-explore-the-components/components",slug:"/project-panel/basic/explore-the-components/components/Multitenancy",permalink:"/PAA/@navyakhurana-navyakhurana-patch-2/project-panel/basic/explore-the-components/components/Multitenancy",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya khurana",lastUpdatedAt:1693289879,formattedLastUpdatedAt:"Aug 29, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deep Dive into Helper Classes",permalink:"/PAA/@navyakhurana-navyakhurana-patch-2/project-panel/basic/explore-the-components/components/HelperClasses"},next:{title:"Deep Dive into Service Brokers",permalink:"/PAA/@navyakhurana-navyakhurana-patch-2/project-panel/basic/explore-the-components/components/ServiceBrokers"}},p={},l=[{value:"1. Application Router",id:"1-application-router",level:2},{value:"1.1. Application Router and identity zones",id:"11-application-router-and-identity-zones",level:3},{value:"1.2. Application Router and multitenancy authentication",id:"12-application-router-and-multitenancy-authentication",level:3},{value:"2. Authorization &amp; Trust management service",id:"2-authorization--trust-management-service",level:2},{value:"2.1. Authorization &amp; Trust management service - <strong>shared</strong> tenant-mode",id:"21-authorization--trust-management-service---shared-tenant-mode",level:3},{value:"2.2. Authorization &amp; Trust management service - <strong>application</strong> plan",id:"22-authorization--trust-management-service---application-plan",level:3},{value:"3. Further information",id:"3-further-information",level:2}],c={toc:l},u="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deep-dive-into-multitenancy"},"Deep Dive into Multitenancy"),(0,i.kt)("p",null,"In this part of the tutorial, you will learn about different aspects of multitenancy and how multitenancy is handled by the SaaS application."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#1-Application-Router"},"Application Router"),(0,i.kt)("br",{parentName:"p"}),"\n","1.1. ",(0,i.kt)("a",{parentName:"p",href:"#11-Application-Router-and-identity-zones"},"Application Router and identity zones"),(0,i.kt)("br",{parentName:"p"}),"\n","1.2. ",(0,i.kt)("a",{parentName:"p",href:"#12-Application-Router-and-multitenancy-authentication"},"Application Router and multitenancy authentication"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#2-Authorization-&-Trust-management-service"},"Authorization & Trust management service"),(0,i.kt)("br",{parentName:"p"}),"\n","2.1. ",(0,i.kt)("a",{parentName:"p",href:"#21-Authorization-&-Trust-management-service---shared-tenant-mode"},"shared tenant-mode"),(0,i.kt)("br",{parentName:"p"}),"\n","2.2. ",(0,i.kt)("a",{parentName:"p",href:"#22-Authorization-&-Trust-management-service---application-plan"},"application plan"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#3-further-information"},"Further Information")))),(0,i.kt)("h2",{id:"1-application-router"},"1. Application Router"),(0,i.kt)("p",null,"The application router is the single point of entry for most applications running in SAP BTP. The application router is used to serve static content, authenticate users, rewrite URLs, and forward or proxy requests to other microservices while propagating user information. "),(0,i.kt)("h3",{id:"11-application-router-and-identity-zones"},"1.1. Application Router and identity zones"),(0,i.kt)("p",null,"Each multitenant application has to deploy its own application router, and the application router handles requests of all Tenants to the application. The application router can determine the Tenant identifier from the URL subdomain and then forwards the authentication request to the User Account and Authentication (UAA) service and the related identity zone. Each identity zone can be uniquely identified by a subdomain identifier. An identity zone is a logical boundary around the entities UAA manages. "),(0,i.kt)("p",null,"Those entities in a zone include and define e.g.:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users"),(0,i.kt)("li",{parentName:"ul"},"Group mappings"),(0,i.kt)("li",{parentName:"ul"},"Identity providers (IDPs) and access")),(0,i.kt)("p",null,"This allows each Tenant Subaccount to handle users and authentication processes independently by e.g. using a custom IDP. As each request to the application router is forwarded to the correct identity zone, this allows a very flexible authentication approach. To read more about identity zones please refer to the official Cloud Foundry documentation (",(0,i.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/uaa/uaa-concepts.html#iz"},"click here"),")."),(0,i.kt)("h3",{id:"12-application-router-and-multitenancy-authentication"},"1.2. Application Router and multitenancy authentication"),(0,i.kt)("p",null,"The following steps are happening during the authentication of Consumer requests in a multitenant application. To learn more about the prerequisites like tenant-mode ",(0,i.kt)("strong",{parentName:"p"},"shared")," and the ",(0,i.kt)("strong",{parentName:"p"},"application")," service plan, please read the following sections providing more details. "),(0,i.kt)("p",null,"The application router must determine the tenant-specific subdomain for the UAA that in turn determines the identity zone, used for authentication. This determination is done by the ",(0,i.kt)("inlineCode",{parentName:"p"},"TENANT_HOST_PATTERN")," environment variable. The ",(0,i.kt)("inlineCode",{parentName:"p"},"TENANT_HOST_PATTERN")," is a string containing a regular expression with a capturing group. The request-host is matched against this regular expression. The value of the first capturing group is used as the Tenant subdomain."),(0,i.kt)("p",null,"If you have multiple routes to the same application, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"tenant1.<application domain>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tenant2.<application domain>")," the respective ",(0,i.kt)("inlineCode",{parentName:"p"},"TENANT_HOST_PATTERN")," could be ",(0,i.kt)("inlineCode",{parentName:"p"},"^(.*).<application domain>")," capturing the group ",(0,i.kt)("inlineCode",{parentName:"p"},"tenant1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tenant2"),"."),(0,i.kt)("p",null,"This URL-based method of identifying a Tenant by handling consumer-specific authentication requirements is also depicted in the following visualization. Together with the steps described below, you should get a good idea of how multitenancy in SAP BTP is implemented. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/AR_Flow.png&quot; width=&quot;800&quot;/&gt;",src:n(10614).Z,width:"2016",height:"954"})),(0,i.kt)("p",null,"1) The application router derives the identity zone identifier from the URL using the ",(0,i.kt)("inlineCode",{parentName:"p"},"TENANT_HOST_PATTERN")," approach described above. Each Consumer Subaccount maps to a unique identity zone and a unique subdomain associated with this identity zone. "),(0,i.kt)("p",null,"2) The application router calls the tenant-aware XSUAA service, which is responsible for the authentication of the business user."),(0,i.kt)("p",null,"3) XSUAA reads the Tenant and gets the consumer-specific identity provider (IdP) from the tenant-specific identity zone. "),(0,i.kt)("p",null,"4) XSUAA delegates the authentication to the configured IdP, and creates a JSON Web Token (JWT) that contains the tenant, the current user, and the authorization scopes of the user. "),(0,i.kt)("p",null,"5) The JWT is then sent back to the application router, and from there to the application."),(0,i.kt)("p",null,"6) To read and store tenant-specific data, the multitenant application needs to know the Tenant ID. "),(0,i.kt)("p",null,"7) To retrieve the Tenant ID, the multitenant application reads the tenant, user, and scopes from the given JWT. "),(0,i.kt)("p",null,"8) The Tenant information is contained in the identityZone user attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},">Sample Java Code to get the user's identityZone   \n>UserInfo userInfo = SecurityContext.getUserInfo();    \n>String identityZone = userInfo.getIdentityZone();\n")),(0,i.kt)("h2",{id:"2-authorization--trust-management-service"},"2. Authorization & Trust management service"),(0,i.kt)("h3",{id:"21-authorization--trust-management-service---shared-tenant-mode"},"2.1. Authorization & Trust management service - ",(0,i.kt)("strong",{parentName:"h3"},"shared")," tenant-mode"),(0,i.kt)("p",null,"The tenant-mode ",(0,i.kt)("strong",{parentName:"p"},"shared")," allows you to share a UAA service instance of type ",(0,i.kt)("strong",{parentName:"p"},"application")," in a multitenant scenario. This is a central requirement of a multitenant application, as otherwise a separate UAA service instance would be required in each and every Consumer Subaccount. As all Tenants share the same XSUAA instance and only the authentication is delegated to the respective Tenant identity zone, this is a great process simplification.  "),(0,i.kt)("p",null,"In a normal scenario in which the tenant-mode ",(0,i.kt)("strong",{parentName:"p"},"dedicated")," is set, XSUAA (overall) would only issue a token for a user, if he authenticates against the identity-zone in which the Auth. & Trust mgmt. service instance was created. If a user would authenticate using another identity-zone authentication endpoint (e.g. ",(0,i.kt)("strong",{parentName:"p"},"consumer"),".authentication.eu10.hana.ondemand.com), using the same Client-ID and Client Secret of the service binding, it fails. The Client-ID and Client Secret can only be used by a ",(0,i.kt)("strong",{parentName:"p"},"dedicated")," identity-zone which is the identity zone in which the Auth. & Trust Management service instance was created. "),(0,i.kt)("p",null,"In a tenant-mode ",(0,i.kt)("strong",{parentName:"p"},"shared")," scenario, XSUAA (Overall) will also issue tokens to users authenticating via other identit -zones (e.g., consumer.authentication.eu10.hana.ondemand.com), using the same Client-ID and Client-Secret which is bound to the application router via service binding to retrieve the token. Nevertheless, XSUAA will only issue a token for identity zones of Consumer Subaccounts and keeps track of these Consumer identity-zones. The Auth. & Trust mgmt. service instance though will be ",(0,i.kt)("strong",{parentName:"p"},"shared")," among multiple identity zones and allows authentication using the exact same Client-ID and Client-Secret (taken from the service binding of the application router) for users authenticated via various identity zones. "),(0,i.kt)("p",null,"After authenticating with the ",(0,i.kt)("strong",{parentName:"p"},"shared")," client credentials to the identity zone of the consumer, XSUAA will issue the respective scopes of the user within the Consumer Subaccount. These scopes are generated in the Consumer Subaccount upon subscription and have the same values in each and every subaccount based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"<xsappname>!t<tenant index>")," format mentioned in the ",(0,i.kt)("strong",{parentName:"p"},"application"),' plan like e.g. "dev-susaas!t134415.Admin",'),(0,i.kt)("p",null,"Below you can see two screenshots of the provider service credentials and a token issued for one of the Consumer tenants. You can see that the Consumer token has been issued using the Client-ID of the Provider Subaccount Auth. & Trust mgmt. service instance. Still, the identity zone (zid) differs from the identity zone of the Provider Subaccount. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Client Credentials")," (Provider subaccount)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/AR_ProvCred.png&quot; width=&quot;400&quot;/&gt;",src:n(13700).Z,width:"1854",height:"1184"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Authorization Token")," (Tenant subaccount)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/AR_SubscrToken.png&quot; width=&quot;400&quot;/&gt;",src:n(51969).Z,width:"1058",height:"1268"})),(0,i.kt)("h3",{id:"22-authorization--trust-management-service---application-plan"},"2.2. Authorization & Trust management service - ",(0,i.kt)("strong",{parentName:"h3"},"application")," plan"),(0,i.kt)("p",null,"The service plan ",(0,i.kt)("strong",{parentName:"p"},"application")," requires that the xsappname (specified in the xs-security.json or mta.yaml file) is unique in each Tenant (SAP BTP subaccount) to which the application is deployed. This means that an application may be deployed in several SAP BTP subaccounts at the same time but not twice in the same Tenant (unless you modify the xsappname). You would get an error message during the second deployment. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,i.kt)("p",{parentName:"admonition"},"In the sample application, the xsappname is dynamically combined with the current Kyma namespace so you can deploy the application to multiple namespaces in the same cluster if you like. ")),(0,i.kt)("p",null,"The xsappname that is written into the credentials section of the environment is enhanced with a suffix and has the format ",(0,i.kt)("inlineCode",{parentName:"p"},"<xsappname>!t<tenant index>"),". A Tenant index is a running number that the UAA maintains internally. It differs from subaccount to subaccount. "),(0,i.kt)("p",null,"In a multitenant scenario, the actual application instances only exist in the Provider Subaccount, whereas XSUAA-related objects like scopes, role templates, and role collections are duplicated during the subscription process. Scopes have an equal format ",(0,i.kt)("inlineCode",{parentName:"p"},"<xsappname>!t<tenant index>.<scope>")," in all Consumer Subaccounts e.g. ",(0,i.kt)("strong",{parentName:"p"},"dev-susaas!t134415.Admin"),"."),(0,i.kt)("h2",{id:"3-further-information"},"3. Further information"),(0,i.kt)("p",null,"Please use the following links to find further information on the topics above:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/5af9067322214e8dbf354daae44cef08.html?locale=en-US"},"SAP Help - Multitenancy Configure the approuter Application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2022/08/27/fundamentals-of-multitenancy-in-sap-btp/"},"SAP Blog - Fundamentals of Multitenancy in SAP BTP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/b9902c314aef4afb8f7a29bf8c5b37b3/6d3ed64092f748cbac691abc5fe52985.html#tenant-mode"},"SAP Help - Tenant Mode: Shared")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/b9902c314aef4afb8f7a29bf8c5b37b3/c6f36d5d49844bd790798ea36538e024.html?locale=en-US&version=2022_3_QRC#xsuaa-service-plan%3A-%E2%80%9Capplication%E2%80%9D"},'SAP Help - XSUAA Service Plan: "application"'))))}h.isMDXComponent=!0},10614:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AR_Flow-3ef327d77ccedbe97ee7bb0f4c01b4f7.png"},13700:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AR_ProvCred-74b31ef1e95d9bacfc7e98087896b176.png"},51969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AR_SubscrToken-3ac779ac836fa550201919693777d140.png"}}]);