/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/base/strings/capitalize","sap/ui/thirdparty/jquery"],function(t,e,a){"use strict";return t.extend("sap.ui.test.matchers.AggregationFilled",{metadata:{publicMethods:["isMatching"],properties:{name:{type:"string"}}},isMatching:function(t){var r=this.getName(),i=t["get"+e(r,0)];if(!i){this._oLogger.error("Control '"+t+"' does not have an aggregation called '"+r+"'");return false}var s=i.call(t);var n=a.isArray(s)?s:[s];var g=!!n.length;if(!g){this._oLogger.debug("Control '"+t+"' aggregation '"+r+"' is empty")}return g}})},true);