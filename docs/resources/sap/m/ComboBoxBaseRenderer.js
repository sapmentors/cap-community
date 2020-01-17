/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ComboBoxTextFieldRenderer","sap/ui/core/Renderer","sap/ui/core/Core"],function(t,e,s){"use strict";var i=e.extend(t);i.CSS_CLASS_COMBOBOXBASE="sapMComboBoxBase";i.getAccessibilityState=function(e){var s=t.getAccessibilityState.call(this,e),i=e._getList();if(i){s.controls=i.getId()}return s};i.writeAccAttributes=function(e,i){t.writeAccAttributes.apply(this,arguments);if(s.getConfiguration().getAccessibility()){e.writeAttribute("aria-expanded",i.isOpen())}};i.addOuterClasses=function(e,s){t.addOuterClasses.apply(this,arguments);var a=i.CSS_CLASS_COMBOBOXBASE;e.addClass(a);if(!s.getEnabled()){e.addClass(a+"Disabled")}if(!s.getEditable()){e.addClass(a+"Readonly")}};i.addButtonClasses=function(e,s){t.addButtonClasses.apply(this,arguments);e.addClass(i.CSS_CLASS_COMBOBOXBASE+"Arrow")};return i},true);