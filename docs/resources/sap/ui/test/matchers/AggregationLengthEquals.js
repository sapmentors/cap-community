/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/base/strings/capitalize","sap/ui/thirdparty/jquery"],function(t,e,a){"use strict";return t.extend("sap.ui.test.matchers.AggregationLengthEquals",{metadata:{publicMethods:["isMatching"],properties:{name:{type:"string"},length:{type:"int"}}},isMatching:function(t){var r=this.getName(),i=t["get"+e(r,0)];if(!i){this._oLogger.error("Control '"+t+"' does not have an aggregation called '"+r+"'");return false}var s=i.call(t);var n=a.isArray(s)?s:[s];var g=n.length;var h=this.getLength();var o=g===h;if(!o){this._oLogger.debug("Control '"+t+"' has "+g+" Objects in the aggregation '"+r+"' but it should have "+h)}return o}})},true);