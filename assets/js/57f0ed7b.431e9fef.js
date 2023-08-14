"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[3041],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},76007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_position:14},r="Send e-mails using Microsoft Graph",s={unversionedId:"project-panel/expert/send-emails-graph-api/README",id:"project-panel/expert/send-emails-graph-api/README",title:"Send e-mails using Microsoft Graph",description:"In this tutorial, you will learn how to send e-mails from your SaaS application using the Microsoft Graph API and Exchange Online. This can be useful in scenarios requiring automated messages sent to users from within your application. This is just one approach how to programmatically send e-mails using popular Microsoft services. Alternatively, you might think about configuring a destination to your SMTP server or using similar services offered by other providers like AWS Simple Email Service (SES) or SendGrid.",source:"@site/docs/project-panel/4-expert/send-emails-graph-api/README.md",sourceDirName:"project-panel/4-expert/send-emails-graph-api",slug:"/project-panel/expert/send-emails-graph-api/",permalink:"/PAA/project-panel/expert/send-emails-graph-api/",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Self-Registration, Onboarding Automation and One-Domain Concept",permalink:"/PAA/project-panel/expert/onboard-automation-domain/"},next:{title:"Update Tenant database containers",permalink:"/PAA/project-panel/expert/update-tenant-containers/"}},l={},p=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Prerequisites",id:"2-prerequisites",level:2},{value:"3. Create a Shared Mailbox",id:"3-create-a-shared-mailbox",level:2},{value:"4. Create an Application Registration",id:"4-create-an-application-registration",level:2},{value:"5. Test the sample application",id:"5-test-the-sample-application",level:2},{value:"6. Resource Owner Password Flow",id:"6-resource-owner-password-flow",level:2},{value:"7. Further Information",id:"7-further-information",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send-e-mails-using-microsoft-graph"},"Send e-mails using Microsoft Graph"),(0,o.kt)("p",null,"In this tutorial, you will learn how to send e-mails from your SaaS application using the Microsoft Graph API and Exchange Online. This can be useful in scenarios requiring automated messages sent to users from within your application. This is just one approach how to programmatically send e-mails using popular Microsoft services. Alternatively, you might think about configuring a destination to your SMTP server or using similar services offered by other providers like AWS Simple Email Service (SES) or SendGrid. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#send-e-mails-using-microsoft-graph"},"Send e-mails using Microsoft Graph"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1-introduction"},"1. Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2-prerequisites"},"2. Prerequisites")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3-create-a-shared-mailbox"},"3. Create a Shared Mailbox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#4-create-an-application-registration"},"4. Create an Application Registration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#5-test-the-sample-application"},"5. Test the sample application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#6-resource-owner-password-flow"},"6. Resource Owner Password Flow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#7-further-information"},"7. Further Information"))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important")," - The below sample approach works with a very powerful Graph API permission on Application-level. In a productive environment, this permission should be immediately restricted after setup, to prevent misuse by application developers. Otherwise, this setup allows anyone in possession of the respective credentials to send e-mails on behalf of any Active Directory user! Please follow the official Microsoft documentation (",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/graph/auth-limit-mailbox-access"},"click here"),") to set up a corresponding restriction. ")),(0,o.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,o.kt)("p",null,"Most SaaS applications will require a way to interact with their users via e-mail or other messaging channels. Therefore, nowadays you as a SaaS Provider have various ways of how to set up such an e-mail service integration in your environment. As Microsoft Office 365 and Exchange Online are among the most popular products on the market we will show you how to use them to send out e-mails right from within your application with just a few lines of code. "),(0,o.kt)("p",null,"While SAP Business Technology Platform offers the option to define a destination of type ",(0,o.kt)("strong",{parentName:"p"},"MAIL"),", you will probably face authentication issues when trying to connect to modern mail servers using IMAP, POP or SMTP. Let's have a look at the example of Microsoft Exchange Online, which is used by many enterprise companies out there.  "),(0,o.kt)("p",null,'In September 2021 Microsoft published the following statement: "',(0,o.kt)("em",{parentName:"p"},"[...]"," effective October 1, 2022, we will begin disabling Basic authentication for Outlook, EWS, RPS, POP, IMAP, and EAS protocols in Exchange Online. SMTP Auth will also be disabled if it is not being used. ","[...]"," we strongly encourage customers to move away from using Basic authentication with SMTP AUTH when possible. Other options for sending authenticated mail include using alternative protocols, such as the Microsoft Graph API."),'" (',(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/deprecation-of-basic-authentication-exchange-online"},"See details here"),")"),(0,o.kt)("p",null,"As a consequence, IMAP or POP protocol usage with basic authentication will not be possible anymore in Exchange Online. Furthermore, SMTP Auth will be disabled by default and has to be ",(0,o.kt)("strong",{parentName:"p"},"explicitly enabled")," for an organization or specific mailboxes (",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/authenticated-client-smtp-submission"},"see here"),"). Last but not least, if Basic Authentication has been disabled by a respective authentication policy even SMTP Auth protocol will not be usable by clients anymore! "),(0,o.kt)("p",null,"Given all these security-related restrictions, Microsoft recommends switching to alternative protocols like the ",(0,o.kt)("strong",{parentName:"p"},"Microsoft Graph API")," which will be covered by the following Expert Feature tutorial. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Hint")," - If you are using a different e-mail service provider, enabled SMTP AUTH and Basic Authentication in your environment, or host your own e-mail server in an On-Premise landscape, considering a destination of type ",(0,o.kt)("strong",{parentName:"p"},"MAIL")," or usage of ",(0,o.kt)("strong",{parentName:"p"},"SAP Cloud Integration")," might still be an option for you (",(0,o.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2020/01/08/cloud-integration-connect-cpi-with-your-on-premise-mail-server/"},"click here"),"). SAP Cloud Integration also offers an OAuth2 based integration with Microsoft Exchange (",(0,o.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2020/08/20/cloud-intgration-connect-to-microsoft-365-mail-with-oauth2/"},"click here"),").")),(0,o.kt)("h2",{id:"2-prerequisites"},"2. Prerequisites"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Microsoft Azure")),(0,o.kt)("p",null,"To create an application registration that can be used to send e-mails via Microsoft Graph, you will need an active Microsoft Azure account including an Azure Active Directory.  You can sign up for a free Microsoft Azure account here ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-in/free"},"https://azure.microsoft.com/en-in/free"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Hint")," - For testing purposes, you can go with a free Azure account and you don't need a paid Azure subscription.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exchange Online")),(0,o.kt)("p",null,"You can send e-mails by either using a shared mailbox or a regular user's inbox. For both scenarios, you need to have at least one valid license including Exchange Online access (like Office 365 F3). After creating a Microsoft Azure account, log in to the Microsoft 365 Admin Center here ",(0,o.kt)("a",{parentName:"p",href:"https://admin.microsoft.com/#/homepage"},"https://admin.microsoft.com/#/homepage"),". This is where you can buy and see your licensed products like an Office 365 F3 subscription. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Hint")," - For testing purposes, check if you're eligible for a free ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/microsoftteams/teams-exploratory"},"Microsoft Teams Exploratory")," license. This license also contains the required Exchange Online access. ")),(0,o.kt)("h2",{id:"3-create-a-shared-mailbox"},"3. Create a Shared Mailbox"),(0,o.kt)("p",null,"Having a valid license (including the Exchange Online feature) assigned to your Microsoft 365 account, you can switch to the ",(0,o.kt)("a",{parentName:"p",href:"https://admin.exchange.microsoft.com/#/mailboxes"},"Exchange Admin Center")," to create a new shared mailbox. You can find more information and limitations of Shared Mailboxes in the official Microsoft documentation (",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/microsoft-365/admin/email/about-shared-mailboxes"},"click here"),")."),(0,o.kt)("p",null,"In the below sample, we created two shared mailboxes. One is for automated messages sent by the application, which is not supposed to receive any response messages (",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:donotreply@susaas.com"},"donotreply@susaas.com")),"). The other shared mailbox is the contact e-mail address of our SaaS application (",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:info@susaas.com"},"info@susaas.com")),") accessible by one or multiple delegate users. This contact mailbox can also receive messages. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Mail_SharedMailbox.png&quot; width=&quot;500&quot; /&gt;",src:a(99626).Z,width:"1484",height:"563"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Hint")," - In this case, susaas.com was registered as a custom Domain in the respective Admin Center settings. For test scenarios, you can also go with the default *.onmicrosoft.com domain assigned to your account. ")),(0,o.kt)("p",null,"The Exchange Admin Center provides a lot of options that we cannot cover in this tutorial like the rule used in our DoNotReply mailbox which automatically deletes all messages arriving in the mailbox. Feel free to explore further options of Exchange Online."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Mail_DoNotReply.png&quot; width=&quot;500&quot; /&gt;",src:a(32976).Z,width:"1474",height:"690"})),(0,o.kt)("p",null,"While the DoNotReply mailbox does not need any delegate access permissions as it is only used to send e-mails from within the SaaS application, the regular contact mailbox requires delegate access. You can add multiple users responsible for maintaining the contact mailbox. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Mail_DelegateAccess.png&quot; width=&quot;500&quot; /&gt;",src:a(88794).Z,width:"1236",height:"653"})),(0,o.kt)("p",null,"Each delegate user needs to have a valid license assigned that contains Exchange Online access (like Office 365 F3). If the user does not appear in the list of available users in the Exchange Admin Center, please switch back to the ",(0,o.kt)("a",{parentName:"p",href:"https://admin.microsoft.com/#/homepage"},"Microsoft 365 Admin Center"),", select the user, and switch to the ",(0,o.kt)("strong",{parentName:"p"},"Mail")," tab. This should initialize the Exchange Online usage within a few minutes. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Mail_ActivateMail.png&quot; width=&quot;500&quot; /&gt;",src:a(54710).Z,width:"1377",height:"693"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important")," - Each shared mailbox results in a new user in your Microsoft 365 Admin Center. This user is not supposed to be used for logins and the password must not be changed! Furthermore, you don't need to assign any licenses to the shared mailbox users. ")),(0,o.kt)("h2",{id:"4-create-an-application-registration"},"4. Create an Application Registration"),(0,o.kt)("p",null,"You can use a standard Azure Active Directory ",(0,o.kt)("strong",{parentName:"p"},"Application Registration")," to send e-mails using the Microsoft Graph API. An application registration allows you to retrieve access tokens from Azure Active Directory for a certain scope (e.g., Microsoft Graph usage). The authorized scopes/permissions can be defined for each Application Registration. The process to create such an Application Registration is very simple. "),(0,o.kt)("p",null,"4.1. Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#home"},"Azure Portal")," and access your Azure Active Directory instance."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_AppReg01.png&quot; width=&quot;500&quot; /&gt;",src:a(49641).Z,width:"962",height:"449"})),(0,o.kt)("p",null,"4.2. Switch to ",(0,o.kt)("strong",{parentName:"p"},"App registrations")," and click on ",(0,o.kt)("strong",{parentName:"p"},"New registration"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_AppReg02.png&quot; width=&quot;500&quot; /&gt;",src:a(76438).Z,width:"984",height:"696"})),(0,o.kt)("p",null,"4.3. Define a name of your choice, select the Single Tenant mode and click on ",(0,o.kt)("strong",{parentName:"p"},"Register"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_AppReg03.png&quot; width=&quot;500&quot; /&gt;",src:a(98964).Z,width:"1194",height:"956"})),(0,o.kt)("p",null,"4.4. Your Application Registration is created and you are redirected to the Overview page. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Hint")," - Note the ",(0,o.kt)("strong",{parentName:"p"},"Application (client) ID")," and the ",(0,o.kt)("strong",{parentName:"p"},"Directory (tenant) ID"),". You will need these values for authentication in your sample application.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_AppReg04.png&quot; width=&quot;500&quot; /&gt;",src:a(24606).Z,width:"1083",height:"579"})),(0,o.kt)("p",null,"4.5. Switch to ",(0,o.kt)("strong",{parentName:"p"},"API permissions")," and click on ",(0,o.kt)("strong",{parentName:"p"},"Add a permission"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_AppReg05.png&quot; width=&quot;500&quot; /&gt;",src:a(24534).Z,width:"1036",height:"665"})),(0,o.kt)("p",null,"4.6. Select ",(0,o.kt)("strong",{parentName:"p"},"Microsoft Graph")," from the available APIs, click on ",(0,o.kt)("strong",{parentName:"p"},"Application permissions")," and search for the ",(0,o.kt)("strong",{parentName:"p"},"Mail.Send")," permission. Select it and click on ",(0,o.kt)("strong",{parentName:"p"},"Add permissions"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_AppReg06.png&quot; width=&quot;500&quot; /&gt;",src:a(27740).Z,width:"1655",height:"867"})),(0,o.kt)("p",null,"4.7. This is a very powerful permission, as it is set on Application-level and allows you to send e-mails on behalf of any user in your directory. For that reason, ",(0,o.kt)("strong",{parentName:"p"},"admin consent")," has to be given for this permission. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important")," - Please check the official ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/auth-limit-mailbox-access"},"Microsoft documentation")," to learn more about how to restrict the application's access permissions to certain mailboxes! ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_AppReg07.png&quot; width=&quot;500&quot; /&gt;",src:a(68563).Z,width:"1655",height:"819"})),(0,o.kt)("p",null,"4.8. You can remove the ",(0,o.kt)("strong",{parentName:"p"},"User.Read")," permission and admin consent from the API permissions list as you can see in the below screenshots. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_AppReg08.png&quot; width=&quot;500&quot; /&gt;",src:a(52801).Z,width:"1656",height:"838"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_AppReg09.png&quot; width=&quot;500&quot; /&gt;",src:a(92716).Z,width:"1653",height:"857"})),(0,o.kt)("p",null,"4.9. Switch to the ",(0,o.kt)("strong",{parentName:"p"},"Certificates & secrets")," section and create a new ",(0,o.kt)("strong",{parentName:"p"},"Client Secret"),". Please copy the Secret value as you won't be able to see it again once you leave the page. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_AppReg10.png&quot; width=&quot;500&quot; /&gt;",src:a(34920).Z,width:"1654",height:"866"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_AppReg11.png&quot; width=&quot;500&quot; /&gt;",src:a(32760).Z,width:"1400",height:"827"})),(0,o.kt)("h2",{id:"5-test-the-sample-application"},"5. Test the sample application"),(0,o.kt)("p",null,"5.1. Go to the ",(0,o.kt)("a",{parentName:"p",href:"../send-emails-graph-api/code/"},"code directory")," of this Expert Feature topic where you can find the sample application for testing your setup. Copy the index.js and package.json files to place on your local device - just to ensure you're not pushing any of your secrets to GitHub. "),(0,o.kt)("p",null,"5.2. Open a terminal window and switch to the directory in which you copied the provided files. Install the required dependencies by running the ",(0,o.kt)("strong",{parentName:"p"},"npm install")," command in the respective directory. "),(0,o.kt)("p",null,"5.3. Open the index.js file and update the following code sections. "),(0,o.kt)("p",null,"5.3.1. Update the credentials based on the Secret you created in the previous steps and the application details you can find in the Overview page of the application registration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const credential = new ClientSecretCredential(\n    '<<a22bd-...-a1f071e>>',    // Directory (tenant) ID\n    '<<9b79b-...-1f1c55d>>',    // Application (client) ID\n    '<<ZYM8Q~...~SUscdn2>>'     // Application Secret\n);\n")),(0,o.kt)("p",null,"5.3.2. Insert a valid e-mail address for the recipient of your test message. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const sendMail = {\n    message: {\n        subject: 'Meet for lunch?',\n        body: {\n            contentType: 'Text',\n            content: 'The new cafeteria is open!'\n        },\n        toRecipients: [{\n            emailAddress: { \n                address: '<<mail.address@of.recipient>>'    // Recipient's e-mail address\n            }\n        }]\n    },\n    saveToSentItems: 'false'\n};\n")),(0,o.kt)("p",null,"5.3.3. Insert the e-mail address of your shared mailbox which you created at the beginning of this tutorial."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'client.api(\'/users/<<mail.address@of.mailbox>>/sendMail\')   // Shared mailbox e-mail address\n    .header("Content-type", "application/json")\n    .post(sendMail, (err, res, rawResponse) => {\n        console.log(res);\n        console.log(rawResponse);\n        console.log(err);\n    });\n')),(0,o.kt)("p",null,"5.4. Save the index.js file and run ",(0,o.kt)("strong",{parentName:"p"},"npm run start")," in your terminal. If you see a result like below, your e-mail was sent successfully. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_SendMail.png&quot; width=&quot;500&quot; /&gt;",src:a(99448).Z,width:"857",height:"356"})),(0,o.kt)("p",null,"5.5. Check the inbox of your recipient's e-mail address where the message should have arrived. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_SendMail01.png&quot; width=&quot;500&quot; /&gt;",src:a(72163).Z,width:"1411",height:"473"})),(0,o.kt)("p",null,"5.7. You can now integrate the above coding into your application by using e.g., a new helper class in your Business Application Service. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important")," - Make sure to store your credential values securely in your SAP Credential Store and rotate the values on a regular basis! Furthermore, you might think about improving your security setup by using an X.509 certificate to obtain the access token instead of Client Credentials. ")),(0,o.kt)("h2",{id:"6-resource-owner-password-flow"},"6. Resource Owner Password Flow"),(0,o.kt)("p",null,"Although Microsoft does not recommend the usage of the following alternative approach (",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth-ropc"},"see here"),"), we still want to quickly mention it here. Instead of using the Client Credentials Flow in combination with permissions on Application-level, you can also make use of the Resource Owner Password Flow, combined with Delegate permissions. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_AppPwFlow01.png&quot; width=&quot;500&quot; /&gt;",src:a(26110).Z,width:"1275",height:"735"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/Azure_AppPwFlow02.png&quot; width=&quot;500&quot; /&gt;",src:a(4478).Z,width:"1061",height:"712"})),(0,o.kt)("p",null,"This approach comes with the drawback, that the Application Registration has to be configured for Public Client access, and you need to store the password of a dedicated Directory user in your SAP Credential Store. As said, this approach is not recommended by Microsoft and should only be used if the Client Credentials Flow (combined with a mailbox restriction) cannot be used for any reason. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { UsernamePasswordCredential } = require("@azure/identity");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const credential = new UsernamePasswordCredential(\n    '<<a22bd-...-a1f071e>>',            // Directory (tenant) ID\n    '<<9b79b-...-1f1c55d>>',            // Application (client) ID\n    '<<sample.user@azure.directory>>'   // Username\n    '<<password-of-sample-user>>'       // Password\n);\n")),(0,o.kt)("p",null,"In this case, if you want to use the shared mailbox as sender of the message, you need to add the user as a delegate to this mailbox. Otherwise, you can only send messages on behalf of this user as shown below. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'client.api(\'/users/<<mail.address@sample.user>>/sendMail\')   // User e-mail address\n    .header("Content-type", "application/json")\n    .post(sendMail, (err, res, rawResponse) => {\n        console.log(res);\n        console.log(rawResponse);\n        console.log(err);\n    });\n')),(0,o.kt)("h2",{id:"7-further-information"},"7. Further Information"),(0,o.kt)("p",null,"Please use the following links to find further information on the topics above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2020/08/20/cloud-intgration-connect-to-microsoft-365-mail-with-oauth2/"},"SAP Blog - Cloud Integration \u2013 Connect to Microsoft 365 Mail with OAuth2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2020/01/08/cloud-integration-connect-cpi-with-your-on-premise-mail-server/"},"SAP Blog - Cloud Integration \u2013 Connect CPI with Your On-Premise Mail Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2019/11/28/send-an-email-from-a-nodejs-application/"},"SAP Blog - Send an email from a nodejs application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/free/"},"Microsoft - Azure Free Trial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/microsoft-365/exchange/exchange-online"},"Microsoft - Exchange Online")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/microsoft-365/admin/email/about-shared-mailboxes?view=o365-worldwide"},"Microsoft - About shared mailboxes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/application-model"},"Microsoft - Application model")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/graph/overview"},"Microsoft - Graph API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/graph/api/user-sendmail"},"Microsoft - Graph API - sendMail")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/permissions-consent-overview"},"Microsoft - Introduction to permissions and consent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#admin-restricted-permissions"},"Microsoft - Admin-restricted permissions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/graph/auth-limit-mailbox-access"},"Microsoft - Limiting application permissions to specific Exchange Online mailboxes"))))}m.isMDXComponent=!0},26110:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AppPwFlow01-f72f438ca759a35327d40259f1ee3ce5.png"},4478:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AppPwFlow02-24e5c818f414c7540dddc4340869a750.png"},49641:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AppReg01-22669bea3f63589e33d457b690ddac69.png"},76438:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AppReg02-4bbac1d2efc94b50d42f9c257db82172.png"},98964:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AppReg03-f37917be1cbc399750551144d0ac49d3.png"},24606:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AppReg04-de8cafc2793fdf9310c0595b53311b3c.png"},24534:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AppReg05-fe91879a1af8203bf3ad66952cd02876.png"},27740:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AppReg06-73ce80148173608f23afa90ef9f62690.png"},68563:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AppReg07-4aa10b0a2e12821dd29f25e53654a540.png"},52801:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AppReg08-c7baf89f382e867892c308a00f2d475d.png"},92716:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AppReg09-d4c16a69b2b834bbf5c15d3553159c9f.png"},34920:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AppReg10-a5a6177ff7d7777a17e6d95c4a139abb.png"},32760:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_AppReg11-a42f8aa7f33bdc03a9a33c38891892e2.png"},99448:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_SendMail-ab80eaa3d815c439638a8ee49013dcc9.png"},72163:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Azure_SendMail01-e63dbbd3db7832829d64f5c39c365919.png"},54710:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Mail_ActivateMail-5e8d9c666ae5d03c6a83fb4789e7bda4.png"},88794:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Mail_DelegateAccess-a136ef1c228fb233b33baa1618c8f7ab.png"},32976:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Mail_DoNotReply-47e78a06abd3a4dbad6c04b4995bf918.png"},99626:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Mail_SharedMailbox-d7e4f1c0b76a199d8ec458899f041381.png"}}]);