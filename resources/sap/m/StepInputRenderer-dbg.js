/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([], function () {
	"use strict";

	/**
	 * <code>StepInput renderer</code>
	 * @namespace
	 */
	var StepInputRenderer = {
		apiVersion: 2
	};

	StepInputRenderer.render = function (oRm, oControl) {
		var oInput = oControl._getInput(),
			sWidth = oControl.getWidth(),
			bEnabled = oControl.getEnabled(),
			bEditable = oControl.getEditable(),
			sValueState = oControl.getValueState();

		oRm.openStart("div", oControl);
		if (bEnabled && bEditable) {
			oRm.attr("tabindex", "-1");
		}

		oRm.style("width", sWidth);
		oRm.class("sapMStepInput");
		oRm.class("sapMStepInput-CTX");
		!bEnabled && oRm.class("sapMStepInputReadOnly");
		!bEditable && oRm.class("sapMStepInputNotEditable");
		if (sValueState === "Error" || sValueState === "Warning") {
			oRm.class("sapMStepInput" + sValueState);
		}
		oRm.openEnd();

		oRm.renderControl(oInput);

		oRm.close("div");
	};

	return StepInputRenderer;

}, /* bExport= */ true);