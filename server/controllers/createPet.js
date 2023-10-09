const Shelter = require('../models/petModels.js');

const createPet = async(req, res) => {
    try {
        if (
            !req.body.location ||
            !req.body.name
        ) {
            return res.status(400).send({
                message: 'Missing Location or Name for Shelter'
            })
        }
        const newPet = {
            picture: req.body.picture,
            name: req.body.name,
            breed: req.body.breed,
            age: req.body.age,
            availability: req.body.availability,
            location: req.body.location,
        }

        const pet = await Pet.create(newPet)
        return res.status(201).send(pet)

    } catch (err) {
        console.log("Unable to create new pet", err.message);
        res.status(500).send({ message: "error creating a new pet, check console for more info" })
    }
}


module.exports = {
    createPet
}