/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/layout/cssgrid/GridLayoutBase"],function(i){"use strict";var t={};t.render=function(i,t){i.write("<div");i.addClass("sapUiLayoutCSSGrid");i.writeControlData(t);if(t.getWidth()){i.addStyle("width",t.getWidth())}t.getGridLayoutConfiguration().renderSingleGridLayout(i);i.writeStyles();i.writeClasses();i.write(">");t.getItems().forEach(function(e){if(t._wrapItemsWithDiv){i.write("<div");i.addClass("sapUiLayoutCSSGridItemWrapper");i.writeClasses();i.write(">")}i.renderControl(e);if(t._wrapItemsWithDiv){i.write("</div>")}});i.write("</div>")};return t});