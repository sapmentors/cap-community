/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/ui/core/Renderer","./ListItemBaseRenderer"],function(e,t,r){"use strict";var n=e.TextDirection;var a=t.extend(r);a.apiVersion=2;a.renderLIAttributes=function(e,t){e.class("sapMILI")};a.renderLIContent=function(e,t){var r=t.getLabel();if(r){e.openStart("span",t.getId()+"-label");e.class("sapMILILabel");var a=t.getLabelTextDirection();if(a!==n.Inherit){e.attr("dir",a.toLowerCase())}e.openEnd();e.text(r);e.close("span")}e.openStart("div").class("sapMILIDiv").class("sapMILI-CTX").openEnd();t.getContent().forEach(e.renderControl,e);e.close("div")};return a},true);