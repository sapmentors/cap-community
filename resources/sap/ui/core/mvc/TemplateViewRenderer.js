/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ViewRenderer"],function(e){"use strict";var t={};t.render=function(t,i){var r=t;r.write("<div");r.writeControlData(i);r.addClass("sapUiView");r.addClass("sapUiTmplView");e.addDisplayClass(r,i);r.addStyle("width",i.getWidth());r.addStyle("height",i.getHeight());r.writeStyles();r.writeClasses();r.write(">");r.renderControl(i._oTemplate);r.write("</div>")};return t},true);