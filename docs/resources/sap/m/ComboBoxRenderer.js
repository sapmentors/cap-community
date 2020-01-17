/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ComboBoxBaseRenderer","sap/ui/core/Renderer"],function(s,a){"use strict";var e=a.extend(s);e.CSS_CLASS_COMBOBOX="sapMComboBox";e.addOuterClasses=function(a,d){s.addOuterClasses.apply(this,arguments);a.addClass(e.CSS_CLASS_COMBOBOX)};e.addInnerClasses=function(a,d){s.addInnerClasses.apply(this,arguments);a.addClass(e.CSS_CLASS_COMBOBOX+"Inner")};e.addButtonClasses=function(a,d){s.addButtonClasses.apply(this,arguments);a.addClass(e.CSS_CLASS_COMBOBOX+"Arrow")};e.addPlaceholderClasses=function(a,d){s.addPlaceholderClasses.apply(this,arguments);a.addClass(e.CSS_CLASS_COMBOBOX+"Placeholder")};return e},true);