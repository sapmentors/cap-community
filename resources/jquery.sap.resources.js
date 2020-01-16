/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/i18n/ResourceBundle","jquery.sap.global"],function(e,s){"use strict";s.sap.resources=function(){return e.create.apply(e,arguments)};s.sap.resources.isBundle=function(s){return s instanceof e};s.sap.resources._getFallbackLocales=e._getFallbackLocales;return s});