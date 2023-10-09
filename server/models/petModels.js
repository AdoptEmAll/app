const mongoose = require('mongoose');

const petrSchema = mongoose.Schema({
    picture:{
        type:
    },
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String, 
    },
    age: {
        type: Intger
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

const Pet = mongoose.model('Pet', petrSchema)

module.exports = Pet