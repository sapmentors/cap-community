/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/dom/getOwnerWindow"],function(t,e){"use strict";var i=function i(){var r=this.get(0);if(r){if(r.getBoundingClientRect){var n=r.getBoundingClientRect();var o={top:n.top,left:n.left,width:n.right-n.left,height:n.bottom-n.top};var f=e(r);o.left+=t(f).scrollLeft();o.top+=t(f).scrollTop();return o}else{return{top:10,left:10,width:r.offsetWidth,height:r.offsetHeight}}}return null};t.fn.rect=i;return t});