// index.js

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to test node-sass integration (though it's outdated)
app.get('/styles', (req, res) => {
  res.send(`
    <link rel="stylesheet" href="/styles/main.css" />
    <h1>Testing outdated dependency (node-sass)</h1>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
