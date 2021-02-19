(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,g=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(g,c(c({ref:t},u),{},{components:n})):o.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},541:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),a=(n(0),n(1051)),i={title:"Debugging"},c={unversionedId:"debugging",id:"version-3.6/debugging",isDocsHomePage:!1,title:"Debugging",description:"For development purposes it might come handy to enable logging and debug mode:",source:"@site/versioned_docs/version-3.6/debugging.md",slug:"/debugging",permalink:"/docs/3.6/debugging",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/debugging.md",version:"3.6",lastUpdatedBy:"Christian Harris",lastUpdatedAt:1613727168,sidebar:"version-3.6/docs",previous:{title:"Metadata Cache",permalink:"/docs/3.6/metadata-cache"},next:{title:"Schema Generator",permalink:"/docs/3.6/schema-generator"}},s=[{value:"Custom Logger",id:"custom-logger",children:[]},{value:"Logger Namespaces",id:"logger-namespaces",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For development purposes it might come handy to enable logging and debug mode:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  debug: true,\n});\n")),Object(a.b)("p",null,"By doing this ",Object(a.b)("inlineCode",{parentName:"p"},"MikroORM")," will start using ",Object(a.b)("inlineCode",{parentName:"p"},"console.log()")," function to dump all queries:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[query] select `e0`.* from `author` as `e0` where `e0`.`name` = ? limit ? [took 2 ms]\n[query] begin [took 1 ms]\n[query] insert into `author` (`name`, `email`, `created_at`, `updated_at`, `terms_accepted`) values (?, ?, ?, ?, ?) [took 2 ms]\n[query] commit [took 2 ms]\n")),Object(a.b)("p",null,"It is also useful for debugging problems with entity discovery, as you will see information\nabout every processed entity:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[discovery] ORM entity discovery started\n[discovery] - processing entity Author\n[discovery] - using cached metadata for entity Author\n[discovery] - processing entity Book\n[discovery] - processing entity BookTag\n[discovery] - entity discovery finished after 13 ms\n")),Object(a.b)("h2",{id:"custom-logger"},"Custom Logger"),Object(a.b)("p",null,"You can also provide your own logger via ",Object(a.b)("inlineCode",{parentName:"p"},"logger")," option. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  debug: true,\n  logger: msg => myCustomLogger.log(msg),\n});\n")),Object(a.b)("h2",{id:"logger-namespaces"},"Logger Namespaces"),Object(a.b)("p",null,"There are multiple Logger Namespaces that you can specifically request, while omitting the rest.\nJust specify array of them via the ",Object(a.b)("inlineCode",{parentName:"p"},"debug")," option:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  debug: ['query'], // now only queries will be logged\n});\n")),Object(a.b)("p",null,"Currently there are 4 namespaces \u2013 ",Object(a.b)("inlineCode",{parentName:"p"},"query"),", ",Object(a.b)("inlineCode",{parentName:"p"},"query-params"),", ",Object(a.b)("inlineCode",{parentName:"p"},"discovery")," and ",Object(a.b)("inlineCode",{parentName:"p"},"info"),"."),Object(a.b)("p",null,"If you provide ",Object(a.b)("inlineCode",{parentName:"p"},"query-params")," then you must also provide ",Object(a.b)("inlineCode",{parentName:"p"},"query")," in order for it to take effect."))}l.isMDXComponent=!0}}]);