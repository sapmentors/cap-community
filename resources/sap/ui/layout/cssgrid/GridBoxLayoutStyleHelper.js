/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={};t._mInstanceStyles={};t.setItemHeight=function(t,e){var n="#"+t+".sapUiLayoutCSSGridBoxLayoutFlattenHeight ul "+".sapMLIB:not(.sapMGHLI),.sapUiDnDGridIndicator"+"{ height: "+e+"px; }";if(this._mInstanceStyles[t]!==n){this._mInstanceStyles[t]=n;this._reapplyStyles()}};t._getStyleHelper=function(){var t=document.getElementById("sapUiLayoutCSSGridGridBoxLayoutStyleHelper");if(!t){t=document.createElement("style");t.id="sapUiLayoutCSSGridGridBoxLayoutStyleHelper";t.type="text/css";document.getElementsByTagName("head")[0].appendChild(t)}return t};t._reapplyStyles=function(){var t="",e=this._getStyleHelper();for(var n in this._mInstanceStyles){t+=this._mInstanceStyles[n]+"\n"}e.innerHTML=t};return t});