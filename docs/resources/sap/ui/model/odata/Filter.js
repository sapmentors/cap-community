/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,t,a){"use strict";var s=e.extend("sap.ui.model.odata.Filter",{constructor:function(e,t,a){if(typeof e==="object"){var s=e;e=s.path;t=s.values;a=s.and}this.sPath=e;this.aValues=t;this.bAND=a==undefined?true:a},convert:function(){var e=[];for(var a=0,s=this.aValues&&this.aValues.length||0;a<s;a++){e.push(new t({path:this.sPath,operator:this.aValues[a].operator,value1:this.aValues[a].value1,value2:this.aValues[a].value2}))}if(e.length>1){var i=new t({filters:e,and:this.bAND});return i}else{return e[0]}}});return s});