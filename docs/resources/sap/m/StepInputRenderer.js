/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var t={apiVersion:2};t.render=function(t,e){var a=e._getInput(),n=e.getWidth(),s=e.getEnabled(),p=e.getEditable(),r=e.getValueState();t.openStart("div",e);if(s&&p){t.attr("tabindex","-1")}t.style("width",n);t.class("sapMStepInput");t.class("sapMStepInput-CTX");!s&&t.class("sapMStepInputReadOnly");!p&&t.class("sapMStepInputNotEditable");if(r==="Error"||r==="Warning"){t.class("sapMStepInput"+r)}t.openEnd();t.renderControl(a);t.close("div")};return t},true);