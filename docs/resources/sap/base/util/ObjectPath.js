/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var r={};var t=window;function e(r){return Array.isArray(r)?r:r.split(".")}r.create=function(r,n){var a=n||t;var o=e(r);for(var i=0;i<o.length;i++){var u=o[i];if(a[u]===null||a[u]!==undefined&&(typeof a[u]!=="object"&&typeof a[u]!=="function")){throw new Error("Could not set object-path for '"+o.join(".")+"', path segment '"+u+"' already exists.")}a[u]=a[u]||{};a=a[u]}return a};r.get=function(r,n){var a=n||t;var o=e(r);var i=o.pop();for(var u=0;u<o.length&&a;u++){a=a[o[u]]}return a?a[i]:undefined};r.set=function(n,a,o){o=o||t;var i=e(n);var u=i.pop();var f=r.create(i,o);f[u]=a};return r});