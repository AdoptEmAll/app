const express = require('express');
const router = express.Router();
const { createPet, getPets, getPet, updatePet, deletePet } = require('../controllers/petController')


// Create Pet
router.post('/', createPet);

// Get All Shelters
router.get('/', getPets);

// Get One Shelter
router.get('/:id', getPet);

// Update Shelter
router.put('/:id', updatePet);

// Delete Shelter
router.delete('/:id', deletePet);



module.exports = router;