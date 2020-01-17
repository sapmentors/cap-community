/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/*global sap */

sap.ui.define([
	"sap/ui/fl/changeHandler/BaseRename"
], function (BaseRename) {
	"use strict";

	return {
		"hideControl": "default",
		"unhideControl": "default",
		"renameField": BaseRename.createRenameChangeHandler({
			propertyName: "label",
			translationTextType: "XFLD",
			changePropertyName: "fieldLabel"
		})
	};
}, /* bExport= */true);