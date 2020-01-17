/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/_LogCollector","sap/base/Log","sap/base/strings/capitalize","sap/ui/thirdparty/jquery"],function(e,r,t,a){"use strict";var s=r.getLogger("sap.ui.test.matchers.Properties");return function(e){return function(r){var u=true;a.each(e,function(e,a){var o=r["get"+t(e,0)];if(!o){u=false;s.error("Control '"+r+"' does not have a property '"+e+"'");return false}var n=o.call(r);if(a instanceof RegExp){u=a.test(n)}else{u=n===a}if(!u){s.debug("Control '"+r+"' property '"+e+"' has value '"+n+"' but should have value '"+a+"'");return false}});return u}}},true);