'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b240817af397a5fdf39455f98966e7ae",
"assets/assets/fonts/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/fonts/Montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/images/Aboutme.jpg": "06bef73c78efdda54ec145c1aa0c847e",
"assets/assets/images/code.png": "eaae8c719e3167d8af8a71817359e0f4",
"assets/assets/images/coding.jpg": "9a1638d5d26be046574945fd8adb44fa",
"assets/assets/images/C_logo.png": "13871c67116c1036ae95730137ee2ec4",
"assets/assets/images/drone.jpg": "d533e5d3bf6d377100d600b189deb006",
"assets/assets/images/Flutter_logo.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/assets/images/hiking.jpg": "23c1e512f977c5053d8f89ea6709c855",
"assets/assets/images/ionic_logo.png": "90aa8d48235d66825a4fdc95a177f9e2",
"assets/assets/images/javaScript_logo.png": "db7933e6a7f7acaf99a33f39b286974b",
"assets/assets/images/Jogging.jpg": "cfaf03a6b3372c88cea72b2bc4f388cf",
"assets/assets/images/laravel_logo.png": "c6ce0ce4d005ecf7619c21d44a928909",
"assets/assets/images/percussion.jpg": "daac91b503243d37b06c371a247787c1",
"assets/assets/images/php_logo.png": "9ef7ca6959cc257391383ace5252b58b",
"assets/assets/images/php_loho.jpg": "c3b81da18b353ceb0b1842c79f38569a",
"assets/assets/images/PKM.jpg": "520eb4d3b7cec8c22037be07bf7354f7",
"assets/assets/images/Profiles.png": "ed4b0ea4decb206da659b5e3d3afec50",
"assets/assets/images/Reading.jpg": "9cbc65aaa0f55502d9411a7488b0c1b6",
"assets/assets/images/temantani.jpg": "67dd2267de47cfd5a1729f2f472a4b58",
"assets/assets/images/temantani_hadir.jpg": "78a9e74373e4e97324a2708495bce4af",
"assets/assets/images/traveling.jpg": "e6e6a7a653610ff217aff5e2d7af5977",
"assets/FontManifest.json": "a76a7b1d3b231f5426f3b7470589558c",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "d8bb610c814861bf6ba75b8cca1fecc2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "36a0a776e5ad06c234a14cecb0c77967",
"/": "36a0a776e5ad06c234a14cecb0c77967",
"main.dart.js": "bd201fe4376c86e1cb86a648b59a8edb",
"manifest.json": "93465fa57d4535dc57f667f4eb1b9304"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
