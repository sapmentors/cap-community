/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(e){"use strict";function t(e,t){var r=Object.getOwnPropertyDescriptor(e,t);return r&&r.value}
/*!
	 * The following functions are taken from jQuery UI 1.8.17 but modified
	 *
	 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 * http://jquery.org/license
	 *
	 * http://docs.jquery.com/UI
	 */function r(t){var r=e(t).offsetParent();var a=false;var n=e(t).parents().filter(function(){if(this===r){a=true}return a});return!e(t).add(n).filter(function(){return e.css(this,"visibility")==="hidden"||e.expr.filters.hidden(this)}).length}function a(t,a){var n=t.nodeName.toLowerCase();if(n==="area"){var i=t.parentNode,s=i.name,u;if(!t.href||!s||i.nodeName.toLowerCase()!=="map"){return false}u=e("img[usemap='#"+s+"']")[0];return!!u&&r(u)}return(/input|select|textarea|button|object/.test(n)?!t.disabled:n=="a"?t.href||a:a)&&r(t)}if(!t(e.expr[":"],"focusable")){
/*!
		 * The following function is taken from jQuery UI 1.8.17
		 *
		 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
		 * Dual licensed under the MIT or GPL Version 2 licenses.
		 * http://jquery.org/license
		 *
		 * http://docs.jquery.com/UI
		 *
		 * But since visible is modified, focusable is different too the jQuery UI version too.
		 */
e.expr[":"].focusable=function(t){return a(t,!isNaN(e.attr(t,"tabindex")))}}if(!t(e.expr[":"],"sapTabbable")){
/*!
		 * The following function is taken from
		 * jQuery UI Core 1.11.1
		 * http://jqueryui.com
		 *
		 * Copyright 2014 jQuery Foundation and other contributors
		 * Released under the MIT license.
		 * http://jquery.org/license
		 *
		 * http://api.jqueryui.com/category/ui-core/
		 */
e.expr[":"].sapTabbable=function(t){var r=e.attr(t,"tabindex"),n=isNaN(r);return(n||r>=0)&&a(t,!n)}}if(!t(e.expr[":"],"sapFocusable")){e.expr[":"].sapFocusable=function(t){return a(t,!isNaN(e.attr(t,"tabindex")))}}return e});