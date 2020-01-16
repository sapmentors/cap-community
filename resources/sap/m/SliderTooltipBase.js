/*!
* OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["sap/ui/core/Control","./library","./SliderTooltipBaseRenderer"],function(e,t,i){"use strict";var r=e.extend("sap.m.SliderTooltipBase",{metadata:{library:"sap.m"}});r.prototype.init=function(){this.fValue=0};r.prototype.setValue=function(e){this.fValue=e;this.sliderValueChanged(e)};r.prototype.getValue=function(){return this.fValue};r.prototype.sliderValueChanged=function(e){};return r});