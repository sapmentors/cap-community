/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var e=function(){if(typeof sap==="undefined"||!sap.ui||typeof sap.ui.getCore!=="function"){return Promise.reject(new Error("UI5 Core must be loaded and booted before using the sap/ui/qunit/utils/waitForThemeApplied module"))}return new Promise(function(e){var i=sap.ui.getCore();if(i.isThemeApplied()){e()}else{var t=function(){e();i.detachThemeChanged(t)};i.attachThemeChanged(t)}})};return e});