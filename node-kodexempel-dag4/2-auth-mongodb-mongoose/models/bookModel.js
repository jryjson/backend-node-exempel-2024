const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    book: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    categories: {
        type: Array
    }
});

module.exports =  mongoose.model("book", BookSchema)