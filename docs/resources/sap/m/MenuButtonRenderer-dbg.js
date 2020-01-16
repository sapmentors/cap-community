/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([],
	function() {
		"use strict";

		/**
		 * <code>MenuButton</code> renderer.
		 * @namespace
		 */
		var MenuButtonRenderer = {};

		MenuButtonRenderer.CSS_CLASS = "sapMMenuBtn";

		/**
		 * Renders the HTML for the given control, using the provided
		 * {@link sap.ui.core.RenderManager}.
		 *
		 * @param {sap.ui.core.RenderManager} oRm
		 *            The RenderManager that can be used for writing to
		 *            the Render-Output-Buffer
		 * @param {sap.ui.core.Control} oMenuButton
		 *            The MenuButton to be rendered
		 */
		MenuButtonRenderer.render = function(oRm, oMenuButton) {
			var sWidth = oMenuButton.getWidth();

			//write root DOM element
			oRm.write("<div");
			oRm.writeControlData(oMenuButton);

			//classes
			oRm.addClass(MenuButtonRenderer.CSS_CLASS);
			oRm.addClass(MenuButtonRenderer.CSS_CLASS + oMenuButton.getButtonMode());
			oRm.writeClasses();

			// set user defined width
			if (sWidth != "") {
				oRm.addStyle("width", sWidth);
			}
			oRm.writeStyles();

			oRm.write(">");

			oMenuButton._ensureBackwardsReference();
			oRm.renderControl(oMenuButton._getButtonControl());

			oRm.write("</div>");
		};

		return MenuButtonRenderer;

	}, /* bExport= */ true);