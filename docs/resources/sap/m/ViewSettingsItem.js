/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Item","sap/ui/base/ManagedObject"],function(e,t,r){"use strict";var p=t.extend("sap.m.ViewSettingsItem",{metadata:{library:"sap.m",properties:{selected:{type:"boolean",group:"Behavior",defaultValue:false}},events:{itemPropertyChanged:{parameters:{changedItem:{type:"sap.m.ViewSettingsItem"},propertyKey:{type:"string"},propertyValue:{type:"any"}}}}}});p.prototype.setSelected=function(e){p.prototype.setProperty.call(this,"selected",e,true);return this};p.prototype.setProperty=function(e,t,p,a){r.prototype.setProperty.apply(this,arguments);a=a===undefined?true:a;if(a){this.fireItemPropertyChanged({changedItem:this,propertyKey:e,propertyValue:t})}};return p});