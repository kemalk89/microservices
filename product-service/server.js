const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: "Keyboard" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Monitor" },
    { id: 4, name: "Laptop" }
  ];
  res.send(products);
});

app.get('/api/product/:id', (req, res) => {
  res.send('Product Service: /api/product');
});

app.get('/', (req, res) => {
  res.send('Hello from Product Service!!!!');
});

app.listen(port, () => {
  console.log(`Product service API listening on port ${port}`);
});