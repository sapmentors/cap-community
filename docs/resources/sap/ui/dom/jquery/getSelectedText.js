/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(t){"use strict";var e=function(){var t=this.get(0);try{if(typeof t.selectionStart==="number"){return t.value.substring(t.selectionStart,t.selectionEnd)}}catch(t){}return""};t.fn.getSelectedText=e;return t});