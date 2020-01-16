/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([], function() {
	"use strict";
	/**
	 * Validates if the given object is empty.
	 *
	 * @example
	 * sap.ui.require(["sap/base/util/isEmptyObject"], function(isEmptyObject){
	 *      isEmptyObject({}); // true
	 *      isEmptyObject({test: '123'}); // false
	 * });
	 *
	 * @function
	 * @since 1.65
	 * @public
	 * @name module:sap/base/util/isEmptyObject
	 * @param {Object} obj the object which is checked
	 * @returns {boolean} whether or not the given object is empty
	 */
	var fnIsEmptyObject = function isEmptyObject(obj) {
		/*eslint-disable no-unused-vars */
		for (var sName in obj) {
			return false;
		}
		/*eslint-enable no-unused-vars */
		return true;
	};

	return fnIsEmptyObject;
});
