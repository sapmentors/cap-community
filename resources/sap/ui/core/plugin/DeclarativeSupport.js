/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/core/DeclarativeSupport","sap/base/Log"],function(o,t,i){"use strict";var e=function(){};e.prototype.startPlugin=function(o,e){i.info("Starting DeclarativeSupport plugin.");this.oCore=o;this.oWindow=window;t.compile(document.body)};e.prototype.stopPlugin=function(){i.info("Stopping DeclarativeSupport plugin.");this.oCore=null};(function(){var o=new e;sap.ui.getCore().registerPlugin(o)})();return e},true);