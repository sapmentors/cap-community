/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={};t.render=function(t,e){t.write("<div");t.writeControlData(e);var i=e.getWidth(),r=e.getHeight();if(i){t.addStyle("width",i)}if(r){t.addStyle("height",r)}t.writeStyles();if(e.getVertical()){if(!e.getHorizontal()){t.addClass("sapMScrollContV")}else{t.addClass("sapMScrollContVH")}}else if(e.getHorizontal()){t.addClass("sapMScrollContH")}t.addClass("sapMScrollCont");t.writeClasses();var l=e.getTooltip_AsString();if(l){t.writeAttributeEscaped("title",l)}if(e.getFocusable()){t.writeAttributeEscaped("tabindex","0")}t.write("><div id='"+e.getId()+"-scroll' class='sapMScrollContScroll'>");var a=e.getContent(),s=a.length;for(var o=0;o<s;o++){t.renderControl(a[o])}t.write("</div></div>")};return t},true);