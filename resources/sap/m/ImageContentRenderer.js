/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={};t.render=function(t,e){t.write("<div");t.writeControlData(e);t.addClass("sapMImageContent");var r=e.getTooltip_AsString();if(r){t.writeAttributeEscaped("title",r)}if(e.hasListeners("press")){t.addClass("sapMPointer");t.writeAttribute("tabindex","0")}t.writeClasses();t.write(">");var i=e.getAggregation("_content");if(i){i.addStyleClass("sapMImageContentImageIcon");t.renderControl(i)}t.write("</div>")};return t},true);