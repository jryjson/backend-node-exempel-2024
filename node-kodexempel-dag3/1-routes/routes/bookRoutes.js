const express = require('express');
const router = express.Router();

router.post('/api/books', (req, res) => {
    res.send('Här lägger vi till en bok.');
});

router.get('/api/books', (req, res) => {
    res.send('Här visar vi böcker.');
});

module.exports = router;