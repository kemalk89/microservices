module.exports = {
    DB: process.env['MONGODB_DB'] ?? 'product_service_db',
    HOST: process.env['MONGODB_HOST'] ?? 'localhost',
    PORT: process.env['MONGODB_PORT'] ?? 27017,
    USER: process.env['MONGODB_DB_USER'] ?? 'username',
    PW: process.env['MONGODB_DB_USER_PW'] ?? 'password',
}