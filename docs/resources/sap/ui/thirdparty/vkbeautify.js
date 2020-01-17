/**
* vkBeautify - javascript plugin to pretty-print or minify text in XML, JSON, CSS and SQL formats.
*
* Version - 0.99.00.beta
* Copyright (c) 2012 Vadim Kiryukhin
* vkiryukhin @ gmail.com
* http://www.eslinstructor.net/vkbeautify/
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
*   Pretty print
*
*        vkbeautify.xml(text [,indent_pattern]);
*        vkbeautify.json(text [,indent_pattern]);
*        vkbeautify.css(text [,indent_pattern]);
*        vkbeautify.sql(text [,indent_pattern]);
*
*        @text - String; text to beatufy;
*        @indent_pattern - Integer | String;
*                Integer:  number of white spaces;
*                String:   character string to visualize indentation ( can also be a set of white spaces )
*   Minify
*
*        vkbeautify.xmlmin(text [,preserve_comments]);
*        vkbeautify.jsonmin(text);
*        vkbeautify.cssmin(text [,preserve_comments]);
*        vkbeautify.sqlmin(text);
*
*        @text - String; text to minify;
*        @preserve_comments - Bool; [optional];
*                Set this flag to true to prevent removing comments from @text ( minxml and mincss functions only. )
*
*   Examples:
*        vkbeautify.xml(text); // pretty print XML
*        vkbeautify.json(text, 4 ); // pretty print JSON
*        vkbeautify.css(text, '. . . .'); // pretty print CSS
*        vkbeautify.sql(text, '----'); // pretty print SQL
*
*        vkbeautify.xmlmin(text, true);// minify XML, preserve comments
*        vkbeautify.jsonmin(text);// minify JSON
*        vkbeautify.cssmin(text);// minify CSS, remove comments ( default )
*        vkbeautify.sqlmin(text);// minify SQL
*
*/
(function(){function e(e){var r="    ";if(isNaN(parseInt(e))){r=e}else{switch(e){case 1:r=" ";break;case 2:r="  ";break;case 3:r="   ";break;case 4:r="    ";break;case 5:r="     ";break;case 6:r="      ";break;case 7:r="       ";break;case 8:r="        ";break;case 9:r="         ";break;case 10:r="          ";break;case 11:r="           ";break;case 12:r="            ";break}}var c=["\n"];for(ix=0;ix<100;ix++){c.push(c[ix]+r)}return c}function r(){this.step="    ";this.shift=e(this.step)}r.prototype.xml=function(r,c){var a=r.replace(/>\s{0,}</g,"><").replace(/</g,"~::~<").replace(/\s*xmlns\:/g,"~::~xmlns:").replace(/\s*xmlns\=/g,"~::~xmlns=").split("~::~"),s=a.length,l=false,i=0,p="",n=0,t=c?e(c):this.shift;for(n=0;n<s;n++){if(a[n].search(/<!/)>-1){p+=t[i]+a[n];l=true;if(a[n].search(/-->/)>-1||a[n].search(/\]>/)>-1||a[n].search(/!DOCTYPE/)>-1){l=false}}else if(a[n].search(/-->/)>-1||a[n].search(/\]>/)>-1){p+=a[n];l=false}else if(/^<\w/.exec(a[n-1])&&/^<\/\w/.exec(a[n])&&/^<[\w:\-\.\,]+/.exec(a[n-1])==/^<\/[\w:\-\.\,]+/.exec(a[n])[0].replace("/","")){p+=a[n];if(!l)i--}else if(a[n].search(/<\w/)>-1&&a[n].search(/<\//)==-1&&a[n].search(/\/>/)==-1){p=!l?p+=t[i++]+a[n]:p+=a[n]}else if(a[n].search(/<\w/)>-1&&a[n].search(/<\//)>-1){p=!l?p+=t[i]+a[n]:p+=a[n]}else if(a[n].search(/<\//)>-1){p=!l?p+=t[--i]+a[n]:p+=a[n]}else if(a[n].search(/\/>/)>-1){p=!l?p+=t[i]+a[n]:p+=a[n]}else if(a[n].search(/<\?/)>-1){p+=t[i]+a[n]}else if(a[n].search(/xmlns\:/)>-1||a[n].search(/xmlns\=/)>-1){p+=t[i]+a[n]}else{p+=a[n]}}return p[0]=="\n"?p.slice(1):p};r.prototype.json=function(e,r){var r=r?r:this.step;if(typeof JSON==="undefined")return e;if(typeof e==="string")return JSON.stringify(JSON.parse(e),null,r);if(typeof e==="object")return JSON.stringify(e,null,r);return e};r.prototype.css=function(r,c){var a=r.replace(/\s{1,}/g," ").replace(/\{/g,"{~::~").replace(/\}/g,"~::~}~::~").replace(/\;/g,";~::~").replace(/\/\*/g,"~::~/*").replace(/\*\//g,"*/~::~").replace(/~::~\s{0,}~::~/g,"~::~").split("~::~"),s=a.length,l=0,i="",p=0,n=c?e(c):this.shift;for(p=0;p<s;p++){if(/\{/.exec(a[p])){i+=n[l++]+a[p]}else if(/\}/.exec(a[p])){i+=n[--l]+a[p]}else if(/\*\\/.exec(a[p])){i+=n[l]+a[p]}else{i+=n[l]+a[p]}}return i.replace(/^\n{1,}/,"")};function c(e,r){return r-(e.replace(/\(/g,"").length-e.replace(/\)/g,"").length)}function a(e,r){return e.replace(/\s{1,}/g," ").replace(/ AND /gi,"~::~"+r+r+"AND ").replace(/ BETWEEN /gi,"~::~"+r+"BETWEEN ").replace(/ CASE /gi,"~::~"+r+"CASE ").replace(/ ELSE /gi,"~::~"+r+"ELSE ").replace(/ END /gi,"~::~"+r+"END ").replace(/ FROM /gi,"~::~FROM ").replace(/ GROUP\s{1,}BY/gi,"~::~GROUP BY ").replace(/ HAVING /gi,"~::~HAVING ").replace(/ IN /gi," IN ").replace(/ JOIN /gi,"~::~JOIN ").replace(/ CROSS~::~{1,}JOIN /gi,"~::~CROSS JOIN ").replace(/ INNER~::~{1,}JOIN /gi,"~::~INNER JOIN ").replace(/ LEFT~::~{1,}JOIN /gi,"~::~LEFT JOIN ").replace(/ RIGHT~::~{1,}JOIN /gi,"~::~RIGHT JOIN ").replace(/ ON /gi,"~::~"+r+"ON ").replace(/ OR /gi,"~::~"+r+r+"OR ").replace(/ ORDER\s{1,}BY/gi,"~::~ORDER BY ").replace(/ OVER /gi,"~::~"+r+"OVER ").replace(/\(\s{0,}SELECT /gi,"~::~(SELECT ").replace(/\)\s{0,}SELECT /gi,")~::~SELECT ").replace(/ THEN /gi," THEN~::~"+r+"").replace(/ UNION /gi,"~::~UNION~::~").replace(/ USING /gi,"~::~USING ").replace(/ WHEN /gi,"~::~"+r+"WHEN ").replace(/ WHERE /gi,"~::~WHERE ").replace(/ WITH /gi,"~::~WITH ").replace(/ ALL /gi," ALL ").replace(/ AS /gi," AS ").replace(/ ASC /gi," ASC ").replace(/ DESC /gi," DESC ").replace(/ DISTINCT /gi," DISTINCT ").replace(/ EXISTS /gi," EXISTS ").replace(/ NOT /gi," NOT ").replace(/ NULL /gi," NULL ").replace(/ LIKE /gi," LIKE ").replace(/\s{0,}SELECT /gi,"SELECT ").replace(/\s{0,}UPDATE /gi,"UPDATE ").replace(/ SET /gi," SET ").replace(/~::~{1,}/g,"~::~").split("~::~")}r.prototype.sql=function(r,s){var l=r.replace(/\s{1,}/g," ").replace(/\'/gi,"~::~'").split("~::~"),i=l.length,p=[],n=0,t=this.step,g=true,f=false,E=0,N="",o=0,S=s?e(s):this.shift;for(o=0;o<i;o++){if(o%2){p=p.concat(l[o])}else{p=p.concat(a(l[o],t))}}i=p.length;for(o=0;o<i;o++){E=c(p[o],E);if(/\s{0,}\s{0,}SELECT\s{0,}/.exec(p[o])){p[o]=p[o].replace(/\,/g,",\n"+t+t+"")}if(/\s{0,}\s{0,}SET\s{0,}/.exec(p[o])){p[o]=p[o].replace(/\,/g,",\n"+t+t+"")}if(/\s{0,}\(\s{0,}SELECT\s{0,}/.exec(p[o])){n++;N+=S[n]+p[o]}else if(/\'/.exec(p[o])){if(E<1&&n){n--}N+=p[o]}else{N+=S[n]+p[o];if(E<1&&n){n--}}var u=0}N=N.replace(/^\n{1,}/,"").replace(/\n{1,}/g,"\n");return N};r.prototype.xmlmin=function(e,r){var c=r?e:e.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g,"").replace(/[ \r\n\t]{1,}xmlns/g," xmlns");return c.replace(/>\s{0,}</g,"><")};r.prototype.jsonmin=function(e){if(typeof JSON==="undefined")return e;return JSON.stringify(JSON.parse(e),null,0)};r.prototype.cssmin=function(e,r){var c=r?e:e.replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\//g,"");return c.replace(/\s{1,}/g," ").replace(/\{\s{1,}/g,"{").replace(/\}\s{1,}/g,"}").replace(/\;\s{1,}/g,";").replace(/\/\*\s{1,}/g,"/*").replace(/\*\/\s{1,}/g,"*/")};r.prototype.sqlmin=function(e){return e.replace(/\s{1,}/g," ").replace(/\s{1,}\(/,"(").replace(/\s{1,}\)/,")")};window.vkbeautify=new r})();