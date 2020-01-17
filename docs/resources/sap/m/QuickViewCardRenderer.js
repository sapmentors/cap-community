/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core"],function(e){"use strict";var r={},t=e.getLibraryResourceBundle("sap.m");r.render=function(e,r){var a=r.getNavContainer();e.write("<div");e.addClass("sapMQuickViewCard");if(!r.getShowVerticalScrollBar()){e.addClass("sapMQuickViewCardNoScroll")}e.writeControlData(r);e.writeClasses();e.writeAccessibilityState(r,{label:{value:t.getText("ARIA_ROLEDESCRIPTION_CARD"),append:true}});e.write(">");e.renderControl(a);e.write("</div>")};return r},true);