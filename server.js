// Simple Express server that serves /public and supports healthcheck
const express = require('express');
const path = require('path');

const app = express();

// Use PORT provided by Render (or fallback)
const PORT = process.env.PORT || 10000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Basic API / healthcheck
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// All other routes -> serve index.html (useful for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
