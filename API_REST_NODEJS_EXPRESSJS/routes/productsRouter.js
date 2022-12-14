const EXPRESS = require('express');
const faker = require('faker');
const router = EXPRESS.Router();

router.get('/', (req, res) => {
    const products = [];

    for (let index = 0; index < 100; index++) {
        products.push(
            {
                name: faker.commerce.productName(),
                price: +faker.commerce.price(),
                image: faker.image.imageUrl(),
            }
        );
        
    }
    res.json(products);
});

router.get('/:id', (req, res) => {
    const { id } = req.params
    res.json(
        {
        id,
        name: "Mouse",
        price: "$150",
        }
    );
});

module.exports = router;