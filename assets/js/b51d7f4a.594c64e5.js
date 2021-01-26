(window.webpackJsonp=window.webpackJsonp||[]).push([[819],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=o(a),d=r,j=m["".concat(c,".").concat(d)]||m[d]||O[d]||b;return a?n.a.createElement(j,p(p({ref:t},i),{},{components:a})):n.a.createElement(j,p({ref:t},i))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},888:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(7),b=(a(0),a(1253)),c={id:"core.loadedreference",title:"Interface: LoadedReference<T, P>",sidebar_label:"LoadedReference",hide_title:!0},p={unversionedId:"api/interfaces/core.loadedreference",id:"version-4.4/api/interfaces/core.loadedreference",isDocsHomePage:!1,title:"Interface: LoadedReference<T, P>",description:"Interface: LoadedReference",source:"@site/versioned_docs/version-4.4/api/interfaces/core.loadedreference.md",slug:"/api/interfaces/core.loadedreference",permalink:"/docs/api/interfaces/core.loadedreference",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.loadedreference.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611654277,sidebar_label:"LoadedReference",sidebar:"version-4.4/API",previous:{title:"Interface: LoadedCollection<T, P>",permalink:"/docs/api/interfaces/core.loadedcollection"},next:{title:"Interface: ManyToManyOptions<T, O>",permalink:"/docs/api/interfaces/core.manytomanyoptions"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"$",id:"",children:[]}]},{value:"Methods",id:"methods",children:[{value:"get",id:"get",children:[]},{value:"getEntity",id:"getentity",children:[]},{value:"getProperty",id:"getproperty",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"load",id:"load",children:[]},{value:"populated",id:"populated",children:[]},{value:"set",id:"set",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"unwrap",id:"unwrap",children:[]}]}],i={toc:l};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-loadedreferencet-p"},"Interface: LoadedReference<T, P",">"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".LoadedReference"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#anyentity"}),Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"P")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"never"))))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.reference"}),Object(b.b)("em",{parentName:"a"},"Reference")),"<T",">"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"LoadedReference")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:""},"$"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"$"),": T & P"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L379"}),"packages/core/src/typings.ts:379")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"get"},"get"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"get"),"(): T & P"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T & P"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L380"}),"packages/core/src/typings.ts:380")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getentity"},"getEntity"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getEntity"),"(): T"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.reference"}),"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L108"}),"packages/core/src/entity/Reference.ts:108")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getproperty"},"getProperty"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getProperty"),"<K",">","(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": K): T","[K]"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"K")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number")," ","|"," ",Object(b.b)("em",{parentName:"td"},"symbol"))))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"K")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T","[K]"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.reference"}),"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L116"}),"packages/core/src/entity/Reference.ts:116")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isinitialized"},"isInitialized"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isInitialized"),"(): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.reference"}),"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L120"}),"packages/core/src/entity/Reference.ts:120")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"load"},"load"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"load"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(b.b)("p",null,"Ensures the underlying entity is loaded first (without reloading it if it already is loaded).\nReturns the entity."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.reference"}),"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L67"}),"packages/core/src/entity/Reference.ts:67")),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"load"),"<K",">","(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": K): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T","[K]",">"),Object(b.b)("p",null,"Ensures the underlying entity is loaded first (without reloading it if it already is loaded).\nReturns the requested property instead of the whole entity."),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"K")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string")," ","|"," ",Object(b.b)("em",{parentName:"td"},"number")," ","|"," ",Object(b.b)("em",{parentName:"td"},"symbol"))))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"K")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T","[K]",">"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.reference"}),"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L73"}),"packages/core/src/entity/Reference.ts:73")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"populated"},"populated"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"populated"),"(",Object(b.b)("inlineCode",{parentName:"p"},"populated?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"populated?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.reference"}),"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L124"}),"packages/core/src/entity/Reference.ts:124")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"set"},"set"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"set"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#identifiedreference"}),Object(b.b)("em",{parentName:"a"},"IdentifiedReference")),"<T, ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#primaryproperty"}),Object(b.b)("em",{parentName:"a"},"PrimaryProperty")),"<T",">",">","): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#identifiedreference"}),Object(b.b)("em",{parentName:"a"},"IdentifiedReference")),"<T, ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#primaryproperty"}),Object(b.b)("em",{parentName:"a"},"PrimaryProperty")),"<T",">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.reference"}),"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L91"}),"packages/core/src/entity/Reference.ts:91")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(...",Object(b.b)("inlineCode",{parentName:"p"},"args"),": ",Object(b.b)("em",{parentName:"p"},"any"),"[]): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"...args")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(b.b)("em",{parentName:"a"},"Dictionary")),"<",Object(b.b)("em",{parentName:"p"},"any"),">"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.reference"}),"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L128"}),"packages/core/src/entity/Reference.ts:128")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unwrap"},"unwrap"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"unwrap"),"(): T"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Inherited from: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.reference"}),"Reference")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/Reference.ts#L104"}),"packages/core/src/entity/Reference.ts:104")))}o.isMDXComponent=!0}}]);