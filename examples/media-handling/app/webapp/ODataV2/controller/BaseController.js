sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.core.routing.History} History
     * @yields {typeof sap.ui.core.mvc.Controller}
     */
    (Controller, History) => {
        "use strict";

        return Controller.extend("test.Sample.controller.BaseController", {

            onInit() {
            },

            getRouter() {
                return this.getOwnerComponent().getRouter();
            },

            getModel(sName) {
                return this.getView().getModel(sName);
            },

            getResourceBundle() {
                return this.getOwnerComponent().getModel("i18n").getResourceBundle();
            }

        });

    });
