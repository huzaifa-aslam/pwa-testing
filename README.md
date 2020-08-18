1- create file in public "sw.js"

paste code

"
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
"

2- create file in src "swDev.js"

paste code

"
    import React from 'react'

export const swDev = () => {
  let url=`${process.env.PUBLIC_URL}/sw.js`
navigator.serviceWorker.register(url).then((result)=>{
  console.log("result",result)
})
  return (
    <div>

    </div>
  )
}

"

3- clean "service worker" default file

4- install serve
 // npm i serve

 5- install build

 6- run serve
// serve -s build