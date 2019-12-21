const cacheName = 'v2';

const cacheAssets = ['index.html', 'css.html'];
self.addEventListener('install', e => {
  console.log('SW installed');
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Caching file');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  console.log('SW activated');

  // Remove unwanted caches

  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Clearing Cache');

            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => {
      console.log('Serving from cache');

      return caches.match(e.request);
    })
  );
});
