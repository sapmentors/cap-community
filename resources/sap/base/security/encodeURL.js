/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/strings/toHex"],function(e){"use strict";var r=/[\x00-\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\uffff]/g,f={};var a=function(r){var a=f[r];if(!a){var n=r.charCodeAt(0);if(n<128){a="%"+e(n,2)}else if(n<2048){a="%"+e(n>>6|192,2)+"%"+e(n&63|128,2)}else{a="%"+e(n>>12|224,2)+"%"+e(n>>6&63|128,2)+"%"+e(n&63|128,2)}f[r]=a}return a};var n=function(e){return e.replace(r,a)};return n});