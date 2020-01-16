/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};e.render=function(e,t){t._bChangedByMe=true;e.write("<div");e.writeControlData(t);e.addClass("sapUiSimpleForm");if(t.getWidth()){e.addStyle("width",t.getWidth())}e.writeStyles();e.writeClasses();e.write(">");var r=t.getAggregation("form");e.renderControl(r);e.write("</div>");t._bChangedByMe=false};return e},true);