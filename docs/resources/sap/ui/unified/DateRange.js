/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","./library","sap/ui/unified/calendar/CalendarUtils"],function(e,t,a){"use strict";var r=e.extend("sap.ui.unified.DateRange",{metadata:{library:"sap.ui.unified",properties:{startDate:{type:"object",group:"Misc",defaultValue:null},endDate:{type:"object",group:"Misc",defaultValue:null}}}});r.prototype.setStartDate=function(e){if(e){a._checkJSDateObject(e);var t=e.getFullYear();a._checkYearInValidRange(t)}this.setProperty("startDate",e);return this};r.prototype.setEndDate=function(e){if(e){a._checkJSDateObject(e);var t=e.getFullYear();a._checkYearInValidRange(t)}this.setProperty("endDate",e);return this};return r});