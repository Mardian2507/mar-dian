if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let r={};const n=e=>s(e,t),d={module:{uri:t},exports:r,require:n};a[t]=Promise.all(i.map((e=>d[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/422-005d9b8b671300bc.js",revision:"005d9b8b671300bc"},{url:"/_next/static/chunks/664-dc9bc1d709843c0a.js",revision:"dc9bc1d709843c0a"},{url:"/_next/static/chunks/675-f67518be07486815.js",revision:"f67518be07486815"},{url:"/_next/static/chunks/726-fbaf31e437aad6cf.js",revision:"fbaf31e437aad6cf"},{url:"/_next/static/chunks/a03c21c4-71f5cad8338ae7cb.js",revision:"71f5cad8338ae7cb"},{url:"/_next/static/chunks/framework-ffee79c6390da51e.js",revision:"ffee79c6390da51e"},{url:"/_next/static/chunks/main-3adb022ac387fc2a.js",revision:"3adb022ac387fc2a"},{url:"/_next/static/chunks/pages/404-7086971821c20a89.js",revision:"7086971821c20a89"},{url:"/_next/static/chunks/pages/_app-74947e100023922f.js",revision:"74947e100023922f"},{url:"/_next/static/chunks/pages/_error-8e848193de3c139c.js",revision:"8e848193de3c139c"},{url:"/_next/static/chunks/pages/contact-839e2133de219d00.js",revision:"839e2133de219d00"},{url:"/_next/static/chunks/pages/gallery-f1a04fd9676f7247.js",revision:"f1a04fd9676f7247"},{url:"/_next/static/chunks/pages/gallery/%5Btitle%5D-7a4391635b9236be.js",revision:"7a4391635b9236be"},{url:"/_next/static/chunks/pages/index-1aa0376221d9a25b.js",revision:"1aa0376221d9a25b"},{url:"/_next/static/chunks/pages/project1-24fa1b092f89caf2.js",revision:"24fa1b092f89caf2"},{url:"/_next/static/chunks/pages/project2-9a91c4da3461154e.js",revision:"9a91c4da3461154e"},{url:"/_next/static/chunks/pages/project3-e722a5d74a334c01.js",revision:"e722a5d74a334c01"},{url:"/_next/static/chunks/pages/project4-b917ce270fedd990.js",revision:"b917ce270fedd990"},{url:"/_next/static/chunks/pages/projects-db7ab457725b3ba7.js",revision:"db7ab457725b3ba7"},{url:"/_next/static/chunks/pages/skills-afd849228ec26250.js",revision:"afd849228ec26250"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1515c7250ec9b99c.js",revision:"1515c7250ec9b99c"},{url:"/_next/static/css/ab4ab489fe0da592.css",revision:"ab4ab489fe0da592"},{url:"/_next/static/media/avatar1.4142cef1.webp",revision:"cd1ee4489a756f12edb9d19c1bbaa0c7"},{url:"/_next/static/media/avatar2.9b3cbfc9.webp",revision:"0aeba6a66f5b4097f39c780978c1de35"},{url:"/_next/static/media/avatar3.fa104515.webp",revision:"897ea6982a9f781e5fd40ae5d63cb0ab"},{url:"/_next/static/media/avatar4.a66dec47.webp",revision:"caadefe830f1647dc7ac781a7d621e75"},{url:"/_next/static/media/avatar5.ff76297d.webp",revision:"fac6075cea5d3e89599bbda75dfd010a"},{url:"/_next/static/media/avatarClose.1e79ff63.webp",revision:"1e49739d7c50aba1e96def4fce560e3b"},{url:"/_next/static/media/crypto.0e382768.jpg",revision:"e49dda730890992356f27f1897d7546d"},{url:"/_next/static/media/ft1.01d8fbe0.webp",revision:"0178243d2fc20a4abf640002df5115df"},{url:"/_next/static/media/ft10.507d006b.webp",revision:"0c2ae52004d37b7b65e866042e80ec50"},{url:"/_next/static/media/ft11.4fda3600.webp",revision:"4ea1960deae55eef8d7014604c32eec9"},{url:"/_next/static/media/ft2.c7706547.webp",revision:"7a74d3abc76aa867c0f2dfa7ab00ed73"},{url:"/_next/static/media/ft3.58280eb4.webp",revision:"f16308d2b2deff55bdf69d53ebaad0e0"},{url:"/_next/static/media/ft4.e62be349.webp",revision:"3dbe105aa47872bd615f160b6a17fae2"},{url:"/_next/static/media/ft5.8af4e867.webp",revision:"b7e23ab42e58d42f5e9c105cc116abdb"},{url:"/_next/static/media/ft6.f19501a3.webp",revision:"b9c2834ca6c1d1ce1e28e0d564fac25c"},{url:"/_next/static/media/ft7.8136092d.webp",revision:"7aa87d3669e07071e1bb7e24918e8de8"},{url:"/_next/static/media/ft8.7eff6403.webp",revision:"63f293503b2ae0291db18f71f6fe932a"},{url:"/_next/static/media/ft9.bef0509c.webp",revision:"9c4f6f6fadb18516900870f85fd8b782"},{url:"/_next/static/pKTF5n74NH86dy3anpNf-/_buildManifest.js",revision:"425b30599d2fbe8c49f38461fb1e5a5d"},{url:"/_next/static/pKTF5n74NH86dy3anpNf-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/audio/About-Me.mp3",revision:"0632b24dfac372c3154ef4ca4d38ac0d"},{url:"/assets/audio/Bella-Ciao.mp3",revision:"93a0eb03743cf8961dbc9827ff57a7ce"},{url:"/assets/audio/Hi-I'm-Mardian.mp3",revision:"1ba06d0ee898b9834e0dd0889336b8ea"},{url:"/assets/audio/Let's-Build.mp3",revision:"f013ea699dffdf91ca689d713867dee4"},{url:"/assets/audio/Let's-Talk.mp3",revision:"0cbaa4a4eae37775f6aa8e86923f2a1d"},{url:"/assets/audio/Mamza-Wonderland.mp3",revision:"240d76ba97b39e1af5c05f18532d7913"},{url:"/assets/audio/Spirited-Away.mp3",revision:"5f50fdc049444f087f145ca3c138d349"},{url:"/assets/audio/Welcome.mp3",revision:"abf09efc21e435ca978929212684885a"},{url:"/assets/avatar/avatar1.webp",revision:"cd1ee4489a756f12edb9d19c1bbaa0c7"},{url:"/assets/avatar/avatar2.webp",revision:"0aeba6a66f5b4097f39c780978c1de35"},{url:"/assets/avatar/avatar3.webp",revision:"897ea6982a9f781e5fd40ae5d63cb0ab"},{url:"/assets/avatar/avatar4.webp",revision:"caadefe830f1647dc7ac781a7d621e75"},{url:"/assets/avatar/avatar5.webp",revision:"fac6075cea5d3e89599bbda75dfd010a"},{url:"/assets/avatar/avatarClose.webp",revision:"1e49739d7c50aba1e96def4fce560e3b"},{url:"/assets/bg1.webp",revision:"5cac983b027c6556b310ab7a80236949"},{url:"/assets/bg2.webp",revision:"707d298b2331287f9b6fc2d004431de4"},{url:"/assets/bgMe.webp",revision:"c661e79b9f067ad8a8aa0f29ae17f527"},{url:"/assets/footer/ft1.webp",revision:"0178243d2fc20a4abf640002df5115df"},{url:"/assets/footer/ft10.webp",revision:"0c2ae52004d37b7b65e866042e80ec50"},{url:"/assets/footer/ft11.webp",revision:"4ea1960deae55eef8d7014604c32eec9"},{url:"/assets/footer/ft2.webp",revision:"7a74d3abc76aa867c0f2dfa7ab00ed73"},{url:"/assets/footer/ft3.webp",revision:"f16308d2b2deff55bdf69d53ebaad0e0"},{url:"/assets/footer/ft4.webp",revision:"3dbe105aa47872bd615f160b6a17fae2"},{url:"/assets/footer/ft5.webp",revision:"b7e23ab42e58d42f5e9c105cc116abdb"},{url:"/assets/footer/ft6.webp",revision:"b9c2834ca6c1d1ce1e28e0d564fac25c"},{url:"/assets/footer/ft7.webp",revision:"7aa87d3669e07071e1bb7e24918e8de8"},{url:"/assets/footer/ft8.webp",revision:"63f293503b2ae0291db18f71f6fe932a"},{url:"/assets/footer/ft9.webp",revision:"9c4f6f6fadb18516900870f85fd8b782"},{url:"/assets/gallery/1.webp",revision:"c92c4f0e8abd67536d721b2b2b3cc96f"},{url:"/assets/gallery/10.webp",revision:"5f579c8310423ef425dda83dbc4ff920"},{url:"/assets/gallery/11.webp",revision:"22dfbe29e470557904e29353ba755329"},{url:"/assets/gallery/12.webp",revision:"5bce5bb515abf089f663a67b0870f658"},{url:"/assets/gallery/13.webp",revision:"3830d53a6870e6c8f3702cb0a8217727"},{url:"/assets/gallery/14.webp",revision:"8c48725e4ecd59624f5ba1ef58392d1c"},{url:"/assets/gallery/15.webp",revision:"7da15229a5dd8b309f3880bfcd1603ab"},{url:"/assets/gallery/16.webp",revision:"807a69ad3b33a9d57fac5b840cd36b7b"},{url:"/assets/gallery/17.webp",revision:"1ff92dd854132b4e9c5cb6812ed2e424"},{url:"/assets/gallery/18.webp",revision:"504274c0cdaa4da140bd780303c3d7cd"},{url:"/assets/gallery/2.webp",revision:"567d9cbf7e1e1bc83affde736926b8c9"},{url:"/assets/gallery/3.webp",revision:"d4ee462565961a4d554ef9d9512b9fc5"},{url:"/assets/gallery/4.webp",revision:"1b3ba9c3dd1edf5167bb256c86b8ed67"},{url:"/assets/gallery/5.webp",revision:"5ec98120f7a42edf869c2c740d764cd4"},{url:"/assets/gallery/6.webp",revision:"6cf52377676a4a3d9136b5000dd3125c"},{url:"/assets/gallery/7.webp",revision:"b4ac748b818e07e554037ef79153f1c0"},{url:"/assets/gallery/8.webp",revision:"e7b8361aea25c2df3639b983699386e0"},{url:"/assets/gallery/9.webp",revision:"de6087bf454ddb6ba82d95b05ffc0faa"},{url:"/assets/img/bgsea.webp",revision:"ec2b29b7280397e08a7be59eb4ec1753"},{url:"/assets/img/bgstone.webp",revision:"ce6f121b535b5437b9c78d17550393f5"},{url:"/assets/img/bird.webp",revision:"862d228b0e7729fa8ad60f0aedfaf48f"},{url:"/assets/img/me.webp",revision:"b52fbde30cdd71857dc2dfd63d866ed3"},{url:"/assets/img/my.webp",revision:"5c6cceb5685c558731fd9dcb57ecae44"},{url:"/assets/logoMy.webp",revision:"a4bedc922a884877c56f65e963ac5148"},{url:"/assets/me.webp",revision:"b3515993547d5aad3d9b9e995f15b592"},{url:"/assets/projects/crypto.jpg",revision:"e49dda730890992356f27f1897d7546d"},{url:"/assets/projects/netflix.jpg",revision:"d77cdd3b56c8ddef1e037e8e699a78df"},{url:"/assets/projects/property.jpg",revision:"46a86ce1730402970814fde721cc066d"},{url:"/assets/projects/twitch.jpg",revision:"8f81d0953b9740dc30d177c7e77067a9"},{url:"/assets/skills/css.png",revision:"cf71a98c6bc707f2d070388c7afcb0c9"},{url:"/assets/skills/firebase.png",revision:"80683bb1038b7b7ef66b2160dfa45416"},{url:"/assets/skills/github1.png",revision:"f6a18dcb8592bedec69dc122d869720c"},{url:"/assets/skills/html.png",revision:"a80a90015e4a63d3cf6a71875f27937e"},{url:"/assets/skills/javascript.png",revision:"68777e9738cf44a28fe3db67e269f224"},{url:"/assets/skills/nextjs.png",revision:"96eab4c87005da913dd072edf399c4c0"},{url:"/assets/skills/react.png",revision:"1b28808441932b7571626b4edcc307fe"},{url:"/assets/skills/tailwind.png",revision:"4d88ca033fd854136a7695046e8910d4"},{url:"/favicon.ico",revision:"c303341913e0618f210acf640a12b39a"},{url:"/icon-192x192.png",revision:"4b5089d8e85c015d1eada32b328f49b7"},{url:"/icon-256x256.png",revision:"29f275217e01aa25cc69136acd600b25"},{url:"/icon-384x384.png",revision:"94b5b4c44ba8068e8b9987171e3c563c"},{url:"/icon-512x512.png",revision:"28d159ca3764df28ab62cf1a0feaf328"},{url:"/manifest.json",revision:"a11402ed65f1eac83cac123159975c73"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
