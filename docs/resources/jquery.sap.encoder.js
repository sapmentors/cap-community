/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/base/security/encodeXML","sap/base/security/encodeJS","sap/base/security/encodeURL","sap/base/security/encodeURLParameters","sap/base/security/encodeCSS","sap/base/security/URLWhitelist","sap/base/security/sanitizeHTML"],function(e,s,a,t,i,c,p,r){"use strict";e.sap.encodeHTML=s;e.sap.encodeXML=s;e.sap.escapeHTML=s;e.sap.encodeJS=a;e.sap.escapeJS=a;e.sap.encodeURL=t;e.sap.encodeURLParameters=i;e.sap.encodeCSS=c;e.sap.clearUrlWhitelist=p.clear;e.sap.addUrlWhitelist=p.add;e.sap.removeUrlWhitelist=function(e){p.delete(p.entries()[e])};e.sap.getUrlWhitelist=p.entries;e.sap.validateUrl=p.validate;e.sap._sanitizeHTML=r;return e});