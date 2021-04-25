(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=o(a),d=n,O=s["".concat(i,".").concat(d)]||s[d]||m[d]||b;return a?r.a.createElement(O,c(c({ref:t},p),{},{components:a})):r.a.createElement(O,c({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<b;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},368:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),b=(a(0),a(1026)),i={id:"knex",title:"Module: knex",sidebar_label:"knex",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/modules/knex",id:"api/modules/knex",isDocsHomePage:!1,title:"Module: knex",description:"Module: knex",source:"@site/docs/api/modules/knex.md",slug:"/api/modules/knex",permalink:"/docs/next/api/modules/knex",editUrl:null,version:"current",sidebar_label:"knex",sidebar:"API",previous:{title:"Module: entity-generator",permalink:"/docs/next/api/modules/entity_generator"},next:{title:"Module: migrations",permalink:"/docs/next/api/modules/migrations"}},l=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Enumerations",id:"enumerations",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]}]},{value:"References",id:"references",children:[{value:"SqlEntityManager",id:"sqlentitymanager",children:[]},{value:"SqlEntityRepository",id:"sqlentityrepository",children:[]}]},{value:"Type aliases",id:"type-aliases",children:[{value:"Field",id:"field",children:[]},{value:"KnexStringRef",id:"knexstringref",children:[]}]},{value:"Variables",id:"variables",children:[{value:"MonkeyPatchable",id:"monkeypatchable",children:[]}]}],p={toc:l};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"module-knex"},"Module: knex"),Object(b.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(b.b)("h3",{id:"enumerations"},"Enumerations"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/enums/knex.querytype"},"QueryType"))),Object(b.b)("h3",{id:"classes"},"Classes"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/knex.abstractsqlconnection"},"AbstractSqlConnection")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/knex.abstractsqldriver"},"AbstractSqlDriver")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/knex.abstractsqlplatform"},"AbstractSqlPlatform")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/knex.entitymanager"},"EntityManager")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/knex.entityrepository"},"EntityRepository")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/knex.querybuilder"},"QueryBuilder")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/knex.schemacomparator"},"SchemaComparator")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/knex.schemagenerator"},"SchemaGenerator")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/classes/knex.schemahelper"},"SchemaHelper"))),Object(b.b)("h3",{id:"interfaces"},"Interfaces"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.column"},"Column")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.columndifference"},"ColumnDifference")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.foreignkey"},"ForeignKey")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.icriterianode"},"ICriteriaNode")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.iquerybuilder"},"IQueryBuilder")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.index"},"Index")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.joinoptions"},"JoinOptions")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.schemadifference"},"SchemaDifference")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.table"},"Table")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/next/api/interfaces/knex.tabledifference"},"TableDifference"))),Object(b.b)("h2",{id:"references"},"References"),Object(b.b)("h3",{id:"sqlentitymanager"},"SqlEntityManager"),Object(b.b)("p",null,"Renames and exports: ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.entitymanager"},"EntityManager")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sqlentityrepository"},"SqlEntityRepository"),Object(b.b)("p",null,"Renames and exports: ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.entityrepository"},"EntityRepository")),Object(b.b)("h2",{id:"type-aliases"},"Type aliases"),Object(b.b)("h3",{id:"field"},"Field"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"Field"),"<T",">",": ",Object(b.b)("em",{parentName:"p"},"string")," ","|"," keyof T ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex#knexstringref"},Object(b.b)("em",{parentName:"a"},"KnexStringRef"))," ","|"," Knex.QueryBuilder"),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T"))))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/dab7cba/packages/knex/src/typings.ts#L16"},"packages/knex/src/typings.ts:16")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"knexstringref"},"KnexStringRef"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"KnexStringRef"),": ",Object(b.b)("em",{parentName:"p"},"Knex.Ref"),"<string, { ","[alias: string]",": ",Object(b.b)("em",{parentName:"p"},"string"),";  }",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/dab7cba/packages/knex/src/typings.ts#L12"},"packages/knex/src/typings.ts:12")),Object(b.b)("h2",{id:"variables"},"Variables"),Object(b.b)("h3",{id:"monkeypatchable"},"MonkeyPatchable"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Const")," ",Object(b.b)("strong",{parentName:"p"},"MonkeyPatchable"),": ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"Client")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"MySqlDialect")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"PostgresDialectTableCompiler")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"QueryExecutioner")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"Sqlite3Dialect")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"Sqlite3DialectTableCompiler")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"TableCompiler")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/dab7cba/packages/knex/src/MonkeyPatchable.ts#L20"},"packages/knex/src/MonkeyPatchable.ts:20")))}o.isMDXComponent=!0}}]);