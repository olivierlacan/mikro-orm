(window.webpackJsonp=window.webpackJsonp||[]).push([[906],{1051:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),l=function(e){var r=a.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(t),u=n,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||i;return t?a.a.createElement(d,o(o({ref:r},b),{},{components:t})):a.a.createElement(d,o({ref:r},b))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},979:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(8),i=(t(0),t(1051)),c={id:"knex.foreignkey",title:"Interface: ForeignKey",sidebar_label:"ForeignKey",hide_title:!0},o={unversionedId:"api/interfaces/knex.foreignkey",id:"version-4.4/api/interfaces/knex.foreignkey",isDocsHomePage:!1,title:"Interface: ForeignKey",description:"Interface: ForeignKey",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.foreignkey.md",slug:"/api/interfaces/knex.foreignkey",permalink:"/docs/api/interfaces/knex.foreignkey",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.foreignkey.md",version:"4.4",lastUpdatedBy:"Christian Harris",lastUpdatedAt:1613727168,sidebar_label:"ForeignKey",sidebar:"version-4.4/API",previous:{title:"Interface: Column",permalink:"/docs/api/interfaces/knex.column"},next:{title:"Interface: ICriteriaNode",permalink:"/docs/api/interfaces/knex.icriterianode"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"columnName",id:"columnname",children:[]},{value:"constraintName",id:"constraintname",children:[]},{value:"deleteRule",id:"deleterule",children:[]},{value:"referencedColumnName",id:"referencedcolumnname",children:[]},{value:"referencedTableName",id:"referencedtablename",children:[]},{value:"updateRule",id:"updaterule",children:[]}]}],b={toc:p};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-foreignkey"},"Interface: ForeignKey"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".ForeignKey"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ForeignKey"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"columnname"},"columnName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"columnName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L45"},"packages/knex/src/typings.ts:45")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"constraintname"},"constraintName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"constraintName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L46"},"packages/knex/src/typings.ts:46")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"deleterule"},"deleteRule"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"deleteRule"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L50"},"packages/knex/src/typings.ts:50")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"referencedcolumnname"},"referencedColumnName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"referencedColumnName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L48"},"packages/knex/src/typings.ts:48")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"referencedtablename"},"referencedTableName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"referencedTableName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L47"},"packages/knex/src/typings.ts:47")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"updaterule"},"updateRule"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"updateRule"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/knex/src/typings.ts#L49"},"packages/knex/src/typings.ts:49")))}l.isMDXComponent=!0}}]);