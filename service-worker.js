const CACHE_NAME = "todo-v1";

const urlsToCache = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./thumbnail-192.png",
    "./thumbnail-512.png",
    "./stamp.PNG",
    "./manifest.json"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});