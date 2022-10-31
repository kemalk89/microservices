const express = require('express');
const app = express();
const port = 3001;

app.get('/api/basket', (req, res) => {
  res.send('Hello from Basket Service!');
});

app.listen(port, () => {
  console.log(`Basket service API listening on port ${port}`);
});