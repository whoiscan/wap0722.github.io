const express = require('express');
const bookRouter = require('./routes/book');
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/books', bookRouter);
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.use(function (req, res, next) {
    res.status(404).json({error: req.url + ' URL is not found!'});
});


app.listen(3000, () => console.log('App is running on port: 3000'));