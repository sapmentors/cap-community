/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};e.render=function(e,t){var i=t.getFixContent();e.write("<div");e.addClass("sapUiSimpleFixFlex");e.writeControlData(t);e.writeClasses();e.write(">");if(i){e.renderControl(i.addStyleClass("sapUiSimpleFixFlexFixed"))}this.renderFlexContentContainer(e,t);e.write("</div>")};e.renderFlexContentContainer=function(e,t){var i=t.getFlexContent();e.write("<div");e.writeAttribute("id",t.getId()+"-flexContentContainer");e.addClass("sapUiSimpleFixFlexFlexContentContainer");e.writeClasses();e.write(">");if(i){e.write("<div");e.addClass("sapUiSimpleFixFlexFlexContent");e.writeClasses();e.write(">");i.forEach(function(t){e.renderControl(t)});e.write("</div>")}e.write("</div>")};return e},true);