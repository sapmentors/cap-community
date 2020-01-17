/** @license
 * String.prototype.startsWith <https://github.com/mathiasbynens/String.prototype.startsWith>
 * MIT License
 * @author Mathias Bynens
 * @version v0.2.0
 */
if(!String.prototype.startsWith){(function(){"use strict";var t={}.toString;var r=function(r){if(this==null){throw TypeError()}var e=String(this);if(r&&t.call(r)=="[object RegExp]"){throw TypeError()}var i=e.length;var n=String(r);var a=n.length;var o=arguments.length>1?arguments[1]:undefined;var f=o?Number(o):0;if(f!=f){f=0}var u=Math.min(Math.max(f,0),i);if(a+u>i){return false}var l=-1;while(++l<a){if(e.charCodeAt(u+l)!=n.charCodeAt(l)){return false}}return true};Object.defineProperty(String.prototype,"startsWith",{value:r,configurable:true,writable:true})})()}
/** @license
 * String.prototype.endsWith <https://github.com/mathiasbynens/String.prototype.endsWith>
 * MIT License
 * @author Mathias Bynens
 * @version v0.2.0
 */if(!String.prototype.endsWith){(function(){"use strict";var t={}.toString;var r=function(r){if(this==null){throw TypeError()}var e=String(this);if(r&&t.call(r)=="[object RegExp]"){throw TypeError()}var i=e.length;var n=String(r);var a=n.length;var o=i;if(arguments.length>1){var f=arguments[1];if(f!==undefined){o=f?Number(f):0;if(o!=o){o=0}}}var u=Math.min(Math.max(o,0),i);var l=u-a;if(l<0){return false}var h=-1;while(++h<a){if(e.charCodeAt(l+h)!=n.charCodeAt(h)){return false}}return true};Object.defineProperty(String.prototype,"endsWith",{value:r,configurable:true,writable:true})})()}
/** @license
 * String.prototype.includes <https://github.com/mathiasbynens/String.prototype.includes>
 * MIT License
 * @author Mathias Bynens
 * @version v1.0.0
 */if(!String.prototype.includes){(function(){"use strict";var t={}.toString;var r="".indexOf;var e=function(e){if(this==null){throw TypeError()}var i=String(this);if(e&&t.call(e)=="[object RegExp]"){throw TypeError()}var n=i.length;var a=String(e);var o=a.length;var f=arguments.length>1?arguments[1]:undefined;var u=f?Number(f):0;if(u!=u){u=0}var l=Math.min(Math.max(u,0),n);if(o+l>n){return false}return r.call(i,a,u)!=-1};Object.defineProperty(String.prototype,"includes",{value:e,configurable:true,writable:true})})()}
/** @license
 * String.prototype.repeat <https://github.com/mathiasbynens/String.prototype.repeat>
 * MIT License
 * @author Mathias Bynens
 * @version v0.2.0
 */if(!String.prototype.repeat){(function(){"use strict";var t=function(t){if(this==null){throw TypeError()}var r=String(this);var e=t?Number(t):0;if(e!=e){e=0}if(e<0||e==Infinity){throw RangeError()}var i="";while(e){if(e%2==1){i+=r}if(e>1){r+=r}e>>=1}return i};Object.defineProperty(String.prototype,"repeat",{value:t,configurable:true,writable:true})})()}
/** @license
 * String.prototype.padStart <https://github.com/uxitten/polyfill>
 * MIT License
 * @author Behnam Mohammadi
 * @version v1.0.1
 */if(!String.prototype.padStart){String.prototype.padStart=function t(r,e){r=r>>0;e=String(typeof e!=="undefined"?e:" ");if(this.length>r){return String(this)}else{r=r-this.length;if(r>e.length){e+=e.repeat(r/e.length)}return e.slice(0,r)+String(this)}}}
/** @license
 * String.prototype.padEnd <https://github.com/uxitten/polyfill>
 * MIT License
 * @author Behnam Mohammadi
 * @version v1.0.1
 */if(!String.prototype.padEnd){String.prototype.padEnd=function t(r,e){r=r>>0;e=String(typeof e!=="undefined"?e:" ");if(this.length>r){return String(this)}else{r=r-this.length;if(r>e.length){e+=e.repeat(r/e.length)}return String(this)+e.slice(0,r)}}}