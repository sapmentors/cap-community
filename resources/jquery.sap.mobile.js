/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global","sap/ui/util/Mobile","sap/ui/Device"],function(e,s,t){"use strict";function o(e,s){var t=Object.getOwnPropertyDescriptor(e,s);return t&&t.value}(function(){e.os=e.extend({os:t.os.name,version:t.os.versionStr,fVersion:t.os.version},o(e,"os"));e.os[t.os.name]=true;e.device=e.extend({},o(e,"device"));e.device.is=e.extend({standalone:window.navigator.standalone,landscape:t.orientation.landscape,portrait:t.orientation.portrait,iphone:t.os.ios&&t.system.phone,ipad:t.os.ios&&t.system.tablet,android_phone:t.system.phone&&t.os.android,android_tablet:t.system.tablet&&t.os.android,tablet:t.system.tablet,phone:t.system.phone,desktop:t.system.desktop},e.device.is)})();e.sap.initMobile=s.init;e.sap.setIcons=s.setIcons;e.sap.setMobileWebAppCapable=s.setWebAppCapable;return e});