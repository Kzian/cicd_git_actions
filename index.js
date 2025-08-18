const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// NEW: health endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/time', (_req, res) => {
  res.json({ now: new Date().toISOString() });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = app; // export for testing
