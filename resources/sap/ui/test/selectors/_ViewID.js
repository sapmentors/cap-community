/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/selectors/_Selector","sap/ui/base/ManagedObjectMetadata"],function(e,t){"use strict";var i=e.extend("sap.ui.test.selectors._ViewID",{_generate:function(e){var i=e.getId();var a=this._getControlViewName(e);if(!t.isGeneratedId(i)){var s=a+"--";var r=i.indexOf(s);if(r>-1){var n=i.substring(r+s.length);if(!n.indexOf("-")>-1&&!n.match(/[0-9]$/)){this._oLogger.debug("Control with ID "+i+" belongs to view with viewName "+a+" and has relative ID "+n);return{viewName:a,id:n,skipBasic:true}}}else{this._oLogger.debug("Control "+e+" does not belong to a view")}}}});return i});