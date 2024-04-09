const BookModel = require("../models/bookModel");

exports.getBooks = (async(req, res) => {
    try {
        const allBooks = await BookModel.find();
        return res.status(200).json(allBooks);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});

exports.getBook = (async(req, res) => {
    const { isbn } = req.params;
    try {
        const book = await BookModel.find({isbn: isbn});
        return res.status(200).json(book);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});

exports.createBook = (async(req, res) => {
    const { bookAuthor, bookTitle, bookIsbn, bookPrice, bookCategory1, bookCategory2 } = req.body;

    try {
        const newBook = new BookModel({author:bookAuthor, book:bookTitle, isbn:bookIsbn, price:bookPrice, categories:[bookCategory1,bookCategory2]});
        const insertedBook = await newBook.save();
        return res.status(201).json(insertedBook);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});

exports.updateBook = (async(req, res) => {
    const { bookAuthor, bookTitle, bookIsbn, bookPrice, bookCategory1, bookCategory2 } = req.body;

    try {
        await BookModel.updateOne({isbn: bookIsbn}, {
            author: bookAuthor,
            book: bookTitle,
            isbn: bookIsbn,
            price: bookPrice,
            categories: [bookCategory1, bookCategory2]
        });
        const updatedBook = await BookModel.find({isbn: bookIsbn});
        return res.status(200).json(updatedBook);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});

exports.deleteBook = (async(req, res) => {
    const { bookIsbn } = req.body;
    try {
        const deletedBook = await BookModel.deleteOne({isbn: bookIsbn});
        return res.status(200).json(deletedBook)
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});

exports.getBooksById = (async(req, res) => {
    const { id } = req.params;
    try {
        const book = await BookModel.findById(id);
        return res.status(200).json(book);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});

exports.deleteBookById = (async(req, res) => {
    const { id } = req.body;
    try {
        const deletedBook = await BookModel.findByIdAndDelete(id);
        return res.status(200).json(deletedBook);
    }
    catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
});