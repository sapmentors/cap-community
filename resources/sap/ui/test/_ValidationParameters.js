/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/test/matchers/matchers"],function(e,n){"use strict";var r={error:"func",check:"func",success:"func",timeout:"numeric",debugTimeout:"numeric",pollingInterval:"numeric",_stackDropCount:"numeric",errorMessage:"string",asyncPolling:"bool"};var t=e.extend({_stack:"string",viewName:"string",viewNamespace:"string",viewId:"string",fragmentId:"string",visible:"bool",enabled:"bool",matchers:"any",actions:"any",id:"any",controlType:"any",searchOpenDialogs:"bool",autoWait:"any"},r);var a=e.extend({},t,s());var i=e.extend({sOriginalControlType:"string",interaction:"any"},t);function s(){return Object.keys(sap.ui.test.matchers).reduce(function(e,n){n=n.charAt(0).toLowerCase()+n.substr(1);e[n]="any";return e},{})}return{OPA_WAITFOR:r,OPA5_WAITFOR:a,OPA5_WAITFOR_DECORATED:i}});