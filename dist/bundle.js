(()=>{"use strict";var e={792:(e,n,t)=>{t.d(n,{c:()=>s});var r=t(500),o=t.n(r),i=t(312),a=t.n(i)()(o());a.push([e.id,'\n*{\n    font-family: "Montserrat", sans-serif;\n}\nbody{\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(75, 75, 75);\n    color: #fff;\n}\nbutton{\n    width: 120px;\n    height: 40px;\n    margin-top: 15px;\n    border: 0;\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n}\n#start-btn, #reset{\n    border-radius: 5px;\n    cursor: pointer;\n    background-color: #fff;\n    transition: background-color 0.2s ease-in-out;\n}\n#start-btn:hover, #reset:hover{ \n    background-color: #000000;\n    color: #fff;\n    border: 1px solid white;\n}\n.flex-container{\n    display: flex;\n    gap: 20px;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n}\n.container{\n    text-align: center;\n}\n.game-board{\n    background-color: white;\n    color: #000000;\n    width: 500px;\n    height: 500px;\n    border-radius: 5px;\n    border: 1px solid rgb(192, 192, 192);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n    transition: background-color 0.1s ease-in;\n}\n.box{\n    width: 48px;\n    height: 48px;\n    border: 1px solid rgb(168, 168, 168);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    transition: background-color 0.2s ease-in-out;\n}\n.box:hover{\n    background-color: rgb(226, 226, 226);\n}\n\n/* modal */\n.modal{\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgb(75, 75, 75);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.hide{\n    display: none;\n}\n.instruction-modal{\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgb(75, 75, 75);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n}\n\n/* ships info */\n#enemy-ship-info {\n    margin-top: 10px;\n}\n#enemy-ship-info > div{\n    display: flex;\n}\n#player-ship-info {\n    margin-top: 10px;\n}\n#player-ship-info > div{\n    display: flex;\n    justify-content: end;\n}\n.ships{\n    background-color: #777777;\n    height: 25px;\n    width: 25px;\n    border: 1px solid black;\n    margin-top: 5px;\n    margin-left: 5px;\n}\n',""]);const s=a},312:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var f=o(h,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},176:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},120:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},936:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=class{constructor(e){this.length=e,this.hits=0}hit(){this.hits++}isSunk(){return this.hits===this.length}},n=class{constructor(){this.board=Array.from({length:10},(()=>Array.from({length:10},(()=>null)))),this.missedAttacks=[],this.ships=[]}placeShip(e,n,t,r){if(!this.isValidPlacement(e.length,n,t,r))return!1;for(let o=0;o<e.length;o++)r?this.board[n+o][t]=e:this.board[n][t+o]=e;return this.ships.push(e),!0}receiveAttack(e,n){return"."!==this.board[e][n]&&"x"!==this.board[e][n]&&(null===this.board[e][n]?(this.board[e][n]=".",!0):(this.board[e][n].hit(),this.board[e][n]="x","hit"))}allShipsSunk(){return this.ships.every((e=>e.isSunk()))}isValidPlacement(e,n,t,r){if(r){if(n+e>10)return!1}else if(t+e>10)return!1;for(let o=0;o<e;o++)if(r){if(null!==this.board[n+o][t])return!1}else if(null!==this.board[n][t+o])return!1;if(r){if(t>0&&null!==this.board[n][t-1])return!1;if(t+e<9&&null!==this.board[n][t+e])return!1}else{if(n>0&&null!==this.board[n-1][t])return!1;if(n+e<9&&null!==this.board[n+e][t])return!1}return!0}},r=class{constructor(){this.gameboard=new n}attack(e,n,t){return e.receiveAttack(n,t)}},o=()=>{const n=new r,t=new r,o=new e(5),s=new e(4),u=new e(3),p=new e(3),h=new e(2),f=new e(5),m=new e(4),b=new e(3),g=new e(3),y=new e(2);i(t,[o,s,u,p,h]),i(n,[f,m,b,g,y]),l(n.gameboard.ships),d(t.gameboard.ships);const x=document.querySelector("#enemy-board"),v=document.querySelector("#player-board");v.style.backgroundColor="rgb(226, 226, 226)",x.style.backgroundColor="rgb(255, 255, 255)";for(let e=0;e<10;e++)for(let r=0;r<10;r++){const o=document.createElement("div");o.classList.add("box"),o.id=`${e} ${r}`,o.addEventListener("click",(()=>{const e=o.id.split(" "),r=e[0],i=e[1],s=t.attack(n.gameboard,r,i);!1!==s&&(x.style.backgroundColor="rgb(226, 226, 226)",v.style.backgroundColor="rgb(255, 255, 255)","hit"===s?(o.style.color="red",o.textContent="X",l(n.gameboard.ships)):o.textContent=".",n.gameboard.allShipsSunk()&&c("You won","You destroyed opponent's ships"),setTimeout((()=>{for(v.style.backgroundColor="rgb(226, 226, 226)",x.style.backgroundColor="rgb(255, 255, 255)";;){let e=a(),r=a();const o=n.attack(t.gameboard,e,r);if(o){e+=10,r+=10;let n=String(e)+"-"+String(r);const i=document.getElementById(n);"hit"===o?(i.style.color="red",i.textContent="X",d(t.gameboard.ships)):i.textContent=".",t.gameboard.allShipsSunk()&&c("You lost","Opponent destroyed all your ships");break}}}),500))})),x.appendChild(o);const i=document.createElement("div");i.classList.add("box"),i.id=`${e+10}-${r+10}`,t.gameboard.board[e][r]&&(i.textContent="x"),v.appendChild(i)}},i=(e,n)=>{n.forEach((n=>{for(;;){const t=a(),r=a(),o=s();if(e.gameboard.placeShip(n,t,r,o)){e.gameboard.placeShip(n,t,r,o);break}}}))},a=()=>Math.floor(10*Math.random()),s=()=>Math.floor(2*Math.random()),c=(e,n)=>{const t=document.querySelector(".modal"),r=document.createElement("div");t.innerHTML="";const o=document.createElement("h1");o.textContent=e;const i=document.createElement("p");i.textContent=n,r.append(o,i),t.append(r),t.classList.remove("hide"),setTimeout((()=>{t.classList.add("hide"),document.getElementById("reset").click()}),3e3)},l=e=>{const n=document.querySelector("#enemy-ship-info");n.innerHTML="",e.forEach((e=>{const t=document.createElement("div");let r=0;for(let n=0;n<e.length;n++){const n=document.createElement("div");n.classList.add("ships"),r<e.hits&&(n.style.backgroundColor="black",n.style.border="0.2px solid grey",r++),t.appendChild(n)}n.appendChild(t)}))},d=e=>{const n=document.querySelector("#player-ship-info");n.innerHTML="",e.forEach((e=>{const t=document.createElement("div");let r=0;for(let n=0;n<e.length;n++){const n=document.createElement("div");n.classList.add("ships"),r<e.hits&&(n.style.backgroundColor="black",n.style.border="0.2px solid grey",r++),t.appendChild(n)}n.appendChild(t)}))};var u=t(596),p=t.n(u),h=t(520),f=t.n(h),m=t(176),b=t.n(m),g=t(120),y=t.n(g),x=t(808),v=t.n(x),k=t(936),w=t.n(k),C=t(792),E={};E.styleTagTransform=w(),E.setAttributes=y(),E.insert=b().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=v(),p()(C.c,E),C.c&&C.c.locals&&C.c.locals,o();const S=document.getElementById("start-btn");S.style.display="none",S.addEventListener("click",(()=>{o(),S.style.display="none"})),document.getElementById("reset").addEventListener("click",(()=>{const e=document.querySelector("#enemy-board"),n=document.querySelector("#player-board");document.getElementById("enemy-ship-info").innerHTML="",document.getElementById("player-ship-info").innerHTML="",e.textContent="",n.textContent="",e.style.backgroundColor="white",n.style.backgroundColor="white",S.style.display="inline-block"}))})()})();