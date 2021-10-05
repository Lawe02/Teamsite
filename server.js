'use strict';

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8037;

app.use(express.static('public'));

app.get('/', (req, res) => {

    fs.readFile('public/index.html', (err, data) => {
        console.log(err);
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    });
    

});

app.listen(PORT);

console.log('Server up and running, listning on port: ' + PORT);