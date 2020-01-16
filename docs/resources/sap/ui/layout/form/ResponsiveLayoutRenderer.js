/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./FormLayoutRenderer"],function(e,r){"use strict";var n=e.extend(r);n.getMainClass=function(){return"sapUiFormResLayout"};n.renderContainers=function(e,r,n){var t=n.getVisibleFormContainers();var o=t.length;if(o>0){if(o>1){e.renderControl(r._mainRFLayout)}else if(r.mContainers[t[0].getId()][0]){e.renderControl(r.mContainers[t[0].getId()][0])}else{e.renderControl(r.mContainers[t[0].getId()][1])}}};return n},true);