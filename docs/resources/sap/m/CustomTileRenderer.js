/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./TileRenderer","sap/ui/core/Renderer"],function(e,i){"use strict";var t=i.extend(e);t.render=function(e,i){var t,n;e.write('<div tabindex="0"');e.writeControlData(i);e.addClass("sapMCustomTile");e.writeClasses();if(i._invisible){e.addStyle("visibility","hidden");e.writeStyles()}if(i.getParent()instanceof sap.m.TileContainer){t=i.getParent();n=t._getVisibleTiles();e.writeAccessibilityState(i,{role:"option",posinset:t._indexOfVisibleTile(i,n)+1,setsize:n.length})}e.write(">");e.write('<div id="'+i.getId()+'-remove" class="sapMTCRemove"></div>');e.write('<div class="sapMCustomTileContent">');this._renderContent(e,i);e.write("</div></div>")};t._renderContent=function(e,i){e.renderControl(i.getContent())};return t},true);