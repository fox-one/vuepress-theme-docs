(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{730:function(e,t){e.exports=function(e,t){var n="function"==typeof e.exports?e.exports.extendOptions:e.options;for(var r in"function"==typeof e.exports&&(n.components=e.exports.options.components),n.components=n.components||{},t)n.components[r]=n.components[r]||t[r]}},731:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"i",(function(){return a})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return p})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return f})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"j",(function(){return b})),n.d(t,"m",(function(){return m})),n.d(t,"n",(function(){return _}));n(21),n(54),n(187),n(92),n(41),n(65),n(22),n(33),n(9),n(38),n(35),n(32),n(47),n(51);var r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(e){return decodeURI(e).replace(r,"").replace(i,"")}function l(e){return a.test(e)}function c(e){return/^mailto:/.test(e)}function p(e){return/^tel:/.test(e)}function u(e){if(l(e))return e;var t=e.match(r),n=t?t[0]:"",i=o(e);return s.test(i)?e:i+".html"+n}function f(e,t){var n=decodeURIComponent(e.hash),i=function(e){var t=e.match(r);if(t)return t[0]}(t);return(!i||n===i)&&o(e.path)===o(t)}function d(e,t,n){if(l(t))return{type:"external",path:t};n&&(t=function(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var s=e.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(t,n));for(var r=o(t),i=0;i<e.length;i++)if(o(e[i].regularPath)===r)return Object.assign({},e[i],{type:"page",path:u(e[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(t,'"')),{}}function h(e,t,n,r){var i=n.pages,s=n.themeConfig,a=r&&s.locales&&s.locales[r]||s;if("auto"===(e.frontmatter.sidebar||a.sidebar||s.sidebar))return v(e);var o=a.sidebar||s.sidebar;if(o){var l=function(e,t){if(Array.isArray(t))return{base:"/",config:t};for(var n in t)if(0===(r=e,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(n)))return{base:n,config:t[n]};var r;return{}}(t,o),c=l.base,p=l.config;return"auto"===p?v(e):p?p.map((function(e){return function e(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof t)return d(n,t,r);if(Array.isArray(t))return Object.assign(d(n,t[0],r),{title:t[1]});var s=t.children||[];return 0===s.length&&t.path?Object.assign(d(n,t.path,r),{title:t.title}):{type:"group",path:t.path,title:t.title,sidebarDepth:t.sidebarDepth,initialOpenGroupIndex:t.initialOpenGroupIndex,children:s.map((function(t){return e(t,n,r,i+1)})),collapsable:!1!==t.collapsable}}(e,i,c)})):[]}return[]}function v(e){var t=g(e.headers||[]);return[{type:"group",collapsable:!1,title:e.title,path:null,level:1,children:t.map((function(t){return{type:"auto",title:t.title,basePath:e.path,path:e.path+"#"+t.slug,children:t.children||[],level:t.level}}))}]}function g(e){var t;return(e=e.map((function(e){return Object.assign({},e)}))).forEach((function(e){2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((function(e){return 2===e.level}))}function b(e){return Object.assign(e,{type:e.items&&e.items.length?"links":"link"})}var m=function(e,t){return e.$vuetify.lang.t("$vuetify.vuepress."+t)},_=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},737:function(e,t,n){},738:function(e,t,n){},739:function(e,t,n){},740:function(e,t,n){},741:function(e,t,n){},742:function(e,t,n){},743:function(e,t,n){},758:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(731),s=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let a=class extends r.Vue{constructor(){super(...arguments),this.isActive=i.e}get classes(){return{"f-docs-sidebar__group":!0,"f-docs-sidebar__group--collapsable":this.collapsable,"f-docs-sidebar__group--is-subgroup":0!==this.depth,["f-docs-sidebar__group__level-"+this.depth]:!0}}beforeCreate(){this.$options.components.SideBarLinks=n(758).default}};s([Object(r.Prop)()],a.prototype,"item",void 0),s([Object(r.Prop)()],a.prototype,"open",void 0),s([Object(r.Prop)()],a.prototype,"collapsable",void 0),s([Object(r.Prop)()],a.prototype,"depth",void 0),a=s([r.Component],a);var o=a,l=n(240),c=n(730),p=n.n(c),u=n(350),f=n(234),d=n(349),h=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{class:e.classes},[n("v-layout",{staticClass:"f-docs-sidebar__heading",class:{"f-docs-sidebar__heading--open":e.open}},[n("v-flex",[e.item.path?n("router-link",{attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))])]):n("div",{on:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))])])],1),e._v(" "),e.collapsable?n("v-icon",{staticClass:"f-docs-sidebar__heading-arrow",attrs:{size:"16"}},[e._v("\n      $FIconChevronDown4P\n    ")]):e._e()],1),e._v(" "),e.open||!e.collapsable?n("side-bar-links",{staticClass:"f-docs-sidebar__group--items",attrs:{items:e.item.children,"sidebar-depth":e.item.sidebarDepth,"initial-open-group-index":e.item.initialOpenGroupIndex,depth:e.depth+1}}):e._e()],1)}),[],!1,null,null,null),v=h.exports;function g(e,t,n,r,i=0){const s=Math.max(0,i-1),a={props:{to:t,activeClass:"",exactActiveClass:""},class:{"f-docs-sidebar__link":!0,"f-docs-sidebar__link--active":r,["f-docs-sidebar__link__level-"+i]:!0}};return i>2&&(a.style={"padding-left":s+"rem"}),e("RouterLink",a,n)}function b(e,t,n,r,s,a=1){return!t||a>s?null:e("div",{class:"f-docs-sidebar__subheaders"},t.map(t=>{const o=Object(i.e)(r,n+"#"+t.slug);return e("div",{class:"f-docs-sidebar__subheader"},[g(e,n+"#"+t.slug,t.title,o,t.level-1),b(e,e.children,n,r,s,a+1)])}))}p()(h,{VFlex:u.a,VIcon:f.a,VLayout:d.a});var m=n(8).default.extend({functional:!0,props:["item","sidebarDepth"],render(e,{parent:{$page:t,$route:n,$site:r,$themeConfig:s,$themeLocaleConfig:a},props:{item:o,sidebarDepth:l}}){const c=Object(i.e)(n,o.path||""),p="auto"===o.type?c||o.children.some(e=>Object(i.e)(n,o.basePath+"#"+e.slug)):c,u="external"===o.type?function(e,t,n){return e("a",{attrs:{href:t,target:"_blank",rel:"noopener noreferrer"},class:{"f-docs-sidebar__link":!0}},[n,e("OutboundLink")])}(e,o.path,o.title||o.path):g(e,o.path,o.title||o.path,p,o.level),f=[t.frontmatter.sidebarDepth,l,a.sidebarDepth,s.sidebarDepth,1].find(e=>void 0!==e),d=a.displayAllHeaders||s.displayAllHeaders;if("auto"===o.type)return[u,b(e,o.children,o.basePath,n,f)];if((p||d)&&o.headers&&!i.d.test(o.path)){return[u,b(e,Object(i.c)(o.headers),o.path,n,f)]}return u}}),_=Object(l.a)(m,void 0,void 0,!1,null,null,null).exports,k=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let y=class extends r.Vue{constructor(){super(...arguments),this.openGroupIndex=this.initialOpenGroupIndex||0}get show(){return this.items.length}mounted(){this.handleSetOpenGroupIndex()}handleSetOpenGroupIndex(){const e=function(e,t){for(let n=0;n<t.length;n++)if(O(e,t[n]))return n;return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)}handleToggleGroup(e){this.openGroupIndex=e===this.openGroupIndex?-1:e}};function O(e,t){if("group"!==t.type)return!1;const n=t.path&&Object(i.e)(e,t.path),r=t.children.some(t=>"group"===t.type?O(e,t):"page"===t.type&&Object(i.e)(e,t.path));return n||r}k([Object(r.Prop)()],y.prototype,"items",void 0),k([Object(r.Prop)()],y.prototype,"depth",void 0),k([Object(r.Prop)()],y.prototype,"sidebarDepth",void 0),k([Object(r.Prop)()],y.prototype,"initialOpenGroupIndex",void 0),k([Object(r.Watch)("$route")],y.prototype,"handleSetOpenGroupIndex",null),y=k([Object(r.Component)({components:{SideBarGroup:v,SideBarLink:_}})],y);var j=y,x=Object(l.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"f-docs-sidebar__links"},[e._l(e.items,(function(t,r){return[t.type&&"group"===t.type?n("side-bar-group",{key:r,attrs:{item:t,depth:e.depth,open:r===e.openGroupIndex,collapsable:t.collapsable},on:{toggle:function(t){return e.handleToggleGroup(r)}}}):n("side-bar-link",{key:r,attrs:{item:t,"sidebar-depth":e.sidebarDepth}})]}))],2):e._e()}),[],!1,null,null,null);t.default=x.exports},760:function(e,t,n){"use strict";n(737)},761:function(e,t,n){"use strict";n(738)},762:function(e,t,n){"use strict";n(739)},763:function(e,t,n){var r=n(208),i=n(125),s=n(190);e.exports=function(e){return"string"==typeof e||!i(e)&&s(e)&&"[object String]"==r(e)}},764:function(e,t){e.exports=function(e){return null==e}},765:function(e,t,n){"use strict";n(740)},766:function(e,t,n){"use strict";n(741)},767:function(e,t,n){"use strict";n(742)},768:function(e,t,n){"use strict";n(743)},832:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(731),s=n(758),a=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let o=class extends r.Vue{get logo(){return this.$site.themeConfig.logo}get title(){return this.$siteTitle}get logoPath(){return this.$withBase(this.$site.themeConfig.logo)}};a([Object(r.Prop)({type:Boolean,default:!1})],o.prototype,"hideText",void 0),o=a([r.Component],o);var l=o,c=n(240),p=n(730),u=n.n(p),f=n(185),d=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("RouterLink",{staticClass:"appbar-title text--primary",attrs:{to:e.$localePath}},[e.logo?n("v-img",{attrs:{src:e.logoPath,alt:e.$title,width:"32","max-width":"32"}}):e._e(),e._v(" "),!e.hideText&&e.title?n("span",{staticClass:"appbar-name"},[e._v(e._s(e.title))]):e._e()],1)}),[],!1,null,null,null),h=d.exports;u()(d,{VImg:f.a});var v=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let g=class extends r.Vue{get link(){return Object(i.b)(this.item.link)}get exact(){return this.$site.locales?Object.keys(this.$site.locales).some(e=>e===this.link):"/"===this.link}get target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""}get rel(){return this.isNonHttpURI?null:!1===this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}get isInternal(){return!Object(i.f)(this.link)&&!this.isBlankTarget}get isNonHttpURI(){return Object(i.g)(this.link)||Object(i.h)(this.link)}get isBlankTarget(){return"_blank"===this.target}focusoutAction(){this.$emit("focusout")}};v([Object(r.Prop)()],g.prototype,"item",void 0),g=v([r.Component],g);var b=g,m=Object(c.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isInternal?n("RouterLink",{staticClass:"appbar-link text--primary",attrs:{to:e.link,exact:e.exact},nativeOn:{focusout:function(t){return e.focusoutAction.apply(null,arguments)}}},[e._v("\n  "+e._s(e.item.text)+"\n")]):n("a",{staticClass:"appbar-link appbar-link--external text--primary",attrs:{href:e.link,target:e.target,rel:e.rel},on:{focusout:e.focusoutAction}},[e._v("\n  "+e._s(e.item.text)+"\n  "),e.isBlankTarget?n("OutboundLink"):e._e()],1)}),[],!1,null,null,null).exports,_=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let k=class extends r.Vue{constructor(){super(...arguments),this.menu=!1}get mdAndDown(){return this.$vuetify.breakpoint.mdAndDown}get ariaLabel(){return this.item.ariaLabel||this.item.text}};_([Object(r.Prop)()],k.prototype,"item",void 0),k=_([Object(r.Component)({components:{AppBarLink:m}})],k);var y=k,O=n(342),j=Object(c.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f-bottom-sheet",{attrs:{"hide-close-icon":!e.mdAndDown},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("span",e._g({staticClass:"appbar-link",attrs:{text:"","aria-label":e.ariaLabel}},r),[e._v("\n      "+e._s(e.item.text)+"\n    ")])]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),e.mdAndDown?n("h2",{staticClass:"pa-4 text-center ma-0"},[e._v(e._s(e.item.text))]):e._e(),e._v(" "),n("v-list",{staticClass:"pa-2 appbar-menu__items appbar-menu__list"},e._l(e.item.items,(function(t,r){return n("div",{key:t.link||r},["links"===t.type?[n("div",{staticClass:"appbar-menu__item-title"},[e._v(e._s(t.text))]),e._v(" "),n("f-divider",{staticClass:"mb-2"}),e._v(" "),n("div",{staticClass:"appbar-menu__items"},e._l(t.items,(function(e){return n("div",{key:e.link,staticClass:"appbar-menu__item"},[n("app-bar-link",{attrs:{item:e}})],1)})),0)]:n("div",{staticClass:"appbar-menu__item"},[n("app-bar-link",{attrs:{item:t}})],1)],2)})),0)],1)}),[],!1,null,null,null),x=j.exports;u()(j,{VList:O.a});var C=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let $=class extends r.Vue{get userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]}get nav(){const{locales:e}=this.$site;if(e&&Object.keys(e).length>1){const t=this.$page.path,n=this.$router.options.routes||[],r=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map(i=>{const s=e[i],a=r[i]&&r[i].label||s.lang;let o;return s.lang===this.$lang?o=t:(o=t.replace(this.$localeConfig.path||"",i),n.some(e=>e.path===o)||(o=i)),{text:a,link:o}})};return[...this.userNav,i]}return this.userNav}get userLinks(){return(this.nav||[]).map(e=>Object.assign(Object(i.j)(e),{items:(e.items||[]).map(i.j)}))}get repoLink(){const{repo:e}=this.$site.themeConfig;return e?/^https?:/.test(e)?e:"https://github.com/"+e:null}get repoLabel(){if(!this.repoLink)return"";if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const e=this.repoLink.match(/^https?:\/\/[^/]+/)[0],t=["GitHub","GitLab","Bitbucket"];for(let n=0;n<t.length;n++){const r=t[n];if(new RegExp(r,"i").test(e))return r}return"Source"}};$=C([Object(r.Component)({components:{AppBarMenu:x,AppBarLink:m}})],$);var w=$,P=Object(c.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.userLinks.length||e.repoLink?n("nav",{staticClass:"appbar-links"},[e._l(e.userLinks,(function(e){return n("div",{key:e.link,staticClass:"appbar-link__item"},["links"===e.type?n("app-bar-menu",{attrs:{item:e}}):n("app-bar-link",{attrs:{item:e}})],1)})),e._v(" "),e.repoLink?n("a",{staticClass:"repo-link",attrs:{href:e.repoLink,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n    "+e._s(e.repoLabel)+"\n    "),n("OutboundLink")],1):e._e()],2):e._e()}),[],!1,null,null,null).exports,L=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let R=class extends r.Vue{};R=L([Object(r.Component)({components:{SiteTitle:h,AppBarLinks:P}})],R);var D=R,A=Object(c.a)(D,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"f-docs-sidebar__head"},[t("site-title"),this._v(" "),t("f-divider",{staticClass:"my-4"}),this._v(" "),t("app-bar-links")],1)}),[],!1,null,null,null).exports,I=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let B=class extends r.Vue{get sidebar(){return!this.mdAndDown||this.$store.state.app.sidebar}set sidebar(e){this.mdAndDown&&this.$store.commit("SET_SIDEBAR",e)}get mdAndDown(){return this.$vuetify.breakpoint.mdAndDown}get style(){const e=this.$vuetify.application.top;return this.mdAndDown?{}:{position:"sticky",top:e+"px",height:`calc(100vh - ${e}px)`}}get classes(){return{"f-docs-sidebar":!0,"f-docs-sidebar--overflow":this.mdAndDown,"f-docs-sidebar--flat":!this.mdAndDown}}get width(){return this.mdAndDown?"256px":"220px"}};I([Object(r.Prop)()],B.prototype,"items",void 0),B=I([Object(r.Component)({components:{SideBarLinks:s.default,SideBarHead:A}})],B);var V=B,E=n(352),S=Object(c.a)(V,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{class:e.classes,style:e.style,attrs:{clipped:"",floating:"",permanent:!e.mdAndDown,fixed:e.mdAndDown,temporary:e.mdAndDown,app:e.mdAndDown,width:e.width},model:{value:e.sidebar,callback:function(t){e.sidebar=t},expression:"sidebar"}},[e.mdAndDown?n("side-bar-head"):e._e(),e._v(" "),n("div",{staticClass:"f-docs-sidebar__content"},[n("side-bar-links",{attrs:{depth:0,items:e.items}})],1)],1)}),[],!1,null,null,null),T=S.exports;u()(S,{VNavigationDrawer:E.a});var G=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let N=class extends r.Vue{get mdAndDown(){return this.$vuetify.breakpoint.mdAndDown}get themeIcon(){return this.$vuetify.theme.dark?"$FIconSun":"$FIconMoon"}get showToggle(){return this.mdAndDown&&this.hasSideBar}handleToggleSideBar(){const e=this.$store.state.app.sidebar;this.$store.commit("SET_SIDEBAR",!e)}handleToggleTheme(){const e=!this.$vuetify.theme.dark;this.$vuetify.theme.dark=e}};G([Object(r.Prop)()],N.prototype,"items",void 0),G([Object(r.Prop)()],N.prototype,"hasSideBar",void 0),N=G([Object(r.Component)({components:{AppBarLinks:P,SiteTitle:h}})],N);var U=N,F=(n(760),n(338)),H=n(339),M=n(232),z=n(234),J=n(348),W=Object(c.a)(U,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"","clipped-left":""}},[e.showToggle?n("v-app-bar-nav-icon",{on:{click:e.handleToggleSideBar}}):e._e(),e._v(" "),n("site-title"),e._v(" "),n("v-spacer"),e._v(" "),e.mdAndDown?e._e():n("app-bar-links"),e._v(" "),n("v-btn",{staticClass:"mr-0",attrs:{icon:"",small:""},on:{click:e.handleToggleTheme}},[n("v-icon",[e._v(" "+e._s(e.themeIcon)+" ")])],1)],1)}),[],!1,null,"750e372c",null),Y=W.exports;u()(W,{VAppBar:F.a,VAppBarNavIcon:H.a,VBtn:M.a,VIcon:z.a,VSpacer:J.a});var q=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let K=class extends r.Vue{get classes(){return{"app-footer--desktop":!this.$vuetify.breakpoint.mdAndDown}}get links(){return[{title:"Discord",href:"https://discord.com/invite/ek45g3Cymd"},{title:"Twitter",href:"https://twitter.com/pando_im"},{title:"Github",href:"https://github.com/fox-one"}]}get products(){return[{title:"Pando Leaf",href:"https://pando.im/leaf"},{title:"Pando Rings",href:"https://pando.im/rings"},{title:"Pando Lake",href:"https://pando.im/lake"}]}};K=q([r.Component],K);var Q=K,X=(n(761),n(346)),Z=n(350),ee=n(344),te=n(347),ne=Object(c.a)(Q,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{staticClass:"pa-4 app-footer",class:e.classes,attrs:{app:"",absolute:"",color:"greyscale_6"}},[n("v-flex",[n("div",{staticClass:"app-footer-links"},[n("div",{staticClass:"app-footer-links__group"},[n("div",{staticClass:"app-footer-links__title"},[e._v("Community")]),e._v(" "),e._l(e.links,(function(t,r){return n("div",{key:r,staticClass:"app-footer-links__item"},[n("a",{staticClass:"text--primary",attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n            "+e._s(t.title)+"\n          ")]),e._v(" "),n("OutboundLink")],1)}))],2),e._v(" "),n("div",{staticClass:"app-footer-links__group"},[n("div",{staticClass:"app-footer-links__title"},[e._v("Products")]),e._v(" "),e._l(e.products,(function(t,r){return n("div",{key:r,staticClass:"app-footer-links__item"},[n("a",{staticClass:"text--primary",attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n            "+e._s(t.title)+"\n          ")]),e._v(" "),n("OutboundLink")],1)}))],2)]),e._v(" "),n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-col",{staticClass:"py-6 text-center caption",attrs:{cols:"12"}},[e._v("\n        Copyright © 2020 - "+e._s((new Date).getFullYear())+"\n        "),n("strong",[e._v("@Fox.ONE")])])],1)],1)],1)}),[],!1,null,"357fc682",null),re=ne.exports;u()(ne,{VCol:X.a,VFlex:Z.a,VFooter:ee.a,VRow:te.a});var ie=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let se=class extends r.Vue{constructor(){super(...arguments),this.t=e=>Object(i.m)(this,e)}get lastUpdate(){return this.$page.lastUpdated}get showEdit(){return this.$page.frontmatter.editLink||this.$site.themeConfig.editLinks}get link(){const{repo:e,docsDir:t="",docsBranch:n="master",docsRepo:r=e}=this.$site.themeConfig;return this.showEdit||this.createEditLink(e,r,t,n,this.$page.relativePath)}createEditLink(e,t,n,r,s){const a=`/${r}/`+(n?n.replace(i.a,"")+"/":"")+s;if(/bitbucket.org/.test(t)){return t.replace(i.a,"")+"/src"+a+`?mode=edit&spa=0&at=${r}&fileviewer=file-view-default`}if(/gitlab.com/.test(t)){return t.replace(i.a,"")+"/-/edit"+a}return(i.i.test(t)?t:"https://github.com/"+t).replace(i.a,"")+"/edit"+a}};se=ie([Object(r.Component)({inheritAttrs:!1})],se);var ae=se,oe=(n(762),Object(c.a)(ae,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-edit"},[e.showEdit?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:e.link,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n      "+e._s(e.t("edit_page"))+"\n    ")]),e._v(" "),n("OutboundLink")],1):e._e(),e._v(" "),n("v-spacer"),e._v(" "),n("div",{staticClass:"updated-link"},[n("span",{staticClass:"updated-link__label"},[e._v(e._s(e.t("last_updated"))+":")]),e._v(" "),n("span",[e._v(e._s(e.lastUpdate))])])],1)}),[],!1,null,"7dd3a800",null)),le=oe.exports;u()(oe,{VSpacer:J.a});var ce=n(763),pe=n.n(ce),ue=n(764),fe=n.n(ue),de=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let he=class extends r.Vue{get classes(){return{"page-nav-link--next":this.isNext}}get label(){return Object(i.m)(this,this.isNext?"next_page":"prev_page")}get text(){return this.link.title||this.link.path}get path(){return this.link.path}get isExternal(){return"external"===this.link.type}};de([Object(r.Prop)()],he.prototype,"link",void 0),de([Object(r.Prop)({type:Boolean,default:!1})],he.prototype,"isNext",void 0),he=de([r.Component],he);var ve=he,ge=(n(765),Object(c.a)(ve,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.link?n("div",{staticClass:"page-nav-link",class:e.classes},[n("div",{staticClass:"link-label"},[e._v(e._s(e.label))]),e._v(" "),n("div",{staticClass:"link-value mt-2"},[e.isExternal?n("a",{attrs:{href:e.path,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n      "+e._s(e.text)+"\n      "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:e.path}},[e._v("\n      "+e._s(e.text)+"\n    ")])],1)]):e._e()}),[],!1,null,"f5d1faea",null).exports),be=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};const me={next:{resolve:(e,t)=>ye(e,t,1),getThemeLinkConfig:({nextLinks:e})=>e,getPageLinkConfig:({frontmatter:e})=>e.next},prev:{resolve:(e,t)=>ye(e,t,-1),getThemeLinkConfig:({prevLinks:e})=>e,getPageLinkConfig:({frontmatter:e})=>e.prev}};function _e(e,{$page:t,$route:n,$site:r,$themeConfig:s,sidebarItems:a}){const{getPageLinkConfig:o,getThemeLinkConfig:l,resolve:c}=e,p=l(s),u=o(t),f=fe()(u)?p:u;return!1===f?void 0:pe()(f)?Object(i.k)(r.pages,f,n.path):c(t,a)}let ke=class extends r.Vue{get prev(){return _e(me.prev,this)}get next(){return _e(me.next,this)}};function ye(e,t,n){const r=[];!function e(t,n){for(let r=0,i=t.length;r<i;r++)"group"===t[r].type?e(t[r].children||[],n):n.push(t[r])}(t,r);for(let t=0;t<r.length;t++){const i=r[t];if("page"===i.type&&i.path===decodeURIComponent(e.path))return r[t+n]}}be([Object(r.Prop)()],ke.prototype,"sidebarItems",void 0),ke=be([Object(r.Component)({inheritAttrs:!1,components:{PageNavLink:ge}})],ke);var Oe=ke,je=(n(766),Object(c.a)(Oe,(function(){var e=this.$createElement,t=this._self._c||e;return this.prev||this.next?t("div",{staticClass:"page-nav"},[t("page-nav-link",{attrs:{link:this.prev}}),this._v(" "),t("v-spacer"),this._v(" "),t("page-nav-link",{attrs:{link:this.next,"is-next":""}})],1):this._e()}),[],!1,null,"87382040",null)),xe=je.exports;u()(je,{VSpacer:J.a});n(51),n(21),n(30),n(58),n(47),n(54),n(187),n(27),n(41);var Ce=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let $e=class extends r.Vue{setLang(){const e=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["en","ja","zh","ko","de","fr","es"],t=navigator.language.toLowerCase(),n=0;n<e.length;n++){var r=e[n];if(t.includes(r))return r}return"en"}();this.$vuetify.lang.current=e}};$e=Ce([Object(r.Component)({inheritAttrs:!1,components:{PageEdit:le,PageNav:xe},beforeRouteEnter(e,t,n){n(e=>{e.setLang()})}})],$e);var we=$e,Pe=(n(767),Object(c.a)(we,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"f-docs-content__wrap"},[e._t("default"),e._v(" "),n("page-nav",e._b({},"page-nav",e.$attrs,!1)),e._v(" "),n("f-divider"),e._v(" "),n("page-edit",e._b({},"page-edit",e.$attrs,!1))],2)}),[],!1,null,"0d8922aa",null).exports),Le=function(e,t,n,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,n,a):i(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a};let Re=class extends r.Vue{get showSideBar(){const e=this.$page.frontmatter.home,{locales:t}=this.$site,n=this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[],r=t&&Object.keys(t).length>1,i=n&&r;return!e&&!1!==this.$page.frontmatter.sidebar&&(this.sideBarItems.length||i)}get sideBarItems(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)}mounted(){}};Re=Le([Object(r.Component)({components:{SideBar:T,AppBar:Y,AppFooter:re,PageContent:Pe}})],Re);var De=Re,Ae=(n(768),n(337)),Ie=n(345),Be=n(203),Ve=Object(c.a)(De,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("ClientOnly",[n("app-bar",{attrs:{"has-side-bar":e.showSideBar,items:e.sideBarItems}})],1),e._v(" "),n("v-main",[n("v-container",{staticClass:"f-docs-container pa-0"},[n("ClientOnly",[e.showSideBar?n("side-bar",{attrs:{items:e.sideBarItems}}):e._e()],1),e._v(" "),n("page-content",{attrs:{"sidebar-items":e.sideBarItems}},[n("Content",{staticClass:"f-docs-content"})],1)],1)],1),e._v(" "),n("app-footer")],1)}),[],!1,null,"2b63d754",null);t.default=Ve.exports;u()(Ve,{VApp:Ae.a,VContainer:Ie.a,VMain:Be.a})}}]);