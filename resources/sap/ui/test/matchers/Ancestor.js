/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/_LogCollector","sap/base/Log","sap/ui/test/matchers/_Visitor"],function(e,t,r){"use strict";var n=t.getLogger("sap.ui.test.matchers.Ancestor");var s=new r;return function(e,t){return function(r){if(!e){n.debug("No ancestor was defined so no controls will be filtered.");return true}var o=s.isMatching(r,function(t){if(t===r){return false}if(typeof e==="string"){return t&&t.getId()===e}return t===e},t);n.debug("Control '"+r+(o?"' has ":"' does not have ")+(t?"direct ":"")+"ancestor '"+e);return o}}},true);