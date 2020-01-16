/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Bar","./InstanceManager","./AssociativeOverflowToolbar","./ToolbarSpacer","./Title","./library","./TitleAlignmentMixin","sap/ui/core/Control","sap/ui/core/IconPool","sap/ui/core/Popup","sap/ui/core/delegate/ScrollEnablement","sap/ui/core/RenderManager","sap/ui/core/InvisibleText","sap/ui/core/ResizeHandler","sap/ui/core/util/ResponsivePaddingsEnablement","sap/ui/Device","sap/ui/base/ManagedObject","sap/ui/core/library","./TitlePropagationSupport","./DialogRenderer","sap/base/Log","sap/ui/thirdparty/jquery","sap/ui/core/Core","sap/ui/core/Configuration","sap/ui/dom/jquery/control","sap/ui/dom/jquery/Focusable"],function(t,e,i,o,s,n,a,r,l,h,p,u,g,c,d,f,_,y,m,S,b,v,C,I){"use strict";var B=y.OpenState;var T=n.DialogType;var M=n.DialogRoleType;var D=y.ValueState;var P=n.TitleAlignment;var w=C.getConfiguration().getAnimationMode();var A=w!==I.AnimationMode.none&&w!==I.AnimationMode.minimal;var R=A?300:10;var H=17;var z=r.extend("sap.m.Dialog",{metadata:{interfaces:["sap.ui.core.PopupInterface"],library:"sap.m",properties:{icon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},title:{type:"string",group:"Appearance",defaultValue:null},showHeader:{type:"boolean",group:"Appearance",defaultValue:true},type:{type:"sap.m.DialogType",group:"Appearance",defaultValue:T.Standard},state:{type:"sap.ui.core.ValueState",group:"Appearance",defaultValue:D.None},stretchOnPhone:{type:"boolean",group:"Appearance",defaultValue:false,deprecated:true},stretch:{type:"boolean",group:"Appearance",defaultValue:false},contentWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},contentHeight:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},horizontalScrolling:{type:"boolean",group:"Behavior",defaultValue:true},verticalScrolling:{type:"boolean",group:"Behavior",defaultValue:true},resizable:{type:"boolean",group:"Behavior",defaultValue:false},draggable:{type:"boolean",group:"Behavior",defaultValue:false},escapeHandler:{type:"any",group:"Behavior",defaultValue:null},role:{type:"sap.m.DialogRoleType",group:"Data",defaultValue:M.Dialog,visibility:"hidden"},closeOnNavigation:{type:"boolean",group:"Behavior",defaultValue:true},titleAlignment:{type:"sap.m.TitleAlignment",group:"Misc",defaultValue:P.Auto}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"},subHeader:{type:"sap.m.IBar",multiple:false},customHeader:{type:"sap.m.IBar",multiple:false},beginButton:{type:"sap.m.Button",multiple:false},endButton:{type:"sap.m.Button",multiple:false},buttons:{type:"sap.m.Button",multiple:true,singularName:"button"},_header:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},_title:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},_icon:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},_toolbar:{type:"sap.m.OverflowToolbar",multiple:false,visibility:"hidden"},_valueState:{type:"sap.ui.core.InvisibleText",multiple:false,visibility:"hidden"}},associations:{leftButton:{type:"sap.m.Button",multiple:false,deprecated:true},rightButton:{type:"sap.m.Button",multiple:false,deprecated:true},initialFocus:{type:"sap.ui.core.Control",multiple:false},ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{beforeOpen:{},afterOpen:{},beforeClose:{parameters:{origin:{type:"sap.m.Button"}}},afterClose:{parameters:{origin:{type:"sap.m.Button"}}}},designtime:"sap/m/designtime/Dialog.designtime"}});d.call(z.prototype,{header:{suffix:"header"},subHeader:{selector:".sapMDialogSubHeader .sapMIBar"},content:{selector:".sapMDialogScrollCont"},footer:{suffix:"footer"}});m.call(z.prototype,"content",function(){return this._headerTitle?this._headerTitle.getId():false});z._bPaddingByDefault=sap.ui.getCore().getConfiguration().getCompatibilityVersion("sapMDialogWithPadding").compareTo("1.16")<0;z._mIcons={};z._mIcons[D.Success]=l.getIconURI("message-success");z._mIcons[D.Warning]=l.getIconURI("message-warning");z._mIcons[D.Error]=l.getIconURI("message-error");z._mIcons[D.Information]=l.getIconURI("hint");z.prototype.init=function(){var t=this;this._externalIcon=undefined;this._oManuallySetSize=null;this._oManuallySetPosition=null;this._bRTL=sap.ui.getCore().getConfiguration().getRTL();this._scrollContentList=["sap.m.NavContainer","sap.m.Page","sap.m.ScrollContainer","sap.m.SplitContainer","sap.m.MultiInput","sap.m.SimpleFixFlex"];this.oPopup=new h;this.oPopup.setShadow(true);this.oPopup.setNavigationMode("SCOPE");if(f.os.ios&&f.system.phone&&!this._bMessageType){this.oPopup.setModal(true,"sapMDialogTransparentBlk")}else{this.oPopup.setModal(true,"sapMDialogBlockLayerInit")}this.oPopup.setAnimations(v.proxy(this._openAnimation,this),v.proxy(this._closeAnimation,this));this.oPopup._applyPosition=function(e,i){var o;var s;t._setDimensions();t._adjustScrollingPane();e.at={};if(t._oManuallySetPosition){e.at.left=t._oManuallySetPosition.x;e.at.top=t._oManuallySetPosition.y}else{if(window.scrollY===undefined){o=window.pageYOffset}else{o=window.scrollY}if(f.os.ios||o<0){o=0}e.at.top="calc(50% + "+o+"px)";if(t._bRTL){e.at.left="auto"}else{if(window.scrollX===undefined){s=window.pageXOffset}else{s=window.scrollX}if(f.os.ios||s<0){s=0}e.at.left="calc(50% + "+s+"px)"}}t._deregisterContentResizeHandler();h.prototype._applyPosition.call(this,e);t._registerContentResizeHandler()};if(z._bPaddingByDefault){this.addStyleClass("sapUiPopupWithPadding")}this._initTitlePropagationSupport();this._initResponsivePaddingsEnablement()};z.prototype.onBeforeRendering=function(){if(this._hasSingleScrollableContent()){this.setProperty("verticalScrolling",false);this.setProperty("horizontalScrolling",false);b.info("VerticalScrolling and horizontalScrolling in sap.m.Dialog with ID "+this.getId()+" has been disabled because there's scrollable content inside")}else if(!this._oScroller){this._oScroller=new p(this,this.getId()+"-scroll",{horizontal:this.getHorizontalScrolling(),vertical:this.getVerticalScrolling()})}this._createToolbarButtons();if(sap.ui.getCore().getConfiguration().getAccessibility()&&this.getState()!=D.None){var t=new g({text:this.getValueStateString(this.getState())});this.setAggregation("_valueState",t);this.addAriaLabelledBy(t.getId())}};z.prototype.onAfterRendering=function(){this._$scrollPane=this.$("scroll");this._$content=this.$("cont");this._$dialog=this.$();if(this.isOpen()){this._setInitialFocus()}};z.prototype.exit=function(){e.removeDialogInstance(this);this._deregisterContentResizeHandler();this._deregisterResizeHandler();if(this.oPopup){this.oPopup.detachOpened(this._handleOpened,this);this.oPopup.detachClosed(this._handleClosed,this);this.oPopup.destroy();this.oPopup=null}if(this._oScroller){this._oScroller.destroy();this._oScroller=null}if(this._header){this._header.destroy();this._header=null}if(this._headerTitle){this._headerTitle.destroy();this._headerTitle=null}if(this._iconImage){this._iconImage.destroy();this._iconImage=null}if(this._toolbarSpacer){this._toolbarSpacer.destroy();this._toolbarSpacer=null}};z.prototype.open=function(){var t=this.oPopup;t.setInitialFocusId(this.getId());var i=t.getOpenState();switch(i){case B.OPEN:case B.OPENING:return this;case B.CLOSING:this._bOpenAfterClose=true;break;default:}this._oCloseTrigger=null;this.fireBeforeOpen();t.attachOpened(this._handleOpened,this);this._iLastWidthAndHeightWithScroll=null;t.setContent(this);t.open();this._registerResizeHandler();e.addDialogInstance(this);return this};z.prototype.close=function(){this._bOpenAfterClose=false;this.$().removeClass("sapDialogDisableTransition");this._deregisterResizeHandler();var t=this.oPopup;var e=this.oPopup.getOpenState();if(!(e===B.CLOSED||e===B.CLOSING)){n.closeKeyboard();this.fireBeforeClose({origin:this._oCloseTrigger});t.attachClosed(this._handleClosed,this);this._bDisableRepositioning=false;this._oManuallySetPosition=null;this._oManuallySetSize=null;t.close();this._deregisterContentResizeHandler()}return this};z.prototype.isOpen=function(){return this.oPopup&&this.oPopup.isOpen()};z.prototype._handleOpened=function(){this.oPopup.detachOpened(this._handleOpened,this);this._setInitialFocus();this.fireAfterOpen()};z.prototype._handleClosed=function(){if(!this.oPopup){return}this.oPopup.detachClosed(this._handleClosed,this);if(this.getDomRef()){u.preserveContent(this.getDomRef());this.$().remove()}e.removeDialogInstance(this);this.fireAfterClose({origin:this._oCloseTrigger});if(this._bOpenAfterClose){this._bOpenAfterClose=false;this.open()}};z.prototype.onfocusin=function(t){var e=t.target;if(e.id===this.getId()+"-firstfe"){var i=this.$("footer").lastFocusableDomRef()||this.$("cont").lastFocusableDomRef()||this.getSubHeader()&&this.getSubHeader().$().firstFocusableDomRef()||this._getAnyHeader()&&this._getAnyHeader().$().lastFocusableDomRef();if(i){i.focus()}}else if(e.id===this.getId()+"-lastfe"){var o=this._getAnyHeader()&&this._getAnyHeader().$().firstFocusableDomRef()||this.getSubHeader()&&this.getSubHeader().$().firstFocusableDomRef()||this.$("cont").firstFocusableDomRef()||this.$("footer").firstFocusableDomRef();if(o){o.focus()}}};z.prototype._getPromiseWrapper=function(){var t=this;return{reject:function(){t.currentPromise.reject()},resolve:function(){t.currentPromise.resolve()}}};z.prototype.onsapescape=function(t){var e=this.getEscapeHandler(),i={},o=this;if(t.originalEvent&&t.originalEvent._sapui_handledByControl){return}this._oCloseTrigger=null;if(typeof e==="function"){new window.Promise(function(t,s){i.resolve=t;i.reject=s;o.currentPromise=i;e(o._getPromiseWrapper())}).then(function(t){o.close()}).catch(function(){b.info("Disallow dialog closing")})}else{this.close()}t.stopPropagation()};z.prototype._openAnimation=function(t,e,i){t.addClass("sapMDialogOpen");t.css("display","block");setTimeout(i,R)};z.prototype._closeAnimation=function(t,e,i){t.removeClass("sapMDialogOpen");setTimeout(i,R)};z.prototype._setDimensions=function(){var t=this.$(),e=this.getStretch(),i=this.getStretchOnPhone()&&f.system.phone,o=this._bMessageType,s={};if(!e){if(!this._oManuallySetSize){s.width=this.getContentWidth()||undefined;s.height=this.getContentHeight()||undefined}else{s.width=this._oManuallySetSize.width;s.height=this._oManuallySetSize.height}}if(s.width=="auto"){s.width=undefined}if(s.height=="auto"){s.height=undefined}if(e&&!o||i){this.$().addClass("sapMDialogStretched")}t.css(s);if(!e&&!this._oManuallySetSize&&!this._bDisableRepositioning){this._applyCustomTranslate()}if(window.navigator.userAgent.toLowerCase().indexOf("chrome")!==-1&&this.getStretch()){t.find("> footer").css({bottom:"0.001px"})}};z.prototype._adjustScrollingPane=function(){if(this._oScroller){this._oScroller.refresh()}};z.prototype._reposition=function(){};z.prototype._repositionAfterOpen=function(){};z.prototype._reapplyPosition=function(){this._adjustScrollingPane()};z.prototype._onResize=function(){var t=this.$(),e=this.$("cont"),i,o=this.getContentHeight(),s=this.getContentWidth(),n,a=Math.floor(window.innerWidth*.9),r=2,l=f.browser,h=0;if(this._oManuallySetSize){e.css({width:"auto"});return}if(!o||o=="auto"){i=e.scrollTop();e.css({height:"auto"});t.children().each(function(){h+=v(this).outerHeight(true)});if(this.getStretch()||h>t.innerHeight()){n=parseFloat(t.height())+r;e.height(Math.round(n))}e.scrollTop(i)}if(f.system.desktop&&!l.chrome){var p=e.width()+"x"+e.height(),u=t.css("min-width")!==t.css("width");if(p!==this._iLastWidthAndHeightWithScroll&&u){if(this._hasVerticalScrollbar()&&(!s||s=="auto")&&!this.getStretch()&&e.width()<a){t.addClass("sapMDialogVerticalScrollIncluded");e.css({"padding-right":H});this._iLastWidthAndHeightWithScroll=p}else{t.removeClass("sapMDialogVerticalScrollIncluded");e.css({"padding-right":""});this._iLastWidthAndHeightWithScroll=null}}}if(!this.getStretch()&&!this._oManuallySetSize&&!this._bDisableRepositioning){this._applyCustomTranslate()}};z.prototype._hasVerticalScrollbar=function(){var t=this.$("cont");if(f.browser.msie){return t[0].clientWidth<t.outerWidth()}return t[0].clientHeight<t[0].scrollHeight};z.prototype._applyCustomTranslate=function(){if(f.browser.msie){return}var t=this.$(),e,i,o=t.innerWidth(),s=t.innerHeight();if(f.system.desktop&&(o%2!==0||s%2!==0)){if(!this._bRTL){e="-"+Math.floor(o/2)+"px"}else{e=Math.floor(o/2)+"px"}i="-"+Math.floor(s/2)+"px";var n="translate("+e+","+i+") scale(1) ";t.css("transform",n);t.css("-webkit-transform",n+" translateZ(0px)")}else{t.css("transform","");t.css("-webkit-transform","")}};z.prototype._createHeader=function(){if(!this._header){this._header=new t(this.getId()+"-header");this._header._setRootAccessibilityRole("heading");this._header._setRootAriaLevel("2");this._setupBarTitleAlignment(this._header,this.getId()+"_header");this.setAggregation("_header",this._header,false)}};z.prototype._hasSingleScrollableContent=function(){var t=this.getContent();while(t.length===1&&t[0]instanceof r&&t[0].isA("sap.ui.core.mvc.View")){t=t[0].getContent()}if(t.length===1&&t[0]instanceof r&&t[0].isA(this._scrollContentList)){return true}return false};z.prototype._initBlockLayerAnimation=function(){this.oPopup._hideBlockLayer=function(){var t=v("#sap-ui-blocklayer-popup");t.removeClass("sapMDialogTransparentBlk");h.prototype._hideBlockLayer.call(this)}};z.prototype._clearBlockLayerAnimation=function(){if(f.os.ios&&f.system.phone&&!this._bMessageType){delete this.oPopup._showBlockLayer;this.oPopup._hideBlockLayer=function(){var t=v("#sap-ui-blocklayer-popup");t.removeClass("sapMDialogTransparentBlk");h.prototype._hideBlockLayer.call(this)}}};z.prototype._getFocusId=function(){return this.getInitialFocus()||this._getFirstFocusableContentSubHeader()||this._getFirstFocusableContentElementId()||this._getFirstVisibleButtonId()||this.getId()};z.prototype._getFirstVisibleButtonId=function(){var t=this.getBeginButton(),e=this.getEndButton(),i=this.getButtons(),o="";if(t&&t.getVisible()){o=t.getId()}else if(e&&e.getVisible()){o=e.getId()}else if(i&&i.length>0){for(var s=0;s<i.length;s++){if(i[s].getVisible()){o=i[s].getId();break}}}return o};z.prototype._getFirstFocusableContentSubHeader=function(){var t=this.$().find(".sapMDialogSubHeader");var e;var i=t.firstFocusableDomRef();if(i){e=i.id}return e};z.prototype._getFirstFocusableContentElementId=function(){var t="";var e=this.$("cont");var i=e.firstFocusableDomRef();if(i){t=i.id}return t};z.prototype._setInitialFocus=function(){var t=this._getFocusId();var e=sap.ui.getCore().byId(t);var i;if(e){if(e.getVisible&&!e.getVisible()){this.focus();return}i=e.getFocusDomRef()}i=i||(t?window.document.getElementById(t):null);if(!i){this.setInitialFocus("");i=sap.ui.getCore().byId(this._getFocusId())}if(!this.getInitialFocus()){this.setAssociation("initialFocus",i?i.id:this.getId(),true)}if(f.system.desktop||i&&!/input|textarea|select/i.test(i.tagName)){if(i){i.focus()}}else{this.focus()}};z.prototype.getScrollDelegate=function(){return this._oScroller};z.prototype._composeAggreNameInHeader=function(t){var e;if(t==="Begin"){e="contentLeft"}else if(t==="End"){e="contentRight"}else{e="content"+t}return e};z.prototype._isToolbarEmpty=function(){var t=this._oToolbar.getContent().filter(function(t){return t.getMetadata().getName()!=="sap.m.ToolbarSpacer"});return t.length===0};z.prototype._setButton=function(t,e,i){return this};z.prototype._getButton=function(t){var e=t.toLowerCase()+"Button",i="_o"+this._firstLetterUpperCase(t)+"Button";if(f.system.phone){return this.getAggregation(e,null,true)}else{return this[i]}};z.prototype._getButtonFromHeader=function(t){if(this._header){var e=this._composeAggreNameInHeader(this._firstLetterUpperCase(t)),i=this._header.getAggregation(e);return i&&i[0]}else{return null}};z.prototype._firstLetterUpperCase=function(t){return t.charAt(0).toUpperCase()+t.slice(1)};z.prototype._getAnyHeader=function(){var t=this.getCustomHeader();if(t){t._setRootAriaLevel("2");return t._setRootAccessibilityRole("heading")}else{var e=this.getShowHeader();if(!e){return null}this._createHeader();return this._header}};z.prototype._deregisterResizeHandler=function(){if(this._resizeListenerId){c.deregister(this._resizeListenerId);this._resizeListenerId=null}f.resize.detachHandler(this._onResize,this)};z.prototype._registerResizeHandler=function(){var t=this.$("scroll");this._resizeListenerId=c.register(t.get(0),v.proxy(this._onResize,this));f.resize.attachHandler(this._onResize,this);this._onResize()};z.prototype._deregisterContentResizeHandler=function(){if(this._sContentResizeListenerId){c.deregister(this._sContentResizeListenerId);this._sContentResizeListenerId=null}};z.prototype._registerContentResizeHandler=function(){if(!this._sContentResizeListenerId){this._sContentResizeListenerId=c.register(this.getDomRef("scrollCont"),v.proxy(this._onResize,this))}this._onResize()};z.prototype._attachHandler=function(t){var e=this;if(!this._oButtonDelegate){this._oButtonDelegate={ontap:function(){e._oCloseTrigger=this},onkeyup:function(){e._oCloseTrigger=this},onkeydown:function(){e._oCloseTrigger=this}}}if(t){t.addDelegate(this._oButtonDelegate,true,t)}};z.prototype._createToolbarButtons=function(){var t=this._getToolbar();var e=this.getButtons();var i=this.getBeginButton();var s=this.getEndButton(),n=this,a=[i,s];a.forEach(function(t){if(t&&n._oButtonDelegate){t.removeDelegate(n._oButtonDelegate)}});t.removeAllContent();if(!("_toolbarSpacer"in this)){this._toolbarSpacer=new o}t.addContent(this._toolbarSpacer);a.forEach(function(t){n._attachHandler(t)});if(e&&e.length){e.forEach(function(e){t.addContent(e)})}else{if(i){t.addContent(i)}if(s){t.addContent(s)}}};z.prototype._getToolbar=function(){if(!this._oToolbar){this._oToolbar=new i(this.getId()+"-footer").addStyleClass("sapMTBNoBorders");this._oToolbar.addDelegate({onAfterRendering:function(){if(this.getType()===T.Message){this.$("footer").removeClass("sapContrast sapContrastPlus")}}},false,this);this.setAggregation("_toolbar",this._oToolbar)}return this._oToolbar};z.prototype.getValueStateString=function(t){var e=sap.ui.getCore().getLibraryResourceBundle("sap.m");switch(t){case D.Success:return e.getText("LIST_ITEM_STATE_SUCCESS");case D.Warning:return e.getText("LIST_ITEM_STATE_WARNING");case D.Error:return e.getText("LIST_ITEM_STATE_ERROR");case D.Information:return e.getText("LIST_ITEM_STATE_INFORMATION");default:return""}};z.prototype.setSubHeader=function(t){this.setAggregation("subHeader",t);if(t){t.setVisible=function(e){this.$().toggleClass("sapMDialogWithSubHeader",e);t.setProperty("visible",e)}.bind(this)}return this};z.prototype.setLeftButton=function(t){if(typeof t==="string"){t=sap.ui.getCore().byId(t)}this.setBeginButton(t);return this.setAssociation("leftButton",t)};z.prototype.setRightButton=function(t){if(typeof t==="string"){t=sap.ui.getCore().byId(t)}this.setEndButton(t);return this.setAssociation("rightButton",t)};z.prototype.getLeftButton=function(){var t=this.getBeginButton();return t?t.getId():null};z.prototype.getRightButton=function(){var t=this.getEndButton();return t?t.getId():null};z.prototype.setBeginButton=function(t){if(t&&t.isA("sap.m.Button")){t.addStyleClass("sapMDialogBeginButton")}return this.setAggregation("beginButton",t)};z.prototype.setEndButton=function(t){if(t&&t.isA("sap.m.Button")){t.addStyleClass("sapMDialogEndButton")}return this.setAggregation("endButton",t)};z.prototype.getAggregation=function(t,e,i){var o=r.prototype.getAggregation.apply(this,Array.prototype.slice.call(arguments,0,2));if(t==="buttons"&&o.length===0){this.getBeginButton()&&o.push(this.getBeginButton());this.getEndButton()&&o.push(this.getEndButton())}return o};z.prototype.getAriaLabelledBy=function(){var t=this._getAnyHeader(),e=this.getAssociation("ariaLabelledBy",[]).slice();var i=this.getSubHeader();if(i){e.unshift(i.getId())}if(t){var o=t.findAggregatedObjects(true,function(t){return t.isA("sap.m.Title")});if(o.length){e=o.map(function(t){return t.getId()}).concat(e)}else{e.unshift(t.getId())}}return e};z.prototype.setTitle=function(t){this.setProperty("title",t,true);if(this._headerTitle){this._headerTitle.setText(t)}else{this._headerTitle=new s(this.getId()+"-title",{text:t,level:"H2"}).addStyleClass("sapMDialogTitle");this._createHeader();this._header.addContentMiddle(this._headerTitle)}return this};z.prototype.setState=function(t){var e={},i=this.$(),o;e[t]=true;this.setProperty("state",t,true);for(o in S._mStateClasses){i.toggleClass(S._mStateClasses[o],!!e[o])}this.setIcon(z._mIcons[t],true);return this};z.prototype.setIcon=function(t,e){if(!e){this._externalIcon=t}else{if(this._externalIcon){t=this._externalIcon}}if(t){if(t!==this.getIcon()){if(this._iconImage){this._iconImage.setSrc(t)}else{this._iconImage=l.createControlByURI({id:this.getId()+"-icon",src:t,useIconTooltip:false},sap.m.Image).addStyleClass("sapMDialogIcon");this._createHeader();this._header.insertAggregation("contentMiddle",this._iconImage,0)}}}else{var i=this.getState();if(!e&&i!==D.None){if(this._iconImage){this._iconImage.setSrc(z._mIcons[i])}}else{if(this._iconImage){this._iconImage.destroy();this._iconImage=null}}}this.setProperty("icon",t,true);return this};z.prototype.setType=function(t){var e=this.getType();if(e===t){return this}this._bMessageType=t===T.Message;return this.setProperty("type",t,false)};z.prototype.setStretch=function(t){this._bStretchSet=true;return this.setProperty("stretch",t)};z.prototype.setStretchOnPhone=function(t){if(this._bStretchSet){b.warning("sap.m.Dialog: stretchOnPhone property is deprecated. Setting stretchOnPhone property is ignored when there's already stretch property set.");return this}this.setProperty("stretchOnPhone",t);return this.setProperty("stretch",t&&f.system.phone)};z.prototype.setVerticalScrolling=function(t){var e=this.getVerticalScrolling(),i=this._hasSingleScrollableContent();if(i){b.warning("sap.m.Dialog: property verticalScrolling automatically reset to false. See documentation.");t=false}if(e===t){return this}this.$().toggleClass("sapMDialogVerScrollDisabled",!t);this.setProperty("verticalScrolling",t);if(this._oScroller){this._oScroller.setVertical(t)}return this};z.prototype.setHorizontalScrolling=function(t){var e=this.getHorizontalScrolling(),i=this._hasSingleScrollableContent();if(i){b.warning("sap.m.Dialog: property horizontalScrolling automatically reset to false. See documentation.");t=false}if(e===t){return this}this.$().toggleClass("sapMDialogHorScrollDisabled",!t);this.setProperty("horizontalScrolling",t);if(this._oScroller){this._oScroller.setHorizontal(t)}return this};z.prototype.setInitialFocus=function(t){return this.setAssociation("initialFocus",t,true)};z.prototype.forceInvalidate=r.prototype.invalidate;z.prototype.invalidate=function(t){if(this.isOpen()){this.forceInvalidate(t)}};function x(t){var e=v(t);var i=e.control(0);if(e.parents(".sapMDialogSection").length){return false}if(!i||i.getMetadata().getInterfaces().indexOf("sap.m.IBar")>-1){return true}return e.hasClass("sapMDialogTitle")}if(f.system.desktop){z.prototype.ondblclick=function(t){if(x(t.target)){var e=this.$("cont");this._bDisableRepositioning=false;this._oManuallySetPosition=null;this._oManuallySetSize=null;this.oPopup&&this.oPopup._applyPosition(this.oPopup._oLastPosition,true);this._$dialog.removeClass("sapMDialogTouched");e.css({height:"100%"})}};z.prototype.onmousedown=function(t){if(t.which===3){return}if(this.getStretch()||!this.getDraggable()&&!this.getResizable()){return}var e;var i=this;var o=v(document);var s=v(t.target);var n=s.hasClass("sapMDialogResizeHandler")&&this.getResizable();var a=function(t){e=e?clearTimeout(e):setTimeout(function(){t()},0)};var r=window.innerWidth;var l=window.innerHeight;var h={x:t.pageX,y:t.pageY,width:i._$dialog.width(),height:i._$dialog.height(),outerHeight:i._$dialog.outerHeight(),offset:{x:t.offsetX?t.offsetX:t.originalEvent.layerX,y:t.offsetY?t.offsetY:t.originalEvent.layerY},position:{x:i._$dialog.offset().left,y:i._$dialog.offset().top}};function p(){var t=i.$(),e=i.$("cont"),s,a;o.off("mouseup mousemove");if(n){i._$dialog.removeClass("sapMDialogResizing");s=parseInt(t[0].style.height)||parseInt(t.height());a=parseInt(t.css("border-top-width"))+parseInt(t.css("border-bottom-width"));e.height(s+a)}}if(x(t.target)&&this.getDraggable()||n){i._bDisableRepositioning=true;i._$dialog.addClass("sapDialogDisableTransition");i._$dialog.addClass("sapMDialogTouched");i._oManuallySetPosition={x:h.position.x,y:h.position.y};i._$dialog.css({left:Math.min(Math.max(0,i._oManuallySetPosition.x),r-h.width),top:Math.min(Math.max(0,i._oManuallySetPosition.y),l-h.height),width:h.width,transform:""})}if(x(t.target)&&this.getDraggable()){o.on("mousemove",function(e){if(e.buttons===0){p();return}a(function(){i._bDisableRepositioning=true;i._oManuallySetPosition={x:e.pageX-t.pageX+h.position.x,y:e.pageY-t.pageY+h.position.y};i._$dialog.css({left:Math.min(Math.max(0,i._oManuallySetPosition.x),r-h.width),top:Math.min(Math.max(0,i._oManuallySetPosition.y),l-h.outerHeight),transform:""})})})}else if(n){i._$dialog.addClass("sapMDialogResizing");var u={};var g=parseInt(i._$dialog.css("min-width"));var c=h.x+h.width-g;var d=s.width()-t.offsetX;var f=s.height()-t.offsetY;o.on("mousemove",function(t){a(function(){i._bDisableRepositioning=true;i.$("cont").height("").width("");if(t.pageY+f>l){t.pageY=l-f}if(t.pageX+d>r){t.pageX=r-d}i._oManuallySetSize={width:h.width+t.pageX-h.x,height:h.height+t.pageY-h.y};if(i._bRTL){u.left=Math.min(Math.max(t.pageX,0),c);u.transform="";i._oManuallySetSize.width=h.width+h.x-Math.max(t.pageX,0)}u.width=i._oManuallySetSize.width;u.height=i._oManuallySetSize.height;i._$dialog.css(u)})})}else{return}o.on("mouseup",p);t.preventDefault();t.stopPropagation()}}z.prototype._applyContextualSettings=function(){_.prototype._applyContextualSettings.call(this,_._defaultContextualSettings)};a.mixInto(z.prototype);return z});