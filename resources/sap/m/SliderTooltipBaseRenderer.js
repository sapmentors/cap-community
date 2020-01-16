/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer"],function(e){"use strict";var t={};t.CSS_CLASS="sapMSliderTooltip";t.render=function(e,t){e.write("<div");e.writeControlData(t);e.writeClasses();e.write(">");this.renderTooltipContent(e,t);e.write("</div>")};t.renderTooltipContent=function(e,t){};return t},true);