/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ComboBoxBaseRenderer","./ComboBoxTextFieldRenderer","sap/ui/core/Renderer","sap/ui/Device"],function(e,o,n,r){"use strict";var s=n.extend(e);s.CSS_CLASS_MULTICOMBOBOX="sapMMultiComboBox";s.addOuterClasses=function(o,n){e.addOuterClasses.apply(this,arguments);o.addClass(s.CSS_CLASS_MULTICOMBOBOX);if(n._hasTokens()){o.addClass("sapMMultiComboBoxHasToken")}};s.getAriaDescribedBy=function(e){var n=o.getAriaDescribedBy.apply(this,arguments),r=e._oTokenizer&&e._oTokenizer.getTokensInfoId();return(n||"")+" "+r};s.prependInnerContent=function(e,o){e.renderControl(o._oTokenizer)};return s},true);