const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUserAccount } = require('../controllers/accountController');


// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Get user profile
router.get('/profile', getUserProfile);

// Update user profile
router.put('/profile', updateUserProfile);

// Delete user account
router.delete('/profile', deleteUserAccount);

module.exports = router;
