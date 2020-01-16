/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};e.render=function(e,t){var r=t.getSubheader();var i=t.getTooltip_AsString();if(typeof i!=="string"){i=""}e.write("<div");e.writeControlData(t);e.writeAttribute("role","presentation");e.writeAttributeEscaped("aria-label",i);e.addClass("sapMNwC");if(t.hasListeners("press")){e.addClass("sapMPointer");e.writeAttribute("tabindex","0")}e.writeClasses();e.write(">");e.write("<div");e.addClass("sapMNwCCTxt");e.writeClasses();e.write(">");e.renderControl(t._oContentText);e.write("</div>");e.write("<div");e.writeAttribute("id",t.getId()+"-subheader");e.addClass("sapMNwCSbh");e.writeClasses();e.write(">");e.writeEscaped(r);e.write("</div>");e.write("</div>")};return e},true);