/*
 * ! OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./TreeItemBaseRenderer","sap/ui/core/Renderer"],function(e,r){"use strict";var t=r.extend(e);t.renderLIAttributes=function(r,t){r.addClass("sapMCTI");e.renderLIAttributes.apply(this,arguments)};t.renderLIContent=function(e,r){r.getContent().forEach(function(r){e.renderControl(r)})};return t},true);