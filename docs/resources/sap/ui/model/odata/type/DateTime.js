/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/model/odata/type/DateTimeBase"],function(e,a){"use strict";function t(a,t){var i={};if(t){switch(t.displayFormat){case"Date":i.isDateOnly=true;break;case undefined:break;default:e.warning("Illegal displayFormat: "+t.displayFormat,null,a.getName())}i.nullable=t.nullable}return i}var i=a.extend("sap.ui.model.odata.type.DateTime",{constructor:function(e,i){a.call(this,e,t(this,i))}});i.prototype.getName=function(){return"sap.ui.model.odata.type.DateTime"};return i});