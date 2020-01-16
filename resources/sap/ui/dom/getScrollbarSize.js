/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(i){"use strict";var e={};var t=function(t,r){if(typeof t==="boolean"){r=t;t=null}var s=t||"#DEFAULT";if(r){if(t){delete e[t]}else{e={}}}if(e[s]){return e[s]}if(!document.body){return{width:0,height:0}}var d=i("<DIV/>").css("visibility","hidden").css("height","0").css("width","0").css("overflow","hidden");if(t){d.addClass(t)}d.prependTo(document.body);var o=i('<div style="visibility:visible;position:absolute;height:100px;width:100px;overflow:scroll;opacity:0;"></div>');d.append(o);var h=o.get(0);var l=h.offsetWidth-h.scrollWidth;var n=h.offsetHeight-h.scrollHeight;d.remove();if(l===0||n===0){return{width:l,height:n}}e[s]={width:l,height:n};return e[s]};return t});