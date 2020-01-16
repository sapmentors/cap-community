/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/dom/containsOrEquals","sap/ui/core/syncStyleClass","sap/ui/dom/getOwnerWindow","sap/ui/dom/getScrollbarSize","sap/ui/dom/denormalizeScrollLeftRTL","sap/ui/dom/denormalizeScrollBeginRTL","sap/ui/dom/units/Rem","sap/ui/dom/jquery/Aria","sap/ui/dom/jquery/Selection","sap/ui/dom/jquery/zIndex","sap/ui/dom/jquery/parentByAttribute","sap/ui/dom/jquery/cursorPos","sap/ui/dom/jquery/selectText","sap/ui/dom/jquery/getSelectedText","sap/ui/dom/jquery/rect","sap/ui/dom/jquery/rectContains","sap/ui/dom/jquery/Focusable","sap/ui/dom/jquery/hasTabIndex","sap/ui/dom/jquery/scrollLeftRTL","sap/ui/dom/jquery/scrollRightRTL","sap/ui/dom/jquery/Selectors"],function(e,r,o,u,s,t,a,i){"use strict";e.sap.domById=function e(r,o){return r?(o||window).document.getElementById(r):null};e.sap.byId=function r(o,u){var s="";if(o){s="#"+o.replace(/(:|\.)/g,"\\$1")}return e(s,u)};e.sap.focus=function e(r){if(!r){return}r.focus();return true};e.sap.pxToRem=i.fromPx;e.sap.remToPx=i.toPx;e.fn.outerHTML=function(){var r=this.get(0);if(r&&r.outerHTML){return e.trim(r.outerHTML)}else{var o=this[0]?this[0].ownerDocument:document;var u=o.createElement("div");u.appendChild(r.cloneNode(true));return u.innerHTML}};e.sap.containsOrEquals=r;e.sap.denormalizeScrollLeftRTL=t;e.sap.denormalizeScrollBeginRTL=a;
/*
	 * The following methods are taken from jQuery UI core but modified.
	 *
	 * jQuery UI Core
	 * http://jqueryui.com
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * http://api.jqueryui.com/category/ui-core/
	 */e.support.selectstart="onselectstart"in document.createElement("div");e.sap.ownerWindow=u;e.sap.scrollbarSize=s;e.sap.syncStyleClass=o;return e});