/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={};t.render=function(t,e){var i=t;i.write("<div");i.writeControlData(e);i.addClass("sapUiVlt");i.addClass("sapuiVlt");if(e.getWidth()&&e.getWidth()!=""){i.addStyle("width",e.getWidth())}i.writeStyles();i.writeClasses();i.write(">");var r=e.getContent();for(var a=0;a<r.length;a++){i.write('<div class="sapUiVltCell sapuiVltCell">');i.renderControl(r[a]);i.write("</div>")}i.write("</div>")};return t},true);