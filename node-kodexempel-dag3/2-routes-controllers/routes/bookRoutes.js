const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/api/books', bookController.createBook);
router.get('/api/books', bookController.getBooks);

module.exports = router;