/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/ui/core/Renderer', './InputBaseRenderer'], function(Renderer, InputBaseRenderer) {
	"use strict";

	/**
	 * DateTimeFieldRenderer renderer.
	 * @namespace
	 */
	var DateTimeFieldRenderer = Renderer.extend(InputBaseRenderer);
	DateTimeFieldRenderer.apiVersion = 2;

	return DateTimeFieldRenderer;

}, /* bExport= */ true);
