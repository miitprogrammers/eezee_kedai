const http = require('http');

function check(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      const ok = res.statusCode >= 200 && res.statusCode < 400;
      res.resume();
      ok ? resolve(true) : reject(new Error(`${url} returned ${res.statusCode}`));
    });
    req.on('error', reject);
    req.setTimeout(5000, () => {
      req.abort();
      reject(new Error(`${url} timeout`));
    });
  });
}

(async () => {
  try {
    const base = process.env.BASE_URL || 'http://127.0.0.1:3000';
    console.log('Checking docs at', base);
    await check(`${base}/api/docs/openapi.json`);
    await check(`${base}/api/docs/swagger/`);
    console.log('Docs endpoints OK');
    process.exit(0);
  } catch (err) {
    console.error('Docs smoke failed:', err.message);
    process.exit(2);
  }
})();
