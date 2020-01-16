/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/assert"],function(r){"use strict";var a=function(a){r(a instanceof Array,"uniqueSort: input parameter must be an Array");var e=a.length;if(e>1){a.sort();var t=0;for(var n=1;n<e;n++){if(a[n]!==a[t]){a[++t]=a[n]}}if(++t<e){a.splice(t,e-t)}}return a};return a});