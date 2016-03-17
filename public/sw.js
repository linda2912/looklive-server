this.addEventListener('install', event => {
  event.waitUntil(
    caches.open('looklive-v1').then(cache => {
      return cache.addAll([
        './',
        '/styles/style.css',
        '/js/app.js',
        '/images/logo.png',
        'images/header.jpg'
      ]);
    })
  );
});


this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // cache.put(event.request, response.clone());
        return response || fetch(event.request)
      })
  );
});

