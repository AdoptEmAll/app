const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    picture:{
        type: String
    },
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String, 
    },
    age: {
        type: Number
    },
    availability: {
        type: Boolean,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
}
)

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet