/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./ToolbarRenderer","sap/m/BarInPageEnabler"],function(e,r,n){"use strict";var t=e.extend(r);t.renderBarContent=function(e,r){r._getVisibleContent().forEach(function(t){n.addChildClassTo(t,r);e.renderControl(t)});if(r._getOverflowButtonNeeded()){t.renderOverflowButton(e,r)}};t.renderOverflowButton=function(e,r){var t=r._getOverflowButton();n.addChildClassTo(t,r);e.renderControl(t)};return t},true);