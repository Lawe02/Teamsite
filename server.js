'use strict'

const express = require('express')
const fs = require ('fs')

const app = express()
const port = process.env.PORT || 8042;

app.get('/index.html', (req,res)=> {
    fs.readFile('index.html', (err, data) =>{
        res.setHeader('content-Type', 'text/html')
        res.setHeader('content-Length', data.length);
        res.send(data);
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

