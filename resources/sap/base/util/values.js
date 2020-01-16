/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var e=function e(t){if(typeof t==="undefined"||t===null||t!==t){return[]}if(typeof Object.values==="function"){return Object.values(t)}if(typeof t==="string"){return t.split("")}if(typeof t!=="object"){return[]}return Object.keys(t).map(function(e){return t[e]})};return e});