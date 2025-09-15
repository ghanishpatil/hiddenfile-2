// Minimal Node + Express server for an intentionally unattractive CTF challenge
// WARNING: Replace placeholder flag before production; do not expose real secrets on public servers.

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Plaintext flag endpoint
// WARNING: Replace placeholder flag before production; do not expose real secrets on public servers.
app.get('/flag', (req, res) => {
  res.type('text/plain');
  res.send('you are on the right path, just follow your goal\n');
});

// Actual flag file
// WARNING: Replace placeholder flag before production; do not expose real secrets on public servers.
app.get('/flag/goal.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile(path.join(__dirname, 'flag', 'goal.txt'));
});

app.listen(PORT, () => {
  console.log(`Ugly CTF challenge listening on http://localhost:${PORT}`);
});


