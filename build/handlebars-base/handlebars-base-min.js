YUI.add("handlebars-base",function(e,t){
/*!
Handlebars.js - Copyright (C) 2011 Yehuda Katz
https://raw.github.com/wycats/handlebars.js/master/LICENSE
*/
;var n={};(function(e){e.VERSION="1.0.rc.2",e.helpers={},e.partials={},e.registerHelper=function(e,t,n){n&&(t.not=n),this.helpers[e]=t},e.registerPartial=function(e,t){this.partials[e]=t},e.registerHelper("helperMissing",function(e){if(arguments.length===2)return undefined;throw new Error("Could not find property '"+e+"'")});var t=Object.prototype.toString,n="[object Function]";e.registerHelper("blockHelperMissing",function(r,i){var s=i.inverse||function(){},o=i.fn,u="",a=t.call(r);return a===n&&(r=r.call(this)),r===!0?o(this):r===!1||r==null?s(this):a==="[object Array]"?r.length>0?e.helpers.each(r,i):s(this):o(r)}),e.K=function(){},e.createFrame=Object.create||function(t){e.K.prototype=t;var n=new e.K;return e.K.prototype=null,n},e.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,methodMap:{0:"debug",1:"info",2:"warn",3:"error"},log:function(t,n){if(e.logger.level<=t){var r=e.logger.methodMap[t];typeof console!="undefined"&&console[r]&&console[r].call(console,n)}}},e.log=function(t,n){e.logger.log(t,n)},e.registerHelper("each",function(t,n){var r=n.fn,i=n.inverse,s=0,o="",u;n.data&&(u=e.createFrame(n.data));if(t&&typeof t=="object")if(t instanceof Array)for(var a=t.length;s<a;s++)u&&(u.index=s),o+=r(t[s],{data:u});else for(var f in t)t.hasOwnProperty(f)&&(u&&(u.key=f),o+=r(t[f],{data:u}),s++);return s===0&&(o=i(this)),o}),e.registerHelper("if",function(r,i){var s=t.call(r);return s===n&&(r=r.call(this)),!r||e.Utils.isEmpty(r)?i.inverse(this):i.fn(this)}),e.registerHelper("unless",function(t,n){var r=n.fn,i=n.inverse;return n.fn=i,n.inverse=r,e.helpers["if"].call(this,t,n)}),e.registerHelper("with",function(e,t){return t.fn(e)}),e.registerHelper("log",function(t,n){var r=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;e.log(r,t)})})(n);var r=["description","fileName","lineNumber","message","name","number","stack"];n.Exception=function(e){var t=Error.prototype.constructor.apply(this,arguments);for(var n=0;n<r.length;n++)this[r[n]]=t[r[n]]},n.Exception.prototype=new Error,n.SafeString=function(e){this.string=e},n.SafeString.prototype.toString=function(){return this.string.toString()},function(){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},t=/[&<>"'`]/g,r=/[&<>"'`]/,i=function(t){return e[t]||"&amp;"};n.Utils={escapeExpression:function(e){return e instanceof n.SafeString?e.toString():e==null||e===!1?"":r.test(e)?e.replace(t,i):e},isEmpty:function(e){return!e&&e!==0?!0:Object.prototype.toString.call(e)==="[object Array]"&&e.length===0?!0:!1}}}(),n.VM={template:function(e){var t={escapeExpression:n.Utils.escapeExpression,invokePartial:n.VM.invokePartial,programs:[],program:function(e,t,r){var i=this.programs[e];return r?n.VM.program(t,r):i?i:(i=this.programs[e]=n.VM.program(t),i)},programWithDepth:n.VM.programWithDepth,noop:n.VM.noop};return function(r,i){return i=i||{},e.call(t,n,r,i.helpers,i.partials,i.data)}},programWithDepth:function(e,t,n){var r=Array.prototype.slice.call(arguments,2);return function(n,i){return i=i||{},e.apply(this,[n,i.data||t].concat(r))}},program:function(e,t){return function(n,r){return r=r||{},e(n,r.data||t)}},noop:function(){return""},invokePartial:function(e,t,r,i,s,o){var u={helpers:i,partials:s,data:o};if(e===undefined)throw new n.Exception("The partial "+t+" could not be found");if(e instanceof Function)return e(r,u);if(!n.compile)throw new n.Exception("The partial "+t+" could not be compiled when running in runtime-only mode");return s[t]=n.compile(e,{data:o!==undefined}),s[t](r,u)}},n.template=n.VM.template,e.Handlebars=n,n.VERSION+="-yui",n.revive=n.template,e.namespace("Template").Handlebars=n},"@VERSION@",{requires:[]});
