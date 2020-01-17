/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/m/changeHandler/MoveTableColumns",
	"sap/m/changeHandler/AddTableColumn"
], function (MoveTableColumns, AddTableColumn) {
	"use strict";

	return {
		"hideControl": "default",
		"unhideControl": "default",
		"moveTableColumns": MoveTableColumns,
		"addTableColumn": AddTableColumn
	};
}, /* bExport= */ true);