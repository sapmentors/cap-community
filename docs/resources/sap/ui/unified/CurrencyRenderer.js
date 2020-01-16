/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};e.render=function(e,r){var t=r.getTooltip_AsString();e.write("<div");e.writeControlData(r);if(t){e.writeAttributeEscaped("title",t)}e.addClass("sapUiUfdCurrency");if(r._bRenderNoValClass){e.addClass("sapUiUfdCurrencyNoVal")}e.writeClasses();e.write(">");e.write("<div");e.addClass("sapUiUfdCurrencyAlign");e.writeClasses();e.write(">");e.write("<span");e.writeAttribute("dir","ltr");e.addClass("sapUiUfdCurrencyValue");e.writeClasses();e.write(">");e.writeEscaped(r.getFormattedValue());e.write("</span>");e.write("<span");e.addClass("sapUiUfdCurrencyCurrency");e.writeClasses();e.write(">");e.writeEscaped(r._getCurrency());e.write("</span>");e.write("</div>");e.write("</div>")};return e},true);