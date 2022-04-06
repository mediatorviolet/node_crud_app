const mongoose = require("mongoose")

const PeopleSchema = new mongoose.Schema({
    peopleId: Number,
    name: String,
    pseudo: String
})

module.exports = mongoose.model(
    'people', PeopleSchema, 'people'
)