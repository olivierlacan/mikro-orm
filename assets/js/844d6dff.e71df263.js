(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{1026:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),s=r,u=m["".concat(o,".").concat(s)]||m[s]||d[s]||i;return n?a.a.createElement(u,b(b({ref:t},p),{},{components:n})):a.a.createElement(u,b({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},549:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),i=(n(0),n(1026)),o={id:"knex.knex-1.migrationsource",title:"Interface: MigrationSource<TMigrationSpec>",sidebar_label:"MigrationSource",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/interfaces/knex.knex-1.migrationsource",id:"version-4.5/api/interfaces/knex.knex-1.migrationsource",isDocsHomePage:!1,title:"Interface: MigrationSource<TMigrationSpec>",description:"Interface: MigrationSource",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.migrationsource.md",slug:"/api/interfaces/knex.knex-1.migrationsource",permalink:"/docs/api/interfaces/knex.knex-1.migrationsource",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1619591585,formattedLastUpdatedAt:"4/28/2021",sidebar_label:"MigrationSource",sidebar:"version-4.5/API",previous:{title:"Interface: Migration",permalink:"/docs/api/interfaces/knex.knex-1.migration"},next:{title:"Interface: Migrator",permalink:"/docs/api/interfaces/knex.knex-1.migrator"}},c=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Methods",id:"methods",children:[{value:"getMigration",id:"getmigration",children:[]},{value:"getMigrationName",id:"getmigrationname",children:[]},{value:"getMigrations",id:"getmigrations",children:[]}]}],p={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-migrationsourcetmigrationspec"},"Interface: MigrationSource<TMigrationSpec",">"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MigrationSource"),Object(i.b)("h2",{id:"type-parameters"},"Type parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"TMigrationSpec"))))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"getmigration"},"getMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"migration"),": TMigrationSpec): ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migration"},Object(i.b)("em",{parentName:"a"},"Migration"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"migration")),Object(i.b)("td",{parentName:"tr",align:"left"},"TMigrationSpec")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migration"},Object(i.b)("em",{parentName:"a"},"Migration"))),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2117"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getmigrationname"},"getMigrationName"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getMigrationName"),"(",Object(i.b)("inlineCode",{parentName:"p"},"migration"),": TMigrationSpec): ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"migration")),Object(i.b)("td",{parentName:"tr",align:"left"},"TMigrationSpec")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2116"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getmigrations"},"getMigrations"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getMigrations"),"(",Object(i.b)("inlineCode",{parentName:"p"},"loadExtensions"),": readonly ",Object(i.b)("em",{parentName:"p"},"string"),"[]): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<TMigrationSpec[]",">"),Object(i.b)("h4",{id:"parameters-2"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"loadExtensions")),Object(i.b)("td",{parentName:"tr",align:"left"},"readonly ",Object(i.b)("em",{parentName:"td"},"string"),"[]")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<TMigrationSpec[]",">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2115"))}l.isMDXComponent=!0}}]);