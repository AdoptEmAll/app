const mongoose = require('mongoose');
const Pet = require('./petModels');

const shelterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    pets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
    }],
}
)

const Shelter = mongoose.model('Shelter', shelterSchema)

module.exports = Shelter