const CACHE_NAME = 'v1';
const urlsToCache = [
  'index.html',
  'about.html',
  'contact.html',
  'style.css',
  'nia.jpg',
  'icon-192x192.png',
  'icon-512x512.png'
];

// Install the service worker and cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch files from cache or network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
