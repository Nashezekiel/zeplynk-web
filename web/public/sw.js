const CACHE_NAME = 'zeplynk-v2';
const STATIC_CACHE = 'zeplynk-static-v2';
const RUNTIME_CACHE = 'zeplynk-runtime-v2';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/_next/static/css/',
  '/_next/static/chunks/',
  '/images/',
  '/fonts/',
  '/favicon.ico',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && 
                cacheName !== STATIC_CACHE && 
                cacheName !== RUNTIME_CACHE) {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and external URLs
  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  // Handle static assets with cache-first strategy
  if (isStaticAsset(request.url)) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            return response;
          }
          
          // Cache miss - fetch and cache
          return fetch(request)
            .then((response) => {
              if (response.ok) {
                const responseClone = response.clone();
                caches.open(STATIC_CACHE)
                  .then((cache) => cache.put(request, responseClone));
              }
              return response;
            });
        })
    );
    return;
  }

  // Handle API calls with network-first strategy
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(RUNTIME_CACHE)
              .then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match(request);
        })
    );
    return;
  }

  // Handle pages with stale-while-revalidate strategy
  event.respondWith(
    caches.open(RUNTIME_CACHE)
      .then((cache) => {
        return cache.match(request)
          .then((cachedResponse) => {
            // Start network request in parallel
            const fetchPromise = fetch(request)
              .then((networkResponse) => {
                if (networkResponse.ok) {
                  cache.put(request, networkResponse.clone());
                }
                return networkResponse;
              })
              .catch(() => cachedResponse);

            // Return cached response immediately if available
            if (cachedResponse) {
              return cachedResponse;
            }

            // Otherwise wait for network
            return fetchPromise;
          });
      })
  );
});

// Helper function to check if request is for static asset
function isStaticAsset(url) {
  return url.includes('/_next/static/') ||
         url.includes('/images/') ||
         url.includes('/fonts/') ||
         url.endsWith('.js') ||
         url.endsWith('.css') ||
         url.endsWith('.png') ||
         url.endsWith('.jpg') ||
         url.endsWith('.jpeg') ||
         url.endsWith('.gif') ||
         url.endsWith('.webp') ||
         url.endsWith('.avif') ||
         url.endsWith('.svg') ||
         url.endsWith('.ico');
}
