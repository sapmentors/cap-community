/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};e.render=function(e,r){var t=r._getHeader(),i=r._getCurrentGrid();e.write("<div");e.writeControlData(r);e.writeAccessibilityState({role:"region",roledescription:r._oRB.getText("SPC_CONTROL_NAME"),labelledby:{value:t.getId()+"-Title "+i.getId()+"-nowMarkerText",append:true}});e.addClass("sapMSinglePC");e.writeClasses(r);e.write(">");e.renderControl(t);e.renderControl(i);e.write("</div>")};return e},true);