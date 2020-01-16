/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/support/library"],function(e){"use strict";var i=e.Categories,s=e.Severity,t=e.Audiences;var a={id:"maskUsesValidRules",audiences:[t.Control],categories:[i.Usage],enabled:true,minversion:"1.34",title:"MaskInput: Check the rules",description:"Checks if the rules are valid",resolution:"Define valid rules",resolutionurls:[{text:"SAP Fiori Design Guidelines: MaskInput",href:"https://experience.sap.com/fiori-design-web/generic-mask-input/"}],check:function(e,i,t){t.getElementsByClassName("sap.m.MaskInput").forEach(function(i){var t=i._validateDependencies();if(t){var a=i.getId(),n=i.getMetadata().getElementName();e.addIssue({severity:s.Medium,details:"MaskInput '"+n+"' ("+a+"): "+t,context:{id:a}})}})}};return[a]},true);