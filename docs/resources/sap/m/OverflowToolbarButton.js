/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/Button","sap/m/ButtonRenderer"],function(e,t){"use strict";var r=e.extend("sap.m.OverflowToolbarButton",{interfaces:["sap.f.IShellBar"],renderer:t.render});r.prototype._getText=function(){if(this._bInOverflow){return e.prototype._getText.call(this)}return""};return r});