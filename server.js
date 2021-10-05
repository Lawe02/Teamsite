'use strict'

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8034;

app.use(express.static('public'));

app.get('/', (req, res) => {
    fs.readFile('public/index.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
       res.setHeader('Content-lengt', data.length)
        res.send(data);

    })
})




app.listen(PORT, () => {
    console.log(`the app listen to ${PORT}`);
})