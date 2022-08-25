"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=u(n),h=a,m=y["".concat(l,".").concat(h)]||y[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,slug:"/"},i="What is Persyst, and why should I care?",s={unversionedId:"intro",id:"intro",title:"What is Persyst, and why should I care?",description:"Persyst (portmanteau of Persistence System) is a plugin that allows you to easily implement persistence in your Unity applications. While Unity has a fully functional serialization system for changes made in the editor, there is no out-of-the-box support for serializing changes that you make during play mode or in builds.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/persyst-docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/persyst-docs/category/getting-started"}},l={},u=[{value:"Formats, encryption?",id:"formats-encryption",level:3},{value:"Shoud I use this?",id:"shoud-i-use-this",level:3},{value:"How to learn?",id:"how-to-learn",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-persyst-and-why-should-i-care"},"What is Persyst, and why should I care?"),(0,a.kt)("p",null,"Persyst (",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Portmanteau"},"portmanteau")," of ",(0,a.kt)("em",{parentName:"p"},"Persistence System"),") is a plugin that allows you to easily implement persistence in your Unity applications. While Unity has a fully functional serialization system for changes made in the editor, there is no out-of-the-box support for serializing changes that you make during play mode or in builds. "),(0,a.kt)("p",null,"If you are making a game, that means saving the player's progress can be tricky. For small projects you might be able to get away with manually coding how every bit of information gets serialized into a file with custom string keys, and then reading back the file and assigning the information to the runtime objects. For larger projects, this approach is a nightmare."),(0,a.kt)("p",null,"Persyst makes creating a real save system much more convenient. By using Reflection, the serialization logic is abstracted away so that you only need to think about ",(0,a.kt)("em",{parentName:"p"},"what")," you want serialized, and not worry about ",(0,a.kt)("em",{parentName:"p"},"how"),"."),(0,a.kt)("p",null,"For example, if you wanted to save an integer value in a MonoBehaviour, this is all the code you would need to write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"using Persyst;\n\npublic class SerializableMB : MonoBehaviour, ISaveable\n{\n    [SaveThis] int someValue;\n}\n")),(0,a.kt)("p",null,"Easy, isn't it?"),(0,a.kt)("p",null,"The basic usage is designed to require ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"no coding experience at all")),". If you want some more advanced features in your save system, there are many ways to easily build upon the fundamentals with a small amount of code. Section ",(0,a.kt)("a",{parentName:"p",href:"/category/extending-persyst"},"Extending Persyt")," includes some examples of how to implement commonly wanted features that require a little more involvement. "),(0,a.kt)("h3",{id:"formats-encryption"},"Formats, encryption?"),(0,a.kt)("p",null,"Persyst stores the data in plain old JSON files. That's it. No compression, no encryption, no nothing. Just to be clear, if security is a concern, there is nothing stopping you from taking the json string that is generated by Persyst and encrypting it with another tool, or even your own crazy algorithm. It's just that no encryption methods are bundled in with Persyst itself, because that's just not what it's for."),(0,a.kt)("h3",{id:"shoud-i-use-this"},"Shoud I use this?"),(0,a.kt)("p",null,'You might expect me to say "of course!", but there is actually a little more to it. Persyst is a small project that I developed for my own use, and only decided to make public as an afterthought. As such, you can expect some limitations in its features, and I cannot guarantee a complete absence of bugs. '),(0,a.kt)("p",null,"Even though I believe this project is a very useful resource that many people can greatly benefit from, I must say that if you are working on a very serious or very large project, there are better alternatives. For example, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodkie.com/product/easy-save-3/"},"EasySave"),". "),(0,a.kt)("p",null,"Why ever use this one, then? ",(0,a.kt)("strong",{parentName:"p"},"Cause it's free, baby"),"."),(0,a.kt)("h3",{id:"how-to-learn"},"How to learn?"),(0,a.kt)("p",null,'This website contains an extensive (maybe too extensive?) discussion of everything I believe you need to learn. But, of course, it might still be a bit confusing to be lectured about these things here, in a web browser. So, the Persyst repo has an "Examples" folder, with some unity scenes and some scripts that you can use to test things yourself by clicking buttons and changing code. It\'s fun! Kind of. '),(0,a.kt)("p",null,'Each example folder has a readme file with more explanations, so you actually know what you are doing. I would recommend reading the "Getting Started" section here first, but everyone has their own learning process, so what do I know.'))}p.isMDXComponent=!0}}]);