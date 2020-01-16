/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/thirdparty/jquery",
	"sap/ui/dom/isHidden"
], function(jQuery, isHidden) {
	"use strict";

	/*
	 * Searches for a descendant of the given node that is an Element which is focusable, visible, and editable.
	 *
	 * @param {Element} oContainer Node to search for a focusable descendant
	 * @returns {Element} Element node that is focusable, visible and editable or null
	 */
	function findEditableInput(oContainer) {
		return jQuery(oContainer).find('input, textarea')
			.not('input[readonly],textarea[readonly],input[type=hidden],input[type=button],input[type=submit],input[type=reset],input[type=image],button')
			.filter(':enabled:visible:first')[0];
	}

	/*
	 * Returns a descendant of the given node that is an Element which is focusable, visible, editable and not hidden.
	 *
	 * @param {Element} oContainer Node to search for a focusable descendant
	 * @returns {Element} Element node that is focusable, visible and editable or null
	 * @alias module:sap/ui/dom/getFirstEditableInput
	 * @since 1.72
	 * @private
	 * @ui5-restricted
	 */
	function getFirstEditableInput(oContainer) {
		if ( !oContainer || isHidden(oContainer) ) {
			return null;
		}

		return findEditableInput(oContainer);
	}

	return getFirstEditableInput;

});

