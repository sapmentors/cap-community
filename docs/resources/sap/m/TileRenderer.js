/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={};e.render=function(e,i){var t,s;e.write('<div tabindex="0"');e.writeControlData(i);e.addClass("sapMTile");e.addClass("sapMPointer");e.writeClasses();if(i._invisible){e.addStyle("visibility","hidden");e.writeStyles()}var r=i.getTooltip_AsString();if(r){e.writeAttributeEscaped("title",r)}if(i.getParent()instanceof sap.m.TileContainer){t=i.getParent();s=t._getVisibleTiles();e.writeAccessibilityState(i,{role:"option",posinset:t._indexOfVisibleTile(i,s)+1,setsize:s.length})}e.write(">");if(i.getRemovable()){e.write('<div id="'+i.getId()+'-remove" class="sapMTCRemove"></div>')}else{e.write('<div id="'+i.getId()+'-remove" class="sapMTCNoRemove"></div>')}e.write('<div class="sapMTileContent">');this._renderContent(e,i);e.write("</div></div>")};e._renderContent=function(e,i){};return e},true);