!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/test/",n(n.s=4)}([function(e,t,n){"use strict";function r(){let e=[];for(let t=0;t<256;t++)e.push([t]);return e}function i(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function o(e,t){for(let n=0;n<e.length;n++){if(i(e[n],t))return n}return-1}function u(e,t){return-1!=o(e,t)}n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return u})},function(e,t,n){"use strict";function r(e){return Math.ceil(Math.log2(e))}function i(e,t,n,r){let i=Math.floor(t/8),o=t%8,u=8-o,c=(1<<u+1)-1;r[i]|=(n&c)<<o,r[i+1]|=n>>u}function o(e,t){return function(e,t){let n=e*t.length,r=Math.ceil(n/8),o=new Uint8Array(r),u=0;for(let n of t)i(0,u,n,o),u+=e;return o}(r(e),t)}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},function(e,t,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function r(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0}function i(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var o=n(5),u=Object.prototype.hasOwnProperty,c=Array.prototype.slice,a="foo"===function(){}.name;function l(e){return Object.prototype.toString.call(e)}function s(e){return!i(e)&&("function"==typeof t.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var f=e.exports=h,p=/\s*function\s+([^\(\s]*)\s*/;function b(e){if(o.isFunction(e)){if(a)return e.name;var t=e.toString().match(p);return t&&t[1]}}function y(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function d(e){if(a||!o.isFunction(e))return o.inspect(e);var t=b(e);return"[Function"+(t?": "+t:"")+"]"}function g(e,t,n,r,i){throw new f.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:i})}function h(e,t){e||g(e,!0,t,"==",f.ok)}function m(e,t,n,u){if(e===t)return!0;if(i(e)&&i(t))return 0===r(e,t);if(o.isDate(e)&&o.isDate(t))return e.getTime()===t.getTime();if(o.isRegExp(e)&&o.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(s(e)&&s(t)&&l(e)===l(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(i(e)!==i(t))return!1;var a=(u=u||{actual:[],expected:[]}).actual.indexOf(e);return-1!==a&&a===u.expected.indexOf(t)||(u.actual.push(e),u.expected.push(t),function(e,t,n,r){if(null==e||null==t)return!1;if(o.isPrimitive(e)||o.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var i=O(e),u=O(t);if(i&&!u||!i&&u)return!1;if(i)return e=c.call(e),t=c.call(t),m(e,t,n);var a,l,s=q(e),f=q(t);if(s.length!==f.length)return!1;for(s.sort(),f.sort(),l=s.length-1;l>=0;l--)if(s[l]!==f[l])return!1;for(l=s.length-1;l>=0;l--)if(a=s[l],!m(e[a],t[a],n,r))return!1;return!0}(e,t,n,u))}return n?e===t:e==t}function O(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function j(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function v(e,t,n,r){var i;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),i=function(e){var t;try{e()}catch(e){t=e}return t}(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!i&&g(i,n,"Missing expected exception"+r);var u="string"==typeof r,c=!e&&i&&!n;if((!e&&o.isError(i)&&u&&j(i,n)||c)&&g(i,n,"Got unwanted exception"+r),e&&i&&n&&!j(i,n)||!e&&i)throw i}f.AssertionError=function(e){var t;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=y(d((t=this).actual),128)+" "+t.operator+" "+y(d(t.expected),128),this.generatedMessage=!0);var n=e.stackStartFunction||g;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var r=new Error;if(r.stack){var i=r.stack,o=b(n),u=i.indexOf("\n"+o);if(u>=0){var c=i.indexOf("\n",u+1);i=i.substring(c+1)}this.stack=i}}},o.inherits(f.AssertionError,Error),f.fail=g,f.ok=h,f.equal=function(e,t,n){e!=t&&g(e,t,n,"==",f.equal)},f.notEqual=function(e,t,n){e==t&&g(e,t,n,"!=",f.notEqual)},f.deepEqual=function(e,t,n){m(e,t,!1)||g(e,t,n,"deepEqual",f.deepEqual)},f.deepStrictEqual=function(e,t,n){m(e,t,!0)||g(e,t,n,"deepStrictEqual",f.deepStrictEqual)},f.notDeepEqual=function(e,t,n){m(e,t,!1)&&g(e,t,n,"notDeepEqual",f.notDeepEqual)},f.notDeepStrictEqual=function e(t,n,r){m(t,n,!0)&&g(t,n,r,"notDeepStrictEqual",e)},f.strictEqual=function(e,t,n){e!==t&&g(e,t,n,"===",f.strictEqual)},f.notStrictEqual=function(e,t,n){e===t&&g(e,t,n,"!==",f.notStrictEqual)},f.throws=function(e,t,n){v(!0,e,t,n)},f.doesNotThrow=function(e,t,n){v(!1,e,t,n)},f.ifError=function(e){if(e)throw e};var q=Object.keys||function(e){var t=[];for(var n in e)u.call(e,n)&&t.push(n);return t}}).call(this,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(11),n(9),n(10)},function(e,t,n){(function(e,r){var i=/%[sdj%]/g;t.format=function(e){if(!h(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,o=r.length,u=String(e).replace(i,function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),a=r[n];n<o;a=r[++n])d(a)||!j(a)?u+=" "+a:u+=" "+c(a);return u},t.deprecate=function(n,i){if(m(e.process))return function(){return t.deprecate(n,i).apply(this,arguments)};if(!0===r.noDeprecation)return n;var o=!1;return function(){if(!o){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?console.trace(i):console.error(i),o=!0}return n.apply(this,arguments)}};var o,u={};function c(e,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),y(n)?r.showHidden=n:n&&t._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),s(r,e,r.depth)}function a(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function l(e,t){return e}function s(e,n,r){if(e.customInspect&&n&&w(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return h(i)||(i=s(e,i,r)),i}var o=function(e,t){if(m(t))return e.stylize("undefined","undefined");if(h(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(g(t))return e.stylize(""+t,"number");if(y(t))return e.stylize(""+t,"boolean");if(d(t))return e.stylize("null","null")}(e,n);if(o)return o;var u=Object.keys(n),c=function(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(n)),q(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return f(n);if(0===u.length){if(w(n)){var a=n.name?": "+n.name:"";return e.stylize("[Function"+a+"]","special")}if(O(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(v(n))return e.stylize(Date.prototype.toString.call(n),"date");if(q(n))return f(n)}var l,j="",E=!1,x=["{","}"];(b(n)&&(E=!0,x=["[","]"]),w(n))&&(j=" [Function"+(n.name?": "+n.name:"")+"]");return O(n)&&(j=" "+RegExp.prototype.toString.call(n)),v(n)&&(j=" "+Date.prototype.toUTCString.call(n)),q(n)&&(j=" "+f(n)),0!==u.length||E&&0!=n.length?r<0?O(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),l=E?function(e,t,n,r,i){for(var o=[],u=0,c=t.length;u<c;++u)T(t,String(u))?o.push(p(e,t,n,r,String(u),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(p(e,t,n,r,i,!0))}),o}(e,n,r,c,u):u.map(function(t){return p(e,n,r,c,t,E)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(l,j,x)):x[0]+j+x[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,i,o){var u,c,a;if((a=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?c=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(c=e.stylize("[Setter]","special")),T(r,i)||(u="["+i+"]"),c||(e.seen.indexOf(a.value)<0?(c=d(n)?s(e,a.value,null):s(e,a.value,n-1)).indexOf("\n")>-1&&(c=o?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n")):c=e.stylize("[Circular]","special")),m(u)){if(o&&i.match(/^\d+$/))return c;(u=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+c}function b(e){return Array.isArray(e)}function y(e){return"boolean"==typeof e}function d(e){return null===e}function g(e){return"number"==typeof e}function h(e){return"string"==typeof e}function m(e){return void 0===e}function O(e){return j(e)&&"[object RegExp]"===E(e)}function j(e){return"object"==typeof e&&null!==e}function v(e){return j(e)&&"[object Date]"===E(e)}function q(e){return j(e)&&("[object Error]"===E(e)||e instanceof Error)}function w(e){return"function"==typeof e}function E(e){return Object.prototype.toString.call(e)}function x(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(m(o)&&(o=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!u[e])if(new RegExp("\\b"+e+"\\b","i").test(o)){var n=r.pid;u[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else u[e]=function(){};return u[e]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=b,t.isBoolean=y,t.isNull=d,t.isNullOrUndefined=function(e){return null==e},t.isNumber=g,t.isString=h,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=m,t.isRegExp=O,t.isObject=j,t.isDate=v,t.isError=q,t.isFunction=w,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(7);var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){var e,n;console.log("%s - %s",(e=new Date,n=[x(e.getHours()),x(e.getMinutes()),x(e.getSeconds())].join(":"),[e.getDate(),S[e.getMonth()],n].join(" ")),t.format.apply(t,arguments))},t.inherits=n(8),t._extend=function(e,t){if(!t||!j(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,n(3),n(6))},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var a,l=[],s=!1,f=-1;function p(){s&&a&&(s=!1,a.length?l=a.concat(l):f=-1,l.length&&b())}function b(){if(!s){var e=c(p);s=!0;for(var t=l.length;t;){for(a=l,l=[];++f<t;)a&&a[f].run();f=-1,t=l.length}a=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function d(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new y(e,t)),1!==l.length||s||c(b)},y.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){"use strict";n.r(t);var r=n(0);const i=n(2);describe("LZW Dictionary",()=>{describe("initDictionary",()=>{it("ensures the dictionary initializes correctly",()=>{let e=Object(r.c)();i.deepEqual(e,[[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10],[11],[12],[13],[14],[15],[16],[17],[18],[19],[20],[21],[22],[23],[24],[25],[26],[27],[28],[29],[30],[31],[32],[33],[34],[35],[36],[37],[38],[39],[40],[41],[42],[43],[44],[45],[46],[47],[48],[49],[50],[51],[52],[53],[54],[55],[56],[57],[58],[59],[60],[61],[62],[63],[64],[65],[66],[67],[68],[69],[70],[71],[72],[73],[74],[75],[76],[77],[78],[79],[80],[81],[82],[83],[84],[85],[86],[87],[88],[89],[90],[91],[92],[93],[94],[95],[96],[97],[98],[99],[100],[101],[102],[103],[104],[105],[106],[107],[108],[109],[110],[111],[112],[113],[114],[115],[116],[117],[118],[119],[120],[121],[122],[123],[124],[125],[126],[127],[128],[129],[130],[131],[132],[133],[134],[135],[136],[137],[138],[139],[140],[141],[142],[143],[144],[145],[146],[147],[148],[149],[150],[151],[152],[153],[154],[155],[156],[157],[158],[159],[160],[161],[162],[163],[164],[165],[166],[167],[168],[169],[170],[171],[172],[173],[174],[175],[176],[177],[178],[179],[180],[181],[182],[183],[184],[185],[186],[187],[188],[189],[190],[191],[192],[193],[194],[195],[196],[197],[198],[199],[200],[201],[202],[203],[204],[205],[206],[207],[208],[209],[210],[211],[212],[213],[214],[215],[216],[217],[218],[219],[220],[221],[222],[223],[224],[225],[226],[227],[228],[229],[230],[231],[232],[233],[234],[235],[236],[237],[238],[239],[240],[241],[242],[243],[244],[245],[246],[247],[248],[249],[250],[251],[252],[253],[254],[255]])})}),describe("arrayEquals",()=>{it("empty array",()=>{i.equal(Object(r.a)([],[]),!0)}),it("unequal length",()=>{i.equal(Object(r.a)([],[1]),!1),i.equal(Object(r.a)([],[1,2]),!1),i.equal(Object(r.a)([26,22],[]),!1),i.equal(Object(r.a)([63,46,2,17,1e3,9],[2,74]),!1)}),it("singletons",()=>{i.equal(Object(r.a)([1],[1]),!0),i.equal(Object(r.a)([62],[62]),!0),i.equal(Object(r.a)([999],[999]),!0),i.equal(Object(r.a)([162],[1]),!1),i.equal(Object(r.a)([0],[1]),!1),i.equal(Object(r.a)([37],[99]),!1)}),it("unequal multiple elements",()=>{i.equal(Object(r.a)([1,2,3],[1,2,4]),!1),i.equal(Object(r.a)([67,92,11],[67,11,92]),!1),i.equal(Object(r.a)([0,782],[23,66]),!1),i.equal(Object(r.a)([0,61,3,164,87],[1,61,3,164,87]),!1),i.equal(Object(r.a)([9,13,44,6],[9,12,44,6]),!1),i.equal(Object(r.a)([255,0],[0,255]),!1)}),it("equal multiple elements",()=>{i.equal(Object(r.a)([1,2,3],[1,2,3]),!0),i.equal(Object(r.a)([67,92,11],[67,92,11]),!0),i.equal(Object(r.a)([0,782],[0,782]),!0),i.equal(Object(r.a)([0,61,3,164,87],[0,61,3,164,87]),!0),i.equal(Object(r.a)([9,13,44,6],[9,13,44,6]),!0),i.equal(Object(r.a)([169,1],[169,1]),!0)})}),describe("dictIndexOf",()=>{it("singleton elements",()=>{let e=Object(r.c)();for(let t=0;t<e.length;t++)i.equal(Object(r.b)(e,e[t]),t)}),it("multiple elements",()=>{let e=Object(r.c)();e.push([1,3]),e.push([1,3,5,68,256]),e.push([257,102,59]),i.equal(Object(r.b)(e,[1,3]),256),i.equal(Object(r.b)(e,[1,3,5,68,256]),257),i.equal(Object(r.b)(e,[257,102,59]),258)}),it("non-existant elements",()=>{let e=Object(r.c)();e.push([1,2,3,4,5,6]),e.push([0,78,99,256]),e.push([256,255,0]),e.push([253,252,99]),e.push([251,252]),i.equal(Object(r.b)(e,[3,4]),-1),i.equal(Object(r.b)(e,[257]),-1),i.equal(Object(r.b)(e,[]),-1),i.equal(Object(r.b)(e,[251,252,253]),-1)})}),describe("isInDictionary",()=>{it("singleton elements",()=>{let e=Object(r.c)();for(let t=0;t<e.length;t++)i.equal(Object(r.d)(e,e[t]),!0)}),it("multiple elements",()=>{let e=Object(r.c)();e.push([79,64]),e.push([69,73,11,233]),e.push([199,257,48]),i.equal(Object(r.d)(e,[79,64]),!0),i.equal(Object(r.d)(e,[69,73,11,233]),!0),i.equal(Object(r.d)(e,[199,257,48]),!0)}),it("non-existant elements",()=>{let e=Object(r.c)();e.push([1,2,3,4,5,6]),e.push([0,78,99,256]),e.push([256,255,0]),e.push([253,252,99]),e.push([251,252]),i.equal(Object(r.d)(e,[3,4]),!1),i.equal(Object(r.d)(e,[257]),!1),i.equal(Object(r.d)(e,[]),!1),i.equal(Object(r.d)(e,[251,252,253]),!1)})})})},function(e,t,n){"use strict";n.r(t);var r=n(1);const i=n(2);describe("LZW Elements To Bytes",()=>{describe("getBitsPerElement()",()=>{it("starting singleton dictionary",()=>{i.equal(Object(r.a)(256),8)})})})},function(e,t,n){"use strict";n.r(t);n(0),n(1);const r=n(2);describe("TinyWriteStream",()=>{describe("#write()",()=>{it("should be true, dummy test",()=>{r.equal(1,1)})})})}]);