const express = require('express');
const productRouter = require('./routes/product');
const userRouter = require('./routes/users');

const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productRouter);
app.use('/users', userRouter);

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('*', function (req, res, next) {
    console.log('Error');
    res.status(404).sendFile(path.join(__dirname, 'views', 'pageNotFound.html'));
});

app.use(function (err, req, res, next) {
    res.status(500).send('Something went wrong! Try again later.');
});


app.listen(3000, () => console.log('App is running on port: 3000'));