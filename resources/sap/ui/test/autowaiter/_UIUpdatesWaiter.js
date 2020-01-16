/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/test/_OpaLogger"],function(e){"use strict";var t=e.getLogger("sap.ui.test.autowaiter._UIUpdatesWaiter#hasPending");return{hasPending:function(){var e=sap.ui.getCore().getUIDirty();if(e){t.debug("The UI needs rerendering")}return e}}});