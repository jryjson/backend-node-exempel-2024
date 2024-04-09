const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Array för böcker
let books = [];

app.use(cors());
app.use(express.static('public'))

app.post('/books', (req, res) => {
    //const book = req.body
    const { bokForfattare, bokTitel, bokIsbn, bokPris } = req.body;

    console.log(`Sparar en bok med ${bokForfattare} ${bokTitel} ${bokIsbn} ${bokPris}`);

    books.push({bokForfattare, bokTitel, bokIsbn, bokPris});

    res.json('Du har lagt till en bok!');
})

app.get('/books', (req, res) => {
    res.json(books);
})

app.get('/books/:isbn', (req, res) => {
    const { isbn } = req.params;

    for (let book of books) {
        if (book.bokIsbn === isbn) {
            res.json(book);
            return;
        }
    }
    res.status(404).send('Vi kan inte hitta boken med det ISBN-numret');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));