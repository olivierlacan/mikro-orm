(window.webpackJsonp=window.webpackJsonp||[]).push([[698],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),O=r,j=m["".concat(b,".").concat(O)]||m[O]||l[O]||i;return a?n.a.createElement(j,c(c({ref:t},p),{},{components:a})):n.a.createElement(j,c({ref:t},p))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,b=new Array(i);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var p=2;p<i;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},768:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),i=(a(0),a(1253)),b={id:"migrations.migrationstorage",title:"Class: MigrationStorage",sidebar_label:"MigrationStorage",hide_title:!0},c={unversionedId:"api/classes/migrations.migrationstorage",id:"api/classes/migrations.migrationstorage",isDocsHomePage:!1,title:"Class: MigrationStorage",description:"Class: MigrationStorage",source:"@site/docs/api/classes/migrations.migrationstorage.md",slug:"/api/classes/migrations.migrationstorage",permalink:"/docs/next/api/classes/migrations.migrationstorage",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/migrations.migrationstorage.md",version:"current",sidebar_label:"MigrationStorage",sidebar:"API",previous:{title:"Class: MigrationRunner",permalink:"/docs/next/api/classes/migrations.migrationrunner"},next:{title:"Class: Migrator",permalink:"/docs/next/api/classes/migrations.migrator"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"connection",id:"connection",children:[]},{value:"driver",id:"driver",children:[]},{value:"helper",id:"helper",children:[]},{value:"knex",id:"knex",children:[]},{value:"masterTransaction",id:"mastertransaction",children:[]},{value:"options",id:"options",children:[]}]},{value:"Methods",id:"methods",children:[{value:"ensureTable",id:"ensuretable",children:[]},{value:"executed",id:"executed",children:[]},{value:"getExecutedMigrations",id:"getexecutedmigrations",children:[]},{value:"logMigration",id:"logmigration",children:[]},{value:"setMasterMigration",id:"setmastermigration",children:[]},{value:"unlogMigration",id:"unlogmigration",children:[]},{value:"unsetMasterMigration",id:"unsetmastermigration",children:[]}]}],p={toc:o};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"class-migrationstorage"},"Class: MigrationStorage"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/migrations"}),"migrations"),".MigrationStorage"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MigrationStorage"))),Object(i.b)("h2",{id:"constructors"},"Constructors"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("p",null,"+"," ",Object(i.b)("strong",{parentName:"p"},"new MigrationStorage"),"(",Object(i.b)("inlineCode",{parentName:"p"},"driver"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqldriver"}),Object(i.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection")),">",", ",Object(i.b)("inlineCode",{parentName:"p"},"options"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core#migrationsoptions"}),Object(i.b)("em",{parentName:"a"},"MigrationsOptions")),"): ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/migrations.migrationstorage"}),Object(i.b)("em",{parentName:"a"},"MigrationStorage"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"driver")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.abstractsqldriver"}),Object(i.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection")),">")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"options")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/modules/core#migrationsoptions"}),Object(i.b)("em",{parentName:"a"},"MigrationsOptions")))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/migrations.migrationstorage"}),Object(i.b)("em",{parentName:"a"},"MigrationStorage"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/migrations/src/MigrationStorage.ts#L10"}),"packages/migrations/src/MigrationStorage.ts:10")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"connection"},"connection"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"connection"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/migrations/src/MigrationStorage.ts#L7"}),"packages/migrations/src/MigrationStorage.ts:7")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"driver"},"driver"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"driver"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqldriver"}),Object(i.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(i.b)("em",{parentName:"a"},"AbstractSqlConnection")),">"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"helper"},"helper"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"helper"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.schemahelper"}),Object(i.b)("em",{parentName:"a"},"SchemaHelper"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/migrations/src/MigrationStorage.ts#L9"}),"packages/migrations/src/MigrationStorage.ts:9")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"knex"},"knex"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"knex"),": ",Object(i.b)("em",{parentName:"p"},"Knex"),"<",Object(i.b)("em",{parentName:"p"},"any"),", ",Object(i.b)("em",{parentName:"p"},"unknown"),"[]",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/migrations/src/MigrationStorage.ts#L8"}),"packages/migrations/src/MigrationStorage.ts:8")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"mastertransaction"},"masterTransaction"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"masterTransaction"),": ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/migrations/src/MigrationStorage.ts#L10"}),"packages/migrations/src/MigrationStorage.ts:10")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"options"},"options"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"options"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core#migrationsoptions"}),Object(i.b)("em",{parentName:"a"},"MigrationsOptions"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"ensuretable"},"ensureTable"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"ensureTable"),"(): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("em",{parentName:"p"},"void"),">"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("em",{parentName:"p"},"void"),">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/migrations/src/MigrationStorage.ts#L38"}),"packages/migrations/src/MigrationStorage.ts:38")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"executed"},"executed"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"executed"),"(): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("em",{parentName:"p"},"string"),"[]",">"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("em",{parentName:"p"},"string"),"[]",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/migrations/src/MigrationStorage.ts#L15"}),"packages/migrations/src/MigrationStorage.ts:15")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getexecutedmigrations"},"getExecutedMigrations"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getExecutedMigrations"),"(): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/migrations#migrationrow"}),Object(i.b)("em",{parentName:"a"},"MigrationRow")),"[]",">"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/migrations#migrationrow"}),Object(i.b)("em",{parentName:"a"},"MigrationRow")),"[]",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/migrations/src/MigrationStorage.ts#L28"}),"packages/migrations/src/MigrationStorage.ts:28")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"logmigration"},"logMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"logMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"name"),": ",Object(i.b)("em",{parentName:"p"},"string"),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("em",{parentName:"p"},"void"),">"),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"string"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("em",{parentName:"p"},"void"),">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/migrations/src/MigrationStorage.ts#L20"}),"packages/migrations/src/MigrationStorage.ts:20")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"setmastermigration"},"setMasterMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"setMasterMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"trx"),": ",Object(i.b)("em",{parentName:"p"},"any"),"): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("h4",{id:"parameters-2"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"trx")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"any"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/migrations/src/MigrationStorage.ts#L52"}),"packages/migrations/src/MigrationStorage.ts:52")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"unlogmigration"},"unlogMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"unlogMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"name"),": ",Object(i.b)("em",{parentName:"p"},"string"),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("em",{parentName:"p"},"void"),">"),Object(i.b)("h4",{id:"parameters-3"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"string"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("em",{parentName:"p"},"void"),">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/migrations/src/MigrationStorage.ts#L24"}),"packages/migrations/src/MigrationStorage.ts:24")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"unsetmastermigration"},"unsetMasterMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"unsetMasterMigration"),"(): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/c787ce8/packages/migrations/src/MigrationStorage.ts#L56"}),"packages/migrations/src/MigrationStorage.ts:56")))}s.isMDXComponent=!0}}]);