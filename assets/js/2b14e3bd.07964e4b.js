"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=c(n),u=a,f=v["".concat(s,".").concat(u)]||v[u]||d[u]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},5499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},o="GameSaver",l={unversionedId:"API/GameSaver",id:"API/GameSaver",title:"GameSaver",description:"Class that handles file reading and writing. Can also fire events to trigger saving and loading on the PersistentObjects that are marked as automatic.",source:"@site/docs/API/GameSaver.md",sourceDirName:"API",slug:"/API/GameSaver",permalink:"/persyst-docs/API/GameSaver",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apiSidebar",previous:{title:"UIDManager",permalink:"/persyst-docs/API/UIDManager"}},s={},c=[{value:"<code>public void readFile(string path = &quot;Assets/saveFile.json&quot;, bool fireLoadEvent = true)</code>",id:"public-void-readfilestring-path--assetssavefilejson-bool-fireloadevent--true",level:4},{value:"<code>public static event System.Action OnSaveFileLoaded</code>",id:"public-static-event-systemaction-onsavefileloaded",level:4},{value:"<code>public void writeToFile(string path = &quot;Assets/saveFile.json&quot;, bool fireSaveEvent = true)</code>",id:"public-void-writetofilestring-path--assetssavefilejson-bool-firesaveevent--true",level:4},{value:"<code>public static event System.Action OnSavingGame</code>",id:"public-static-event-systemaction-onsavinggame",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gamesaver"},"GameSaver"),(0,a.kt)("p",null,"Class that handles file reading and writing. Can also fire events to trigger saving and loading on the ",(0,a.kt)("inlineCode",{parentName:"p"},"PersistentObjects")," that are marked as automatic."),(0,a.kt)("h4",{id:"public-void-readfilestring-path--assetssavefilejson-bool-fireloadevent--true"},(0,a.kt)("inlineCode",{parentName:"h4"},'public void readFile(string path = "Assets/saveFile.json", bool fireLoadEvent = true)')),(0,a.kt)("p",null,"Reads the file and stores its contents in an internal ",(0,a.kt)("inlineCode",{parentName:"p"},"Dictionary"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"fireLoadEvent")," is true (default), it will invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"OnSaveFileLoaded"),"."),(0,a.kt)("h4",{id:"public-static-event-systemaction-onsavefileloaded"},(0,a.kt)("inlineCode",{parentName:"h4"},"public static event System.Action OnSaveFileLoaded")),(0,a.kt)("p",null,"Event called after loading a file with ",(0,a.kt)("inlineCode",{parentName:"p"},"readFile"),", if ",(0,a.kt)("inlineCode",{parentName:"p"},"fireLoadEvent")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("h4",{id:"public-void-writetofilestring-path--assetssavefilejson-bool-firesaveevent--true"},(0,a.kt)("inlineCode",{parentName:"h4"},'public void writeToFile(string path = "Assets/saveFile.json", bool fireSaveEvent = true)')),(0,a.kt)("p",null,"Writes to the file from the internal ",(0,a.kt)("inlineCode",{parentName:"p"},"Dictionary"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"fireSaveEvent")," is true (default), it will invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"OnSavingGame"),"."),(0,a.kt)("h4",{id:"public-static-event-systemaction-onsavinggame"},(0,a.kt)("inlineCode",{parentName:"h4"},"public static event System.Action OnSavingGame")),(0,a.kt)("p",null,"Event called before writing to a file with ",(0,a.kt)("inlineCode",{parentName:"p"},"writeToFile"),", if ",(0,a.kt)("inlineCode",{parentName:"p"},"fireSaveEvent")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."))}d.isMDXComponent=!0}}]);