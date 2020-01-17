/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/m/changeHandler/ChangeLinkTarget"
], function (ChangeLinkTarget) {
	"use strict";

	return {
		"hideControl": "default",
		"unhideControl": "default",
		"changeLinkTarget": {
			"changeHandler": ChangeLinkTarget,
			"layers": {
				"CUSTOMER": false
			}
		}
	};
});