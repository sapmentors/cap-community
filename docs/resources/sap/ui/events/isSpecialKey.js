/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var e=function(e){function r(e){var r=e.key;return r==="Shift"||r==="Control"||r==="Alt"||r==="AltGraph"||r==="CapsLock"||r==="NumLock"}function t(e){var r=e.key;return r==="ArrowLeft"||r==="ArrowUp"||r==="ArrowRight"||r==="ArrowDown"||r==="Left"||r==="Up"||r==="Right"||r==="Down"}var n=e.key,o=r(e)||t(e)||n==="PageUp"||n==="PageDown"||n==="End"||n==="Home"||n==="PrintScreen"||n==="Insert"||n==="Del"||n==="Delete"||n==="F1"||n==="F2"||n==="F3"||n==="F4"||n==="F5"||n==="F6"||n==="F7"||n==="F8"||n==="F9"||n==="F10"||n==="F11"||n==="F12"||n==="Pause"||n==="Backspace"||n==="Tab"||n==="Enter"||n==="Escape"||n==="Esc"||n==="ScrollLock"||n==="Scroll";switch(e.type){case"keydown":case"keyup":case"keypress":return o;default:return false}};return e});