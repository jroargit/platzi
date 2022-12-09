const EXPRESS = require('express');
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
})

APP.get('/products', (req, res) => {
    res.json(list);
})

APP.get('/products/:id', (req, res) => {
    const { id } = req.params
    res.json(
        {
        id: id,
        name: "Mouse",
        price: "$150",
        }
    );
})

APP.get('/categories:categorieId/product:productId', (req, res) => {
    const { categorieId, productId } = req.params;
    res.json(
        {
            categoriesId: categorieId,
            productId: productId
        }
    );
})

APP.listen(PORT, () => {
    console.log(`My port is ${PORT} `);
})