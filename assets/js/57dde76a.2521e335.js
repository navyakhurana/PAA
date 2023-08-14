"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[895],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>u});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),l=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=l(e.components);return t.createElement(c.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||o;return n?t.createElement(u,s(s({ref:a},p),{},{components:n})):t.createElement(u,s({ref:a},p))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4759:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=n(87462),r=(n(67294),n(3905));const o={},s="Shared Database Container",i={unversionedId:"project-panel/basic/explore-the-components/components/SharedContainer",id:"project-panel/basic/explore-the-components/components/SharedContainer",title:"Shared Database Container",description:"To have the ability to share data among your Consumer tenants, a shared database container is set up for this sample scenario. This allows you as a Provider to maintain e.g., master data like Languages, Countries, or Currencies in a central place and update it for all Consumer tenants.",source:"@site/docs/project-panel/2-basic/9-explore-the-components/components/SharedContainer.md",sourceDirName:"project-panel/2-basic/9-explore-the-components/components",slug:"/project-panel/basic/explore-the-components/components/SharedContainer",permalink:"/PAA/project-panel/basic/explore-the-components/components/SharedContainer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deep Dive into Service Brokers",permalink:"/PAA/project-panel/basic/explore-the-components/components/ServiceBrokers"},next:{title:"Optional - Unsubscribe from a Consumer Subaccount",permalink:"/PAA/project-panel/basic/unsubscribe-consumer-subaccount/"}},c={},l=[{value:"1. Helm Chart definition",id:"1-helm-chart-definition",level:2},{value:"2. Tenant Database Container",id:"2-tenant-database-container",level:2},{value:"3. Keep in mind",id:"3-keep-in-mind",level:2},{value:"4. Further information",id:"4-further-information",level:2}],p={toc:l},d="wrapper";function m(e){let{components:a,...o}=e;return(0,r.kt)(d,(0,t.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shared-database-container"},"Shared Database Container"),(0,r.kt)("p",null,"To have the ability to share data among your Consumer tenants, a shared database container is set up for this sample scenario. This allows you as a Provider to maintain e.g., master data like ",(0,r.kt)("strong",{parentName:"p"},"Languages"),", ",(0,r.kt)("strong",{parentName:"p"},"Countries"),", or ",(0,r.kt)("strong",{parentName:"p"},"Currencies")," in a central place and update it for all Consumer tenants. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#shared-database-container"},"Shared Database Container"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-helm-chart-definition"},"1. Helm Chart definition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-tenant-database-container"},"2. Tenant Database Container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-keep-in-mind"},"3. Keep in mind")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#4-further-information"},"4. Further information"))))),(0,r.kt)("p",null,"This concept is building on the cross-container-access capabilities of SAP HANA Cloud HDI database containers. In this sample scenario, the shared database container is used to share a sample table and master data along the Tenant database containers."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(77648).Z},(0,r.kt)("img",{src:"./images/CD_Flow.png",width:"500"}))),(0,r.kt)("h2",{id:"1-helm-chart-definition"},"1. Helm Chart definition"),(0,r.kt)("p",null,"The HDI container required for the shared data is defined in the ",(0,r.kt)("em",{parentName:"p"},"values.yaml")," file (",(0,r.kt)("a",{parentName:"p",href:"../../../../code/charts/sustainable-saas/values.yaml"},"click here"),") of our Umbrella Chart and created during the deployment of the SaaS application to the Provider Subaccount. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Hint")," - For the Tenant database container instances, SAP Service Manager (container plan) takes care of the whole container lifecycle. Therefore, there is no need to specify additional HDI resources for these containers in the ",(0,r.kt)("em",{parentName:"p"},"values.yaml")," file. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# SAP HANA Cloud HDI Container\n# Required for shared data model deployment\ncom_hdi_container:\n  serviceOfferingName: hana\n  servicePlanName: hdi-shared\n")),(0,r.kt)("p",null,"To deploy content (like tables and views) to our shared database container, an additional component is required resulting in a Kubernetes Job, responsible for the deployment of your shared database artifacts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Shared Database Container Deployer Job\n# Deploys the shared data model to a database container\nhana_deployer:\n  image:\n    # Provide your HDI Container Deployer Docker Image repository\n    repository: <<namespace>>/susaas-db-com\n    tag: latest\n  bindings:\n    hana:\n      serviceInstanceName: com-hdi-container\n  resources:\n    limits:\n      cpu: 500m\n      memory: 1G\n    requests:\n      cpu: 500m\n      memory: 1G\n")),(0,r.kt)("p",null,"To allow access from your tenant-specific database containers to the shared database container, it needs to be added as a binding to the SaaS Backend service component. This is a prerequisite as the required dependency between new Tenant database containers and the shared database container needs to be resolved upon subscription of each new Consumer Tenant. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Backend Service Workload\nsrv:\n  port: 8080\n  bindings:\n    xsuaa:\n      serviceInstanceName: xsuaa\n    sm-container:\n      serviceInstanceName: sm-container\n    hana:  # <-- Shared database container\n      serviceInstanceName: com-hdi-container\n")),(0,r.kt)("p",null,"As you might know it from Cloud Foundry deployments, also in Kyma a so-called ",(0,r.kt)("strong",{parentName:"p"},"Service Replacement")," definition is required for this cross-container-access scenario. The respective environment variable is defined in the following ",(0,r.kt)("em",{parentName:"p"},"values.yaml")," file (",(0,r.kt)("a",{parentName:"p",href:"../../../../code/charts/sustainable-saas/charts/susaas-srv/values.yaml"},"click here"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'env:\n  SERVICE_REPLACEMENTS: \'[{ "key" : "com-hdi-container", "service" : "hana" }]\'\n')),(0,r.kt)("h2",{id:"2-tenant-database-container"},"2. Tenant Database Container"),(0,r.kt)("p",null,"The concept of cross-container-access is based on a trusted relation between containers. Still, to make the shared database container accessible from your tenant-specific database containers, some prerequisites need to be fulfilled. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important")," - The concept of cross-container-access is very powerful but not trivial. Please refer to the official documentation in SAP Help to learn more (",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/b9902c314aef4afb8f7a29bf8c5b37b3/4adba34bd86544a880db8f9f1e32efb7.html?&locale=en-US"},"click here"),").")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"db-com/data-model.cds")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"context susaas.common {\n    entity Shared : cuid {\n        value : String;\n    };\n}\n")),(0,r.kt)("p",null,"First of all, you need to assign the technical users of your Tenant containers dedicated access roles defined in the shared database container. Therefore, a role ",(0,r.kt)("strong",{parentName:"p"},"COM_EXTERNAL_ACCESS")," is defined in the shared database container, providing ",(0,r.kt)("strong",{parentName:"p"},"READ")," access to a shared sample table called ",(0,r.kt)("strong",{parentName:"p"},"SUSAAS_COMMON_SHARED")," (see definition above). The same applies to the shared tables containing master data like ",(0,r.kt)("strong",{parentName:"p"},"Countries")," or ",(0,r.kt)("strong",{parentName:"p"},"Currencies"),". For the so-called ",(0,r.kt)("strong",{parentName:"p"},"Object Owner(s)")," of the accessing Tenant database containers, a similar role ",(0,r.kt)("strong",{parentName:"p"},"COM_EXTERNAL_ACCESS#")," is required, which includes the same permissions ",(0,r.kt)("strong",{parentName:"p"},"including grant option"),". "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"db-com/src/COM_EXTERNAL_ACCESS.hdbrole")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "role": {\n        "name": "COM_EXTERNAL_ACCESS",\n        "object_privileges": [\n            { \n                "name":"SUSAAS_COMMON_SHARED", \n                "type":"TABLE", \n                "privileges":[ "SELECT" ], \n                "privileges_with_grant_option":[] \n            },\n            { \n                "name":"SAP_COMMON_COUNTRIES", \n                "type":"TABLE", \n                "privileges":[ "SELECT" ], \n                "privileges_with_grant_option":[] \n            }\n            ...\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"These roles can now be used in the Tenant database containers, where they need to be assigned to the ",(0,r.kt)("strong",{parentName:"p"},"Object Owner(s)")," and ",(0,r.kt)("strong",{parentName:"p"},"Application User(s)")," using a so-called ",(0,r.kt)("strong",{parentName:"p"},".hdbgrants")," file. This file is processed before the deployment of a new Tenant database container starts. It ensures, that the technical users used during creation of new Tenant database container (but also during runtime access) have the required permissions to access the shared database container. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"db/cfg/COM.hdbgrants")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "com-hdi-container": {\n        "object_owner": {\n            "container_roles": [\n                "COM_EXTERNAL_ACCESS#"\n            ]\n        },\n        "application_user": {\n            "container_roles": [\n                "COM_EXTERNAL_ACCESS"\n            ]\n        }\n    }\n}\n')),(0,r.kt)("p",null,"After ensuring the technical users of new Tenant database containers are assigned the required roles to access the shared database container, you need to define so-called ",(0,r.kt)("strong",{parentName:"p"},"synonyms")," for the shared target objects (e.g., tables or views). Therefore, two files are required. A so-called ",(0,r.kt)("strong",{parentName:"p"},".hdbsynonymconfig")," and a ",(0,r.kt)("strong",{parentName:"p"},".hdbsynonym")," file. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"db/cfg/COM.hdbsynonymconfig")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "SUSAAS_COMMON_SHARED": {\n        "target": {\n            "object": "SUSAAS_COMMON_SHARED",\n            "schema.configure": "com-hdi-container/schema"\n        }\n    },\n    "SAP_COMMON_COUNTRIES": {\n        "target": {\n            "object": "SAP_COMMON_COUNTRIES",\n            "schema.configure": "com-hdi-container/schema"\n        }\n    },\n    ...\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"db/src/COM.hdbsynonym")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "SUSAAS_COMMON_SHARED": {},\n    "SAP_COMMON_COUNTRIES": {},\n    ...\n}\n')),(0,r.kt)("p",null,"Whereas the hdbsynonym file defines your synonym database object, the hdbsynonymconfig file is processed before the provisioning of a new Tenant database container and provides configuration information to the Node.js deployer. In this case, the deployer is advised to dynamically read the schema name of the shared database container from the container service details. As no fixed schema name is defined for the shared database container, the schema name is automatically generated upon deployment of the SaaS application. That's why for required references in the Tenant database containers, we need to read the schema name dynamically from the container service binding details. See it as some kind of dynamic replacement instead of providing the unique schema name which could be something like ABC123XYZ987DEF456UVW.... "),(0,r.kt)("p",null,"The synonyms can now be used in CDS model definitions or other native SAP HANA database objects like Views or Calculation Views. Just make sure to use ",(0,r.kt)("inlineCode",{parentName:"p"},"@cds.persistence.exists")," annotation in case of CDS usage, to prevent the CDS compiler from creating a new database artifact for the existing synonym.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"db/data-model.cds")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"context susaas.common {\n      @cds.persistence.exists\n      entity Shared : cuid {\n            value  : String;\n      }\n}\n\n@cds.persistence.exists\nextend sap.common.Countries {} \n")),(0,r.kt)("h2",{id:"3-keep-in-mind"},"3. Keep in mind"),(0,r.kt)("p",null,"Please keep in mind that for database container backups, cross-container access requirements cause some additional complexity. If you export a Tenant database container and plan to import it again, you first need to ensure that the technical users of the new target database container (which you're planning to import the backup in) need to have the correct shared database container roles assigned (see hdbgrants details above) before applying the backup. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Hint")," - The hdbgrants files will not be applied in this case and you need to assign roles manually using the HDI Container APIs of the shared database container (",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/SAP_HANA_PLATFORM/3823b0f33420468ba5f1cf7f59bd6bd9/40ba784dcaf44989b23f7eda316b4a0b.html?locale=en-US"},"click here"),"). ")),(0,r.kt)("h2",{id:"4-further-information"},"4. Further information"),(0,r.kt)("p",null,"Please use the following links to find further information on the topics above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/BTP/65de2977205c403bbc107264b8eccf4b/01c5f9ba7d6847aaaf069d153b981b51.html?locale=en-US"},"SAP Help - Application Router")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2cc2e43458d4abda6788049c58143dc/4077972509f5437c85d6a03e01509417.html?locale=en-US"},"SAP Help - SAP HANA Cloud, SAP HANA Database Deployment Infrastructure Reference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=UmOkjPxE6Us"},"Youtube - HANA Cloud: HDI - Under the Hood")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/b9902c314aef4afb8f7a29bf8c5b37b3/4adba34bd86544a880db8f9f1e32efb7.html?locale=en-US"},"SAP Help - Enable Access to Objects in Another HDI Container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2b99f19e9264c4d9ae9221b22f6f589/556452cac83f423597d3a38a6f225e4b.html?locale=en-US"},"SAP Help - Database Synonyms in SAP HANA Cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2b99f19e9264c4d9ae9221b22f6f589/f49c1f5c72ee453788bf79f113d83bf9.html?locale=en-US"},"SAP Help - Syntax Options in the hdbgrants File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=5duW3MUoKEQ"},"Youtube - SAP HANA Academy - HANACloud: Intra-HDI Container Access"))))}m.isMDXComponent=!0},77648:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/files/CD_Flow-34b8ae6f9262edf697693176f66ae17e.png"}}]);