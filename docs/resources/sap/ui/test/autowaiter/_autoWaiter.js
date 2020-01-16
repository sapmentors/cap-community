/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/_OpaLogger","sap/ui/test/autowaiter/_XHRWaiter","sap/ui/test/autowaiter/_timeoutWaiter","sap/ui/test/autowaiter/_promiseWaiter","sap/ui/test/autowaiter/_navigationContainerWaiter","sap/ui/test/autowaiter/_UIUpdatesWaiter"],function(t,a,e,i,r,n){"use strict";var o=t.getLogger("sap.ui.test.autowaiter._autoWaiter");var u=[r,n,a,i,e];return{hasToWait:function(){var t=false;u.forEach(function(a){if(!t&&a.hasPending()){t=true}});if(!t){o.timestamp("opa.autoWaiter.syncPoint");o.debug("AutoWaiter syncpoint")}return t},extendConfig:function(t){u.forEach(function(a){if(a.extendConfig){a.extendConfig(t)}})}}},true);