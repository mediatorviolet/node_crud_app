"use strict"

const express = require("express")
const app = express()

app.listen(5000, () => {
    console.log("server is listening port 5000")
})

app.get('/', (req, res) => {
    res.json('lol')
})