'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cb03134dad682b13c6252c2e42ecb602",
"index.html": "d57dc932427a703cc11efa73ffeb9966",
"/": "d57dc932427a703cc11efa73ffeb9966",
"main.dart.js": "f6f95c364c1942e0350f44d7efca46ad",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "624ec155aaef33b18ebbcda3e8a0061f",
"icons/apple-icon.png": "9daf9f1d086759904caff9acfd5e628e",
"icons/apple-icon-144x144.png": "9931ff9cb02551bd57c07c9c682c8495",
"icons/android-icon-192x192.png": "8a3dd3c54c0f526998c69078480d8572",
"icons/apple-icon-precomposed.png": "9daf9f1d086759904caff9acfd5e628e",
"icons/apple-icon-114x114.png": "9b4f506f2349e87285adec673d54e33e",
"icons/ms-icon-310x310.png": "9512b79350c236871d39a15f8a6513bc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/ms-icon-144x144.png": "9931ff9cb02551bd57c07c9c682c8495",
"icons/apple-icon-57x57.png": "1ba9d278dac45527a89308e958aa1aed",
"icons/apple-icon-152x152.png": "5dd0af468ec84f9f52cb3adfafb8e876",
"icons/ms-icon-150x150.png": "eb1ba98fb80350efe855ed39268ff26b",
"icons/android-icon-72x72.png": "c1623234d74ba0820b2fcbb8dc3a2d03",
"icons/android-icon-96x96.png": "92e2b5a924a75967f0f1184f9429a12f",
"icons/android-icon-36x36.png": "09e1d5ccc12d72827ba88e737305042b",
"icons/apple-icon-180x180.png": "7ec5e589cbd332602a44b7f2bc2262af",
"icons/favicon-96x96.png": "92e2b5a924a75967f0f1184f9429a12f",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "a9de5a339b530ff5e07a2bc280a2a635",
"icons/apple-icon-76x76.png": "4b86af8a5fadbd94511dad5da2ee74a8",
"icons/apple-icon-60x60.png": "e4a3356181b4c251795a5136fada8546",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "9931ff9cb02551bd57c07c9c682c8495",
"icons/apple-icon-72x72.png": "c1623234d74ba0820b2fcbb8dc3a2d03",
"icons/apple-icon-120x120.png": "ab2ac5f98b486d9b98fe2d07fc57fbe1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "1d5c1fb960c8b53d01fdec1cb10dbb43",
"icons/ms-icon-70x70.png": "65aa7efbfebabae70bea84c5f8e3df9e",
"manifest.json": "ee8178e6f38a358f93bb15bcfbcf3190",
".git/config": "ec77737c191bd11b5f6d8225f473e344",
".git/objects/0d/26836b38000b7df86813d46b91dc17dc0199dd": "3c4be8468d0b48089c3151ad5f6f1e18",
".git/objects/0d/2a33352d431bcaa1b074a40a634cf059e32a30": "19aa568746d6648f2c4b7f14bdbb6e36",
".git/objects/59/5927830703bb5a7d15391c6f042fa4672d4bea": "ce78ab5bec75e909ac7a14d53593ef81",
".git/objects/0c/c167bc7f06be2b2b13226ba1ded9e73f10d571": "72cc4cb40cf7a8cbb976b0677f6c8290",
".git/objects/68/1eb74d7b0f24817c63705642543c3a678ac1dc": "b5c42c959d09372938bbc22317b84b3e",
".git/objects/57/6feaebf8c3256fede3d91c190b0418331df232": "74b712118e3115a123671fd886b14a5a",
".git/objects/6a/9532bdeb5cdb6a68a8a96f27806a78e8373531": "b68aedd106f970a5c50cd5ddfb2b5e55",
".git/objects/58/1b85fd78e8b7098b0119eb398afc78eea23fef": "f54ebd87dbd8f3a4f3fbab3977e4b946",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/0e/c9e107630069a6a95c13676d1da4c4f6aa4daf": "e27f5b60ec35f0b153bf130199a5c294",
".git/objects/02/a145fd9fc3be14c9840b6aeb7c6b0d9554e718": "0be9174981a3e1a81e595b37a800e9fc",
".git/objects/b5/86b155b58208aa248d52cc90fa293a649f1943": "0a2400ef95c8ad31957eeb5fa123be73",
".git/objects/ac/fb6870388dc42bfb8984ae9285a54da059f536": "16fecb177e6c673d326e66a938f9398a",
".git/objects/e5/6f774e74f3be862fee09e617ab0c5a9aa18a45": "a91a34d89248ebc3306bd3b1800e665f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/e8b56197468e48e7df44da56081a9e8707d0a8": "c78031da5c580944207682ea636aedc9",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/ed/06896e05a4cf0e0205d0ed82e0cde7a82a4fad": "7470d7e061374826e2c3eb2b70187333",
".git/objects/4e/cfbefabea0cc91faa7d8d43beff672e92ffbfd": "29477664aeec2256daf022148880c586",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/091206bd82874680cf46ebe45e6beb62769807": "0fa597f6f599d3aa75f740f2d641bd5b",
".git/objects/7c/cf0a0409e3072f2216ff7093bd499c94c7031a": "1c2e726e5f41b81f5dba9a667db69028",
".git/objects/16/707ea8b3819cf1a597167ab90d035bf3c56a7d": "24b8e86874223e66b1a0b4cda718b402",
".git/objects/16/0b5581fb8f8f3d327032cbdf7923fcf5c75c06": "7899e63f7b6ef56e8c1e7d0b209daa09",
".git/objects/42/c53ba5d536355f1cb2fbc6eb7ed00a7907221c": "95c55886f7fc867d08edcc3838edb209",
".git/objects/1f/908ebe8c8ff3812efe2614d469ef3b67f915c0": "bf0deec1dc07bd6ece61e1efdba1ae78",
".git/objects/74/1eb23a3e13c40723366fca4a6f40c0478612a8": "2e6dc7d0a488152931c9220f1856c4a6",
".git/objects/17/d56e515999be1041708c6d5794b775caf9d18f": "52ee1b23cf9f99df22eb4d2bbab69741",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/94809a45ac9aa879aaac219f2b834d9397c6db": "5dfea501ee64b77eb826d535199398eb",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/72/5d019c128b4fc47eeaa25f7bfde40c5d6abba6": "275d16f4bf746a6881c096ef9ce73fc5",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/efbc56d4565e21729e65d4291006acf7cd3d02": "f827414363d8f7ff4171a0876264bde5",
".git/objects/38/34d3b3cd6778bfd4c3dcef258644661c7d2252": "7c85d0d1ed60baac47816ca726eb0f1d",
".git/objects/36/9715ea746caeecb7f3b9fea2ff7e666e1c86ce": "739319e3d8dfd6835c7e7232b4c99cbe",
".git/objects/91/a58fee096cf0ffcd12012ce7617b7c0b318ea1": "92fad2ef6e350e6eb9eb90e79f9a32c6",
".git/objects/53/4c1dcc1df243d40bd56e133b83f92a4614bfea": "41156817d9a7994ee88804f3c25607dd",
".git/objects/08/67932cd13a96c14f4fb86d3a35320d448e76fa": "7ebd5c95d1956fad2297e3587461593a",
".git/objects/6d/5c0149997576a33a46004188117911c7307ae0": "f62ce415e01a1c2fa0f7f617bac666d7",
".git/objects/99/777506d4d4401e833c23ac2980af632a66f463": "78a78f6e645016b90e407196de9b5196",
".git/objects/0f/e3174d1fa9e44ff5ed540a8035f32f3e72f829": "569535376b28e18cd638e406b3212e50",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/dc/7c5d7becc629fdfbd9f977868b2f300f1b3ee6": "4d003db10655a9258532ff07bfd82299",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c2/c2fd9740a5682906322515b3c12477688902bb": "8236488efa32d767bf0ca25434966633",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/e9/3363cc440894553721a0c0cb70c9aa4181e894": "4db08083a767a53f3d7b78bc5722fe0a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/2b90d17a0be21c741d1618f2f01f662366a0bd": "82232839b3b1595ea219fd7456e7cb7b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/347c1ec02c5c0c379b63ad413e7fab91e38239": "99bb4643321a50597c55c80e9aadea84",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/49/2ca9c0e945d9831dc52d0ade841a0b2ef69111": "35f280bf6e7f1bec6f8dd644258b333e",
".git/objects/2b/d46218ed5c93a0d3f9cfacd15d6639151dd6c2": "89d945208329ce7ed9271575e6baa921",
".git/objects/7a/e8c86fa435e5678d9b2cce0fafe8c3bd5a3694": "b21f3ad40a28532691b8d849cde6b747",
".git/objects/7a/a1a0e39d4cc5f9fa9ce16368271c6751e4cf72": "fed082c75c19bbd7735d941cca984adc",
".git/objects/8e/41ab2e4465847b19eb5f57435e3f2ac0c316ee": "81cde5e848d2947198bf4cfe9a4d789c",
".git/objects/22/e2e76c14f91f3145b5b7754f7817fbfbeed6d8": "04acb08f92bbc86b31a3bfe9adac8d8d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c6c32dce1c0710e12ff55931854ac5e8",
".git/logs/refs/heads/main": "c6c32dce1c0710e12ff55931854ac5e8",
".git/logs/refs/remotes/origin/main": "a441ae8b93233e8e8b62aa5ef1ca8ba3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/refs/heads/main": "e14fd748737bf950f683ba72e000974a",
".git/refs/remotes/origin/main": "e14fd748737bf950f683ba72e000974a",
".git/index": "3e798a108a89a7e3b5cf47139115f8d0",
".git/COMMIT_EDITMSG": "c72e53bf0f09434b0134fbb37bc4469e",
"assets/AssetManifest.json": "4f4ef0c1405856ea005b2b53dcd284fe",
"assets/NOTICES": "6020fae66af37c072f57f569141ecff0",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/2_m.png": "191fda0eb90b28c8b5ffda26b55ce919",
"assets/assets/4_m.png": "70e31827871155f43b110bcea6990cf7",
"assets/assets/6_m.png": "d06502953c84810c5ee0637f5c767bd5",
"assets/assets/1_m.png": "525c7e3babaddff59d67ee830c5bd3c4",
"assets/assets/3_m.png": "4cd5809a2bfd50b31de15c9147316e2d",
"assets/assets/7_m.png": "fa0d11b43840b7041a58184e2de2aa4b",
"assets/assets/5_m.png": "12619cb1a378f472fa779aec2a29d95e",
"assets/assets/icn.png": "1a942462c867b9b987b1048efce0dffd",
"assets/assets/1_s.png": "c4e223f0639e9fc2b51b528c1db97ef3",
"assets/assets/google-play-badge.png": "52a75f022db39b2142eb120057f35ed2",
"assets/assets/3_s.png": "7d6c75007746c598dd4cf35c998e8213",
"assets/assets/appstore-badge.png": "a76626dde8528c05c76add5fb3eb824f",
"assets/assets/7_s.png": "ce9da511dbc959b90e0ebaadd3757961",
"assets/assets/5_s.png": "5fe1c4b2c7c1b9b14db3b5eb5b377b84",
"assets/assets/1%2520copy.png": "3f244971520ef2535bfecd43d1c265f0",
"assets/assets/2_s.png": "6a23d120aa74fd8b8a6cc9ddac48b348",
"assets/assets/4_s.png": "450e627fe3b5881d7bff2c7a6f056953",
"assets/assets/6_s.png": "2fd9543237c83f0edd9ee7f07477e403"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
