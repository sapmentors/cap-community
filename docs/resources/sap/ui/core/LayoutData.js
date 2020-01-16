/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Element","./library","sap/ui/thirdparty/jquery"],function(t,a,e){"use strict";var r=t.extend("sap.ui.core.LayoutData",{metadata:{abstract:true,library:"sap.ui.core"}});r.prototype.invalidate=function(){var t=this.getParent();if(t&&t.getMetadata().getName()=="sap.ui.core.VariantLayoutData"){t=t.getParent()}if(t){var a=t.getParent();if(a){var r=e.Event("LayoutDataChange");r.srcControl=t;a._handleEvent(r)}}};r.prototype.setLayoutData=function(t){return this};return r});