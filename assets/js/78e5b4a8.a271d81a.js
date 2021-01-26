(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(r),f=n,d=l["".concat(o,".").concat(f)]||l[f]||u[f]||a;return r?i.a.createElement(d,c(c({ref:t},p),{},{components:r})):i.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},617:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(1253)),o={id:"core.settings",title:"Interface: Settings",sidebar_label:"Settings",hide_title:!0},c={unversionedId:"api/interfaces/core.settings",id:"api/interfaces/core.settings",isDocsHomePage:!1,title:"Interface: Settings",description:"Interface: Settings",source:"@site/docs/api/interfaces/core.settings.md",slug:"/api/interfaces/core.settings",permalink:"/docs/next/api/interfaces/core.settings",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/core.settings.md",version:"current",sidebar_label:"Settings",sidebar:"API",previous:{title:"Interface: SerializedPrimaryKeyOptions<T>",permalink:"/docs/next/api/interfaces/core.serializedprimarykeyoptions"},next:{title:"Interface: TransactionEventArgs",permalink:"/docs/next/api/interfaces/core.transactioneventargs"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"configPaths",id:"configpaths",children:[]},{value:"tsConfigPath",id:"tsconfigpath",children:[]},{value:"useTsNode",id:"usetsnode",children:[]}]}],p={toc:s};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-settings"},"Interface: Settings"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".Settings"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Settings"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"configpaths"},"configPaths"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"configPaths"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," | ",Object(a.b)("em",{parentName:"p"},"string"),"[]"),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/core/src/utils/ConfigurationLoader.ts#L93"}),"packages/core/src/utils/ConfigurationLoader.ts:93")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"tsconfigpath"},"tsConfigPath"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"tsConfigPath"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," | ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/core/src/utils/ConfigurationLoader.ts#L92"}),"packages/core/src/utils/ConfigurationLoader.ts:92")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"usetsnode"},"useTsNode"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"useTsNode"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," | ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/core/src/utils/ConfigurationLoader.ts#L91"}),"packages/core/src/utils/ConfigurationLoader.ts:91")))}b.isMDXComponent=!0}}]);