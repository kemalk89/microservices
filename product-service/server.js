const { MongoClient } = require('mongodb');
const express = require('express');

const app = express();
const port = process.env.PORT || 3002;

async function connectToMongoDB(mongoHost, mongoDbPort, mongoDb, username, password) {
  const uri = `mongodb://${username}:${password}@${mongoHost}:${mongoDbPort}/${mongoDb}?authSource=admin`;

  const client = new MongoClient(uri);

  try {
    console.log('Trying to connect to mongodb service.');
    await client.connect();
    console.log('Successfully connected to mongodb.');
  } catch (e) {
    console.error(e);
  }
}

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

app.listen(port, async () => {
  const mongoDbHost = process.env['MONGODB_HOST'];
  const mongoDbPort = process.env['MONGODB_PORT'];
  const mongoDb = process.env['MONGODB_DB'];
  const mongoDbUser = process.env['MONGODB_DB_USER'];
  const mongoDbUserPw = process.env['MONGODB_DB_USER_PW'];
  await connectToMongoDB(mongoDbHost, mongoDbPort, mongoDb, mongoDbUser, mongoDbUserPw);

  console.log(`Product service API listening on port ${port}`);
});
