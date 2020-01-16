/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(t){"use strict";var n=function(n){var r=t.prop(n,"tabIndex");return r!=null&&r>=0&&(!t.attr(n,"disabled")||t.attr(n,"tabindex"))};t.fn.hasTabIndex=function(){return n(this.get(0))};return t});