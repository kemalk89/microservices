const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.send('Hello from Order Service!');
});

app.get('/api/orders', (req, res) => {
  res.send('Order-Service: /api/orders');
});

app.listen(port, () => {
  console.log(`Order service API listening on port ${port}`);
});