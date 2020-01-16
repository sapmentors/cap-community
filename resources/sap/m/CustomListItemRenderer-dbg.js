/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(["./ListItemBaseRenderer", "sap/ui/core/Renderer"],
	function(ListItemBaseRenderer, Renderer) {
	"use strict";


	/**
	 * CustomListItem renderer.
	 * @namespace
	 */
	var CustomListItemRenderer = Renderer.extend(ListItemBaseRenderer);
	CustomListItemRenderer.apiVersion = 2;

	/**
	 * Renders the HTML for the given control, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager}
	 *            oRenderManager the RenderManager that can be used for writing to
	 *            the Render-Output-Buffer
	 * @param {sap.ui.core.Control}
	 *            oControl an object representation of the control that should be
	 *            rendered
	 */
	CustomListItemRenderer.renderLIAttributes = function(rm, oLI) {
		rm.class("sapMCLI");
	};

	CustomListItemRenderer.renderLIContent = function(rm, oLI) {
		oLI.getContent().forEach(rm.renderControl, rm);
	};

	return CustomListItemRenderer;

}, /* bExport= */ true);
