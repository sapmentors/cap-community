/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./InputBaseRenderer"],function(e,t){"use strict";var n=e.extend(t);n.getLabelledByAnnouncement=function(e){var n=e.getMask(),r=e.getPlaceholder()||"",u,a,i="";if(n&&n.length){u=sap.ui.getCore().getLibraryResourceBundle("sap.m");a=u.getText("MASKINPUT_SCREENREADER_TAG");if(r){r=" "+r+" "}i=a+r;return i}return t.getLabelledByAnnouncement.apply(this,arguments)};n.getDescribedByAnnouncement=function(e){var n=e.getMask(),r=e.getPlaceholderSymbol(),u,a="";if(n.length&&r){u=sap.ui.getCore().getLibraryResourceBundle("sap.m");a=u.getText("MASKINPUT_SCREENREADER_DESCRIPTION",[r,n]);return a.trim()}return t.getDescribedByAnnouncement.apply(this,arguments)};return n},true);