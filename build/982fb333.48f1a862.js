(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{105:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(105)),i={title:"Scraping with NodeJS and Cheerio",id:"scrapping-nodejs",author:"Anshul Goyal",author_url:"https://github.com/anshulrgoyal",author_image_url:"/img/anshul.jpg",tags:["cheerio","nodejs","scrapping"],image:"https://unsplash.com/@ayahya09?utm_source=medium&utm_medium=referral"},c={permalink:"/blog/scrapping-nodejs",source:"@site/blog/2019-01-20-scraping-nodejs.md",description:"Everybody says that python is best for scraping but I always wonder why we don't use NodeJs for Scraping?",date:"2019-01-20T00:00:00.000Z",tags:[{label:"cheerio",permalink:"/blog/tags/cheerio"},{label:"nodejs",permalink:"/blog/tags/nodejs"},{label:"scrapping",permalink:"/blog/tags/scrapping"}],title:"Scraping with NodeJS and Cheerio",readingTime:5.505,truncated:!0,prevItem:{title:"Creating Forms In React With Formik And Yup",permalink:"/blog/react-formik"},nextItem:{title:"Setting A React Project From Scratch Using Babel And Webpack",permalink:"/blog/react-setup"}},s=[],p={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Everybody says that python is best for scraping but I always wonder why we don't use NodeJs for Scraping?"),Object(o.b)("p",null,"The answer is clear scraping is CPU intensive task since NodeJs is single threaded so scraping blocks the main thread. I have one solution for the problem worker threads. We would scrap the IMDB website for the data."),Object(o.b)("p",null,"Our goal is to extract all the data from this ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.imdb.com/title/tt2193021/?ref_=nv_sr_1"}),"page"),". We would scrap all the details of the tv show, all awards won by the tv show, the cast of the tv show, episodes, seasons and much more."),Object(o.b)("p",null,"The data provided from scraping is way more than provided by our script and would be more than provided by any third-party API."))}l.isMDXComponent=!0}}]);