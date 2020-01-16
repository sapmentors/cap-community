/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/Device"],function(i,e){"use strict";var r,s;if(!String.prototype.normalize&&!e.browser.mobile){s=sap.ui.requireSync("sap/base/strings/NormalizePolyfill");s.apply();r=s.isStringNFC}else{r=function(i){return i.normalize("NFC")===i}}i.sap.isStringNFC=r;return i});