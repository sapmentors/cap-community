/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var t={};t.render=function(t,e){var i=t;var r=e.getComponentInstance();var a=e.getWidth();var d=e.getHeight();i.write("<div");i.writeControlData(e);if(a){i.addStyle("width",a)}if(d){i.addStyle("height",d)}i.writeStyles();i.addClass("sapUiComponentContainer");i.writeClasses();i.write(">");i.write('<div id="'+e.getId()+'-uiarea"');if(a&&a!=="auto"){i.addStyle("width","100%")}if(d&&d!=="auto"){i.addStyle("height","100%")}i.writeStyles();i.write(">");if(r){r.render(i)}i.write("</div></div>")};return t},true);