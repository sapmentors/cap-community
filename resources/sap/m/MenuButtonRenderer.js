/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};e.CSS_CLASS="sapMMenuBtn";e.render=function(t,r){var n=r.getWidth();t.write("<div");t.writeControlData(r);t.addClass(e.CSS_CLASS);t.addClass(e.CSS_CLASS+r.getButtonMode());t.writeClasses();if(n!=""){t.addStyle("width",n)}t.writeStyles();t.write(">");r._ensureBackwardsReference();t.renderControl(r._getButtonControl());t.write("</div>")};return e},true);