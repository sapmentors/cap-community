/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return function(t,i){if(!this.isA("sap.ui.core.Element")){return}this._propagateTitleIdToChildControl=function(){var e=this.getMetadata().getAggregation(t),r=e&&e.get(this),o=i&&i.call(this),s;if(!sap.ui.getCore().getConfiguration().getAccessibility()||!o||!r||r.length===0){return false}s=r[0];if(s&&s._suggestTitleId&&s.isA(["sap.ui.layout.form.SimpleForm","sap.ui.layout.form.Form","sap.ui.comp.smartform.SmartForm"])){s._suggestTitleId(o);return true}return false};this._initTitlePropagationSupport=function(){this.addEventDelegate({onBeforeRendering:this._propagateTitleIdToChildControl.bind(this)})}}},false);