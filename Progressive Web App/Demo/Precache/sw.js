var cacheName = "cacheHello";

// Only apply this cache method if you know existing resource on the server
// Defining a long list of files will increase the chances that one file may fail to cache, 
// leading to your Service Worker not being installed.
self.addEventListener('install', event => {
    //uses a JavaScript promise to know how long installation takes and whether it succeeded.
    event.waitUnitl(caches.open(cacheName).then(cache => cache.addAll([
        './js/script.js',
        './img/hello.png'
    ])))
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        //Check whether incoming request URL matches anything that exists in the current cache
        //if so return from cache else fetch new one
        caches.match(event.request).then(function(res) {
            if (res) {
                return res;
            }
            return fetch(event.request);
        })
    )
});