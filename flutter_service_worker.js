'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "77d8f94df6f697e4c82585bc69f1fe92",
".git/config": "a100b5de573b7cd83cc7f7ade6aa9dc0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "5eee494537ce48a93a3f3ec215badfb9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fed5f8f87cb2e52fa0b7bdfb04e29b88",
".git/logs/refs/heads/master": "fed5f8f87cb2e52fa0b7bdfb04e29b88",
".git/logs/refs/remotes/origin/master": "cf339c0700e20867bb172c962f582e3b",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/10/c1a68c6fa2e7f248e409fe758e399f0f372a0a": "45710bbf39c6a715cf042499e1e2dfef",
".git/objects/13/26e4d7aa8c638938385d3f9837fd51c267f2e8": "d12989d7a18e401d236429b74bec041d",
".git/objects/14/b2a6782ebe00f80516dc8b1c4a9addb6a2db81": "0fa7a7d1a5a5692bd4a1447a8335e037",
".git/objects/15/70452c55a9a4cd42f20e024dee0ba60285ce49": "7e879cb7ccff343508e400063eb73e2e",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/18/a0ee2469ef3082beaa188184fb1696058b625f": "a85d7a08066b2107f0c0cac84fe72f71",
".git/objects/19/9233a197a88b68528c72ffbb53cb022aaf77f9": "b8defb332af9987d3daac768f312ff76",
".git/objects/1a/9d0377efa3fd347924b148c8f34e7dbd585170": "b8fa9ef5093513717c6ceb7dbed69b13",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/641b26de057f8d95c7bc58e913528cf2539977": "83a6f7c09350f5ac4fc8aefde2f9133d",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/36/40bdb5d498394a75847a44e9af200ed5ad374d": "2e6df6d8c4ffec1fda919ab952f22259",
".git/objects/3c/28bcdec4c7b5f630c67834baa40f62921d92fc": "9c948e099c27525eb3dc64765c63377e",
".git/objects/41/113ae4695d7f0650817ef91114d1fa12d95e31": "efcdf2780690748eb6ad096d87d2fbc0",
".git/objects/42/a5356e8d5c84c3b40b8b6a50002ce447f4b425": "05fbc3fddae0a0c18c011a678e267e6b",
".git/objects/57/b81063af2477f07c55f6da357f8f9868a3ab6e": "e1ddc09576046acb9cfd502c8eb641df",
".git/objects/5e/46c7303497923df92a1d4906fa208c9cd520c8": "54cbfc87da74dad87c712c9ea61097c9",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/63/a39dccccd48bcaabcc6bdc4e657d911574e7b5": "4739037ecd5f95b77cf6a5c7e6d53e29",
".git/objects/64/630602bbd5307b7166012e0b0b9fb5cd3f2bbd": "de984824bd006fdf50133f3bc28f057c",
".git/objects/66/65751a6fe1b11e64eafde54a94e0af0dce2d54": "fab0b418962a4b752998540ce3f263c1",
".git/objects/67/6dd8597e8a05146b52c7922489ae5efc991808": "5b534cbcc2963922efaa6ee2068b2322",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/69/afd9b1aabe7884e0a78df826f7100c53639579": "360fa56047e8e096a45332cbec6de4d4",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/7a/cd7f18ac00de5aa531cfece88825c602218c8f": "0b0502a95fe8da803bdd43a6394babc5",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/76eded98976902b9b41f5f63d46decb19c56db": "9f7c25cdc171bca6d86a2e5ff0b75066",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8eac91889d2de70d114ae62fa3278b1cba37fc": "e88e0f6b9fbade8c4e6f7b14ef8397df",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/98/4c39145940b48bf8f270c202e596aa51ee6932": "bcb347882d907685df13e085a041379a",
".git/objects/9a/8bd751baa0449792dfa7104217d3275ee8772a": "dff11544ab2af46ccecec37be237ccaf",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a6/88126c4981b22bb54d4c2b348017dfa85c2e61": "349f5946c998486bdd591c3269365aaa",
".git/objects/aa/258a555f5aa8523d3f85a1843600c7264c844f": "08b510fec64a29072bd58fd87879b232",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/af/224b71488a3b9ff99d995303fc4e97c06edcba": "688259c86668ae9503ed78236be29999",
".git/objects/b1/a90224d2cb98e8f973868d6579f28d497032ea": "f53f5bd168c31c2975fa0e9d8aec646e",
".git/objects/b2/b62f4f3a1a8d244922ef1c182f2362d4a80790": "337a4942b54edaf2debdbe5e1c89fbdd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c1/c6f68725cadfd668080febec1bab1b0259e971": "4109ee69a536d4f4be1434a6cffa9fbb",
".git/objects/c8/decd6d792b48d438fe1c9890c2e3434bf1518a": "2c222559c166cd3b88738181f0965e55",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d3/fe2491c0072f9cd90d8cf07f2a81db0ad3ce24": "6bac7b5c4aee4c2608b782112f602d49",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e7/dd85556a1068ef62769feb2a9b5a9083f6c355": "de04fb1893eceacd9d9a78cf9e24f501",
".git/objects/ed/d44fc008a27c7bf204b58e34e78dcd1b9525a9": "605e1f6cec088269ea1640f1a731014b",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/ff/f35112be5eb83209adfa0862a3c85d501bd2c8": "3acaeaf6ae96cf165bc2e2a55daa95b9",
".git/refs/heads/master": "1140c8d998cbfc04104e07067eb39883",
".git/refs/remotes/origin/master": "1140c8d998cbfc04104e07067eb39883",
"assets/AssetManifest.json": "82cbbd0297340fee6c9837bbb9f0754c",
"assets/assets/fonts/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/fonts/Montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/images/Aboutme.jpg": "06bef73c78efdda54ec145c1aa0c847e",
"assets/assets/images/code.png": "eaae8c719e3167d8af8a71817359e0f4",
"assets/assets/images/coding.jpg": "08d671ba15563fa6482349881661f387",
"assets/assets/images/C_logo.png": "13871c67116c1036ae95730137ee2ec4",
"assets/assets/images/drone.jpg": "d533e5d3bf6d377100d600b189deb006",
"assets/assets/images/Flutter_logo.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/assets/images/hiking.jpg": "32bb2e065c8b32554201af17c56c238a",
"assets/assets/images/ionic_logo.png": "90aa8d48235d66825a4fdc95a177f9e2",
"assets/assets/images/javaScript_logo.png": "db7933e6a7f7acaf99a33f39b286974b",
"assets/assets/images/Jogging.jpg": "528255c360e6cf1684fd52fd79e90fe7",
"assets/assets/images/laravel_logo.png": "c6ce0ce4d005ecf7619c21d44a928909",
"assets/assets/images/percussion.jpg": "ad8b063694fad7189933aeff6c0daf68",
"assets/assets/images/php_logo.png": "9ef7ca6959cc257391383ace5252b58b",
"assets/assets/images/php_loho.jpg": "c3b81da18b353ceb0b1842c79f38569a",
"assets/assets/images/PKM.jpg": "34cfe8175ff836500ffb0ee0a643ea13",
"assets/assets/images/Profiles.jpg": "6bf4a269a3b0f40e33c9e96bc25f023d",
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
"main.dart.js": "ad5b4d4f3fcf15001c375c4e9c669a5c",
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
