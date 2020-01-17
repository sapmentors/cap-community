/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={init:function(e,t){var i=false;document.addEventListener("keydown",function(n){try{if(n.keyCode===18){i=typeof n.location!=="number"||n.location===1;return}if(n.shiftKey&&n.altKey&&n.ctrlKey&&i){if(n.keyCode===80){sap.ui.require(["sap/ui/core/support/techinfo/TechnicalInfo"],function(i){i.open(function(){var i=e();return{modules:i.modules,prefixes:i.prefixes,config:t}})})}else if(n.keyCode===83){sap.ui.require(["sap/ui/core/support/Support"],function(e){var t=e.getStub();if(t.getType()!=e.StubType.APPLICATION){return}t.openSupportTool()})}}}catch(e){}})}};return e});