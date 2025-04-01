"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[8581],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||n;return a?o.createElement(g,i(i({ref:t},l),{},{components:a})):o.createElement(g,i({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},23349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=a(87462),r=(a(67294),a(3905));const n={sidebar_position:5},i="Custom Domain Usage",s={unversionedId:"project-panel/expert/custom-domain-usage/README",id:"project-panel/expert/custom-domain-usage/README",title:"Custom Domain Usage",description:"In this section you will be learning how to use a your own custom domain via using Cloud DNS service of Google Cloud Platform(GCP) for",source:"@site/docs/project-panel/4-expert/custom-domain-usage/README.md",sourceDirName:"project-panel/4-expert/custom-domain-usage",slug:"/project-panel/expert/custom-domain-usage/",permalink:"/PAA/@navyakhurana-navyakhurana-patch-2/project-panel/expert/custom-domain-usage/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya khurana",lastUpdatedAt:1693289879,formattedLastUpdatedAt:"Aug 29, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Custom Domain for SAP Identity Authentication",permalink:"/PAA/@navyakhurana-navyakhurana-patch-2/project-panel/expert/custom-domain-for-ias/"},next:{title:"Deployment to multiple SAP BTP regions",permalink:"/PAA/@navyakhurana-navyakhurana-patch-2/project-panel/expert/deploy-multiple-regions/"}},u={},c=[{value:"1. Prerequisites for setting up your custom domain",id:"1-prerequisites-for-setting-up-your-custom-domain",level:2},{value:"2. Creating a DNS Zone for your domain with GCP Cloud DNS",id:"2-creating-a-dns-zone-for-your-domain-with-gcp-cloud-dns",level:2},{value:"3. Go to your domain registrar and adopt your nameservers (DNS Propagation)",id:"3-go-to-your-domain-registrar-and-adopt-your-nameservers-dns-propagation",level:2},{value:"4. Create a service account on your",id:"4-create-a-service-account-on-your",level:2},{value:"5. Create secret with your GCP Service Account for GCP interaction",id:"5-create-secret-with-your-gcp-service-account-for-gcp-interaction",level:2},{value:"6. DNS Provider on SAP Kyma Runtime",id:"6-dns-provider-on-sap-kyma-runtime",level:2},{value:"6.1. Create DNS Provider",id:"61-create-dns-provider",level:3},{value:"6.2. Create DNS Entry",id:"62-create-dns-entry",level:3}],l={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-domain-usage"},"Custom Domain Usage"),(0,r.kt)("p",null,"In this section you will be learning how to use a your own custom domain via using Cloud DNS service of Google Cloud Platform(GCP) for\nthe workloads in your SAP Kyma Runtime."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-domain-usage"},"Custom Domain Usage"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#1-prerequisites-for-setting-up-your-custom-domain"},"1. Prerequisites for setting up your custom domain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#2-creating-a-dns-zone-for-your-domain-with-gcp-cloud-dns"},"2. Creating a DNS Zone for your domain with GCP Cloud DNS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#3-go-to-your-domain-registrar-and-adopt-your-nameservers-dns-propagation"},"3. Go to your domain registrar and adopt your nameservers (DNS Propagation)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#4-create-a-service-account-on-your-gcp-account"},"4. Create a service account on your ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#5-create-secret-with-your-gcp-service-account-for-gcp-interaction"},"5. Create secret with your GCP Service Account for GCP interaction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#6-dns-provider-on-sap-kyma-runtime"},"6. DNS Provider on SAP Kyma Runtime"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#61-create-dns-provider"},"6.1. Create DNS Provider")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#62-create-dns-entry"},"6.2. Create DNS Entry"))))))),(0,r.kt)("h2",{id:"1-prerequisites-for-setting-up-your-custom-domain"},"1. Prerequisites for setting up your custom domain"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You enabled and have access to your SAP Kyma Runtime"),(0,r.kt)("li",{parentName:"ul"},"You already own a domain from any domain registrar"),(0,r.kt)("li",{parentName:"ul"},"You installed kubectl on your local device")),(0,r.kt)("h2",{id:"2-creating-a-dns-zone-for-your-domain-with-gcp-cloud-dns"},"2. Creating a DNS Zone for your domain with GCP Cloud DNS"),(0,r.kt)("p",null,"Go and login your ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/"}),".\nAfter the login go to your ",(0,r.kt)("em",{parentName:"p"},"Network Services")," and Click ",(0,r.kt)("em",{parentName:"p"},"DNS Zones")," as shown below to see your domain. "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,r.kt)("p",{parentName:"admonition"},"If you have already a public DNS Zone for your domain which you will use. You should skip this step.\nFor example, in the picture above, for DNS name ",(0,r.kt)("em",{parentName:"p"},"google.sap-demo.com")," the zone is already created and it is public.")),(0,r.kt)("p",null,"Click the ",(0,r.kt)("em",{parentName:"p"},"Create Zone")," button, if you do not have already a DNS Zone for your domain."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/gcp-dns-zone-overview.png&quot; width=&quot;500&quot; /&gt;",src:a(14421).Z,width:"2476",height:"1022"})),(0,r.kt)("p",null,"After that, fill the fields as shown below and hit create."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/cr-zone.png&quot; width=&quot;500&quot; /&gt;",src:a(75447).Z,width:"2522",height:"1586"})),(0,r.kt)("p",null,"After the creation you should see two records has been automatically created as shown below.\nOne is the ",(0,r.kt)("strong",{parentName:"p"},"SOA")," record and the other one is ",(0,r.kt)("strong",{parentName:"p"},"NS")," record."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/cr-zone.png&quot; width=&quot;500&quot; /&gt;",src:a(75447).Z,width:"2522",height:"1586"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"SOA")," (Start of Authority) DNS record is a fundamental DNS resource record type used to indicate authoritative information about a DNS zone.\nThe ",(0,r.kt)("strong",{parentName:"p"},"NS")," (Nameservers) records shows the nameservers responsible to respond incoming DNS queries for your domain."),(0,r.kt)("p",null,"Open the NS record as shown below and save your nameservers, you will need them in the next step"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/ns-servers.png&quot; width=&quot;500&quot; /&gt;",src:a(86517).Z,width:"2836",height:"1052"})),(0,r.kt)("h2",{id:"3-go-to-your-domain-registrar-and-adopt-your-nameservers-dns-propagation"},"3. Go to your domain registrar and adopt your nameservers (DNS Propagation)"),(0,r.kt)("p",null,"When you change the nameservers for a domain, the change may take up to 24-48 hours to take affect. This is known as ",(0,r.kt)("em",{parentName:"p"},"DNS propagation"),"."),(0,r.kt)("p",null,"On previous step your you have seen the nameservers of your DNS Zone.\nIn this step, you need to go to your domain registrar, and modify existing nameservers with the nameservice you got from your DNS Zone. in short, you will setup the DNS propagation."),(0,r.kt)("p",null,"Since it may vary across different domain registrars, you should check with your domain registrar about how to do the DNS propagation."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Warning")," "),(0,r.kt)("p",{parentName:"admonition"},"After you modified your DNS nameservers, it might take up to 48 hours to propagete. There is no exact way to tell when propagation is complete for you as it depends on different factors. You can use ",(0,r.kt)("a",{parentName:"p",href:"https://toolbox.googleapps.com/apps/dig/"},"GSuite-Toolbox Dig")," to check your propagation status.")),(0,r.kt)("h2",{id:"4-create-a-service-account-on-your"},"4. Create a service account on your"),(0,r.kt)("p",null,"A service account is a special kind of account typically used by an application or compute workload rather than a person.\nIn this section, you will create a service account in your , which will be used later by SAP Kyma Runtime."),(0,r.kt)("p",null,"Go to IAM & Admin section on your .\nThen click the service accounts as shown below. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/sa-entry.png&quot; width=&quot;500&quot; /&gt;",src:a(381).Z,width:"2296",height:"866"})),(0,r.kt)("p",null,"After that click create service account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/sa-create-click.png&quot; width=&quot;500&quot; /&gt;",src:a(52484).Z,width:"2848",height:"1006"})),(0,r.kt)("p",null,'Fill the form as shown below, and click "Create and Continue".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/sa-create-continue.png&quot; width=&quot;500&quot; /&gt;",src:a(44112).Z,width:"1644",height:"1376"})),(0,r.kt)("p",null,'Assign DNS Administrator role to and click "Continue".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/assign-role-sa.png&quot; width=&quot;500&quot; /&gt;",src:a(77535).Z,width:"1840",height:"1264"}),"."),(0,r.kt)("p",null,'Then click "Done".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/sa-complete.png&quot; width=&quot;500&quot; /&gt;",src:a(74085).Z,width:"1864",height:"1286"}),"."),(0,r.kt)("p",null,'After that you should see that your service account is created.\nNow you should click on your service account and go to "Keys" tab.\nCreate a key as shown below.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/sa-create-key.png&quot; width=&quot;500&quot; /&gt;",src:a(9930).Z,width:"1952",height:"1112"}),"."),(0,r.kt)("p",null,'You should now choose JSON, and hit "Create".\nAfter that your key will be downloaded in your local computer. Please rename it as ',(0,r.kt)("strong",{parentName:"p"},"serviceaccount.json")," and store it securely."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/sa-create-key-json.png&quot; width=&quot;500&quot; /&gt;",src:a(54521).Z,width:"1468",height:"1012"}),"."),(0,r.kt)("h2",{id:"5-create-secret-with-your-gcp-service-account-for-gcp-interaction"},"5. Create secret with your GCP Service Account for GCP interaction"),(0,r.kt)("p",null,"On previous step, you have created a service account from your .\nThe file you have downloaded on previous step will be used to create a kubernetes secret on this step."),(0,r.kt)("p",null,"Your Kyma environment will use this secret to connect your Cloud DNS service on your ."),(0,r.kt)("p",null,"Before all, please create a namespace so your Custom Domain changes can remain there."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create namespace gcp-gateway\n")),(0,r.kt)("p",null,"Then you should create a secret, via using your downloaded ",(0,r.kt)("strong",{parentName:"p"},"service-account.json")," file on previous step."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"}," kubectl create secret generic gcp-dns-sa-secret --from-file='<path-of-your-serviceaccount.json>' -n gcp-gateway\n")),(0,r.kt)("h2",{id:"6-dns-provider-on-sap-kyma-runtime"},"6. DNS Provider on SAP Kyma Runtime"),(0,r.kt)("p",null,"DNS Provider is a Kubernetes custom resource definition (CRD) that is used to manage external DNS providers in a Gardener Kubernetes cluster. Since SAP Kyma Runtime also runs on top of Gardener project by SAP, this also applies to your SAP Kyma cluster."),(0,r.kt)("p",null,"Typical dns-provider.yaml file would look like below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: dns.gardener.cloud/v1alpha1 \nkind: DNSProvider \nmetadata:\n  name: gcp-dns-provider\n  labels:\n    app.kubernetes.io/name: gcp-dns-provider\n  annotations:\n    dns.gardener.cloud/class: garden\n  namespace: gcp-gateway\nspec:\n  type: google-clouddns \n  secretRef:\n    name: gcp-dns-sa-secret\n    namespace: gcp-gateway\n  domains:\n    include:\n      - '*.kyma.<yourdomain>' ##\xa0replace this line in original domain\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,r.kt)("p",{parentName:"admonition"},"For other supported DNS providers, please refer ",(0,r.kt)("a",{parentName:"p",href:"https://gardener.cloud/docs/extensions/others/gardener-extension-shoot-dns-service/docs/usage/dns_names/"},"here"),". ")),(0,r.kt)("h3",{id:"61-create-dns-provider"},"6.1. Create DNS Provider"),(0,r.kt)("p",null,"First go to directory ",(0,r.kt)("strong",{parentName:"p"},"./docu/4-expert/custom-domain-usage/resources")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ./docu/4-expert/custom-domain-usage/resources\n")),(0,r.kt)("p",null,"Then open the ",(0,r.kt)("a",{target:"_blank",href:a(89487).Z},"DNS-Provider.yaml")," and modify the placeholder < yourdomain > with your actual domain."),(0,r.kt)("p",null,"After that run command below to create the DNS Provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f ./dns-provider.yaml -n gcp-gateway\n")),(0,r.kt)("p",null,"You should now see in your ",(0,r.kt)("em",{parentName:"p"},"gcp-gateway")," namespace a DNS provider has been created for you as below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&lt;img src=&quot;./images/dns-provider.png&quot; width=&quot;500&quot; /&gt;",src:a(54675).Z,width:"3022",height:"1354"}),"."),(0,r.kt)("h3",{id:"62-create-dns-entry"},"6.2. Create DNS Entry"),(0,r.kt)("p",null,"On previous step you have informed your Kyma Cluster, which DNS Provider to use via creating the DNS Provider.\nOn this step you will tell your DNS Provider to use your domain to route your requests to your clusters ingress gateway."),(0,r.kt)("p",null,"----- WORK IN PROGRESS -----------"))}d.isMDXComponent=!0},89487:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/files/dns-provider-1beab70a4631468a25e6d398469ffb2d.yaml"},77535:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/assign-role-sa-e988c381b0b3de0644f99704d264aa5f.png"},75447:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cr-zone-016b55b4858a147e2c222e8573d401af.png"},54675:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/dns-provider-12a62008bf78724ecfb36b67ceb8d379.png"},14421:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/gcp-dns-zone-overview-6893b48deb05a320ee8368f210a64044.png"},86517:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ns-servers-aac5fc44cd006f2765170fe7238fb638.png"},74085:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/sa-complete-31ea9021d1c9ae167dbb9e8931a6f9da.png"},52484:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/sa-create-click-f70ccbe002feb5a9a1b8cb6ef4feb1c9.png"},44112:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/sa-create-continue-55d8e4698e567cfbab2ceface9bbb3b2.png"},54521:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/sa-create-key-json-903089633dcf7c5e06ef731f3f41a600.png"},9930:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/sa-create-key-7162acfa61e47e46e856d9000487630f.png"},381:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/sa-entry-caa2d47388f82ab59893ceb6ff0e5aa6.png"}}]);