/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e="[=(),; \t\"']|%(09|20|22|27|28|29|2c|2C|3b|3B)",t="\\$\\w+",n="[a-zA-Z_\\u0080-\\uFFFF][\\w\\u0080-\\uFFFF]*",r="(?:[ \\t]|%09|%20)",i=new RegExp(r+"+","g"),a=new RegExp("^not"+r+"+"),s="("+r+"+)(and|eq|ge|gt|le|lt|ne|or)"+r+"+",o="[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}",u="(?:\\*|%2[aA])",c=n+"(?:[./]"+n+")*"+"(?:[./]"+u+"|/\\$ref|/\\$count)?",p=u+"(?:/\\$ref)?",f=c+"|"+p,h='(?:[-+:./\\w"]|%2[bB])+',d=new RegExp("^(?:"+s+"|"+e+"|("+o+")|("+f+")|("+h+")|("+t+"))"),l=/^[0-9a-f]{2}$/i,v={ceiling:{ambiguousParameters:true},concat:{type:"Edm.String"},contains:{type:"Edm.Boolean"},day:{type:"Edm.Int32",ambiguousParameters:true},endswith:{type:"Edm.Boolean"},floor:{ambiguousParameters:true},hour:{type:"Edm.Int32",ambiguousParameters:true},indexof:{type:"Edm.Int32"},length:{type:"Edm.Int32"},minute:{type:"Edm.Int32",ambiguousParameters:true},month:{type:"Edm.Int32",ambiguousParameters:true},round:{ambiguousParameters:true},second:{type:"Edm.Int32",ambiguousParameters:true},startswith:{type:"Edm.Boolean"},substring:{type:"Edm.String"},tolower:{type:"Edm.String"},toupper:{type:"Edm.String"},trim:{type:"Edm.String"},year:{type:"Edm.Int32",ambiguousParameters:true}},y={"(":{lbp:9,led:function(e,t){var n,r;if(t.id!=="PATH"){this.error("Unexpected ",e)}n=v[t.value];if(!n){this.error("Unknown function ",t)}t.id="FUNCTION";if(n.type){t.type=n.type}t.parameters=[];do{this.advanceBws();r=this.expression(0);if(n.ambiguousParameters){r.ambiguous=true}t.parameters.push(r);this.advanceBws()}while(this.advanceIf(","));this.advanceBws();this.advance(")");return t},nud:function(){this.advanceBws();var e=this.expression(0);this.advanceBws();this.advance(")");return e}},not:{lbp:7,nud:function(e){e.precedence=7;e.right=this.expression(7);e.type="Edm.Boolean";return e}}};function m(e,t){y[e]={lbp:t,led:function(e,n){e.type="Edm.Boolean";e.precedence=t;e.left=n;e.right=this.expression(t);return e}}}function g(e){y[e]={lbp:0,nud:function(e){e.precedence=99;return e}}}m("and",2);m("eq",3);m("ge",4);m("gt",4);m("le",4);m("lt",4);m("ne",3);m("or",1);g("PATH");g("VALUE");function w(){}w.prototype.advance=function(e){var t=this.current();if(e&&(!t||t.id!==e)){if(e==="OPTION"){e="system query option"}else if(e.length===1){e="'"+e+"'"}this.expected(e,t)}this.iCurrentToken+=1;return t};w.prototype.advanceIf=function(e){var t=this.current();if(t&&t.id===e){this.iCurrentToken+=1;return true}return false};w.prototype.current=function(){return this.aTokens[this.iCurrentToken]};w.prototype.error=function(e,t){var n;if(t){n=t.value;e+="'"+(n===" "?n:n.replace(i,""))+"' at "+t.at}else{e+="end of input"}throw new SyntaxError(e+": "+this.sText)};w.prototype.expected=function(e,t){this.error("Expected "+e+" but instead saw ",t)};w.prototype.finish=function(){if(this.iCurrentToken<this.aTokens.length){this.expected("end of input",this.aTokens[this.iCurrentToken])}};w.prototype.init=function(e){this.sText=e;this.aTokens=P(e);this.iCurrentToken=0};function E(){}E.prototype=Object.create(w.prototype);E.prototype.advanceBws=function(){var e;for(;;){e=this.current();if(!e||e.id!==" "&&e.id!=="\t"){return}this.advance()}};E.prototype.expression=function(e){var t,n,r;r=this.advance();if(!r){this.expected("expression")}t=this.getSymbolValue(r,"nud");if(!t){this.expected("expression",r)}n=t.call(this,r);r=this.current();while(r&&this.getSymbolValue(r,"lbp",0)>e){n=this.getSymbolValue(r,"led").call(this,this.advance(),n);r=this.current()}return n};E.prototype.getSymbolValue=function(e,t,n){var r=y[e.id];return r&&t in r?r[t]:n};E.prototype.parse=function(e){var t;this.init(e);t=this.expression(0);this.finish();return t};function x(){}x.prototype=Object.create(w.prototype);x.prototype.parse=function(e){var t,n={},r;this.init(e);this.advance("(");if(this.current().id==="VALUE"){n[""]=this.advance().value}else{do{t=this.advance("PATH").value;this.advance("=");r=this.advance("VALUE").value;n[t]=r}while(this.advanceIf(","))}this.advance(")");this.finish();return n};function b(){}b.prototype=Object.create(w.prototype);b.prototype.parse=function(e){var t;this.init(e);t=this.parseSystemQueryOption();this.finish();return t};b.prototype.parseAnythingWithBrackets=function(e){var t="",n={},r,i=this;function a(){for(;;){r=i.advance();if(!r||r.id===";"){i.expected("')'",r)}t+=r.value;if(r.id===")"){return}if(r.id==="("){a()}}}this.advance("=");for(;;){r=this.current();if(!r||r.id===")"||r.id===";"){break}t+=this.advance().value;if(r.id==="("){a()}}if(!t){this.expected("an option value",r)}n[e.value]=t;return n};b.prototype.parseExpand=function(){var e={},t,n,r,i;this.advance("=");do{i=null;t=this.advance("PATH").value.replace(/%2a/i,"*");if(this.advanceIf("(")){i={};do{n=this.parseSystemQueryOption();r=Object.keys(n)[0];i[r]=n[r]}while(this.advanceIf(";"));this.advance(")")}e[t]=i}while(this.advanceIf(","));return{$expand:e}};b.prototype.parseSelect=function(){var e,t,n=[],r;this.advance("=");do{r=this.advance("PATH");e=r.value.replace(/%2a/i,"*");if(this.advanceIf("(")){t="(";do{e+=t+this.advance("PATH").value;t=","}while(this.advanceIf(","));e+=this.advance(")").value}n.push(e)}while(this.advanceIf(","));return{$select:n}};b.prototype.parseSystemQueryOption=function(){var e=this.advance("OPTION");switch(e.value){case"$expand":return this.parseExpand();case"$select":return this.parseSelect();default:return this.parseAnythingWithBrackets(e)}};function A(e){return String.fromCharCode(parseInt(e,16))}function I(e,t,n){var r;function i(t){var n=e[r];if(n==="%"&&e[r+1]==="2"&&e[r+2]==="7"){n="'";if(t){r+=2}}if(t){r+=1}return n}for(r=1;r<e.length;){if(i(true)==="'"){if(i(false)!=="'"){return e.slice(0,r)}i(true)}}throw new SyntaxError("Unterminated string at "+n+": "+t)}function T(e,t,n){var r,i,a=false,s;for(s=1;s<e.length;s+=1){if(a){a=false}else{r=e[s];if(r==="%"){i=e.slice(s+1,s+3);if(l.test(i)){r=A(i);s+=2}}if(r==='"'){return e.slice(0,s+1)}a=r==="\\"}}throw new SyntaxError("Unterminated string at "+n+": "+t)}function P(e){var t=1,n,r,i=e,s,o,u=[],c;while(i.length){r=d.exec(i);s=0;if(r){c=r[0];if(r[7]){n="OPTION"}else if(r[6]||r[4]){n="VALUE"}else if(r[5]){n="PATH";if(c==="false"||c==="true"||c==="null"){n="VALUE"}else if(c==="not"){r=a.exec(i);if(r){n="not";c=r[0]}}}else if(r[3]){n=A(r[3])}else if(r[2]){n=r[2];s=r[1].length}else{n=r[0]}if(n==='"'){n="VALUE";c=T(i,e,t)}else if(n==="'"){n="VALUE";c=I(i,e,t)}o={at:t+s,id:n,value:c}}else{throw new SyntaxError("Unknown character '"+i[0]+"' at "+t+": "+e)}i=i.slice(c.length);t+=c.length;u.push(o)}return u}return{buildFilterString:function(e){function t(e,n){var r;if(!e){return""}if(e.parameters){r=e.parameters.map(function(e){return t(e,0)}).join(",");return e.value+"("+r+")"}r=t(e.left,e.precedence)+e.value+t(e.right,e.precedence);if(e.precedence<n){r="("+r+")"}return r}return t(e,0)},parseFilter:function(e){return(new E).parse(e)},parseKeyPredicate:function(e){return(new x).parse(e)},parseSystemQueryOption:function(e){return(new b).parse(e)},sODataIdentifier:n,sWhitespace:r}},false);