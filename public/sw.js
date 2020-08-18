var cacheName='demp-app'
var fileToCashe=[
    'index.html',
    '/',

    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/main.chunk.js'
]

self.addEventListener("activate",function(e){
    console.log("serviceWorker is activated")
})

self.addEventListener("install",function(e){
    console.log("serviceWorker is install")
    e.waitUntil(
        caches.open(cacheName)
        .then(function(cache){
            return cache.addAll(fileToCashe)
        })
    )
})

self.addEventListener("fetch",function(e){
    console.log("fetch",e.request.url)
    if(!navigator.onLine){

        e.respondWith(
            caches.match(e.request)
            .then(function(response){
                return response || fetch(e.request)

            })
        )
    }
})