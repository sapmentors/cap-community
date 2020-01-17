/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";document.documentElement.addEventListener("paste",function(e){var t=document.activeElement,a;if(t instanceof HTMLElement&&!t.contains(e.target)){if(typeof ClipboardEvent==="function"){a=new ClipboardEvent("paste",{bubbles:true,cancelable:true,clipboardData:e.clipboardData})}else{a=document.createEvent("Event");a.initEvent("paste",true,true);a.clipboardData=e.clipboardData}t.dispatchEvent(a);e.stopImmediatePropagation();e.preventDefault()}})});