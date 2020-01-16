/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(t){"use strict";var r=function t(r,e){if(this.length>0){if(e){return this.first().parents("["+r+"='"+e+"']").get(0)}else{return this.first().parents("["+r+"]").get(0)}}};t.fn.parentByAttribute=r;return t});