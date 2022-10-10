// models/Book.js

const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  published_date: {
    type: Date,
  },
  publisher: {
    type: String,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    //modireated
    type: String,
  },
  whatever: {
    //analysed
    type: String,
  }
});

module.exports = Book = mongoose.model("book", BookSchema);
