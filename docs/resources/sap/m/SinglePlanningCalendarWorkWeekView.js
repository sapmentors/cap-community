/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./SinglePlanningCalendarView","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/calendar/CalendarUtils","sap/ui/core/LocaleData"],function(t,e,a,n,r){"use strict";var i=e.extend("sap.m.SinglePlanningCalendarWorkWeekView",{metadata:{library:"sap.m"}});i.prototype.getEntityCount=function(){return 5};i.prototype.getScrollEntityCount=function(){return 7};i.prototype.calculateStartDate=function(t){var e=a.fromLocalJSDate(t),r=n._getFirstDateOfWeek(e),i=this._getFormatSettingsLocaleData();if(r.getDay()===i.getWeekendEnd()){r.setDate(r.getDate()+1)}return r.toLocalJSDate()};i.prototype._getFormatSettingsLocaleData=function(){return r.getInstance(sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale())};return i});