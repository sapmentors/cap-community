/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var i={};i.render=function(i,r){i.write("<div");i.writeControlData(r);i.addClass("sapUiLocalBusyIndicator");i.writeClasses();i.write(">");t(i,r);i.write("</div>")};var t=function(i,t){var r=t.getId();var e=r+"-animation";var a=["-leftBox","-middleBox","-rightBox"];i.write("<div");i.writeAttribute("id",e);i.addClass("sapUiLocalBusyIndicatorAnimation");i.writeClasses();i.write(">");for(var s=0;s<a.length;s++){i.write("<div");i.addClass("sapUiLocalBusyIndicatorBox");i.writeClasses();i.writeAttribute("id",r+a[s]);i.write(">");i.write("</div>")}i.write("</div>")};return i},true);