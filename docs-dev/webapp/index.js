sap.ui.require(["sap/ui/core/mvc/XMLView"], XMLView => {
    XMLView.create({ viewName: "capcom.recap.App" }).then(oView =>
        oView.placeAt("content")
    )
})
