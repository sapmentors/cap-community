/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/core/tmpl/Template","sap/base/Log"],function(t,i,n){"use strict";var e=function(){};e.prototype.startPlugin=function(t,i){n.info("Starting TemplatingSupport plugin.");this.oCore=t;sap.ui.template()};e.prototype.stopPlugin=function(){n.info("Stopping TemplatingSupport plugin.");this.oCore=null};(function(){var t=new e;sap.ui.getCore().registerPlugin(t)})();return e},true);