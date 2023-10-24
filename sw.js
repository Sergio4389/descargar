const CACHE_NAME = 'v1_cache_Cuadro_de_Lista_y_Texto';

const urlsToCache = [
  '/',
  '/index.html',
  '/script.js',
  '/icono_144.png',
  '/iconos/icono_128.png.png'
];

self.addEventListener('instalar', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activar', (e) => {
  e.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then((res) => res || fetch(e.request))
  );
});
