/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library"],function(t){"use strict";var e=t.BlockRowColorSets;var a={};a.render=function(t,e){this.startLayout(t,e);this.addContent(t,e);this.endLayout(t)};a.startLayout=function(t,e){var a=e.getBackground();e.addStyleClass("sapUiBlockLayoutBackground"+a);t.write("<div");t.writeControlData(e);t.addClass("sapUiBlockLayout");if(e.getKeepFontSize()){t.addClass("sapUiBlockLayoutKeepFontSize")}t.writeStyles();t.writeClasses();t.write(">")};a.addContent=function(t,a){var o=a.getContent(),n=e,r=Object.keys(n).map(function(t){return n[t]}),i=r.length;o.forEach(function(e,a,o){var n=e.getRowColorSet()||r[a%i],s="sapUiBlockLayoutBackground"+n,l=a&&o[a-1]||null;if(l&&l.hasStyleClass(s)){e.removeStyleClass(s);s+="Inverted"}if(s){e.addStyleClass(s)}t.renderControl(e)})};a.endLayout=function(t){t.write("</div>")};return a},true);