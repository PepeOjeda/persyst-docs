"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=p(n),d=o,f=y["".concat(l,".").concat(d)]||y[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Using reflection",s={unversionedId:"Tutorial/Extending_persyst/using_reflection",id:"Tutorial/Extending_persyst/using_reflection",title:"Using reflection",description:"If you're drunk with power and want to serialize everything, Reflection might be exactly what you are looking for. Let's say you want to serialize a property in another Component. Let's also say the property does not have a public setter. Or maybe it's a field, and it's entirely private.",source:"@site/docs/Tutorial/Extending_persyst/using_reflection.md",sourceDirName:"Tutorial/Extending_persyst",slug:"/Tutorial/Extending_persyst/using_reflection",permalink:"/persyst-docs/Tutorial/Extending_persyst/using_reflection",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Extending Persyst",permalink:"/persyst-docs/category/extending-persyst"},next:{title:"Referencing everything",permalink:"/persyst-docs/Tutorial/Extending_persyst/Referencing_everything"}},l={},p=[{value:"Abusing reflection",id:"abusing-reflection",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-reflection"},"Using reflection"),(0,o.kt)("p",null,"If you're drunk with power and want to serialize everything, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.reflection?view=netstandard-1.6"},"Reflection")," might be exactly what you are looking for. Let's say you want to serialize a property in another ",(0,o.kt)("inlineCode",{parentName:"p"},"Component"),". Let's also say the property does not have a ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," setter. Or maybe it's a field, and it's entirely ",(0,o.kt)("inlineCode",{parentName:"p"},"private"),"."),(0,o.kt)("p",null,"Well, you can do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'public class MyMB : MonoBehaviour, ISaveable\n{\n    [SaveThis] int propertyWrapper {\n        get{return otherComponent.getType().GetProperty("propertyName", BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance).getValue(otherComponent);}\n        set{otherComponent.getType().GetProperty("propertyName", BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance).setValue(otherComponent, value);}\n    }\n}\n')),(0,o.kt)("p",null,"It's not pretty code, but it ",(0,o.kt)("em",{parentName:"p"},"is")," powerful. Now, I'm not about to give you a lecture on Reflection, but, if you are not familiar with it, I do think you should research it. It's pretty neat."),(0,o.kt)("h2",{id:"abusing-reflection"},"Abusing reflection"),(0,o.kt)("p",null,"A word of warning that might be funny to you if you are a more experienced programmer than I am."),(0,o.kt)("p",null,"They say that when you have a hammer, everything looks like a nail. I find this to be particularly true when it comes to writing code. If you've just learnt about a nifty tool or pattern, you want to use it everywhere."),(0,o.kt)("p",null,"Reflection happens to be my most recently acquired hammer, as the analogy goes. I find that, lately, my first instinct when I run into any problem is to just hit it on the head with Reflection until it's solved. And ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/BGrfhsxxmdE?t=20"},"it'll happen to you"),", too."),(0,o.kt)("p",null,"I'm not saying \"don't use Reflection!\". Reflection is an incredibly flexible and powerful tool. Hell, it's the basis of the entire implementation of this plugin."),(0,o.kt)("p",null,"It also is a very disruptive tool that lets you ignore the design decisions of the people who wrote the libraries you are using (decisions that probably had a reason behind them), requires very verbose syntax that's nigh on unreadable, and squanders all the ",(0,o.kt)("strong",{parentName:"p"},"many")," benefits of having compile-time static typing (seriously, I don't know how you guys can live like that, Python people)."),(0,o.kt)("p",null,"So, ",(0,o.kt)("strong",{parentName:"p"},"do")," learn how to use Reflection. It's a wonderfully powerful tool. But also remember that when you've just found a really good hammer is the moment when asking \"is this really a nail?\" becomes the most important."))}c.isMDXComponent=!0}}]);