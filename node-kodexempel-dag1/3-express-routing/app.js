const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>  {
    res.send('Hello World!');
});

app.post('/', (req, res) =>  {
    res.send('Har fått en POST request');
});

app.get('/user', (req, res) =>  {
    res.send('Har fått en GET request till /user');
});

app.post('/user', (req, res) =>  {
    res.send('Har fått en POST request till /user');
});

app.put('/user', (req, res) =>  {
    res.send('Har fått en PUT request till /user');
});

app.delete('/user', (req, res) =>  {
    res.send('Har fått en DELETE request till /user');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));