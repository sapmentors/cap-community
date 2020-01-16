/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var r={};r.render=function(r,e){r.write("<span ");r.writeControlData(e);r.addClass("sapMObjectMarker");r.writeClasses();r.write(">");r.renderControl(e._getInnerControl());r.write("</span>")};return r},true);