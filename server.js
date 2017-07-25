const config = require('./webpack/config');
const express = require('express');
const proxyMiddleware = require('http-proxy-middleware');
const app = express();
const proxy = proxyMiddleware(config.apiUrl, {
  changeOrigin: true,
  secure: false
});


function sendIndex(req, res) {
  res.sendFile(`${__dirname}/dist/index.html`);
}


app.use(express.static('./dist'));
app.use(proxy);
app.get('/app', sendIndex);
app.get('/maintenance-mode', sendIndex);
app.get('/enter-company-code', sendIndex);
app.set('port', config.devPort);
app.listen(config.devPort, () => {
  console.log(`server is running on port: ${config.devPort}`);
});
