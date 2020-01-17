/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var t={};t.render=function(t,e){this.startWizardStep(t,e);this.renderWizardStepTitle(t,e);this.renderContent(t,e);this.endWizardStep(t)};t.startWizardStep=function(t,e){t.write("<div");t.writeAccessibilityState(e,{labelledby:e._getNumberInvisibleText().getId(),role:"region"});t.writeControlData(e);t.addClass("sapMWizardStep");t.writeClasses();t.write(">")};t.renderWizardStepTitle=function(t,e){t.write("<h3 class='sapMWizardStepTitle' id='"+this.getTitleId(e)+"'>");t.writeEscaped(e.getTitle());t.write("</h3>")};t.getTitleId=function(t){return t.getId()+"-Title"};t.renderContent=function(t,e){e.getContent().forEach(t.renderControl,t);t.renderControl(e.getAggregation("_nextButton"))};t.endWizardStep=function(t){t.write("</div>")};return t},true);