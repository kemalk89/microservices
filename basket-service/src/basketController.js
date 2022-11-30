function basketController(app, basketRepository) {
    app.get('/api/basket', async (req, res) => {
        const items = await basketRepository.find();
        res.send(items);
    });

    app.post('/api/basket', async (req, res) => {
        const { productId } = req.body;
        const doc = { productId };

        const item = await basketRepository.create(doc);

        res.send(201, item);
    });

    app.delete('/api/basket', async (req, res) => {
        const { name, description, price } = req.body;
        const doc = { name, description, price };

        await basketRepository.create(doc);

        res.sendStatus(201);
    });
}

module.exports = basketController;