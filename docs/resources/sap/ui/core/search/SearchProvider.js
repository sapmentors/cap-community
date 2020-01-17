/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","sap/ui/core/library","sap/base/Log"],function(e,r,a){"use strict";var s=e.extend("sap.ui.core.search.SearchProvider",{metadata:{abstract:true,library:"sap.ui.core",properties:{icon:{type:"string",group:"Misc",defaultValue:null}}}});s.prototype.suggest=function(e,r){a.warning("sap.ui.core.search.SearchProvider is the abstract base class for all SearchProviders. Do not create instances of this class, but use a concrete sub class instead.")};return s});