"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[7825],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=o.createContext({}),l=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(f,r(r({ref:e},u),{},{components:n})):o.createElement(f,r({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86776:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_position:4},r="Custom Domain for SAP Identity Authentication",s={unversionedId:"project-panel/expert/custom-domain-for-ias/README",id:"project-panel/expert/custom-domain-for-ias/README",title:"Custom Domain for SAP Identity Authentication",description:"In this part of the Expert Features you will learn how to configure a custom domain for your SAP Identity Authentication instance. As the official SAP Help documentation (click here) on this requirement is already quite extensive, we will use this tutorial to show you a sample setup and give you some tips and tricks.",source:"@site/docs/project-panel/4-expert/custom-domain-for-ias/README.md",sourceDirName:"project-panel/4-expert/custom-domain-for-ias",slug:"/project-panel/expert/custom-domain-for-ias/",permalink:"/PAA/@test-workflow1/project-panel/expert/custom-domain-for-ias/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya Khurana",lastUpdatedAt:1739895491,formattedLastUpdatedAt:"Feb 18, 2025",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SaaS Consumer Extensibility",permalink:"/PAA/@test-workflow1/project-panel/expert/consumer-extensibility/"},next:{title:"Custom Domain Usage",permalink:"/PAA/@test-workflow1/project-panel/expert/custom-domain-usage/"}},c={},l=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Configure SAP IAS",id:"2-configure-sap-ias",level:2},{value:"3. CNAME record in DNS",id:"3-cname-record-in-dns",level:2},{value:"4. Additional Steps",id:"4-additional-steps",level:2},{value:"5. Further information",id:"5-further-information",level:2}],u={toc:l},p="wrapper";function m(t){let{components:e,...i}=t;return(0,a.kt)(p,(0,o.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-domain-for-sap-identity-authentication"},"Custom Domain for SAP Identity Authentication"),(0,a.kt)("p",null,"In this part of the Expert Features you will learn how to configure a custom domain for your SAP Identity Authentication instance. As the official SAP Help documentation (",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/IDENTITY_AUTHENTICATION/6d6d63354d1242d185ab4830fc04feb1/c4db840ff2464e12ab68d94efb0769c3.html?locale=en-US"},"click here"),") on this requirement is already quite extensive, we will use this tutorial to show you a sample setup and give you some tips and tricks. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#custom-domain-for-sap-identity-authentication"},"Custom Domain for SAP Identity Authentication"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#1-introduction"},"1. Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#2-configure-sap-ias"},"2. Configure SAP IAS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#3-cname-record-in-dns"},"3. CNAME record in DNS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#4-additional-steps"},"4. Additional Steps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#5-further-information"},"5. Further information"))))),(0,a.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,a.kt)("p",null,"If you followed the ",(0,a.kt)("strong",{parentName:"p"},"Advanced Version")," of our SaaS sample scenario, you have already set up SAP Identity Authentication Service (SAP IAS) as a central user store. All consumer users will be maintained in SAP IAS and also use it to authenticate to their consumer SaaS instances. While that scenario works properly from a technical perspective, there is a tiny downside to the default setup. Your SAP IAS instance will come with a default domain like ",(0,a.kt)("a",{parentName:"p",href:"https://a2por93n.accounts.ondemand.com."},"https://a2por93n.accounts.ondemand.com.")," "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"&lt;img src=&quot;./images/CustomDomain00.png&quot; width=&quot;400&quot; /&gt;",src:n(71222).Z,width:"736",height:"94"})),(0,a.kt)("p",null,"So, whenever a user is forwarded to SAP IAS for authentication, this default domain will appear in the browser window. This is not a problem per se, but also not very nice. For that reason, in this part of the ",(0,a.kt)("strong",{parentName:"p"},"Expert Features")," we will show you, how to configure your custom domain for SAP IAS like ",(0,a.kt)("a",{parentName:"p",href:"https://authentication.sap-demo.com."},"https://authentication.sap-demo.com.")," "),(0,a.kt)("h2",{id:"2-configure-sap-ias"},"2. Configure SAP IAS"),(0,a.kt)("p",null,"2.1. To configure a custom domain in SAP IAS, please go to the admin console of your SAP IAS instance. You can find the respective link in the welcome e-mail which you received when setting up your SAP IAS instance. Another way to navigate to your SAP IAS instance is to click on the subscription in your ",(0,a.kt)("strong",{parentName:"p"},"Instances & Subscriptions")," menu of your SAP BTP Cockpit. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"&lt;img src=&quot;./images/IASInstanceBTP.png&quot; width=&quot;400&quot; /&gt;",src:n(19292).Z,width:"971",height:"474"})),(0,a.kt)("p",null,"2.2. In the SAP IAS admin console, please switch to ",(0,a.kt)("strong",{parentName:"p"},"Applications & Resources")," -> ",(0,a.kt)("strong",{parentName:"p"},"Tenant Settings")," and select ",(0,a.kt)("strong",{parentName:"p"},"Custom Domain")," from the list of settings. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"&lt;img src=&quot;./images/IASCustDomainMenu.png&quot; width=&quot;400&quot; /&gt;",src:n(36348).Z,width:"1020",height:"825"})),(0,a.kt)("p",null,"2.3. You will see the following screen. In the ",(0,a.kt)("strong",{parentName:"p"},"Domain field"),", please provide the custom (sub-)domain that you want to set up for your SAP IAS instance like ",(0,a.kt)("strong",{parentName:"p"},"authentication.sap-demo.com"),". In the ",(0,a.kt)("strong",{parentName:"p"},"DN field"),", please provide at least the Common Name (CN) using the same domain like ",(0,a.kt)("strong",{parentName:"p"},"CN=authentication.sap-demo.com"),". Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"&lt;img src=&quot;./images/CustomDomain01.png&quot; width=&quot;400&quot; /&gt;",src:n(78874).Z,width:"1456",height:"640"})),(0,a.kt)("p",null,"2.4. Download the ",(0,a.kt)("strong",{parentName:"p"},"Certificate Signing Request")," (CSR), by clicking the respective button. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"&lt;img src=&quot;./images/CustomDomain02.png&quot; width=&quot;400&quot; /&gt;",src:n(59581).Z,width:"1149",height:"430"})),(0,a.kt)("p",null,"2.5. You can choose a different Key Size if required and provide a Subject Alternative Name (if required - not mandatory). Click on ",(0,a.kt)("strong",{parentName:"p"},"Download")," to download the CSR. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,a.kt)("p",{parentName:"admonition"},"It is not possible to upload an existing private key/certificate. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"&lt;img src=&quot;./images/CustomDomain03.png&quot; width=&quot;400&quot; /&gt;",src:n(4924).Z,width:"1053",height:"527"})),(0,a.kt)("p",null,"2.6. Send the CSR to your Certification Authority to receive a signed certificate. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,a.kt)("p",{parentName:"admonition"},"You can also use Let's Encrypt for testing purposes. ")),(0,a.kt)("p",null,"2.7. Once you received your signed certificate, please open it in a Text Editor and copy the content. In SAP IAS, click on ",(0,a.kt)("strong",{parentName:"p"},"Certificate")," and paste your signed certificate into the respective text box. Double-check the Subject DN value and click on ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,a.kt)("p",{parentName:"admonition"},"You can either paste the whole certificate chain (incl. Root and Intermediate certificates), or only the domain certificate itself.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"&lt;img src=&quot;./images/CustomDomain04.png&quot; width=&quot;400&quot; /&gt;",src:n(89088).Z,width:"1156",height:"577"})),(0,a.kt)("h2",{id:"3-cname-record-in-dns"},"3. CNAME record in DNS"),(0,a.kt)("p",null,"As described in the official SAP Help documentation (",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/IDENTITY_AUTHENTICATION/6d6d63354d1242d185ab4830fc04feb1/c4db840ff2464e12ab68d94efb0769c3.html?locale=en-US#prerequisites"},"click here"),"), please make sure to set a correct CNAME record in your domain's DNS settings. Below you can see a sample CNAME set for an SAP Identity Authentication tenant in the eu10 region (AWS). "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"&lt;img src=&quot;./images/CustomDomain05.png&quot; width=&quot;400&quot; /&gt;",src:n(40894).Z,width:"1436",height:"641"})),(0,a.kt)("p",null,"Without this CNAME record, you will not be able to reach your SAP IAS tenant using the configured custom domain. "),(0,a.kt)("h2",{id:"4-additional-steps"},"4. Additional Steps"),(0,a.kt)("p",null,"Check the official SAP Help information (",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/IDENTITY_AUTHENTICATION/6d6d63354d1242d185ab4830fc04feb1/c4db840ff2464e12ab68d94efb0769c3.html?locale=en-US#results-0"},"click here"),") on the latest activation schedule of custom domain certificates. This may take up to two weeks. Once your domain certificate is activated, you will be able to reach your SAP IAS instance using your custom domain. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"&lt;img src=&quot;./images/CustomDomain06.png&quot; width=&quot;400&quot; /&gt;",src:n(51441).Z,width:"1001",height:"619"})),(0,a.kt)("p",null,"After successful activation, you may need to change further settings based on your environment (e.g., redirect configurations). Please check the official SAP Help documentation (",(0,a.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/IDENTITY_AUTHENTICATION/6d6d63354d1242d185ab4830fc04feb1/c4db840ff2464e12ab68d94efb0769c3.html?locale=en-US#next-steps"},"click here"),") to learn more! "),(0,a.kt)("h2",{id:"5-further-information"},"5. Further information"),(0,a.kt)("p",null,"Please use the following links to find further information on the topics above:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/IDENTITY_AUTHENTICATION/6d6d63354d1242d185ab4830fc04feb1/c4db840ff2464e12ab68d94efb0769c3.html?locale=en-US"},"SAP Help - Use Custom Domain in Identity Authentication"))))}m.isMDXComponent=!0},71222:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/CustomDomain00-5daab9abd19ae62e8a54340f8074560f.png"},78874:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/CustomDomain01-3cd29e5c222622f98ef2071a4005560a.png"},59581:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/CustomDomain02-8dc5088efc04197082e1ee7d6ee7e765.png"},4924:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/CustomDomain03-a5c4561f2d6c65b54c4f91353fe67f7a.png"},89088:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/CustomDomain04-5ec2a8503fcc8bc00a3dcaf438139f43.png"},40894:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/CustomDomain05-051daea4a32a5eb1be42ff1c4e74da56.png"},51441:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/CustomDomain06-b08e42afa215ce4691b9158153e87da4.png"},36348:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/IASCustDomainMenu-0dc351e90822ef4cda2df856041678cb.png"},19292:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/IASInstanceBTP-2fc6c1e1b7b0bb0b47999b76b22d0d87.png"}}]);