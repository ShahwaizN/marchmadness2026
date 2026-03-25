// Cache shell assets, but NEVER cache ESPN API responses — always fetch live.
const CACHE = "mm-digest-v2";
const SHELL = ["/", "/index.html", "/manifest.json"];
const ESPN_ORIGIN = "site.api.espn.com";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // Always go network-first for ESPN API — never serve stale scores
  if (url.hostname === ESPN_ORIGIN) {
    e.respondWith(fetch(e.request));
    return;
  }

  // For Google Fonts and other CDN assets: network-first, fall back to cache
  if (url.hostname.includes("fonts") || url.hostname.includes("gstatic")) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Shell assets: cache-first
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
