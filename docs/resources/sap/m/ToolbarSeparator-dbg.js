/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.m.ToolbarSeparator.
sap.ui.define(['./library', 'sap/ui/core/Control', './ToolbarSeparatorRenderer'],
	function(library, Control, ToolbarSeparatorRenderer) {
	"use strict";



	/**
	 * Constructor for a new <code>ToolbarSeparator</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @class
	 * Creates a visual separator (theme dependent: padding, margin, line) between the
	 * preceding and succeeding {@link sap.m.Toolbar} item.
	 * @extends sap.ui.core.Control
	 *
	 * @author SAP SE
	 * @version 1.73.2
	 *
	 * @constructor
	 * @public
	 * @since 1.26
	 * @alias sap.m.ToolbarSeparator
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var ToolbarSeparator = Control.extend("sap.m.ToolbarSeparator", /** @lends sap.m.ToolbarSeparator.prototype */ { metadata : {

		library : "sap.m",
		interfaces : [
			"sap.m.IOverflowToolbarContent"
		]

	}});

	/**
	 * Classname to be used, when the control is inside <code>OverflowToolbar</code>.
	 * @since 1.65
	 */

	ToolbarSeparator.CLASSNAME_OVERFLOW_TOOLBAR = "sapMTBSeparatorOverflowToolbar";

	/**
	 * @private used for OverflowToolbar functionality
	 */

	ToolbarSeparator.prototype._onBeforeEnterOverflow = function(oControl) {
		oControl.addStyleClass(ToolbarSeparator.CLASSNAME_OVERFLOW_TOOLBAR);
	};

	/**
	 * @private used for OverflowToolbar functionality
	 */

	ToolbarSeparator.prototype._onAfterExitOverflow = function(oControl) {
		oControl.removeStyleClass(ToolbarSeparator.CLASSNAME_OVERFLOW_TOOLBAR);
	};

	/**
	 * Sets the behavior of the <code>ToolbarSeparator</code> inside an <code>OverflowToolbar</code> configuration.
	 *
	 * @public
	 * @returns {object} Configuration information for the <code>sap.m.IOverflowToolbarContent</code> interface.
	 * @since 1.65
	 */

	ToolbarSeparator.prototype.getOverflowToolbarConfig = function() {
		var oConfig = {
			canOverflow: true
		};

		oConfig.onBeforeEnterOverflow = this._onBeforeEnterOverflow;

		oConfig.onAfterExitOverflow = this._onAfterExitOverflow;

		return oConfig;
	};

	return ToolbarSeparator;

});
