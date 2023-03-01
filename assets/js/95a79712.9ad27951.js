"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[9533],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=c(n),g=a,u=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(u,o(o({ref:e},m),{},{components:n})):r.createElement(u,o({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"git-training",title:"Version Control System - Git",sidebar_label:"Training Template",sidebar_position:1,tags:["git","github","vcs","version control system"]},o=void 0,l={unversionedId:"learning/git/git-training",id:"learning/git/git-training",title:"Version Control System - Git",description:"Overview",source:"@site/docs/learning/git/training-template.md",sourceDirName:"learning/git",slug:"/learning/git/git-training",permalink:"/docs/learning/git/git-training",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/learning/git/training-template.md",tags:[{label:"git",permalink:"/docs/tags/git"},{label:"github",permalink:"/docs/tags/github"},{label:"vcs",permalink:"/docs/tags/vcs"},{label:"version control system",permalink:"/docs/tags/version-control-system"}],version:"current",sidebarPosition:1,frontMatter:{id:"git-training",title:"Version Control System - Git",sidebar_label:"Training Template",sidebar_position:1,tags:["git","github","vcs","version control system"]},sidebar:"tutorialSidebar",previous:{title:"GIT",permalink:"/docs/category/git"},next:{title:"HTML",permalink:"/docs/category/html"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"<strong>Version Control System(Git) - Reading Topics</strong>",id:"version-control-systemgit---reading-topics",level:2}],m={toc:c};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Version control, also known as source control, is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time. As development environments have accelerated, version control systems help software teams work faster and smarter. They are especially useful for DevOps teams since they help them to reduce development time and increase successful deployments."),(0,a.kt)("p",null,"Version control software keeps track of every modification to the code in a special kind of database. If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake while minimizing disruption to all team members."),(0,a.kt)("h2",{id:"version-control-systemgit---reading-topics"},(0,a.kt)("strong",{parentName:"h2"},"Version Control System(Git) - Reading Topics")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,a.kt)("th",{parentName:"tr",align:null},"Topics"),(0,a.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"What is VCS")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ol",null,(0,a.kt)("li",null,(0,a.kt)("a",null,(0,a.kt)("a",{parentName:"td",href:"http://guides.beanstalkapp.com/version-control/intro-to-version-control.html"},"http://guides.beanstalkapp.com/version-control/intro-to-version-control.html"))),(0,a.kt)("li",null,(0,a.kt)("a",null,(0,a.kt)("a",{parentName:"td",href:"https://www.atlassian.com/git/tutorials/what-is-git"},"https://www.atlassian.com/git/tutorials/what-is-git"))),(0,a.kt)("li",null,(0,a.kt)("a",null,(0,a.kt)("a",{parentName:"td",href:"https://dont-be-afraid-to-commit.readthedocs.io/en/latest/git/commandlinegit.html"},"https://dont-be-afraid-to-commit.readthedocs.io/en/latest/git/commandlinegit.html")))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"What is git?")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"3"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"History about git")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Why git")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"5"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"How git works")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"6"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Alternative of gits")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"7"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Git Comman Commands")," ",(0,a.kt)("ol",null,(0,a.kt)("li",null,"Init, config, clone, remote & origin"),(0,a.kt)("li",null,"Push"),(0,a.kt)("li",null,"Pull"),(0,a.kt)("li",null,"Commit"),(0,a.kt)("li",null,"Rebase"),(0,a.kt)("li",null,"Merge"),(0,a.kt)("li",null,"Clone"),(0,a.kt)("li",null,"Log & diff"),(0,a.kt)("li",null,"Status, stashs & reset"),(0,a.kt)("li",null,"How to resolve conflicts (pull and merge conflicts overview)"),(0,a.kt)("li",null,"Basic branching structure"))),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("admonition",{title:"Version Control System Template Google Sheet",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Version Control System Template Reference link can be found ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/18vnt-qOtInzMr0LIMzgzOiHP-LPeJ3KjRfZzckeWtUc/edit#gid=0"},(0,a.kt)("strong",{parentName:"a"},"here")))))}p.isMDXComponent=!0}}]);