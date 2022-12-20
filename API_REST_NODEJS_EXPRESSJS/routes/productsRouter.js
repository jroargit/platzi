const EXPRESS = require('express');
const router = EXPRESS.Router();
const ProductsServices = require('../services/productsServices');

const productServices = new ProductsServices();

router.get('/', (req, res) => {
    const products = productServices.find();

    res.status(200).json(products);
});

router.get('/:id', (req, res) => {
    const { id } = req.params
    if (+id === 999){
        res.status(404).json({
            message: "Error. Not Found. 404",
            
        })
    }else {
        res.status(201).json(
            {
            id,
            name: "Mouse",
            price: "$150",
            message : "Status code 201"
            }
        );
    }
});

router.post('/', (req, res) => {
    const data = req.body;

    res.status(200).json({
        data,
        message : "Status code 200" 
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