/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};e.render=function(e,r){var t=r.getPageContent();e.write("<div");e.addClass("sapMQuickViewPage");e.writeControlData(r);e.writeClasses();e.write(">");if(t.header){e.renderControl(t.header)}e.renderControl(t.form);e.write("</div>")};return e},true);