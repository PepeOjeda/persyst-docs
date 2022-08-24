"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),y=o,m=f["".concat(s,".").concat(y)]||f[y]||p[y]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4},a="Using reflection",l={unversionedId:"Know_more/Abusing_reflection",id:"Know_more/Abusing_reflection",title:"Using reflection",description:"Abusing reflection",source:"@site/docs/Know_more/Abusing_reflection.md",sourceDirName:"Know_more",slug:"/Know_more/Abusing_reflection",permalink:"/persyst-docs/Know_more/Abusing_reflection",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Referencing everything",permalink:"/persyst-docs/Know_more/Referencing_everything"},next:{title:"The Pending References System",permalink:"/persyst-docs/Know_more/Pending_references"}},s={},c=[{value:"Abusing reflection",id:"abusing-reflection",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-reflection"},"Using reflection"),(0,o.kt)("h2",{id:"abusing-reflection"},"Abusing reflection"),(0,o.kt)("p",null,"A word of warning that might be funny to you if you are a more experienced programmer than I am."),(0,o.kt)("p",null,"They say that when you have a hammer, everything looks like a nail. I find this to be particularly true when it comes to writing code. If you've just learnt about a nifty tool or pattern, you want to use it everywhere."),(0,o.kt)("p",null,"Reflection happens to be my most recently acquired hammer, as the analogy goes. I find that, lately, my first instinct when I run into any problem is to just hit it on the head with Reflection until it's solved. And ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/BGrfhsxxmdE?t=20"},"it'll happen to you"),", too."),(0,o.kt)("p",null,"I'm not saying \"don't use Reflection!\". Reflection is an incredibly flexible and powerful tool. Hell, it's the basis of the entire implementation of this plugin."),(0,o.kt)("p",null,"It also is a very disruptive tool that lets you ignore the design decisions of the people who wrote the libraries you are using (decisions that probably had a reason behind them), requires very verbose syntax that's nigh on unreadable, and squanders all the ",(0,o.kt)("strong",{parentName:"p"},"many")," benefits of having compile-time static typing (seriously, I don't know how you guys can live like that, Python people)."),(0,o.kt)("p",null,"So, ",(0,o.kt)("strong",{parentName:"p"},"do")," learn how to use Reflection. It's a wonderfully powerful tool. But also remember that when you've just found a really good hammer is the moment when asking \"is this really a nail?\" becomes the most important."))}p.isMDXComponent=!0}}]);