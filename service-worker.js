importScripts("/CurrencyExchangeApplication/precache-manifest.63659c03bcb3eb37724adf7e9917367e.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(
    // 'http://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
    new RegExp('(https):.*min\.(css|js)'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cdn-cache'
    })
);

workbox.routing.registerRoute(
    new RegExp('(https):\\/\\/openexchangerates.org\\/api\\/(latest.json).*'),
    workbox.strategies.networkFirst({
        cacheName: 'api-data'
    })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.silent);

