/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBaseRenderer","sap/ui/core/Renderer"],function(e,t){"use strict";var r=t.extend(e);r.renderLIContent=function(e,t){e.write("<div");if(t.getParent()&&t.getParent().getWordWrap()){e.addClass("sapMFFLITitleWrap")}else{e.addClass("sapMFFLITitle")}e.writeClasses();e.write(">");e.writeEscaped(t.getText());e.write("</div>")};return r},true);