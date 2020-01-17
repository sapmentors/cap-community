/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/mvc/View"],function(e,i){"use strict";return{_getObjectWithGlobalId:function(e){function t(){e.viewName=e.name;delete e.name;return i._legacyCreate(e)}var n,a=e.name,o;this._checkName(a,"View");o=this._oCache.view[a];n=o&&o[e.id];if(n){return n}if(this._oComponent){n=this._oComponent.runAsOwner(t)}else{n=t()}o=this._oCache.view[a];if(!o){o=this._oCache.view[a]={};o[undefined]=n}if(e.id!==undefined){o[e.id]=n}this.fireCreated({object:n,type:"View",options:e});return n},_getViewWithGlobalId:function(e){if(e&&!e.name){e.name=e.viewName}return this._getObjectWithGlobalId(e)}}});