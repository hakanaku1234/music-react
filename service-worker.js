"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/music-react/index.html","af5119b2f0b1d762a4c3edf1a7813e27"],["/music-react/static/css/main.337a3f98.css","286d9947593429031f242ffb90f452b7"],["/music-react/static/js/0.373642b7.chunk.js","4768074858a483e5755491e207487ed9"],["/music-react/static/js/1.3a6f3265.chunk.js","eec9d982c13298192c55723b4853b018"],["/music-react/static/js/10.ae6012e1.chunk.js","7d40446ce11951cb470e5e8fb55e30d0"],["/music-react/static/js/11.39c4e182.chunk.js","fff9c4f5c093671f37d358f81d822401"],["/music-react/static/js/2.5d97b2ae.chunk.js","51cce5b724f92c7d261f5f63579f464c"],["/music-react/static/js/3.1a8c1bc8.chunk.js","f884ad31389b516028b9658fee02bcbf"],["/music-react/static/js/4.6a214af3.chunk.js","0d0d647d32b72e01b7477ace9f22cdbd"],["/music-react/static/js/5.3d79403c.chunk.js","d88db8500a15829e7258b66bd2b6f6a6"],["/music-react/static/js/6.be203efb.chunk.js","84ff1362eca6edde0ac2d8bf1f21035f"],["/music-react/static/js/7.7536a1fc.chunk.js","36cc77ddac9c258e74da13358b583732"],["/music-react/static/js/8.b851fd97.chunk.js","8b7497f8b4c4fc8b85a61fe5ec80be97"],["/music-react/static/js/9.fcb5206c.chunk.js","cfe258306a71e0e536f872c23495b05c"],["/music-react/static/js/main.6de6f371.js","76e1d9f717783f22264624898dccfed5"],["/music-react/static/media/icomoon.25f62eba.ttf","25f62ebad6ef48c164c35f7f6da42146"],["/music-react/static/media/icomoon.6617b3f8.eot","6617b3f8267d25d9a680f110d5ebad95"],["/music-react/static/media/icomoon.a1118e35.svg","a1118e35d3c9ccf4f4065dd79fe6d7a0"],["/music-react/static/media/icomoon.ca475422.woff","ca475422ce696fa889d38fb1bad6e213"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,a),t=urlsToCacheKeys.has(c));var n="/music-react/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});