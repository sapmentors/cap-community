/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBase","./library","./ActionListItemRenderer"],function(t,e,n){"use strict";var i=e.ListMode;var o=e.ListType;var r=t.extend("sap.m.ActionListItem",{metadata:{library:"sap.m",properties:{text:{type:"string",group:"Misc",defaultValue:null}}}});r.prototype.init=function(){this.setType(o.Active);t.prototype.init.apply(this,arguments)};r.prototype.getMode=function(){return i.None};r.prototype.onsapspace=r.prototype.onsapenter;r.prototype.getContentAnnouncement=function(){return this.getText()};return r});