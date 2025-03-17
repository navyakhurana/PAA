"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[7320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||i;return n?a.createElement(d,s(s({ref:t},l),{},{components:n})):a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:11},s="Optional - Unsubscribe from a Consumer Subaccount",o={unversionedId:"project-panel/basic/unsubscribe-consumer-subaccount/README",id:"project-panel/basic/unsubscribe-consumer-subaccount/README",title:"Optional - Unsubscribe from a Consumer Subaccount",description:"If you are planning to setup the Advanced Version next, please consider this part of the tutorial optional!",source:"@site/docs/project-panel/2-basic/10-unsubscribe-consumer-subaccount/README.md",sourceDirName:"project-panel/2-basic/10-unsubscribe-consumer-subaccount",slug:"/project-panel/basic/unsubscribe-consumer-subaccount/",permalink:"/PAA/@navyakhurana-patch-99/project-panel/basic/unsubscribe-consumer-subaccount/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya Khurana",lastUpdatedAt:1742203675,formattedLastUpdatedAt:"Mar 17, 2025",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Shared Database Container",permalink:"/PAA/@navyakhurana-patch-99/project-panel/basic/explore-the-components/components/SharedContainer"},next:{title:"Optional - Undeploy the SaaS Application",permalink:"/PAA/@navyakhurana-patch-99/project-panel/basic/undeploy-saas-application/"}},c={},u=[{value:"1. Delete the service instance and unsubscribe",id:"1-delete-the-service-instance-and-unsubscribe",level:2},{value:"2. Check successful Unsubscription",id:"2-check-successful-unsubscription",level:2},{value:"3. Further Information",id:"3-further-information",level:2}],l={toc:u},p="wrapper";function b(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"optional---unsubscribe-from-a-consumer-subaccount"},"Optional - Unsubscribe from a Consumer Subaccount"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,r.kt)("p",{parentName:"admonition"},"If you are planning to setup the ",(0,r.kt)("strong",{parentName:"p"},"Advanced Version")," next, please consider this part of the tutorial optional!")),(0,r.kt)("p",null,"If a subaccount is subscribed to our multitenant SaaS sample application and created a service instance for the related SaaS API, the subaccount will resemble the below screenshot. "),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/customer-subaccount.png&quot; width=&quot;500&quot;/&gt;",src:n(11520).Z,width:"2522",height:"1400"})),(0,r.kt)("p",null,"The following steps show you how to unsubscribe from the SaaS application and how to remove the API Service Broker instance from such a Tenant Subaccount."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#optional---unsubscribe-from-a-consumer-subaccount"},"Optional - Unsubscribe from a Consumer Subaccount"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-delete-the-service-instance-and-unsubscribe"},"1. Delete the service instance and unsubscribe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-check-successful-unsubscription"},"2. Check successful Unsubscription")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-further-information"},"3. Further Information"))))),(0,r.kt)("h2",{id:"1-delete-the-service-instance-and-unsubscribe"},"1. Delete the service instance and unsubscribe"),(0,r.kt)("p",null,"1.1. Remove the service binding of the Sustainable SaaS API service instance."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/delete-service-binding.png&quot; width=&quot;700&quot;/&gt;",src:n(15450).Z,width:"2516",height:"1400"})),(0,r.kt)("p",null,"1.2. Delete the Sustainable SaaS API service instance."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/delete-service-instance.png&quot; width=&quot;700&quot;/&gt;",src:n(79116).Z,width:"2512",height:"1402"})),(0,r.kt)("p",null,"1.3. Unsubscribe from the Sustainable SaaS sample application."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/unsubscribe.png&quot; width=&quot;700&quot;/&gt;",src:n(64988).Z,width:"2522",height:"1368"})),(0,r.kt)("h2",{id:"2-check-successful-unsubscription"},"2. Check successful Unsubscription"),(0,r.kt)("p",null,"Please check, whether the Sustainable SaaS API Service Broker has unregistered successfully. The ",(0,r.kt)("strong",{parentName:"p"},"Sustainable SaaS API Service Broker")," is automatically unregistered when unsubscribing from the Sustainable SaaS application in a Consumer Subaccount. Consequently, the Sustainable SaaS API Service should not be visible in a Consumer Subaccount anymore, when a new service instance creation attempt is made from that subaccount. As you can see below, the ",(0,r.kt)("strong",{parentName:"p"},"Sustainable SaaS API")," Service is not visible anymore."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/check-broker-unregister.png&quot; width=&quot;700&quot;/&gt;",src:n(97661).Z,width:"1488",height:"1384"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,r.kt)("p",{parentName:"admonition"},"If your Service Broker is not unregistered automatically, you must unregister it with the help of SAP BTP CLI using this ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/BTP/btp-cli/btp-unregister-services-broker.html"},"command"),". Make sure your Service Broker is unregistered because otherwise you can ",(0,r.kt)("strong",{parentName:"p"},"not")," delete the respective subaccount.")),(0,r.kt)("h2",{id:"3-further-information"},"3. Further Information"),(0,r.kt)("p",null,"Please use the following links to find further information on the topics above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/SERVICEMANAGEMENT/09cc82baadc542a688176dce601398de/753463e1542f445895b420cd7957811c.html?&locale=en-US"},"SAP Help - Deleting Service Instances")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/btp-cli/btp-unregister-services-broker.html"},"SAP Help - Unregister Services Broker"))))}b.isMDXComponent=!0},97661:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/check-broker-unregister-75d126b3c431c2dbb7bafdb19607fa8b.png"},11520:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/customer-subaccount-e5cc4dadef25ebb4f0a856eb7e14f2a5.png"},15450:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/delete-service-binding-3beb96cc850438658d43dff4acbb437a.png"},79116:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/delete-service-instance-ed45539e3350d918fd7d437d3fbe2a71.png"},64988:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unsubscribe-7f89cce20a053f1920883bf42935d7c4.png"}}]);