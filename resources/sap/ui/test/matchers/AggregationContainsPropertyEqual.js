/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/base/strings/capitalize","sap/ui/thirdparty/jquery"],function(t,e,r){"use strict";return t.extend("sap.ui.test.matchers.AggregationContainsPropertyEqual",{metadata:{publicMethods:["isMatching"],properties:{aggregationName:{type:"string"},propertyName:{type:"string"},propertyValue:{type:"any"}}},isMatching:function(t){var a=this.getAggregationName(),i=this.getPropertyName(),n=this.getPropertyValue(),s=t["get"+e(a,0)];if(!s){this._oLogger.error("Control '"+t+"' does not have an aggregation called '"+a+"'");return false}var g=s.call(t);var o=r.isArray(g)?g:[g];var p=o.some(function(t){var r=t["get"+e(i,0)];if(!r){return false}return r.call(t)===n});if(!p){this._oLogger.debug("Control '"+t+"' has no property '"+i+"' with the value '"+n+"' in the aggregation '"+a+"'")}return p}})},true);