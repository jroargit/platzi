const EXPRESS = require('express');
const faker = require('faker');
const Faker = require('faker/lib');
const APP = EXPRESS();
const PORT = 3000;

const list = [
    {
    name: "Computer",
    price: "$3000"
    },
    {
    name: "Head Phones",
    price: "$100"
    },
    {
    name: "Key Board",
    price: "$200",
    },
    {
    name: "Mouse",
    price: "$150",
    },
    {
    name: "Mouse Pad",
    price: "$50",
    }, 
];

APP.get('/', (req, res) => {
    res.send('<h1>Hello World!!!!</h1>');
});

APP.get('/products', (req, res) => {
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

APP.get('/products/:id', (req, res) => {
    const { id } = req.params
    res.json(
        {
        id,
        name: "Mouse",
        price: "$150",
        }
    );
});

APP.get('/categories/:categorieId/product/:productId', (req, res) => {
    const { categorieId, productId } = req.params;
    res.json(
        {
            categoriesId: categorieId,
            productId: productId
        }
    );
});

APP.get('/users', (req, res) => {
    const { limit, offset } = req.query;

    if ( limit && offset ){
        res.json(
            {
                limit,
                offset
            }
        ); 
    } else {
        res.send("UPS, something gone wrong");
    }
});

APP.listen(PORT, () => {
    console.log(`My port is ${PORT} `);
});