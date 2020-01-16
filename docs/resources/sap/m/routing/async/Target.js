/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{_place:function(t){var n=this._super._place.apply(this,arguments),e=this;return this._oTargetHandler._chainNavigation(function(){return n.then(function(n){e._oTargetHandler.addNavigation({navigationIdentifier:e._oOptions._name,transition:e._oOptions.transition,transitionParameters:e._oOptions.transitionParameters,eventData:t,targetControl:n.control,view:n.view,preservePageInSplitContainer:e._oOptions.preservePageInSplitContainer});if(t){delete t.routeConfig}return n})})}}},true);