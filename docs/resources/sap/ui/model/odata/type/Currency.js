/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./UnitMixin","sap/ui/model/type/Currency"],function(t,e){"use strict";var i=e.extend("sap.ui.model.odata.type.Currency",{constructor:function(t,e){this._applyUnitMixin.apply(this,arguments)}});t(i.prototype,e,"customCurrencies");i.prototype.getCustomUnitForKey=function(t,e){return{decimals:t[e].UnitSpecificScale,isoCode:t[e].StandardCode}};i.prototype.getName=function(){return"sap.ui.model.odata.type.Currency"};return i});