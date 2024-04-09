const express = require('express')
const router = express.Router()

router.post('/api/categories', (req, res) => {
    res.send('Här lägger vi till en kategori.')
})

router.get('/api/categories', (req, res) => {
    res.send('Här visar vi kategorier.')
})

module.exports = router