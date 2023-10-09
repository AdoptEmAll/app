const express = require('express');
const router = express.Router();
const { createShelter, getShelters, getShelter, updateShelter, deleteShelter } = require('../controllers/shelterController')


// Create Shelter
router.post('/', createShelter);

// Get All Shelters
router.get('/', getShelters);

// Get One Shelter
router.get('/:id', getShelter);

// Update Shelter
router.put('/:id', updateShelter);

// Delete Shelter
router.delete('/:id', deleteShelter);

module.exports = router;