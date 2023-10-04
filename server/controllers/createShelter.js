const Shelter = require('../models/shelterModels.js');

// Create a new Shelter
const createShelter = async(req, res) => {
    try {
        if (
            !req.body.location ||
            !req.body.name
        ) {
            return res.status(400).send({
                message: 'Missing Location or Name for Shelter'
            })
        }
        const newShelter = {
            name: req.body.name,
            location: req.body.location,
            pets: req.body.pets,
            availability: req.body.availability
        }

        const shelter = await Shelter.create(newShelter)
        return res.status(201).send(shelter)

    } catch (err) {
        console.log("Creating new shelter error", err.message);
        res.status(500).send({ message: "error creating a new shelter, check console for more info" })
    }
}


module.exports = {
    createShelter
}