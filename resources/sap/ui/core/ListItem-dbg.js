/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.core.ListItem.
sap.ui.define(['./Item', './library'],
	function(Item, library) {
	"use strict";


	/**
	 * Constructor for a new ListItem.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * An item that is used in list controls, such as <code>DropdownBox</code>.
	 *
	 * The element foresees the usage of additional texts displayed in a second column.
	 * @extends sap.ui.core.Item
	 *
	 * @author SAP SE
	 * @version 1.73.2
	 *
	 * @public
	 * @alias sap.ui.core.ListItem
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var ListItem = Item.extend("sap.ui.core.ListItem", /** @lends sap.ui.core.ListItem.prototype */ { metadata : {

		library : "sap.ui.core",
		properties : {

			/**
			 * The icon belonging to this list item instance.
			 * This can be a URI to an image or an icon font URI.
			 */
			icon : {type : "string", group : "Appearance", defaultValue : null},

			/**
			 * Some additional text of type string, optionally to be displayed along with this item.
			 */
			additionalText : {type : "string", group : "Data", defaultValue : null}
		}
	}});


	return ListItem;

});
