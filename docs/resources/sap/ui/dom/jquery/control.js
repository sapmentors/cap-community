/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/Global"],function(t){"use strict";t.fn.control=function(a,i){var r=this.map(function(){var a;if(i){var r=t(this).closest("[data-sap-ui],[data-sap-ui-related]");a=r.attr("data-sap-ui-related")||r.attr("id")}else{a=t(this).closest("[data-sap-ui]").attr("id")}return sap.ui.getCore().byId(a)});return r.get(a)};return t});