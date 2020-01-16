/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/support/library"],function(e){"use strict";var t=e.Categories,i=e.Severity,a=e.Audiences;var n={id:"noContainInactiveItemsInSelectDialog",audiences:[a.Control],categories:[t.Usability],enabled:true,minversion:"1.28",title:"SelectDialog: Select Dialog should not contain inactive items",description:"All items in a Select Dialog should be interactable/selectable",resolution:"Make all items interactable/selectable or remove the inactive ones",resolutionurls:[{text:"SAP Fiori Design Guidelines: SelectDialog",href:"https://experience.sap.com/fiori-design-web/select-dialog/#behavior-and-interaction"}],check:function(e,t,a){a.getElementsByClassName("sap.m.SelectDialog").forEach(function(t){var a=t.getItems(),n="";a.forEach(function(e){if(e.getType()===sap.m.ListType.Inactive){var t=e.getId(),i=e.getMetadata().getElementName();n+=i+" ("+t+"); "}});if(n){var o=t.getId(),s=t.getMetadata().getElementName();e.addIssue({severity:i.Medium,details:"SelectDialog '"+s+"' ("+o+") contains one or more items of type 'Inactive' : "+n,context:{id:o}})}})}};return[n]},true);