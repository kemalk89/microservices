const express = require('express');
const app = express();
const port = process.env.PORT || 3004;

app.get('/', (req, res) => {
  res.send('Hello from Basket Service!');
});

app.listen(port, () => {
  console.log(`Basket service API listening on port ${port}`);
});