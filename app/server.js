const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const appName = process.env.APP_NAME || 'sample-aks-app';
const version = process.env.APP_VERSION || '1.0.0';

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from AKS via Azure DevOps pipeline',
    app: appName,
    version: version,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.listen(port, () => {
  console.log(`${appName} running on port ${port}`);
});

module.exports = app;