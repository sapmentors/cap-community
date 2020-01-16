/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer"],function(e){"use strict";var t={},i={MAIN_CLASS:"sapMSliderTooltipContainer"};t.render=function(e,t){var r=t.getAssociatedTooltipsAsControls();e.write("<div");e.writeControlData(t);e.addStyle("width",t.getWidth());e.writeStyles();e.writeClasses();e.write(">");e.write("<div");e.writeAttribute("id",t.getId()+"-container");e.addStyle("left","0%");e.addStyle("right","0%");e.addClass(i.MAIN_CLASS);if(!t.getEnabled()){e.addClass(i.MAIN_CLASS+"Disabled")}e.writeClasses();e.writeStyles();e.write(">");if(r&&r.length){r.forEach(function(t){e.renderControl(t)})}e.write("</div>");e.write("</div>")};return t},true);