/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(['sap/m/semantic/SemanticButton'], function(SemanticButton) {
	"use strict";

	/**
	 * Constructor for a new SaveAction.
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Custom initial settings for the new control
	 *
	 * @class
	 * A SaveAction button has default semantic-specific properties and is
	 * eligible for aggregation content of a {@link sap.m.semantic.SemanticPage}.
	 *
	 * @extends sap.m.semantic.SemanticButton
	 *
	 * @author SAP SE
	 * @version 1.73.2
	 *
	 * @constructor
	 * @public
	 * @since 1.30.0
	 * @alias sap.m.semantic.SaveAction
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */

	var SaveAction = SemanticButton.extend("sap.m.semantic.SaveAction", /** @lends sap.m.semantic.SaveAction.prototype */ {
		metadata: {
			library: "sap.m"
		}
	});

	return SaveAction;

});
