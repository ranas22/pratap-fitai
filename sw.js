const CACHE_NAME = 'pratap-fitai-v9';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-First for core app files (so phone ALWAYS gets new updates immediately!), Cache fallback when offline
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  if (url.hostname.includes('openai.com') || url.hostname.includes('googleapis.com')) {
    return;
  }

  // For HTML/CSS/JS app files: try Network first so updates reflect right away, fall back to cache offline
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(event.request)
        .then((netRes) => {
          if (netRes && netRes.status === 200) {
            const copy = netRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return netRes;
        })
        .catch(() => caches.match(event.request, { ignoreSearch: true }).then((c) => c || caches.match('./index.html')))
    );
    return;
  }

  // For GitHub exercise images: Cache-First so images load super fast in gym
  if (url.hostname.includes('githubusercontent.com')) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((netRes) => {
          if (netRes && netRes.status === 200) {
            const copy = netRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return netRes;
        });
      })
    );
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      if (clientList.length > 0) return clientList[0].focus();
      return clients.openWindow('./index.html');
    })
  );
});
