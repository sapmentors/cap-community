/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ViewRenderer","sap/ui/core/Control"],function(e,t){"use strict";var i={};i.render=function(i,r){var a=i;a.write("<div");a.writeControlData(r);a.addClass("sapUiView");a.addClass("sapUiJSONView");e.addDisplayClass(a,r);if(r.getWidth()){a.addStyle("width",r.getWidth())}if(r.getHeight()){a.addStyle("height",r.getHeight())}a.writeStyles();a.writeClasses();a.write(">");var n=r.getContent();if(n){if(n instanceof Array&&!(n instanceof t)){for(var d=0;d<n.length;d++){a.renderControl(n[d])}}else{a.renderControl(r.getContent())}}a.write("</div>")};return i},true);