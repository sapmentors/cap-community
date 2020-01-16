/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/base/Log"],function(e,t){"use strict";var n;return{palette:{group:"DISPLAY",icons:{svg:"sap/m/designtime/ObjectIdentifier.icon.svg"}},registerSettingsHandler:function(e){n=e},getStableElements:function(e){return n?n.getStableElements(e):null},actions:{settings:function(){if(!n){return}if(!n.isSettingsAvailable()){t.error("sap.ui.comp.navpopover.ObjectIdentifier.designtime: 'settings' action is not available");return}return{handler:function(e,t){return n.execute(e,t)}}}},templates:{create:"sap/m/designtime/ObjectIdentifier.create.fragment.xml"}}},false);