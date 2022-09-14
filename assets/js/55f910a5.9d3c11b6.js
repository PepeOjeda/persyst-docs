"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,f=p["".concat(l,".").concat(u)]||p[u]||h[u]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5},i="The Pending References System",s={unversionedId:"Tutorial/Know_more/Pending_references",id:"Tutorial/Know_more/Pending_references",title:"The Pending References System",description:"How are references retrieved when loading?",source:"@site/docs/Tutorial/Know_more/Pending_references.md",sourceDirName:"Tutorial/Know_more",slug:"/Tutorial/Know_more/Pending_references",permalink:"/persyst-docs/Tutorial/Know_more/Pending_references",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Reference loops",permalink:"/persyst-docs/Tutorial/Know_more/Reference_loops"},next:{title:"Extending Persyst",permalink:"/persyst-docs/category/extending-persyst"}},l={},c=[{value:"The UID Manager",id:"the-uid-manager",level:2},{value:"Pending references",id:"pending-references",level:2}],d={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-pending-references-system"},"The Pending References System"),(0,o.kt)("p",null,"How are references retrieved when loading? "),(0,o.kt)("p",null,"You might have wondered why the restrictions explained in other sections exist. Some of them are due to this."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You do not need to know how this works to use Persyst.")),(0,o.kt)("h2",{id:"the-uid-manager"},"The UID Manager"),(0,o.kt)("p",null,"References are serialized through the use of UIDs. The ",(0,o.kt)("inlineCode",{parentName:"p"},"UIDManager"),", which sits somewhere in your scene, is responsible for turning a UID read from the file into an actual C# reference to an object. This is done by using a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dictionary"),", where the keys are UIDs and the values are the references."),(0,o.kt)("p",null,"When retrieving a reference to another object, you need the UID Manager to have that reference. However, because Unity objects (specially those that live in scenes) have somewhat convoluted life cycles (the fact that this is all running on top of a C++ application is mostly to blame for this), it's possible that the object that your script is trying to reference does not exist ",(0,o.kt)("em",{parentName:"p"},"yet"),". Or, it is marked as destroyed wven though it exists. Or it is part of another scene. Or..."),(0,o.kt)("p",null,"Long story short, there is no assurance the UID Manager will have the reference ready when the ",(0,o.kt)("inlineCode",{parentName:"p"},"PersistentObject")," that wants it is loaded. This could, to some extent, be handled by carefully managing the order in which objects are loaded through their reference dependencies. However, this would be very difficult, would run into problems with reference loops, and would not fix the cases that are due to cross-scene references."),(0,o.kt)("p",null,"And so, the pending references system."),(0,o.kt)("h2",{id:"pending-references"},"Pending references"),(0,o.kt)("p",null,"When an object ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," is loaded and it requests a reference to another object ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," through b's UID, but the UID Manager does not have the reference to ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," ready, ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," gets added to an internal list of pending references. Really, it's another ",(0,o.kt)("inlineCode",{parentName:"p"},"Dictionary"),", where a key is the UID of a not-yet-loaded object, and the value is a list of all the objects that want a reference to it. "),(0,o.kt)("p",null,"When a new object is loaded, the UIDManager checks whether someone was waiting to get a reference to it, and, if so, sets the value of the reference automatically. And so, objects can generally be loaded in any order, regardless of their reference dependencies (although it might still be a good idea to ",(0,o.kt)("a",{parentName:"p",href:"/Tutorial/Getting%20started/saving_and_loading"},"manually handle the order")," when setting properties that do further initialization as part of their setter.)"),(0,o.kt)("p",null,"While this is almost entirely opaque to the user, there are some cases where understanding the behaviour of this system can be important. For example, when using cross-scene references, which will remain ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," while the scene of the target is unloaded, but automatically update when the scene is loaded."))}h.isMDXComponent=!0}}]);