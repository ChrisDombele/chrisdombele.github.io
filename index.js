/*jshint esversion: 6*/

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');

fs.readFile('index.html', (err, data) => {
    if (err) throw err;

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(data);
        res.end();
    });

    server.listen(port, hostname, (err) => {
        if (err) {
            consol.log("something went wrong", err);
        }
        console.log(`listening on port ${port}...`);
    });
});

