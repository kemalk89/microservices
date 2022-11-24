const { MongoClient } = require('mongodb');
const mongoConfig = require('./mongoConfig');

function productRepository() {
    let mongoClient;

    return {
        connectDB: async () => {
            const mongoDbHost = mongoConfig.HOST;
            const mongoDbPort = mongoConfig.PORT;
            const mongoDb = mongoConfig.DB;
            const mongoDbUser = mongoConfig.USER;
            const mongoDbUserPw = mongoConfig.PW;
            const uri = `mongodb://${mongoDbUser}:${mongoDbUserPw}@${mongoDbHost}:${mongoDbPort}/${mongoDb}?authSource=admin`;

            mongoClient = new MongoClient(uri);

            try {
                console.log('Trying to connect to mongodb service.');
                await mongoClient.connect();
                console.log('Successfully connected to mongodb.');
            } catch (e) {
                console.error(e);
            }
        },
        create: async (doc) => {
            await mongoClient.db(mongoConfig.DB).collection('Products').insertOne(doc);
        },
        find: async () => {
            const items = [];
            const cursor = await mongoClient.db(mongoConfig.DB).collection('Products').find();

            await cursor.forEach((item) => items.push(item));
            return items;
        }
    }

}

module.exports = productRepository;