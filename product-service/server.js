const express = require('express');
const app = express();
const port = 3002;

app.get('/api/products', (req, res) => {
  res.send('Hello from Product Service!');
});

app.listen(port, () => {
  console.log(`Product service API listening on port ${port}`);
});