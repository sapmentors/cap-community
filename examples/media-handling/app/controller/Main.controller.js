sap.ui.define([
    "test/Sample/controller/BaseController",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("test.Sample.controller.Main", {
        onInit() {
        },

        handleUploadPress(oEvent) {
            this.byId("FileUploader").upload();
        },

        onUploadComplete(oEvent) {
            const sResponse = oEvent.getParameter("response");
            if (sResponse) {
                let sMsg = "";
                const m = /^\[(\d\d\d)\]:(.*)$/.exec(sResponse);
                if (m && m[1] === "200") {
                    sMsg = `Return Code ${m[1]} - ${m[2]} - Success`;
                    oEvent.getSource().setValue("");
                } else {
                    sMsg = `Error: ${sResponse}`;
                }

                MessageToast.show(sMsg);
            }
        },
    });
});
