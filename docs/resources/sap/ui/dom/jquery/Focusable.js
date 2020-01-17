/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/dom/jquery/hasTabIndex","sap/ui/dom/isHidden"],function(i,e,n){"use strict";function r(e,t){var u=t?e.firstChild:e.lastChild,s;while(u){if(u.nodeType==1&&!n(u)){if(i(u).hasTabIndex()){return u}s=r(u,t);if(s){return s}}u=t?u.nextSibling:u.previousSibling}return null}i.fn.firstFocusableDomRef=function(){var i=this.get(0);if(!i||n(i)){return null}return r(i,true)};i.fn.lastFocusableDomRef=function(){var i=this.get(0);if(!i||n(i)){return null}return r(i,false)};return i});