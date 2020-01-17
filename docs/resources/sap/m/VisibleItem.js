/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Item","sap/ui/thirdparty/jquery"],function(e,t,i){"use strict";var r=t.extend("sap.m.VisibleItem",{metadata:{library:"sap.m",properties:{visible:{type:"boolean",group:"Behavior",defaultValue:true}}}});r.prototype._getRefs=function(){var e=this.getParent(),t,r=this;if(e&&e.$("content")){t=e.$("content").find("li").filter(function(){return i(this).html()===r.getText()})}return t};r.prototype.setVisible=function(e){if(this.getVisible()===e){return}var t=this._getRefs();if(t){if(e){t.removeClass("TPSliderItemHidden")}else{t.addClass("TPSliderItemHidden")}}return this.setProperty("visible",e,true)};return r});