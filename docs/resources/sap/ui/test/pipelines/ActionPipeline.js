/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/test/pipelines/PipelineFactory","sap/ui/thirdparty/jquery"],function(e,t,i){"use strict";var n=new t({name:"Action",functionName:"executeOn"});return e.extend("sap.ui.test.matcherPipeline",{process:function(e){var t,a=e.control;var c=n.create(e.actions);if(!i.isArray(a)){t=[a]}else{t=a}t.forEach(function(e){c.forEach(function(t){t.executeOn(e)})})}})});