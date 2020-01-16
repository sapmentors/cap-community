/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.m.ListBase control
sap.ui.define([],
	function() {
		"use strict";

		return {
			name: {
				singular: "LIST_BASE_NAME",
				plural: "LIST_BASE_NAME_PLURAL"
			},
			palette: {
				group: "LIST",
				icons: {
					svg: "sap/m/designtime/ListBase.icon.svg"
				}
			},
			aggregations: {
				items: {
					domRef: ":sap-domref > .sapMListUl:not(.sapMGrowingList)",
					actions: {
						move: "moveControls"
					}
				},
				swipeContent: {
					domRef: ":sap-domref > .sapMListSwp",
					ignore: true
				},
				headerToolbar: {
					domRef: ":sap-domref > .sapMListHdrTBar"
				},
				infoToolbar: {
					domRef: ":sap-domref .sapMListInfoTBar"
				},
				contextMenu: {
					ignore: true
				}
			},
			actions: {
				remove: {
					changeType: "hideControl"
				},
				reveal: {
					changeType: "unhideControl"
				}
			}
		};

	}, /* bExport= */ false);