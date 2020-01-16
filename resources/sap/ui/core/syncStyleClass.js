/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/base/Object","sap/base/assert"],function(e,s,t,r){"use strict";var a=function(r,a,o){if(!r){return o}if(s.isA(a,"sap.ui.core.Control")){a=a.$()}else if(typeof a==="string"){a=e(document.getElementById(a))}else if(!(a instanceof e)){t(false,"sap/ui/core/syncStyleClass(): vSource must be a jQuery object or a Control or a string");return o}var i=!!a.closest("."+r).length;if(o instanceof e){o.toggleClass(r,i)}else if(s.isA(o,"sap.ui.core.Control")){o.toggleStyleClass(r,i)}else{t(false,"sap/ui/core/syncStyleClass(): vDestination must be a jQuery object or a Control")}return o};return a});