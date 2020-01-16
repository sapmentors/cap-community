/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control"],function(t,e){"use strict";var i=e.extend("sap.ui.layout.ResponsiveSplitterPage",{metadata:{library:"sap.ui.layout",associations:{content:{type:"sap.ui.core.Control",multiple:false,singularName:"content"}}},getContent:function(){return sap.ui.getCore().byId(this.getAssociation("content"))},renderer:function(t,e){t.write("<div");t.addClass("sapUiResponsiveSplitterPage");t.writeControlData(e);t.writeClasses();t.write(">");var i=e.getContent();if(i){t.renderControl(i)}t.write("</div>")}});return i});