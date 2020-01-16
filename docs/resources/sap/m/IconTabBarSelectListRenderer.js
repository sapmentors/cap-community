/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};e.render=function(e,t){var r,i,n=t.getVisibleItems(),l=n.length,s=t._iconTabHeader,a=true;if(s){s._checkTextOnly(n);a=s._bTextOnly;t._bIconOnly=t.checkIconOnly(n)}e.write("<ul");e.writeAttribute("role","listbox");e.writeControlData(t);e.addClass("sapMITBSelectList");if(a){e.addClass("sapMITBSelectListTextOnly")}e.writeClasses();e.write(">");for(r=0;r<l;r++){i=n[r];i.renderInSelectList(e,t,r,l)}e.write("</ul>")};return e},true);