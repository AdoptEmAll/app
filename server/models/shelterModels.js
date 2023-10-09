const mongoose = require('mongoose');
const Pet = require('./Pet');

const shelterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    pets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
    }],
}
)

const Shelter = mongoose.model('Shelter', shelterSchema)

module.exports = Shelter