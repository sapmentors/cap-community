/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/thirdparty/jquery"],function(r,e){"use strict";var i=function(){var e=this.get(0);if(e){if(r.browser.msie){return e.scrollLeft}else if(r.browser.firefox||r.browser.safari&&r.browser.version>=10){return-e.scrollLeft}else if(r.browser.webkit){return e.scrollWidth-e.scrollLeft-e.clientWidth}else{return e.scrollLeft}}};e.fn.scrollRightRTL=i;return e});