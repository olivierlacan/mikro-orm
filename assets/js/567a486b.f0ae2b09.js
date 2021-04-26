(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{1026:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},386:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(1026)),i={title:"Result cache"},c={unversionedId:"caching",id:"version-4.3/caching",isDocsHomePage:!1,title:"Result cache",description:"MikroORM has simple result caching mechanism. It works with those methods of",source:"@site/versioned_docs/version-4.3/caching.md",slug:"/caching",permalink:"/docs/4.3/caching",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/caching.md",version:"4.3",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1619466618,formattedLastUpdatedAt:"4/26/2021",sidebar:"version-4.3/docs",previous:{title:"Using Query Builder",permalink:"/docs/4.3/query-builder"},next:{title:"Logging",permalink:"/docs/4.3/debugging"}},s=[],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MikroORM has simple result caching mechanism. It works with those methods of\n",Object(o.b)("inlineCode",{parentName:"p"},"EntityManager"),": ",Object(o.b)("inlineCode",{parentName:"p"},"find()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"findOne()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"findAndCount()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"findOneOrFail()"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"count()"),", as well as with ",Object(o.b)("inlineCode",{parentName:"p"},"QueryBuilder")," result methods (including ",Object(o.b)("inlineCode",{parentName:"p"},"execute"),")."),Object(o.b)("p",null,"By default, in memory cache is used, that is shared for the whole ",Object(o.b)("inlineCode",{parentName:"p"},"MikroORM"),"\ninstance. Default expiration is 1 second."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const res = await em.find(Book, { author: { name: 'Jon Snow' } }, {\n  populate: ['author', 'tags'],\n  cache: 50, // set expiration to 50ms\n  // cache: ['cache-id', 50], // set custom cache id and expiration\n  // cache: true, // use default cache id and expiration\n});\n")),Object(o.b)("p",null,"Or with query builder:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const res = await em.createQueryBuilder(Book)\n  .where({ author: { name: 'Jon Snow' } })\n  .cache()\n  .getResultList();\n")),Object(o.b)("p",null,"We can change the default expiration as well as provide custom cache adapter in\nthe ORM configuration:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const orm = await MikroORM.init({\n  resultCache: {\n    adapter: MemoryCacheAdapter,\n    expiration: 1000, // 1s\n    options: {},\n  },\n  // ...\n});\n")),Object(o.b)("p",null,"Custom cache adapters need to implement ",Object(o.b)("inlineCode",{parentName:"p"},"CacheAdapter")," interface."))}l.isMDXComponent=!0}}]);