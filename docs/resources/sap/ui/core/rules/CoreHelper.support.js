/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/dom/jquery/control"],function(e){"use strict";var t={nodeHasUI5ParentControl:function(t,r){var n=["sap.ui.core.HTML"],u=e(t).control()[0];if(!u){return false}var a=u.getMetadata().getName(),f=n.indexOf(a)===-1,i=r.getElements().indexOf(u)>-1;return f&&i},getExternalStyleSheets:function(){return Array.from(document.styleSheets).filter(function(e){var t=sap.ui.getCore().getConfiguration().getTheme(),r="/themes/"+t+"/library.css",n=!e.href||!(e.href.indexOf(r)!==-1),u=!!e.rules;return n&&u})},getStyleSheetName:function(e){return e.href||"Inline"},getStyleSource:function(e){var t;if(e.href){t=e.href.substr(e.href.lastIndexOf("/"),e.href.length-1)}else{t=" <style> tag "}return t}};return t},true);