const CACHE_NAME = 'keuanganku-v1';
const assetsToCache = [
  './',
  './index.html',
  './manifest.json'
  // Tambahkan path aset CSS atau JS lokal Anda di sini jika ada
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Fetch Aset dari Cache / Jaringan
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
