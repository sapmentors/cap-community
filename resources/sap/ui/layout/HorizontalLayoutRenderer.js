/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var r={};r.render=function(r,i){var t=r;var a=!i.getAllowWrapping();t.write("<div");t.writeControlData(i);t.addClass("sapUiHLayout");if(a){t.addClass("sapUiHLayoutNoWrap")}t.writeClasses();t.write(">");var e=i.getContent();for(var s=0;s<e.length;s++){if(a){t.write("<div class='sapUiHLayoutChildWrapper'>")}t.renderControl(e[s]);if(a){t.write("</div>")}}t.write("</div>")};return r},true);