(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,p(p({ref:t},l),{},{components:n})):r.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(1051)),o={title:"Metadata Providers"},p={unversionedId:"metadata-providers",id:"version-4.4/metadata-providers",isDocsHomePage:!1,title:"Metadata Providers",description:"As part of entity discovery process, MikroORM uses so called MetadataProvider to get necessary",source:"@site/versioned_docs/version-4.4/metadata-providers.md",slug:"/metadata-providers",permalink:"/docs/metadata-providers",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/metadata-providers.md",version:"4.4",lastUpdatedBy:"Christian Harris",lastUpdatedAt:1613727168,sidebar:"version-4.4/docs",previous:{title:"Using JSON properties",permalink:"/docs/json-properties"},next:{title:"Metadata Cache",permalink:"/docs/metadata-cache"}},c=[{value:"TsMorphMetadataProvider",id:"tsmorphmetadataprovider",children:[]},{value:"ReflectMetadataProvider",id:"reflectmetadataprovider",children:[{value:"Limitations and requirements",id:"limitations-and-requirements",children:[]}]},{value:"JavaScriptMetadataProvider",id:"javascriptmetadataprovider",children:[]}],l={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"As part of entity discovery process, MikroORM uses so called ",Object(i.b)("inlineCode",{parentName:"p"},"MetadataProvider")," to get necessary\ntype information about your entities' properties. There are 3 built-in metadata providers you can\nuse:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also implement custom metadata provider by extending abstract ",Object(i.b)("inlineCode",{parentName:"p"},"MetadataProvider")," class.")),Object(i.b)("h2",{id:"tsmorphmetadataprovider"},"TsMorphMetadataProvider"),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider")," MikroORM will use ",Object(i.b)("a",{parentName:"p",href:"https://github.com/dsherret/ts-morph"},Object(i.b)("inlineCode",{parentName:"a"},"ts-morph"))," to read\nTypeScript source files of all entities to be able to detect all types. Thanks to this,\ndefining the type is enough for runtime validation."),Object(i.b)("p",null,"To use it, first install the ",Object(i.b)("inlineCode",{parentName:"p"},"@mikro-orm/reflection")," package."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { TsMorphMetadataProvider } from '@mikro-orm/reflection';\n\nawait MikroORM.init({\n  metadataProvider: TsMorphMetadataProvider,\n  // ...\n});\n")),Object(i.b)("p",null,"If you use folder-based discovery, you should specify paths to\nthe compiled entities via ",Object(i.b)("inlineCode",{parentName:"p"},"entities")," as well as paths to the TS source files of\nthose entities via ",Object(i.b)("inlineCode",{parentName:"p"},"entitiesTs"),". When you run the ORM via ",Object(i.b)("inlineCode",{parentName:"p"},"ts-node"),", the latter\nwill be used automatically, or if you explicitly pass ",Object(i.b)("inlineCode",{parentName:"p"},"tsNode: true")," in the config."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"When running via ",Object(i.b)("inlineCode",{parentName:"p"},"node"),", ",Object(i.b)("inlineCode",{parentName:"p"},".d.ts")," files are used to obtain the type, so we\nneed to ship them in the production build. TS source files are no longer\nneeded (since v4). Be sure to enable ",Object(i.b)("inlineCode",{parentName:"p"},"compilerOptions.declaration")," in your\n",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.json"),".")),Object(i.b)("p",null,"After the discovery process ends, all ",Object(i.b)("a",{parentName:"p",href:"/docs/metadata-cache"},"metadata will be cached"),". By default,\n",Object(i.b)("inlineCode",{parentName:"p"},"FileCacheAdapter")," will be used to store the cache inside ",Object(i.b)("inlineCode",{parentName:"p"},"./temp")," folder in JSON files. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can generate production cache via CLI command ",Object(i.b)("inlineCode",{parentName:"p"},"mikro-orm cache:generate"),".")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can implement custom cache adapter by implementing ",Object(i.b)("inlineCode",{parentName:"p"},"CacheAdapter")," interface.")),Object(i.b)("h2",{id:"reflectmetadataprovider"},"ReflectMetadataProvider"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ReflectMetadataProvider")," uses ",Object(i.b)("inlineCode",{parentName:"p"},"reflect-metadata")," module to read the type from decorator\nmetadata exported by TypeScript compiler. "),Object(i.b)("p",null,"You will need to install ",Object(i.b)("inlineCode",{parentName:"p"},"reflect-metadata")," module and import at the top of your app's\nbootstrap script (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"main.ts")," or ",Object(i.b)("inlineCode",{parentName:"p"},"app.ts"),"). "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import 'reflect-metadata';\n")),Object(i.b)("p",null,"Next step is to enable ",Object(i.b)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," flag in your ",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"As this approach does not have performance impact, metadata caching is not really necessary. ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  metadataProvider: ReflectMetadataProvider,\n  // ...\n});\n")),Object(i.b)("h3",{id:"limitations-and-requirements"},"Limitations and requirements"),Object(i.b)("h4",{id:"explicit-types"},"Explicit types"),Object(i.b)("p",null,"Type inference is not supported, you need to always explicitly specify the type:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Property()\ncreatedAt: Date = new Date();\n")),Object(i.b)("h4",{id:"collection-properties-and-identified-references"},"Collection properties and Identified references"),Object(i.b)("p",null,"You need to provide target entity type in ",Object(i.b)("inlineCode",{parentName:"p"},"@OneToMany")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@ManyToMany")," decorators:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@OneToMany(() => Book, b => b.author)\nbooks = new Collection<Book>(this);\n\n@ManyToOne(() => Publisher, { wrappedReference: true })\npublisher!: IdentifiedReference<Publisher>;\n")),Object(i.b)("h4",{id:"optional-properties"},"Optional properties"),Object(i.b)("p",null,"Reading property nullability is not supported, you need to explicitly set ",Object(i.b)("inlineCode",{parentName:"p"},"nullable")," attribute:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Property({ nullable: true })\nprop?: string;\n")),Object(i.b)("h4",{id:"enums"},"Enums"),Object(i.b)("p",null,"By default, enum is considered as numeric type. For string enums, you need to explicitly\nprovide one of:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"reference to the enum (which will force you to define the enum before defining the entity)",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Enum(() => UserRole)\nrole: UserRole;\n"))),Object(i.b)("li",{parentName:"ul"},"name of the enum (if it is present in the same file)",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Enum({ type: 'UserRole' })\nrole: UserRole;\n"))),Object(i.b)("li",{parentName:"ul"},"list of the enum items",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Enum({ items: ['a', 'b', 'c'] })\nrole: UserRole;\n")))),Object(i.b)("h4",{id:"circular-dependencies"},"Circular dependencies"),Object(i.b)("p",null,"Reading type of referenced entity in ",Object(i.b)("inlineCode",{parentName:"p"},"@ManyToOne")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@OneToOne")," properties fails if there is\ncircular dependency. You will need to explicitly define the type in the decorator (preferably\nvia ",Object(i.b)("inlineCode",{parentName:"p"},"entity: () => ...")," callback)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@ManyToOne({ entity: () => Author })\nauthor: Author;\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"There can be recursion issues when you define multiple entities (with circular dependencies\nbetween each other) in single file. In that case, you might want to provide the type via decorator's\n",Object(i.b)("inlineCode",{parentName:"p"},"type")," or ",Object(i.b)("inlineCode",{parentName:"p"},"entity")," attributes and set the TS property type to something else (like ",Object(i.b)("inlineCode",{parentName:"p"},"any")," or ",Object(i.b)("inlineCode",{parentName:"p"},"object"),").")),Object(i.b)("h4",{id:"additional-typings-might-be-required"},"Additional typings might be required"),Object(i.b)("p",null,"You might have to install additional typings, one example is use of ",Object(i.b)("inlineCode",{parentName:"p"},"ObjectId")," in MongoDB,\nwhich requires ",Object(i.b)("inlineCode",{parentName:"p"},"@types/mongodb")," to be installed. "),Object(i.b)("h2",{id:"javascriptmetadataprovider"},"JavaScriptMetadataProvider"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"JavaScriptMetadataProvider")," is deprecated, ",Object(i.b)("a",{parentName:"p",href:"/docs/entity-schema"},"use ",Object(i.b)("inlineCode",{parentName:"a"},"EntitySchema")," instead"),".")),Object(i.b)("p",null,"This provider should be used only if you are not using TypeScript at all and therefore you do\nnot use decorators to annotate your properties. It will require you to specify the whole schema\nmanually. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"await MikroORM.init({\n  metadataProvider: JavaScriptMetadataProvider,\n  // ...\n});\n")),Object(i.b)("p",null,"You can read more about it in ",Object(i.b)("a",{parentName:"p",href:"/docs/usage-with-js"},"Usage with JavaScript section"),"."))}s.isMDXComponent=!0}}]);