/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BarInPageEnabler"],function(e){"use strict";var t={apiVersion:2};t.render=e.prototype.render;t.decorateRootElement=function(e,t){var a;e.class("sapMTB");if(!t.getAriaLabelledBy().length){a=t.getTitleId()}e.accessibilityState(t,{role:t._getAccessibilityRole(),labelledby:a});e.class("sapMTBNewFlex");if(t.getActive()){e.class("sapMTBActive");e.attr("tabindex","0")}else{e.class("sapMTBInactive")}e.class("sapMTB"+t.getStyle());e.class("sapMTB-"+t.getActiveDesign()+"-CTX");e.style("width",t.getWidth());e.style("height",t.getHeight())};t.renderBarContent=function(t,a){a.getContent().forEach(function(s){e.addChildClassTo(s,a);t.renderControl(s)})};t.shouldAddIBarContext=function(e){return false};return t},true);