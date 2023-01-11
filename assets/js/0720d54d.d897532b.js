"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[1284],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(i),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return i?n.createElement(b,r(r({ref:t},u),{},{components:i})):n.createElement(b,r({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6942:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(7462),a=(i(7294),i(3905));const o={id:"GithubNotifications",title:"GitHub Notifications on Slack",sidebar_label:"GitHub Notifications",tags:["GitHub","Slack","Notifications","Observability"]},r=void 0,l={unversionedId:"processes/observability/GithubNotifications",id:"processes/observability/GithubNotifications",title:"GitHub Notifications on Slack",description:"We have GitHub application already installed on Slack to be able us to receive notifications to Slack when a new commit, PR, comment, etc is made to a repository hosted with our Axioned organisation account.",source:"@site/docs/processes/observability/github-notifications.md",sourceDirName:"processes/observability",slug:"/processes/observability/GithubNotifications",permalink:"/docs/processes/observability/GithubNotifications",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/processes/observability/github-notifications.md",tags:[{label:"GitHub",permalink:"/docs/tags/git-hub"},{label:"Slack",permalink:"/docs/tags/slack"},{label:"Notifications",permalink:"/docs/tags/notifications"},{label:"Observability",permalink:"/docs/tags/observability"}],version:"current",frontMatter:{id:"GithubNotifications",title:"GitHub Notifications on Slack",sidebar_label:"GitHub Notifications",tags:["GitHub","Slack","Notifications","Observability"]},sidebar:"tutorialSidebar",previous:{title:"Observability",permalink:"/docs/category/observability"},next:{title:"Sentry.io",permalink:"/docs/processes/observability/sentry"}},s={},c=[{value:"Create a notifications-only channel",id:"create-a-notifications-only-channel",level:2},{value:"Stay up to date",id:"stay-up-to-date",level:2},{value:"Advanced Settings",id:"advanced-settings",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We have ",(0,a.kt)("a",{parentName:"p",href:"https://slack.github.com/"},"GitHub application")," already installed on Slack to be able us to receive notifications to Slack when a new commit, PR, comment, etc is made to a repository hosted with our Axioned organisation account."),(0,a.kt)("h2",{id:"create-a-notifications-only-channel"},"Create a notifications-only channel"),(0,a.kt)("p",null,"We recommend this to make sure those who need to be alerted about these (eg: developers) are always notified instantly."),(0,a.kt)("p",null,"Ask your Project manager or IT team to create another channel with the suffix of ",(0,a.kt)("inlineCode",{parentName:"p"},"-notifications")," to your main channel."),(0,a.kt)("admonition",{title:"Example",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Eg: If your project channel name is ",(0,a.kt)("inlineCode",{parentName:"p"},"#live-axioned-website"),", then your notifications channel name should be ",(0,a.kt)("inlineCode",{parentName:"p"},"#live-axioned-website-notifications"))),(0,a.kt)("h2",{id:"stay-up-to-date"},"Stay up to date"),(0,a.kt)("p",null,"Stay up to date\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"/github subscribe [repository name]")," in Slack to start receiving updates about activities like:"),(0,a.kt)("p",null,"By default, you would start to receive notifications for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"issues")," - Opened or closed issues"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pulls"),' - New or merged pull requests, as well as draft pull requests marked "Ready for Review"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"commits")," - New commits on the default branch (usually main)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"releases")," - Published releases"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deployments")," - Deployment review notifications and Deployment status updates.")),(0,a.kt)("p",null,"These are disabled by default, and can be enabled with the ",(0,a.kt)("inlineCode",{parentName:"p"},"/github subscribe owner/repo [feature]")," command:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reviews")," - Pull request reviews"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"comments")," - New comments on issues and pull requests"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"branches")," - Created or deleted branches"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"commits:*")," - All commits pushed to any branch"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'+label:"your label"')," - Filter issues, pull-requests and comments based on their labels."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"discussions")," - Discussions created or answered")),(0,a.kt)("h2",{id:"advanced-settings"},"Advanced Settings"),(0,a.kt)("p",null,"Head on over to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/integrations/slack#customize-your-notifications"},"official documentation")," for further customization."))}p.isMDXComponent=!0}}]);