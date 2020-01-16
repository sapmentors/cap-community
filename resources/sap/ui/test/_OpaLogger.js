/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(e){"use strict";e.setLogEntriesLimit(Infinity);var t=[];var n=e.Level.DEBUG;return{setLevel:function(i){var r=i&&i.toUpperCase();var o=r&&e.Level[r];n=o||n;t.forEach(function(t){e.setLevel(n,t)})},getLogger:function(i){t.push(i);var r=e.getLogger(i,n);r.timestamp=function(t){if(console.timeStamp&&this.getLevel()>=e.Level.DEBUG){console.timeStamp(t)}};return r},getLevel:function(){return n}}},true);