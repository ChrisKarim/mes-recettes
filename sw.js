// Le Cuisto — service worker v1.1
const CACHE = "lecuisto-v1.1";
const SHELL = ["./", "index.html", "manifest.json", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("lecuisto-") && k !== CACHE && k !== "lecuisto-thumbs").map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;

  // Miniatures YouTube : gardées en cache pour l'usage hors-ligne
  if (url.hostname === "i.ytimg.com") {
    e.respondWith(caches.open("lecuisto-thumbs").then(async c => {
      const hit = await c.match(e.request);
      if (hit) return hit;
      try { const r = await fetch(e.request); if (r.ok || r.type === "opaque") c.put(e.request, r.clone()); return r; }
      catch (err) { return Response.error(); }
    }));
    return;
  }

  // App : réseau d'abord (pour recevoir les mises à jour), cache si hors-ligne
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
        .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
    );
  }
});
