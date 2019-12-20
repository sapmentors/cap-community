sap.ui.define([
    "test/Sample/controller/BaseController",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("test.Sample.controller.Main", {
        onInit() {
            this.BackendModel = this.getOwnerComponent().getModel("Backend");
        },

        handleUploadPress(oEvent) {
            var oFileUploader = this.byId("FileUploader");
            if (oFileUploader.getValue() === "") {
                MessageToast.show("Please Choose any File");
            } else {
                oFileUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({
                    name: "SLUG",
                    value: this.uuidv4()
                }));
                oFileUploader.addHeaderParameter(new sap.ui.unified.FileUploaderParameter({
                    name: "x-csrf-token",
                    value: this.BackendModel.getSecurityToken()
                }));
                oFileUploader.setSendXHR(true);
                oFileUploader.upload();
            }
        },

        onUploadComplete(oEvent) {
            const sResponse = oEvent.getParameter("response");
            if (sResponse) {
                let sMsg = "";
                const m = /^\[(\d\d\d)\]:(.*)$/.exec(sResponse);
                if (m && m[1] === "200") {
                    sMsg = `Return Code ${m[1]} - ${m[2]} - Success`;
                    oEvent.getSource().setValue("");
                    this.byId("ListOfPictures").getBinding("items").refresh();
                } else {
                    sMsg = `Error: ${sResponse}`;
                }

                MessageToast.show(sMsg);
            }
        },

        uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
    });
});
