/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/performance/trace/FESR","sap/base/Log"],function(e,t){"use strict";return function(){var i=document.querySelector("meta[name=sap-ui-fesr]"),n=i?i.getAttribute("content"):undefined,r=!!n&&n!=="false",s=window.location.search.match(/[\?|&]sap-ui-(?:xx-)?fesr=(true|x|X|false|.+)&?/),a=n&&n!=="true"?n:undefined;if(s){r=s[1]&&s[1]!="false";a=["true","false","x","X",undefined].indexOf(s[1])===-1?s[1]:a}if(typeof window.performance.getEntriesByType==="function"){e.setActive(r,a)}else{t.debug("FESR is not supported in clients without support of window.Performance extensions.")}if(/sap-ui-xx-e2e-trace=(true|x|X)/.test(location.search)){sap.ui.requireSync("sap/ui/core/support/trace/E2eTraceLib")}}});