/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};e.render=function(e,t){e.write("<div");e.writeControlData(t);e.addClass("sapMDTI");var r=t.getWidth();if(r){e.addStyle("width",r)}e.writeStyles();e.writeClasses();e.write(">");var i=t.getAggregation("_picker");if(i){e.renderControl(i)}e.write("</div>")};return e},true);