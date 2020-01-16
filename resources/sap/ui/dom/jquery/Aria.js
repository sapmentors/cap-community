/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(i){"use strict";function t(i,t,r){var e=this.attr(i);if(!e){return this.attr(i,t)}var n=e.split(" ");if(n.indexOf(t)==-1){r?n.unshift(t):n.push(t);this.attr(i,n.join(" "))}return this}function r(i,t){var r=this.attr(i)||"",e=r.split(" "),n=e.indexOf(t);if(n==-1){return this}e.splice(n,1);if(e.length){this.attr(i,e.join(" "))}else{this.removeAttr(i)}return this}i.fn.addAriaLabelledBy=function(i,r){return t.call(this,"aria-labelledby",i,r)};i.fn.removeAriaLabelledBy=function(i){return r.call(this,"aria-labelledby",i)};i.fn.addAriaDescribedBy=function(i,r){return t.call(this,"aria-describedby",i,r)};i.fn.removeAriaDescribedBy=function(i){return r.call(this,"aria-describedby",i)};return i});