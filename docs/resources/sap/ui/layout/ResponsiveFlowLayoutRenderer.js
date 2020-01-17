/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};(function(){e.render=function(e,i){e.write("<div");e.writeControlData(i);e.addClass("sapUiRFL");e.writeClasses();var t=i._getAccessibleRole();var r;if(t){r={role:t}}e.writeAccessibilityState(i,r);e.write(">");e.write("</div>")}})();return e},true);