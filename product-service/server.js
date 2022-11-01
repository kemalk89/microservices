const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Product Service!!!!');
});

app.get('/api/products', (req, res) => {
  res.send('Product Service: /api/products');
});

app.get('/api/product/:id', (req, res) => {
  res.send('Product Service: /api/product');
});

app.listen(port, () => {
  console.log(`Product service API listening on port ${port}`);
});