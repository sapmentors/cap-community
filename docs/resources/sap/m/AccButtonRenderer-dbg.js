/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['./ButtonRenderer', 'sap/ui/core/Renderer'],
	function(ButtonRenderer, Renderer) {
		"use strict";

	var AccButtonRenderer = Renderer.extend(ButtonRenderer);

	AccButtonRenderer.renderAccessibilityAttributes = function(oRm, oControl) {
		if (oControl.getTabIndex()) {
			oRm.writeAttribute("tabindex", oControl.getTabIndex());
		}
		if (oControl.getAriaHidden()){
			oRm.writeAttribute("aria-hidden", oControl.getAriaHidden());
		}
		if (oControl.getAriaHaspopup()) {
			oRm.writeAttribute("aria-haspopup", oControl.getAriaHaspopup());
		}
	};

	return AccButtonRenderer;
}, /* bExport= */ true);