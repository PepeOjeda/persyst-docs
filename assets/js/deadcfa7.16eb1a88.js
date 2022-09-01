"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6917],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(t),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||s;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=h;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const s={sidebar_position:2},i="Nesting classes",o={unversionedId:"Tutorial/Know_more/Nesting_classes",id:"Tutorial/Know_more/Nesting_classes",title:"Nesting classes",description:"The one rule you can't break when serializing nested classes (doctors hate him!).",source:"@site/docs/Tutorial/Know_more/Nesting_classes.md",sourceDirName:"Tutorial/Know_more",slug:"/Tutorial/Know_more/Nesting_classes",permalink:"/persyst-docs/Tutorial/Know_more/Nesting_classes",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Collections",permalink:"/persyst-docs/Tutorial/Know_more/Collections"},next:{title:"Inheritance",permalink:"/persyst-docs/Tutorial/Know_more/inheritance"}},l={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"A bit more detail",id:"a-bit-more-detail",level:2},{value:"Some examples",id:"some-examples",level:2},{value:"Values",id:"values",level:3},{value:"References",id:"references",level:3},{value:"Going deep",id:"going-deep",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nesting-classes"},"Nesting classes"),(0,r.kt)("p",null,"The one rule you can't break when serializing nested classes (doctors hate him!)."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"Nesting classes works well if you are only serializing values."),(0,r.kt)("p",null,"However, if you want to serialize references contained in the inner classes, you need to make sure that all the classes in the nesting chain are ",(0,r.kt)("inlineCode",{parentName:"p"},"ISaveable"),". ",(0,r.kt)("strong",{parentName:"p"},"And they do have to be classes, not structs!")),(0,r.kt)("p",null,"All of this is because the ",(0,r.kt)("inlineCode",{parentName:"p"},"[SaveThis]")," attribute only makes a difference if it is applied to a member of an ",(0,r.kt)("inlineCode",{parentName:"p"},"ISaveable")," class. Members of types that are not ",(0,r.kt)("inlineCode",{parentName:"p"},"ISaveable")," are just directly passed along to the Json serializer."),(0,r.kt)("h2",{id:"a-bit-more-detail"},"A bit more detail"),(0,r.kt)("p",null,"Essentially, the thing is that when Persyst encounters a member marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"SaveThis"),' in a class, it asks "how do I serialize this thing?". That\'s where the whole value-vs-reference thing is sorted out.'),(0,r.kt)("p",null,"If the type of the member is an ",(0,r.kt)("inlineCode",{parentName:"p"},"ISaveable")," class, it will open up that ",(0,r.kt)("inlineCode",{parentName:"p"},"ISaveable")," class to figure out how to serialize it. It will look for members marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"[SaveThis]"),", and then process each of those members individually, in what is basically a recursion process. "),(0,r.kt)("p",null,"When a class is not marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"ISaveable"),", however, you can't have decided what to serialize with the ",(0,r.kt)("inlineCode",{parentName:"p"},"[SaveThis]")," attribute. So, that member is just passed along to the Newtosoft Json library as-is, rather than iterating over its fields and looking for attributes. And so, any references that may be further down the line are lost, for the whole thing is now in the Json library's hands."),(0,r.kt)("p",null,"As for why structs containing references are a problem, see ",(0,r.kt)("a",{parentName:"p",href:"Pending_references"},"The Pending References System"),"."),(0,r.kt)("h2",{id:"some-examples"},"Some examples"),(0,r.kt)("p",null,"I wouldn't recommend reading this entire thing without context. It's more so that you can look for an example that's similar to the case you are dealing with."),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class MyMB : MonoBehaviour, ISaveable\n{\n    [SaveThis] AnotherClass field;\n}\n\n//not ISaveable, so [SaveThis] does nothing\npublic AnotherClass{\n    [SaveThis] int myInt; //yup, serialized\n    int anotherInt; //yup, serialized\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class MyMB : MonoBehaviour, ISaveable\n{\n    [SaveThis] AnotherClass field;\n}\n\npublic AnotherClass : ISaveable{\n    [SaveThis] int myInt; //yup, serialized\n    int anotherInt; //nope\n}\n")),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class MyMB : MonoBehaviour, ISaveable\n{\n    [SaveThis] AnotherClass field;\n}\n\n//not ISaveable, so [SaveThis] does nothing\npublic AnotherClass{\n    [SaveThis] GameObject myRef; //nope\n    GameObject anotherRef; //nope\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class MyMB : MonoBehaviour, ISaveable\n{\n    [SaveThis] AnotherClass field;\n}\n\npublic AnotherClass: ISaveable{\n    [SaveThis] GameObject myRef; //yup, serialized\n    GameObject anotherRef; //nope\n}\n")),(0,r.kt)("h3",{id:"going-deep"},"Going deep"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class MyMB : MonoBehaviour, ISaveable\n{\n    [SaveThis] AnotherClass field;\n}\n\npublic AnotherClass: ISaveable{\n    [SaveThis] GameObject myRef; //yup, serialized\n    [SaveThis] ADeeperClass deeper; //yup, serialized\n}\n\n//not ISaveable, so [SaveThis] does nothing\npublic class ADeeperClass{\n    [SaveThis] int anInt; //yup, serialized\n    int anotherInt; //yup, serialized\n    [SaveThis] GameObject myRef; //nope\n    GameObject anotherRef; //nope\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class MyMB : MonoBehaviour, ISaveable\n{\n    [SaveThis] AnotherClass field;\n}\n\n//not ISaveable, so [SaveThis] does nothing\npublic AnotherClass{\n    GameObject myRef; //nope\n    ADeeperClass deeper; //yup, serialized\n}\n\npublic class ADeeperClass : ISaveable{\n    [SaveThis] int anInt; //yup, serialized\n    int anotherInt; //yup, serialized\n    [SaveThis] GameObject myRef; //nope\n    GameObject anotherRef; //nope\n}\n")))}u.isMDXComponent=!0}}]);