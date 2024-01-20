const express = require('express');
const {
  registerUser,
  loginUser,
  getCurrentUser
} = require('../controllers/userController.js');
const { protect } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/current', protect, getCurrentUser);

module.exports = router;