/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.IconTabBar control
sap.ui.define([],
	function () {
		"use strict";

		return {
			name: {
				singular: "ICON_TAB_BAR_NAME",
				plural: "ICON_TAB_BAR_NAME_PLURAL"
			},
			palette: {
				group: "CONTAINER",
				icons: {
					svg: "sap/m/designtime/IconTabBar.icon.svg"
				}
			},
			aggregations: {
				items: {
					domRef: ":sap-domref > .sapMITH > .sapMITBScrollContainer > .sapMITBHead",
					actions: {
						move: "moveControls"
					}
				},
				content: {
					domRef: function(oControl) {
						var oSelectedItem = oControl._getIconTabHeader().oSelectedItem;

						if (oSelectedItem && oSelectedItem.getContent().length) {
							return;
						}

						return oControl.getDomRef("content");
					},
					actions: {
						move: "moveControls"
					}
				}
			},
			templates: {
				create: "sap/m/designtime/IconTabBar.create.fragment.xml"
			}
		};

	}, /* bExport= */ false);
