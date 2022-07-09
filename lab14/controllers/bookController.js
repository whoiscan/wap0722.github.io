const Book = require('../models/book');

exports.getAllBooks = (req, res, next) => {
    res.status(200).json(Book.getAll());
}

exports.getById = (req, res, next) => {
    res.status(200).json(Book.getById(req.params.bookId));
}

exports.save = (req, res, next) => {
    let item = req.body;
    let savedItem = new Book(null, item.title, item.isbn, item.publishedDate, item.author).save();
    // res.status(201).json({message: `Book with title ${savedItem.title} is successfully created.`});
    res.status(201).json(savedItem);
}

exports.deleteById = (req, res, next) => {
    let deletedItem = Book.deleteById(req.params.bookId);
    // res.status(200).json({message: `Book with id ${deletedItem.id} is successfully deleted.`});
    res.status(200).json(deletedItem);
}

exports.updateById = (req, res, next) => {
    let item = req.body;
    console.log(`Book id to update: ${req.params.bookId}`);
    let updatedItem = new Book(req.params.bookId, item.title, item.isbn, item.publishedDate, item.author).update();
    // res.status(200).json({message: `Book with id ${updatedItem.id} is successfully updated.`});
    res.status(200).json(updatedItem);
}