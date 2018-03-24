/*! Built with http://stenciljs.com */
PresentIt.loadBundle("jkldojkl",["exports","./chunk1.js"],function(e,t){var n=window.PresentIt.h,r="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};"function"==typeof r.setTimeout&&setTimeout,"function"==typeof r.clearTimeout&&clearTimeout;function a(e,t){this.fun=e,this.array=t}a.prototype.run=function(){this.fun.apply(null,this.array)};var o=r.performance||{},i=(o.now||o.mozNow||o.msNow||o.oNow||o.webkitNow,new Date,function(){}),s={}.NODE_ENV,c=function(e,t,n,r,a,o,i,c){if("production"!==s&&void 0===t)throw new Error("invariant requires an error message argument");if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[n,r,a,o,i,c],h=0;(u=new Error(t.replace(/%s/g,function(){return d[h++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}};function u(e){return"/"===e.charAt(0)}function d(e,t){for(var n=t,r=n+1,a=e.length;r<a;n+=1,r+=1)e[n]=e[r];e.pop()}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e&&e.split("/")||[],r=t&&t.split("/")||[],a=e&&u(e),o=t&&u(t),i=a||o;if(e&&u(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var s=void 0;if(r.length){var c=r[r.length-1];s="."===c||".."===c||""===c}else s=!1;for(var h=0,l=r.length;l>=0;l--){var f=r[l];"."===f?d(r,l):".."===f?(d(r,l),h++):h&&(d(r,l),h--)}if(!i)for(;h--;h)r.unshift("..");!i||""===r[0]||r[0]&&u(r[0])||r.unshift("");var p=r.join("/");return s&&"/"!==p.substr(-1)&&(p+="/"),p}var l=Object.freeze({default:h}),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function p(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(Array.isArray(e))return Array.isArray(t)&&e.length===t.length&&e.every(function(e,n){return p(e,t[n])});var n=void 0===e?"undefined":f(e);if(n!==(void 0===t?"undefined":f(t)))return!1;if("object"===n){var r=e.valueOf(),a=t.valueOf();if(r!==e||a!==t)return p(r,a);var o=Object.keys(e),i=Object.keys(t);return o.length===i.length&&o.every(function(n){return p(e[n],t[n])})}return!1}var v=Object.freeze({default:p}),g=t.createCommonjsModule(function(e,t){t.__esModule=!0,t.addLeadingSlash=function(e){return"/"===e.charAt(0)?e:"/"+e},t.stripLeadingSlash=function(e){return"/"===e.charAt(0)?e.substr(1):e};var n=t.hasBasename=function(e,t){return new RegExp("^"+t+"(\\/|\\?|#|$)","i").test(e)};t.stripBasename=function(e,t){return n(e,t)?e.substr(t.length):e},t.stripTrailingSlash=function(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e},t.parsePath=function(e){var t=e||"/",n="",r="",a=t.indexOf("#");-1!==a&&(r=t.substr(a),t=t.substr(0,a));var o=t.indexOf("?");return-1!==o&&(n=t.substr(o),t=t.substr(0,o)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}},t.createPath=function(e){var t=e.pathname,n=e.search,r=e.hash,a=t||"/";return n&&"?"!==n&&(a+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(a+="#"===r.charAt(0)?r:"#"+r),a}});t.unwrapExports(g),g.addLeadingSlash,g.stripLeadingSlash,g.hasBasename,g.stripBasename,g.stripTrailingSlash,g.parsePath,g.createPath;var m=l&&h||l,y=v&&p||v,w=t.createCommonjsModule(function(e,t){t.__esModule=!0,t.locationsAreEqual=t.createLocation=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r=o(m),a=o(y);function o(e){return e&&e.__esModule?e:{default:e}}t.createLocation=function(e,t,a,o){var i=void 0;"string"==typeof e?(i=(0,g.parsePath)(e)).state=t:(void 0===(i=n({},e)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==t&&void 0===i.state&&(i.state=t));try{i.pathname=decodeURI(i.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return a&&(i.key=a),o?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=(0,r.default)(i.pathname,o.pathname)):i.pathname=o.pathname:i.pathname||(i.pathname="/"),i},t.locationsAreEqual=function(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&(0,a.default)(e.state,t.state)}});t.unwrapExports(w),w.locationsAreEqual,w.createLocation;var b=t.createCommonjsModule(function(e,t){t.__esModule=!0;var n,r=(n=i)&&n.__esModule?n:{default:n};t.default=function(){var e=null,t=[];return{setPrompt:function(t){return(0,r.default)(null==e,"A history supports only one prompt at a time"),e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,a,o){if(null!=e){var i="function"==typeof e?e(t,n):e;"string"==typeof i?"function"==typeof a?a(i,o):((0,r.default)(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),o(!0)):o(!1!==i)}else o(!0)},appendListener:function(e){var n=!0,r=function(){n&&e.apply(void 0,arguments)};return t.push(r),function(){n=!1,t=t.filter(function(e){return e!==r})}},notifyListeners:function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach(function(e){return e.apply(void 0,n)})}}}});t.unwrapExports(b);var P=t.createCommonjsModule(function(e,t){t.__esModule=!0,t.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),t.addEventListener=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},t.removeEventListener=function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},t.getConfirmation=function(e,t){return t(window.confirm(e))},t.supportsHistory=function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history},t.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},t.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},t.isExtraneousPopstateEvent=function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")}});t.unwrapExports(P),P.canUseDOM,P.addEventListener,P.removeEventListener,P.getConfirmation,P.supportsHistory,P.supportsPopStateOnHashChange,P.supportsGoWithoutReloadUsingHash,P.isExtraneousPopstateEvent;var O=t.createCommonjsModule(function(e,t){t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r=s(i),a=s(c),o=s(b);function s(e){return e&&e.__esModule?e:{default:e}}var u={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+(0,g.stripLeadingSlash)(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:g.stripLeadingSlash,decodePath:g.addLeadingSlash},slash:{encodePath:g.addLeadingSlash,decodePath:g.addLeadingSlash}},d=function(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)},h=function(e){var t=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,t>=0?t:0)+"#"+e)};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.default)(P.canUseDOM,"Hash history needs a DOM");var t=window.history,i=(0,P.supportsGoWithoutReloadUsingHash)(),s=e.getUserConfirmation,c=void 0===s?P.getConfirmation:s,l=e.hashType,f=void 0===l?"slash":l,p=e.basename?(0,g.stripTrailingSlash)((0,g.addLeadingSlash)(e.basename)):"",v=u[f],m=v.encodePath,y=v.decodePath,b=function(){var e=y(d());return(0,r.default)(!p||(0,g.hasBasename)(e,p),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+e+'" to begin with "'+p+'".'),p&&(e=(0,g.stripBasename)(e,p)),(0,w.createLocation)(e)},O=(0,o.default)(),E=function(e){n(U,e),U.length=t.length,O.notifyListeners(U.location,U.action)},x=!1,S=null,k=function(){var e=d(),t=m(e);if(e!==t)h(t);else{var n=b(),r=U.location;if(!x&&(0,w.locationsAreEqual)(r,n))return;if(S===(0,g.createPath)(n))return;S=null,L(n)}},L=function(e){x?(x=!1,E()):O.confirmTransitionTo(e,"POP",c,function(t){t?E({action:"POP",location:e}):A(e)})},A=function(e){var t=U.location,n=T.lastIndexOf((0,g.createPath)(t));-1===n&&(n=0);var r=T.lastIndexOf((0,g.createPath)(e));-1===r&&(r=0);var a=n-r;a&&(x=!0,M(a))},I=d(),C=m(I);I!==C&&h(C);var j=b(),T=[(0,g.createPath)(j)],M=function(e){(0,r.default)(i,"Hash history go(n) causes a full page reload in this browser"),t.go(e)},_=0,H=function(e){1===(_+=e)?(0,P.addEventListener)(window,"hashchange",k):0===_&&(0,P.removeEventListener)(window,"hashchange",k)},R=!1,U={length:t.length,action:"POP",location:j,createHref:function(e){return"#"+m(p+(0,g.createPath)(e))},push:function(e,t){(0,r.default)(void 0===t,"Hash history cannot push state; it is ignored");var n=(0,w.createLocation)(e,void 0,void 0,U.location);O.confirmTransitionTo(n,"PUSH",c,function(e){if(e){var t=(0,g.createPath)(n),a=m(p+t);if(d()!==a){S=t,function(e){window.location.hash=e}(a);var o=T.lastIndexOf((0,g.createPath)(U.location)),i=T.slice(0,-1===o?0:o+1);i.push(t),T=i,E({action:"PUSH",location:n})}else(0,r.default)(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),E()}})},replace:function(e,t){(0,r.default)(void 0===t,"Hash history cannot replace state; it is ignored");var n=(0,w.createLocation)(e,void 0,void 0,U.location);O.confirmTransitionTo(n,"REPLACE",c,function(e){if(e){var t=(0,g.createPath)(n),r=m(p+t);d()!==r&&(S=t,h(r));var a=T.indexOf((0,g.createPath)(U.location));-1!==a&&(T[a]=t),E({action:"REPLACE",location:n})}})},go:M,goBack:function(){return M(-1)},goForward:function(){return M(1)},block:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=O.setPrompt(e);return R||(H(1),R=!0),function(){return R&&(R=!1,H(-1)),t()}},listen:function(e){var t=O.appendListener(e);return H(1),function(){H(-1),t()}}};return U}}),E=t.unwrapExports(O),x=function(){function e(e){void 0===e&&(e={activeIndex:0,slideLength:0});var t=this;this.history=E(),this.state=e,this.checkSlide(this.history.location),this.history.listen(function(e){return t.checkSlide(e)})}return e.prototype.set=function(e,t){switch(e){case"NEXT":this.nextSlide(t);break;case"PREV":this.prevSlide(t);break;case"SET":this.setSlide(t);break;default:console.log("not a valid action")}},e.prototype.nextSlide=function(e){this.state=e,this.history.push(""+this.state.activeIndex)},e.prototype.prevSlide=function(e){this.state=e,this.history.push(""+this.state.activeIndex)},e.prototype.setSlide=function(e){this.state=e},e.prototype.checkSlide=function(e){var t=parseInt(e.pathname.replace("/",""),10);if(isNaN(t)||t>this.state.slideLength-1){this.history.push("/0");var n=Object.assign({},this.state,{activeIndex:0});this.nextSlide(n)}else n=Object.assign({},this.state,{activeIndex:t}),this.setSlide(n)},e}(),S=function(){function e(){this.slides=[],this.backgroundColor="transparent",this.backgroundImage="none"}return e.prototype.componentWillLoad=function(){this.slides=Array.from(this.deck.querySelectorAll("present-slide")),this.store=new x({activeIndex:0,slideLength:this.slides.length}),this.handleSlides()},e.prototype.handleSlides=function(){var e=this;this.slides.forEach(function(t,n){t.active=n===e.store.state.activeIndex})},e.prototype.slideDidChangeHandler=function(e){this.setBackgroundColor(e.detail.backgroundColor),this.setBackgroundImage(e.detail.backgroundImage)},e.prototype.next=function(e){e.preventDefault();var t=this.store.state;if(t.activeIndex<this.slides.length-1){var n=Object.assign({},t,{activeIndex:t.activeIndex+=1});this.store.set("NEXT",n),this.handleSlides()}},e.prototype.prev=function(e){e.preventDefault();var t=this.store.state;if(t.activeIndex>0){var n=Object.assign({},t,{activeIndex:t.activeIndex-=1});this.store.set("PREV",n),this.handleSlides()}},e.prototype.fullScreen=function(e){if(e.preventDefault(),"KeyF"===e.code){var t=document.documentElement,n=t.requestFullscreen||t.webkitRequestFullscreen||t.webkitRequestFullScreen;n&&n.apply(t)}"KeyO"===e.code&&this.deck.classList.toggle("pause")},e.prototype.setBackgroundColor=function(e){this.backgroundColor=void 0!==e?e:"transparent"},e.prototype.setBackgroundImage=function(e){this.backgroundImage=void 0!==e?'url("'+e+'")':"none"},e.prototype.render=function(){return[n("div",{class:"present-slides"},n("slot",null)),n("div",{class:"present-background-color",style:{background:this.backgroundColor}}),n("div",{class:"present-background-image",style:{backgroundImage:this.backgroundImage}})]},Object.defineProperty(e,"is",{get:function(){return"present-deck"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{backgroundColor:{state:!0},backgroundImage:{state:!0},deck:{elementRef:!0},showCount:{type:"Any",attr:"show-count"},showProgress:{type:"Any",attr:"show-progress"},store:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":root{--base-background-color:#2b2b2b;--base-font-family:'Lato',sans-serif;--base-font-size:2.5vw;--base-text-color:#eee;--base-block-margin:20px;--base-heading-margin:0 0 --base-block-margin 0;--base-heading-font-family:'League Gothic',Impact,sans-serif;--base-heading-color:#eee;--base-heading-line-height:1.2;--base-heading-letter-spacing:normal;--base-heading-text-transform:uppercase;--base-heading-text-shadow:none;--base-heading-font-weight:normal;--base-heading1-size:3.77em;--base-heading2-size:2.11em;--base-heading3-size:1.55em;--base-heading4-size:1em;--base-code-font:'Hasklig',monospace;--base-link-color:#13daec;--base-link-color-hover:#8eedf6;--base-selection-background-color:#ff5e99;--base-selection-color:#fff;--base-progress-color:#0072bc}body,html{background:#000;height:100%;margin:0;overflow:hidden;padding:0;width:100%}*{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:sans-serif}::-moz-selection{color:var(--base-selection-color);background:var(--base-selection-background-color);text-shadow:none}::selection{color:var(--base-selection-color);background:var(--base-selection-background-color);text-shadow:none}::-moz-selection{color:var(--base-selection-color);background:var(--base-selection-background-color);text-shadow:none}present-deck{-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;background:var(--base-background-color);color:var(--base-text-color);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-size:var(--base-font-size);height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:.3s opacity cubic-bezier(.26,.86,.44,.985);transition:.3s opacity cubic-bezier(.26,.86,.44,.985);width:100%}present-deck.pause{opacity:0}present-deck .present-background-color{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0;-webkit-transition:background .3s ease-in;transition:background .3s ease-in;width:100%}present-deck .present-background-image{background-repeat:no-repeat;background-size:cover;bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0;-webkit-transition:background .3s ease-in;transition:background .3s ease-in;width:100%;z-index:1}present-deck h1,present-deck h2,present-deck h3,present-deck h4,present-deck h5,present-deck h6{font-family:var(--base-heading-font-family);font-weight:var(--base-heading-font-weight);letter-spacing:normal;line-height:1.2;margin:var(--base-heading-margin);text-transform:uppercase;text-shadow:none;word-wrap:break-word}present-deck h1{font-size:var(--base-heading1-size)}present-deck h2{font-size:var(--base-heading2-size)}present-deck h3{font-size:var(--base-heading3-size)}present-deck h4{font-size:var(--base-heading4-size)}present-deck table th{border-bottom:0;text-align:left}present-deck table td{border-bottom:0;padding-right:40px;text-align:left}present-deck code,present-deck pre{font-family:var(--base-code-font)}present-deck iframe,present-deck img,present-deck video{max-height:95%;max-width:95%}present-deck iframe{height:400px;width:95%}present-deck .present-progress{background-color:var(--base-progress-color);bottom:0;height:3px;left:0;position:absolute;-webkit-transition:.3s -webkit-transform cubic-bezier(.26,.86,.44,.985);transition:.3s -webkit-transform cubic-bezier(.26,.86,.44,.985);transition:.3s transform cubic-bezier(.26,.86,.44,.985);transition:.3s transform cubic-bezier(.26,.86,.44,.985),.3s -webkit-transform cubic-bezier(.26,.86,.44,.985);width:100%;will-change:transform;z-index:0}present-deck .present-slide-count{bottom:5px;right:5px;position:absolute;z-index:0;font-size:15px}"},enumerable:!0,configurable:!0}),e}();e.PresentDeck=S,Object.defineProperty(e,"__esModule",{value:!0})});