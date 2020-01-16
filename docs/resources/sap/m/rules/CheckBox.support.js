/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/support/library"],function(e){"use strict";var t=e.Categories,i=e.Severity,a=e.Audiences;var s={id:"checkBoxDisabledAndEditable",audiences:[a.Control],categories:[t.Functionality],enabled:true,minversion:"-",title:"CheckBox: the control is editable, while the control is disabled",description:"Disabled control can`t be edited",resolution:"Either set enabled to true ot set editable to false",resolutionurls:[{text:"API Reference: sap.m.CheckBox",href:"https://sapui5.hana.ondemand.com/#/api/sap.m.CheckBox"}],check:function(e,t,a){a.getElementsByClassName("sap.m.CheckBox").forEach(function(t){var a,s;if(t.getEditable()&&!t.getEnabled()){a=t.getId();s=t.getMetadata().getElementName();e.addIssue({severity:i.Low,details:"CheckBox '"+s+"' ("+a+") is editable, but disabled",context:{id:a}})}})}};return[s]},true);