/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ButtonRenderer","sap/ui/core/Renderer"],function(e,t){"use strict";var i=t.extend(e);i.renderAccessibilityAttributes=function(e,t){if(t.getTabIndex()){e.writeAttribute("tabindex",t.getTabIndex())}if(t.getAriaHidden()){e.writeAttribute("aria-hidden",t.getAriaHidden())}if(t.getAriaHaspopup()){e.writeAttribute("aria-haspopup",t.getAriaHaspopup())}};return i},true);