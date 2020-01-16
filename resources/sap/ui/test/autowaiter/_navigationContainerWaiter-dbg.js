/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/core/Element",
	"sap/ui/test/_OpaLogger"
], function(Element, _OpaLogger) {
	"use strict";

	var oHasPendingLogger = _OpaLogger.getLogger("sap.ui.test.autowaiter._navigationContainerWaiter#hasPending");

	function hasNavigatingNavContainers () {

		var fnNavContainer = sap.ui.require("sap/m/NavContainer");
		// no Nav container has been loaded - continue
		if (!fnNavContainer) {
			return false;
		}
		// instanceof filter
		function isNavContainer(oControl) {
			return oControl instanceof fnNavContainer;
		}

		return Element.registry.filter(isNavContainer).some(function (oNavContainer) {
			if (oNavContainer._bNavigating) {
				oHasPendingLogger.debug("The NavContainer " + oNavContainer + " is currently navigating");
			}

			return oNavContainer._bNavigating;
		});
	}

	return {
		hasPending: hasNavigatingNavContainers
	};
});
