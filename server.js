const express = require('express');
const path = require('path');

const app = express();

// Set the public folder as the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for any other GET request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
