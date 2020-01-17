/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","sap/m/ButtonRenderer"],function(e,r){"use strict";var t=e.extend(r);t.render=function(e,r){var t=r.getAggregation("_button");e.write("<div");e.writeControlData(r);e.write(">");e.renderControl(t);e.write("</div>")};return t},true);