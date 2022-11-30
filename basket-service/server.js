const express = require('express');
const basketController = require('./src/basketController');
const basketRepository = require('./src/basketRepository');

const port = process.env.PORT || 3004;

const app = express();
app.use(express.json());

const _basketRepository = basketRepository();
basketController(app, _basketRepository);

app.listen(port, async () => {
  await _basketRepository.connectDB();

  console.log(`Basket service API listening on port ${port}`);
});
