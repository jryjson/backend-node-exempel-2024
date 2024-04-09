const express = require('express');
const app = express();
const port = 3000;

// Parse JSON bodies
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Använder static files (i mappen public)
// app.use anropas varje gång applikationen får en Request
app.use(express.static('public'));

// Första Middleware
app.get('/user/:id', (req, res, next) => {
    console.log('Id: ' + req.params.id);
    // Hoppar till vårat andra Middleware
    next();
});

// Andra Middleware
app.get('/user/:id', (req, res) => {
    //res.send('User ' + req.params.id);
    // Sparar från req.params
    const { id } = req.params;

    res.send(`Ditt id är ${ id }`);
});

app.post('/user', (req, res) => {
    // För att ta emot request body utan att kontrollera vad som tas emot
    // res.send(req.body)

    // Sparar från req.body
    const { firstname, lastname } = req.body;

    if (!firstname || firstname.trim().length < 1) {
        // res.send('Du har inte fyllt i ditt förnamn');
        return res.status(400).json({
            success: false,
            error: 'Du har inte fyllt i ditt förnamn',
        });
    }
    if (!lastname || lastname.trim().length < 1) {
        return res.status(400).json({
            success: false,
            error: 'Du har inte fyllt i ditt efternamn',
        });
    }
    res.send(`Ditt namn är: ${firstname} ${lastname}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));