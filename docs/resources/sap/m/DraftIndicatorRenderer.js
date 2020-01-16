/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var r={};r.render=function(r,e){r.write("<div");r.writeControlData(e);r.addClass("sapMDraftIndicator");r.writeClasses();r.write(">");var t=e._getLabel();r.renderControl(t);r.write("</div>")};return r},true);