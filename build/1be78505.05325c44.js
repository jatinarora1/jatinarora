(window.webpackJsonp=window.webpackJsonp||[]).push([[13,49],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(105),o=a(106),r=a(22),i=a(110),s=a(2),m=a(108),u=a(126),b=a(128),d=a(129),h=a(130),p=a(127),k=a(107),f=a(113),E=a(62),v=a.n(E);const g=(e,t)=>"link"===e.type?((e,t)=>{const a=e=>e.endsWith("/")?e:e+"/";return a(e)===a(t)})(e.href,t):"category"===e.type&&e.items.some(e=>g(e,t));function O({item:e,onItemClick:t,collapsible:a,activePath:c,...o}){const{items:r,label:i}=e,u=g(e,c),b=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)(()=>{t.current=e},[e]),t.current}(u),[d,h]=Object(n.useState)(()=>!!a&&(!u&&e.collapsed));Object(n.useEffect)(()=>{u&&!b&&d&&h(!1)},[u,b,d]);const p=Object(n.useCallback)(e=>{e.preventDefault(),h(e=>!e)},[h]);return 0===r.length?null:l.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:i},l.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&u,[v.a.menuLinkText]:!a}),onClick:a?p:void 0,href:a?"#!":void 0},o),i),l.a.createElement("ul",{className:"menu__list"},r.map(e=>l.a.createElement(_,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:c}))))}function j({item:e,onItemClick:t,activePath:a,collapsible:n,...c}){const{href:o,label:r}=e,i=g(e,a);return l.a.createElement("li",{className:"menu__list-item",key:r},l.a.createElement(k.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":i}),to:o},Object(f.a)(o)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},c),r))}function _(e){switch(e.item.type){case"category":return l.a.createElement(O,e);case"link":default:return l.a.createElement(j,e)}}var C=function({path:e,sidebar:t,sidebarCollapsible:a=!0}){const[c,r]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:i="",hideOnScroll:f=!1}={}}={}}={},isClient:E}=Object(o.a)(),{logoLink:g,logoLinkProps:O,logoImageUrl:j,logoAlt:C}=Object(h.a)(),{isAnnouncementBarClosed:N}=Object(u.a)(),{scrollY:w}=Object(p.a)();Object(b.a)(c);const y=Object(d.a)();return Object(n.useEffect)(()=>{y===d.b.desktop&&r(!1)},[y]),l.a.createElement("div",{className:Object(m.a)(v.a.sidebar,{[v.a.sidebarWithHideableNavbar]:f})},f&&l.a.createElement(k.a,Object(s.a)({tabIndex:"-1",className:v.a.sidebarLogo,to:g},O),null!=j&&l.a.createElement("img",{key:E,src:j,alt:C}),null!=i&&l.a.createElement("strong",null,i)),l.a.createElement("div",{className:Object(m.a)("menu","menu--responsive",v.a.menu,{"menu--show":c,[v.a.menuWithAnnouncementBar]:!N&&0===w})},l.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{r(!c)}},c?l.a.createElement("span",{className:Object(m.a)(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},t.map(t=>l.a.createElement(_,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),r(!1)},collapsible:a,activePath:e})))))},N=a(118),w=a(123),y=a(114),M=a(68),I=a.n(M);function P({currentDocRoute:e,docsMetadata:t,children:a}){var n,r;const{siteConfig:s,isClient:m}=Object(o.a)(),{permalinkToSidebar:u,docsSidebars:b,version:d}=t,h=b[u[e.path]];return l.a.createElement(i.a,{version:d,key:m},l.a.createElement("div",{className:I.a.docPage},h&&l.a.createElement("div",{className:I.a.docSidebarContainer,role:"complementary"},l.a.createElement(C,{sidebar:h,path:e.path,sidebarCollapsible:null===(n=null===(r=s.themeConfig)||void 0===r?void 0:r.sidebarCollapsible)||void 0===n||n})),l.a.createElement("main",{className:I.a.docMainContainer},l.a.createElement(c.a,{components:N.a},a))))}t.default=function(e){const{route:{routes:t},docsMetadata:a,location:n}=e,c=t.find(e=>Object(y.matchPath)(n.pathname,e));return c?l.a.createElement(P,{currentDocRoute:c,docsMetadata:a},Object(r.a)(t)):l.a.createElement(w.default,e)}},123:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(110);t.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);