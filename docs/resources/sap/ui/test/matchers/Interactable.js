/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/matchers/Matcher","sap/ui/test/matchers/Visible","sap/ui/test/matchers/_Busy","sap/ui/test/matchers/_Visitor","sap/ui/thirdparty/jquery"],function(e,t,r,a,i){"use strict";var s=new t;var n=new r;var u=new a;return e.extend("sap.ui.test.matchers.Interactable",{isMatching:function(e){if(!s.isMatching(e)){return false}if(n.isMatching(e)){return false}var t=u.isMatching(e,function(e){return e.getMetadata().getName()==="sap.ui.core.UIArea"&&e.bNeedsRerendering});if(t){this._oLogger.debug("Control '"+e+"' is currently in a UIArea that needs a new rendering");return false}var r=e.$().closest("#sap-ui-static").length;var a=i("#sap-ui-blocklayer-popup").is(":visible");if(!r&&a){this._oLogger.debug("The control '"+e+"' is hidden behind a blocking popup layer");return false}return true}})});