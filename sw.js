self.addEventListener('install', (e) => {
  console.log('SW instalado');
});

self.addEventListener('fetch', (e) => {
  // Permite que la app funcione offline
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});