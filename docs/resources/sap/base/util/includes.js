/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/values"],function(e){"use strict";function n(e,n){return e===n||e!==e&&n!==n}var r=function(t,u,i){if(typeof i!=="number"){i=0}if(Array.isArray(t)){if(typeof t.includes==="function"){return t.includes(u,i)}i=i<0?i+t.length:i;i=i<0?0:i;for(var f=i;f<t.length;f++){if(n(t[f],u)){return true}}return false}else if(typeof t==="string"){i=i<0?t.length+i:i;if(typeof t.includes==="function"){return t.includes(u,i)}return t.indexOf(u,i)!==-1}else{return r(e(t),u,i)}};return r});