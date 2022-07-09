const express = require('express');
const cors = require('cors');
const bookRouter = require('./routes/book');
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use('/books', bookRouter);

app.use(function (req, res, next) {
    res.status(404).json({error: req.url + ' URL is not found!'});
});


app.listen(3000, () => console.log('App is running on port: 3000'));