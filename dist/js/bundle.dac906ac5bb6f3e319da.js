!function(t){function e(e){for(var o,a,u=e[0],p=e[1],c=e[2],l=0,f=[];l<u.length;l++)a=u[l],r[a]&&f.push(r[a][0]),r[a]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(t[o]=p[o]);for(s&&s(e);f.length;)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,u=1;u<n.length;u++){var p=n[u];0!==r[p]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={1:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=p;i.push([1,0]),n()}([,function(t,e,n){"use strict";n.r(e);var o=n(0);n(13);var r=class extends o.Component{render(){return Object(o.h)("div",null,"Home Route",Object(o.h)("a",{href:"/notfound"},"Not Found"))}};n(8);var i=class extends o.Component{render(){return Object(o.h)("div",null,"Not Found Route")}},a={};function u(t,e){for(var n in e)t[n]=e[n];return t}function p(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function c(t,e){return t.index=e,t.rank=function(t){return t.attributes.default?0:(e=t.attributes.path,s(e).map(l).join(""));var e}(t),t.attributes}function s(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function l(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var f=null,h=[],d=[],v={};function g(){var t;return""+((t=f&&f.location?f.location:f&&f.getCurrentLocation?f.getCurrentLocation():"undefined"!=typeof location?location:v).pathname||"")+(t.search||"")}function m(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=h.length;e--;)if(h[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),f&&f[e]?f[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),y(t)}function y(t){for(var e=!1,n=0;n<h.length;n++)!0===h[n].routeTo(t)&&(e=!0);for(var o=d.length;o--;)d[o](t);return e}function b(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return m(e)}}function O(t){if(0==t.button)return b(t.currentTarget||t.target||this),j(t)}function j(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function C(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e,n=t.target;do{if("A"===String(n.nodeName).toUpperCase()&&n.getAttribute("href")&&(null!=(e=n).__preactattr_||"undefined"!=typeof Symbol&&null!=e[Symbol.for("preactattr")])){if(n.hasAttribute("native"))return;if(b(n))return j(t)}}while(n=n.parentNode)}}var w=!1;var _=function(t){function e(e){t.call(this,e),e.history&&(f=e.history),this.state={url:e.url||g()},w||("function"==typeof addEventListener&&(f||addEventListener("popstate",function(){y(g())}),addEventListener("click",C)),w=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){h.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;f&&(this.unlisten=f.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),h.splice(h.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(c).sort(p).map(function(t){var r=function(t,e,n){var o,r=/(?:\?([^#]*))?(#.*)?$/,i=t.match(r),u={};if(i&&i[1])for(var p=i[1].split("&"),c=0;c<p.length;c++){var l=p[c].split("=");u[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}t=s(t.replace(r,"")),e=s(e||"");for(var f=Math.max(t.length,e.length),h=0;h<f;h++)if(e[h]&&":"===e[h].charAt(0)){var d=e[h].replace(/(^\:|[+*?]+$)/g,""),v=(e[h].match(/[+*?]+$/)||a)[0]||"",g=~v.indexOf("+"),m=~v.indexOf("*"),y=t[h]||"";if(!y&&!m&&(v.indexOf("?")<0||g)){o=!1;break}if(u[d]=decodeURIComponent(y),g||m){u[d]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){o=!1;break}return(!0===n.default||!1!==o)&&u}(e,t.attributes.path,t.attributes);if(r){if(!1!==n){var i={url:e,matches:r};return u(i,r),delete i.ref,delete i.key,Object(o.cloneElement)(t,i)}return t}}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,r=e.url,i=this.getMatchingChildren(n,r,!0),a=i[0]||null;this._didRoute=!!a;var u=this.previousUrl;return r!==u&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:u,active:i,current:a})),a},e}(o.Component);_.subscribers=d,_.getCurrentUrl=g,_.route=m,_.Router=_,_.Route=function(t){return Object(o.h)(t.component,t)},_.Link=function(t){return Object(o.h)("a",u({onClick:O},t))};var x=_;n(3);var k=()=>{"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(t=>{console.log("SW registered: ",t)}).catch(t=>{console.log("SW registration failed: ",t)})})};n(2),n(6);k();Object(o.render)(Object(o.h)(()=>Object(o.h)(x,null,Object(o.h)(r,{path:"/"}),Object(o.h)(i,{default:!0})),null),document.body)},function(t,e,n){"use strict"},function(t,e,n){t.exports=function(t){"use strict";var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};return function(n){function o(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,n.call(this));return t.state={componentData:null},t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,n),o.prototype.loadComponent=function(){var t=this;if(this.props.component)return this.setState({componentData:this.props.component});var n,o=this.props.getComponent(this.props.url,function(e){var n=e.component;n&&t.setState({componentData:n})},e({},this.props,this.props.matches));o&&o.then&&(n=this.props.url,o.then(function(e){n===t.props.url?t.setState({componentData:e}):t.setState({componentData:null},function(){t.loadComponent()})}))},o.prototype.componentWillReceiveProps=function(t){var e=this;this.props.path&&this.props.path!==t.path&&this.setState({componentData:null},function(){e.loadComponent()})},o.prototype.componentWillMount=function(){this.loadComponent()},o.prototype.render=function(){if(this.state.componentData)return t.h(this.state.componentData,this.props);if(this.props.loading){var e=this.props.loading();return e}return null},o}(t.Component)}(n(0))},,,function(t,e){},,function(t,e){},,,,,function(t,e){}]);