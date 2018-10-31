var APP_PREFIX = 'shri-preformance-teleginn';
var VERSION = 'version_01';
var CACHE_NAME = APP_PREFIX + VERSION;
var URLS = [
  '/shri2018-2-performance/',
  '/shri2018-2-performance/index.html',
  '/shri2018-2-performance/assets/logo.png',
  '/shri2018-2-performance/assets/sh.webp',
  '/shri2018-2-performance/assets/cloud-drizzle.svg',
  '/shri2018-2-performance/assets/panel__icon_clock.svg',
  '/shri2018-2-performance/assets/panel__icon_light_off.svg',
  '/shri2018-2-performance/assets/panel__icon_light_on.svg',
  '/shri2018-2-performance/assets/panel__icon_temp_off.svg',
  '/shri2018-2-performance/assets/panel__icon_temp_on.svg',
  '/shri2018-2-performance/fonts/subset-PTSans-Bold.woff2',
  '/shri2018-2-performance/fonts/subset-PTSans-NarrowBold.woff2',
  '/shri2018-2-performance/s.js',
  '/shri2018-2-performance/modal.css'
];

// Respond with cached resources
self.addEventListener('fetch', function(e) {
  console.log('fetch request : ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(request) {
      if (request) {
        // if cache is available, respond with cache
        console.log('responding with cache : ' + e.request.url);
        return request;
      } else {
        // if there are no cache, try fetching request
        console.log('file is not cached, fetching : ' + e.request.url);
        return fetch(e.request);
      }
    })
  );
});

// Cache resources
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('installing cache : ' + CACHE_NAME);
      return cache.addAll(URLS);
    })
  );
});

// Delete outdated caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      // `keyList` contains all cache names under your username.github.io
      // filter out ones that has this app prefix to create white list
      var cacheWhitelist = keyList.filter(function(key) {
        return key.indexOf(APP_PREFIX);
      });
      // add current cache name to white list
      cacheWhitelist.push(CACHE_NAME);

      return Promise.all(
        keyList.map(function(key, i) {
          if (cacheWhitelist.indexOf(key) === -1) {
            console.log('deleting cache : ' + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});
