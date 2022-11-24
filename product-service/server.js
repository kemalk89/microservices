const express = require('express');
const productController = require('./src/productController');
const productRepository = require('./src/productRepository');

const port = process.env.PORT || 3002;

const app = express();
app.use(express.json());

const _productRepository = productRepository();
productController(app, _productRepository);

app.listen(port, async () => {
  await _productRepository.connectDB();

  console.log(`Product service API listening on port ${port}`);
});
