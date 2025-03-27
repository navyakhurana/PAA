"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[3484],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var p=n.createContext({}),l=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=l(a),m=i,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(g,r(r({ref:e},d),{},{components:a})):n.createElement(g,r({ref:e},d))}));function g(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[u]="string"==typeof t?t:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32954:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_position:8},r="HDI Container Administration",s={unversionedId:"project-panel/expert/hdi-container-administration/README",id:"project-panel/expert/hdi-container-administration/README",title:"HDI Container Administration",description:"This topic will be refactored! Some screenshots or features might appear different based on latest version updates.",source:"@site/docs/project-panel/4-expert/hdi-container-administration/README.md",sourceDirName:"project-panel/4-expert/hdi-container-administration",slug:"/project-panel/expert/hdi-container-administration/",permalink:"/PAA/@navyakhurana-navyakhurana-patch-1/project-panel/expert/hdi-container-administration/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya khurana",lastUpdatedAt:1693289879,formattedLastUpdatedAt:"Aug 29, 2023",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Feature Toggles",permalink:"/PAA/@navyakhurana-navyakhurana-patch-1/project-panel/expert/feature-toggles/"},next:{title:"Integration of Consumer IdPs",permalink:"/PAA/@navyakhurana-navyakhurana-patch-1/project-panel/expert/integrate-consumers-idp/"}},p={},l=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Prerequisites",id:"2-prerequisites",level:2},{value:"3. Login to SAP HANA Cloud Cockpit",id:"3-login-to-sap-hana-cloud-cockpit",level:2},{value:"4. Create a new database user",id:"4-create-a-new-database-user",level:2},{value:"5. Set up a new HDI Container Group administrator",id:"5-set-up-a-new-hdi-container-group-administrator",level:2},{value:"6. Further information",id:"6-further-information",level:2}],d={toc:l},u="wrapper";function c(t){let{components:e,...o}=t;return(0,i.kt)(u,(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hdi-container-administration"},"HDI Container Administration"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,i.kt)("p",{parentName:"admonition"},"This topic will be refactored! Some screenshots or features might appear different based on latest version updates. ")),(0,i.kt)("p",null,"In this part of the ",(0,i.kt)("strong",{parentName:"p"},"Expert Features")," you will learn how to set up a new HDI Container Group Administrator for your SaaS HDI containers. This user will be able to administrate Tenant database containers (e.g., create or import backups, use the HDI Container API, ...). "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#hdi-container-administration"},"HDI Container Administration"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#1-introduction"},"1. Introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-prerequisites"},"2. Prerequisites")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3-login-to-sap-hana-cloud-cockpit"},"3. Login to SAP HANA Cloud Cockpit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#4-create-a-new-database-user"},"4. Create a new database user")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#5-set-up-a-new-hdi-container-group-administrator"},"5. Set up a new HDI Container Group administrator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#6-further-information"},"6. Further information"))))),(0,i.kt)("p",null,"Please check the following SAP Help documentation in case you're new to the topic of SAP HANA HDI container administration."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2cc2e43458d4abda6788049c58143dc/b36b4b60c9e44291ae02e520135fd898.html?locale=en-US"},"SAP HDI Administration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2cc2e43458d4abda6788049c58143dc/b4b6a8936bc64526b8fd8491c4a40eaa.html?locale=en-US"},"SAP HDI Administration in Context"))),(0,i.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,i.kt)("p",null,"Creating an HDI Container (Group) Administrator is a very critical process from a data security perspective. Especially in a productive landscape, you have to be very conscious about which roles and permissions you assign to support or administrative staff. Especially permissions allowing data access to Consumer database containers should be granted in very exceptional cases only! "),(0,i.kt)("p",null,"As a SaaS provider, you need to ensure this process is well aligned with your SaaS customers and that only a very limited group of people has permissions to access, export, and import customer database containers. Make sure to create and assign dedicated roles in your database by always following the least permission model! "),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,i.kt)("p",{parentName:"admonition"},"The user created in this step-by-step guide is assigned very ",(0,i.kt)("strong",{parentName:"p"},"extensive permissions")," to administrate all containers created by the default HDI Container Service Broker for ",(0,i.kt)("strong",{parentName:"p"},"simplification and demo purposes"),". This means he can grant ",(0,i.kt)("strong",{parentName:"p"},"Full Access permissions")," for each HDI Container to any database user. As stated above, especially in a productive environment you will need a much more elaborated security setup. In the following sample, the DBADMIN user has e.g., assigned the sample user SUSAAS_OPS permissions to export ",(0,i.kt)("strong",{parentName:"p"},"a specific container")," only. SUSAAS_OPS has no other container-related permissions except for the export feature.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_000.png&quot; width=&quot;500&quot; /&gt;",src:a(20759).Z,width:"1471",height:"896"}))),(0,i.kt)("h2",{id:"2-prerequisites"},"2. Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need to have ",(0,i.kt)("strong",{parentName:"li"},"DBADMIN access")," to your SAP HANA Cloud Instance to follow this step-by-step guide."),(0,i.kt)("li",{parentName:"ul"},"You need a basic understanding of the SAP HDI concepts including SAP HDI Container Groups (also check the ",(0,i.kt)("strong",{parentName:"li"},"Further Information")," section).")),(0,i.kt)("h2",{id:"3-login-to-sap-hana-cloud-cockpit"},"3. Login to SAP HANA Cloud Cockpit"),(0,i.kt)("p",null,"3.1. Go to the loud Foundry Space in which your SAP HANA Cloud instance resides. "),(0,i.kt)("p",null,"3.2. Open the ",(0,i.kt)("strong",{parentName:"p"},"additional actions")," of the SAP HANA Cloud instance. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_010.png&quot; width=&quot;500&quot; /&gt;",src:a(78531).Z,width:"1466",height:"800"})),(0,i.kt)("p",null,"3.3. Click on ",(0,i.kt)("strong",{parentName:"p"},"Open in SAP HANA Cockpit")," to access the SAP HANA Cloud administration. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_020.png&quot; width=&quot;500&quot; /&gt;",src:a(33619).Z,width:"1468",height:"800"})),(0,i.kt)("p",null,"3.4. Login with the ",(0,i.kt)("strong",{parentName:"p"},"DBADMIN")," user. "),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,i.kt)("p",{parentName:"admonition"},"By default, only the ",(0,i.kt)("strong",{parentName:"p"},"DBADMIN")," user has the initial permissions to administrate the default HDI Container Group used by the Service Broker. New HDI Container Group admins can only be added by the DBADMIN user. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_030.png&quot; width=&quot;500&quot; /&gt;",src:a(65828).Z,width:"1680",height:"760"})),(0,i.kt)("h2",{id:"4-create-a-new-database-user"},"4. Create a new database user"),(0,i.kt)("p",null,"4.1. To create a new user (for support/operations) with administrative permissions on a dedicated HDI Container Group, switch to ",(0,i.kt)("strong",{parentName:"p"},"Security and User Management")," section and click on ",(0,i.kt)("strong",{parentName:"p"},"User Management"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_040.png&quot; width=&quot;500&quot; /&gt;",src:a(30163).Z,width:"1889",height:"773"})),(0,i.kt)("p",null,"4.2. Create a new SAP HANA database user by clicking on the ",(0,i.kt)("strong",{parentName:"p"},"+")," button and selecting ",(0,i.kt)("strong",{parentName:"p"},"Create User"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_050.png&quot; width=&quot;500&quot; /&gt;",src:a(86239).Z,width:"1920",height:"960"})),(0,i.kt)("p",null,"4.3. Decide on a username and provide a valid e-mail address. Keep the default settings for ",(0,i.kt)("strong",{parentName:"p"},"PUBLIC role")," and ",(0,i.kt)("strong",{parentName:"p"},"schema object creation"),", as the support/operations user e.g., needs to create temporary tables for HDI Container exports in his own schema. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,i.kt)("p",{parentName:"admonition"},"In a productive environment, we recommend creating named users like JOHNDOE or usage of employee IDs to allow proper logging of critical database activities. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_060.png&quot; width=&quot;500&quot; /&gt;",src:a(69445).Z,width:"1920",height:"962"})),(0,i.kt)("p",null,"4.4. Set an initial password for your new user. You can enforce a password change and enable/disable a password lifetime if required. Finally, click on ",(0,i.kt)("strong",{parentName:"p"},"Save")," to create your new database user. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_070.png&quot; width=&quot;500&quot; /&gt;",src:a(64336).Z,width:"1276",height:"964"})),(0,i.kt)("h2",{id:"5-set-up-a-new-hdi-container-group-administrator"},"5. Set up a new HDI Container Group administrator"),(0,i.kt)("p",null,"5.1. Switch to the ",(0,i.kt)("strong",{parentName:"p"},"Administration")," section of your SAP HANA Cloud Cockpit. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_080.png&quot; width=&quot;500&quot; /&gt;",src:a(8544).Z,width:"1602",height:"700"})),(0,i.kt)("p",null,"5.2. Click on ",(0,i.kt)("strong",{parentName:"p"},"HDI Administration")," to open the HDI Administration user interface. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,i.kt)("p",{parentName:"admonition"},"The UI might require a few moments to load all content. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_090.png&quot; width=&quot;500&quot; /&gt;",src:a(90834).Z,width:"1886",height:"933"})),(0,i.kt)("p",null,"5.3. Select the ",(0,i.kt)("strong",{parentName:"p"},"User & Roles")," tab. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_100.png&quot; width=&quot;500&quot; /&gt;",src:a(25556).Z,width:"1378",height:"727"})),(0,i.kt)("p",null,"5.4. Click on the ",(0,i.kt)("strong",{parentName:"p"},"+")," button to add the new support/operations user. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_110.png&quot; width=&quot;500&quot; /&gt;",src:a(14071).Z,width:"1342",height:"717"})),(0,i.kt)("p",null,"5.5. In the popup window, search for the username of your new user (e.g., JOHNDOE). Select the user from the list and click on ",(0,i.kt)("strong",{parentName:"p"},"OK"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,i.kt)("p",{parentName:"admonition"},"If the user does not show up, first try to reload the page. If it still doesn't show up, make sure the user was configured correctly (PUBLIC role and permission to create objects in his own schema).")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_120.png&quot; width=&quot;500&quot; /&gt;",src:a(71854).Z,width:"1196",height:"844"})),(0,i.kt)("p",null,"5.6. First, the user will be assigned some common privileges for HDI container administration. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_130.png&quot; width=&quot;500&quot; /&gt;",src:a(90276).Z,width:"1188",height:"687"})),(0,i.kt)("p",null,"5.7. You will see a list of permissions assigned to your new support/operations user. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_140.png&quot; width=&quot;500&quot; /&gt;",src:a(37835).Z,width:"1902",height:"953"})),(0,i.kt)("p",null,"5.8. After the user was added to the list of users, select it and click on the ",(0,i.kt)("strong",{parentName:"p"},"+")," icon in the ",(0,i.kt)("strong",{parentName:"p"},"Groups & Containers on which User has Privileges")," section. This will allow you to assign HDI Container Group permissions. In the list of Container Groups, you will see the default Service Broker Container Group called ",(0,i.kt)("strong",{parentName:"p"},"BROKER_CG"),". "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,i.kt)("p",{parentName:"admonition"},"All HDI containers created by the respective SAP BTP Service Broker will be assigned to this Container Group. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_150.png&quot; width=&quot;500&quot; /&gt;",src:a(60158).Z,width:"1855",height:"947"})),(0,i.kt)("p",null,"5.9. Select the ",(0,i.kt)("strong",{parentName:"p"},"BROKER_CG")," Container Group and click on ",(0,i.kt)("strong",{parentName:"p"},"OK"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_160.png&quot; width=&quot;500&quot; /&gt;",src:a(69267).Z,width:"1184",height:"851"})),(0,i.kt)("p",null,"5.10. You can now assign the required permissions for this Container Group to your support/operations user. Therefore, make sure you selected your user in the user list and select the BROKER_CG Container Group from the list of Groups & Containers. From the dropdown field in the ",(0,i.kt)("strong",{parentName:"p"},"Privileges on Selected Groups")," section, select ",(0,i.kt)("strong",{parentName:"p"},"Container Group Admin Privileges"),". Make sure all permissions are selected and click on the ",(0,i.kt)("strong",{parentName:"p"},"Save")," icon. "),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,i.kt)("p",{parentName:"admonition"},"This will assign your user the full scope of permissions to administrate all containers in this default Container Group. As mentioned in the beginning of this step-by-step guide, your security setup will probably require a much more granular permission handling! ")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,i.kt)("p",{parentName:"admonition"},"If you cannot see any values in the ",(0,i.kt)("strong",{parentName:"p"},"dropdown field"),", please assign the permissions manually. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_170.png&quot; width=&quot;500&quot; /&gt;",src:a(73944).Z,width:"1899",height:"959"})),(0,i.kt)("p",null,"5.11. Confirm you want to assign the permissions to this user. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_180.png&quot; width=&quot;500&quot; /&gt;",src:a(4613).Z,width:"1144",height:"577"})),(0,i.kt)("p",null,"5.12. You can scroll through the list of permissions and will see that your user can now e.g., export and import all HDI Containers in this Container Group. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_190.png&quot; width=&quot;500&quot; /&gt;",src:a(55627).Z,width:"1236",height:"832"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_group_200.png&quot; width=&quot;500&quot; /&gt;",src:a(4841).Z,width:"1232",height:"786"})),(0,i.kt)("p",null,"5.13. One example of using the HDI Container Administration permissions in action can be found in another ",(0,i.kt)("strong",{parentName:"p"},"Expert Features")," scenario covering the ",(0,i.kt)("a",{parentName:"p",href:"/PAA/@navyakhurana-navyakhurana-patch-1/project-panel/expert/backup-database-containers/"},(0,i.kt)("strong",{parentName:"a"},"Backup of Database Containers")),". "),(0,i.kt)("p",null,"5.14. Furthermore, you can log in to ",(0,i.kt)("strong",{parentName:"p"},"SAP HANA Database Explorer")," with the new database user (in this case SUSAAS_OPS) and make use of the powerful HDI Container SQL API. One example can be seen in the screenshot below, in which the schema role ",(0,i.kt)("strong",{parentName:"p"},"COM_EXTERNAL_ACCESS")," of container ",(0,i.kt)("strong",{parentName:"p"},"4D7A05F.........93C338B")," was assigned to the ",(0,i.kt)("strong",{parentName:"p"},"DBADMIN")," user."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/hdi_assignrole.png&quot; width=&quot;500&quot; /&gt;",src:a(84161).Z,width:"1872",height:"882"})),(0,i.kt)("h2",{id:"6-further-information"},"6. Further information"),(0,i.kt)("p",null,"The concept of HDI Container Administration is a very powerful concept, which allows you to assign administrative permissions for your database containers to dedicated database users. This simplifies the maintenance and support of database/container-related incidents. Make yourself familiar with the official SAP Help documentation to learn how to use this great SAP HANA database feature for your requirements."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2cc2e43458d4abda6788049c58143dc/b36b4b60c9e44291ae02e520135fd898.html?locale=en-US"},"SAP Help - SAP HDI Administration")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2cc2e43458d4abda6788049c58143dc/b4b6a8936bc64526b8fd8491c4a40eaa.html?locale=en-US"},"SAP Help - SAP HDI Administration in Context")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2cc2e43458d4abda6788049c58143dc/4e9d59759b294124baa97c5b6d675072.html?locale=en-US"},"SAP Help - Maintaining SAP HDI Container Groups")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2cc2e43458d4abda6788049c58143dc/bcd6e27173464d9eb6a5ff9e53275240.html?locale=en-US"},"SAP Help - Maintaining SAP HDI Containers")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=njVZWRGTJAI"},"Youtube - SAP HANA Deployment Infrastructure (HDI) Administration")))}c.isMDXComponent=!0},84161:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_assignrole-95ec10dae86eb91d509327170333b458.png"},20759:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_000-45e0f476c9eaebbc25e4a620db519377.png"},78531:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_010-4045d9e6e6835d1b11d55b6cd311017d.png"},33619:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_020-9c6f831d6e0fc35a689f29698674bcfe.png"},65828:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_030-4ec15f145eceeba6638b8a0db01bf938.png"},30163:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_040-30791b97482ff431123a9812ff63a249.png"},86239:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_050-b720a4db34239c5c28c13ac06435b825.png"},69445:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_060-99324a391a145b81398077462be67258.png"},64336:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_070-2c30f871e07b29dfdcdfca9fd209df94.png"},8544:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_080-988112ab9deba24ecb440378e27b370a.png"},90834:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_090-03270ac348996744e2f14ab136d0e899.png"},25556:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_100-ec99562e1709f0fe1e682a57d5352da1.png"},14071:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_110-49a8df8ffb6c7f6db1d844e68f7fc911.png"},71854:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_120-f71797dbc83074a2d7b588b32d735704.png"},90276:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_130-bfa1a751eacac8fffda44afd2c7eed4c.png"},37835:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_140-602863385e5455db8ecbd3ac61d2b475.png"},60158:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_150-c5893398aa5bd6d0e03852bb40ca84c1.png"},69267:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_160-13bbf1c65f5505845c0dad78af673ced.png"},73944:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_170-69c522b3202ff5c7279ef05175fb9515.png"},4613:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_180-729799267a437cb253df11ec081bc464.png"},55627:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_190-a18128a1298b60137a32ab040abf86f9.png"},4841:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hdi_group_200-c7ae71f5b5b66f5ea8ec33fabdf700dd.png"}}]);