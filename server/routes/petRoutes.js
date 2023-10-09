const express = require('express');
const router = express.Router();
const { createPet } = require('../controllers/createPet')


// Create Pet
router.post('/', createPet);


module.exports = router;