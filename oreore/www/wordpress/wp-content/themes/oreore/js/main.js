(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./sample.js");

// Expression bodies
var odds = evens.map(function (v) {
  return v + 1;
});
var nums = evens.map(function (v, i) {
  return v + i;
});

// Statement bodies
nums.forEach(function (v) {
  if (v % 5 === 0) fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends: function printFriends() {
    var _this = this;

    this._friends.forEach(function (f) {
      return console.log(_this._name + " knows " + f);
    });
  }
};

},{"./sample.js":2}],2:[function(require,module,exports){
"use strict";

require("./../../bower_components/jquery/dist/jquery.js");
Masonry = require("masonry-layout");
console.log("sample");

/*doc
---
title: heading-2
name: heading-2
category: script
---

見出しです。見出しの解説等をここに書きます。見出しです。見出しの解説等をここに書きます。見出しです。見出しの解説等をここに書きます。見出しです。見出しの解説等をここに書きます。見出しです。見出しの解説等をここに書きます。見出しです。見出しの解説等をここに書きます。

* この見出しはページに一回しか登場しません
* 箇条書きのリストが作れます

見出しです。こんなふうに解説を書きます。

1. 番号付きリストもかけます
2. 番号付きリストもかけます
3. 番号付きリストもかけます

## 以下は通常のHTMLとして書き出されます

<div class="heading">
  <div class="subText">見出しの補足見出しの補足</div>
  <h2 class="mainText">彼は背後にひそかな足音を聞いた。それはあまり良い意味を</h2>
</div>

## 以下はコードハイライトされて書き出されます

```html
<div class="heading">
  <div class="subText">見出しの補足見出しの補足</div>
  <h2 class="mainText">彼は背後にひそかな足音を聞いた。それはあまり良い意味を</h2>
</div>
```

*/

},{"./../../bower_components/jquery/dist/jquery.js":3,"masonry-layout":4}],3:[function(require,module,exports){
"use strict";(function(global, factory){if(typeof module === "object" && typeof module.exports === "object"){module.exports = global.document?factory(global, true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else {factory(global);}})(typeof window !== "undefined"?window:undefined, function(window, noGlobal){var deletedIds=[];var _slice=deletedIds.slice;var concat=deletedIds.concat;var push=deletedIds.push;var indexOf=deletedIds.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var version="1.11.2", jQuery=function jQuery(selector, context){return new jQuery.fn.init(selector, context);}, rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix=/^-ms-/, rdashAlpha=/-([\da-z])/gi, fcamelCase=function fcamelCase(all, letter){return letter.toUpperCase();};jQuery.fn = jQuery.prototype = {jquery:version, constructor:jQuery, selector:"", length:0, toArray:function toArray(){return _slice.call(this);}, get:function get(num){return num != null?num < 0?this[num + this.length]:this[num]:_slice.call(this);}, pushStack:function pushStack(elems){var ret=jQuery.merge(this.constructor(), elems);ret.prevObject = this;ret.context = this.context;return ret;}, each:function each(callback, args){return jQuery.each(this, callback, args);}, map:function map(callback){return this.pushStack(jQuery.map(this, function(elem, i){return callback.call(elem, i, elem);}));}, slice:function slice(){return this.pushStack(_slice.apply(this, arguments));}, first:function first(){return this.eq(0);}, last:function last(){return this.eq(-1);}, eq:function eq(i){var len=this.length, j=+i + (i < 0?len:0);return this.pushStack(j >= 0 && j < len?[this[j]]:[]);}, end:function end(){return this.prevObject || this.constructor(null);}, push:push, sort:deletedIds.sort, splice:deletedIds.splice};jQuery.extend = jQuery.fn.extend = function(){var src, copyIsArray, copy, name, options, clone, target=arguments[0] || {}, i=1, length=arguments.length, deep=false;if(typeof target === "boolean"){deep = target;target = arguments[i] || {};i++;}if(typeof target !== "object" && !jQuery.isFunction(target)){target = {};}if(i === length){target = this;i--;}for(; i < length; i++) {if((options = arguments[i]) != null){for(name in options) {src = target[name];copy = options[name];if(target === copy){continue;}if(deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))){if(copyIsArray){copyIsArray = false;clone = src && jQuery.isArray(src)?src:[];}else {clone = src && jQuery.isPlainObject(src)?src:{};}target[name] = jQuery.extend(deep, clone, copy);}else if(copy !== undefined){target[name] = copy;}}}}return target;};jQuery.extend({expando:"jQuery" + (version + Math.random()).replace(/\D/g, ""), isReady:true, error:function error(msg){throw new Error(msg);}, noop:function noop(){}, isFunction:function isFunction(obj){return jQuery.type(obj) === "function";}, isArray:Array.isArray || function(obj){return jQuery.type(obj) === "array";}, isWindow:function isWindow(obj){return obj != null && obj == obj.window;}, isNumeric:function isNumeric(obj){return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;}, isEmptyObject:function isEmptyObject(obj){var name;for(name in obj) {return false;}return true;}, isPlainObject:function isPlainObject(obj){var key;if(!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)){return false;}try{if(obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")){return false;}}catch(e) {return false;}if(support.ownLast){for(key in obj) {return hasOwn.call(obj, key);}}for(key in obj) {}return key === undefined || hasOwn.call(obj, key);}, type:function type(obj){if(obj == null){return obj + "";}return typeof obj === "object" || typeof obj === "function"?class2type[toString.call(obj)] || "object":typeof obj;}, globalEval:function globalEval(data){if(data && jQuery.trim(data)){(window.execScript || function(data){window["eval"].call(window, data);})(data);}}, camelCase:function camelCase(string){return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);}, nodeName:function nodeName(elem, name){return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();}, each:function each(obj, callback, args){var value, i=0, length=obj.length, isArray=isArraylike(obj);if(args){if(isArray){for(; i < length; i++) {value = callback.apply(obj[i], args);if(value === false){break;}}}else {for(i in obj) {value = callback.apply(obj[i], args);if(value === false){break;}}}}else {if(isArray){for(; i < length; i++) {value = callback.call(obj[i], i, obj[i]);if(value === false){break;}}}else {for(i in obj) {value = callback.call(obj[i], i, obj[i]);if(value === false){break;}}}}return obj;}, trim:function trim(text){return text == null?"":(text + "").replace(rtrim, "");}, makeArray:function makeArray(arr, results){var ret=results || [];if(arr != null){if(isArraylike(Object(arr))){jQuery.merge(ret, typeof arr === "string"?[arr]:arr);}else {push.call(ret, arr);}}return ret;}, inArray:function inArray(elem, arr, i){var len;if(arr){if(indexOf){return indexOf.call(arr, elem, i);}len = arr.length;i = i?i < 0?Math.max(0, len + i):i:0;for(; i < len; i++) {if(i in arr && arr[i] === elem){return i;}}}return -1;}, merge:function merge(first, second){var len=+second.length, j=0, i=first.length;while(j < len) {first[i++] = second[j++];}if(len !== len){while(second[j] !== undefined) {first[i++] = second[j++];}}first.length = i;return first;}, grep:function grep(elems, callback, invert){var callbackInverse, matches=[], i=0, length=elems.length, callbackExpect=!invert;for(; i < length; i++) {callbackInverse = !callback(elems[i], i);if(callbackInverse !== callbackExpect){matches.push(elems[i]);}}return matches;}, map:function map(elems, callback, arg){var value, i=0, length=elems.length, isArray=isArraylike(elems), ret=[];if(isArray){for(; i < length; i++) {value = callback(elems[i], i, arg);if(value != null){ret.push(value);}}}else {for(i in elems) {value = callback(elems[i], i, arg);if(value != null){ret.push(value);}}}return concat.apply([], ret);}, guid:1, proxy:function proxy(fn, context){var args, proxy, tmp;if(typeof context === "string"){tmp = fn[context];context = fn;fn = tmp;}if(!jQuery.isFunction(fn)){return undefined;}args = _slice.call(arguments, 2);proxy = function(){return fn.apply(context || this, args.concat(_slice.call(arguments)));};proxy.guid = fn.guid = fn.guid || jQuery.guid++;return proxy;}, now:function now(){return +new Date();}, support:support});jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name){class2type["[object " + name + "]"] = name.toLowerCase();});function isArraylike(obj){var length=obj.length, type=jQuery.type(obj);if(type === "function" || jQuery.isWindow(obj)){return false;}if(obj.nodeType === 1 && length){return true;}return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;}var Sizzle=(function(window){var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando="sizzle" + 1 * new Date(), preferredDoc=window.document, dirruns=0, done=0, classCache=createCache(), tokenCache=createCache(), compilerCache=createCache(), sortOrder=function sortOrder(a, b){if(a === b){hasDuplicate = true;}return 0;}, MAX_NEGATIVE=1 << 31, hasOwn=({}).hasOwnProperty, arr=[], pop=arr.pop, push_native=arr.push, push=arr.push, slice=arr.slice, indexOf=function indexOf(list, elem){var i=0, len=list.length;for(; i < len; i++) {if(list[i] === elem){return i;}}return -1;}, booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace="[\\x20\\t\\r\\n\\f]", characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", identifier=characterEncoding.replace("w", "w#"), attributes="\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos=":(" + characterEncoding + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace=new RegExp(whitespace + "+", "g"), rtrim=new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma=new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators=new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes=new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"), rpseudo=new RegExp(pseudos), ridentifier=new RegExp("^" + identifier + "$"), matchExpr={"ID":new RegExp("^#(" + characterEncoding + ")"), "CLASS":new RegExp("^\\.(" + characterEncoding + ")"), "TAG":new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"), "ATTR":new RegExp("^" + attributes), "PSEUDO":new RegExp("^" + pseudos), "CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"), "bool":new RegExp("^(?:" + booleans + ")$", "i"), "needsContext":new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")}, rinputs=/^(?:input|select|textarea|button)$/i, rheader=/^h\d$/i, rnative=/^[^{]+\{\s*\[native \w/, rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling=/[+~]/, rescape=/'|\\/g, runescape=new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape=function funescape(_, escaped, escapedWhitespace){var high="0x" + escaped - 65536;return high !== high || escapedWhitespace?escaped:high < 0?String.fromCharCode(high + 65536):String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);}, unloadHandler=function unloadHandler(){setDocument();};try{push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e) {push = {apply:arr.length?function(target, els){push_native.apply(target, slice.call(els));}:function(target, els){var j=target.length, i=0;while(target[j++] = els[i++]) {}target.length = j - 1;}};}function Sizzle(selector, context, results, seed){var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;if((context?context.ownerDocument || context:preferredDoc) !== document){setDocument(context);}context = context || document;results = results || [];nodeType = context.nodeType;if(typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11){return results;}if(!seed && documentIsHTML){if(nodeType !== 11 && (match = rquickExpr.exec(selector))){if(m = match[1]){if(nodeType === 9){elem = context.getElementById(m);if(elem && elem.parentNode){if(elem.id === m){results.push(elem);return results;}}else {return results;}}else {if(context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m){results.push(elem);return results;}}}else if(match[2]){push.apply(results, context.getElementsByTagName(selector));return results;}else if((m = match[3]) && support.getElementsByClassName){push.apply(results, context.getElementsByClassName(m));return results;}}if(support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))){nid = old = expando;newContext = context;newSelector = nodeType !== 1 && selector;if(nodeType === 1 && context.nodeName.toLowerCase() !== "object"){groups = tokenize(selector);if(old = context.getAttribute("id")){nid = old.replace(rescape, "\\$&");}else {context.setAttribute("id", nid);}nid = "[id='" + nid + "'] ";i = groups.length;while(i--) {groups[i] = nid + toSelector(groups[i]);}newContext = rsibling.test(selector) && testContext(context.parentNode) || context;newSelector = groups.join(",");}if(newSelector){try{push.apply(results, newContext.querySelectorAll(newSelector));return results;}catch(qsaError) {}finally {if(!old){context.removeAttribute("id");}}}}}return select(selector.replace(rtrim, "$1"), context, results, seed);}function createCache(){var keys=[];function cache(key, value){if(keys.push(key + " ") > Expr.cacheLength){delete cache[keys.shift()];}return cache[key + " "] = value;}return cache;}function markFunction(fn){fn[expando] = true;return fn;}function assert(fn){var div=document.createElement("div");try{return !!fn(div);}catch(e) {return false;}finally {if(div.parentNode){div.parentNode.removeChild(div);}div = null;}}function addHandle(attrs, handler){var arr=attrs.split("|"), i=attrs.length;while(i--) {Expr.attrHandle[arr[i]] = handler;}}function siblingCheck(a, b){var cur=b && a, diff=cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);if(diff){return diff;}if(cur){while(cur = cur.nextSibling) {if(cur === b){return -1;}}}return a?1:-1;}function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name === "input" && elem.type === type;};}function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return (name === "input" || name === "button") && elem.type === type;};}function createPositionalPseudo(fn){return markFunction(function(argument){argument = +argument;return markFunction(function(seed, matches){var j, matchIndexes=fn([], seed.length, argument), i=matchIndexes.length;while(i--) {if(seed[j = matchIndexes[i]]){seed[j] = !(matches[j] = seed[j]);}}});});}function testContext(context){return context && typeof context.getElementsByTagName !== "undefined" && context;}support = Sizzle.support = {};isXML = Sizzle.isXML = function(elem){var documentElement=elem && (elem.ownerDocument || elem).documentElement;return documentElement?documentElement.nodeName !== "HTML":false;};setDocument = Sizzle.setDocument = function(node){var hasCompare, parent, doc=node?node.ownerDocument || node:preferredDoc;if(doc === document || doc.nodeType !== 9 || !doc.documentElement){return document;}document = doc;docElem = doc.documentElement;parent = doc.defaultView;if(parent && parent !== parent.top){if(parent.addEventListener){parent.addEventListener("unload", unloadHandler, false);}else if(parent.attachEvent){parent.attachEvent("onunload", unloadHandler);}}documentIsHTML = !isXML(doc);support.attributes = assert(function(div){div.className = "i";return !div.getAttribute("className");});support.getElementsByTagName = assert(function(div){div.appendChild(doc.createComment(""));return !div.getElementsByTagName("*").length;});support.getElementsByClassName = rnative.test(doc.getElementsByClassName);support.getById = assert(function(div){docElem.appendChild(div).id = expando;return !doc.getElementsByName || !doc.getElementsByName(expando).length;});if(support.getById){Expr.find["ID"] = function(id, context){if(typeof context.getElementById !== "undefined" && documentIsHTML){var m=context.getElementById(id);return m && m.parentNode?[m]:[];}};Expr.filter["ID"] = function(id){var attrId=id.replace(runescape, funescape);return function(elem){return elem.getAttribute("id") === attrId;};};}else {delete Expr.find["ID"];Expr.filter["ID"] = function(id){var attrId=id.replace(runescape, funescape);return function(elem){var node=typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");return node && node.value === attrId;};};}Expr.find["TAG"] = support.getElementsByTagName?function(tag, context){if(typeof context.getElementsByTagName !== "undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag, context){var elem, tmp=[], i=0, results=context.getElementsByTagName(tag);if(tag === "*"){while(elem = results[i++]) {if(elem.nodeType === 1){tmp.push(elem);}}return tmp;}return results;};Expr.find["CLASS"] = support.getElementsByClassName && function(className, context){if(documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches = [];rbuggyQSA = [];if(support.qsa = rnative.test(doc.querySelectorAll)){assert(function(div){docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");}if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");}if(!div.querySelectorAll("[id~=" + expando + "-]").length){rbuggyQSA.push("~=");}if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}if(!div.querySelectorAll("a#" + expando + "+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){var input=doc.createElement("input");input.setAttribute("type", "hidden");div.appendChild(input).setAttribute("name", "D");if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");}if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled", ":disabled");}div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)){assert(function(div){support.disconnectedMatch = matches.call(div, "div");matches.call(div, "[s!='']:x");rbuggyMatches.push("!=", pseudos);});}rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));hasCompare = rnative.test(docElem.compareDocumentPosition);contains = hasCompare || rnative.test(docElem.contains)?function(a, b){var adown=a.nodeType === 9?a.documentElement:a, bup=b && b.parentNode;return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains?adown.contains(bup):a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));}:function(a, b){if(b){while(b = b.parentNode) {if(b === a){return true;}}}return false;};sortOrder = hasCompare?function(a, b){if(a === b){hasDuplicate = true;return 0;}var compare=!a.compareDocumentPosition - !b.compareDocumentPosition;if(compare){return compare;}compare = (a.ownerDocument || a) === (b.ownerDocument || b)?a.compareDocumentPosition(b):1;if(compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare){if(a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)){return -1;}if(b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)){return 1;}return sortInput?indexOf(sortInput, a) - indexOf(sortInput, b):0;}return compare & 4?-1:1;}:function(a, b){if(a === b){hasDuplicate = true;return 0;}var cur, i=0, aup=a.parentNode, bup=b.parentNode, ap=[a], bp=[b];if(!aup || !bup){return a === doc?-1:b === doc?1:aup?-1:bup?1:sortInput?indexOf(sortInput, a) - indexOf(sortInput, b):0;}else if(aup === bup){return siblingCheck(a, b);}cur = a;while(cur = cur.parentNode) {ap.unshift(cur);}cur = b;while(cur = cur.parentNode) {bp.unshift(cur);}while(ap[i] === bp[i]) {i++;}return i?siblingCheck(ap[i], bp[i]):ap[i] === preferredDoc?-1:bp[i] === preferredDoc?1:0;};return doc;};Sizzle.matches = function(expr, elements){return Sizzle(expr, null, null, elements);};Sizzle.matchesSelector = function(elem, expr){if((elem.ownerDocument || elem) !== document){setDocument(elem);}expr = expr.replace(rattributeQuotes, "='$1']");if(support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))){try{var ret=matches.call(elem, expr);if(ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11){return ret;}}catch(e) {}}return Sizzle(expr, document, null, [elem]).length > 0;};Sizzle.contains = function(context, elem){if((context.ownerDocument || context) !== document){setDocument(context);}return contains(context, elem);};Sizzle.attr = function(elem, name){if((elem.ownerDocument || elem) !== document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()], val=fn && hasOwn.call(Expr.attrHandle, name.toLowerCase())?fn(elem, name, !documentIsHTML):undefined;return val !== undefined?val:support.attributes || !documentIsHTML?elem.getAttribute(name):(val = elem.getAttributeNode(name)) && val.specified?val.value:null;};Sizzle.error = function(msg){throw new Error("Syntax error, unrecognized expression: " + msg);};Sizzle.uniqueSort = function(results){var elem, duplicates=[], j=0, i=0;hasDuplicate = !support.detectDuplicates;sortInput = !support.sortStable && results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem = results[i++]) {if(elem === results[i]){j = duplicates.push(i);}}while(j--) {results.splice(duplicates[j], 1);}}sortInput = null;return results;};getText = Sizzle.getText = function(elem){var node, ret="", i=0, nodeType=elem.nodeType;if(!nodeType){while(node = elem[i++]) {ret += getText(node);}}else if(nodeType === 1 || nodeType === 9 || nodeType === 11){if(typeof elem.textContent === "string"){return elem.textContent;}else {for(elem = elem.firstChild; elem; elem = elem.nextSibling) {ret += getText(elem);}}}else if(nodeType === 3 || nodeType === 4){return elem.nodeValue;}return ret;};Expr = Sizzle.selectors = {cacheLength:50, createPseudo:markFunction, match:matchExpr, attrHandle:{}, find:{}, relative:{">":{dir:"parentNode", first:true}, " ":{dir:"parentNode"}, "+":{dir:"previousSibling", first:true}, "~":{dir:"previousSibling"}}, preFilter:{"ATTR":function ATTR(match){match[1] = match[1].replace(runescape, funescape);match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);if(match[2] === "~="){match[3] = " " + match[3] + " ";}return match.slice(0, 4);}, "CHILD":function CHILD(match){match[1] = match[1].toLowerCase();if(match[1].slice(0, 3) === "nth"){if(!match[3]){Sizzle.error(match[0]);}match[4] = +(match[4]?match[5] + (match[6] || 1):2 * (match[3] === "even" || match[3] === "odd"));match[5] = +(match[7] + match[8] || match[3] === "odd");}else if(match[3]){Sizzle.error(match[0]);}return match;}, "PSEUDO":function PSEUDO(match){var excess, unquoted=!match[6] && match[2];if(matchExpr["CHILD"].test(match[0])){return null;}if(match[3]){match[2] = match[4] || match[5] || "";}else if(unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)){match[0] = match[0].slice(0, excess);match[2] = unquoted.slice(0, excess);}return match.slice(0, 3);}}, filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape, funescape).toLowerCase();return nodeNameSelector === "*"?function(){return true;}:function(elem){return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;};}, "CLASS":function CLASS(className){var pattern=classCache[className + " "];return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem){return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");});}, "ATTR":function ATTR(name, operator, check){return function(elem){var result=Sizzle.attr(elem, name);if(result == null){return operator === "!=";}if(!operator){return true;}result += "";return operator === "="?result === check:operator === "!="?result !== check:operator === "^="?check && result.indexOf(check) === 0:operator === "*="?check && result.indexOf(check) > -1:operator === "$="?check && result.slice(-check.length) === check:operator === "~="?(" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1:operator === "|="?result === check || result.slice(0, check.length + 1) === check + "-":false;};}, "CHILD":function CHILD(type, what, argument, first, last){var simple=type.slice(0, 3) !== "nth", forward=type.slice(-4) !== "last", ofType=what === "of-type";return first === 1 && last === 0?function(elem){return !!elem.parentNode;}:function(elem, context, xml){var cache, outerCache, node, diff, nodeIndex, start, dir=simple !== forward?"nextSibling":"previousSibling", parent=elem.parentNode, name=ofType && elem.nodeName.toLowerCase(), useCache=!xml && !ofType;if(parent){if(simple){while(dir) {node = elem;while(node = node[dir]) {if(ofType?node.nodeName.toLowerCase() === name:node.nodeType === 1){return false;}}start = dir = type === "only" && !start && "nextSibling";}return true;}start = [forward?parent.firstChild:parent.lastChild];if(forward && useCache){outerCache = parent[expando] || (parent[expando] = {});cache = outerCache[type] || [];nodeIndex = cache[0] === dirruns && cache[1];diff = cache[0] === dirruns && cache[2];node = nodeIndex && parent.childNodes[nodeIndex];while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {if(node.nodeType === 1 && ++diff && node === elem){outerCache[type] = [dirruns, nodeIndex, diff];break;}}}else if(useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns){diff = cache[1];}else {while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {if((ofType?node.nodeName.toLowerCase() === name:node.nodeType === 1) && ++diff){if(useCache){(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];}if(node === elem){break;}}}}diff -= last;return diff === first || diff % first === 0 && diff / first >= 0;}};}, "PSEUDO":function PSEUDO(pseudo, argument){var args, fn=Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);if(fn[expando]){return fn(argument);}if(fn.length > 1){args = [pseudo, pseudo, "", argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed, matches){var idx, matched=fn(seed, argument), i=matched.length;while(i--) {idx = indexOf(seed, matched[i]);seed[idx] = !(matches[idx] = matched[i]);}}):function(elem){return fn(elem, 0, args);};}return fn;}}, pseudos:{"not":markFunction(function(selector){var input=[], results=[], matcher=compile(selector.replace(rtrim, "$1"));return matcher[expando]?markFunction(function(seed, matches, context, xml){var elem, unmatched=matcher(seed, null, xml, []), i=seed.length;while(i--) {if(elem = unmatched[i]){seed[i] = !(matches[i] = elem);}}}):function(elem, context, xml){input[0] = elem;matcher(input, null, xml, results);input[0] = null;return !results.pop();};}), "has":markFunction(function(selector){return function(elem){return Sizzle(selector, elem).length > 0;};}), "contains":markFunction(function(text){text = text.replace(runescape, funescape);return function(elem){return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;};}), "lang":markFunction(function(lang){if(!ridentifier.test(lang || "")){Sizzle.error("unsupported lang: " + lang);}lang = lang.replace(runescape, funescape).toLowerCase();return function(elem){var elemLang;do {if(elemLang = documentIsHTML?elem.lang:elem.getAttribute("xml:lang") || elem.getAttribute("lang")){elemLang = elemLang.toLowerCase();return elemLang === lang || elemLang.indexOf(lang + "-") === 0;}}while((elem = elem.parentNode) && elem.nodeType === 1);return false;};}), "target":function target(elem){var hash=window.location && window.location.hash;return hash && hash.slice(1) === elem.id;}, "root":function root(elem){return elem === docElem;}, "focus":function focus(elem){return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);}, "enabled":function enabled(elem){return elem.disabled === false;}, "disabled":function disabled(elem){return elem.disabled === true;}, "checked":function checked(elem){var nodeName=elem.nodeName.toLowerCase();return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;}, "selected":function selected(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected === true;}, "empty":function empty(elem){for(elem = elem.firstChild; elem; elem = elem.nextSibling) {if(elem.nodeType < 6){return false;}}return true;}, "parent":function parent(elem){return !Expr.pseudos["empty"](elem);}, "header":function header(elem){return rheader.test(elem.nodeName);}, "input":function input(elem){return rinputs.test(elem.nodeName);}, "button":function button(elem){var name=elem.nodeName.toLowerCase();return name === "input" && elem.type === "button" || name === "button";}, "text":function text(elem){var attr;return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");}, "first":createPositionalPseudo(function(){return [0];}), "last":createPositionalPseudo(function(matchIndexes, length){return [length - 1];}), "eq":createPositionalPseudo(function(matchIndexes, length, argument){return [argument < 0?argument + length:argument];}), "even":createPositionalPseudo(function(matchIndexes, length){var i=0;for(; i < length; i += 2) {matchIndexes.push(i);}return matchIndexes;}), "odd":createPositionalPseudo(function(matchIndexes, length){var i=1;for(; i < length; i += 2) {matchIndexes.push(i);}return matchIndexes;}), "lt":createPositionalPseudo(function(matchIndexes, length, argument){var i=argument < 0?argument + length:argument;for(; --i >= 0;) {matchIndexes.push(i);}return matchIndexes;}), "gt":createPositionalPseudo(function(matchIndexes, length, argument){var i=argument < 0?argument + length:argument;for(; ++i < length;) {matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"] = Expr.pseudos["eq"];for(i in {radio:true, checkbox:true, file:true, password:true, image:true}) {Expr.pseudos[i] = createInputPseudo(i);}for(i in {submit:true, reset:true}) {Expr.pseudos[i] = createButtonPseudo(i);}function setFilters(){}setFilters.prototype = Expr.filters = Expr.pseudos;Expr.setFilters = new setFilters();tokenize = Sizzle.tokenize = function(selector, parseOnly){var matched, match, tokens, type, soFar, groups, preFilters, cached=tokenCache[selector + " "];if(cached){return parseOnly?0:cached.slice(0);}soFar = selector;groups = [];preFilters = Expr.preFilter;while(soFar) {if(!matched || (match = rcomma.exec(soFar))){if(match){soFar = soFar.slice(match[0].length) || soFar;}groups.push(tokens = []);}matched = false;if(match = rcombinators.exec(soFar)){matched = match.shift();tokens.push({value:matched, type:match[0].replace(rtrim, " ")});soFar = soFar.slice(matched.length);}for(type in Expr.filter) {if((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))){matched = match.shift();tokens.push({value:matched, type:type, matches:match});soFar = soFar.slice(matched.length);}}if(!matched){break;}}return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector, groups).slice(0);};function toSelector(tokens){var i=0, len=tokens.length, selector="";for(; i < len; i++) {selector += tokens[i].value;}return selector;}function addCombinator(matcher, combinator, base){var dir=combinator.dir, checkNonElements=base && dir === "parentNode", doneName=done++;return combinator.first?function(elem, context, xml){while(elem = elem[dir]) {if(elem.nodeType === 1 || checkNonElements){return matcher(elem, context, xml);}}}:function(elem, context, xml){var oldCache, outerCache, newCache=[dirruns, doneName];if(xml){while(elem = elem[dir]) {if(elem.nodeType === 1 || checkNonElements){if(matcher(elem, context, xml)){return true;}}}}else {while(elem = elem[dir]) {if(elem.nodeType === 1 || checkNonElements){outerCache = elem[expando] || (elem[expando] = {});if((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName){return newCache[2] = oldCache[2];}else {outerCache[dir] = newCache;if(newCache[2] = matcher(elem, context, xml)){return true;}}}}}};}function elementMatcher(matchers){return matchers.length > 1?function(elem, context, xml){var i=matchers.length;while(i--) {if(!matchers[i](elem, context, xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector, contexts, results){var i=0, len=contexts.length;for(; i < len; i++) {Sizzle(selector, contexts[i], results);}return results;}function condense(unmatched, map, filter, context, xml){var elem, newUnmatched=[], i=0, len=unmatched.length, mapped=map != null;for(; i < len; i++) {if(elem = unmatched[i]){if(!filter || filter(elem, context, xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector){if(postFilter && !postFilter[expando]){postFilter = setMatcher(postFilter);}if(postFinder && !postFinder[expando]){postFinder = setMatcher(postFinder, postSelector);}return markFunction(function(seed, results, context, xml){var temp, i, elem, preMap=[], postMap=[], preexisting=results.length, elems=seed || multipleContexts(selector || "*", context.nodeType?[context]:context, []), matcherIn=preFilter && (seed || !selector)?condense(elems, preMap, preFilter, context, xml):elems, matcherOut=matcher?postFinder || (seed?preFilter:preexisting || postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn, matcherOut, context, xml);}if(postFilter){temp = condense(matcherOut, postMap);postFilter(temp, [], context, xml);i = temp.length;while(i--) {if(elem = temp[i]){matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);}}}if(seed){if(postFinder || preFilter){if(postFinder){temp = [];i = matcherOut.length;while(i--) {if(elem = matcherOut[i]){temp.push(matcherIn[i] = elem);}}postFinder(null, matcherOut = [], temp, xml);}i = matcherOut.length;while(i--) {if((elem = matcherOut[i]) && (temp = postFinder?indexOf(seed, elem):preMap[i]) > -1){seed[temp] = !(results[temp] = elem);}}}}else {matcherOut = condense(matcherOut === results?matcherOut.splice(preexisting, matcherOut.length):matcherOut);if(postFinder){postFinder(null, results, matcherOut, xml);}else {push.apply(results, matcherOut);}}});}function matcherFromTokens(tokens){var checkContext, matcher, j, len=tokens.length, leadingRelative=Expr.relative[tokens[0].type], implicitRelative=leadingRelative || Expr.relative[" "], i=leadingRelative?1:0, matchContext=addCombinator(function(elem){return elem === checkContext;}, implicitRelative, true), matchAnyContext=addCombinator(function(elem){return indexOf(checkContext, elem) > -1;}, implicitRelative, true), matchers=[function(elem, context, xml){var ret=!leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType?matchContext(elem, context, xml):matchAnyContext(elem, context, xml));checkContext = null;return ret;}];for(; i < len; i++) {if(matcher = Expr.relative[tokens[i].type]){matchers = [addCombinator(elementMatcher(matchers), matcher)];}else {matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);if(matcher[expando]){j = ++i;for(; j < len; j++) {if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({value:tokens[i - 2].type === " "?"*":""})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers, setMatchers){var bySet=setMatchers.length > 0, byElement=elementMatchers.length > 0, superMatcher=function superMatcher(seed, context, xml, results, outermost){var elem, j, matcher, matchedCount=0, i="0", unmatched=seed && [], setMatched=[], contextBackup=outermostContext, elems=seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique=dirruns += contextBackup == null?1:Math.random() || 0.1, len=elems.length;if(outermost){outermostContext = context !== document && context;}for(; i !== len && (elem = elems[i]) != null; i++) {if(byElement && elem){j = 0;while(matcher = elementMatchers[j++]) {if(matcher(elem, context, xml)){results.push(elem);break;}}if(outermost){dirruns = dirrunsUnique;}}if(bySet){if(elem = !matcher && elem){matchedCount--;}if(seed){unmatched.push(elem);}}}matchedCount += i;if(bySet && i !== matchedCount){j = 0;while(matcher = setMatchers[j++]) {matcher(unmatched, setMatched, context, xml);}if(seed){if(matchedCount > 0){while(i--) {if(!(unmatched[i] || setMatched[i])){setMatched[i] = pop.call(results);}}}setMatched = condense(setMatched);}push.apply(results, setMatched);if(outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1){Sizzle.uniqueSort(results);}}if(outermost){dirruns = dirrunsUnique;outermostContext = contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile = Sizzle.compile = function(selector, match){var i, setMatchers=[], elementMatchers=[], cached=compilerCache[selector + " "];if(!cached){if(!match){match = tokenize(selector);}i = match.length;while(i--) {cached = matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else {elementMatchers.push(cached);}}cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));cached.selector = selector;}return cached;};select = Sizzle.select = function(selector, context, results, seed){var i, tokens, token, type, find, compiled=typeof selector === "function" && selector, match=!seed && tokenize(selector = compiled.selector || selector);results = results || [];if(match.length === 1){tokens = match[0] = match[0].slice(0);if(tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]){context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];if(!context){return results;}else if(compiled){context = context.parentNode;}selector = selector.slice(tokens.shift().value.length);}i = matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--) {token = tokens[i];if(Expr.relative[type = token.type]){break;}if(find = Expr.find[type]){if(seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)){tokens.splice(i, 1);selector = seed.length && toSelector(tokens);if(!selector){push.apply(results, seed);return results;}break;}}}}(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);return results;};support.sortStable = expando.split("").sort(sortOrder).join("") === expando;support.detectDuplicates = !!hasDuplicate;setDocument();support.sortDetached = assert(function(div1){return div1.compareDocumentPosition(document.createElement("div")) & 1;});if(!assert(function(div){div.innerHTML = "<a href='#'></a>";return div.firstChild.getAttribute("href") === "#";})){addHandle("type|href|height|width", function(elem, name, isXML){if(!isXML){return elem.getAttribute(name, name.toLowerCase() === "type"?1:2);}});}if(!support.attributes || !assert(function(div){div.innerHTML = "<input/>";div.firstChild.setAttribute("value", "");return div.firstChild.getAttribute("value") === "";})){addHandle("value", function(elem, name, isXML){if(!isXML && elem.nodeName.toLowerCase() === "input"){return elem.defaultValue;}});}if(!assert(function(div){return div.getAttribute("disabled") == null;})){addHandle(booleans, function(elem, name, isXML){var val;if(!isXML){return elem[name] === true?name.toLowerCase():(val = elem.getAttributeNode(name)) && val.specified?val.value:null;}});}return Sizzle;})(window);jQuery.find = Sizzle;jQuery.expr = Sizzle.selectors;jQuery.expr[":"] = jQuery.expr.pseudos;jQuery.unique = Sizzle.uniqueSort;jQuery.text = Sizzle.getText;jQuery.isXMLDoc = Sizzle.isXML;jQuery.contains = Sizzle.contains;var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/;var risSimple=/^.[^:#\[\.,]*$/;function winnow(elements, qualifier, not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements, function(elem, i){return !!qualifier.call(elem, i, elem) !== not;});}if(qualifier.nodeType){return jQuery.grep(elements, function(elem){return elem === qualifier !== not;});}if(typeof qualifier === "string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier, elements, not);}qualifier = jQuery.filter(qualifier, elements);}return jQuery.grep(elements, function(elem){return jQuery.inArray(elem, qualifier) >= 0 !== not;});}jQuery.filter = function(expr, elems, not){var elem=elems[0];if(not){expr = ":not(" + expr + ")";}return elems.length === 1 && elem.nodeType === 1?jQuery.find.matchesSelector(elem, expr)?[elem]:[]:jQuery.find.matches(expr, jQuery.grep(elems, function(elem){return elem.nodeType === 1;}));};jQuery.fn.extend({find:function find(selector){var i, ret=[], self=this, len=self.length;if(typeof selector !== "string"){return this.pushStack(jQuery(selector).filter(function(){for(i = 0; i < len; i++) {if(jQuery.contains(self[i], this)){return true;}}}));}for(i = 0; i < len; i++) {jQuery.find(selector, self[i], ret);}ret = this.pushStack(len > 1?jQuery.unique(ret):ret);ret.selector = this.selector?this.selector + " " + selector:selector;return ret;}, filter:function filter(selector){return this.pushStack(winnow(this, selector || [], false));}, not:function not(selector){return this.pushStack(winnow(this, selector || [], true));}, is:function is(selector){return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector)?jQuery(selector):selector || [], false).length;}});var rootjQuery, document=window.document, rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init=jQuery.fn.init = function(selector, context){var match, elem;if(!selector){return this;}if(typeof selector === "string"){if(selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3){match = [null, selector, null];}else {match = rquickExpr.exec(selector);}if(match && (match[1] || !context)){if(match[1]){context = context instanceof jQuery?context[0]:context;jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType?context.ownerDocument || context:document, true));if(rsingleTag.test(match[1]) && jQuery.isPlainObject(context)){for(match in context) {if(jQuery.isFunction(this[match])){this[match](context[match]);}else {this.attr(match, context[match]);}}}return this;}else {elem = document.getElementById(match[2]);if(elem && elem.parentNode){if(elem.id !== match[2]){return rootjQuery.find(selector);}this.length = 1;this[0] = elem;}this.context = document;this.selector = selector;return this;}}else if(!context || context.jquery){return (context || rootjQuery).find(selector);}else {return this.constructor(context).find(selector);}}else if(selector.nodeType){this.context = this[0] = selector;this.length = 1;return this;}else if(jQuery.isFunction(selector)){return typeof rootjQuery.ready !== "undefined"?rootjQuery.ready(selector):selector(jQuery);}if(selector.selector !== undefined){this.selector = selector.selector;this.context = selector.context;}return jQuery.makeArray(selector, this);};init.prototype = jQuery.fn;rootjQuery = jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/, guaranteedUnique={children:true, contents:true, next:true, prev:true};jQuery.extend({dir:function dir(elem, _dir, until){var matched=[], cur=elem[_dir];while(cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {if(cur.nodeType === 1){matched.push(cur);}cur = cur[_dir];}return matched;}, sibling:function sibling(n, elem){var r=[];for(; n; n = n.nextSibling) {if(n.nodeType === 1 && n !== elem){r.push(n);}}return r;}});jQuery.fn.extend({has:function has(target){var i, targets=jQuery(target, this), len=targets.length;return this.filter(function(){for(i = 0; i < len; i++) {if(jQuery.contains(this, targets[i])){return true;}}});}, closest:function closest(selectors, context){var cur, i=0, l=this.length, matched=[], pos=rneedsContext.test(selectors) || typeof selectors !== "string"?jQuery(selectors, context || this.context):0;for(; i < l; i++) {for(cur = this[i]; cur && cur !== context; cur = cur.parentNode) {if(cur.nodeType < 11 && (pos?pos.index(cur) > -1:cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))){matched.push(cur);break;}}}return this.pushStack(matched.length > 1?jQuery.unique(matched):matched);}, index:function index(elem){if(!elem){return this[0] && this[0].parentNode?this.first().prevAll().length:-1;}if(typeof elem === "string"){return jQuery.inArray(this[0], jQuery(elem));}return jQuery.inArray(elem.jquery?elem[0]:elem, this);}, add:function add(selector, context){return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));}, addBack:function addBack(selector){return this.add(selector == null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur, dir){do {cur = cur[dir];}while(cur && cur.nodeType !== 1);return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent && parent.nodeType !== 11?parent:null;}, parents:function parents(elem){return jQuery.dir(elem, "parentNode");}, parentsUntil:function parentsUntil(elem, i, until){return jQuery.dir(elem, "parentNode", until);}, next:function next(elem){return sibling(elem, "nextSibling");}, prev:function prev(elem){return sibling(elem, "previousSibling");}, nextAll:function nextAll(elem){return jQuery.dir(elem, "nextSibling");}, prevAll:function prevAll(elem){return jQuery.dir(elem, "previousSibling");}, nextUntil:function nextUntil(elem, i, until){return jQuery.dir(elem, "nextSibling", until);}, prevUntil:function prevUntil(elem, i, until){return jQuery.dir(elem, "previousSibling", until);}, siblings:function siblings(elem){return jQuery.sibling((elem.parentNode || {}).firstChild, elem);}, children:function children(elem){return jQuery.sibling(elem.firstChild);}, contents:function contents(elem){return jQuery.nodeName(elem, "iframe")?elem.contentDocument || elem.contentWindow.document:jQuery.merge([], elem.childNodes);}}, function(name, fn){jQuery.fn[name] = function(until, selector){var ret=jQuery.map(this, fn, until);if(name.slice(-5) !== "Until"){selector = until;}if(selector && typeof selector === "string"){ret = jQuery.filter(selector, ret);}if(this.length > 1){if(!guaranteedUnique[name]){ret = jQuery.unique(ret);}if(rparentsprev.test(name)){ret = ret.reverse();}}return this.pushStack(ret);};});var rnotwhite=/\S+/g;var optionsCache={};function createOptions(options){var object=optionsCache[options] = {};jQuery.each(options.match(rnotwhite) || [], function(_, flag){object[flag] = true;});return object;}jQuery.Callbacks = function(options){options = typeof options === "string"?optionsCache[options] || createOptions(options):jQuery.extend({}, options);var firing, memory, _fired, firingLength, firingIndex, firingStart, list=[], stack=!options.once && [], fire=function fire(data){memory = options.memory && data;_fired = true;firingIndex = firingStart || 0;firingStart = 0;firingLength = list.length;firing = true;for(; list && firingIndex < firingLength; firingIndex++) {if(list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse){memory = false;break;}}firing = false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list = [];}else {self.disable();}}}, self={add:function add(){if(list){var start=list.length;(function add(args){jQuery.each(args, function(_, arg){var type=jQuery.type(arg);if(type === "function"){if(!options.unique || !self.has(arg)){list.push(arg);}}else if(arg && arg.length && type !== "string"){add(arg);}});})(arguments);if(firing){firingLength = list.length;}else if(memory){firingStart = start;fire(memory);}}return this;}, remove:function remove(){if(list){jQuery.each(arguments, function(_, arg){var index;while((index = jQuery.inArray(arg, list, index)) > -1) {list.splice(index, 1);if(firing){if(index <= firingLength){firingLength--;}if(index <= firingIndex){firingIndex--;}}}});}return this;}, has:function has(fn){return fn?jQuery.inArray(fn, list) > -1:!!(list && list.length);}, empty:function empty(){list = [];firingLength = 0;return this;}, disable:function disable(){list = stack = memory = undefined;return this;}, disabled:function disabled(){return !list;}, lock:function lock(){stack = undefined;if(!memory){self.disable();}return this;}, locked:function locked(){return !stack;}, fireWith:function fireWith(context, args){if(list && (!_fired || stack)){args = args || [];args = [context, args.slice?args.slice():args];if(firing){stack.push(args);}else {fire(args);}}return this;}, fire:function fire(){self.fireWith(this, arguments);return this;}, fired:function fired(){return !!_fired;}};return self;};jQuery.extend({Deferred:function Deferred(func){var tuples=[["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]], _state="pending", _promise={state:function state(){return _state;}, always:function always(){deferred.done(arguments).fail(arguments);return this;}, then:function then(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples, function(i, tuple){var fn=jQuery.isFunction(fns[i]) && fns[i];deferred[tuple[1]](function(){var returned=fn && fn.apply(this, arguments);if(returned && jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else {newDefer[tuple[0] + "With"](this === _promise?newDefer.promise():this, fn?[returned]:arguments);}});});fns = null;}).promise();}, promise:function promise(obj){return obj != null?jQuery.extend(obj, _promise):_promise;}}, deferred={};_promise.pipe = _promise.then;jQuery.each(tuples, function(i, tuple){var list=tuple[2], stateString=tuple[3];_promise[tuple[1]] = list.add;if(stateString){list.add(function(){_state = stateString;}, tuples[i ^ 1][2].disable, tuples[2][2].lock);}deferred[tuple[0]] = function(){deferred[tuple[0] + "With"](this === deferred?_promise:this, arguments);return this;};deferred[tuple[0] + "With"] = list.fireWith;});_promise.promise(deferred);if(func){func.call(deferred, deferred);}return deferred;}, when:function when(subordinate){var i=0, resolveValues=_slice.call(arguments), length=resolveValues.length, remaining=length !== 1 || subordinate && jQuery.isFunction(subordinate.promise)?length:0, deferred=remaining === 1?subordinate:jQuery.Deferred(), updateFunc=function updateFunc(i, contexts, values){return function(value){contexts[i] = this;values[i] = arguments.length > 1?_slice.call(arguments):value;if(values === progressValues){deferred.notifyWith(contexts, values);}else if(! --remaining){deferred.resolveWith(contexts, values);}};}, progressValues, progressContexts, resolveContexts;if(length > 1){progressValues = new Array(length);progressContexts = new Array(length);resolveContexts = new Array(length);for(; i < length; i++) {if(resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));}else {--remaining;}}}if(!remaining){deferred.resolveWith(resolveContexts, resolveValues);}return deferred.promise();}});var readyList;jQuery.fn.ready = function(fn){jQuery.ready.promise().done(fn);return this;};jQuery.extend({isReady:false, readyWait:1, holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else {jQuery.ready(true);}}, ready:function ready(wait){if(wait === true?--jQuery.readyWait:jQuery.isReady){return;}if(!document.body){return setTimeout(jQuery.ready);}jQuery.isReady = true;if(wait !== true && --jQuery.readyWait > 0){return;}readyList.resolveWith(document, [jQuery]);if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}});function detach(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded", completed, false);window.removeEventListener("load", completed, false);}else {document.detachEvent("onreadystatechange", completed);window.detachEvent("onload", completed);}}function completed(){if(document.addEventListener || event.type === "load" || document.readyState === "complete"){detach();jQuery.ready();}}jQuery.ready.promise = function(obj){if(!readyList){readyList = jQuery.Deferred();if(document.readyState === "complete"){setTimeout(jQuery.ready);}else if(document.addEventListener){document.addEventListener("DOMContentLoaded", completed, false);window.addEventListener("load", completed, false);}else {document.attachEvent("onreadystatechange", completed);window.attachEvent("onload", completed);var top=false;try{top = window.frameElement == null && document.documentElement;}catch(e) {}if(top && top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left");}catch(e) {return setTimeout(doScrollCheck, 50);}detach();jQuery.ready();}})();}}}return readyList.promise(obj);};var strundefined=typeof undefined;var i;for(i in jQuery(support)) {break;}support.ownLast = i !== "0";support.inlineBlockNeedsLayout = false;jQuery(function(){var val, div, body, container;body = document.getElementsByTagName("body")[0];if(!body || !body.style){return;}div = document.createElement("div");container = document.createElement("div");container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);if(typeof div.style.zoom !== strundefined){div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;if(val){body.style.zoom = 1;}}body.removeChild(container);});(function(){var div=document.createElement("div");if(support.deleteExpando == null){support.deleteExpando = true;try{delete div.test;}catch(e) {support.deleteExpando = false;}}div = null;})();jQuery.acceptData = function(elem){var noData=jQuery.noData[(elem.nodeName + " ").toLowerCase()], nodeType=+elem.nodeType || 1;return nodeType !== 1 && nodeType !== 9?false:!noData || noData !== true && elem.getAttribute("classid") === noData;};var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash=/([A-Z])/g;function dataAttr(elem, key, data){if(data === undefined && elem.nodeType === 1){var name="data-" + key.replace(rmultiDash, "-$1").toLowerCase();data = elem.getAttribute(name);if(typeof data === "string"){try{data = data === "true"?true:data === "false"?false:data === "null"?null:+data + "" === data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e) {}jQuery.data(elem, key, data);}else {data = undefined;}}return data;}function isEmptyDataObject(obj){var name;for(name in obj) {if(name === "data" && jQuery.isEmptyObject(obj[name])){continue;}if(name !== "toJSON"){return false;}}return true;}function internalData(elem, name, data, pvt){if(!jQuery.acceptData(elem)){return;}var ret, thisCache, internalKey=jQuery.expando, isNode=elem.nodeType, cache=isNode?jQuery.cache:elem, id=isNode?elem[internalKey]:elem[internalKey] && internalKey;if((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string"){return;}if(!id){if(isNode){id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;}else {id = internalKey;}}if(!cache[id]){cache[id] = isNode?{}:{toJSON:jQuery.noop};}if(typeof name === "object" || typeof name === "function"){if(pvt){cache[id] = jQuery.extend(cache[id], name);}else {cache[id].data = jQuery.extend(cache[id].data, name);}}thisCache = cache[id];if(!pvt){if(!thisCache.data){thisCache.data = {};}thisCache = thisCache.data;}if(data !== undefined){thisCache[jQuery.camelCase(name)] = data;}if(typeof name === "string"){ret = thisCache[name];if(ret == null){ret = thisCache[jQuery.camelCase(name)];}}else {ret = thisCache;}return ret;}function internalRemoveData(elem, name, pvt){if(!jQuery.acceptData(elem)){return;}var thisCache, i, isNode=elem.nodeType, cache=isNode?jQuery.cache:elem, id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return;}if(name){thisCache = pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name = [name];}else {name = jQuery.camelCase(name);if(name in thisCache){name = [name];}else {name = name.split(" ");}}}else {name = name.concat(jQuery.map(name, jQuery.camelCase));}i = name.length;while(i--) {delete thisCache[name[i]];}if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){return;}}}if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return;}}if(isNode){jQuery.cleanData([elem], true);}else if(support.deleteExpando || cache != cache.window){delete cache[id];}else {cache[id] = null;}}jQuery.extend({cache:{}, noData:{"applet ":true, "embed ":true, "object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData:function hasData(elem){elem = elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return !!elem && !isEmptyDataObject(elem);}, data:function data(elem, name, _data){return internalData(elem, name, _data);}, removeData:function removeData(elem, name){return internalRemoveData(elem, name);}, _data:function _data(elem, name, data){return internalData(elem, name, data, true);}, _removeData:function _removeData(elem, name){return internalRemoveData(elem, name, true);}});jQuery.fn.extend({data:function data(key, value){var i, name, data, elem=this[0], attrs=elem && elem.attributes;if(key === undefined){if(this.length){data = jQuery.data(elem);if(elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")){i = attrs.length;while(i--) {if(attrs[i]){name = attrs[i].name;if(name.indexOf("data-") === 0){name = jQuery.camelCase(name.slice(5));dataAttr(elem, name, data[name]);}}}jQuery._data(elem, "parsedAttrs", true);}}return data;}if(typeof key === "object"){return this.each(function(){jQuery.data(this, key);});}return arguments.length > 1?this.each(function(){jQuery.data(this, key, value);}):elem?dataAttr(elem, key, jQuery.data(elem, key)):undefined;}, removeData:function removeData(key){return this.each(function(){jQuery.removeData(this, key);});}});jQuery.extend({queue:function queue(elem, type, data){var queue;if(elem){type = (type || "fx") + "queue";queue = jQuery._data(elem, type);if(data){if(!queue || jQuery.isArray(data)){queue = jQuery._data(elem, type, jQuery.makeArray(data));}else {queue.push(data);}}return queue || [];}}, dequeue:function dequeue(elem, type){type = type || "fx";var queue=jQuery.queue(elem, type), startLength=queue.length, fn=queue.shift(), hooks=jQuery._queueHooks(elem, type), next=function next(){jQuery.dequeue(elem, type);};if(fn === "inprogress"){fn = queue.shift();startLength--;}if(fn){if(type === "fx"){queue.unshift("inprogress");}delete hooks.stop;fn.call(elem, next, hooks);}if(!startLength && hooks){hooks.empty.fire();}}, _queueHooks:function _queueHooks(elem, type){var key=type + "queueHooks";return jQuery._data(elem, key) || jQuery._data(elem, key, {empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem, type + "queue");jQuery._removeData(elem, key);})});}});jQuery.fn.extend({queue:function queue(type, data){var setter=2;if(typeof type !== "string"){data = type;type = "fx";setter--;}if(arguments.length < setter){return jQuery.queue(this[0], type);}return data === undefined?this:this.each(function(){var queue=jQuery.queue(this, type, data);jQuery._queueHooks(this, type);if(type === "fx" && queue[0] !== "inprogress"){jQuery.dequeue(this, type);}});}, dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this, type);});}, clearQueue:function clearQueue(type){return this.queue(type || "fx", []);}, promise:function promise(type, obj){var tmp, count=1, defer=jQuery.Deferred(), elements=this, i=this.length, resolve=function resolve(){if(! --count){defer.resolveWith(elements, [elements]);}};if(typeof type !== "string"){obj = type;type = undefined;}type = type || "fx";while(i--) {tmp = jQuery._data(elements[i], type + "queueHooks");if(tmp && tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var cssExpand=["Top", "Right", "Bottom", "Left"];var isHidden=function isHidden(elem, el){elem = el || elem;return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);};var access=jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw){var i=0, length=elems.length, bulk=key == null;if(jQuery.type(key) === "object"){chainable = true;for(i in key) {jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);}}else if(value !== undefined){chainable = true;if(!jQuery.isFunction(value)){raw = true;}if(bulk){if(raw){fn.call(elems, value);fn = null;}else {bulk = fn;fn = function(elem, key, value){return bulk.call(jQuery(elem), value);};}}if(fn){for(; i < length; i++) {fn(elems[i], key, raw?value:value.call(elems[i], i, fn(elems[i], key)));}}}return chainable?elems:bulk?fn.call(elems):length?fn(elems[0], key):emptyGet;};var rcheckableType=/^(?:checkbox|radio)$/i;(function(){var input=document.createElement("input"), div=document.createElement("div"), fragment=document.createDocumentFragment();div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";support.leadingWhitespace = div.firstChild.nodeType === 3;support.tbody = !div.getElementsByTagName("tbody").length;support.htmlSerialize = !!div.getElementsByTagName("link").length;support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";input.type = "checkbox";input.checked = true;fragment.appendChild(input);support.appendChecked = input.checked;div.innerHTML = "<textarea>x</textarea>";support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;fragment.appendChild(div);div.innerHTML = "<input type='radio' checked='checked' name='t'/>";support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;support.noCloneEvent = true;if(div.attachEvent){div.attachEvent("onclick", function(){support.noCloneEvent = false;});div.cloneNode(true).click();}if(support.deleteExpando == null){support.deleteExpando = true;try{delete div.test;}catch(e) {support.deleteExpando = false;}}})();(function(){var i, eventName, div=document.createElement("div");for(i in {submit:true, change:true, focusin:true}) {eventName = "on" + i;if(!(support[i + "Bubbles"] = eventName in window)){div.setAttribute(eventName, "t");support[i + "Bubbles"] = div.attributes[eventName].expando === false;}}div = null;})();var rformElems=/^(?:input|select|textarea)$/i, rkeyEvent=/^key/, rmouseEvent=/^(?:mouse|pointer|contextmenu)|click/, rfocusMorph=/^(?:focusinfocus|focusoutblur)$/, rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true;}function returnFalse(){return false;}function safeActiveElement(){try{return document.activeElement;}catch(err) {}}jQuery.event = {global:{}, add:function add(elem, types, handler, data, selector){var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData=jQuery._data(elem);if(!elemData){return;}if(handler.handler){handleObjIn = handler;handler = handleObjIn.handler;selector = handleObjIn.selector;}if(!handler.guid){handler.guid = jQuery.guid++;}if(!(events = elemData.events)){events = elemData.events = {};}if(!(eventHandle = elemData.handle)){eventHandle = elemData.handle = function(e){return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type)?jQuery.event.dispatch.apply(eventHandle.elem, arguments):undefined;};eventHandle.elem = elem;}types = (types || "").match(rnotwhite) || [""];t = types.length;while(t--) {tmp = rtypenamespace.exec(types[t]) || [];type = origType = tmp[1];namespaces = (tmp[2] || "").split(".").sort();if(!type){continue;}special = jQuery.event.special[type] || {};type = (selector?special.delegateType:special.bindType) || type;special = jQuery.event.special[type] || {};handleObj = jQuery.extend({type:type, origType:origType, data:data, handler:handler, guid:handler.guid, selector:selector, needsContext:selector && jQuery.expr.match.needsContext.test(selector), namespace:namespaces.join(".")}, handleObjIn);if(!(handlers = events[type])){handlers = events[type] = [];handlers.delegateCount = 0;if(!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false){if(elem.addEventListener){elem.addEventListener(type, eventHandle, false);}else if(elem.attachEvent){elem.attachEvent("on" + type, eventHandle);}}}if(special.add){special.add.call(elem, handleObj);if(!handleObj.handler.guid){handleObj.handler.guid = handler.guid;}}if(selector){handlers.splice(handlers.delegateCount++, 0, handleObj);}else {handlers.push(handleObj);}jQuery.event.global[type] = true;}elem = null;}, remove:function remove(elem, types, handler, selector, mappedTypes){var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData=jQuery.hasData(elem) && jQuery._data(elem);if(!elemData || !(events = elemData.events)){return;}types = (types || "").match(rnotwhite) || [""];t = types.length;while(t--) {tmp = rtypenamespace.exec(types[t]) || [];type = origType = tmp[1];namespaces = (tmp[2] || "").split(".").sort();if(!type){for(type in events) {jQuery.event.remove(elem, type + types[t], handler, selector, true);}continue;}special = jQuery.event.special[type] || {};type = (selector?special.delegateType:special.bindType) || type;handlers = events[type] || [];tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");origCount = j = handlers.length;while(j--) {handleObj = handlers[j];if((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)){handlers.splice(j, 1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem, handleObj);}}}if(origCount && !handlers.length){if(!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false){jQuery.removeEvent(elem, type, elemData.handle);}delete events[type];}}if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery._removeData(elem, "events");}}, trigger:function trigger(event, data, elem, onlyHandlers){var handle, ontype, cur, bubbleType, special, tmp, i, eventPath=[elem || document], type=hasOwn.call(event, "type")?event.type:event, namespaces=hasOwn.call(event, "namespace")?event.namespace.split("."):[];cur = tmp = elem = elem || document;if(elem.nodeType === 3 || elem.nodeType === 8){return;}if(rfocusMorph.test(type + jQuery.event.triggered)){return;}if(type.indexOf(".") >= 0){namespaces = type.split(".");type = namespaces.shift();namespaces.sort();}ontype = type.indexOf(":") < 0 && "on" + type;event = event[jQuery.expando]?event:new jQuery.Event(type, typeof event === "object" && event);event.isTrigger = onlyHandlers?2:3;event.namespace = namespaces.join(".");event.namespace_re = event.namespace?new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"):null;event.result = undefined;if(!event.target){event.target = elem;}data = data == null?[event]:jQuery.makeArray(data, [event]);special = jQuery.event.special[type] || {};if(!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false){return;}if(!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)){bubbleType = special.delegateType || type;if(!rfocusMorph.test(bubbleType + type)){cur = cur.parentNode;}for(; cur; cur = cur.parentNode) {eventPath.push(cur);tmp = cur;}if(tmp === (elem.ownerDocument || document)){eventPath.push(tmp.defaultView || tmp.parentWindow || window);}}i = 0;while((cur = eventPath[i++]) && !event.isPropagationStopped()) {event.type = i > 1?bubbleType:special.bindType || type;handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");if(handle){handle.apply(cur, data);}handle = ontype && cur[ontype];if(handle && handle.apply && jQuery.acceptData(cur)){event.result = handle.apply(cur, data);if(event.result === false){event.preventDefault();}}}event.type = type;if(!onlyHandlers && !event.isDefaultPrevented()){if((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)){if(ontype && elem[type] && !jQuery.isWindow(elem)){tmp = elem[ontype];if(tmp){elem[ontype] = null;}jQuery.event.triggered = type;try{elem[type]();}catch(e) {}jQuery.event.triggered = undefined;if(tmp){elem[ontype] = tmp;}}}}return event.result;}, dispatch:function dispatch(event){event = jQuery.event.fix(event);var i, ret, handleObj, matched, j, handlerQueue=[], args=_slice.call(arguments), handlers=(jQuery._data(this, "events") || {})[event.type] || [], special=jQuery.event.special[event.type] || {};args[0] = event;event.delegateTarget = this;if(special.preDispatch && special.preDispatch.call(this, event) === false){return;}handlerQueue = jQuery.event.handlers.call(this, event, handlers);i = 0;while((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {event.currentTarget = matched.elem;j = 0;while((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {if(!event.namespace_re || event.namespace_re.test(handleObj.namespace)){event.handleObj = handleObj;event.data = handleObj.data;ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);if(ret !== undefined){if((event.result = ret) === false){event.preventDefault();event.stopPropagation();}}}}}if(special.postDispatch){special.postDispatch.call(this, event);}return event.result;}, handlers:function handlers(event, _handlers){var sel, handleObj, matches, i, handlerQueue=[], delegateCount=_handlers.delegateCount, cur=event.target;if(delegateCount && cur.nodeType && (!event.button || event.type !== "click")){for(; cur != this; cur = cur.parentNode || this) {if(cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")){matches = [];for(i = 0; i < delegateCount; i++) {handleObj = _handlers[i];sel = handleObj.selector + " ";if(matches[sel] === undefined){matches[sel] = handleObj.needsContext?jQuery(sel, this).index(cur) >= 0:jQuery.find(sel, this, null, [cur]).length;}if(matches[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur, handlers:matches});}}}}if(delegateCount < _handlers.length){handlerQueue.push({elem:this, handlers:_handlers.slice(delegateCount)});}return handlerQueue;}, fix:function fix(event){if(event[jQuery.expando]){return event;}var i, prop, copy, type=event.type, originalEvent=event, fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type] = fixHook = rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}copy = fixHook.props?this.props.concat(fixHook.props):this.props;event = new jQuery.Event(originalEvent);i = copy.length;while(i--) {prop = copy[i];event[prop] = originalEvent[prop];}if(!event.target){event.target = originalEvent.srcElement || document;}if(event.target.nodeType === 3){event.target = event.target.parentNode;}event.metaKey = !!event.metaKey;return fixHook.filter?fixHook.filter(event, originalEvent):event;}, props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks:{}, keyHooks:{props:"char charCode key keyCode".split(" "), filter:function filter(event, original){if(event.which == null){event.which = original.charCode != null?original.charCode:original.keyCode;}return event;}}, mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter:function filter(event, original){var body, eventDoc, doc, button=original.button, fromElement=original.fromElement;if(event.pageX == null && original.clientX != null){eventDoc = event.target.ownerDocument || document;doc = eventDoc.documentElement;body = eventDoc.body;event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);}if(!event.relatedTarget && fromElement){event.relatedTarget = fromElement === event.target?original.toElement:fromElement;}if(!event.which && button !== undefined){event.which = button & 1?1:button & 2?3:button & 4?2:0;}return event;}}, special:{load:{noBubble:true}, focus:{trigger:function trigger(){if(this !== safeActiveElement() && this.focus){try{this.focus();return false;}catch(e) {}}}, delegateType:"focusin"}, blur:{trigger:function trigger(){if(this === safeActiveElement() && this.blur){this.blur();return false;}}, delegateType:"focusout"}, click:{trigger:function trigger(){if(jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click){this.click();return false;}}, _default:function _default(event){return jQuery.nodeName(event.target, "a");}}, beforeunload:{postDispatch:function postDispatch(event){if(event.result !== undefined && event.originalEvent){event.originalEvent.returnValue = event.result;}}}}, simulate:function simulate(type, elem, event, bubble){var e=jQuery.extend(new jQuery.Event(), event, {type:type, isSimulated:true, originalEvent:{}});if(bubble){jQuery.event.trigger(e, null, elem);}else {jQuery.event.dispatch.call(elem, e);}if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent = document.removeEventListener?function(elem, type, handle){if(elem.removeEventListener){elem.removeEventListener(type, handle, false);}}:function(elem, type, handle){var name="on" + type;if(elem.detachEvent){if(typeof elem[name] === strundefined){elem[name] = null;}elem.detachEvent(name, handle);}};jQuery.Event = function(src, props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src, props);}if(src && src.type){this.originalEvent = src;this.type = src.type;this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false?returnTrue:returnFalse;}else {this.type = src;}if(props){jQuery.extend(this, props);}this.timeStamp = src && src.timeStamp || jQuery.now();this[jQuery.expando] = true;};jQuery.Event.prototype = {isDefaultPrevented:returnFalse, isPropagationStopped:returnFalse, isImmediatePropagationStopped:returnFalse, preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented = returnTrue;if(!e){return;}if(e.preventDefault){e.preventDefault();}else {e.returnValue = false;}}, stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped = returnTrue;if(!e){return;}if(e.stopPropagation){e.stopPropagation();}e.cancelBubble = true;}, stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped = returnTrue;if(e && e.stopImmediatePropagation){e.stopImmediatePropagation();}this.stopPropagation();}};jQuery.each({mouseenter:"mouseover", mouseleave:"mouseout", pointerenter:"pointerover", pointerleave:"pointerout"}, function(orig, fix){jQuery.event.special[orig] = {delegateType:fix, bindType:fix, handle:function handle(event){var ret, target=this, related=event.relatedTarget, handleObj=event.handleObj;if(!related || related !== target && !jQuery.contains(target, related)){event.type = handleObj.origType;ret = handleObj.handler.apply(this, arguments);event.type = fix;}return ret;}};});if(!support.submitBubbles){jQuery.event.special.submit = {setup:function setup(){if(jQuery.nodeName(this, "form")){return false;}jQuery.event.add(this, "click._submit keypress._submit", function(e){var elem=e.target, form=jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button")?elem.form:undefined;if(form && !jQuery._data(form, "submitBubbles")){jQuery.event.add(form, "submit._submit", function(event){event._submit_bubble = true;});jQuery._data(form, "submitBubbles", true);}});}, postDispatch:function postDispatch(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode && !event.isTrigger){jQuery.event.simulate("submit", this.parentNode, event, true);}}}, teardown:function teardown(){if(jQuery.nodeName(this, "form")){return false;}jQuery.event.remove(this, "._submit");}};}if(!support.changeBubbles){jQuery.event.special.change = {setup:function setup(){if(rformElems.test(this.nodeName)){if(this.type === "checkbox" || this.type === "radio"){jQuery.event.add(this, "propertychange._change", function(event){if(event.originalEvent.propertyName === "checked"){this._just_changed = true;}});jQuery.event.add(this, "click._change", function(event){if(this._just_changed && !event.isTrigger){this._just_changed = false;}jQuery.event.simulate("change", this, event, true);});}return false;}jQuery.event.add(this, "beforeactivate._change", function(e){var elem=e.target;if(rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")){jQuery.event.add(elem, "change._change", function(event){if(this.parentNode && !event.isSimulated && !event.isTrigger){jQuery.event.simulate("change", this.parentNode, event, true);}});jQuery._data(elem, "changeBubbles", true);}});}, handle:function handle(event){var elem=event.target;if(this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox"){return event.handleObj.handler.apply(this, arguments);}}, teardown:function teardown(){jQuery.event.remove(this, "._change");return !rformElems.test(this.nodeName);}};}if(!support.focusinBubbles){jQuery.each({focus:"focusin", blur:"focusout"}, function(orig, fix){var handler=function handler(event){jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);};jQuery.event.special[fix] = {setup:function setup(){var doc=this.ownerDocument || this, attaches=jQuery._data(doc, fix);if(!attaches){doc.addEventListener(orig, handler, true);}jQuery._data(doc, fix, (attaches || 0) + 1);}, teardown:function teardown(){var doc=this.ownerDocument || this, attaches=jQuery._data(doc, fix) - 1;if(!attaches){doc.removeEventListener(orig, handler, true);jQuery._removeData(doc, fix);}else {jQuery._data(doc, fix, attaches);}}};});}jQuery.fn.extend({on:function on(types, selector, data, fn, one){var type, origFn;if(typeof types === "object"){if(typeof selector !== "string"){data = data || selector;selector = undefined;}for(type in types) {this.on(type, selector, data, types[type], one);}return this;}if(data == null && fn == null){fn = selector;data = selector = undefined;}else if(fn == null){if(typeof selector === "string"){fn = data;data = undefined;}else {fn = data;data = selector;selector = undefined;}}if(fn === false){fn = returnFalse;}else if(!fn){return this;}if(one === 1){origFn = fn;fn = function(event){jQuery().off(event);return origFn.apply(this, arguments);};fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);}return this.each(function(){jQuery.event.add(this, types, fn, data, selector);});}, one:function one(types, selector, data, fn){return this.on(types, selector, data, fn, 1);}, off:function off(types, selector, fn){var handleObj, type;if(types && types.preventDefault && types.handleObj){handleObj = types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType + "." + handleObj.namespace:handleObj.origType, handleObj.selector, handleObj.handler);return this;}if(typeof types === "object"){for(type in types) {this.off(type, selector, types[type]);}return this;}if(selector === false || typeof selector === "function"){fn = selector;selector = undefined;}if(fn === false){fn = returnFalse;}return this.each(function(){jQuery.event.remove(this, types, fn, selector);});}, trigger:function trigger(type, data){return this.each(function(){jQuery.event.trigger(type, data, this);});}, triggerHandler:function triggerHandler(type, data){var elem=this[0];if(elem){return jQuery.event.trigger(type, data, elem, true);}}});function createSafeFragment(document){var list=nodeNames.split("|"), safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length) {safeFrag.createElement(list.pop());}}return safeFrag;}var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g, rnoshimcache=new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), rleadingWhitespace=/^\s+/, rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName=/<([\w:]+)/, rtbody=/<tbody/i, rhtml=/<|&#?\w+;/, rnoInnerhtml=/<(?:script|style|link)/i, rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType=/^$|\/(?:java|ecma)script/i, rscriptTypeMasked=/^true\/(.*)/, rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap={option:[1, "<select multiple='multiple'>", "</select>"], legend:[1, "<fieldset>", "</fieldset>"], area:[1, "<map>", "</map>"], param:[1, "<object>", "</object>"], thead:[1, "<table>", "</table>"], tr:[2, "<table><tbody>", "</tbody></table>"], col:[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], _default:support.htmlSerialize?[0, "", ""]:[1, "X<div>", "</div>"]}, safeFragment=createSafeFragment(document), fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup = wrapMap.option;wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;wrapMap.th = wrapMap.td;function getAll(context, tag){var elems, elem, i=0, found=typeof context.getElementsByTagName !== strundefined?context.getElementsByTagName(tag || "*"):typeof context.querySelectorAll !== strundefined?context.querySelectorAll(tag || "*"):undefined;if(!found){for(found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {if(!tag || jQuery.nodeName(elem, tag)){found.push(elem);}else {jQuery.merge(found, getAll(elem, tag));}}}return tag === undefined || tag && jQuery.nodeName(context, tag)?jQuery.merge([context], found):found;}function fixDefaultChecked(elem){if(rcheckableType.test(elem.type)){elem.defaultChecked = elem.checked;}}function manipulationTarget(elem, content){return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11?content:content.firstChild, "tr")?elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}function disableScript(elem){elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type = match[1];}else {elem.removeAttribute("type");}return elem;}function setGlobalEval(elems, refElements){var elem, i=0;for(; (elem = elems[i]) != null; i++) {jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));}}function cloneCopyEvent(src, dest){if(dest.nodeType !== 1 || !jQuery.hasData(src)){return;}var type, i, l, oldData=jQuery._data(src), curData=jQuery._data(dest, oldData), events=oldData.events;if(events){delete curData.handle;curData.events = {};for(type in events) {for(i = 0, l = events[type].length; i < l; i++) {jQuery.event.add(dest, type, events[type][i]);}}}if(curData.data){curData.data = jQuery.extend({}, curData.data);}}function fixCloneNodeIssues(src, dest){var nodeName, e, data;if(dest.nodeType !== 1){return;}nodeName = dest.nodeName.toLowerCase();if(!support.noCloneEvent && dest[jQuery.expando]){data = jQuery._data(dest);for(e in data.events) {jQuery.removeEvent(dest, e, data.handle);}dest.removeAttribute(jQuery.expando);}if(nodeName === "script" && dest.text !== src.text){disableScript(dest).text = src.text;restoreScript(dest);}else if(nodeName === "object"){if(dest.parentNode){dest.outerHTML = src.outerHTML;}if(support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))){dest.innerHTML = src.innerHTML;}}else if(nodeName === "input" && rcheckableType.test(src.type)){dest.defaultChecked = dest.checked = src.checked;if(dest.value !== src.value){dest.value = src.value;}}else if(nodeName === "option"){dest.defaultSelected = dest.selected = src.defaultSelected;}else if(nodeName === "input" || nodeName === "textarea"){dest.defaultValue = src.defaultValue;}}jQuery.extend({clone:function clone(elem, dataAndEvents, deepDataAndEvents){var destElements, node, clone, i, srcElements, inPage=jQuery.contains(elem.ownerDocument, elem);if(support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")){clone = elem.cloneNode(true);}else {fragmentDiv.innerHTML = elem.outerHTML;fragmentDiv.removeChild(clone = fragmentDiv.firstChild);}if((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)){destElements = getAll(clone);srcElements = getAll(elem);for(i = 0; (node = srcElements[i]) != null; ++i) {if(destElements[i]){fixCloneNodeIssues(node, destElements[i]);}}}if(dataAndEvents){if(deepDataAndEvents){srcElements = srcElements || getAll(elem);destElements = destElements || getAll(clone);for(i = 0; (node = srcElements[i]) != null; i++) {cloneCopyEvent(node, destElements[i]);}}else {cloneCopyEvent(elem, clone);}}destElements = getAll(clone, "script");if(destElements.length > 0){setGlobalEval(destElements, !inPage && getAll(elem, "script"));}destElements = srcElements = node = null;return clone;}, buildFragment:function buildFragment(elems, context, scripts, selection){var j, elem, contains, tmp, tag, tbody, wrap, l=elems.length, safe=createSafeFragment(context), nodes=[], i=0;for(; i < l; i++) {elem = elems[i];if(elem || elem === 0){if(jQuery.type(elem) === "object"){jQuery.merge(nodes, elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else {tmp = tmp || safe.appendChild(context.createElement("div"));tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();wrap = wrapMap[tag] || wrapMap._default;tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];j = wrap[0];while(j--) {tmp = tmp.lastChild;}if(!support.leadingWhitespace && rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));}if(!support.tbody){elem = tag === "table" && !rtbody.test(elem)?tmp.firstChild:wrap[1] === "<table>" && !rtbody.test(elem)?tmp:0;j = elem && elem.childNodes.length;while(j--) {if(jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length){elem.removeChild(tbody);}}}jQuery.merge(nodes, tmp.childNodes);tmp.textContent = "";while(tmp.firstChild) {tmp.removeChild(tmp.firstChild);}tmp = safe.lastChild;}}}if(tmp){safe.removeChild(tmp);}if(!support.appendChecked){jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);}i = 0;while(elem = nodes[i++]) {if(selection && jQuery.inArray(elem, selection) !== -1){continue;}contains = jQuery.contains(elem.ownerDocument, elem);tmp = getAll(safe.appendChild(elem), "script");if(contains){setGlobalEval(tmp);}if(scripts){j = 0;while(elem = tmp[j++]) {if(rscriptType.test(elem.type || "")){scripts.push(elem);}}}}tmp = null;return safe;}, cleanData:function cleanData(elems, acceptData){var elem, type, id, data, i=0, internalKey=jQuery.expando, cache=jQuery.cache, deleteExpando=support.deleteExpando, special=jQuery.event.special;for(; (elem = elems[i]) != null; i++) {if(acceptData || jQuery.acceptData(elem)){id = elem[internalKey];data = id && cache[id];if(data){if(data.events){for(type in data.events) {if(special[type]){jQuery.event.remove(elem, type);}else {jQuery.removeEvent(elem, type, data.handle);}}}if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey];}else if(typeof elem.removeAttribute !== strundefined){elem.removeAttribute(internalKey);}else {elem[internalKey] = null;}deletedIds.push(id);}}}}}});jQuery.fn.extend({text:function text(value){return access(this, function(value){return value === undefined?jQuery.text(this):this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));}, null, value, arguments.length);}, append:function append(){return this.domManip(arguments, function(elem){if(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9){var target=manipulationTarget(this, elem);target.appendChild(elem);}});}, prepend:function prepend(){return this.domManip(arguments, function(elem){if(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9){var target=manipulationTarget(this, elem);target.insertBefore(elem, target.firstChild);}});}, before:function before(){return this.domManip(arguments, function(elem){if(this.parentNode){this.parentNode.insertBefore(elem, this);}});}, after:function after(){return this.domManip(arguments, function(elem){if(this.parentNode){this.parentNode.insertBefore(elem, this.nextSibling);}});}, remove:function remove(selector, keepData){var elem, elems=selector?jQuery.filter(selector, this):this, i=0;for(; (elem = elems[i]) != null; i++) {if(!keepData && elem.nodeType === 1){jQuery.cleanData(getAll(elem));}if(elem.parentNode){if(keepData && jQuery.contains(elem.ownerDocument, elem)){setGlobalEval(getAll(elem, "script"));}elem.parentNode.removeChild(elem);}}return this;}, empty:function empty(){var elem, i=0;for(; (elem = this[i]) != null; i++) {if(elem.nodeType === 1){jQuery.cleanData(getAll(elem, false));}while(elem.firstChild) {elem.removeChild(elem.firstChild);}if(elem.options && jQuery.nodeName(elem, "select")){elem.options.length = 0;}}return this;}, clone:function clone(dataAndEvents, deepDataAndEvents){dataAndEvents = dataAndEvents == null?false:dataAndEvents;deepDataAndEvents = deepDataAndEvents == null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this, dataAndEvents, deepDataAndEvents);});}, html:function html(value){return access(this, function(value){var elem=this[0] || {}, i=0, l=this.length;if(value === undefined){return elem.nodeType === 1?elem.innerHTML.replace(rinlinejQuery, ""):undefined;}if(typeof value === "string" && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]){value = value.replace(rxhtmlTag, "<$1></$2>");try{for(; i < l; i++) {elem = this[i] || {};if(elem.nodeType === 1){jQuery.cleanData(getAll(elem, false));elem.innerHTML = value;}}elem = 0;}catch(e) {}}if(elem){this.empty().append(value);}}, null, value, arguments.length);}, replaceWith:function replaceWith(){var arg=arguments[0];this.domManip(arguments, function(elem){arg = this.parentNode;jQuery.cleanData(getAll(this));if(arg){arg.replaceChild(elem, this);}});return arg && (arg.length || arg.nodeType)?this:this.remove();}, detach:function detach(selector){return this.remove(selector, true);}, domManip:function domManip(args, callback){args = concat.apply([], args);var first, node, hasScripts, scripts, doc, fragment, i=0, l=this.length, set=this, iNoClone=l - 1, value=args[0], isFunction=jQuery.isFunction(value);if(isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0] = value.call(this, index, self.html());}self.domManip(args, callback);});}if(l){fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);first = fragment.firstChild;if(fragment.childNodes.length === 1){fragment = first;}if(first){scripts = jQuery.map(getAll(fragment, "script"), disableScript);hasScripts = scripts.length;for(; i < l; i++) {node = fragment;if(i !== iNoClone){node = jQuery.clone(node, true, true);if(hasScripts){jQuery.merge(scripts, getAll(node, "script"));}}callback.call(this[i], node, i);}if(hasScripts){doc = scripts[scripts.length - 1].ownerDocument;jQuery.map(scripts, restoreScript);for(i = 0; i < hasScripts; i++) {node = scripts[i];if(rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)){if(node.src){if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else {jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));}}}}fragment = first = null;}}return this;}});jQuery.each({appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, function(name, original){jQuery.fn[name] = function(selector){var elems, i=0, ret=[], insert=jQuery(selector), last=insert.length - 1;for(; i <= last; i++) {elems = i === last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret, elems.get());}return this.pushStack(ret);};});var iframe, elemdisplay={};function actualDisplay(name, doc){var style, elem=jQuery(doc.createElement(name)).appendTo(doc.body), display=window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0]))?style.display:jQuery.css(elem[0], "display");elem.detach();return display;}function defaultDisplay(nodeName){var doc=document, display=elemdisplay[nodeName];if(!display){display = actualDisplay(nodeName, doc);if(display === "none" || !display){iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;doc.write();doc.close();display = actualDisplay(nodeName, doc);iframe.detach();}elemdisplay[nodeName] = display;}return display;}(function(){var shrinkWrapBlocksVal;support.shrinkWrapBlocks = function(){if(shrinkWrapBlocksVal != null){return shrinkWrapBlocksVal;}shrinkWrapBlocksVal = false;var div, body, container;body = document.getElementsByTagName("body")[0];if(!body || !body.style){return;}div = document.createElement("div");container = document.createElement("div");container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);if(typeof div.style.zoom !== strundefined){div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";div.appendChild(document.createElement("div")).style.width = "5px";shrinkWrapBlocksVal = div.offsetWidth !== 3;}body.removeChild(container);return shrinkWrapBlocksVal;};})();var rmargin=/^margin/;var rnumnonpx=new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");var getStyles, curCSS, rposition=/^(top|right|bottom|left)$/;if(window.getComputedStyle){getStyles = function(elem){if(elem.ownerDocument.defaultView.opener){return elem.ownerDocument.defaultView.getComputedStyle(elem, null);}return window.getComputedStyle(elem, null);};curCSS = function(elem, name, computed){var width, minWidth, maxWidth, ret, style=elem.style;computed = computed || getStyles(elem);ret = computed?computed.getPropertyValue(name) || computed[name]:undefined;if(computed){if(ret === "" && !jQuery.contains(elem.ownerDocument, elem)){ret = jQuery.style(elem, name);}if(rnumnonpx.test(ret) && rmargin.test(name)){width = style.width;minWidth = style.minWidth;maxWidth = style.maxWidth;style.minWidth = style.maxWidth = style.width = ret;ret = computed.width;style.width = width;style.minWidth = minWidth;style.maxWidth = maxWidth;}}return ret === undefined?ret:ret + "";};}else if(document.documentElement.currentStyle){getStyles = function(elem){return elem.currentStyle;};curCSS = function(elem, name, computed){var left, rs, rsLeft, ret, style=elem.style;computed = computed || getStyles(elem);ret = computed?computed[name]:undefined;if(ret == null && style && style[name]){ret = style[name];}if(rnumnonpx.test(ret) && !rposition.test(name)){left = style.left;rs = elem.runtimeStyle;rsLeft = rs && rs.left;if(rsLeft){rs.left = elem.currentStyle.left;}style.left = name === "fontSize"?"1em":ret;ret = style.pixelLeft + "px";style.left = left;if(rsLeft){rs.left = rsLeft;}}return ret === undefined?ret:ret + "" || "auto";};}function addGetHookIf(conditionFn, hookFn){return {get:function get(){var condition=conditionFn();if(condition == null){return;}if(condition){delete this.get;return;}return (this.get = hookFn).apply(this, arguments);}};}(function(){var div, style, a, pixelPositionVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal;div = document.createElement("div");div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";a = div.getElementsByTagName("a")[0];style = a && a.style;if(!style){return;}style.cssText = "float:left;opacity:.5";support.opacity = style.opacity === "0.5";support.cssFloat = !!style.cssFloat;div.style.backgroundClip = "content-box";div.cloneNode(true).style.backgroundClip = "";support.clearCloneStyle = div.style.backgroundClip === "content-box";support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" || style.WebkitBoxSizing === "";jQuery.extend(support, {reliableHiddenOffsets:function reliableHiddenOffsets(){if(reliableHiddenOffsetsVal == null){computeStyleTests();}return reliableHiddenOffsetsVal;}, boxSizingReliable:function boxSizingReliable(){if(boxSizingReliableVal == null){computeStyleTests();}return boxSizingReliableVal;}, pixelPosition:function pixelPosition(){if(pixelPositionVal == null){computeStyleTests();}return pixelPositionVal;}, reliableMarginRight:function reliableMarginRight(){if(reliableMarginRightVal == null){computeStyleTests();}return reliableMarginRightVal;}});function computeStyleTests(){var div, body, container, contents;body = document.getElementsByTagName("body")[0];if(!body || !body.style){return;}div = document.createElement("div");container = document.createElement("div");container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";body.appendChild(container).appendChild(div);div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";pixelPositionVal = boxSizingReliableVal = false;reliableMarginRightVal = true;if(window.getComputedStyle){pixelPositionVal = (window.getComputedStyle(div, null) || {}).top !== "1%";boxSizingReliableVal = (window.getComputedStyle(div, null) || {width:"4px"}).width === "4px";contents = div.appendChild(document.createElement("div"));contents.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";contents.style.marginRight = contents.style.width = "0";div.style.width = "1px";reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents, null) || {}).marginRight);div.removeChild(contents);}div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";contents = div.getElementsByTagName("td");contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;if(reliableHiddenOffsetsVal){contents[0].style.display = "";contents[1].style.display = "none";reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;}body.removeChild(container);}})();jQuery.swap = function(elem, options, callback, args){var ret, name, old={};for(name in options) {old[name] = elem.style[name];elem.style[name] = options[name];}ret = callback.apply(elem, args || []);for(name in options) {elem.style[name] = old[name];}return ret;};var ralpha=/alpha\([^)]*\)/i, ropacity=/opacity\s*=\s*([^)]*)/, rdisplayswap=/^(none|table(?!-c[ea]).+)/, rnumsplit=new RegExp("^(" + pnum + ")(.*)$", "i"), rrelNum=new RegExp("^([+-])=(" + pnum + ")", "i"), cssShow={position:"absolute", visibility:"hidden", display:"block"}, cssNormalTransform={letterSpacing:"0", fontWeight:"400"}, cssPrefixes=["Webkit", "O", "Moz", "ms"];function vendorPropName(style, name){if(name in style){return name;}var capName=name.charAt(0).toUpperCase() + name.slice(1), origName=name, i=cssPrefixes.length;while(i--) {name = cssPrefixes[i] + capName;if(name in style){return name;}}return origName;}function showHide(elements, show){var display, elem, hidden, values=[], index=0, length=elements.length;for(; index < length; index++) {elem = elements[index];if(!elem.style){continue;}values[index] = jQuery._data(elem, "olddisplay");display = elem.style.display;if(show){if(!values[index] && display === "none"){elem.style.display = "";}if(elem.style.display === "" && isHidden(elem)){values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));}}else {hidden = isHidden(elem);if(display && display !== "none" || !hidden){jQuery._data(elem, "olddisplay", hidden?display:jQuery.css(elem, "display"));}}}for(index = 0; index < length; index++) {elem = elements[index];if(!elem.style){continue;}if(!show || elem.style.display === "none" || elem.style.display === ""){elem.style.display = show?values[index] || "":"none";}}return elements;}function setPositiveNumber(elem, value, subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px"):value;}function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles){var i=extra === (isBorderBox?"border":"content")?4:name === "width"?1:0, val=0;for(; i < 4; i += 2) {if(extra === "margin"){val += jQuery.css(elem, extra + cssExpand[i], true, styles);}if(isBorderBox){if(extra === "content"){val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);}if(extra !== "margin"){val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);}}else {val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);if(extra !== "padding"){val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);}}}return val;}function getWidthOrHeight(elem, name, extra){var valueIsBorderBox=true, val=name === "width"?elem.offsetWidth:elem.offsetHeight, styles=getStyles(elem), isBorderBox=support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";if(val <= 0 || val == null){val = curCSS(elem, name, styles);if(val < 0 || val == null){val = elem.style[name];}if(rnumnonpx.test(val)){return val;}valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);val = parseFloat(val) || 0;}return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox?"border":"content"), valueIsBorderBox, styles) + "px";}jQuery.extend({cssHooks:{opacity:{get:function get(elem, computed){if(computed){var ret=curCSS(elem, "opacity");return ret === ""?"1":ret;}}}}, cssNumber:{"columnCount":true, "fillOpacity":true, "flexGrow":true, "flexShrink":true, "fontWeight":true, "lineHeight":true, "opacity":true, "order":true, "orphans":true, "widows":true, "zIndex":true, "zoom":true}, cssProps:{"float":support.cssFloat?"cssFloat":"styleFloat"}, style:function style(elem, name, value, extra){if(!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style){return;}var ret, type, hooks, origName=jQuery.camelCase(name), style=elem.style;name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];if(value !== undefined){type = typeof value;if(type === "string" && (ret = rrelNum.exec(value))){value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));type = "number";}if(value == null || value !== value){return;}if(type === "number" && !jQuery.cssNumber[origName]){value += "px";}if(!support.clearCloneStyle && value === "" && name.indexOf("background") === 0){style[name] = "inherit";}if(!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined){try{style[name] = value;}catch(e) {}}}else {if(hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined){return ret;}return style[name];}}, css:function css(elem, name, extra, styles){var num, val, hooks, origName=jQuery.camelCase(name);name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];if(hooks && "get" in hooks){val = hooks.get(elem, true, extra);}if(val === undefined){val = curCSS(elem, name, styles);}if(val === "normal" && name in cssNormalTransform){val = cssNormalTransform[name];}if(extra === "" || extra){num = parseFloat(val);return extra === true || jQuery.isNumeric(num)?num || 0:val;}return val;}});jQuery.each(["height", "width"], function(i, name){jQuery.cssHooks[name] = {get:function get(elem, computed, extra){if(computed){return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0?jQuery.swap(elem, cssShow, function(){return getWidthOrHeight(elem, name, extra);}):getWidthOrHeight(elem, name, extra);}}, set:function set(elem, value, extra){var styles=extra && getStyles(elem);return setPositiveNumber(elem, value, extra?augmentWidthOrHeight(elem, name, extra, support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles):0);}};});if(!support.opacity){jQuery.cssHooks.opacity = {get:function get(elem, computed){return ropacity.test((computed && elem.currentStyle?elem.currentStyle.filter:elem.style.filter) || "")?0.01 * parseFloat(RegExp.$1) + "":computed?"1":"";}, set:function set(elem, value){var style=elem.style, currentStyle=elem.currentStyle, opacity=jQuery.isNumeric(value)?"alpha(opacity=" + value * 100 + ")":"", filter=currentStyle && currentStyle.filter || style.filter || "";style.zoom = 1;if((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute){style.removeAttribute("filter");if(value === "" || currentStyle && !currentStyle.filter){return;}}style.filter = ralpha.test(filter)?filter.replace(ralpha, opacity):filter + " " + opacity;}};}jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed){if(computed){return jQuery.swap(elem, {"display":"inline-block"}, curCSS, [elem, "marginRight"]);}});jQuery.each({margin:"", padding:"", border:"Width"}, function(prefix, suffix){jQuery.cssHooks[prefix + suffix] = {expand:function expand(value){var i=0, expanded={}, parts=typeof value === "string"?value.split(" "):[value];for(; i < 4; i++) {expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;}});jQuery.fn.extend({css:function css(name, value){return access(this, function(elem, name, value){var styles, len, map={}, i=0;if(jQuery.isArray(name)){styles = getStyles(elem);len = name.length;for(; i < len; i++) {map[name[i]] = jQuery.css(elem, name[i], false, styles);}return map;}return value !== undefined?jQuery.style(elem, name, value):jQuery.css(elem, name);}, name, value, arguments.length > 1);}, show:function show(){return showHide(this, true);}, hide:function hide(){return showHide(this);}, toggle:function toggle(state){if(typeof state === "boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHidden(this)){jQuery(this).show();}else {jQuery(this).hide();}});}});function Tween(elem, options, prop, end, easing){return new Tween.prototype.init(elem, options, prop, end, easing);}jQuery.Tween = Tween;Tween.prototype = {constructor:Tween, init:function init(elem, options, prop, end, easing, unit){this.elem = elem;this.prop = prop;this.easing = easing || "swing";this.options = options;this.start = this.now = this.cur();this.end = end;this.unit = unit || (jQuery.cssNumber[prop]?"":"px");}, cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks && hooks.get?hooks.get(this):Tween.propHooks._default.get(this);}, run:function run(percent){var eased, hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);}else {this.pos = eased = percent;}this.now = (this.end - this.start) * eased + this.start;if(this.options.step){this.options.step.call(this.elem, this.now, this);}if(hooks && hooks.set){hooks.set(this);}else {Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype = Tween.prototype;Tween.propHooks = {_default:{get:function get(tween){var result;if(tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)){return tween.elem[tween.prop];}result = jQuery.css(tween.elem, tween.prop, "");return !result || result === "auto"?0:result;}, set:function set(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);}else {tween.elem[tween.prop] = tween.now;}}}};Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set:function set(tween){if(tween.elem.nodeType && tween.elem.parentNode){tween.elem[tween.prop] = tween.now;}}};jQuery.easing = {linear:function linear(p){return p;}, swing:function swing(p){return 0.5 - Math.cos(p * Math.PI) / 2;}};jQuery.fx = Tween.prototype.init;jQuery.fx.step = {};var fxNow, timerId, rfxtypes=/^(?:toggle|show|hide)$/, rfxnum=new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"), rrun=/queueHooks$/, animationPrefilters=[defaultPrefilter], tweeners={"*":[function(prop, value){var tween=this.createTween(prop, value), target=tween.cur(), parts=rfxnum.exec(value), unit=parts && parts[3] || (jQuery.cssNumber[prop]?"":"px"), start=(jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)), scale=1, maxIterations=20;if(start && start[3] !== unit){unit = unit || start[3];parts = parts || [];start = +target || 1;do {scale = scale || ".5";start = start / scale;jQuery.style(tween.elem, prop, start + unit);}while(scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);}if(parts){start = tween.start = +start || +target || 0;tween.unit = unit;tween.end = parts[1]?start + (parts[1] + 1) * parts[2]:+parts[2];}return tween;}]};function createFxNow(){setTimeout(function(){fxNow = undefined;});return fxNow = jQuery.now();}function genFx(type, includeWidth){var which, attrs={height:type}, i=0;includeWidth = includeWidth?1:0;for(; i < 4; i += 2 - includeWidth) {which = cssExpand[i];attrs["margin" + which] = attrs["padding" + which] = type;}if(includeWidth){attrs.opacity = attrs.width = type;}return attrs;}function createTween(value, prop, animation){var tween, collection=(tweeners[prop] || []).concat(tweeners["*"]), index=0, length=collection.length;for(; index < length; index++) {if(tween = collection[index].call(animation, prop, value)){return tween;}}}function defaultPrefilter(elem, props, opts){var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim=this, orig={}, style=elem.style, hidden=elem.nodeType && isHidden(elem), dataShow=jQuery._data(elem, "fxshow");if(!opts.queue){hooks = jQuery._queueHooks(elem, "fx");if(hooks.unqueued == null){hooks.unqueued = 0;oldfire = hooks.empty.fire;hooks.empty.fire = function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem, "fx").length){hooks.empty.fire();}});});}if(elem.nodeType === 1 && ("height" in props || "width" in props)){opts.overflow = [style.overflow, style.overflowX, style.overflowY];display = jQuery.css(elem, "display");checkDisplay = display === "none"?jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName):display;if(checkDisplay === "inline" && jQuery.css(elem, "float") === "none"){if(!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline"){style.display = "inline-block";}else {style.zoom = 1;}}}if(opts.overflow){style.overflow = "hidden";if(!support.shrinkWrapBlocks()){anim.always(function(){style.overflow = opts.overflow[0];style.overflowX = opts.overflow[1];style.overflowY = opts.overflow[2];});}}for(prop in props) {value = props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle = toggle || value === "toggle";if(value === (hidden?"hide":"show")){if(value === "show" && dataShow && dataShow[prop] !== undefined){hidden = true;}else {continue;}}orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);}else {display = undefined;}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden" in dataShow){hidden = dataShow.hidden;}}else {dataShow = jQuery._data(elem, "fxshow", {});}if(toggle){dataShow.hidden = !hidden;}if(hidden){jQuery(elem).show();}else {anim.done(function(){jQuery(elem).hide();});}anim.done(function(){var prop;jQuery._removeData(elem, "fxshow");for(prop in orig) {jQuery.style(elem, prop, orig[prop]);}});for(prop in orig) {tween = createTween(hidden?dataShow[prop]:0, prop, anim);if(!(prop in dataShow)){dataShow[prop] = tween.start;if(hidden){tween.end = tween.start;tween.start = prop === "width" || prop === "height"?1:0;}}}}else if((display === "none"?defaultDisplay(elem.nodeName):display) === "inline"){style.display = display;}}function propFilter(props, specialEasing){var index, name, easing, value, hooks;for(index in props) {name = jQuery.camelCase(index);easing = specialEasing[name];value = props[index];if(jQuery.isArray(value)){easing = value[1];value = props[index] = value[0];}if(index !== name){props[name] = value;delete props[index];}hooks = jQuery.cssHooks[name];if(hooks && "expand" in hooks){value = hooks.expand(value);delete props[name];for(index in value) {if(!(index in props)){props[index] = value[index];specialEasing[index] = easing;}}}else {specialEasing[name] = easing;}}}function Animation(elem, properties, options){var result, stopped, index=0, length=animationPrefilters.length, deferred=jQuery.Deferred().always(function(){delete tick.elem;}), tick=function tick(){if(stopped){return false;}var currentTime=fxNow || createFxNow(), remaining=Math.max(0, animation.startTime + animation.duration - currentTime), temp=remaining / animation.duration || 0, percent=1 - temp, index=0, length=animation.tweens.length;for(; index < length; index++) {animation.tweens[index].run(percent);}deferred.notifyWith(elem, [animation, percent, remaining]);if(percent < 1 && length){return remaining;}else {deferred.resolveWith(elem, [animation]);return false;}}, animation=deferred.promise({elem:elem, props:jQuery.extend({}, properties), opts:jQuery.extend(true, {specialEasing:{}}, options), originalProperties:properties, originalOptions:options, startTime:fxNow || createFxNow(), duration:options.duration, tweens:[], createTween:function createTween(prop, end){var tween=jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);animation.tweens.push(tween);return tween;}, stop:function stop(gotoEnd){var index=0, length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped = true;for(; index < length; index++) {animation.tweens[index].run(1);}if(gotoEnd){deferred.resolveWith(elem, [animation, gotoEnd]);}else {deferred.rejectWith(elem, [animation, gotoEnd]);}return this;}}), props=animation.props;propFilter(props, animation.opts.specialEasing);for(; index < length; index++) {result = animationPrefilters[index].call(animation, elem, props, animation.opts);if(result){return result;}}jQuery.map(props, createTween, animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem, animation);}jQuery.fx.timer(jQuery.extend(tick, {elem:elem, anim:animation, queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation = jQuery.extend(Animation, {tweener:function tweener(props, callback){if(jQuery.isFunction(props)){callback = props;props = ["*"];}else {props = props.split(" ");}var prop, index=0, length=props.length;for(; index < length; index++) {prop = props[index];tweeners[prop] = tweeners[prop] || [];tweeners[prop].unshift(callback);}}, prefilter:function prefilter(callback, prepend){if(prepend){animationPrefilters.unshift(callback);}else {animationPrefilters.push(callback);}}});jQuery.speed = function(speed, easing, fn){var opt=speed && typeof speed === "object"?jQuery.extend({}, speed):{complete:fn || !fn && easing || jQuery.isFunction(speed) && speed, duration:speed, easing:fn && easing || easing && !jQuery.isFunction(easing) && easing};opt.duration = jQuery.fx.off?0:typeof opt.duration === "number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue == null || opt.queue === true){opt.queue = "fx";}opt.old = opt.complete;opt.complete = function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this, opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed, to, easing, callback){return this.filter(isHidden).css("opacity", 0).show().end().animate({opacity:to}, speed, easing, callback);}, animate:function animate(prop, speed, easing, callback){var empty=jQuery.isEmptyObject(prop), optall=jQuery.speed(speed, easing, callback), doAnimation=function doAnimation(){var anim=Animation(this, jQuery.extend({}, prop), optall);if(empty || jQuery._data(this, "finish")){anim.stop(true);}};doAnimation.finish = doAnimation;return empty || optall.queue === false?this.each(doAnimation):this.queue(optall.queue, doAnimation);}, stop:function stop(type, clearQueue, gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type !== "string"){gotoEnd = clearQueue;clearQueue = type;type = undefined;}if(clearQueue && type !== false){this.queue(type || "fx", []);}return this.each(function(){var dequeue=true, index=type != null && type + "queueHooks", timers=jQuery.timers, data=jQuery._data(this);if(index){if(data[index] && data[index].stop){stopQueue(data[index]);}}else {for(index in data) {if(data[index] && data[index].stop && rrun.test(index)){stopQueue(data[index]);}}}for(index = timers.length; index--;) {if(timers[index].elem === this && (type == null || timers[index].queue === type)){timers[index].anim.stop(gotoEnd);dequeue = false;timers.splice(index, 1);}}if(dequeue || !gotoEnd){jQuery.dequeue(this, type);}});}, finish:function finish(type){if(type !== false){type = type || "fx";}return this.each(function(){var index, data=jQuery._data(this), queue=data[type + "queue"], hooks=data[type + "queueHooks"], timers=jQuery.timers, length=queue?queue.length:0;data.finish = true;jQuery.queue(this, type, []);if(hooks && hooks.stop){hooks.stop.call(this, true);}for(index = timers.length; index--;) {if(timers[index].elem === this && timers[index].queue === type){timers[index].anim.stop(true);timers.splice(index, 1);}}for(index = 0; index < length; index++) {if(queue[index] && queue[index].finish){queue[index].finish.call(this);}}delete data.finish;});}});jQuery.each(["toggle", "show", "hide"], function(i, name){var cssFn=jQuery.fn[name];jQuery.fn[name] = function(speed, easing, callback){return speed == null || typeof speed === "boolean"?cssFn.apply(this, arguments):this.animate(genFx(name, true), speed, easing, callback);};});jQuery.each({slideDown:genFx("show"), slideUp:genFx("hide"), slideToggle:genFx("toggle"), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}, fadeToggle:{opacity:"toggle"}}, function(name, props){jQuery.fn[name] = function(speed, easing, callback){return this.animate(props, speed, easing, callback);};});jQuery.timers = [];jQuery.fx.tick = function(){var timer, timers=jQuery.timers, i=0;fxNow = jQuery.now();for(; i < timers.length; i++) {timer = timers[i];if(!timer() && timers[i] === timer){timers.splice(i--, 1);}}if(!timers.length){jQuery.fx.stop();}fxNow = undefined;};jQuery.fx.timer = function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else {jQuery.timers.pop();}};jQuery.fx.interval = 13;jQuery.fx.start = function(){if(!timerId){timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);}};jQuery.fx.stop = function(){clearInterval(timerId);timerId = null;};jQuery.fx.speeds = {slow:600, fast:200, _default:400};jQuery.fn.delay = function(time, type){time = jQuery.fx?jQuery.fx.speeds[time] || time:time;type = type || "fx";return this.queue(type, function(next, hooks){var timeout=setTimeout(next, time);hooks.stop = function(){clearTimeout(timeout);};});};(function(){var input, div, select, a, opt;div = document.createElement("div");div.setAttribute("className", "t");div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";a = div.getElementsByTagName("a")[0];select = document.createElement("select");opt = select.appendChild(document.createElement("option"));input = div.getElementsByTagName("input")[0];a.style.cssText = "top:1px";support.getSetAttribute = div.className !== "t";support.style = /top/.test(a.getAttribute("style"));support.hrefNormalized = a.getAttribute("href") === "/a";support.checkOn = !!input.value;support.optSelected = opt.selected;support.enctype = !!document.createElement("form").enctype;select.disabled = true;support.optDisabled = !opt.disabled;input = document.createElement("input");input.setAttribute("value", "");support.input = input.getAttribute("value") === "";input.value = "t";input.setAttribute("type", "radio");support.radioValue = input.value === "t";})();var rreturn=/\r/g;jQuery.fn.extend({val:function val(value){var hooks, ret, isFunction, elem=this[0];if(!arguments.length){if(elem){hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined){return ret;}ret = elem.value;return typeof ret === "string"?ret.replace(rreturn, ""):ret == null?"":ret;}return;}isFunction = jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType !== 1){return;}if(isFunction){val = value.call(this, i, jQuery(this).val());}else {val = value;}if(val == null){val = "";}else if(typeof val === "number"){val += "";}else if(jQuery.isArray(val)){val = jQuery.map(val, function(value){return value == null?"":value + "";});}hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined){this.value = val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem, "value");return val != null?val:jQuery.trim(jQuery.text(elem));}}, select:{get:function get(elem){var value, option, options=elem.options, index=elem.selectedIndex, one=elem.type === "select-one" || index < 0, values=one?null:[], max=one?index + 1:options.length, i=index < 0?max:one?index:0;for(; i < max; i++) {option = options[i];if((option.selected || i === index) && (support.optDisabled?!option.disabled:option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))){value = jQuery(option).val();if(one){return value;}values.push(value);}}return values;}, set:function set(elem, value){var optionSet, option, options=elem.options, values=jQuery.makeArray(value), i=options.length;while(i--) {option = options[i];if(jQuery.inArray(jQuery.valHooks.option.get(option), values) >= 0){try{option.selected = optionSet = true;}catch(_) {option.scrollHeight;}}else {option.selected = false;}}if(!optionSet){elem.selectedIndex = -1;}return options;}}}});jQuery.each(["radio", "checkbox"], function(){jQuery.valHooks[this] = {set:function set(elem, value){if(jQuery.isArray(value)){return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;}}};if(!support.checkOn){jQuery.valHooks[this].get = function(elem){return elem.getAttribute("value") === null?"on":elem.value;};}});var nodeHook, boolHook, attrHandle=jQuery.expr.attrHandle, ruseDefault=/^(?:checked|selected)$/i, getSetAttribute=support.getSetAttribute, getSetInput=support.input;jQuery.fn.extend({attr:function attr(name, value){return access(this, jQuery.attr, name, value, arguments.length > 1);}, removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this, name);});}});jQuery.extend({attr:function attr(elem, name, value){var hooks, ret, nType=elem.nodeType;if(!elem || nType === 3 || nType === 8 || nType === 2){return;}if(typeof elem.getAttribute === strundefined){return jQuery.prop(elem, name, value);}if(nType !== 1 || !jQuery.isXMLDoc(elem)){name = name.toLowerCase();hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name)?boolHook:nodeHook);}if(value !== undefined){if(value === null){jQuery.removeAttr(elem, name);}else if(hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined){return ret;}else {elem.setAttribute(name, value + "");return value;}}else if(hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null){return ret;}else {ret = jQuery.find.attr(elem, name);return ret == null?undefined:ret;}}, removeAttr:function removeAttr(elem, value){var name, propName, i=0, attrNames=value && value.match(rnotwhite);if(attrNames && elem.nodeType === 1){while(name = attrNames[i++]) {propName = jQuery.propFix[name] || name;if(jQuery.expr.match.bool.test(name)){if(getSetInput && getSetAttribute || !ruseDefault.test(name)){elem[propName] = false;}else {elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;}}else {jQuery.attr(elem, name, "");}elem.removeAttribute(getSetAttribute?name:propName);}}}, attrHooks:{type:{set:function set(elem, value){if(!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")){var val=elem.value;elem.setAttribute("type", value);if(val){elem.value = val;}return value;}}}}});boolHook = {set:function set(elem, value, name){if(value === false){jQuery.removeAttr(elem, name);}else if(getSetInput && getSetAttribute || !ruseDefault.test(name)){elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);}else {elem[jQuery.camelCase("default-" + name)] = elem[name] = true;}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name){var getter=attrHandle[name] || jQuery.find.attr;attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name)?function(elem, name, isXML){var ret, handle;if(!isXML){handle = attrHandle[name];attrHandle[name] = ret;ret = getter(elem, name, isXML) != null?name.toLowerCase():null;attrHandle[name] = handle;}return ret;}:function(elem, name, isXML){if(!isXML){return elem[jQuery.camelCase("default-" + name)]?name.toLowerCase():null;}};});if(!getSetInput || !getSetAttribute){jQuery.attrHooks.value = {set:function set(elem, value, name){if(jQuery.nodeName(elem, "input")){elem.defaultValue = value;}else {return nodeHook && nodeHook.set(elem, value, name);}}};}if(!getSetAttribute){nodeHook = {set:function set(elem, value, name){var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));}ret.value = value += "";if(name === "value" || value === elem.getAttribute(name)){return value;}}};attrHandle.id = attrHandle.name = attrHandle.coords = function(elem, name, isXML){var ret;if(!isXML){return (ret = elem.getAttributeNode(name)) && ret.value !== ""?ret.value:null;}};jQuery.valHooks.button = {get:function get(elem, name){var ret=elem.getAttributeNode(name);if(ret && ret.specified){return ret.value;}}, set:nodeHook.set};jQuery.attrHooks.contenteditable = {set:function set(elem, value, name){nodeHook.set(elem, value === ""?false:value, name);}};jQuery.each(["width", "height"], function(i, name){jQuery.attrHooks[name] = {set:function set(elem, value){if(value === ""){elem.setAttribute(name, "auto");return value;}}};});}if(!support.style){jQuery.attrHooks.style = {get:function get(elem){return elem.style.cssText || undefined;}, set:function set(elem, value){return elem.style.cssText = value + "";}};}var rfocusable=/^(?:input|select|textarea|button|object)$/i, rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name, value){return access(this, jQuery.prop, name, value, arguments.length > 1);}, removeProp:function removeProp(name){name = jQuery.propFix[name] || name;return this.each(function(){try{this[name] = undefined;delete this[name];}catch(e) {}});}});jQuery.extend({propFix:{"for":"htmlFor", "class":"className"}, prop:function prop(elem, name, value){var ret, hooks, notxml, nType=elem.nodeType;if(!elem || nType === 3 || nType === 8 || nType === 2){return;}notxml = nType !== 1 || !jQuery.isXMLDoc(elem);if(notxml){name = jQuery.propFix[name] || name;hooks = jQuery.propHooks[name];}if(value !== undefined){return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined?ret:elem[name] = value;}else {return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null?ret:elem[name];}}, propHooks:{tabIndex:{get:function get(elem){var tabindex=jQuery.find.attr(elem, "tabindex");return tabindex?parseInt(tabindex, 10):rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href?0:-1;}}}});if(!support.hrefNormalized){jQuery.each(["href", "src"], function(i, name){jQuery.propHooks[name] = {get:function get(elem){return elem.getAttribute(name, 4);}};});}if(!support.optSelected){jQuery.propHooks.selected = {get:function get(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}return null;}};}jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function(){jQuery.propFix[this.toLowerCase()] = this;});if(!support.enctype){jQuery.propFix.enctype = "encoding";}var rclass=/[\t\r\n\f]/g;jQuery.fn.extend({addClass:function addClass(value){var classes, elem, cur, clazz, j, finalValue, i=0, len=this.length, proceed=typeof value === "string" && value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this, j, this.className));});}if(proceed){classes = (value || "").match(rnotwhite) || [];for(; i < len; i++) {elem = this[i];cur = elem.nodeType === 1 && (elem.className?(" " + elem.className + " ").replace(rclass, " "):" ");if(cur){j = 0;while(clazz = classes[j++]) {if(cur.indexOf(" " + clazz + " ") < 0){cur += clazz + " ";}}finalValue = jQuery.trim(cur);if(elem.className !== finalValue){elem.className = finalValue;}}}}return this;}, removeClass:function removeClass(value){var classes, elem, cur, clazz, j, finalValue, i=0, len=this.length, proceed=arguments.length === 0 || typeof value === "string" && value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this, j, this.className));});}if(proceed){classes = (value || "").match(rnotwhite) || [];for(; i < len; i++) {elem = this[i];cur = elem.nodeType === 1 && (elem.className?(" " + elem.className + " ").replace(rclass, " "):"");if(cur){j = 0;while(clazz = classes[j++]) {while(cur.indexOf(" " + clazz + " ") >= 0) {cur = cur.replace(" " + clazz + " ", " ");}}finalValue = value?jQuery.trim(cur):"";if(elem.className !== finalValue){elem.className = finalValue;}}}}return this;}, toggleClass:function toggleClass(value, stateVal){var type=typeof value;if(typeof stateVal === "boolean" && type === "string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);});}return this.each(function(){if(type === "string"){var className, i=0, self=jQuery(this), classNames=value.match(rnotwhite) || [];while(className = classNames[i++]) {if(self.hasClass(className)){self.removeClass(className);}else {self.addClass(className);}}}else if(type === strundefined || type === "boolean"){if(this.className){jQuery._data(this, "__className__", this.className);}this.className = this.className || value === false?"":jQuery._data(this, "__className__") || "";}});}, hasClass:function hasClass(selector){var className=" " + selector + " ", i=0, l=this.length;for(; i < l; i++) {if(this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0){return true;}}return false;}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name){jQuery.fn[name] = function(data, fn){return arguments.length > 0?this.on(name, null, data, fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver, fnOut){return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);}, bind:function bind(types, data, fn){return this.on(types, null, data, fn);}, unbind:function unbind(types, fn){return this.off(types, null, fn);}, delegate:function delegate(selector, types, data, fn){return this.on(types, selector, data, fn);}, undelegate:function undelegate(selector, types, fn){return arguments.length === 1?this.off(selector, "**"):this.off(types, selector || "**", fn);}});var nonce=jQuery.now();var rquery=/\?/;var rvalidtokens=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;jQuery.parseJSON = function(data){if(window.JSON && window.JSON.parse){return window.JSON.parse(data + "");}var requireNonComma, depth=null, str=jQuery.trim(data + "");return str && !jQuery.trim(str.replace(rvalidtokens, function(token, comma, open, close){if(requireNonComma && comma){depth = 0;}if(depth === 0){return token;}requireNonComma = open || comma;depth += !close - !open;return "";}))?Function("return " + str)():jQuery.error("Invalid JSON: " + data);};jQuery.parseXML = function(data){var xml, tmp;if(!data || typeof data !== "string"){return null;}try{if(window.DOMParser){tmp = new DOMParser();xml = tmp.parseFromString(data, "text/xml");}else {xml = new ActiveXObject("Microsoft.XMLDOM");xml.async = "false";xml.loadXML(data);}}catch(e) {xml = undefined;}if(!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: " + data);}return xml;};var ajaxLocParts, ajaxLocation, rhash=/#.*$/, rts=/([?&])_=[^&]*/, rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg, rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent=/^(?:GET|HEAD)$/, rprotocol=/^\/\//, rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters={}, transports={}, allTypes="*/".concat("*");try{ajaxLocation = location.href;}catch(e) {ajaxLocation = document.createElement("a");ajaxLocation.href = "";ajaxLocation = ajaxLocation.href;}ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression, func){if(typeof dataTypeExpression !== "string"){func = dataTypeExpression;dataTypeExpression = "*";}var dataType, i=0, dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite) || [];if(jQuery.isFunction(func)){while(dataType = dataTypes[i++]) {if(dataType.charAt(0) === "+"){dataType = dataType.slice(1) || "*";(structure[dataType] = structure[dataType] || []).unshift(func);}else {(structure[dataType] = structure[dataType] || []).push(func);}}}};}function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR){var inspected={}, seekingTransport=structure === transports;function inspect(dataType){var selected;inspected[dataType] = true;jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options, originalOptions, jqXHR);if(typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return !(selected = dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");}function ajaxExtend(target, src){var deep, key, flatOptions=jQuery.ajaxSettings.flatOptions || {};for(key in src) {if(src[key] !== undefined){(flatOptions[key]?target:deep || (deep = {}))[key] = src[key];}}if(deep){jQuery.extend(true, target, deep);}return target;}function ajaxHandleResponses(s, jqXHR, responses){var firstDataType, ct, finalDataType, type, contents=s.contents, dataTypes=s.dataTypes;while(dataTypes[0] === "*") {dataTypes.shift();if(ct === undefined){ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");}}if(ct){for(type in contents) {if(contents[type] && contents[type].test(ct)){dataTypes.unshift(type);break;}}}if(dataTypes[0] in responses){finalDataType = dataTypes[0];}else {for(type in responses) {if(!dataTypes[0] || s.converters[type + " " + dataTypes[0]]){finalDataType = type;break;}if(!firstDataType){firstDataType = type;}}finalDataType = finalDataType || firstDataType;}if(finalDataType){if(finalDataType !== dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}function ajaxConvert(s, response, jqXHR, isSuccess){var conv2, current, conv, tmp, prev, converters={}, dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters) {converters[conv.toLowerCase()] = s.converters[conv];}}current = dataTypes.shift();while(current) {if(s.responseFields[current]){jqXHR[s.responseFields[current]] = response;}if(!prev && isSuccess && s.dataFilter){response = s.dataFilter(response, s.dataType);}prev = current;current = dataTypes.shift();if(current){if(current === "*"){current = prev;}else if(prev !== "*" && prev !== current){conv = converters[prev + " " + current] || converters["* " + current];if(!conv){for(conv2 in converters) {tmp = conv2.split(" ");if(tmp[1] === current){conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];if(conv){if(conv === true){conv = converters[conv2];}else if(converters[conv2] !== true){current = tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}if(conv !== true){if(conv && s["throws"]){response = conv(response);}else {try{response = conv(response);}catch(e) {return {state:"parsererror", error:conv?e:"No conversion from " + prev + " to " + current};}}}}}}return {state:"success", data:response};}jQuery.extend({active:0, lastModified:{}, etag:{}, ajaxSettings:{url:ajaxLocation, type:"GET", isLocal:rlocalProtocol.test(ajaxLocParts[1]), global:true, processData:true, async:true, contentType:"application/x-www-form-urlencoded; charset=UTF-8", accepts:{"*":allTypes, text:"text/plain", html:"text/html", xml:"application/xml, text/xml", json:"application/json, text/javascript"}, contents:{xml:/xml/, html:/html/, json:/json/}, responseFields:{xml:"responseXML", text:"responseText", json:"responseJSON"}, converters:{"* text":String, "text html":true, "text json":jQuery.parseJSON, "text xml":jQuery.parseXML}, flatOptions:{url:true, context:true}}, ajaxSetup:function ajaxSetup(target, settings){return settings?ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings):ajaxExtend(jQuery.ajaxSettings, target);}, ajaxPrefilter:addToPrefiltersOrTransports(prefilters), ajaxTransport:addToPrefiltersOrTransports(transports), ajax:function ajax(url, options){if(typeof url === "object"){options = url;url = undefined;}options = options || {};var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s=jQuery.ajaxSetup({}, options), callbackContext=s.context || s, globalEventContext=s.context && (callbackContext.nodeType || callbackContext.jquery)?jQuery(callbackContext):jQuery.event, deferred=jQuery.Deferred(), completeDeferred=jQuery.Callbacks("once memory"), _statusCode=s.statusCode || {}, requestHeaders={}, requestHeadersNames={}, state=0, strAbort="canceled", jqXHR={readyState:0, getResponseHeader:function getResponseHeader(key){var match;if(state === 2){if(!responseHeaders){responseHeaders = {};while(match = rheaders.exec(responseHeadersString)) {responseHeaders[match[1].toLowerCase()] = match[2];}}match = responseHeaders[key.toLowerCase()];}return match == null?null:match;}, getAllResponseHeaders:function getAllResponseHeaders(){return state === 2?responseHeadersString:null;}, setRequestHeader:function setRequestHeader(name, value){var lname=name.toLowerCase();if(!state){name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;requestHeaders[name] = value;}return this;}, overrideMimeType:function overrideMimeType(type){if(!state){s.mimeType = type;}return this;}, statusCode:function statusCode(map){var code;if(map){if(state < 2){for(code in map) {_statusCode[code] = [_statusCode[code], map[code]];}}else {jqXHR.always(map[jqXHR.status]);}}return this;}, abort:function abort(statusText){var finalText=statusText || strAbort;if(transport){transport.abort(finalText);}done(0, finalText);return this;}};deferred.promise(jqXHR).complete = completeDeferred.add;jqXHR.success = jqXHR.done;jqXHR.error = jqXHR.fail;s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");s.type = options.method || options.type || s.method || s.type;s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];if(s.crossDomain == null){parts = rurl.exec(s.url.toLowerCase());s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:"?"80":"443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:"?"80":"443"))));}if(s.data && s.processData && typeof s.data !== "string"){s.data = jQuery.param(s.data, s.traditional);}inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);if(state === 2){return jqXHR;}fireGlobals = jQuery.event && s.global;if(fireGlobals && jQuery.active++ === 0){jQuery.event.trigger("ajaxStart");}s.type = s.type.toUpperCase();s.hasContent = !rnoContent.test(s.type);cacheURL = s.url;if(!s.hasContent){if(s.data){cacheURL = s.url += (rquery.test(cacheURL)?"&":"?") + s.data;delete s.data;}if(s.cache === false){s.url = rts.test(cacheURL)?cacheURL.replace(rts, "$1_=" + nonce++):cacheURL + (rquery.test(cacheURL)?"&":"?") + "_=" + nonce++;}}if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);}}if(s.data && s.hasContent && s.contentType !== false || options.contentType){jqXHR.setRequestHeader("Content-Type", s.contentType);}jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*"?", " + allTypes + "; q=0.01":""):s.accepts["*"]);for(i in s.headers) {jqXHR.setRequestHeader(i, s.headers[i]);}if(s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)){return jqXHR.abort();}strAbort = "abort";for(i in {success:1, error:1, complete:1}) {jqXHR[i](s[i]);}transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);if(!transport){done(-1, "No Transport");}else {jqXHR.readyState = 1;if(fireGlobals){globalEventContext.trigger("ajaxSend", [jqXHR, s]);}if(s.async && s.timeout > 0){timeoutTimer = setTimeout(function(){jqXHR.abort("timeout");}, s.timeout);}try{state = 1;transport.send(requestHeaders, done);}catch(e) {if(state < 2){done(-1, e);}else {throw e;}}}function done(status, nativeStatusText, responses, headers){var isSuccess, success, error, response, modified, statusText=nativeStatusText;if(state === 2){return;}state = 2;if(timeoutTimer){clearTimeout(timeoutTimer);}transport = undefined;responseHeadersString = headers || "";jqXHR.readyState = status > 0?4:0;isSuccess = status >= 200 && status < 300 || status === 304;if(responses){response = ajaxHandleResponses(s, jqXHR, responses);}response = ajaxConvert(s, response, jqXHR, isSuccess);if(isSuccess){if(s.ifModified){modified = jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL] = modified;}modified = jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL] = modified;}}if(status === 204 || s.type === "HEAD"){statusText = "nocontent";}else if(status === 304){statusText = "notmodified";}else {statusText = response.state;success = response.data;error = response.error;isSuccess = !error;}}else {error = statusText;if(status || !statusText){statusText = "error";if(status < 0){status = 0;}}}jqXHR.status = status;jqXHR.statusText = (nativeStatusText || statusText) + "";if(isSuccess){deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);}else {deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);}jqXHR.statusCode(_statusCode);_statusCode = undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError", [jqXHR, s, isSuccess?success:error]);}completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete", [jqXHR, s]);if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;}, getJSON:function getJSON(url, data, callback){return jQuery.get(url, data, callback, "json");}, getScript:function getScript(url, callback){return jQuery.get(url, undefined, callback, "script");}});jQuery.each(["get", "post"], function(i, method){jQuery[method] = function(url, data, callback, type){if(jQuery.isFunction(data)){type = type || callback;callback = data;data = undefined;}return jQuery.ajax({url:url, type:method, dataType:type, data:data, success:callback});};});jQuery._evalUrl = function(url){return jQuery.ajax({url:url, type:"GET", dataType:"script", async:false, global:false, "throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this, i));});}if(this[0]){var wrap=jQuery(html, this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstChild && elem.firstChild.nodeType === 1) {elem = elem.firstChild;}return elem;}).append(this);}return this;}, wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this, i));});}return this.each(function(){var self=jQuery(this), contents=self.contents();if(contents.length){contents.wrapAll(html);}else {self.append(html);}});}, wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this, i):html);});}, unwrap:function unwrap(){return this.parent().each(function(){if(!jQuery.nodeName(this, "body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden = function(elem){return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !support.reliableHiddenOffsets() && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";};jQuery.expr.filters.visible = function(elem){return !jQuery.expr.filters.hidden(elem);};var r20=/%20/g, rbracket=/\[\]$/, rCRLF=/\r?\n/g, rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i, rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix, obj, traditional, add){var name;if(jQuery.isArray(obj)){jQuery.each(obj, function(i, v){if(traditional || rbracket.test(prefix)){add(prefix, v);}else {buildParams(prefix + "[" + (typeof v === "object"?i:"") + "]", v, traditional, add);}});}else if(!traditional && jQuery.type(obj) === "object"){for(name in obj) {buildParams(prefix + "[" + name + "]", obj[name], traditional, add);}}else {add(prefix, obj);}}jQuery.param = function(a, traditional){var prefix, s=[], add=function add(key, value){value = jQuery.isFunction(value)?value():value == null?"":value;s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);};if(traditional === undefined){traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;}if(jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)){jQuery.each(a, function(){add(this.name, this.value);});}else {for(prefix in a) {buildParams(prefix, a[prefix], traditional, add);}}return s.join("&").replace(r20, "+");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());}, serializeArray:function serializeArray(){return this.map(function(){var elements=jQuery.prop(this, "elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));}).map(function(i, elem){var val=jQuery(this).val();return val == null?null:jQuery.isArray(val)?jQuery.map(val, function(val){return {name:elem.name, value:val.replace(rCRLF, "\r\n")};}):{name:elem.name, value:val.replace(rCRLF, "\r\n")};}).get();}});jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined?function(){return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR();}:createStandardXHR;var xhrId=0, xhrCallbacks={}, xhrSupported=jQuery.ajaxSettings.xhr();if(window.attachEvent){window.attachEvent("onunload", function(){for(var key in xhrCallbacks) {xhrCallbacks[key](undefined, true);}});}support.cors = !!xhrSupported && "withCredentials" in xhrSupported;xhrSupported = support.ajax = !!xhrSupported;if(xhrSupported){jQuery.ajaxTransport(function(options){if(!options.crossDomain || support.cors){var callback;return {send:function send(headers, complete){var i, xhr=options.xhr(), id=++xhrId;xhr.open(options.type, options.url, options.async, options.username, options.password);if(options.xhrFields){for(i in options.xhrFields) {xhr[i] = options.xhrFields[i];}}if(options.mimeType && xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}if(!options.crossDomain && !headers["X-Requested-With"]){headers["X-Requested-With"] = "XMLHttpRequest";}for(i in headers) {if(headers[i] !== undefined){xhr.setRequestHeader(i, headers[i] + "");}}xhr.send(options.hasContent && options.data || null);callback = function(_, isAbort){var status, statusText, responses;if(callback && (isAbort || xhr.readyState === 4)){delete xhrCallbacks[id];callback = undefined;xhr.onreadystatechange = jQuery.noop;if(isAbort){if(xhr.readyState !== 4){xhr.abort();}}else {responses = {};status = xhr.status;if(typeof xhr.responseText === "string"){responses.text = xhr.responseText;}try{statusText = xhr.statusText;}catch(e) {statusText = "";}if(!status && options.isLocal && !options.crossDomain){status = responses.text?200:404;}else if(status === 1223){status = 204;}}}if(responses){complete(status, statusText, responses, xhr.getAllResponseHeaders());}};if(!options.async){callback();}else if(xhr.readyState === 4){setTimeout(callback);}else {xhr.onreadystatechange = xhrCallbacks[id] = callback;}}, abort:function abort(){if(callback){callback(undefined, true);}}};}});}function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e) {}}function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e) {}}jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents:{script:/(?:java|ecma)script/}, converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script", function(s){if(s.cache === undefined){s.cache = false;}if(s.crossDomain){s.type = "GET";s.global = false;}});jQuery.ajaxTransport("script", function(s){if(s.crossDomain){var script, head=document.head || jQuery("head")[0] || document.documentElement;return {send:function send(_, callback){script = document.createElement("script");script.async = true;if(s.scriptCharset){script.charset = s.scriptCharset;}script.src = s.url;script.onload = script.onreadystatechange = function(_, isAbort){if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState)){script.onload = script.onreadystatechange = null;if(script.parentNode){script.parentNode.removeChild(script);}script = null;if(!isAbort){callback(200, "success");}}};head.insertBefore(script, head.firstChild);}, abort:function abort(){if(script){script.onload(undefined, true);}}};}});var oldCallbacks=[], rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback", jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop() || jQuery.expando + "_" + nonce++;this[callback] = true;return callback;}});jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR){var callbackName, overwritten, responseContainer, jsonProp=s.jsonp !== false && (rjsonp.test(s.url)?"url":typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");if(jsonProp || s.dataTypes[0] === "jsonp"){callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);}else if(s.jsonp !== false){s.url += (rquery.test(s.url)?"&":"?") + s.jsonp + "=" + callbackName;}s.converters["script json"] = function(){if(!responseContainer){jQuery.error(callbackName + " was not called");}return responseContainer[0];};s.dataTypes[0] = "json";overwritten = window[callbackName];window[callbackName] = function(){responseContainer = arguments;};jqXHR.always(function(){window[callbackName] = overwritten;if(s[callbackName]){s.jsonpCallback = originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}if(responseContainer && jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer = overwritten = undefined;});return "script";}});jQuery.parseHTML = function(data, context, keepScripts){if(!data || typeof data !== "string"){return null;}if(typeof context === "boolean"){keepScripts = context;context = false;}context = context || document;var parsed=rsingleTag.exec(data), scripts=!keepScripts && [];if(parsed){return [context.createElement(parsed[1])];}parsed = jQuery.buildFragment([data], context, scripts);if(scripts && scripts.length){jQuery(scripts).remove();}return jQuery.merge([], parsed.childNodes);};var _load=jQuery.fn.load;jQuery.fn.load = function(url, params, callback){if(typeof url !== "string" && _load){return _load.apply(this, arguments);}var selector, response, type, self=this, off=url.indexOf(" ");if(off >= 0){selector = jQuery.trim(url.slice(off, url.length));url = url.slice(0, off);}if(jQuery.isFunction(params)){callback = params;params = undefined;}else if(params && typeof params === "object"){type = "POST";}if(self.length > 0){jQuery.ajax({url:url, type:type, dataType:"html", data:params}).done(function(responseText){response = arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).complete(callback && function(jqXHR, status){self.each(callback, response || [jqXHR.responseText, status, jqXHR]);});}return this;};jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type){jQuery.fn[type] = function(fn){return this.on(type, fn);};});jQuery.expr.filters.animated = function(elem){return jQuery.grep(jQuery.timers, function(fn){return elem === fn.elem;}).length;};var docElem=window.document.documentElement;function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType === 9?elem.defaultView || elem.parentWindow:false;}jQuery.offset = {setOffset:function setOffset(elem, options, i){var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position=jQuery.css(elem, "position"), curElem=jQuery(elem), props={};if(position === "static"){elem.style.position = "relative";}curOffset = curElem.offset();curCSSTop = jQuery.css(elem, "top");curCSSLeft = jQuery.css(elem, "left");calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1;if(calculatePosition){curPosition = curElem.position();curTop = curPosition.top;curLeft = curPosition.left;}else {curTop = parseFloat(curCSSTop) || 0;curLeft = parseFloat(curCSSLeft) || 0;}if(jQuery.isFunction(options)){options = options.call(elem, i, curOffset);}if(options.top != null){props.top = options.top - curOffset.top + curTop;}if(options.left != null){props.left = options.left - curOffset.left + curLeft;}if("using" in options){options.using.call(elem, props);}else {curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){if(arguments.length){return options === undefined?this:this.each(function(i){jQuery.offset.setOffset(this, options, i);});}var docElem, win, box={top:0, left:0}, elem=this[0], doc=elem && elem.ownerDocument;if(!doc){return;}docElem = doc.documentElement;if(!jQuery.contains(docElem, elem)){return box;}if(typeof elem.getBoundingClientRect !== strundefined){box = elem.getBoundingClientRect();}win = getWindow(doc);return {top:box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0), left:box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)};}, position:function position(){if(!this[0]){return;}var offsetParent, offset, parentOffset={top:0, left:0}, elem=this[0];if(jQuery.css(elem, "position") === "fixed"){offset = elem.getBoundingClientRect();}else {offsetParent = this.offsetParent();offset = this.offset();if(!jQuery.nodeName(offsetParent[0], "html")){parentOffset = offsetParent.offset();}parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);}return {top:offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true), left:offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)};}, offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent || docElem;while(offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {offsetParent = offsetParent.offsetParent;}return offsetParent || docElem;});}});jQuery.each({scrollLeft:"pageXOffset", scrollTop:"pageYOffset"}, function(method, prop){var top=/Y/.test(prop);jQuery.fn[method] = function(val){return access(this, function(elem, method, val){var win=getWindow(elem);if(val === undefined){return win?prop in win?win[prop]:win.document.documentElement[method]:elem[method];}if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(), top?val:jQuery(win).scrollTop());}else {elem[method] = val;}}, method, val, arguments.length, null);};});jQuery.each(["top", "left"], function(i, prop){jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed){if(computed){computed = curCSS(elem, prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop] + "px":computed;}});});jQuery.each({Height:"height", Width:"width"}, function(name, type){jQuery.each({padding:"inner" + name, content:type, "":"outer" + name}, function(defaultExtra, funcName){jQuery.fn[funcName] = function(margin, value){var chainable=arguments.length && (defaultExtra || typeof margin !== "boolean"), extra=defaultExtra || (margin === true || value === true?"margin":"border");return access(this, function(elem, type, value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client" + name];}if(elem.nodeType === 9){doc = elem.documentElement;return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);}return value === undefined?jQuery.css(elem, type, extra):jQuery.style(elem, type, value, extra);}, type, chainable?margin:undefined, chainable, null);};});});jQuery.fn.size = function(){return this.length;};jQuery.fn.andSelf = jQuery.fn.addBack;if(typeof define === "function" && define.amd){define("jquery", [], function(){return jQuery;});}var _jQuery=window.jQuery, _$=window.$;jQuery.noConflict = function(deep){if(window.$ === jQuery){window.$ = _$;}if(deep && window.jQuery === jQuery){window.jQuery = _jQuery;}return jQuery;};if(typeof noGlobal === strundefined){window.jQuery = window.$ = jQuery;}return jQuery;});

},{}],4:[function(require,module,exports){
/*!
 * Masonry v3.3.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size',
        'fizzy-ui-utils/utils'
      ],
      factory );
  } else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize,
      window.fizzyUIUtils
    );
  }

}( window, function factory( Outlayer, getSize, utils ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');

  Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    var i = this.cols;
    this.colYs = [];
    while (i--) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
  };

  Masonry.prototype.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  Masonry.prototype.getContainerWidth = function() {
    // container is parent if fit width
    var container = this.options.isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  Masonry.prototype._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );

    var colGroup = this._getColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );
    var shortColIndex = utils.indexOf( colGroup, minimumY );

    // position the brick
    var position = {
      x: this.columnWidth * shortColIndex,
      y: minimumY
    };

    // apply setHeight to necessary columns
    var setHeight = minimumY + item.size.outerHeight;
    var setSpan = this.cols + 1 - colGroup.length;
    for ( var i = 0; i < setSpan; i++ ) {
      this.colYs[ shortColIndex + i ] = setHeight;
    }

    return position;
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  Masonry.prototype._getColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      // make an array of colY values for that one group
      var groupColYs = this.colYs.slice( i, i + colSpan );
      // and get the max value of the array
      colGroup[i] = Math.max.apply( Math, groupColYs );
    }
    return colGroup;
  };

  Masonry.prototype._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var firstX = this.options.isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp
    var stampMaxY = ( this.options.isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  Masonry.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this.options.isFitWidth ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  Masonry.prototype._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  Masonry.prototype.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth !== this.containerWidth;
  };

  return Masonry;

}));

},{"fizzy-ui-utils":8,"get-size":9,"outlayer":15}],5:[function(require,module,exports){
/**
 * matchesSelector v1.0.3
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( ElemProto ) {

  'use strict';

  var matchesMethod = ( function() {
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0, len = prefixes.length; i < len; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  // ----- match ----- //

  function match( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  }

  // ----- appendToFragment ----- //

  function checkParent( elem ) {
    // not needed if already has parent
    if ( elem.parentNode ) {
      return;
    }
    var fragment = document.createDocumentFragment();
    fragment.appendChild( elem );
  }

  // ----- query ----- //

  // fall back to using QSA
  // thx @jonathantneal https://gist.github.com/3062955
  function query( elem, selector ) {
    // append to fragment if no parent
    checkParent( elem );

    // match elem with all selected elems of parent
    var elems = elem.parentNode.querySelectorAll( selector );
    for ( var i=0, len = elems.length; i < len; i++ ) {
      // return true if match
      if ( elems[i] === elem ) {
        return true;
      }
    }
    // otherwise return false
    return false;
  }

  // ----- matchChild ----- //

  function matchChild( elem, selector ) {
    checkParent( elem );
    return match( elem, selector );
  }

  // ----- matchesSelector ----- //

  var matchesSelector;

  if ( matchesMethod ) {
    // IE9 supports matchesSelector, but doesn't work on orphaned elems
    // check for that
    var div = document.createElement('div');
    var supportsOrphans = match( div, 'div' );
    matchesSelector = supportsOrphans ? match : matchChild;
  } else {
    matchesSelector = query;
  }

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( function() {
      return matchesSelector;
    });
  } else if ( typeof exports === 'object' ) {
    module.exports = matchesSelector;
  }
  else {
    // browser global
    window.matchesSelector = matchesSelector;
  }

})( Element.prototype );

},{}],6:[function(require,module,exports){
/*!
 * docReady v1.0.3
 * Cross browser DOMContentLoaded event emitter
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false, require: false, module: false */

( function( window ) {

'use strict';

var document = window.document;
// collection of functions to be triggered on ready
var queue = [];

function docReady( fn ) {
  // throw out non-functions
  if ( typeof fn !== 'function' ) {
    return;
  }

  if ( docReady.isReady ) {
    // ready now, hit it
    fn();
  } else {
    // queue function when ready
    queue.push( fn );
  }
}

docReady.isReady = false;

// triggered on various doc ready events
function init( event ) {
  // bail if IE8 document is not ready just yet
  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
  if ( docReady.isReady || isIE8NotReady ) {
    return;
  }
  docReady.isReady = true;

  // process queue
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var fn = queue[i];
    fn();
  }
}

function defineDocReady( eventie ) {
  eventie.bind( document, 'DOMContentLoaded', init );
  eventie.bind( document, 'readystatechange', init );
  eventie.bind( window, 'load', init );

  return docReady;
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  // if RequireJS, then doc is already ready
  docReady.isReady = typeof requirejs === 'function';
  define( [ 'eventie/eventie' ], defineDocReady );
} else if ( typeof exports === 'object' ) {
  module.exports = defineDocReady( require('eventie') );
} else {
  // browser global
  window.docReady = defineDocReady( window.eventie );
}

})( window );

},{"eventie":7}],7:[function(require,module,exports){
/*!
 * eventie v1.0.6
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

var docElem = document.documentElement;

var bind = function() {};

function getIEEvent( obj ) {
  var event = window.event;
  // add event.target
  event.target = event.target || event.srcElement || obj;
  return event;
}

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = getIEEvent( obj );
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = getIEEvent( obj );
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// ----- module definition ----- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( eventie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = eventie;
} else {
  // browser global
  window.eventie = eventie;
}

})( window );

},{}],8:[function(require,module,exports){
/**
 * Fizzy UI utils v1.0.1
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  /*global define: false, module: false, require: false */
  'use strict';
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'doc-ready/doc-ready',
      'matches-selector/matches-selector'
    ], function( docReady, matchesSelector ) {
      return factory( window, docReady, matchesSelector );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('doc-ready'),
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.docReady,
      window.matchesSelector
    );
  }

}( window, function factory( window, docReady, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- isArray ----- //
  
var objToString = Object.prototype.toString;
utils.isArray = function( obj ) {
  return objToString.call( obj ) == '[object Array]';
};

// ----- makeArray ----- //

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  var ary = [];
  if ( utils.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
};

// ----- indexOf ----- //

// index of helper cause IE8
utils.indexOf = Array.prototype.indexOf ? function( ary, obj ) {
    return ary.indexOf( obj );
  } : function( ary, obj ) {
    for ( var i=0, len = ary.length; i < len; i++ ) {
      if ( ary[i] === obj ) {
        return i;
      }
    }
    return -1;
  };

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = utils.indexOf( ary, obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- isElement ----- //

// http://stackoverflow.com/a/384380/182183
utils.isElement = ( typeof HTMLElement == 'function' || typeof HTMLElement == 'object' ) ?
  function isElementDOM2( obj ) {
    return obj instanceof HTMLElement;
  } :
  function isElementQuirky( obj ) {
    return obj && typeof obj == 'object' &&
      obj.nodeType == 1 && typeof obj.nodeName == 'string';
  };

// ----- setText ----- //

utils.setText = ( function() {
  var setTextProperty;
  function setText( elem, text ) {
    // only check setTextProperty once
    setTextProperty = setTextProperty || ( document.documentElement.textContent !== undefined ? 'textContent' : 'innerText' );
    elem[ setTextProperty ] = text;
  }
  return setText;
})();

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // check that elem is an actual element
    if ( !utils.isElement( elem ) ) {
      continue;
    }
    // filter & find items if we have a selector
    if ( selector ) {
      // filter siblings
      if ( matchesSelector( elem, selector ) ) {
        ffElems.push( elem );
      }
      // find children
      var childElems = elem.querySelectorAll( selector );
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        ffElems.push( childElems[j] );
      }
    } else {
      ffElems.push( elem );
    }
  }

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    if ( timeout ) {
      clearTimeout( timeout );
    }
    var args = arguments;

    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold || 100 );
  };
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-option attribute
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var elems = document.querySelectorAll( '.js-' + dashedNamespace );
    var dataAttr = 'data-' + dashedNamespace + '-options';

    for ( var i=0, len = elems.length; i < len; i++ ) {
      var elem = elems[i];
      var attr = elem.getAttribute( dataAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' +
            elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +
            error );
        }
        continue;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('layoutname')
      var jQuery = window.jQuery;
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    }
  });
};

// -----  ----- //

return utils;

}));

},{"desandro-matches-selector":5,"doc-ready":6}],9:[function(require,module,exports){
/*!
 * getSize v1.2.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, exports: false, require: false, module: false, console: false */

( function( window, undefined ) {

'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') === -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console === 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}



function defineGetSize( getStyleProperty ) {

// -------------------------- setup -------------------------- //

var isSetup = false;

var getStyle, boxSizingProp, isBoxSizeOuter;

/**
 * setup vars and functions
 * do it on initial getSize(), rather than on script load
 * For Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  var getComputedStyle = window.getComputedStyle;
  getStyle = ( function() {
    var getStyleFn = getComputedStyle ?
      function( elem ) {
        return getComputedStyle( elem, null );
      } :
      function( elem ) {
        return elem.currentStyle;
      };

      return function getStyle( elem ) {
        var style = getStyleFn( elem );
        if ( !style ) {
          logError( 'Style returned ' + style +
            '. Are you running this code in a hidden iframe on Firefox? ' +
            'See http://bit.ly/getsizebug1' );
        }
        return style;
      };
  })();

  // -------------------------- box sizing -------------------------- //

  boxSizingProp = getStyleProperty('boxSizing');

  /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox measures the inner-width
   */
  if ( boxSizingProp ) {
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style[ boxSizingProp ] = 'border-box';

    var body = document.body || document.documentElement;
    body.appendChild( div );
    var style = getStyle( div );

    isBoxSizeOuter = getStyleSize( style.width ) === 200;
    body.removeChild( div );
  }

}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem === 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display === 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

  // get all measurements
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    value = mungeNonPixel( elem, value );
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

// IE8 returns percent values, not pixels
// taken from jQuery's curCSS
function mungeNonPixel( elem, value ) {
  // IE8 and has percent value
  if ( window.getComputedStyle || value.indexOf('%') === -1 ) {
    return value;
  }
  var style = elem.style;
  // Remember the original values
  var left = style.left;
  var rs = elem.runtimeStyle;
  var rsLeft = rs && rs.left;

  // Put in the new values to get a computed value out
  if ( rsLeft ) {
    rs.left = elem.currentStyle.left;
  }
  style.left = value;
  value = style.pixelLeft;

  // Revert the changed values
  style.left = left;
  if ( rsLeft ) {
    rs.left = rsLeft;
  }

  return value;
}

return getSize;

}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD for RequireJS
  define( [ 'get-style-property/get-style-property' ], defineGetSize );
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = defineGetSize( require('desandro-get-style-property') );
} else {
  // browser global
  window.getSize = defineGetSize( window.getStyleProperty );
}

})( window );

},{"desandro-get-style-property":10}],10:[function(require,module,exports){
/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

( function( window ) {

'use strict';

var prefixes = 'Webkit Moz ms Ms O'.split(' ');
var docElemStyle = document.documentElement.style;

function getStyleProperty( propName ) {
  if ( !propName ) {
    return;
  }

  // test standard property first
  if ( typeof docElemStyle[ propName ] === 'string' ) {
    return propName;
  }

  // capitalize
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

  // test vendor specific properties
  var prefixed;
  for ( var i=0, len = prefixes.length; i < len; i++ ) {
    prefixed = prefixes[i] + propName;
    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
      return prefixed;
    }
  }
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( function() {
    return getStyleProperty;
  });
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = getStyleProperty;
} else {
  // browser global
  window.getStyleProperty = getStyleProperty;
}

})( window );

},{}],11:[function(require,module,exports){
/**
 * Outlayer Item
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( [
        'eventEmitter/EventEmitter',
        'get-size/get-size',
        'get-style-property/get-style-property',
        'fizzy-ui-utils/utils'
      ],
      function( EventEmitter, getSize, getStyleProperty, utils ) {
        return factory( window, EventEmitter, getSize, getStyleProperty, utils );
      }
    );
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(
      window,
      require('wolfy87-eventemitter'),
      require('get-size'),
      require('desandro-get-style-property'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window,
      window.EventEmitter,
      window.getSize,
      window.getStyleProperty,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, EventEmitter, getSize, getStyleProperty, utils ) {
'use strict';

// ----- helpers ----- //

var getComputedStyle = window.getComputedStyle;
var getStyle = getComputedStyle ?
  function( elem ) {
    return getComputedStyle( elem, null );
  } :
  function( elem ) {
    return elem.currentStyle;
  };


function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //

var transitionProperty = getStyleProperty('transition');
var transformProperty = getStyleProperty('transform');
var supportsCSS3 = transitionProperty && transformProperty;
var is3d = !!getStyleProperty('perspective');

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'otransitionend',
  transition: 'transitionend'
}[ transitionProperty ];

// properties that could have vendor prefix
var prefixableProperties = [
  'transform',
  'transition',
  'transitionDuration',
  'transitionProperty'
];

// cache all vendor properties
var vendorProperties = ( function() {
  var cache = {};
  for ( var i=0, len = prefixableProperties.length; i < len; i++ ) {
    var prop = prefixableProperties[i];
    var supportedProp = getStyleProperty( prop );
    if ( supportedProp && supportedProp !== prop ) {
      cache[ prop ] = supportedProp;
    }
  }
  return cache;
})();

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EventEmitter
utils.extend( Item.prototype, EventEmitter.prototype );

Item.prototype._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
Item.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

Item.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
Item.prototype.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
Item.prototype.getPosition = function() {
  var style = getStyle( this.element );
  var layoutOptions = this.layout.options;
  var isOriginLeft = layoutOptions.isOriginLeft;
  var isOriginTop = layoutOptions.isOriginTop;
  var x = parseInt( style[ isOriginLeft ? 'left' : 'right' ], 10 );
  var y = parseInt( style[ isOriginTop ? 'top' : 'bottom' ], 10 );

  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  var layoutSize = this.layout.size;
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
Item.prototype.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var layoutOptions = this.layout.options;
  var style = {};

  // x
  var xPadding = layoutOptions.isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = layoutOptions.isOriginLeft ? 'left' : 'right';
  var xResetProperty = layoutOptions.isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage
  x = layoutOptions.percentPosition && !layoutOptions.isHorizontal ?
    ( ( x / layoutSize.width ) * 100 ) + '%' : x + 'px';
  style[ xProperty ] = x;
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = layoutOptions.isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = layoutOptions.isOriginTop ? 'top' : 'bottom';
  var yResetProperty = layoutOptions.isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage
  y = layoutOptions.percentPosition && layoutOptions.isHorizontal ?
    ( ( y / layoutSize.height ) * 100 ) + '%' : y + 'px';
  style[ yProperty ] = y;
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};


// transform translate function
var translate = is3d ?
  function( x, y ) {
    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
  } :
  function( x, y ) {
    return 'translate(' + x + 'px, ' + y + 'px)';
  };


Item.prototype._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var compareX = parseInt( x, 10 );
  var compareY = parseInt( y, 10 );
  var didNotMove = compareX === this.position.x && compareY === this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  // flip cooridinates if origin on right or bottom
  var layoutOptions = this.layout.options;
  transX = layoutOptions.isOriginLeft ? transX : -transX;
  transY = layoutOptions.isOriginTop ? transY : -transY;
  transitionStyle.transform = translate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

// non transition + transform support
Item.prototype.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

// use transition and transforms if supported
Item.prototype.moveTo = supportsCSS3 ?
  Item.prototype._transitionTo : Item.prototype.goTo;

Item.prototype.setPosition = function( x, y ) {
  this.position.x = parseInt( x, 10 );
  this.position.y = parseInt( y, 10 );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
Item.prototype._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
Item.prototype._transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

var itemTransitionProperties = transformProperty && ( utils.toDashed( transformProperty ) +
  ',opacity' );

Item.prototype.enableTransition = function(/* style */) {
  // only enable if not already transitioning
  // bug in IE10 were re-setting transition style will prevent
  // transitionend event from triggering
  if ( this.isTransitioning ) {
    return;
  }

  // make transition: foo, bar, baz from style object
  // TODO uncomment this bit when IE10 bug is resolved
  // var transitionValue = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   transitionValue.push( toDash( prop ) );
  // }
  // enable transition styles
  // HACK always enable transform,opacity for IE10
  this.css({
    transitionProperty: itemTransitionProperties,
    transitionDuration: this.layout.options.transitionDuration
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

Item.prototype.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

// ----- events ----- //

Item.prototype.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

Item.prototype.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform',
  '-moz-transform': 'transform',
  '-o-transform': 'transform'
};

Item.prototype.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

Item.prototype.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
Item.prototype._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: ''
};

Item.prototype.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- show/hide/remove ----- //

// remove element from DOM
Item.prototype.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

Item.prototype.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  var _this = this;
  this.once( 'transitionEnd', function() {
    _this.removeElem();
  });
  this.hide();
};

Item.prototype.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

Item.prototype.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
Item.prototype.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

Item.prototype.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

Item.prototype.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

Item.prototype.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

},{"desandro-get-style-property":12,"fizzy-ui-utils":8,"get-size":9,"wolfy87-eventemitter":14}],12:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"dup":10}],13:[function(require,module,exports){
arguments[4][7][0].apply(exports,arguments)
},{"dup":7}],14:[function(require,module,exports){
/*!
 * EventEmitter v4.2.11 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */

;(function () {
    'use strict';

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {}

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in its storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        }
        else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of its properties to this method
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    }
                    else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        }
        else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        }
        else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        }
        else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;

                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[key][i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        }
        else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return EventEmitter;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = EventEmitter;
    }
    else {
        exports.EventEmitter = EventEmitter;
    }
}.call(this));

},{}],15:[function(require,module,exports){
/*!
 * Outlayer v1.4.0
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'eventie/eventie',
        'eventEmitter/EventEmitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( eventie, EventEmitter, getSize, utils, Item ) {
        return factory( window, eventie, EventEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('eventie'),
      require('wolfy87-eventemitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.eventie,
      window.EventEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, eventie, EventEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  if ( this.options.isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  isInitLayout: true,
  isOriginLeft: true,
  isOriginTop: true,
  isResizeBound: true,
  isResizingContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

// inherit EventEmitter
utils.extend( Outlayer.prototype, EventEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
Outlayer.prototype.option = function( opts ) {
  utils.extend( this.options, opts );
};

Outlayer.prototype._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  if ( this.options.isResizeBound ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
Outlayer.prototype.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
Outlayer.prototype._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0, len = itemElems.length; i < len; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
Outlayer.prototype._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
Outlayer.prototype.getItemElements = function() {
  var elems = [];
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    elems.push( this.items[i].element );
  }
  return elems;
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
Outlayer.prototype.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var isInstant = this.options.isLayoutInstant !== undefined ?
    this.options.isLayoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
Outlayer.prototype._init = Outlayer.prototype.layout;

/**
 * logic before any new layout
 */
Outlayer.prototype._resetLayout = function() {
  this.getSize();
};


Outlayer.prototype.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
Outlayer.prototype._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option === 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( utils.isElement( option ) ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
Outlayer.prototype.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
Outlayer.prototype._getItemsForLayout = function( items ) {
  var layoutItems = [];
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    if ( !item.isIgnored ) {
      layoutItems.push( item );
    }
  }
  return layoutItems;
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
Outlayer.prototype._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
Outlayer.prototype._processLayoutQueue = function( queue ) {
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var obj = queue[i];
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );
  }
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
Outlayer.prototype._positionItem = function( item, x, y, isInstant ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
Outlayer.prototype._postLayout = function() {
  this.resizeContainer();
};

Outlayer.prototype.resizeContainer = function() {
  if ( !this.options.isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
Outlayer.prototype._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
Outlayer.prototype._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
Outlayer.prototype._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.emitEvent( eventName + 'Complete', [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount === count ) {
      onComplete();
    }
  }

  // bind callback
  for ( var i=0, len = items.length; i < len; i++ ) {
    var item = items[i];
    item.once( eventName, tick );
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
Outlayer.prototype.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
Outlayer.prototype.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
Outlayer.prototype.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    this.ignore( elem );
  }
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
Outlayer.prototype.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }

};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
Outlayer.prototype._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems === 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

Outlayer.prototype._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  for ( var i=0, len = this.stamps.length; i < len; i++ ) {
    var stamp = this.stamps[i];
    this._manageStamp( stamp );
  }
};

// update boundingLeft / Top
Outlayer.prototype._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
Outlayer.prototype._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
Outlayer.prototype._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
Outlayer.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

/**
 * Bind layout to window resizing
 */
Outlayer.prototype.bindResize = function() {
  // bind just one listener
  if ( this.isResizeBound ) {
    return;
  }
  eventie.bind( window, 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
Outlayer.prototype.unbindResize = function() {
  if ( this.isResizeBound ) {
    eventie.unbind( window, 'resize', this );
  }
  this.isResizeBound = false;
};

// original debounce by John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

// this fires every resize
Outlayer.prototype.onresize = function() {
  if ( this.resizeTimeout ) {
    clearTimeout( this.resizeTimeout );
  }

  var _this = this;
  function delayed() {
    _this.resize();
    delete _this.resizeTimeout;
  }

  this.resizeTimeout = setTimeout( delayed, 100 );
};

// debounced, layout on resize
Outlayer.prototype.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
Outlayer.prototype.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
Outlayer.prototype.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );

  var len = items && items.length;
  for ( var i=0; len && i < len; i++ ) {
    var item = items[i];
    item.reveal();
  }
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
Outlayer.prototype.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );

  var len = items && items.length;
  for ( var i=0; len && i < len; i++ ) {
    var item = items[i];
    item.hide();
  }
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
Outlayer.prototype.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
Outlayer.prototype.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
Outlayer.prototype.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    if ( item.element === elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
Outlayer.prototype.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
Outlayer.prototype.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  for ( var i=0, len = removeItems.length; i < len; i++ ) {
    var item = removeItems[i];
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }
};

// ----- destroy ----- //

// remove and disable Outlayer instance
Outlayer.prototype.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  for ( var i=0, len = this.items.length; i < len; i++ ) {
    var item = this.items[i];
    item.destroy();
  }

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  function Layout() {
    Outlayer.apply( this, arguments );
  }
  // inherit Outlayer prototype, use Object.create if there
  if ( Object.create ) {
    Layout.prototype = Object.create( Outlayer.prototype );
  } else {
    utils.extend( Layout.prototype, Outlayer.prototype );
  }
  // set contructor, used for namespace and Item
  Layout.prototype.constructor = Layout;

  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  // apply new options
  utils.extend( Layout.defaults, options );
  // keep prototype.settings for backwards compatibility (Packery v1.2.0)
  Layout.prototype.settings = {};

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = function LayoutItem() {
    Item.apply( this, arguments );
  };

  Layout.Item.prototype = new Item();

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


},{"./item":11,"eventie":13,"fizzy-ui-utils":8,"get-size":9,"wolfy87-eventemitter":14}]},{},[1]);
