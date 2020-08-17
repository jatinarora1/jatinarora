(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{105:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,g=u["".concat(o,".").concat(f)]||u[f]||b[f]||i;return r?a.a.createElement(g,l(l({ref:t},s),{},{components:r})):a.a.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(105)),o={title:"All in one guide for creating a killer API with Strapi",id:"strapi",author:"Anshul Goyal",author_url:"https://github.com/anshulrgoyal",author_image_url:"/img/anshul.jpg",tags:["strapi","nodejs","cms","backend"]},l={permalink:"/blog/strapi",source:"@site/blog/2020-05-24-strapi.md",description:"This article was originally published here",date:"2020-05-24T00:00:00.000Z",tags:[{label:"strapi",permalink:"/blog/tags/strapi"},{label:"nodejs",permalink:"/blog/tags/nodejs"},{label:"cms",permalink:"/blog/tags/cms"},{label:"backend",permalink:"/blog/tags/backend"}],title:"All in one guide for creating a killer API with Strapi",readingTime:11.375,truncated:!0,nextItem:{title:"A beginners guide to gRPC with Rust",permalink:"/blog/grpc-rust"}},c=[{value:"This article was originally published here",id:"this-article-was-originally-published-here",children:[]}],s={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"this-article-was-originally-published-here"},"This article was originally published ",Object(i.b)("a",Object(n.a)({parentName:"h2"},{href:"https://blog.logrocket.com/how-to-create-an-api-with-strapi/"}),"here")),Object(i.b)("p",null,"CMS has been around for quite some time. CMS refers to the content management system. Strapi is a headless CMS for Node.js. Strapi provides GUI for creating different content types and user management baked in the platform. Strapi supports both Restful API and GraphQL. Strapi supports both NoSQL and SQL databases. Changing the database is as simple as changing environment variables."))}p.isMDXComponent=!0}}]);