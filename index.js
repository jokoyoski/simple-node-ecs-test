// app.js

const express = require('express');
const app = express();
const port = 3000; // You can change the port if needed

// Endpoint to return random numbers
app.get('/api/v1/result', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  res.json({ result: randomNumber });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
