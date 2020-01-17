/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={};t.render=function(t,e){var i=e.getWidth();var r=e.getHeight();t.write("<div");t.writeControlData(e);t.addClass("sapMFT");if(i){t.addClass("sapMFTOverflowWidth")}if(r){t.addClass("sapMFTOverflowHeight")}t.writeClasses();if(e.getTooltip_AsString()){t.writeAttributeEscaped("title",e.getTooltip_AsString())}t.addStyle("width",i||null);t.addStyle("height",r||null);t.writeStyles();t.write(">");t.write(e._getDisplayHtml());t.write("</div>")};return t},true);