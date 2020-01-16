/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./DatePickerRenderer"],function(e,t){"use strict";var r=e.extend(t);r.writeInnerValue=function(e,t){if(t._bValid){e.writeAttributeEscaped("value",t._formatValue(t.getDateValue(),t.getSecondDateValue()))}else{e.writeAttributeEscaped("value",t.getValue())}};return r},true);