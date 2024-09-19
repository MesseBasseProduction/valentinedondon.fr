const express = require('express');
const path = require('path');
const compression = require('compression');
const zlib = require('node:zlib');
// App and preferences
const version = '1.0.0';
const port = 8050;
const app = express();
// Log server start
console.log(`${(new Date()).toISOString()} | valentinedondon.fr v${version} | Starting web server`);

// Ensure responses are compressed through this midleware
app.use(compression({
  level: zlib.constants.Z_BEST_COMPRESSION,
}));

// URL definitions
app.use('/assets', express.static(path.join(__dirname, '../../assets'), { // Serve static files
  maxAge: '864000000' // 10 days caching for app assets
}));

// Page urls
app.get('/',  (req, res) => {
console.log(`${(new Date()).toISOString()} | valentinedondon.fr v${version} | 200 ${req.originalUrl} page requested, return biography.html`);
res.sendFile(path.join(__dirname, '../../assets/html/index.html'));
});

// 404
app.use((req, res) => {
  console.log(`${(new Date()).toISOString()} | valentinedondon.fr v${version} | 404 ${req.originalUrl} page requested`);
  res.status(404).sendFile(path.join(__dirname, '../../assets/html/404.html'));
});

// Start server console
app.listen(port, () => {
  console.log(`${(new Date()).toISOString()} | valentinedondon.fr v${version} | Server started and listening on port ${port}`);
});
