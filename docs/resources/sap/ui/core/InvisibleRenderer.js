/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.PlaceholderPrefix="sap-ui-invisible-";e.createInvisiblePlaceholderId=function(e){return this.PlaceholderPrefix+e.getId()};e.render=function(e,i,r){var a=this.createInvisiblePlaceholderId(i);r=r||"span";e.openStart(r,a);e.attr("data-sap-ui",a);e.attr("aria-hidden","true");e.class("sapUiHiddenPlaceholder");e.openEnd(true);e.close(r)};return e});