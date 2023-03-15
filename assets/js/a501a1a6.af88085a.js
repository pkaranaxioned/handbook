"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[8],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>k});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),d=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(r),k=n,u=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return r?a.createElement(u,l(l({ref:e},p),{},{components:r})):a.createElement(u,l({ref:e},p))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6893:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const i={id:"javascript-checklist",title:"Javascript Code Review Checklist",sidebar_label:"Code Review Checklist",sidebar_position:2,tags:["Javascript","Javascript checklist","JS","JS checklist"]},l="Checklist Pointers",o={unversionedId:"learning/js/javascript-checklist",id:"learning/js/javascript-checklist",title:"Javascript Code Review Checklist",description:"Sr No. | Check |",source:"@site/docs/learning/js/code-review-checklist.md",sourceDirName:"learning/js",slug:"/learning/js/javascript-checklist",permalink:"/docs/learning/js/javascript-checklist",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/learning/js/code-review-checklist.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"Javascript checklist",permalink:"/docs/tags/javascript-checklist"},{label:"JS",permalink:"/docs/tags/js"},{label:"JS checklist",permalink:"/docs/tags/js-checklist"}],version:"current",sidebarPosition:2,frontMatter:{id:"javascript-checklist",title:"Javascript Code Review Checklist",sidebar_label:"Code Review Checklist",sidebar_position:2,tags:["Javascript","Javascript checklist","JS","JS checklist"]},sidebar:"tutorialSidebar",previous:{title:"Training Template",permalink:"/docs/learning/js/js-training"},next:{title:"NodeJS",permalink:"/docs/category/nodejs"}},s={},d=[],p={toc:d};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"checklist-pointers"},"Checklist Pointers"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,n.kt)("th",{parentName:"tr",align:null},"Check"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose easy to understand and short names for variables and functions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"Try using closures and the module pattern.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"Use linting to verify your code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"Comment what you consider needed (",(0,n.kt)("inlineCode",{parentName:"td"},"/* */")," is much safer to use because it doesn\u2019t cause errors when the line break is removed.).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"Use Shortcut Notations.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"Write smaller, generic helper functions that fulfill one specific task rather than catch-all methods.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"Avoid heavy nesting.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"Keep computation-heavy code outside of loops.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"Keep DOM Access to a Minimum.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"Don\u2019t trust that data reaches your function is of the right format.Test with ",(0,n.kt)("inlineCode",{parentName:"td"},"typeof")," and then do something with it.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"11"),(0,n.kt)("td",{parentName:"tr",align:null},"Don\u2019t expect elements in the DOM to be available.Test for them and that they indeed are what you expect them to be before altering them.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"12"),(0,n.kt)("td",{parentName:"tr",align:null},"Never ever use JavaScript to protect something.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"13"),(0,n.kt)("td",{parentName:"tr",align:null},"Use single quotation marks for string declarations.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"14"),(0,n.kt)("td",{parentName:"tr",align:null},"Keep indentation as 2.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"15"),(0,n.kt)("td",{parentName:"tr",align:null},"No js inline code has to be present in html.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"16"),(0,n.kt)("td",{parentName:"tr",align:null},"Collate, minify and optimize your code in a build process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"17"),(0,n.kt)("td",{parentName:"tr",align:null},"JavaScript files are loaded asynchronously using async or deferred using defer attribute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"19"),(0,n.kt)("td",{parentName:"tr",align:null},"Use of if, if else, else if, switch should be used properly. Avoid too many nested if else statements, instead go for switch-case.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"20"),(0,n.kt)("td",{parentName:"tr",align:null},"const and let should be used based on their definition.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"21"),(0,n.kt)("td",{parentName:"tr",align:null},"Functions should hardly ever be 20 - 40 lines long.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"18"),(0,n.kt)("td",{parentName:"tr",align:null},"Add parameter description for every function parameter as a part of comments.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"22"),(0,n.kt)("td",{parentName:"tr",align:null},"Proper use of HOF (Higher order functions.).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"23"),(0,n.kt)("td",{parentName:"tr",align:null},"Every  method/function should have a try-catch block to avoid run time errors.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"24"),(0,n.kt)("td",{parentName:"tr",align:null},"Use loggers in the catch block to get exact error.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"25"),(0,n.kt)("td",{parentName:"tr",align:null},"Verify if business logic is proper and written efficiently.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"26"),(0,n.kt)("td",{parentName:"tr",align:null},"Function casing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"28"),(0,n.kt)("td",{parentName:"tr",align:null},"Using spread operator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"29"),(0,n.kt)("td",{parentName:"tr",align:null},"Be consistent in your usage of arrow function.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"30"),(0,n.kt)("td",{parentName:"tr",align:null},"Use destructuring assignment for arrays and objects.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"27"),(0,n.kt)("td",{parentName:"tr",align:null},"Variable casing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"31"),(0,n.kt)("td",{parentName:"tr",align:null},"Use Promises or Async/Await. Rejection is handled.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"32"),(0,n.kt)("td",{parentName:"tr",align:null},"No syntax/runtime errors and warnings in the code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"33"),(0,n.kt)("td",{parentName:"tr",align:null},"No deprecated functions in the code.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"34"),(0,n.kt)("td",{parentName:"tr",align:null},"Check that each function is doing only a single thing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"35"),(0,n.kt)("td",{parentName:"tr",align:null},"No magic numbers. Put all such numbers as a constant.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"36"),(0,n.kt)("td",{parentName:"tr",align:null},"Make sure recursive function don't end up in infinite loop.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"37"),(0,n.kt)("td",{parentName:"tr",align:null},"Avoid inline styling through JS use classes instead.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"38"),(0,n.kt)("td",{parentName:"tr",align:null},"make sure the whole script wrapped inside document ready.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"39"),(0,n.kt)("td",{parentName:"tr",align:null},"Use meaningful names for variables and function.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"40"),(0,n.kt)("td",{parentName:"tr",align:null},"Add proper commenting.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"41"),(0,n.kt)("td",{parentName:"tr",align:null},"Try using deffer while loading Scripts to avoid render blocking resources issue in the performance.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"42"),(0,n.kt)("td",{parentName:"tr",align:null},"Make sure there is no message/error present in the console.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"43"),(0,n.kt)("td",{parentName:"tr",align:null},"Please make sure to use condition while using offset().top property if the offset is present then only use top or else it will throw an error in the console.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"44"),(0,n.kt)("td",{parentName:"tr",align:null},"Form/Input validation is not just to add required attribute also validate the input via JS to make sure expected input is entered by user.")))),(0,n.kt)("admonition",{title:"JS Checklist",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"JS Checklist reference link can be found ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1kbpSVE_ysY8Is5qvuWfCDTTTMp_Wtt5js7FBZzqGODk/edit#gid=0"},(0,n.kt)("strong",{parentName:"a"},"here")),".")))}c.isMDXComponent=!0}}]);