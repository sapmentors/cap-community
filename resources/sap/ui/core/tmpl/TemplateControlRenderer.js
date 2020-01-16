/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var e={};e.render=function(e,t){var i=t.isInline()||this.hasControlData;if(!i){e.write("<div");e.writeControlData(t);e.writeStyles();e.writeClasses();e.write(">")}var r=this.renderTemplate||t.getTemplateRenderer();if(r){r.apply(this,arguments)}if(!i){e.write("</div>")}};return e},true);