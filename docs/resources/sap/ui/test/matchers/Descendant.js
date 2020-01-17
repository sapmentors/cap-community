/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/test/matchers/_Visitor"],function(e,t){"use strict";var n=e.getLogger("sap.ui.test.matchers.Descendant");var r=new t;return function(e,t){return function(s){if(!e){n.debug("No descendant was defined so no controls will be filtered.");return true}var i;if(typeof e==="string"){i=sap.ui.getCore().byId(e)}else{i=e}var a=r.isMatching(i,function(e){return s===e},t);if(!a){n.debug("Control '"+s+"' does not have "+(t?"direct ":"")+"descendant '"+i)}return a}}},true);