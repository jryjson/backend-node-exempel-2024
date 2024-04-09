const express = require('express')
const app = express()
const port = 3000

// Vi inkluderar vår egen module mymodule
// ./ innebär att mymodule.js ligger i samma katalog
const addition = require('./mymodule')

app.get('/', function (req, res) {
    res.send("Summan är " + addition)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})