"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[5532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:12},l="Optional - Undeploy the SaaS Application",i={unversionedId:"project-panel/basic/undeploy-saas-application/README",id:"project-panel/basic/undeploy-saas-application/README",title:"Optional - Undeploy the SaaS Application",description:"Important - If you are planning to setup the Advanced Version next, please consider this part of the tutorial optional!",source:"@site/docs/project-panel/2-basic/11-undeploy-saas-application/README.md",sourceDirName:"project-panel/2-basic/11-undeploy-saas-application",slug:"/project-panel/basic/undeploy-saas-application/",permalink:"/PAA/project-panel/basic/undeploy-saas-application/",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Optional - Unsubscribe from a Consumer Subaccount",permalink:"/PAA/project-panel/basic/unsubscribe-consumer-subaccount/"},next:{title:"Advanced",permalink:"/PAA/category/advanced"}},p={},s=[{value:"1. Undeploy the SaaS application",id:"1-undeploy-the-saas-application",level:2},{value:"2. Check successful Undeployment",id:"2-check-successful-undeployment",level:2},{value:"3. Further Information",id:"3-further-information",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"optional---undeploy-the-saas-application"},"Optional - Undeploy the SaaS Application"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important")," - If you are planning to setup the ",(0,r.kt)("strong",{parentName:"p"},"Advanced Version")," next, please consider this part of the tutorial optional!")),(0,r.kt)("p",null,"If you want to undeploy/uninstall the SaaS application and all related services and resources from your Kmya Cluster please follow the steps below. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#optional---undeploy-the-saas-application"},"Optional - Undeploy the SaaS Application"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-undeploy-the-saas-application"},"1. Undeploy the SaaS application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-check-successful-undeployment"},"2. Check successful Undeployment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-further-information"},"3. Further Information"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important")," - For the undeployment of a SaaS solutions from your Kyma Cluster, it is ",(0,r.kt)("strong",{parentName:"p"},"essential")," that all existing subscriptions are deleted beforehand! Otherwise, existing service clones (e.g., created by XSUAA during the subscription dependency callbacks) will not be properly removed and corresponding Services Instances cannot be deleted without further ado!")),(0,r.kt)("h2",{id:"1-undeploy-the-saas-application"},"1. Undeploy the SaaS application"),(0,r.kt)("p",null,"1.1. Make sure you unsubscribed from the SaaS application in all ",(0,r.kt)("strong",{parentName:"p"},"Consumer Subaccounts")," before starting the undeployment. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Hint")," - You can check and also remove existing subscriptions using the Subscription Management Dashboard (",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/btp/sap-business-technology-platform/using-subscription-management-dashboard"},"click here")," for details). ")),(0,r.kt)("p",null,"1.2. Delete all API Service Broker instances from the ",(0,r.kt)("strong",{parentName:"p"},"Consumer Subaccounts")," before undeploying."),(0,r.kt)("p",null,"1.3. Ensure that your API Service Broker is unregistered (",(0,r.kt)("a",{parentName:"p",href:"/PAA/project-panel/basic/unsubscribe-consumer-subaccount/#2-check-successful-unsubscription"},"click here"),") from all ",(0,r.kt)("strong",{parentName:"p"},"Consumer Subaccounts"),". "),(0,r.kt)("p",null,"1.4. Uninstall the Helm Release of your SaaS application from the Kyma Cluster of your ",(0,r.kt)("strong",{parentName:"p"},"Provider Subaccount")," by running the following command. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm uninstall susaas -n <Namespace>\n")),(0,r.kt)("p",null,"1.5. Optional - Undeploy the SAP Alert Notification Service Instance from the Kyma Cluster of your ",(0,r.kt)("strong",{parentName:"p"},"Provider Subaccount")," by running the following command. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm uninstall alert-notification -n <Namespace>\n")),(0,r.kt)("h2",{id:"2-check-successful-undeployment"},"2. Check successful Undeployment"),(0,r.kt)("p",null,"Check within your Kyma Cluster or in your SAP BTP Cockpit, whether if all Service Bindings, Service Instances, Secrets and Deployments. "),(0,r.kt)("p",null,"If there are any artifacts remaining in the Kyma Cluster of your Provider Subaccount, please delete them in the following sequence:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application workloads (Jobs, Deployments, ReplicaSets, Pods)"),(0,r.kt)("li",{parentName:"ul"},"SAP BTP Service Bindings"),(0,r.kt)("li",{parentName:"ul"},"SAP BTP Service Instances")),(0,r.kt)("p",null,"Also double-check if all Istio-related objects as well as Network Policies and Config Maps have been successfully removed. "),(0,r.kt)("h2",{id:"3-further-information"},"3. Further Information"),(0,r.kt)("p",null,"Please use the following links to find further information on the topics above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Currently no further information is available!")))}m.isMDXComponent=!0}}]);