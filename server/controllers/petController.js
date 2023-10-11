const Pet = require('../models/petModels.js');


// Create a new pet
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


// Get all pets
const getPets = async(req, res) => {
    try {
        const pets = await Pet.find({});

        return res.status(200).send({
            count: pets.length,
            data: pets
        })
    } catch (err) {
        console.log('Error grabbing all pets', err.message);
        res.status(500).send({ message: err.message })
    }
}

// Get one pet
const getPet = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findById(id)
        return res.status(200).send(pet)
    } catch (err) {
        console.log({ "Could not get pet": err.message })
        res.status(500).send({ message: err })
    }
}

// Update a pet 
const updatePet = async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.availability ||
            !req.body.location ||
        ) {
            return res.status(400).send({
                message: 'Send all required fields(name, availability, and location)'
            });
        }

        const { id } = req.params
        const result = await Pet.findByIdAndUpdate(id, req.body);
    
        if (!result) {
            return res.status(404).json({
                message: 'Pet not found'
            });
        }
        return res.status(200).send({
            message: 'Pet Info Updated'
        }) ;
    } catch(err) {
        console.log({ 'Pet could not be updated': err.message })
        res.status(500).send({ message: err.message })
    }
}

// Delete Pet
const deletePet = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Pet.findByIdAndDelete(id);
        
        if (!result) {
            return res.status(404).json({ mesasge: 'Unable to delete pet' });
        }
        return res.status(200).send({ message: 'pet Removed' })
    } catch (err) {
        console.log({'Delete pet error': err.mesasge})
        return res.status(500).send({ message: err.message })
    }
}


module.exports = {
    createPet,
    getPets,
    getPet,
    updatePet,
    deletePet
}