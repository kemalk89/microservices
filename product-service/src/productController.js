function productController(app, productRepository) {
    app.get('/api/products', async (req, res) => {
        const items = await productRepository.find();
        res.send(items);
    });

    app.post('/api/products', async (req, res) => {
        const { name, description, price } = req.body;
        const doc = { name, description, price };

        await productRepository.create(doc);

        res.sendStatus(201);
    });

    app.get('/api/product/:id', (req, res) => {
        res.send('Product Service: /api/product');
    });

    app.get('/', (req, res) => {
        res.send('Hello from Product Service!!!!');
    });
}

module.exports = productController;