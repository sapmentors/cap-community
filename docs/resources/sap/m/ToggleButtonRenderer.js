/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ButtonRenderer","sap/ui/core/Renderer"],function(e,t){"use strict";var s=t.extend(e);s.renderAccessibilityAttributes=function(e,t,s){s["pressed"]=t.getPressed()};s.renderButtonAttributes=function(e,t){if(t.getPressed()&&!t._isUnstyled()){e.addClass("sapMToggleBtnPressed")}};return s},true);