(()=>{"use strict";var e={9151:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(8081),a=t.n(r),o=t(3645),c=t.n(o)()(a());c.push([e.id,"body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:0}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}.ancients-container{display:flex;flex-direction:column;flex-wrap:wrap;gap:10px;min-width:40%;padding:20px}.ancients-container .ancient-card{background-position:50%;background-repeat:no-repeat;background-size:contain;box-sizing:border-box;cursor:pointer;height:260px;width:200px}.ancients-container .ancient-card.active{border:2px solid red}.difficulty-container{opacity:1;display:flex;flex-direction:column;gap:20px;height:100vh;justify-content:center}.difficulty-container .difficulty{border:2px solid purple;box-sizing:border-box;color:purple;cursor:pointer;padding:5px;text-align:center}.difficulty-container .difficulty.active{background-color:red}.deck-container{align-items:center;display:flex;flex-direction:column;gap:20px;justify-content:center;min-width:30%}.deck-container .shuffle-button{background-color:red;border:2px solid purple;color:purple;cursor:pointer;padding:5px}.current-state{display:flex;flex-direction:column;gap:10px}.deck-container{display:flex;flex-direction:column;gap:10px;min-height:30%}.deck-container .current-state .stage-container{align-items:center;display:flex;flex-direction:column;gap:5px}.deck-container .current-state .stage-container .stage-text{color:purple}.deck-container .current-state .stage-container .stage-text.done{color:red}.deck-container .current-state .stage-container .dots-container{align-items:center;display:flex;gap:20px;justify-content:center}.deck-container .current-state .stage-container .dot{align-items:center;border-radius:50%;display:flex;height:30px;justify-content:center;width:30px}.deck-container .current-state .stage-container .dot.green{background-color:green}.deck-container .current-state .stage-container .dot.brown{background-color:brown}.deck-container .current-state .stage-container .dot.blue{background-color:blue}.deck-container .deck{cursor:pointer}.deck-container .deck,.deck-container .last-card{background-size:cover;height:190px;width:130px}.App{background-position:50%;background-repeat:no-repeat;background-size:cover;display:flex;gap:20px;height:100vh;justify-content:space-between;width:100vw}.hidden{opacity:0}",""]);const i=c},3645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},8081:e=>{e.exports=function(e){return e[1]}},3379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var g=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==g)n[g].references++,n[g].updater(p);else{var f=a(p,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=t(o[c]);n[i].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},9216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},3565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},7795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},4589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(3379),n=t.n(e),r=t(7795),a=t.n(r),o=t(569),c=t.n(o),i=t(3565),s=t.n(i),d=t(9216),l=t.n(d),u=t(4589),g=t.n(u),p=t(9151),f={};f.styleTagTransform=g(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const b={green1:t.p+"green1.png",green2:t.p+"green2.png",green3:t.p+"green3.png",green4:t.p+"green4.png",green5:t.p+"green5.png",green6:t.p+"green6.png",green7:t.p+"green7.png",green8:t.p+"green8.png",green9:t.p+"green9.png",green10:t.p+"green10.png",green11:t.p+"green11.png",green12:t.p+"green12.png",green13:t.p+"green13.png",green14:t.p+"green14.png",green15:t.p+"green15.png",green16:t.p+"green16.png",green17:t.p+"green17.png",green18:t.p+"green18.png"},h=[{id:"green1",cardFace:b.green1,difficulty:"easy",color:"green"},{id:"green2",cardFace:b.green2,difficulty:"hard",color:"green"},{id:"green3",cardFace:b.green3,difficulty:"hard",color:"green"},{id:"green4",cardFace:b.green4,difficulty:"hard",color:"green"},{id:"green5",cardFace:b.green5,difficulty:"hard",color:"green"},{id:"green6",cardFace:b.green6,difficulty:"hard",color:"green"},{id:"green7",cardFace:b.green7,difficulty:"normal",color:"green"},{id:"green8",cardFace:b.green8,difficulty:"normal",color:"green"},{id:"green9",cardFace:b.green9,difficulty:"normal",color:"green"},{id:"green10",cardFace:b.green10,difficulty:"normal",color:"green"},{id:"green11",cardFace:b.green11,difficulty:"normal",color:"green"},{id:"green12",cardFace:b.green12,difficulty:"easy",color:"green"},{id:"green13",cardFace:b.green13,difficulty:"normal",color:"green"},{id:"green14",cardFace:b.green14,difficulty:"normal",color:"green"},{id:"green15",cardFace:b.green15,difficulty:"normal",color:"green"},{id:"green16",cardFace:b.green16,difficulty:"easy",color:"green"},{id:"green17",cardFace:b.green17,difficulty:"easy",color:"green"},{id:"green18",cardFace:b.green18,difficulty:"easy",color:"green"}],m={brown1:t.p+"brown1.png",brown2:t.p+"brown2.png",brown3:t.p+"brown3.png",brown4:t.p+"brown4.png",brown5:t.p+"brown5.png",brown6:t.p+"brown6.png",brown7:t.p+"brown7.png",brown8:t.p+"brown8.png",brown9:t.p+"brown9.png",brown10:t.p+"brown10.png",brown11:t.p+"brown11.png",brown12:t.p+"brown12.png",brown13:t.p+"brown13.png",brown14:t.p+"brown14.png",brown15:t.p+"brown15.png",brown16:t.p+"brown16.png",brown17:t.p+"brown17.png",brown18:t.p+"brown18.png",brown19:t.p+"brown19.png",brown20:t.p+"brown20.png",brown21:t.p+"brown21.png"},v=[{id:"brown1",cardFace:m.brown1,difficulty:"normal",color:"brown"},{id:"brown2",cardFace:m.brown2,difficulty:"normal",color:"brown"},{id:"brown3",cardFace:m.brown3,difficulty:"normal",color:"brown"},{id:"brown4",cardFace:m.brown4,difficulty:"normal",color:"brown"},{id:"brown5",cardFace:m.brown5,difficulty:"normal",color:"brown"},{id:"brown6",cardFace:m.brown6,difficulty:"hard",color:"brown"},{id:"brown7",cardFace:m.brown7,difficulty:"hard",color:"brown"},{id:"brown8",cardFace:m.brown8,difficulty:"hard",color:"brown"},{id:"brown9",cardFace:m.brown9,difficulty:"hard",color:"brown"},{id:"brown10",cardFace:m.brown10,difficulty:"hard",color:"brown"},{id:"brown11",cardFace:m.brown11,difficulty:"easy",color:"brown"},{id:"brown12",cardFace:m.brown12,difficulty:"easy",color:"brown"},{id:"brown13",cardFace:m.brown13,difficulty:"easy",color:"brown"},{id:"brown14",cardFace:m.brown14,difficulty:"easy",color:"brown"},{id:"brown15",cardFace:m.brown15,difficulty:"normal",color:"brown"},{id:"brown16",cardFace:m.brown16,difficulty:"normal",color:"brown"},{id:"brown17",cardFace:m.brown17,difficulty:"normal",color:"brown"},{id:"brown18",cardFace:m.brown18,difficulty:"normal",color:"brown"},{id:"brown19",cardFace:m.brown19,difficulty:"normal",color:"brown"},{id:"brown20",cardFace:m.brown20,difficulty:"normal",color:"brown"},{id:"brown21",cardFace:m.brown21,difficulty:"easy",color:"brown"}],y={blue1:t.p+"blue1.png",blue2:t.p+"blue2.png",blue3:t.p+"blue3.png",blue4:t.p+"blue4.png",blue5:t.p+"blue5.png",blue6:t.p+"blue6.png",blue7:t.p+"blue7.png",blue8:t.p+"blue8.png",blue9:t.p+"blue9.png",blue10:t.p+"blue10.png",blue11:t.p+"blue11.png",blue12:t.p+"blue12.png"},w=[{id:"blue1",cardFace:y.blue1,difficulty:"hard",color:"blue"},{id:"blue2",cardFace:y.blue2,difficulty:"hard",color:"blue"},{id:"blue3",cardFace:y.blue3,difficulty:"easy",color:"blue"},{id:"blue4",cardFace:y.blue4,difficulty:"easy",color:"blue"},{id:"blue5",cardFace:y.blue5,difficulty:"easy",color:"blue"},{id:"blue6",cardFace:y.blue6,difficulty:"hard",color:"blue"},{id:"blue7",cardFace:y.blue7,difficulty:"normal",color:"blue"},{id:"blue8",cardFace:y.blue8,difficulty:"hard",color:"blue"},{id:"blue9",cardFace:y.blue9,difficulty:"normal",color:"blue"},{id:"blue10",cardFace:y.blue10,difficulty:"easy",color:"blue"},{id:"blue11",cardFace:y.blue11,difficulty:"normal",color:"blue"},{id:"blue12",cardFace:y.blue12,difficulty:"normal",color:"blue"}],L={azathoth:t.p+"Azathoth.png",cthulhu:t.p+"Cthulthu.png",iogSothoth:t.p+"IogSothoth.png",shubNiggurath:t.p+"ShubNiggurath.png"},C=[{id:"azathoth",name:"azathoth",cardFace:L.azathoth,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:2,blueCards:0,brownCards:4}},{id:"cthulhu",name:"cthulhu",cardFace:L.cthulhu,firstStage:{greenCards:0,blueCards:2,brownCards:2},secondStage:{greenCards:1,blueCards:0,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"iogSothoth",name:"iogSothoth",cardFace:L.iogSothoth,firstStage:{greenCards:0,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"shubNiggurath",name:"shubNiggurath",cardFace:L.shubNiggurath,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:3,blueCards:1,brownCards:2},thirdStage:{greenCards:2,blueCards:0,brownCards:4}}],x=t.p+"home.png",S=t.p+"mythicCardBackground.png",F=document.querySelector("#Azathoth"),k=document.querySelector("#Cthulthu"),$=document.querySelector("#IogSothoth"),E=document.querySelector("#ShubNiggurath");F.style.backgroundImage=`url(${L.azathoth})`,k.style.backgroundImage=`url(${L.cthulhu})`,$.style.backgroundImage=`url(${L.iogSothoth})`,E.style.backgroundImage=`url(${L.shubNiggurath})`;const I=document.querySelector(".difficulty-container"),q=document.querySelectorAll(".difficulty"),A=document.querySelector(".deck-container"),M=document.querySelector(".shuffle-button"),N=document.querySelectorAll(".current-state"),z=document.querySelectorAll(".stage-text"),T=document.querySelector(".deck"),j=document.querySelector(".App"),O=document.querySelector(".last-card"),P=document.querySelectorAll(".green"),Z=document.querySelectorAll(".brown"),U=document.querySelectorAll(".blue");function B(){I.classList.remove("hidden")}function H(e){return Math.round(Math.random()*e)}T.style.backgroundImage=`url(${S})`,j.style.backgroundImage=`url(${x})`,F.addEventListener("click",B),k.addEventListener("click",B),$.addEventListener("click",B),E.addEventListener("click",B),q[0].addEventListener("click",(()=>{q[0].classList.add("active"),q[1].classList.remove("active"),q[2].classList.remove("active"),A.classList.remove("hidden"),M.classList.remove("hidden"),T.classList.add("hidden"),N[0].classList.add("hidden"),N[1].classList.add("hidden"),N[2].classList.add("hidden"),z[0].classList.remove("done"),z[1].classList.remove("done"),z[2].classList.remove("done")})),q[1].addEventListener("click",(()=>{q[1].classList.add("active"),q[0].classList.remove("active"),q[2].classList.remove("active"),A.classList.remove("hidden"),M.classList.remove("hidden"),T.classList.add("hidden"),N[0].classList.add("hidden"),N[1].classList.add("hidden"),N[2].classList.add("hidden"),z[0].classList.remove("done"),z[1].classList.remove("done"),z[2].classList.remove("done")})),q[2].addEventListener("click",(()=>{q[2].classList.add("active"),q[0].classList.remove("active"),q[1].classList.remove("active"),A.classList.remove("hidden"),M.classList.remove("hidden"),T.classList.add("hidden"),N[0].classList.add("hidden"),N[1].classList.add("hidden"),N[2].classList.add("hidden"),z[0].classList.remove("done"),z[1].classList.remove("done"),z[2].classList.remove("done")})),M.addEventListener("click",(()=>{M.classList.add("hidden"),T.classList.remove("hidden"),O.classList.remove("hidden")})),F.addEventListener("click",(()=>{F.classList.add("active"),k.classList.remove("active"),$.classList.remove("active"),E.classList.remove("active")})),k.addEventListener("click",(()=>{F.classList.remove("active"),k.classList.add("active"),$.classList.remove("active"),E.classList.remove("active")})),$.addEventListener("click",(()=>{F.classList.remove("active"),k.classList.remove("active"),$.classList.add("active"),E.classList.remove("active")})),E.addEventListener("click",(()=>{F.classList.remove("active"),k.classList.remove("active"),$.classList.remove("active"),E.classList.add("active")}));let R=[],D=[],_=[],J=[],G=[],K=[];function Q(e){return e.sort((()=>Math.random()-.5))}function V(){R=[],D=[],_=[]}function W(){J=[],G=[],K=[]}M.addEventListener("click",(()=>{F.classList.contains("active")&q[0].classList.contains("active")&&(V(),W(),Y(0,"easy")),F.classList.contains("active")&q[1].classList.contains("active")&&(V(),W(),Y(0,"normal")),F.classList.contains("active")&q[2].classList.contains("active")&&(V(),W(),Y(0,"hard")),k.classList.contains("active")&q[0].classList.contains("active")&&(V(),W(),Y(1,"easy")),k.classList.contains("active")&q[1].classList.contains("active")&&(V(),W(),Y(1,"normal")),k.classList.contains("active")&q[2].classList.contains("active")&&(V(),W(),Y(1,"hard")),$.classList.contains("active")&q[0].classList.contains("active")&&(V(),W(),Y(2,"easy")),$.classList.contains("active")&q[1].classList.contains("active")&&(V(),W(),Y(2,"normal")),$.classList.contains("active")&q[2].classList.contains("active")&&(V(),W(),Y(2,"hard")),E.classList.contains("active")&q[0].classList.contains("active")&&(V(),W(),Y(3,"easy")),E.classList.contains("active")&q[1].classList.contains("active")&&(V(),W(),Y(3,"normal")),E.classList.contains("active")&q[2].classList.contains("active")&&(V(),W(),Y(3,"hard"))})),T.addEventListener("click",(function(){R.length>0?(O.style.backgroundImage=`url(${R[0].cardFace})`,R[0].id.includes("green")&&(P[0].textContent=""+(P[0].textContent-1)),R[0].id.includes("brown")&&(Z[0].textContent=""+(Z[0].textContent-1)),R[0].id.includes("blue")&&(U[0].textContent=""+(U[0].textContent-1)),R.splice(0,1),console.log(R)):D.length>0?(O.style.backgroundImage=`url(${D[0].cardFace})`,D[0].id.includes("green")&&(P[1].textContent=""+(P[1].textContent-1)),D[0].id.includes("brown")&&(Z[1].textContent=""+(Z[1].textContent-1)),D[0].id.includes("blue")&&(U[1].textContent=""+(U[1].textContent-1)),D.splice(0,1),console.log(D)):_.length>0&&(O.style.backgroundImage=`url(${_[0].cardFace})`,_[0].id.includes("green")&&(P[2].textContent=""+(P[2].textContent-1)),_[0].id.includes("brown")&&(Z[2].textContent=""+(Z[2].textContent-1)),_[0].id.includes("blue")&&(U[2].textContent=""+(U[2].textContent-1)),_.splice(0,1),console.log(_)),0===R.length&&z[0].classList.add("done"),0===D.length&&z[1].classList.add("done"),0===_.length&&z[2].classList.add("done")})),M.addEventListener("click",(()=>{N[0].classList.remove("hidden"),N[1].classList.remove("hidden"),N[2].classList.remove("hidden")})),F.addEventListener("click",(()=>{T.classList.add("hidden"),N[0].classList.add("hidden"),N[1].classList.add("hidden"),N[2].classList.add("hidden"),O.classList.add("hidden"),M.classList.remove("hidden"),z[0].classList.remove("done"),z[1].classList.remove("done"),z[2].classList.remove("done")})),k.addEventListener("click",(()=>{T.classList.add("hidden"),N[0].classList.add("hidden"),N[1].classList.add("hidden"),N[2].classList.add("hidden"),O.classList.add("hidden"),M.classList.remove("hidden"),z[0].classList.remove("done"),z[1].classList.remove("done"),z[2].classList.remove("done")})),$.addEventListener("click",(()=>{T.classList.add("hidden"),N[0].classList.add("hidden"),N[1].classList.add("hidden"),N[2].classList.add("hidden"),O.classList.add("hidden"),M.classList.remove("hidden"),z[0].classList.remove("done"),z[1].classList.remove("done"),z[2].classList.remove("done")})),E.addEventListener("click",(()=>{T.classList.add("hidden"),N[0].classList.add("hidden"),N[1].classList.add("hidden"),N[2].classList.add("hidden"),O.classList.add("hidden"),M.classList.remove("hidden"),z[0].classList.remove("done"),z[1].classList.remove("done"),z[2].classList.remove("done")}));let X=0;function Y(e,n){if("easy"===n)for(let e=0;e<h.length-1;e++)"easy"===h[e].difficulty|"normal"===h[e].difficulty&&J.push(h[e]);if("easy"===n)for(let e=0;e<v.length-1;e++)"easy"===v[e].difficulty|"normal"===v[e].difficulty&&G.push(v[e]);if("easy"===n)for(let e=0;e<w.length-1;e++)"easy"===w[e].difficulty|"normal"===w[e].difficulty&&K.push(w[e]);if("normal"===n)for(let e=0;e<h.length-1;e++)J.push(h[e]);if("normal"===n)for(let e=0;e<v.length-1;e++)G.push(v[e]);if("normal"===n)for(let e=0;e<w.length-1;e++)K.push(w[e]);if("hard"===n)for(let e=0;e<h.length-1;e++)"hard"===h[e].difficulty|"normal"===h[e].difficulty&&J.push(h[e]);if("hard"===n)for(let e=0;e<v.length-1;e++)"hard"===v[e].difficulty|"normal"===v[e].difficulty&&G.push(v[e]);if("hard"===n)for(let e=0;e<w.length-1;e++)"hard"===w[e].difficulty|"normal"===w[e].difficulty&&K.push(w[e]);for(let n=0;n<`${C[e].firstStage.greenCards}`;n++)X=H(J.length-1-n),R.push(J[X]),J.splice(X,1);for(let n=0;n<`${C[e].firstStage.brownCards}`;n++)X=H(G.length-1-n),R.push(G[X]),G.splice(X,1);for(let n=0;n<`${C[e].firstStage.blueCards}`;n++)X=H(K.length-1-n),R.push(K[X]),K.splice(X,1);for(let n=0;n<`${C[e].secondStage.greenCards}`;n++)X=H(J.length-1-C[e].firstStage.greenCards-n),D.push(J[X]),J.splice(X,1);for(let n=0;n<`${C[e].secondStage.brownCards}`;n++)X=H(G.length-1-C[e].firstStage.brownCards-n),D.push(G[X]),G.splice(X,1);for(let n=0;n<`${C[e].secondStage.blueCards}`;n++)X=H(K.length-1-C[e].firstStage.blueCards-n),D.push(K[X]),K.splice(X,1);for(let n=0;n<`${C[e].thirdStage.greenCards} `;n++)X=H(J.length-1-C[e].secondStage.greenCards-n),_.push(J[X]),J.splice(X,1);for(let n=0;n<`${C[e].thirdStage.brownCards} `;n++)X=H(G.length-1-C[e].secondStage.brownCards-n),_.push(G[X]),G.splice(X,1);for(let n=0;n<`${C[e].thirdStage.blueCards} `;n++)X=H(K.length-1-C[e].secondStage.blueCards-n),_.push(K[X]),K.splice(X,1);console.log(R),console.log(D),console.log(_),P[0].textContent=`${C[e].firstStage.greenCards}`,Z[0].textContent=`${C[e].firstStage.brownCards}`,U[0].textContent=`${C[e].firstStage.blueCards}`,P[1].textContent=`${C[e].secondStage.greenCards}`,Z[1].textContent=`${C[e].secondStage.brownCards}`,U[1].textContent=`${C[e].secondStage.blueCards}`,P[2].textContent=`${C[e].thirdStage.greenCards} `,Z[2].textContent=`${C[e].thirdStage.brownCards} `,U[2].textContent=`${C[e].thirdStage.blueCards} `,Q(R),Q(D),Q(_)}})()})();