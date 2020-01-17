/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(e){"use strict";function n(e,n){var t=Object.getOwnPropertyDescriptor(e,n);return t&&t.value}if(!n(e.fn,"zIndex")){var t=function(n){if(n!==undefined){return this.css("zIndex",n)}if(this.length){var t=e(this[0]),i,r;while(t.length&&t[0]!==document){i=t.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){r=parseInt(t.css("zIndex"));if(!isNaN(r)&&r!==0){return r}}t=t.parent()}}return 0};
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
		 */e.fn.zIndex=t}return e});