/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./SinglePlanningCalendarView","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/calendar/CalendarUtils"],function(t,e,a,n){"use strict";var r=e.extend("sap.m.SinglePlanningCalendarWeekView",{metadata:{library:"sap.m"}});r.prototype.getEntityCount=function(){return 7};r.prototype.getScrollEntityCount=function(){return 7};r.prototype.calculateStartDate=function(t){var e=a.fromLocalJSDate(t),r=n._getFirstDateOfWeek(e);return r.toLocalJSDate()};return r});