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
            this.oFileUploader = this.byId("FileUploader");
            if (this.oFileUploader.getValue() === "") {
                MessageToast.show("Please Choose any File");
            } else {
                var baseUrl = this.oFileUploader.getUploadUrl();
                // Create new image entity:
                this.uuid = this.uuidv4();

                var json = { 
                    "ID": this.uuid,
                    "mediatype": "image/jpeg" 
                };
                jQuery.ajax({
                    type : "POST",
                    contentType: 'application/json; charset=utf-8',
                    url : baseUrl,
                    data : JSON.stringify(json),
                    dataType : "json",
                    async: false, 
                    success : function(data,textStatus, xhr) {
                        console.log("Success - data: "+data+" xhr: "+JSON.stringify(xhr));
                        // Upload Image
                        this.oFileUploader.setUploadUrl(baseUrl + "(" + this.uuid + ")/content")
                        this.oFileUploader.setHttpRequestMethod("PUT")
                        this.oFileUploader.upload();
                    }.bind(this)
                })
            }
        },

        onUploadComplete(oEvent) {
            const iStatus = oEvent.getParameter("status");
            if (iStatus) {
                let sMsg = "";
                if (iStatus === 204) {
                    sMsg = `Return Code ${iStatus} - Success`;
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
