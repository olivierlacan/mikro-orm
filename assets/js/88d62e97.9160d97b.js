(window.webpackJsonp=window.webpackJsonp||[]).push([[619],{1253:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var i=b.a.createContext({}),m=function(e){var t=b.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=m(n),O=a,j=d["".concat(c,".").concat(O)]||d[O]||u[O]||r;return n?b.a.createElement(j,l(l({ref:t},i),{},{components:n})):b.a.createElement(j,l({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=O;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<r;i++)c[i]=n[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},689:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),b=n(7),r=(n(0),n(1253)),c={id:"knex.knex.columnbuilder",title:"Interface: ColumnBuilder",sidebar_label:"ColumnBuilder",hide_title:!0},l={unversionedId:"api/interfaces/knex.knex.columnbuilder",id:"version-4.4/api/interfaces/knex.knex.columnbuilder",isDocsHomePage:!1,title:"Interface: ColumnBuilder",description:"Interface: ColumnBuilder",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.columnbuilder.md",slug:"/api/interfaces/knex.knex.columnbuilder",permalink:"/docs/api/interfaces/knex.knex.columnbuilder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.columnbuilder.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611654277,sidebar_label:"ColumnBuilder",sidebar:"version-4.4/API",previous:{title:"Interface: ChainableInterface<T>",permalink:"/docs/api/interfaces/knex.knex.chainableinterface"},next:{title:"Interface: ColumnInfo",permalink:"/docs/api/interfaces/knex.knex.columninfo"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"after",id:"after",children:[]},{value:"alter",id:"alter",children:[]},{value:"comment",id:"comment",children:[]},{value:"defaultTo",id:"defaultto",children:[]},{value:"first",id:"first",children:[]},{value:"index",id:"index",children:[]},{value:"notNullable",id:"notnullable",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"onDelete",id:"ondelete",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"primary",id:"primary",children:[]},{value:"queryContext",id:"querycontext",children:[]},{value:"references",id:"references",children:[]},{value:"unique",id:"unique",children:[]},{value:"unsigned",id:"unsigned",children:[]},{value:"withKeyName",id:"withkeyname",children:[]}]}],i={toc:p};function m(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"interface-columnbuilder"},"Interface: ColumnBuilder"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".ColumnBuilder"),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"ColumnBuilder")),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.postgresqlcolumnbuilder"}),Object(r.b)("em",{parentName:"a"},"PostgreSqlColumnBuilder"))),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.referencingcolumnbuilder"}),Object(r.b)("em",{parentName:"a"},"ReferencingColumnBuilder"))),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.altercolumnbuilder"}),Object(r.b)("em",{parentName:"a"},"AlterColumnBuilder"))))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"after"},"after"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"after"),"(",Object(r.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columnName")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1811"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"alter"},"alter"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"alter"),"(): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1808"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"comment"},"comment"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"comment"),"(",Object(r.b)("inlineCode",{parentName:"p"},"value"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1807"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"defaultto"},"defaultTo"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"defaultTo"),"(",Object(r.b)("inlineCode",{parentName:"p"},"value"),": ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1#value"}),Object(r.b)("em",{parentName:"a"},"Value")),"): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#value"}),Object(r.b)("em",{parentName:"a"},"Value")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1803"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"first"},"first"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"first"),"(): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1812"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"index"},"index"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"index"),"(",Object(r.b)("inlineCode",{parentName:"p"},"indexName?"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"indexName?")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1797"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"notnullable"},"notNullable"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"notNullable"),"(): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1805"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"nullable"},"nullable"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"nullable"),"(): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1806"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"ondelete"},"onDelete"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"onDelete"),"(",Object(r.b)("inlineCode",{parentName:"p"},"command"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"command")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1801"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onupdate"},"onUpdate"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"onUpdate"),"(",Object(r.b)("inlineCode",{parentName:"p"},"command"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"command")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1802"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"primary"},"primary"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"primary"),"(",Object(r.b)("inlineCode",{parentName:"p"},"constraintName?"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"constraintName?")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1798"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"querycontext"},"queryContext"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"queryContext"),"(",Object(r.b)("inlineCode",{parentName:"p"},"context"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"context")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1809"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"references"},"references"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"references"),"(",Object(r.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.referencingcolumnbuilder"}),Object(r.b)("em",{parentName:"a"},"ReferencingColumnBuilder"))),Object(r.b)("h4",{id:"parameters-8"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columnName")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.referencingcolumnbuilder"}),Object(r.b)("em",{parentName:"a"},"ReferencingColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1800"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"unique"},"unique"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"unique"),"(",Object(r.b)("inlineCode",{parentName:"p"},"indexName?"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("h4",{id:"parameters-9"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"indexName?")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1799"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"unsigned"},"unsigned"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"unsigned"),"(): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1804"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"withkeyname"},"withKeyName"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"withKeyName"),"(",Object(r.b)("inlineCode",{parentName:"p"},"keyName"),": ",Object(r.b)("em",{parentName:"p"},"string"),"): ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("h4",{id:"parameters-10"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"keyName")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnbuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnBuilder"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1810"))}m.isMDXComponent=!0}}]);