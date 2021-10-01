'use strict'

const express = require('express')
const fs = require ('fs')

const app = express()
const PORT = process.env.PORT || 8042;

app.get('/', (req,res)=> {
    fs.readFile('index.html', (err, data) =>{
        res.setHeader('content-Type', 'text/html')
        res.setHeader('content-Length', data.length);
        res.send(data);
    })
})

app.get('/stilar.css', (req, res) =>{
    fs.readFile('stilar.css', (err, data)=>{
        res.setHeader('content-type', 'text/css')
        res.setHeader('contetnt-Length', data.length)
        res.send(data);
    })

})
app.get('/anka', (req, res) =>{
    fs.readFile('lawe_1.jpg', (err, data)=>{
        res.setHeader('content-type', 'image/jpg')
        res.setHeader('contetnt-Length', data.length)
        res.send(data);
    })

})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })

