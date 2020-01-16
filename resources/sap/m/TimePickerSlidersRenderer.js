/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],function(e){"use strict";var t={apiVersion:2};t.render=function(t,i){var r=i.getAggregation("_columns"),n=i.getLabelText()||"",s=sap.ui.getCore().getLibraryResourceBundle("sap.m"),a,o=sap.ui.getCore().getConfiguration().getRTL();t.openStart("div",i);t.class("sapMTimePickerContainer");t.style("width",i.getWidth());t.style("height",i.getHeight());t.accessibilityState(i,{label:(n+" "+s.getText("TIMEPICKER_SCREENREADER_TAG")).trim()});t.openEnd();if(!e.system.desktop){t.openStart("div",i.getId()+"-label");t.class("sapMTimePickerContainerLabel");t.openEnd();t.style("display","block");t.text(n);t.close("div")}if(o){for(a=r.length-1;a>=0;a--){t.renderControl(r[a])}}else{for(a=0;a<r.length;a++){t.renderControl(r[a])}}t.close("div")};return t},true);