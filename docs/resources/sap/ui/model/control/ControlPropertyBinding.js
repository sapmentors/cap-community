/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/model/PropertyBinding"],function(t){"use strict";var e=t.extend("sap.ui.model.control.ControlPropertyBinding",{constructor:function(e,o,i){t.apply(this,arguments);this.oValue=this._getValue()}});e.prototype.getValue=function(){return this.oValue};e.prototype.setValue=function(t){this.oValue=t;this.oContext.setProperty(this.sPath,t)};e.prototype._getValue=function(){return this.oContext.getProperty(this.sPath)};e.prototype.setContext=function(t){this.oContext=t;this.checkUpdate()};e.prototype.checkUpdate=function(){var t=this._getValue();if(t!==this.oValue){this.oValue=t;this._fireChange()}};return e});