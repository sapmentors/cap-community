/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/URI","sap/ui/thirdparty/jquery"],function(r,t){"use strict";var a=(new r).search(true);var e=["false",undefined].indexOf(a.opaFrameIEStackTrace)<0;function n(){var r=new Error;var t="No stack trace available";if(r.stack){t=r.stack}else if(e){try{throw r}catch(r){t=r.stack}}return t.replace(/^Error\s/,"")}function i(r){return r.toString().replace(/\"/g,"'")}function c(r){try{return Array.prototype.map.call(r,a).join("; ")}catch(t){return"'"+r+"'"}function a(r){if(t.isFunction(r)){return"'"+i(r)+"'"}if(t.isArray(r)){var e=Array.prototype.map.call(r,a);return"["+e.join(", ")+"]"}if(t.isPlainObject(r)){return JSON.stringify(r)}return"'"+r.toString()+"'"}}return{resolveStackTrace:n,functionToString:i,argumentsToString:c}},true);