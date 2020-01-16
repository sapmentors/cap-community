/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/base/util/uid","sap/base/strings/hash","sap/base/util/array/uniqueSort","sap/base/util/deepEqual","sap/base/util/each","sap/base/util/array/diff","sap/base/util/JSTokenizer","sap/base/util/merge","sap/base/util/UriParameters"],function(e,r,a,t,n,i,o,s,l,f){"use strict";e.sap.uid=r;e.sap.hashCode=a;e.sap.unique=t;e.sap.equal=n;e.sap.each=i;e.sap.arraySymbolDiff=o;e.sap._createJSTokenizer=function(){return new s};e.sap.parseJS=s.parseJS;e.sap.extend=function(){var e=arguments,r=false;if(typeof arguments[0]==="boolean"){r=arguments[0];e=Array.prototype.slice.call(arguments,1)}if(r){return l.apply(this,e)}else{
/*
			 * The code in this function is taken from jQuery 2.2.3 "jQuery.extend" and got modified.
			 *
			 * jQuery JavaScript Library v2.2.3
			 * http://jquery.com/
			 *
			 * Copyright jQuery Foundation and other contributors
			 * Released under the MIT license
			 * http://jquery.org/license
			 */
var a,t,n,i=arguments[0]||{},o=1,s=arguments.length;if(typeof i!=="object"&&typeof i!=="function"){i={}}for(;o<s;o++){n=arguments[o];for(t in n){a=n[t];if(i===a){continue}i[t]=a}}return i}};e.sap.getUriParameters=function e(r){return f.fromURL(r||window.location.href)};e.sap.delayedCall=function r(a,t,n,i){return setTimeout(function(){if(e.type(n)=="string"){n=t[n]}n.apply(t,i||[])},a)};e.sap.clearDelayedCall=function e(r){clearTimeout(r);return this};e.sap.intervalCall=function r(a,t,n,i){return setInterval(function(){if(e.type(n)=="string"){n=t[n]}n.apply(t,i||[])},a)};e.sap.clearIntervalCall=function e(r){clearInterval(r);return this};e.sap.forIn=i;e.sap.arrayDiff=function(e,r,a,t){a=a||function(e,r){return n(e,r)};var i=[];var o=[];var s=[];for(var l=0;l<r.length;l++){var f=r[l];var p=0;var u;if(t&&a(e[l],f)){p=1;u=l}else{for(var d=0;d<e.length;d++){if(a(e[d],f)){p++;u=d;if(t||p>1){break}}}}if(p==1){var w={oldIndex:u,newIndex:l};if(s[u]){delete i[u];delete o[s[u].newIndex]}else{o[l]={data:r[l],row:u};i[u]={data:e[u],row:l};s[u]=w}}}for(var l=0;l<r.length-1;l++){if(o[l]&&!o[l+1]&&o[l].row+1<e.length&&!i[o[l].row+1]&&a(e[o[l].row+1],r[l+1])){o[l+1]={data:r[l+1],row:o[l].row+1};i[o[l].row+1]={data:i[o[l].row+1],row:l+1}}}for(var l=r.length-1;l>0;l--){if(o[l]&&!o[l-1]&&o[l].row>0&&!i[o[l].row-1]&&a(e[o[l].row-1],r[l-1])){o[l-1]={data:r[l-1],row:o[l].row-1};i[o[l].row-1]={data:i[o[l].row-1],row:l-1}}}var c=[];if(r.length==0){for(var l=0;l<e.length;l++){c.push({index:0,type:"delete"})}}else{var h=0;if(!i[0]){for(var l=0;l<e.length&&!i[l];l++){c.push({index:0,type:"delete"});h=l+1}}for(var l=0;l<r.length;l++){if(!o[l]||o[l].row>h){c.push({index:l,type:"insert"})}else{h=o[l].row+1;for(var d=o[l].row+1;d<e.length&&(!i[d]||i[d].row<l);d++){c.push({index:l+1,type:"delete"});h=d+1}}}}return c};return e});