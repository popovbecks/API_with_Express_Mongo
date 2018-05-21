const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request /products'
    });
});
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(200).json({
        message: 'Handling POST request /products',
        createdProduct: product
    });
});
router.get('/:productsId', (req, res, next) => {
    const id = req.params.productsId;
    if (id === 'special') {
        res.status(201).json({
            message: 'you discovered the special Id',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed lthe Id'
        })
    }
});
router.patch('/:productsId', (req, res, next) => {
    res.status(201).json({
        message: 'Updated'
    });
});
router.delete('/:productsId', (req, res, next) => {
    res.status(201).json({
        message: 'Deleted'
    });
});

module.exports = router;