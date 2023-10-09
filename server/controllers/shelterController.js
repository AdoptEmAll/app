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
        }

        const shelter = await Shelter.create(newShelter)
        return res.status(201).send(shelter)

    } catch (err) {
        console.log("Creating new shelter error", err.message);
        res.status(500).send({ message: "error creating a new shelter, check console for more info" })
    }
}

// Get all shelters
const getShelters = async(req, res) => {
    try {
        const shelters = await Shelter.find({});

        return res.status(200).send({
            count: shelters.length,
            data: shelters
        })
    } catch (err) {
        console.log('Error grabbing all shelters', err.message);
        res.status(500).send({ message: err.message })
    }
}

// Get one shelter
const getShelter = async (req, res) => {
    try {
        const { id } = req.params;
        const shelter = await Shelter.findById(id)
        return res.status(200).send(shelter)
    } catch (err) {
        console.log({ "Could not get shelter": err.message })
        res.status(500).send({ message: err })
    }
}

// Update a shelter
const updateShelter = async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.location
        ) {
            return res.status(400).send({
                message: 'Send all required fields(name and location)'
            });
        }

        const { id } = req.params
        const result = await Shelter.findByIdAndUpdate(id, req.body);
    
        if (!result) {
            return res.status(404).json({
                message: 'Shelter no found'
            });
        }
        return res.stauts(200).send({
            message: 'Shelter Info Updated'
        }) ;
    } catch(err) {
        console.log({ 'Update shelter went wrong': err.message })
        res.status(500).send({ message: err.message })
    }
}

// Delete Shelter
const deleteShelter = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Shelter.findByIdAndDelete(id);
        
        if (!result) {
            return res.stauts(404).json({ mesasge: 'Unable to delete shelter' })
        }
        return res.status(200).send({ message: 'Shelter Removed' })
    } catch (err) {
        console.log({'Delete Shelter error': err.mesasge})
        return res.status(500).send({ message: err.message })
    }
}


module.exports = {
    createShelter,
    getShelters,
    getShelter,
    updateShelter,
    deleteShelter
}