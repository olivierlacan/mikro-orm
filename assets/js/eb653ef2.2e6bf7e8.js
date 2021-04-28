(window.webpackJsonp=window.webpackJsonp||[]).push([[860],{1026:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=b(n),u=r,m=c["".concat(i,".").concat(u)]||c[u]||p[u]||s;return n?a.a.createElement(m,d(d({ref:t},l),{},{components:n})):a.a.createElement(m,d({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var l=2;l<s;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},933:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),s=(n(0),n(1026)),i={title:"Separating Concerns using Embeddables",sidebar_label:"Embeddables"},d={unversionedId:"embeddables",id:"embeddables",isDocsHomePage:!1,title:"Separating Concerns using Embeddables",description:"Support for embeddables was added in version 4.0",source:"@site/docs/embeddables.md",slug:"/embeddables",permalink:"/docs/next/embeddables",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/embeddables.md",version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1619591585,formattedLastUpdatedAt:"4/28/2021",sidebar_label:"Embeddables",sidebar:"docs",previous:{title:"Custom Types",permalink:"/docs/next/custom-types"},next:{title:"Defining Entities via EntitySchema",permalink:"/docs/next/entity-schema"}},o=[{value:"Initializing embeddables",id:"initializing-embeddables",children:[]},{value:"Column Prefixing",id:"column-prefixing",children:[]},{value:"Storing embeddables as objects",id:"storing-embeddables-as-objects",children:[]},{value:"Array of embeddables",id:"array-of-embeddables",children:[]},{value:"Nested embeddables",id:"nested-embeddables",children:[]}],l={toc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Support for embeddables was added in version 4.0")),Object(s.b)("p",null,"Embeddables are classes which are not entities themselves, but are embedded in\nentities and can also be queried. You'll mostly want to use them to reduce\nduplication or separating concerns. Value objects such as date range or address\nare the primary use case for this feature."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Embeddables needs to be discovered just like regular entities, don't forget to\nadd them to the list of entities when initializing the ORM.")),Object(s.b)("p",null,"Embeddables can only contain properties with basic ",Object(s.b)("inlineCode",{parentName:"p"},"@Property()")," mapping."),Object(s.b)("p",null,"For the purposes of this tutorial, we will assume that you have a ",Object(s.b)("inlineCode",{parentName:"p"},"User")," class in\nyour application and you would like to store an address in the ",Object(s.b)("inlineCode",{parentName:"p"},"User")," class. We will\nmodel the ",Object(s.b)("inlineCode",{parentName:"p"},"Address")," class as an embeddable instead of simply adding the respective\ncolumns to the ",Object(s.b)("inlineCode",{parentName:"p"},"User")," class."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded()\n  address!: Address;\n\n}\n\n@Embeddable()\nexport class Address {\n  \n  @Property()\n  street!: string;\n\n  @Property()\n  postalCode!: string;\n\n  @Property()\n  city!: string;\n\n  @Property()\n  country!: string;\n\n}\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"When using ReflectMetadataProvider, you might need to provide the class in decorator options:\n",Object(s.b)("inlineCode",{parentName:"p"},"@Embedded(() => Address)")," or ",Object(s.b)("inlineCode",{parentName:"p"},"@Embedded({ entity: () => Address })"),".")),Object(s.b)("p",null,"In terms of your database schema, MikroORM will automatically inline all columns from\nthe ",Object(s.b)("inlineCode",{parentName:"p"},"Address")," class into the table of the ",Object(s.b)("inlineCode",{parentName:"p"},"User")," class, just as if you had declared\nthem directly there."),Object(s.b)("h2",{id:"initializing-embeddables"},"Initializing embeddables"),Object(s.b)("p",null,"In case all fields in the embeddable are nullable, you might want to initialize the\nembeddable, to avoid getting a null value instead of the embedded object."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"@Embedded()\naddress = new Address();\n")),Object(s.b)("h2",{id:"column-prefixing"},"Column Prefixing"),Object(s.b)("p",null,"By default, MikroORM names your columns by prefixing them, using the value object name."),Object(s.b)("p",null,"Following the example above, your columns would be named as ",Object(s.b)("inlineCode",{parentName:"p"},"address_street"),",\n",Object(s.b)("inlineCode",{parentName:"p"},"address_postal_code"),"..."),Object(s.b)("p",null,"You can change this behaviour to meet your needs by changing the ",Object(s.b)("inlineCode",{parentName:"p"},"prefix")," attribute\nin the ",Object(s.b)("inlineCode",{parentName:"p"},"@Embedded()")," notation."),Object(s.b)("p",null,"The following example shows you how to set your prefix to ",Object(s.b)("inlineCode",{parentName:"p"},"myPrefix_"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded({ prefix: 'myPrefix_' })\n  address!: Address;\n\n}\n")),Object(s.b)("p",null,"To have MikroORM drop the prefix and use the value object's property name directly,\nset ",Object(s.b)("inlineCode",{parentName:"p"},"prefix: false"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded({ entity: () => Address, prefix: false })\n  address!: Address;\n\n}\n")),Object(s.b)("h2",{id:"storing-embeddables-as-objects"},"Storing embeddables as objects"),Object(s.b)("p",null,"From MikroORM v4.2 we can also store the embeddable as an object instead of\ninlining its properties to the owing entity."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class User {\n\n  @Embedded({ entity: () => Address, object: true })\n  address!: Address;\n\n}\n")),Object(s.b)("p",null,"In SQL drivers, this will use a JSON column to store the value. "),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Only MySQL and PostgreSQL drivers support searching by JSON properties currently.")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",Object(s.b)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/embeddables.html"},"doctrine tutorial"),"\nas the behaviour here is pretty much the same.")),Object(s.b)("h2",{id:"array-of-embeddables"},"Array of embeddables"),Object(s.b)("p",null,"Embedded arrays are always stored as JSON. It is possible to use them inside\nnested embeddables. "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"  @Embedded(() => Address, { array: true })\n  addresses: Address[] = [];\n")),Object(s.b)("h2",{id:"nested-embeddables"},"Nested embeddables"),Object(s.b)("p",null,"Starting with v4.4, we can also nest embeddables, both in inline mode and object mode:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nclass User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded(() => Profile, { object: true, nullable: true })\n  profile?: Profile;\n\n}\n\n@Embeddable()\nclass Profile {\n\n  @Property()\n  username: string;\n\n  @Embedded(() => Identity)\n  identity: Identity;\n\n  constructor(username: string, identity: Identity) {\n    this.username = username;\n    this.identity = identity;\n  }\n\n}\n\n@Embeddable()\nclass Identity {\n\n  @Property()\n  email: string;\n\n  constructor(email: string) {\n    this.email = email;\n  }\n\n}\n")))}b.isMDXComponent=!0}}]);