parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HPsM":[function(require,module,exports) {
var t,e,n=parseInt(prompt("참가자"),10),r=document.querySelector("input"),o=document.querySelector('span[id="order"]'),u=document.querySelector('span[id="word"]'),a=document.querySelector("p"),c=new Array;r.addEventListener("input",function(t){e=t.target.value});var i=function(){if(t)if(t.slice(-1)===e.slice(0,1)){c.push(e),r.value="";var i=parseInt(o.textContent);o.textContent=i>=n?1:i+1,a.textContent=c.toString()}else alert("틀림");else{t=e,u.textContent=t,c.push(t),r.value="";var l=parseInt(o.textContent);o.textContent=l>=n?1:l+1,a.textContent=c.toString()}};document.querySelector("button[class='btn']").addEventListener("click",i);
},{}]},{},["HPsM"], null)
//# sourceMappingURL=/game.810e9151.js.map