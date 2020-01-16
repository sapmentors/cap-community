/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./RenderManager"],function(e){"use strict";var r=e.RenderPrefixes;var i={render:function(e,i){e.write('<div id="'+r.Dummy+i.getId()+'" style="display:none">');e.write("</div>")}};return i},true);