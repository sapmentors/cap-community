/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var r;var e=function(e,n,t){if(!e){return e}r=r||sap.ui.requireSync("sap/ui/base/Object");function i(e,n){return function(){var i=e[n].apply(e,arguments);if(t){return this}else{return i instanceof r?i.getInterface():i}}}if(!n){return{}}var u;for(var f=0,a=n.length;f<a;f++){u=n[f];if(!e[u]||typeof e[u]==="function"){this[u]=i(e,u)}}};return e},true);