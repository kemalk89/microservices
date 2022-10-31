const express = require('express');
const app = express();
const port = 3000;

app.get('/api/orders', (req, res) => {
  res.send('Hello from Order Service!');
});

app.listen(port, () => {
  console.log(`Order service API listening on port ${port}`);
});