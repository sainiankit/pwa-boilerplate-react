
// Cache assets on install
self.addEventListener('install', function (event) {
        console.log('📦 Service worker is being installed');
        event.waitUntil(
                caches.open("app-assets").then(function (cache) {
                        serviceWorkerOption.assets.push("/");
                        return cache.addAll(serviceWorkerOption.assets);
                })
        );
});

// Look in cache first, if not found make the network request
self.addEventListener('fetch', function (event) {
        console.log(`🚀 Service worker is is intercepting a fetch (${event.request.method}): ${event.request.url}`);
        event.respondWith(
                caches.match(event.request).then(function (response) {
                        if(response) {
                                console.log('%c✅ Cache took care of the request.', 'color:green');
                                return response;
                        } else {
                                console.log('%c🌍 Not found in cache, making a network request', 'color:blue');
                                return fetch(event.request);
                        } 
                })
        );
});