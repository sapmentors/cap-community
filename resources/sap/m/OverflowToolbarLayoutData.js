/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/ToolbarLayoutData","sap/m/library","sap/base/Log"],function(e,r,o){"use strict";var t=r.OverflowToolbarPriority;var a=e.extend("sap.m.OverflowToolbarLayoutData",{metadata:{properties:{moveToOverflow:{type:"boolean",defaultValue:true,deprecated:true},stayInOverflow:{type:"boolean",defaultValue:false,deprecated:true},priority:{type:"sap.m.OverflowToolbarPriority",group:"Behavior",defaultValue:t.High},group:{type:"int",group:"Behavior",defaultValue:0},closeOverflowOnInteraction:{type:"boolean",group:"Behavior",defaultValue:true}}}});a.prototype.invalidate=function(){var r=this.getPriority(),a=r===t.AlwaysOverflow||r===t.NeverOverflow;if(this.getGroup()&&a){o.error("It is not allowed to set AlwaysOverflow or NeverOverflow to a group items.")}return e.prototype.invalidate.call(this)};return a});