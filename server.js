'use strict';

const express = require('express');
const fs = require('fs');

const app = express();
const port = 8037;

app.use(express.static('public'));

app.get('/', (req, res) => {

    fs.readFile('public/index.html', (err, data) => {
        console.log(err);
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    });
    

});

app.listen(port);

console.log('Server up and running, listning on port: ' + port);