(window.webpackJsonp=window.webpackJsonp||[]).push([[674],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),o=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=o(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=o(a),O=r,j=m["".concat(p,".").concat(O)]||m[O]||d[O]||b;return a?n.a.createElement(j,c(c({ref:t},l),{},{components:a})):n.a.createElement(j,c({ref:t},l))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,p=new Array(b);p[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var l=2;l<b;l++)p[l]=a[l];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},746:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(8),b=(a(0),a(1026)),p={id:"core.entityhelper",title:"Class: EntityHelper",sidebar_label:"EntityHelper",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/classes/core.entityhelper",id:"version-4.5/api/classes/core.entityhelper",isDocsHomePage:!1,title:"Class: EntityHelper",description:"Class: EntityHelper",source:"@site/versioned_docs/version-4.5/api/classes/core.entityhelper.md",slug:"/api/classes/core.entityhelper",permalink:"/docs/api/classes/core.entityhelper",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1619466618,formattedLastUpdatedAt:"4/26/2021",sidebar_label:"EntityHelper",sidebar:"version-4.5/API",previous:{title:"Class: EntityFactory",permalink:"/docs/api/classes/core.entityfactory"},next:{title:"Class: EntityIdentifier",permalink:"/docs/api/classes/core.entityidentifier"}},i=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"decorate",id:"decorate",children:[]},{value:"defineBaseProperties",id:"definebaseproperties",children:[]},{value:"defineIdProperty",id:"defineidproperty",children:[]},{value:"defineReferenceProperties",id:"definereferenceproperties",children:[]},{value:"defineReferenceProperty",id:"definereferenceproperty",children:[]},{value:"propagate",id:"propagate",children:[]},{value:"propagateOneToOne",id:"propagateonetoone",children:[]}]}],l={toc:i};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-entityhelper"},"Class: EntityHelper"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".EntityHelper"),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new EntityHelper"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entityhelper"},Object(b.b)("em",{parentName:"a"},"EntityHelper"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entityhelper"},Object(b.b)("em",{parentName:"a"},"EntityHelper"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"decorate"},"decorate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"decorate"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"em"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"em")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityHelper.ts#L16"},"packages/core/src/entity/EntityHelper.ts:16")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"definebaseproperties"},"defineBaseProperties"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"defineBaseProperties"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"prototype"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"em"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"prototype")),Object(b.b)("td",{parentName:"tr",align:"left"},"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"em")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},Object(b.b)("em",{parentName:"a"},"EntityManager")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(b.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(b.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityHelper.ts#L55"},"packages/core/src/entity/EntityHelper.ts:55")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"defineidproperty"},"defineIdProperty"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"defineIdProperty"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"defines magic id property getter/setter if PK property is ",Object(b.b)("inlineCode",{parentName:"p"},"_id")," and there is no ",Object(b.b)("inlineCode",{parentName:"p"},"id")," property defined"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},Object(b.b)("em",{parentName:"a"},"Platform")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityHelper.ts#L44"},"packages/core/src/entity/EntityHelper.ts:44")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"definereferenceproperties"},"defineReferenceProperties"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"defineReferenceProperties"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">","): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defines getter and setter for every owning side of m:1 and 1:1 relation. This is then used for propagation of\nchanges to the inverse side of bi-directional relations.\nFirst defines a setter on the prototype, once called, actual get/set handlers are registered on the instance rather\nthan on its prototype. Thanks to this we still have those properties enumerable (e.g. part of ",Object(b.b)("inlineCode",{parentName:"p"},"Object.keys(entity)"),")."),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(b.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityHelper.ts#L79"},"packages/core/src/entity/EntityHelper.ts:79")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"definereferenceproperty"},"defineReferenceProperty"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"defineReferenceProperty"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"ref"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"val"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<any",">","): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"ref")),Object(b.b)("td",{parentName:"tr",align:"left"},"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"val")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<any",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityHelper.ts#L113"},"packages/core/src/entity/EntityHelper.ts:113")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"propagate"},"propagate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"propagate"),"<T, O",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"owner"),": O, ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<O",">","): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"O")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<O",">")))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:"left"},"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"owner")),Object(b.b)("td",{parentName:"tr",align:"left"},"O")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<O",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityHelper.ts#L129"},"packages/core/src/entity/EntityHelper.ts:129")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"propagateonetoone"},"propagateOneToOne"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"propagateOneToOne"),"<T, O",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(b.b)("inlineCode",{parentName:"p"},"owner"),": O, ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<O",">","): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"type-parameters-6"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"O"))))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",{parentName:"tr",align:"left"},"T")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"owner")),Object(b.b)("td",{parentName:"tr",align:"left"},"O")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},Object(b.b)("em",{parentName:"a"},"EntityProperty")),"<O",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityHelper.ts#L141"},"packages/core/src/entity/EntityHelper.ts:141")))}o.isMDXComponent=!0}}]);