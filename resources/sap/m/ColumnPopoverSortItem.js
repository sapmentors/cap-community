/*
 * ! OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ColumnPopoverItem"],function(e){"use strict";var t=e.extend("sap.m.ColumnPopoverSortItem",{library:"sap.m",metadata:{properties:{label:{type:"string",group:"Misc",defaultValue:null}},events:{sort:{parameters:{property:{type:"string"}}}},aggregations:{sortChildren:{type:"sap.ui.core.Item",multiple:true,singularName:"sortChild",bindable:true}}}});return t});