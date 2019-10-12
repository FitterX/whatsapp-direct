"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var FILE_VERSION="?v102",CACHE_NAME="whatsapp-direct"+FILE_VERSION;self.addEventListener("install",function(e){var t=["index.html","css/style.css","scripts/build/sw-install.js","scripts/build/index.js"];e.waitUntil(caches.open(CACHE_NAME).then(function(e){return e.addAll(t.map(function(e){return e+FILE_VERSION}))}).then(function(){return self.skipWaiting()}))}),self.addEventListener("fetch",function(t){t.respondWith(caches.match(t.request).then(function(e){return e||fetch(t.request)}))}),self.addEventListener("activate",function(e){var t=[CACHE_NAME];e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return t.includes(e)}).map(function(e){return caches.delete(e)}))}).then(function(){return self.clients.claim()}))});