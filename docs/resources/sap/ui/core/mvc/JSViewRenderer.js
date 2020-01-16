/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ViewRenderer"],function(e){"use strict";var t={};t.render=function(t,i){var r=t;r.write("<div");r.writeControlData(i);r.addClass("sapUiView");r.addClass("sapUiJSView");e.addDisplayClass(r,i);if(i.getWidth()){r.addStyle("width",i.getWidth())}if(i.getHeight()){r.addStyle("height",i.getHeight())}r.writeStyles();r.writeClasses();r.write(">");var a=i.getContent();if(a){if(Array.isArray(a)){for(var d=0;d<a.length;d++){r.renderControl(a[d])}}else if(a){r.renderControl(a)}}r.write("</div>")};return t},true);