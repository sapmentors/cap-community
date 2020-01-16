/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/ToggleButton","sap/m/ToggleButtonRenderer"],function(e,t){"use strict";var r=e.extend("sap.m.OverflowToolbarToggleButton",{renderer:t.render});r.prototype._getText=function(){return this._bInOverflow?e.prototype._getText.call(this):""};return r});