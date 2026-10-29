const CACHE_NAME = 'pratap-fitai-offline-v4';
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

// Cache-First for core app files (works 100% when laptop is OFF!) + Dynamic Cache for Gym Images
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Never cache OpenAI / Gemini API calls
  if (url.hostname.includes('openai.com') || url.hostname.includes('googleapis.com')) {
    return;
  }

  // For navigations & local app files: serve from cache immediately, update in background if laptop server is reachable
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        // Optional background refresh if server is online
        fetch(event.request)
          .then((netRes) => {
            if (netRes && netRes.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, netRes.clone()));
            }
          })
          .catch(() => {});
        return cachedResponse;
      }

      // If not in cache (e.g. GitHub gym exercise images), fetch from internet and cache for offline gym use!
      return fetch(event.request)
        .then((netRes) => {
          if (netRes && netRes.status === 200 && (url.hostname.includes('githubusercontent.com') || url.origin === self.location.origin)) {
            const copy = netRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return netRes;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      if (clientList.length > 0) {
        return clientList[0].focus();
      }
      return clients.openWindow('./index.html');
    })
  );
});
