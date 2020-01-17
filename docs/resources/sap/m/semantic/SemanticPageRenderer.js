/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};e.render=function(e,r){e.write("<div");e.writeControlData(r);e.addClass("sapMSemanticPage");e.writeClasses();e.write(">");e.renderControl(r._getPage());e.write("</div>")};return e},true);