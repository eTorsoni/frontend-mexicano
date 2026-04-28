const CACHE_NAME = 'Restaurante-mexicano-cache-v8';
const ASSETS = [
    '/',
    '/index.html',
    'manifest.json',
    '/assets/images/burritos-removebg-preview.png',
    '/assets/images/logo.webp',
    '/assets/images/whatsapp.png',
]
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Preparando');
            return cache.addAll(ASSETS);
        })
    );
})
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

