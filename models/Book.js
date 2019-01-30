const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    authors: {
        type: [String],
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String,
        default: 'https://via.placeholder.com/200x200'
    },
    link: {
        type: String
    }
});

const Book = mongoose.model('Book', BookSchema );
module.exports = Book;