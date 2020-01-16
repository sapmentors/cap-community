/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./DateRange","./library"],function(e,a){"use strict";var i=a.CalendarDayType;var p=e.extend("sap.ui.unified.DateTypeRange",{metadata:{library:"sap.ui.unified",properties:{type:{type:"sap.ui.unified.CalendarDayType",group:"Appearance",defaultValue:i.Type01}}}});return p});