/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/support/library"],function(e){"use strict";var t=e.Categories,i=e.Severity,o=e.Audiences;var n={id:"tokenizerParentRule",audiences:[o.Application],categories:[t.Usage],enabled:true,minversion:"1.28",title:"Tokenizer: Tokenizer parent control",description:"The tokenizer can only be used as part of MultiComboBox, MultiInput or ValueHelpDialog.",resolution:"Do not use the Tokenizer control standalone.",check:function(e,t,o){var n=o.getElementsByClassName("sap.m.Tokenizer"),a,r;n.forEach(function(t){r=t.getParent();a=r&&r instanceof sap.m.MultiInput||r instanceof sap.m.MultiComboBox||r.hasStyleClass("compVHTokenizerHLayout");if(!a){e.addIssue({severity:i.High,details:"Tokenizer with id: "+t.getId()+" is not inside a MultiComboBox, MultiInput or ValueHelpDialog",context:{id:t.getId()}})}})}};return[n]},true);