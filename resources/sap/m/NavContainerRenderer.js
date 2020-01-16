/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,t){t._bRenderingInProgress=true;if(!t.getVisible()){return}var r=t.getHeight(),i=t.getTooltip_AsString(),n=t.getCurrentPage();e.openStart("div",t);e.class("sapMNav");e.style("width",t.getWidth());if(r&&r!="100%"){e.style("height",r)}if(this.renderAttributes){this.renderAttributes(e,t)}if(i){e.attr("title",i)}e.openEnd();if(this.renderBeforeContent){this.renderBeforeContent(e,t)}if(n){n.removeStyleClass("sapMNavItemHidden");e.renderControl(n)}e.close("div");t._bRenderingInProgress=false};return e},true);