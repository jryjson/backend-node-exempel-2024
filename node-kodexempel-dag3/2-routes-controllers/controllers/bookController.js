exports.createBook = ((req, res) => {
    res.send('Här lägger vi till en bok.');
});

exports.getBooks = ((req, res) => {
    res.send('Här visar vi böcker.')
});
