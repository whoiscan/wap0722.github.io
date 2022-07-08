let books = [];
let counter = 0;
module.exports = class Book {
    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        this.id = ++counter;
        books.push(this);
        return this;
    }

    static getById(bookId) {
        let index = books.findIndex(b => b.id == bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('Book not Found!!!');
        }
    }

    static getAll() {
        return books;
    }

    static deleteById(bookId) {
        let index = books.findIndex(b => b.id == bookId);
        if (index > -1) {
            let deletedItem = books[index];
            books.splice(index, 1);
            return deletedItem;
        } else {
            throw new Error('Book not Found!!!');
        }
    }

    update() {
        console.log(this.bookId);
        let index = books.findIndex(b => b.id == this.id);
        if (index > -1) {
            let updatedItem = books[index];
            books.splice(index, 1, this);
            return updatedItem;
        } else {
            throw new Error('Book not Found!!!');
        }
    }

}