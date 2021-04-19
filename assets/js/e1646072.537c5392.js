(window.webpackJsonp=window.webpackJsonp||[]).push([[830],{1026:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,O=m["".concat(b,".").concat(u)]||m[u]||s[u]||c;return n?a.a.createElement(O,p(p({ref:t},o),{},{components:n})):a.a.createElement(O,p({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var o=2;o<c;o++)b[o]=n[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},903:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),c=(n(0),n(1026)),b={id:"knex.column",title:"Interface: Column",sidebar_label:"Column",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/knex.column",id:"api/interfaces/knex.column",isDocsHomePage:!1,title:"Interface: Column",description:"Interface: Column",source:"@site/docs/api/interfaces/knex.column.md",slug:"/api/interfaces/knex.column",permalink:"/docs/next/api/interfaces/knex.column",editUrl:null,version:"current",sidebar_label:"Column",sidebar:"API",previous:{title:"Interface: UpdateOptions<T>",permalink:"/docs/next/api/interfaces/core.updateoptions"},next:{title:"Interface: ColumnDifference",permalink:"/docs/next/api/interfaces/knex.columndifference"}},i=[{value:"Properties",id:"properties",children:[{value:"autoincrement",id:"autoincrement",children:[]},{value:"comment",id:"comment",children:[]},{value:"default",id:"default",children:[]},{value:"enumItems",id:"enumitems",children:[]},{value:"length",id:"length",children:[]},{value:"mappedType",id:"mappedtype",children:[]},{value:"name",id:"name",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"precision",id:"precision",children:[]},{value:"primary",id:"primary",children:[]},{value:"scale",id:"scale",children:[]},{value:"type",id:"type",children:[]},{value:"unique",id:"unique",children:[]},{value:"unsigned",id:"unsigned",children:[]}]}],o={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-column"},"Interface: Column"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".Column"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"autoincrement"},"autoincrement"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"autoincrement"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L37"},"packages/knex/src/typings.ts:37")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"comment"},"comment"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"comment"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L43"},"packages/knex/src/typings.ts:43")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"default"},"default"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"default"),": ",Object(c.b)("em",{parentName:"p"},"null")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L42"},"packages/knex/src/typings.ts:42")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"enumitems"},"enumItems"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"enumItems"),": ",Object(c.b)("em",{parentName:"p"},"string"),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L44"},"packages/knex/src/typings.ts:44")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"length"},"length"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"length"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L39"},"packages/knex/src/typings.ts:39")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"mappedtype"},"mappedType"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"mappedType"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},Object(c.b)("em",{parentName:"a"},"Type")),"<unknown, unknown",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L35"},"packages/knex/src/typings.ts:35")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L33"},"packages/knex/src/typings.ts:33")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"nullable"},"nullable"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"nullable"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L38"},"packages/knex/src/typings.ts:38")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"precision"},"precision"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"precision"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L40"},"packages/knex/src/typings.ts:40")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"primary"},"primary"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"primary"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L45"},"packages/knex/src/typings.ts:45")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"scale"},"scale"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"scale"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L41"},"packages/knex/src/typings.ts:41")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"type"},"type"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"type"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L34"},"packages/knex/src/typings.ts:34")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"unique"},"unique"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"unique"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L46"},"packages/knex/src/typings.ts:46")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"unsigned"},"unsigned"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"unsigned"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/b0ab53c/packages/knex/src/typings.ts#L36"},"packages/knex/src/typings.ts:36")))}l.isMDXComponent=!0}}]);