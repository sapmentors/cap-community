/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var e={};var r="sapMMsgView";e.render=function(e,t){e.write("<div");e.writeControlData(t);e.writeStyles();e.addClass(r);e.writeClasses();e.write(">");e.renderControl(t._navContainer);e.write("</div>")};return e},true);