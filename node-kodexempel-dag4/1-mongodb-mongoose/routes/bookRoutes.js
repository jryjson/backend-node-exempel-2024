const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/api/books', bookController.getBooks);
router.get('/api/books/:isbn', bookController.getBook);
router.post('/api/books', bookController.createBook);
router.put('/api/books', bookController.updateBook);
router.delete('/api/books', bookController.deleteBook);
router.get('/api/books-byid/:id', bookController.getBooksById);
router.delete('/api/books-byid', bookController.deleteBookById);

module.exports = router;