/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],function(e){"use strict";var r=function(r,i){if(i){if(e.browser.msie||e.browser.edge){return i.scrollWidth-i.clientWidth-r}else if(e.browser.firefox||e.browser.safari&&e.browser.version>=10){return i.clientWidth+r-i.scrollWidth}else if(e.browser.webkit){return r}else{return r}}};return r});