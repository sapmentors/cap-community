/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/support/library"],function(e){"use strict";var t=e.Categories,a=e.Severity,r=e.Audiences;var i={id:"objectMarkerAdditionalInfo",audiences:[r.Control],categories:[t.Usage],enabled:true,minversion:"*",title:"ObjectMarker: additionalInfo property",description:"Checks if additionalInfo property is used but no type is set",resolution:"Set type of the ObjectMarker",resolutionurls:[{text:"API Reference: sap.m.ObjectMarker",href:"https://sapui5.hana.ondemand.com/#/api/sap.m.ObjectMarker"}],check:function(e,t,r){r.getElementsByClassName("sap.m.ObjectMarker").forEach(function(t){var r=t.getId(),i=t.getMetadata().getElementName();if(t.getAdditionalInfo()&&!t.getType()){e.addIssue({severity:a.Medium,details:"ObjectMarker '"+i+"' ("+r+") sets additionalInfo but has no type.",context:{id:r}})}})}};return[i]},true);