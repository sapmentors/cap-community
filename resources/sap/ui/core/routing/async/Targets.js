/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(e){"use strict";return{display:function(e,r,t){var i=Promise.resolve();return this._display(e,r,t,i)},_display:function(e,r,t,i){var n=this,a=[];if(!Array.isArray(e)){e=[e]}this._attachTitleChanged(e,t);return this._alignTargetsInfo(e).reduce(function(e,t){var i={prefix:t.prefix};return n._displaySingleTarget(t,r,e,i).then(function(e){e=e||{};e.targetInfo=t;a.push(e)})},i).then(function(){return a})},_displaySingleTarget:function(r,t,i,n){var a=r.name,s=this.getTarget(a);if(s!==undefined){return s._display(t,i,n)}else{var u='The target with the name "'+a+'" does not exist!';e.error(u,this);return Promise.resolve({name:a,error:u})}}}});