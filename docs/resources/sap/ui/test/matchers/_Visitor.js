/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObject"],function(e){"use strict";return e.extend("sap.ui.test.matchers._Visitor",{isMatching:function(e,t,r){if(t(e)){return true}var i=e.getParent();if(r){return t(i)}while(i){if(t(i)){return true}i=i.getParent()}return false}})});