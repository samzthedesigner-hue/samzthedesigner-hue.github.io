const CACHE_NAME = 'torch-core-v1';
const ASSETS = [
  '/torch/',
  '/torch/index.html',
  '/torch/src/main.jsx',
  '/torch/src/App.jsx',
  '/torch/src/index.css',
  '/torch/src/worker.js',
  '/torch/manifest.json',
  '/torch/icon-192.png',
  '/torch/icon-512.png'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
