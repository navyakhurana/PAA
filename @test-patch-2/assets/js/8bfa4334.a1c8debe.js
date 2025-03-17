"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={},s="Deep Dive into Service Brokers",o={unversionedId:"project-panel/basic/explore-the-components/components/ServiceBrokers",id:"project-panel/basic/explore-the-components/components/ServiceBrokers",title:"Deep Dive into Service Brokers",description:"This part of the tutorial will explain the details of the SaaS API backing service implementation together with a dedicated service broker since both components are working hand in hand to provide a multitenant SaaS API.",source:"@site/docs/project-panel/2-basic/9-explore-the-components/components/ServiceBrokers.md",sourceDirName:"project-panel/2-basic/9-explore-the-components/components",slug:"/project-panel/basic/explore-the-components/components/ServiceBrokers",permalink:"/PAA/@test-patch-2/project-panel/basic/explore-the-components/components/ServiceBrokers",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya Khurana",lastUpdatedAt:1742201256,formattedLastUpdatedAt:"Mar 17, 2025",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deep Dive into Multitenancy",permalink:"/PAA/@test-patch-2/project-panel/basic/explore-the-components/components/Multitenancy"},next:{title:"Shared Database Container",permalink:"/PAA/@test-patch-2/project-panel/basic/explore-the-components/components/SharedContainer"}},l={},c=[{value:"1. What is a Service Broker?",id:"1-what-is-a-service-broker",level:2},{value:"2. OSB API Standards",id:"2-osb-api-standards",level:2},{value:"3. How does a platform interact with a service broker?",id:"3-how-does-a-platform-interact-with-a-service-broker",level:2},{value:"3.1. Implementation of Catalog Management or &quot;Which plans do you have service broker?&quot;",id:"31-implementation-of-catalog-management-or-which-plans-do-you-have-service-broker",level:3},{value:"3.2. Implementation of Creation of a Service Instance (Provisioning)",id:"32-implementation-of-creation-of-a-service-instance-provisioning",level:3},{value:"3.3. Implementation of Service Binding Creation - Binding Request",id:"33-implementation-of-service-binding-creation---binding-request",level:3},{value:"3.4. Implementation of Service Binding Deletion",id:"34-implementation-of-service-binding-deletion",level:3},{value:"3.5. Implementation of Service Instance Deletion",id:"35-implementation-of-service-instance-deletion",level:3},{value:"3.6. Registering to Service Broker",id:"36-registering-to-service-broker",level:3},{value:"4. What is @sap/sbf?",id:"4-what-is-sapsbf",level:2},{value:"5. Sample multitenant SaaS API (Backing Service) in SAP BTP",id:"5-sample-multitenant-saas-api-backing-service-in-sap-btp",level:2},{value:"5.1. Request Number 1",id:"51-request-number-1",level:3},{value:"Catalog Before Subscribing to the Sustainable SaaS application",id:"catalog-before-subscribing-to-the-sustainable-saas-application",level:4},{value:"Catalog After Subscribing to the Sustainable SaaS application",id:"catalog-after-subscribing-to-the-sustainable-saas-application",level:4},{value:"5.2. Request Number 2",id:"52-request-number-2",level:3},{value:"5.3. Request Number 3",id:"53-request-number-3",level:3},{value:"5.4. Request Number 4",id:"54-request-number-4",level:3},{value:"5.5. Request Number 5",id:"55-request-number-5",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deep-dive-into-service-brokers"},"Deep Dive into Service Brokers"),(0,i.kt)("p",null,"This part of the tutorial will explain the details of the SaaS API backing service implementation together with a dedicated service broker since both components are working hand in hand to provide a multitenant SaaS API. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#deep-dive-into-service-brokers"},"Deep Dive into Service Brokers"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#1-what-is-a-service-broker"},"1. What is a Service Broker?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-osb-api-standards"},"2. OSB API Standards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3-how-does-a-platform-interact-with-a-service-broker"},"3. How does a platform interact with a service broker?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#31-implementation-of-catalog-management-or-which-plans-do-you-have-service-broker"},'3.1. Implementation of Catalog Management or "Which plans do you have service broker?"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#32-implementation-of-creation-of-a-service-instance-provisioning"},"3.2. Implementation of Creation of a Service Instance (Provisioning)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#33-implementation-of-service-binding-creation---binding-request"},"3.3. Implementation of Service Binding Creation - Binding Request")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#34-implementation-of-service-binding-deletion"},"3.4. Implementation of Service Binding Deletion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#35-implementation-of-service-instance-deletion"},"3.5. Implementation of Service Instance Deletion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#36-registering-to-service-broker"},"3.6. Registering to Service Broker")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#4-what-is-sapsbf"},"4. What is @sap/sbf?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#5-sample-multitenant-saas-api-backing-service-in-sap-btp"},"5. Sample multitenant SaaS API (Backing Service) in SAP BTP"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#51-request-number-1"},"5.1. Request Number 1"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#catalog-before-subscribing-to-the-sustainable-saas-application"},"Catalog Before Subscribing to the Sustainable SaaS application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#catalog-after-subscribing-to-the-sustainable-saas-application"},"Catalog After Subscribing to the Sustainable SaaS application")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#52-request-number-2"},"5.2. Request Number 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#53-request-number-3"},"5.3. Request Number 3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#54-request-number-4"},"5.4. Request Number 4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#55-request-number-5"},"5.5. Request Number 5")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#6-further-learnings"},"6. Further learnings"))),(0,i.kt)("h2",{id:"1-what-is-a-service-broker"},"1. What is a Service Broker?"),(0,i.kt)("p",null,'First things first, what is a service broker? To answer that question, let us start with the "Why do we need a service broker?" before going into details. '),(0,i.kt)("p",null,"Let us imagine a scenario, in which you have a service running on your local server or any other place. And it is so important for you that you can not continue your development without having access to that service. Imagine something like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst app = express()\nconst port = 3000\n\napp.post('/super-hard-calculation', async (req, res) => {  \n   let result = await doSuperComplexStuff(req);\n   res.send(result)\n})\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`)\n})\n\n")),(0,i.kt)("p",null,"Since the calculation is super critical for your business you're planning to use it from several applications already deployed to SAP BTP. So you would like to create, delete instances, and bind to or unbind from your applications running on\nSAP BTP in a flexible style, like any other backing service already available on SAP BTP such as XSUAA, application autoscaler, etc - But how can you achieve this?"),(0,i.kt)("p",null,"So here is the situation."),(0,i.kt)("p",null,"Let's assume there is no connection between SAP BTP and your service yet. Since all service management actions are triggered by SAP BTP the actual challenge is - how to inform our service about the lifecycle events of our application such as the creation of instances, deletion of instances, new bindings, and so on."),(0,i.kt)("p",null,"Okay, so knowing the problem that needs to be solved would it not be great if there would be a standard for platforms such as SAP BTP, to send the requests in a standardized format that all the backing services in the world can implement to handle these lifecycle events? Because then every backing service could implement these standards in their applications and they could work hand in hand with any platform."),(0,i.kt)("p",null,"The good news! There is one! It is called ",(0,i.kt)("a",{parentName:"p",href:"https://www.openservicebrokerapi.org"},"Open Service Broker API"),"."),(0,i.kt)("p",null,"Okay, but what is Open Service Broker API or ",(0,i.kt)("strong",{parentName:"p"},"OSBAPI")," in short? Let us check the official definition."),(0,i.kt)("p",null,'"',(0,i.kt)("em",{parentName:"p"},"The Open Service Broker API project allows independent software vendors, SaaS providers and developers to easily provide backing services to workloads running on cloud native platforms such as Cloud Foundry and Kubernetes. The specification, which has been adopted by many platforms and thousands of service providers, describes a simple set of API endpoints which can be used to provision, gain access to and managing service offerings."),'"'),(0,i.kt)("p",null,"Now we know that there is a standard, let us closer explore what are those ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#provisioning"},"standards"),"."),(0,i.kt)("h2",{id:"2-osb-api-standards"},"2. OSB API Standards"),(0,i.kt)("p",null,"For the sake of simplicity, we will only cover the following sections of these standards:\n1) ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#catalog-management"},"Catalog Management"),"\n2) ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#provisioning"},"Provisioning (Creating a service instance)"),"\n3) ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#deprovisioning"},"Deprovisioning (Deleting a service instance)"),"\n4) ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#binding"},"Binding (Creating service binding for any application"),"\n5) ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#unbinding"},"Unbinding (Deleting service binding of service instance)")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For further information about these standards please visit the official ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openservicebrokerapi/servicebroker"},"OSB API repository"))),(0,i.kt)("p",null,"So in summary, what is the answer to the ",(0,i.kt)("strong",{parentName:"p"},"What is a service broker?")," question?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Answer:")," Any application which implements the ",(0,i.kt)("strong",{parentName:"p"},"OSBAPI")," standards is a service broker!"),(0,i.kt)("h2",{id:"3-how-does-a-platform-interact-with-a-service-broker"},"3. How does a platform interact with a service broker?"),(0,i.kt)("p",null,"In this section, you will learn how a platform like SAP BTP interacts with a service broker."),(0,i.kt)("h3",{id:"31-implementation-of-catalog-management-or-which-plans-do-you-have-service-broker"},'3.1. Implementation of Catalog Management or "Which plans do you have service broker?"'),(0,i.kt)("p",null,'Catalog management request - in very simple terms - will be the first question of a platform to the service broker:\n"Hey service broker, what kind of service instances and plans you have got?"'),(0,i.kt)("p",null,"Basically, it is a ",(0,i.kt)("strong",{parentName:"p"},"GET")," request to the endpoint ",(0,i.kt)("em",{parentName:"p"},"/v2/catalog")),(0,i.kt)("p",null,"So very primitive implementation in our sample would be something like the below:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please note that the code is just an example for understanding and will not work end-to-end. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const express = require(\'express\')\nconst app = express()\nconst port = 3000\n\n/* Broker Endpoints */\napp.get(\'/v2/catalog\'), async(req,res) => {\n   res.send(200,{\n    id:"dummy123", // ID of service instance, have might be any unique id\n    name:"Super Complex Calculation Service", // Name of of service\n    description:"This service does a super complex calculation which is very important for our business", // Description\n    bindable:true, // Tells if the service is bindable, then the platform keeps this information\n    plans:[{id:1,name:"Super Plan"},{id:2,name:"Normal Plan"}] // Plans of the service\n   })\n}\n/* End of Broker Endpoints */\n\napp.post(\'/super-hard-calculation\', async(req, res) => {  \n   let result = await doSuperComplexStuff(req);\n   res.send(result)\n})\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`)\n})\n\n')),(0,i.kt)("p",null,"In response the service broker returns the following information to the requesting platform:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It provides a service called ",(0,i.kt)("strong",{parentName:"li"},"Super Complex Calculation Service")),(0,i.kt)("li",{parentName:"ul"},"It is bindable so binding requests are allowed"),(0,i.kt)("li",{parentName:"ul"},"It has two service plans - ",(0,i.kt)("strong",{parentName:"li"},"Super Plan")," and ",(0,i.kt)("strong",{parentName:"li"},"Normal Plan"))),(0,i.kt)("h3",{id:"32-implementation-of-creation-of-a-service-instance-provisioning"},"3.2. Implementation of Creation of a Service Instance (Provisioning)"),(0,i.kt)("p",null,"Most of the time after the catalog request which you have seen in the first step, a second request will be sent to create a service instance. In OSBAPI Standards this is called ",(0,i.kt)("strong",{parentName:"p"},"provisioning"),"."),(0,i.kt)("p",null,"This time it is a ",(0,i.kt)("strong",{parentName:"p"},"PUT")," request to the endpoint ",(0,i.kt)("em",{parentName:"p"},"/v2/service_instances/:instance_id")),(0,i.kt)("p",null,"Let's assume that a platform (like SAP BTP) sends a body like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n   service_id: "dummy123" // Our service ID \n   plan_id: 1 // Super plan ID\n   parameters : {...}  // Parameters for the service instance to be created. Example: xs-security.json file content for XSUAA\n\n}\n')),(0,i.kt)("p",null,"Let us also add a primitive example implementation for provisioning:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const express = require(\'express\')\nconst app = express()\nconst port = 3000\n\n/* Broker Endpoints */\n\n// Step 1) Catalog Request\napp.get(\'/v2/catalog\', async(req,res) => {\n   res.send(200,{\n    id:"dummy123", // ID of service instance, have might be any unique id\n    name:"Super Complex Calculation Service", // Name of of service\n    description:"This service does a super complex calculation which is very important for our business", // Description\n    bindable:true, // Tells if the service is bindable, then the platform keeps this information\n    plans:[{id:1,name:"Super Plan"},{id:2,name:"Normal Plan"}] // Plans of the service\n   })\n}\n)\n\n// Step 2) Provisioning request (Create a service Instance)\napp.put(\'/v2/service_instances/:instance_id\', async(req,res) => {\n    let instanceId = req.params.instance_id;\n    let serviceMetadata = await createNewResourcesForNewInstance(instanceId);\n    res.send(201, serviceMetadata);\n})\n\n/* End of Broker Endpoints */\n\napp.post(\'/super-hard-calculation\', async(req, res) => {  \n   let result = await doSuperComplexStuff(req);\n   res.send(result)\n})\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`)\n})\n\n')),(0,i.kt)("p",null,"Since now you have seen the implementation of service instance creation, this leads us to the next step, which is binding creation."),(0,i.kt)("h3",{id:"33-implementation-of-service-binding-creation---binding-request"},"3.3. Implementation of Service Binding Creation - Binding Request"),(0,i.kt)("p",null,"After the creation of a service instance, most of the time the next request coming will be for the creation of a service binding."),(0,i.kt)("p",null,"It is also a ",(0,i.kt)("strong",{parentName:"p"},"PUT")," request to the endpoint ",(0,i.kt)("em",{parentName:"p"},"/v2/service_instances/:instance_id/service_bindings/:binding_id")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst app = express()\nconst port = 3000\n\n/* Broker Endpoints */\n\n// Step 1) Catalog Request\napp.get('/v2/catalog', async(req,res) => {\n   res.send(200,{\n    id:\"dummy123\", // ID of service instance, have might be any unique id\n    name:\"Super Complex Calculation Service\", // Name of of service\n    description:\"This service does a super complex calculation which is very important for our business\", // Description\n    bindable:true, // Tells if the service is bindable, then the platform keeps this information\n    plans:[{id:1,name:\"Super Plan\"},{id:2,name:\"Normal Plan\"}] // Plans of the service\n   })\n})\n\n// Step 2) Provisioning request (Create a service Instance)\napp.put('/v2/service_instances/:instance_id', async(req,res) => {\n    let instanceId = req.params.instance_id;\n    let serviceMetadata = await createNewResourcesForNewInstance(instanceId);\n    res.send(201,serviceMetadata);\n})\n\n// Step 3) Create Service Binding \napp.put('/v2/service_instances/:instance_id/service_bindings/:binding_id', async(req,res) => {\n    let instanceId = req.params.instance_id;\n    let bindingId  = req.params.binding_id;\n    let serviceBinding = await createNewServiceBinding(instanceId,bindingId);\n    res.send(201,serviceBinding);\n})\n\n/* End of Broker Endpoints */\n\napp.post('/super-hard-calculation', async(req, res) => {  \n   let result = await doSuperComplexStuff(req);\n   res.send(result)\n})\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`)\n})\n\n")),(0,i.kt)("h3",{id:"34-implementation-of-service-binding-deletion"},"3.4. Implementation of Service Binding Deletion"),(0,i.kt)("p",null,"Another action request that a service broker handles is the deletion of service bindings."),(0,i.kt)("p",null,"And unsurprisingly the request is a ",(0,i.kt)("strong",{parentName:"p"},"DELETE")," request to ",(0,i.kt)("em",{parentName:"p"},"/v2/service_instances/:instance_id/service_bindings/:binding_id")),(0,i.kt)("p",null,"Let us also add that to our trivial implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst app = express()\nconst port = 3000\n\n/* Broker Endpoints */\n\n// Step 1) Catalog Request\napp.get('/v2/catalog', async(req,res) => {\n   res.send(200,{\n    id:\"dummy123\", // ID of service instance, have might be any unique id\n    name:\"Super Complex Calculation Service\", // Name of of service\n    description:\"This service does a super complex calculation which is very important for our business\", // Description\n    bindable:true, // Tells if the service is bindable, then the platform keeps this information\n    plans:[{id:1,name:\"Super Plan\"},{id:2,name:\"Normal Plan\"}] // Plans of the service\n   })\n})\n\n// Step 2) Provisioning request (Create a service Instance)\napp.put('/v2/service_instances/:instance_id', async(req,res) => {\n    let instanceId = req.params.instance_id;\n    let serviceMetadata = await createNewResourcesForNewInstance(instanceId);\n    res.send(201,serviceMetadata);\n})\n\n// Step 3) Create Service Binding \napp.put('/v2/service_instances/:instance_id/service_bindings/:binding_id', async(req,res) => {\n    let instanceId = req.params.instance_id;\n    let bindingId  = req.params.binding_id;\n    let serviceBinding = await createNewServiceBinding(instanceId,bindingId);\n    res.send(201,serviceBinding);\n})\n\n// Step 4) Delete Service Binding \n\napp.delete('/v2/service_instances/:instance_id/service_bindings/:binding_id', async(req,res) => {\n    let instanceId = req.params.instance_id;\n    let bindingId  = req.params.binding_id;\n    let serviceBinding = await deleteInvalidateServiceBinding(instanceId,bindingId);\n    res.send(200,{});\n})\n\n\n/* End of Broker Endpoints */\n\napp.post('/super-hard-calculation', async(req, res) => {  \n   let result = await doSuperComplexStuff(req);\n   res.send(result)\n})\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`)\n})\n\n")),(0,i.kt)("h3",{id:"35-implementation-of-service-instance-deletion"},"3.5. Implementation of Service Instance Deletion"),(0,i.kt)("p",null,"The next action you will be handling in your service broker is the deletion of service instances."),(0,i.kt)("p",null,"The request is another ",(0,i.kt)("strong",{parentName:"p"},"DELETE")," request to ",(0,i.kt)("em",{parentName:"p"},"/v2/service_instances/:instance_id")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst app = express()\nconst port = 3000\n\n/* Broker Endpoints */\n\n// Step 1) Catalog Request\napp.get('/v2/catalog', async(req,res) => {\n   res.send(200,{\n    id:\"dummy123\", // ID of service instance, have might be any unique id\n    name:\"Super Complex Calculation Service\", // Name of of service\n    description:\"This service does a super complex calculation which is very important for our business\", // Description\n    bindable:true, // Tells if the service is bindable, then the platform keeps this information\n    plans:[{id:1,name:\"Super Plan\"},{id:2,name:\"Normal Plan\"}] // Plans of the service\n   })\n})\n\n// Step 2) Provisioning request (Create a service Instance)\napp.put('/v2/service_instances/:instance_id', async(req,res) => {\n  \n    let instanceId = req.params.instance_id;\n    let serviceMetadata = await createNewResourcesForNewInstance(instanceId);\n    res.send(201,serviceMetadata);\n})\n\n// Step 3) Create Service Binding \napp.put('/v2/service_instances/:instance_id/service_bindings/:binding_id', async(req,res) => {\n  \n    let instanceId = req.params.instance_id;\n    let bindingId  = req.params.binding_id;\n    let serviceBinding = await createNewServiceBinding(instanceId,bindingId);\n    res.send(201,serviceMetadata);\n})\n\n// Step 4) Delete Service Binding \n\napp.delete('/v2/service_instances/:instance_id/service_bindings/:binding_id', async(req,res) => {\n    let instanceId = req.params.instance_id;\n    let bindingId  = req.params.binding_id;\n    let serviceBinding = await deleteInvalidateServiceBinding(instanceId,bindingId);\n    res.send(200,{});\n})\n\n// Step 5) Delete Service Instance \n\napp.delete('/v2/service_instances/:instance_id', async(req,res) => {\n    let instanceId = req.params.instance_id;\n    let serviceBinding = await deleteServiceInstance(instanceId,bindingId);\n    res.send(200,{});\n})\n\n/* End of Broker Endpoints */\n\napp.post('/super-hard-calculation', async(req, res) => {  \n   let result = await doSuperComplexStuff(req);\n   res.send(result)\n})\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`)\n})\n\n")),(0,i.kt)("h3",{id:"36-registering-to-service-broker"},"3.6. Registering to Service Broker"),(0,i.kt)("p",null,"All of the trivial implementations we've done so far was on the backing service side. But to be able to interact with your service broker you have to tell your platform to go and talk with your service broker."),(0,i.kt)("p",null,"This is called ",(0,i.kt)("strong",{parentName:"p"},"registration to the service broker.")),(0,i.kt)("p",null,"For example in SAP BTP, the ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/BTP/btp-cli/intro.html"},"BTP CLI")," command below can be used for registering to a service broker from a Consumer Subaccount:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"  btp register services/broker --name NAME --url URL --user USER --password PASSWORD --subaccount SUBACCOUNTID\n")),(0,i.kt)("p",null,"For more details please check the official ",(0,i.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/BTP/btp-cli/btp-register-services-broker.html"},"documentation"),"."),(0,i.kt)("h2",{id:"4-what-is-sapsbf"},"4. What is @sap/sbf?"),(0,i.kt)("p",null,"In the previous sections, you have learned what a service broker is and for which purpose it serves."),(0,i.kt)("p",null,"Now let's imagine a scenario like the following."),(0,i.kt)("p",null,"Let's say you have three different backing services which you would like to use from SAP BTP. You would have to go to each of these three different backing services and implement OSBAPI standards, and the corresponding code would probably be very similar in all of the backing services. Furthermore, you would need to implement credentials for each of these services. If you have 10 business services, multiply this implementation effort by 10."),(0,i.kt)("p",null,"Then the question arises: ",(0,i.kt)("em",{parentName:"p"},"Can we avoid the effort of implementing OSBAPI for all of our backing services?"),"\nThe answer is: ",(0,i.kt)("em",{parentName:"p"},"Yes, you can!")),(0,i.kt)("p",null,"The Service Broker Framework (",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@sap/sbf?activeTab=readme#additional-service-configuration"},"@sap/sbf"),")\nis a Node.js framework that implements the Open Service Broker API. It can be used in the SAP Business Technology Platform or on-premise as part of the SAP HANA XS Advanced model. Therefore, when you deploy this npm module as explained in the official documentation, you will have a service broker which implements OSBAPI out-of-the-box."),(0,i.kt)("p",null,"Please refer to the official documentation of @sap/sbf for further information."),(0,i.kt)("h2",{id:"5-sample-multitenant-saas-api-backing-service-in-sap-btp"},"5. Sample multitenant SaaS API (Backing Service) in SAP BTP"),(0,i.kt)("p",null,"After all the theoretical background on service brokers, you will learn how we implemented the multitenant API of our sample app using the service broker approach. Before going into all details let us remember the flow again. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/sbflow.png&quot; width=&quot;400&quot;/&gt;",src:n(80518).Z,width:"1271",height:"613"})),(0,i.kt)("p",null,"As you can see in the diagram above,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Our backing service is the ",(0,i.kt)("strong",{parentName:"li"},"Sustainable SaaS API")," and is hosted in the Provider Subaccount."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Sustainable SaaS API Broker")," is the service broker for our backing service."),(0,i.kt)("li",{parentName:"ul"},"An XSUAA service instance with ",(0,i.kt)("strong",{parentName:"li"},"broker")," plan has been bound to both ",(0,i.kt)("strong",{parentName:"li"},"Service Broker")," and ",(0,i.kt)("strong",{parentName:"li"},"Backing Service"),".")),(0,i.kt)("p",null,"Let's briefly go through the flow in the diagram for a better understanding."),(0,i.kt)("h3",{id:"51-request-number-1"},"5.1. Request Number 1"),(0,i.kt)("p",null,"This request represents the registration of a service broker from ",(0,i.kt)("strong",{parentName:"p"},"Consumer Subaccount")," so that you can create a service instance afterward. After this step, your backing service is visible in the SAP BTP Service catalog within the Consumer Subaccount. "),(0,i.kt)("p",null,"In the sample app, when a Tenant subscribes to the multitenant business application, this request is automatically send from the multitenant business application."),(0,i.kt)("p",null,"Let us check how does that look like."),(0,i.kt)("h4",{id:"catalog-before-subscribing-to-the-sustainable-saas-application"},"Catalog Before Subscribing to the Sustainable SaaS application"),(0,i.kt)("p",null,"As you can see, before the subscription process, only the Sustainable SaaS multitenant business application is available in the catalog. This is because the multitenant business application automatically registers the ",(0,i.kt)("strong",{parentName:"p"},"Sustainable SaaS API Service Broker")," during the subscription."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/catalog-before-subscription.png&quot; width=&quot;400&quot;/&gt;",src:n(55895).Z,width:"1468",height:"1372"})),(0,i.kt)("h4",{id:"catalog-after-subscribing-to-the-sustainable-saas-application"},"Catalog After Subscribing to the Sustainable SaaS application"),(0,i.kt)("p",null,"See below that after subscribing, the Sustainable SaaS API is there and available."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/catalog-after-subscription.png&quot; width=&quot;400&quot;/&gt;",src:n(61606).Z,width:"1480",height:"1384"})),(0,i.kt)("h3",{id:"52-request-number-2"},"5.2. Request Number 2"),(0,i.kt)("p",null,"This request is sent by SAP BTP to your service broker to see which plans your service offers before service creation. For instance, default plan, premium plan, etc. This is the screenshot of request number 2 from SAP BTP to our ",(0,i.kt)("strong",{parentName:"p"},"Sustainable SaaS API Broker"),". The response is basically ",(0,i.kt)("strong",{parentName:"p"},"default")," and ",(0,i.kt)("strong",{parentName:"p"},"premium")," as configured in the respective ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/blob/basic/broker/catalog.json"},"catalog.json")," file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/catalog-plans.png&quot; width=&quot;400&quot;/&gt;",src:n(53827).Z,width:"1478",height:"1380"})),(0,i.kt)("h3",{id:"53-request-number-3"},"5.3. Request Number 3"),(0,i.kt)("p",null,"This request creates your service instance and triggers the provisioning event on your @sap/sbf module. You should handle this request accordingly. For example, if you offer a database service, you might go and create a new DB instance when this request is triggered. Please see below to understand how SAP BTP sends the service creation request to the ",(0,i.kt)("strong",{parentName:"p"},"Sustainable SaaS API Service Broker"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/create-instance.png&quot; width=&quot;400&quot;/&gt;",src:n(13274).Z,width:"1486",height:"1380"})),(0,i.kt)("h3",{id:"54-request-number-4"},"5.4. Request Number 4"),(0,i.kt)("p",null,"This request is sent when the platform needs to create credentials that are valid for your service instance and/or bind your service instance to an application. Since @sap/sbf and the XSUAA broker plan are used by the service broker, this is automatically handled in our case. Whenever a binding request comes in, it first reaches the ",(0,i.kt)("strong",{parentName:"p"},"Sustainable SaaS API Service Broker")," @sap/sbf instance then which automatically creates credentials for the specific subaccount which sent the binding request by talking with XSUAA using the broker plan instance. These credentials will be valid since we have also bound the same XSUAA instance to our backing service (API)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/create-binding.png&quot; width=&quot;400&quot;/&gt;",src:n(35910).Z,width:"1656",height:"1388"})),(0,i.kt)("h3",{id:"55-request-number-5"},"5.5. Request Number 5"),(0,i.kt)("p",null,"Having the credentials, a Tenant is now ready to call the backing service ",(0,i.kt)("strong",{parentName:"p"},"Sustainable SaaS API")," from their subaccount, from their SAP S/4HANA system, or any other third-party system. Since the JWT token contains the subaccount id, our CAP-based API will identify the incoming Tenant and upload the data directly to the correct Tenant database container with the help of the SAP Service Manager ",(0,i.kt)("em",{parentName:"p"},"container plan"),". Using the service binding credentials like the ones below, the Sustainable SaaS API (reachable by the ",(0,i.kt)("strong",{parentName:"p"},"apiUrl"),") can be called. The API itself is a CAP-based OData API ."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/binding.png&quot; width=&quot;400&quot;/&gt;",src:n(43114).Z,width:"1294",height:"756"})),(0,i.kt)("h1",{id:"6-further-learnings"},"6. Further learnings"),(0,i.kt)("p",null,"Please check this ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2022/03/08/exploring-service-brokers-and-cf-on-sap-business-technology-platform"},"blog post")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=5_Ns0ihQPD4&list=PL6RpkC85SLQDaxcABfWlLuIDR79DxDrLi"},"video series")," by DJ Adams if you want to deep dive into this concept."))}d.isMDXComponent=!0},43114:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/binding-7a8fa5ea25842f9b00d8c430a25dfe09.png"},61606:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/catalog-after-subscription-b3a000b7dc3f697f3b9c6a6be8561a5c.png"},55895:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/catalog-before-subscription-f4275f41ed0c32f424873c5eef28b5f1.png"},53827:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/catalog-plans-46b49a8e305e6fadc22933776d99e5fc.png"},35910:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-binding-bb9a171bef6ae42b63a8b443b662aae5.png"},13274:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-instance-73fb4803c15b33b2579855fe75d8ddfb.png"},80518:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sbflow-8c3abb8803bca74793a71a9fdf0c5143.png"}}]);