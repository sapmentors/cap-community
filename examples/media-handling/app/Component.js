sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/core/ComponentSupport" // make sure to include the ComponentSupport in the bundle
], (UIComponent) => {
	"use strict";

	return UIComponent.extend("test.Sample.Component", {

		metadata: {
			manifest: "json"
		},

		init() {

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

		}
	});
});
