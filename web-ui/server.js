const http = require('http');
const ejs = require('ejs');
const fs = require('fs');
const port = process.env.PORT || 3001;
const productServerUri = process.env.SERVER_URI || 'unknown';

const server = http.createServer((req, res) => {
    const tpl = fs.readFileSync('index.ejs');

    const view = ejs.render(tpl.toString(), { productServerUri });

    res.writeHead(200, {
        'content-type': 'text/html',
    });

    res.write(view);
    res.end();
});

server.listen(port);