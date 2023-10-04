const mongoose = require('mongoose');

const shelterSchema = mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
    },
    pets: {
        type: [String]
    },
    name: {
        type: String,
        required: true,
    }
}
)

const Shelter = mongoose.model('Shelter', shelterSchema)

module.exports = Shelter