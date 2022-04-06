"use strict"
require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 5000
const PeopleModel = require("./Schema/PeopleSchema")

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`server is listening port ${port}`)
})

mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", () => {
    console.log("Connected successfully to mongo")
})

const peopleCollection = db.collection('people')

app.get('/', (req, res) => {
    const cursor = peopleCollection.find().toArray()
        .then(result => res.render('index.ejs', { people: result }))
        .catch(err => console.log(err))
})
app.post('/people', (req, res) => {
    console.log(req.body)
    peopleCollection.insertOne(req.body)
        .then((result) => {
            console.log(result)
        })
        .catch(err => console.log(err))
})
