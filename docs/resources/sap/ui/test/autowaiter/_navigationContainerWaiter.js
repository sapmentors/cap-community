/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/test/_OpaLogger"],function(n,e){"use strict";var i=e.getLogger("sap.ui.test.autowaiter._navigationContainerWaiter#hasPending");function t(){var e=sap.ui.require("sap/m/NavContainer");if(!e){return false}function t(n){return n instanceof e}return n.registry.filter(t).some(function(n){if(n._bNavigating){i.debug("The NavContainer "+n+" is currently navigating")}return n._bNavigating})}return{hasPending:t}});