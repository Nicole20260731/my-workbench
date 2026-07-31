/* Nicole工作台 Service Worker — 离线缓存
 * 策略：应用外壳缓存优先 + 网络回源更新；页面导航网络优先 + 缓存兜底（断网可开）
 * 每次部署更新 VERSION 号即可让旧缓存失效 */
const VERSION = 'v20260801-1';
const CACHE = 'nicole-workbench-' + VERSION;
const ASSETS = [
    './',
    './index.html',
    './tarot-data.js',
    './bazi-data.js',
    './vocab-data.js',
    './download.html'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE)
            .then(c => c.addAll(ASSETS))
            .catch(() => {})
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(k => k.startsWith('nicole-workbench-') && k !== CACHE)
                    .map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', e => {
    if (e.request.method !== 'GET') return;
    const url = new URL(e.request.url);

    // 只处理同源请求；外部 API（天气、Supabase等）直接放行
    if (url.origin !== location.origin) return;

    // 页面导航：网络优先，失败时用缓存兜底（保证断网也能打开）
    if (e.request.mode === 'navigate') {
        e.respondWith(
            fetch(e.request)
                .then(res => {
                    if (res && res.status === 200) {
                        const clone = res.clone();
                        caches.open(CACHE).then(c => c.put('./index.html', clone));
                    }
                    return res;
                })
                .catch(() => caches.match('./index.html').then(c => c || caches.match('./')))
        );
        return;
    }

    // 静态资源：缓存优先，后台更新
    e.respondWith(
        caches.match(e.request).then(cached => {
            const fetchPromise = fetch(e.request).then(res => {
                if (res && res.status === 200) {
                    const clone = res.clone();
                    caches.open(CACHE).then(c => c.put(e.request, clone));
                }
                return res;
            }).catch(() => cached);
            return cached || fetchPromise;
        })
    );
});
