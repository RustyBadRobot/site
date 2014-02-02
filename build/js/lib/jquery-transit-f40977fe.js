!function(e){function t(e){if(e in u.style)return e;var t=["Moz","Webkit","O","ms"],i=e.charAt(0).toUpperCase()+e.substr(1);if(e in u.style)return e;for(var n=0;n<t.length;++n){var a=t[n]+i;if(a in u.style)return a}}function i(){return u.style[f.transform]="",u.style[f.transform]="rotateY(90deg)",""!==u.style[f.transform]}function n(e){return"string"==typeof e&&this.parse(e),this}function a(e,t,i){t===!0?e.queue(i):t?e.queue(t,i):i()}function r(t){var i=[];return e.each(t,function(t){t=e.camelCase(t),t=e.transit.propertyMap[t]||e.cssProps[t]||t,t=s(t),-1===e.inArray(t,i)&&i.push(t)}),i}function l(t,i,n,a){var l=r(t);e.cssEase[n]&&(n=e.cssEase[n]);var o=""+c(i)+" "+n;parseInt(a,10)>0&&(o+=" "+c(a));var s=[];return e.each(l,function(e,t){s.push(t+" "+o)}),s.join(", ")}function o(t,i){i||(e.cssNumber[t]=!0),e.transit.propertyMap[t]=f.transform,e.cssHooks[t]={get:function(i){var n=e(i).css("transit:transform");return n.get(t)},set:function(i,n){var a=e(i).css("transit:transform");a.setFromString(t,n),e(i).css({"transit:transform":a})}}}function s(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function d(e,t){return"string"!=typeof e||e.match(/^[\-0-9\.]+$/)?""+e+t:e}function c(t){var i=t;return e.fx.speeds[i]&&(i=e.fx.speeds[i]),d(i,"ms")}e.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var u=document.createElement("div"),f={},p=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;f.transition=t("transition"),f.transitionDelay=t("transitionDelay"),f.transform=t("transform"),f.transformOrigin=t("transformOrigin"),f.transform3d=i();var h={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},y=f.transitionEnd=h[f.transition]||null;for(var b in f)f.hasOwnProperty(b)&&"undefined"==typeof e.support[b]&&(e.support[b]=f[b]);u=null,e.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},e.cssHooks["transit:transform"]={get:function(t){return e(t).data("transform")||new n},set:function(t,i){var a=i;a instanceof n||(a=new n(a)),t.style[f.transform]="WebkitTransform"!==f.transform||p?a.toString():a.toString(!0),e(t).data("transform",a)}},e.cssHooks.transform={set:e.cssHooks["transit:transform"].set},e.fn.jquery<"1.8"&&(e.cssHooks.transformOrigin={get:function(e){return e.style[f.transformOrigin]},set:function(e,t){e.style[f.transformOrigin]=t}},e.cssHooks.transition={get:function(e){return e.style[f.transition]},set:function(e,t){e.style[f.transition]=t}}),o("scale"),o("translate"),o("rotate"),o("rotateX"),o("rotateY"),o("rotate3d"),o("perspective"),o("skewX"),o("skewY"),o("x",!0),o("y",!0),n.prototype={setFromString:function(e,t){var i="string"==typeof t?t.split(","):t.constructor===Array?t:[t];i.unshift(e),n.prototype.set.apply(this,i)},set:function(e){var t=Array.prototype.slice.apply(arguments,[1]);this.setter[e]?this.setter[e].apply(this,t):this[e]=t.join(",")},get:function(e){return this.getter[e]?this.getter[e].apply(this):this[e]||0},setter:{rotate:function(e){this.rotate=d(e,"deg")},rotateX:function(e){this.rotateX=d(e,"deg")},rotateY:function(e){this.rotateY=d(e,"deg")},scale:function(e,t){void 0===t&&(t=e),this.scale=e+","+t},skewX:function(e){this.skewX=d(e,"deg")},skewY:function(e){this.skewY=d(e,"deg")},perspective:function(e){this.perspective=d(e,"px")},x:function(e){this.set("translate",e,null)},y:function(e){this.set("translate",null,e)},translate:function(e,t){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!==e&&void 0!==e&&(this._translateX=d(e,"px")),null!==t&&void 0!==t&&(this._translateY=d(t,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var e=(this.scale||"1,1").split(",");return e[0]&&(e[0]=parseFloat(e[0])),e[1]&&(e[1]=parseFloat(e[1])),e[0]===e[1]?e[0]:e},rotate3d:function(){for(var e=(this.rotate3d||"0,0,0,0deg").split(","),t=0;3>=t;++t)e[t]&&(e[t]=parseFloat(e[t]));return e[3]&&(e[3]=d(e[3],"deg")),e}},parse:function(e){var t=this;e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(e,i,n){t.setFromString(i,n)})},toString:function(e){var t=[];for(var i in this)if(this.hasOwnProperty(i)){if(!f.transform3d&&("rotateX"===i||"rotateY"===i||"perspective"===i||"transformOrigin"===i))continue;"_"!==i[0]&&(e&&"scale"===i?t.push(i+"3d("+this[i]+",1)"):e&&"translate"===i?t.push(i+"3d("+this[i]+",0)"):t.push(i+"("+this[i]+")"))}return t.join(" ")}},e.fn.transition=e.fn.transit=function(t,i,n,r){var o=this,s=0,d=!0;"function"==typeof i&&(r=i,i=void 0),"function"==typeof n&&(r=n,n=void 0),"undefined"!=typeof t.easing&&(n=t.easing,delete t.easing),"undefined"!=typeof t.duration&&(i=t.duration,delete t.duration),"undefined"!=typeof t.complete&&(r=t.complete,delete t.complete),"undefined"!=typeof t.queue&&(d=t.queue,delete t.queue),"undefined"!=typeof t.delay&&(s=t.delay,delete t.delay),"undefined"==typeof i&&(i=e.fx.speeds._default),"undefined"==typeof n&&(n=e.cssEase._default),i=c(i);var u=l(t,i,n,s),p=e.transit.enabled&&f.transition,h=p?parseInt(i,10)+parseInt(s,10):0;if(0===h){var b=function(e){o.css(t),r&&r.apply(o),e&&e()};return a(o,d,b),o}var g={},m=function(i){var n=!1,a=function(){n&&o.unbind(y,a),h>0&&o.each(function(){this.style[f.transition]=g[this]||null}),"function"==typeof r&&r.apply(o),"function"==typeof i&&i()};h>0&&y&&e.transit.useTransitionEnd?(n=!0,o.bind(y,a)):window.setTimeout(a,h),o.each(function(){h>0&&(this.style[f.transition]=u),e(this).css(t)})},v=function(e){this.offsetWidth,m(e)};return a(o,d,v),this},e.transit.getTransitionValue=l}(jQuery);