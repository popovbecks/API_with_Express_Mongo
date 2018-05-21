const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE');
        return res.status(200).json({})
    };
    next();
});



app.use('/products', productsRoute);
app.use('/orders', ordersRoute);
app.use((req, res, next) => {
    const error = new Error('Some error');
    next(error)
})
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});
module.exports = app;