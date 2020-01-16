/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBase","./library","./CustomListItemRenderer"],function(t,e,n){"use strict";var i=t.extend("sap.m.CustomListItem",{metadata:{library:"sap.m",defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content",bindable:"bindable"}},designtime:"sap/m/designtime/CustomListItem.designtime"}});i.prototype.getContentAnnouncement=function(){return this.getContent().map(function(e){return t.getAccessibilityText(e)}).join(" ").trim()};return i});