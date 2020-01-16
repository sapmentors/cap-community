/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var t={};t.applyChange=function(t,e,r){var n=r.modifier,a=t.getDefinition(),i=a.content,o={target:n.getProperty(e,"target")};n.setProperty(e,"target",i);t.setRevertData(o);return true};t.revertChange=function(t,e,r){var n=r.modifier,a=t.getRevertData(),i=a.target;n.setProperty(e,"target",i);return true};t.completeChangeContent=function(t,e,r){return true};return t});