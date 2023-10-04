const express = require('express');
const router = express.Router();
const { createShelter } = require('../controllers/createShelter')


// Create Shelter
router.post('/', createShelter);


module.exports = router;