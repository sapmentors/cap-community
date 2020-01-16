/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./SimpleType"],function(e){"use strict";var t=e.extend("sap.ui.model.CompositeType",{constructor:function(t,s){e.apply(this,arguments);this.sName="CompositeType";this.bUseRawValues=false;this.bParseWithValues=false;this.bUseInternalValues=false},metadata:{abstract:true,publicMethods:[]}});t.prototype.getUseRawValues=function(){return this.bUseRawValues};t.prototype.getUseInternalValues=function(){return this.bUseInternalValues};t.prototype.getParseWithValues=function(){return this.bParseWithValues};return t});