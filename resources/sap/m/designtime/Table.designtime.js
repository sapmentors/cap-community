/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/changeHandler/ChangeHandlerMediator"],function(e){"use strict";var a=function(e){return!!(e&&e._hasTablePersoController&&e._hasTablePersoController())};return{name:{singular:"TABLE_NAME",plural:"TABLE_NAME_PLURAL"},palette:{group:"LIST",icons:{svg:"sap/m/designtime/Table.icon.svg"}},aggregations:{columns:{propagateMetadata:function(e){if(e.isA("sap.m.Column")&&a(e.getParent())){return{actions:null}}},childNames:{singular:"COLUMN_NAME",plural:"COLUMN_NAME_PLURAL"},domRef:":sap-domref .sapMListTblHeader",actions:{move:function(e){return a(e.getParent())?null:"moveTableColumns"},addODataProperty:function(n){var t=e.getAddODataFieldSettings(n);if(t&&!a(n)){return{changeType:"addTableColumn",changeHandlerSettings:t}}}}},items:{domRef:":sap-domref .sapMListItems"},contextMenu:{ignore:true}}}},false);