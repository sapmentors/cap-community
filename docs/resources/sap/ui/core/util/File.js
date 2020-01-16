/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(e){"use strict";var o={save:function(o,a,n,r,t,i){var d=a+"."+n;if(typeof i==="undefined"&&t==="utf-8"&&n==="csv"){i=true}if(i===true&&t==="utf-8"){o="\ufeff"+o}if(window.Blob){var w="data:"+r;if(t){w+=";charset="+t}var f=new window.Blob([o],{type:w});if(window.navigator.msSaveOrOpenBlob){window.navigator.msSaveOrOpenBlob(f,d)}else{var u=window.URL||window.webkitURL;var v=u.createObjectURL(f);var l=window.document.createElement("a");if("download"in l){var c=e(document.body);var p=e(l).attr({download:d,href:v,style:"display:none"});c.append(p);p.get(0).click();p.remove()}else{o=encodeURI(o);var s=window.open(w+","+o);if(!s){throw new Error("Could not download the file, please deactivate your pop-up blocker.")}}}}}};return o},true);