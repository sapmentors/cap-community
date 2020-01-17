/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/ui/core/Renderer', './ToolbarRenderer', "sap/m/BarInPageEnabler"],
	function(Renderer, ToolbarRenderer, BarInPageEnabler) {
		"use strict";


		/**
		 * OverflowToolbar renderer.
		 * @namespace
		 */
		var OverflowToolbarRenderer = Renderer.extend(ToolbarRenderer);

		OverflowToolbarRenderer.renderBarContent = function(rm, oToolbar) {

			oToolbar._getVisibleContent().forEach(function(oControl) {
				BarInPageEnabler.addChildClassTo(oControl,oToolbar);
				rm.renderControl(oControl);
			});

			if (oToolbar._getOverflowButtonNeeded()) {
				OverflowToolbarRenderer.renderOverflowButton(rm,oToolbar);
			}
		};

		OverflowToolbarRenderer.renderOverflowButton = function(rm,oToolbar) {
			var oOverflowButton = oToolbar._getOverflowButton();
			BarInPageEnabler.addChildClassTo(oOverflowButton,oToolbar);
			rm.renderControl(oOverflowButton);
		};

		return OverflowToolbarRenderer;

	}, /* bExport= */ true);
