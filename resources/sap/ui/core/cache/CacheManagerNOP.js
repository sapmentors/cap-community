/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={name:"CacheManagerNOP",set:function(){return Promise.resolve()},get:function(){return Promise.resolve(undefined)},has:function(){return Promise.resolve(false)},del:function(){return Promise.resolve()},reset:function(){return Promise.resolve()},init:function(){return Promise.resolve(this)},_db:{close:function(){}},_getCount:function(){return Promise.resolve(0)},_destroy:function(){}};return e},false);