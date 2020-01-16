/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Element","./library","sap/base/assert"],function(t,I,e){"use strict";var i=I.IndicationColor;var n={};var T=null;var a=function(){if(!T){T={};var t=sap.ui.getCore().getLibraryResourceBundle("sap.ui.core");T[i.Indication01]=t.getText("INDICATION_STATE_INDICATION01");T[i.Indication02]=t.getText("INDICATION_STATE_INDICATION02");T[i.Indication03]=t.getText("INDICATION_STATE_INDICATION03");T[i.Indication04]=t.getText("INDICATION_STATE_INDICATION04");T[i.Indication05]=t.getText("INDICATION_STATE_INDICATION05")}};n.getAdditionalText=function(t){var I=null;if(t&&t.getValueState){I=t.getIndicationColor()}else if(i[t]){I=t}if(I){a();return T[I]}return null};return n},true);