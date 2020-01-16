/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/dom/isHidden"],function(t,e){"use strict";function n(e){return t(e).find("input, textarea").not("input[readonly],textarea[readonly],input[type=hidden],input[type=button],input[type=submit],input[type=reset],input[type=image],button").filter(":enabled:visible:first")[0]}function i(t){if(!t||e(t)){return null}return n(t)}return i});