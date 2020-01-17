/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/dom/denormalizeScrollLeftRTL","sap/ui/thirdparty/jquery"],function(e,r,i){"use strict";var s=function(i){var s=this.get(0);if(s){if(i===undefined){if(e.browser.msie||e.browser.edge){return s.scrollWidth-s.scrollLeft-s.clientWidth}else if(e.browser.firefox||e.browser.safari&&e.browser.version>=10){return s.scrollWidth+s.scrollLeft-s.clientWidth}else if(e.browser.webkit){return s.scrollLeft}else{return s.scrollLeft}}else{s.scrollLeft=r(i,s);return this}}};i.fn.scrollLeftRTL=s;return i});