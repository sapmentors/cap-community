/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./InputRenderer","sap/ui/core/Renderer"],function(e,n){"use strict";var t=n.extend(e);t.prependInnerContent=function(e,n){e.renderControl(n._tokenizer)};t.addOuterClasses=function(n,t){e.addOuterClasses.apply(this,arguments);n.addClass("sapMMultiInput");if(t.getTokens().length>0){n.addClass("sapMMultiInputHasTokens")}};t.getAriaDescribedBy=function(n){var t=e.getAriaDescribedBy.apply(this,arguments),r=n.getAggregation("tokenizer")&&n.getAggregation("tokenizer").getTokensInfoId();if(t){t=t+" "+r}else{t=r}return t};return t},true);