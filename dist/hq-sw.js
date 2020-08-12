
const cacheName = 'hq-1597235202295';
const appShellFiles = ['/index.html','/css/common.css','/css/homepage.css','/css/nav.css','/css/media-queries.css','/css/footer.css','/images/backgrounds/fries-multiply-bg.jpg','/images/logos/decamp-fantastic-fries-logo-white.png','/images/backgrounds/fries-hero-bg.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(appShellFiles)));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keyList => Promise.all(keyList.map(key => caches.delete(key)))));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request)
    .then(r => r || fetch(e.request)));
});
