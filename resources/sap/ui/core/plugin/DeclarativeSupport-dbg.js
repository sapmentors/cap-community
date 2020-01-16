/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.ui.core.plugin.DeclarativeSupport
sap.ui.define(['sap/ui/core/Core', 'sap/ui/core/DeclarativeSupport', "sap/base/Log"],
	function(Core, DeclarativeSupport1, Log) {
	"use strict";



	/**
	 * Creates an instance of the class <code>sap.ui.core.plugin.DeclarativeSupport</code>
	 * The plugin uses the <code>sap.ui.core.DeclarativeSupport</code>.
	 *
	 * @author Peter Muessig, Tino Butz
	 * @see sap.ui.core.DeclarativeSupport
	 * @public
	 * @since 1.7.0
	 * @version 1.73.2
	 * @alias sap.ui.core.plugin.DeclarativeSupport
	 */
	var DeclarativeSupport = function() {
	};


	/**
	 * Will be invoked by <code>sap.ui.core.Core</code> to notify the plugin to start.
	 *
	 * @param {sap.ui.core.Core} oCore reference to the Core
	 * @param {boolean} [bOnInit] whether the hook is called during core initialization
	 * @public
	 */
	DeclarativeSupport.prototype.startPlugin = function(oCore, bOnInit) {
		Log.info("Starting DeclarativeSupport plugin.");
		this.oCore = oCore;
		this.oWindow = window;
		DeclarativeSupport1.compile(document.body);
	};

	/**
	 * Will be invoked by <code>sap.ui.core.Core</code> to notify the plugin to start
	 * @public
	 */
	DeclarativeSupport.prototype.stopPlugin = function() {
		Log.info("Stopping DeclarativeSupport plugin.");
		this.oCore = null;
	};


	/**
	 * Create the <code>sap.ui.core.plugin.DeclarativeSupport</code> plugin and
	 * register it within the <code>sap.ui.core.Core</code>.
	 */
	(function(){
		var oThis = new DeclarativeSupport();
		sap.ui.getCore().registerPlugin(oThis);
	}());

	return DeclarativeSupport;

}, /* bExport= */ true);