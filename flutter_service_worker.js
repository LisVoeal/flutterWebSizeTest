'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/NOTICES": "7a1f472d38cdb4e55ea00cafcf535db9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutterWebSizeTest/.git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
"flutterWebSizeTest/.git/config": "cede9211f0741a37f2e45c34dbfafc82",
"flutterWebSizeTest/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"flutterWebSizeTest/.git/FETCH_HEAD": "f562ce9d91f1477b935ebf40e31f89ba",
"flutterWebSizeTest/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"flutterWebSizeTest/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"flutterWebSizeTest/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"flutterWebSizeTest/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"flutterWebSizeTest/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"flutterWebSizeTest/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"flutterWebSizeTest/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"flutterWebSizeTest/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"flutterWebSizeTest/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"flutterWebSizeTest/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"flutterWebSizeTest/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"flutterWebSizeTest/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"flutterWebSizeTest/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"flutterWebSizeTest/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"flutterWebSizeTest/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"flutterWebSizeTest/.git/index": "3029dcc79fd760f2a45c47adae958621",
"flutterWebSizeTest/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"flutterWebSizeTest/.git/logs/HEAD": "6ebfa57e8c7f8e517dc8505df408aa5f",
"flutterWebSizeTest/.git/logs/refs/heads/main": "6ebfa57e8c7f8e517dc8505df408aa5f",
"flutterWebSizeTest/.git/logs/refs/remotes/origin/HEAD": "82d5bc70c497aaa8d25354f3e3dbe85a",
"flutterWebSizeTest/.git/logs/refs/remotes/origin/main": "a4a5f0f07a2056e8ade130b5641fc5c5",
"flutterWebSizeTest/.git/objects/03/1fa9c1558ef0846ff6ea3356dca236ec8847ab": "f7cbc1171d271da61decdd21c14bab0a",
"flutterWebSizeTest/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"flutterWebSizeTest/.git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
"flutterWebSizeTest/.git/objects/0a/090f2d9d291b370c52e0f92e71f01cb392c4e0": "f7eceb35411afc64fb0d7ff47a0f0137",
"flutterWebSizeTest/.git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
"flutterWebSizeTest/.git/objects/1f/0d993258bf0b1373b09212885ac2408f4d80f5": "bd93b7e4c3e3f532d95e16c30083f07e",
"flutterWebSizeTest/.git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
"flutterWebSizeTest/.git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
"flutterWebSizeTest/.git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
"flutterWebSizeTest/.git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
"flutterWebSizeTest/.git/objects/3b/4f1f5f6b8f4e31b4dd49fce9b5a51b079a5aa5": "b3463382a68f702dd18b90ca0640a6a5",
"flutterWebSizeTest/.git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
"flutterWebSizeTest/.git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
"flutterWebSizeTest/.git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
"flutterWebSizeTest/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"flutterWebSizeTest/.git/objects/4f/53cfdf8869e0bdbcab346543e1d4bb83947dcf": "1be36eb7bc07dc489fe126634f0ad4d4",
"flutterWebSizeTest/.git/objects/55/73d68e91a15ffe50bd3fa73259126fe0be999a": "2b29a2761aa4b38c9fffa0292f86c2ed",
"flutterWebSizeTest/.git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
"flutterWebSizeTest/.git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
"flutterWebSizeTest/.git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
"flutterWebSizeTest/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"flutterWebSizeTest/.git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
"flutterWebSizeTest/.git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
"flutterWebSizeTest/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"flutterWebSizeTest/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"flutterWebSizeTest/.git/objects/8c/363fbc4532ce7804bca8fee5540eb6397b1148": "ecaccdf75de7fb397349c51cf6dbbf56",
"flutterWebSizeTest/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"flutterWebSizeTest/.git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
"flutterWebSizeTest/.git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
"flutterWebSizeTest/.git/objects/a2/1d52fe30b839a89a7071ef58a0ca1310734684": "93fad5a258f29cb0d6b44fa47e744047",
"flutterWebSizeTest/.git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
"flutterWebSizeTest/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"flutterWebSizeTest/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"flutterWebSizeTest/.git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
"flutterWebSizeTest/.git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
"flutterWebSizeTest/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"flutterWebSizeTest/.git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
"flutterWebSizeTest/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"flutterWebSizeTest/.git/objects/da/fb0f680a3f17c7b984e0fbd1a607ae254c6e34": "5c60f64d858b6cb2d38cf17b991a0cd9",
"flutterWebSizeTest/.git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
"flutterWebSizeTest/.git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
"flutterWebSizeTest/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"flutterWebSizeTest/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"flutterWebSizeTest/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"flutterWebSizeTest/.git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
"flutterWebSizeTest/.git/refs/heads/main": "ca6bb98d5db15e11434886a3c7f1ef15",
"flutterWebSizeTest/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"flutterWebSizeTest/.git/refs/remotes/origin/main": "ca6bb98d5db15e11434886a3c7f1ef15",
"flutterWebSizeTest/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"flutterWebSizeTest/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"flutterWebSizeTest/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"flutterWebSizeTest/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutterWebSizeTest/assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"flutterWebSizeTest/assets/NOTICES": "7a1f472d38cdb4e55ea00cafcf535db9",
"flutterWebSizeTest/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"flutterWebSizeTest/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"flutterWebSizeTest/canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"flutterWebSizeTest/canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"flutterWebSizeTest/canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"flutterWebSizeTest/canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"flutterWebSizeTest/canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"flutterWebSizeTest/canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"flutterWebSizeTest/canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"flutterWebSizeTest/canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"flutterWebSizeTest/canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"flutterWebSizeTest/canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutterWebSizeTest/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutterWebSizeTest/flutter.js": "f393d3c16b631f36852323de8e583132",
"flutterWebSizeTest/flutter_bootstrap.js": "da81c8a252a64ac1d14b30f51cb6ab98",
"flutterWebSizeTest/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutterWebSizeTest/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutterWebSizeTest/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutterWebSizeTest/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutterWebSizeTest/index.html": "b275eefe54ea86afa8fab4b784d6fff5",
"flutterWebSizeTest/main.dart.js": "bd67babe4f761af41349927763d3b102",
"flutterWebSizeTest/manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"flutterWebSizeTest/version.json": "15235b5108d6a877ef74fe3317a96bf7",
"flutter_bootstrap.js": "3f2b6a00f5a85d37ec4d517c529c6335",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b275eefe54ea86afa8fab4b784d6fff5",
"/": "b275eefe54ea86afa8fab4b784d6fff5",
"main.dart.js": "bd67babe4f761af41349927763d3b102",
"main.dart.mjs": "2bf6547fdec4c228b6ab96ab04165473",
"main.dart.wasm": "5c7d6d543ebf459ca79cd1d3b4b1e366",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
