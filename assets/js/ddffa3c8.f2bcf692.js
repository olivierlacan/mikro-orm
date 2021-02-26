(window.webpackJsonp=window.webpackJsonp||[]).push([[833],{1051:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,u=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return r?a.a.createElement(u,c(c({ref:t},b),{},{components:r})):a.a.createElement(u,c({ref:t},b))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},906:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),o=(r(0),r(1051)),i={id:"core.initoptions",title:"Interface: InitOptions<T>",sidebar_label:"InitOptions",hide_title:!0},c={unversionedId:"api/interfaces/core.initoptions",id:"version-4.4/api/interfaces/core.initoptions",isDocsHomePage:!1,title:"Interface: InitOptions<T>",description:"Interface: InitOptions",source:"@site/versioned_docs/version-4.4/api/interfaces/core.initoptions.md",slug:"/api/interfaces/core.initoptions",permalink:"/docs/api/interfaces/core.initoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.initoptions.md",version:"4.4",lastUpdatedBy:"Nikita",lastUpdatedAt:1614335938,sidebar_label:"InitOptions",sidebar:"version-4.4/API",previous:{title:"Interface: IndexOptions<T>",permalink:"/docs/api/interfaces/core.indexoptions"},next:{title:"Interface: LoadedCollection<T, P>",permalink:"/docs/api/interfaces/core.loadedcollection"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"orderBy",id:"orderby",children:[]},{value:"populate",id:"populate",children:[]},{value:"where",id:"where",children:[]}]}],b={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-initoptionst"},"Interface: InitOptions<T",">"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".InitOptions"),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"T"))))),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"InitOptions"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"orderby"},"orderBy"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"orderBy"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.queryordermap"},Object(o.b)("em",{parentName:"a"},"QueryOrderMap"))),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Collection.ts#L340"},"packages/core/src/entity/Collection.ts:340")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"populate"},"populate"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"populate"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("em",{parentName:"p"},"boolean")," ","|"," readonly ",Object(o.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/api/enums/core.loadstrategy#select_in"},Object(o.b)("em",{parentName:"a"},"SELECT","_","IN"))," ","|"," ",Object(o.b)("a",{parentName:"p",href:"/docs/api/enums/core.loadstrategy#joined"},Object(o.b)("em",{parentName:"a"},"JOINED"))," ","|"," readonly keyof T[] ","|"," ",Object(o.b)("em",{parentName:"p"},"PopulateChildren"),"<T",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Collection.ts#L339"},"packages/core/src/entity/Collection.ts:339")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"where"},"where"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"where"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," { ",Object(o.b)("inlineCode",{parentName:"p"},"__@PrimaryKeyType@41543?"),": ",Object(o.b)("em",{parentName:"p"},"any"),"  } ","|"," ",Object(o.b)("em",{parentName:"p"},"NonNullable"),"<",Object(o.b)("em",{parentName:"p"},"Query"),"<T",">",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Collection.ts#L341"},"packages/core/src/entity/Collection.ts:341")))}l.isMDXComponent=!0}}]);