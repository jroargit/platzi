const EXPRESS = require('express');
const router = EXPRESS.Router();
const ProductsServices = require('../services/productsServices');

const productServices = new ProductsServices();

router.get('/', (req, res) => {
    const products = productServices.find();

    res.status(200).json(products);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = productServices.findBy(id);

    res.status(203).json(product)
    
});

router.post('/', (req, res) => {
    const data = req.body;
    productServices.create(data);

    res.status(201).json({
        message : "Product created" 
    })
});

router.patch('/:id', (req, res) => {
    const { id } = req.params; 
    const data = req.body;

    res.json({
        message: "Patch / update", 
        data,
        id
    })
});

router.delete('/:id', (req, res) => {
    const { id } = req.params; 

    res.json({
        message: "Delete", 
        id
    })
});

module.exports = router;