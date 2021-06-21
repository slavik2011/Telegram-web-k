var serviceWorkerOption = {"assets":["/0.b44f7e3a49eafd9cc21f.chunk.js","/1.2bc5798da8085b14f4fe.chunk.js","/1.726f909dcf7aac6d7720.chunk.worker.js","/12.86c675977a9ce8b2e495.chunk.js","/13.14d90f9bcbc06e24fe63.chunk.js","/14.883224f348fa41d372cc.chunk.js","/15.0a859eac63ba9451b2ae.chunk.js","/16.2be22e13cec9fc4ad9d3.chunk.js","/17.6228f014d6b3f3f6927d.chunk.js","/18.b76582449cf855586da0.chunk.js","/19.8d1cd86ba86fe4268895.chunk.js","/2.6b5f3cb7b1bf7c10cec8.chunk.js","/20.7b297bf1212565ae7f59.chunk.js","/21.9a19e3f7794d8d61041e.chunk.js","/22.cc87826ce705962603cb.chunk.js","/23.ecf06b5aa8d11da9eb8f.chunk.js","/24.8a0f21f7c5101e9d151d.chunk.js","/25.35c620a8baf0b7bbaf3e.chunk.js","/26.998b7f3164888b2102ce.chunk.js","/27.544ca57f0d61e638e2cf.chunk.js","/28.a9c0e979cd81b1563055.chunk.js","/29.d859ee896ac4c25b5e29.chunk.js","/3.a5ad5250b2756c37954a.chunk.js","/30.cf003a0ffb3009bfea44.chunk.js","/4.64d34c79f9958dc7f7c2.chunk.js","/5.1dbc81ff93b2cedd66a2.chunk.js","/6.bceff5c110c03b17b6e7.chunk.js","/7.cf2b4cd136631de07e7a.chunk.js","/8.f49b5e228e229505ad1c.chunk.js","/9.83f5c0d4fca4502189aa.chunk.js","/main.22bf291a899db75bb3ab.css","/main.edc479e3e113b8a36961.bundle.js","/mtproto.worker.f0730093957a23bcde0f.bundle.worker.js","/npm.qr-code-styling.57154417bdffdfdd9ebf.chunk.js","/rlottie.worker.86bed2789739b353d39d.bundle.worker.js","/style-desktop.9d7b485ed526720a3aad.css","/webp.worker.eafb4e17dc09d5858dc8.bundle.worker.js"]};
        
        !function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"log",(function(){return R})),n.d(t,"deferredPromises",(function(){return B})),n.d(t,"getTaskId",(function(){return G})),n.d(t,"incrementTaskId",(function(){return F}));var o={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1};const r=o.debug;"undefined"!=typeof window?window:self;var i,s=r;!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Log=4]="Log",e[e.Debug=8]="Debug"}(i||(i={}));const a=[i.None,i.Error,i.Warn,i.Log,i.Debug],c=Date.now();function l(){return"["+((Date.now()-c)/1e3).toFixed(3)+"]"}function u(e,t=i.Log|i.Warn|i.Error){function n(...n){return t&i.Log&&console.log(l(),e,...n)}return s||(t=i.Error),n.warn=function(...n){return t&i.Warn&&console.warn(l(),e,...n)},n.info=function(...n){return t&i.Log&&console.info(l(),e,...n)},n.error=function(...n){return t&i.Error&&console.error(l(),e,...n)},n.trace=function(...n){return t&i.Log&&console.trace(l(),e,...n)},n.debug=function(...n){return t&i.Debug&&console.debug(l(),e,...n)},n.setPrefix=function(t){e="["+t+"]:"},n.setPrefix(e),n.setLevel=function(e){t=a.slice(0,e+1).reduce((e,t)=>e|t,0)},n}var d=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const f=self;function h(e){return e.ok&&200===e.status}const g="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,p="undefined"!=typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope,m=(e,...t)=>{self.clients.matchAll({includeUncontrolled:!1,type:"window"}).then(n=>{n.length&&n.slice(e?0:-1).forEach(e=>{e.postMessage(...t)})})},v=(...e)=>{self.postMessage(...e)},b=()=>{},y=p?m.bind(null,!1):g?v:b,w=(p&&m.bind(null,!0),navigator?navigator.userAgent:null),S=(navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),navigator.userAgent.toLowerCase().indexOf("android"),/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),"undefined"!=typeof window?window:self),_=((/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&S.MSStream,!!("safari"in S)||!(!w||!(/\b(iPad|iPhone|iPod)\b/.test(w)||w.match("Safari")&&!w.match("Chrome")))),P=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i);function A(e,t){const n=function(e){if(!e)return[0,0];const[,t]=e.split("="),n=t.split(", "),[o,r]=n[0].split("-");return[+o,+r||0]}(e.request.headers.get("Range"));let[o,r]=n;const i=JSON.parse(decodeURIComponent(t)),s=i.size>78643200?O:j;var a;e.respondWith(Promise.race([(a=45e3,new Promise(e=>{setTimeout(()=>{e(new Response("",{status:408,statusText:"Request timed out."}))},a)})),new Promise((e,t)=>{const a=function(e,t,n){if(0===e[0]&&1===e[1])return new Response(new Uint8Array(2).buffer,{status:206,statusText:"Partial Content",headers:{"Accept-Ranges":"bytes","Content-Range":"bytes 0-1/"+(n||"*"),"Content-Length":"2","Content-Type":t||"video/mp4"}});return null}(n,i.mimeType,i.size);if(a)return e(a);const c=r&&r<s?function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.log(2)))}(r-o+1):s,l=function(e,t=2048){return e-e%t}(o,c),u={type:"requestFilePart",id:F(),payload:[i.dcId,i.location,l,c]};(B[u.id]=function(){let e={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...t)=>{e.lastNotify=t,e.listeners.forEach(e=>e(...t))},lastNotify:void 0,listeners:[],addNotifyListener:t=>{e.lastNotify&&t(...e.lastNotify),e.listeners.push(t)}},t=new Promise((n,o)=>{e.resolve=e=>{t.isFulfilled||(t.isFulfilled=!0,n(e))},e.reject=(...e)=>{t.isRejected||(t.isRejected=!0,o(...e))}});return t.finally(()=>{t.notify=null,t.listeners.length=0,t.lastNotify=null,t.cancel&&(t.cancel=()=>{})}),Object.assign(t,e),t}()).then(t=>{let n=t.bytes;const s={"Accept-Ranges":"bytes","Content-Range":`bytes ${l}-${l+n.byteLength-1}/${i.size||"*"}`,"Content-Length":""+n.byteLength};i.mimeType&&(s["Content-Type"]=i.mimeType),_&&(n=n.slice(o-l,r-l+1),s["Content-Range"]=`bytes ${o}-${o+n.byteLength-1}/${i.size||"*"}`,s["Content-Length"]=""+n.byteLength),e(new Response(n,{status:206,statusText:"Partial Content",headers:s}))}).catch(e=>{}),y(u)})]))}const j=524288,O=1048576;var x={name:"tweb",version:7,stores:[{name:"session"},{name:"stickerSets"},{name:"users"},{name:"chats"},{name:"dialogs"},{name:"messages"}]};class T{constructor(e,t){this.storageIsAvailable=!0,function(e,t){if(t)for(let n in t)void 0!==t[n]&&(e[n]=t[n])}(this,e),o.test&&(this.name+="_test"),this.storeName=t,this.log=u("IDB-"+this.storeName),this.openDatabase(!0),T.STORAGES.push(this)}static closeDatabases(e){this.STORAGES.forEach(t=>{if(e&&e===t)return;const n=t.db;n&&(n.onclose=()=>{},n.close())})}isAvailable(){return this.storageIsAvailable}openDatabase(e=!1){if(this.openDbPromise&&!e)return this.openDbPromise;try{var t=indexedDB.open(this.name,this.version);if(!t)return Promise.reject()}catch(e){return this.log.error("error opening db",e.message),this.storageIsAvailable=!1,Promise.reject(e)}let n=!1;return setTimeout(()=>{n||t.onerror({type:"IDB_CREATE_TIMEOUT"})},3e3),this.openDbPromise=new Promise((e,o)=>{t.onsuccess=r=>{n=!0;const i=t.result;let s=!1;this.log("Opened"),i.onerror=e=>{this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),o(e)},i.onclose=e=>{this.log.error("closed:",e),!s&&this.openDatabase()},i.onabort=e=>{this.log.error("abort:",e);const t=e.target;this.openDatabase(s=!0),t.onerror&&t.onerror(e),i.close()},i.onversionchange=e=>{this.log.error("onversionchange, lol?")},e(this.db=i)},t.onerror=e=>{n=!0,this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),o(e)},t.onupgradeneeded=e=>{n=!0,this.log.warn("performing idb upgrade from",e.oldVersion,"to",e.newVersion);var t=e.target.result;this.stores.forEach(e=>{t.objectStoreNames.contains(e.name)||((e,t)=>{var n;const o=e.createObjectStore(t.name);if(null===(n=t.indexes)||void 0===n?void 0:n.length)for(const e of t.indexes)o.createIndex(e.indexName,e.keyPath,e.objectParameters)})(t,e)})}})}delete(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readwrite",t=>e.map(e=>t.delete(e)),"")}clear(e){return this.getObjectStore("readwrite",e=>e.clear(),"",e)}save(e,t){return Array.isArray(e)||(e=[].concat(e),t=[].concat(t)),this.getObjectStore("readwrite",n=>e.map((e,o)=>n.put(t[o],e)),"")}saveFile(e,t){return t instanceof Blob||(t=function(e,t=""){let n;const o=function(e){if(-1===["image/jpeg","image/png","image/gif","image/webp","image/bmp","video/mp4","video/webm","video/quicktime","audio/ogg","audio/mpeg","audio/mp4","application/json","application/pdf"].indexOf(e))return"application/octet-stream";return e}(t);try{n=new Blob(e,{type:o})}catch(t){let r=new BlobBuilder;e.forEach(e=>{r.append(e)}),n=r.getBlob(o)}return n}([t])),this.save(e,t)}get(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readonly",t=>e.map(e=>t.get(e)),"")}getObjectStore(e,t,n,o=this.storeName){let r;return n&&(r=performance.now(),this.log(n+": start")),this.openDatabase().then(i=>new Promise((s,a)=>{const c=i.transaction([o],e);c.onerror=e=>{clearTimeout(l),a(c.error)},c.oncomplete=e=>{clearTimeout(l),n&&this.log(n+": end",performance.now()-r);const t=f.map(e=>e.result);s(d?t:t[0])};const l=setTimeout(()=>{this.log.error("transaction not finished",c)},1e4),u=t(c.objectStore(o)),d=Array.isArray(u),f=d?u:[].concat(u)}))}getAll(){return this.getObjectStore("readonly",e=>e.getAll(),"")}}T.STORAGES=[];var E=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const D=self,L=location.protocol+"//"+location.hostname+location.pathname.split("/").slice(0,-1).join("/")+"/";const M=new class{constructor(e,t,n){this.defaults=n,this.cache={},this.storage=new T(e,t)}get(e){return E(this,void 0,void 0,(function*(){if(void 0!==this.cache[e])return this.cache[e];let t;try{t=yield this.storage.get(e)}catch(e){}if(void 0!==this.cache[e])return this.cache[e];if(void 0===t){const n=this.defaults[e];t="function"==typeof n?n():n}return this.cache[e]=t}))}set(e,t){return E(this,void 0,void 0,(function*(){this.cache[e]=t;try{this.storage.save(e,t)}catch(e){}}))}}(x,"session",{push_mute_until:0,push_last_alive:0,push_lang:{},push_settings:{}});D.addEventListener("push",e=>{const t=e.data.json();R("push",t);let n=!1;const o=Promise.all([M.get("push_mute_until"),M.get("push_last_alive"),D.clients.matchAll({type:"window"})]).then(e=>{const[o,r,i]=e;if(R("matched clients",i),n=i.length>0,n)throw"Supress notification because some instance is alive";const s=Date.now();if(C()&&o&&s<o)throw`Supress notification because mute for ${Math.ceil((o-s)/6e4)} min`;if(!t.badge)throw"No badge?"});o.catch(e=>{R(e)});const r=o.then(()=>Promise.all([M.get("push_settings"),M.get("push_lang")])).then(e=>function(e,t,n){const o="assets/img/logo_filled_rounded.png";let r,i=e.title||"Telegram",s=e.description||"";e.custom&&(r=e.custom.channel_id?-e.custom.channel_id:e.custom.chat_id?-e.custom.chat_id:+e.custom.from_id||0);e.custom.peerId=""+r;let a="peer"+r;t&&t.nopreview&&(i="Telegram",s=n.push_message_nopreview||"You have a new message",a="unknown_peer");R("show notify",i,s,o,e);const c=[{action:"mute1d",title:n.push_action_mute1d||"Mute for 24H"}];return D.registration.showNotification(i,{body:s,icon:o,tag:a,data:e,actions:c}).then(e=>{var t;e&&e.notification&&(t=e.notification,W.has(t)||(W.add(t),t.onclose=I))}).catch(e=>{R.error("Show notification promise",e)})}(t,e[0],e[1])).catch(()=>(R("Closing all notifications on push",n),C()||n?k():D.registration.showNotification("Telegram",{tag:"unknown_peer"}).then(()=>{if(n)return k();setTimeout(()=>k(),n?0:100)}).catch(e=>{R.error("Show notification error",e)})));e.waitUntil(r)}),D.addEventListener("notificationclick",e=>{const t=e.notification;R("On notification click: ",t.tag),t.close();const n=e.action;if("mute1d"===n&&C())return R("[SW] mute for 1d"),void M.set("push_mute_until",Date.now()+864e5);const o=t.data;if(!o)return;const r=D.clients.matchAll({type:"window"}).then(e=>{o.action=n,N={type:"push_click",payload:o};for(let t=0;t<e.length;t++){const n=e[t];if("focus"in n)return n.focus(),n.postMessage(N),void(N=void 0)}if(D.clients.openWindow)return M.get("push_settings").then(e=>D.clients.openWindow(e.baseUrl||L))}).catch(e=>{R.error("Clients.matchAll error",e)});e.waitUntil(r)}),D.addEventListener("notificationclose",I);let N,W=new Set;function I(e){var t;t=e.notification,W.delete(t)}function k(){for(const e of W)try{e.close()}catch(e){}let e;return e="getNotifications"in D.registration?D.registration.getNotifications({}).then(e=>{for(let t=0,n=e.length;t<n;++t)try{e[t].close()}catch(e){}}).catch(e=>{R.error("Offline register SW error",e)}):Promise.resolve(),W.clear(),e}function C(){return P}const R=u("SW",i.Error|i.Debug|i.Log|i.Warn),q=self,B={},$={notifications_clear:()=>{k()},ping:(e,t)=>{!function(e,t){const n=t.ports&&t.ports[0]||t.source,o=e.payload;o.localNotifications&&M.set("push_last_alive",Date.now()),N&&n&&"postMessage"in n&&(n.postMessage(N,[]),N=void 0),o.lang&&M.set("push_lang",o.lang),o.settings&&M.set("push_settings",o.settings)}(e,t)},requestFilePart:e=>{const t=B[e.id];e.error?t.reject(e.error):t.resolve(e.payload),delete B[e.id]}};q.addEventListener("message",e=>{const t=e.data,n=$[t.type];n&&n(t,e)});let U=0;function G(){return U}function F(){return U++}const z=e=>{if(0===e.request.url.indexOf(location.origin+"/")&&e.request.url.match(/\.(js|css|jpe?g|json|wasm|png|mp3|svg|tgs|ico|woff2?|ttf|webmanifest?)(?:\?.*)?$/))return e.respondWith(function(e){return d(this,void 0,void 0,(function*(){try{const t=yield f.caches.open("cachedAssets"),n=yield t.match(e.request,{ignoreVary:!0});if(n&&h(n))return n;const o={Vary:"*"};let r=yield fetch(e.request,{headers:o});if(h(r))t.put(e.request,r.clone());else if(304===r.status){const n=e.request.url.replace(/\?.+$/,"")+"?"+(1e5*Math.random()|0);r=yield fetch(n,{headers:o}),h(r)&&t.put(e.request,r.clone())}return r}catch(t){return fetch(e.request)}}))}(e));try{const[,t,n,o]=/http[:s]+\/\/.*?(\/(.*?)(?:$|\/(.*)$))/.exec(e.request.url)||[];switch(n){case"stream":A(e,o)}}catch(t){e.respondWith(new Response("",{status:500,statusText:"Internal Server Error"}))}},V=()=>{q.onfetch=z};q.addEventListener("install",e=>{R("installing"),e.waitUntil(q.skipWaiting())}),q.addEventListener("activate",e=>{R("activating",q),e.waitUntil(q.caches.delete("cachedAssets")),e.waitUntil(q.clients.claim())}),q.onerror=e=>{R.error("error:",e)},q.onunhandledrejection=e=>{R.error("onunhandledrejection:",e)},q.onoffline=q.ononline=V,V()}]);
//# sourceMappingURL=sw.js.map