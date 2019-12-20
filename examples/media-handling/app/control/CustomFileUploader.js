// Source: https://blogs.sap.com/2019/09/30/extending-upload-collection-and-file-uploader-to-call-put-method-during-file-upload/
// Author: Arindam Seth - https://people.sap.com/arindam.seth
sap.ui.define(
	["sap/ui/unified/FileUploader"],
	function (FileUploader) {
		return FileUploader.extend("CustomFileUploader", {
			metadata: {},

			_sendFilesWithXHR: function (aFiles) {
				var iFiles,
					sHeader,
					sValue,
					oXhrEntry,
					oXHRSettings = this.getXhrSettings();

				if (aFiles.length > 0) {
					if (this.getUseMultipart()) {
						//one xhr request for all files
						iFiles = 1;
					} else {
						//several xhr requests for every file
						iFiles = aFiles.length;
					}
					// Save references to already uploading files if a new upload comes between upload and complete or abort
					this._aXhr = this._aXhr || [];
					for (var j = 0; j < iFiles; j++) {
						//keep a reference on the current upload xhr
						this._uploadXHR = new window.XMLHttpRequest();

						oXhrEntry = {
							xhr: this._uploadXHR,
							requestHeaders: []
						};
						this._aXhr.push(oXhrEntry);
						oXhrEntry.xhr.open("PUT", this.getUploadUrl(), true); //Changed to PUT method here
						if (oXHRSettings) {
							oXhrEntry.xhr.withCredentials = oXHRSettings.getWithCredentials();
						}
						if (this.getHeaderParameters()) {
							var aHeaderParams = this.getHeaderParameters();
							for (var i = 0; i < aHeaderParams.length; i++) {
								sHeader = aHeaderParams[i].getName();
								sValue = aHeaderParams[i].getValue();
								oXhrEntry.requestHeaders.push({
									name: sHeader,
									value: sValue
								});
							}
						}
						var sFilename = aFiles[j].name;
						var aRequestHeaders = oXhrEntry.requestHeaders;
						oXhrEntry.fileName = sFilename;
						oXhrEntry.file = aFiles[j];
						this.fireUploadStart({
							"fileName": sFilename,
							"requestHeaders": aRequestHeaders
						});
						for (var k = 0; k < aRequestHeaders.length; k++) {
							// Check if request is still open in case abort() was called.
							if (oXhrEntry.xhr.readyState === 0) {
								break;
							}
							sHeader = aRequestHeaders[k].name;
							sValue = aRequestHeaders[k].value;
							oXhrEntry.xhr.setRequestHeader(sHeader, sValue);
						}
					}
					if (this.getUseMultipart()) {
						var formData = new window.FormData();
						var name = this.FUEl.name;
						for (var l = 0; l < aFiles.length; l++) {
							this._appendFileToFormData(formData, name, aFiles[l]);
						}
						formData.append("_charset_", "UTF-8"); // eslint-disable-line sap-no-dom-insertion
						var data = this.FUDataEl.name;
						if (this.getAdditionalData()) {
							var sData = this.getAdditionalData();
							formData.append(data, sData); // eslint-disable-line sap-no-dom-insertion
						} else {
							formData.append(data, ""); // eslint-disable-line sap-no-dom-insertion
						}
						if (this.getParameters()) {
							var oParams = this.getParameters();
							for (var m = 0; m < oParams.length; m++) {
								var sName = oParams[m].getName();
								sValue = oParams[m].getValue();
								formData.append(sName, sValue); // eslint-disable-line sap-no-dom-insertion
							}
						}
						oXhrEntry.file = formData;
						this.sendFiles(this._aXhr, 0);
					} else {
						this.sendFiles(this._aXhr, 0);
					}
					this._bUploading = false;
					this._resetValueAfterUploadStart();
				}

				return this;
			},
			renderer: "sap.ui.unified.FileUploaderRenderer"
		});
	}
);