var cacheName = 'helloWorld';

self.addEventListener('fetch', function(event) {
    event.respondWith(
        //Check whether incoming request URL matches anything that exists in the current cache
        //if so return from cache else fetch new one
        caches.match(event.request).then(function(res) {
            if (res) {
                return res;
            }

            //clone the request
            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(
                function(fetchResponse) {
                    if (!fetchResponse || fetchResponse.status !== 200) {
                        return fetchResponse;
                    }

                    var responseToCache = fetchResponse.clone();
                    console.log(responseToCache);
                    caches.open(cacheName)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });

                    return fetchResponse;
                }
            );
        })
    )
});