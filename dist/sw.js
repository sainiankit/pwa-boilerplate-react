var serviceWorkerOption = {
  "assets": [
    "/main.9a39d463b3266bc5d814.js",
    "/index.html",
    "/manifest.89a80e10c531576d94392955e7386254.json",
    "/icon_384x384.6d722ac94a4729c2998d1687dadfe757.png",
    "/icon_192x192.6c2c25eb17d1728fc38f9a2b925ca285.png"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;self.addEventListener("install",function(e){console.log("📦 Service worker is being installed"),e.waitUntil(caches.open("app-assets").then(function(e){return serviceWorkerOption.assets.push("/"),e.addAll(serviceWorkerOption.assets)}))}),self.addEventListener("fetch",function(e){console.log("🚀 Service worker is is intercepting a fetch (".concat(e.request.method,"): ").concat(e.request.url)),e.respondWith(caches.match(e.request).then(function(t){return t?(console.log("%c✅ Cache took care of the request.","color:green"),t):(console.log("%c🌍 Not found in cache, making a network request","color:blue"),fetch(e.request))}))})}]);
//# sourceMappingURL=sw.js.map