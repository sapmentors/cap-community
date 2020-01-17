/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(t){"use strict";var e=function t(e){var r=arguments.length,s,i;s=this.prop("tagName");i=this.prop("type");if(this.length===1&&(s=="INPUT"&&(i=="text"||i=="password"||i=="search")||s=="TEXTAREA")){var n=this.get(0);if(r>0){if(typeof n.selectionStart=="number"){n.focus();n.selectionStart=e;n.selectionEnd=e}return this}else{if(typeof n.selectionStart=="number"){return n.selectionStart}return-1}}else{return this}};t.fn.cursorPos=e;return t});