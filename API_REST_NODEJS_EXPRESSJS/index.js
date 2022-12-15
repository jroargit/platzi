// to start dev enviroment use nodemon

const EXPRESS = require('express');
const APP = EXPRESS();
const routerApi = require('./routes');
const PORT = 3000;

APP.use(EXPRESS.json());

// const list = [
//     {
//     name: "Computer",
//     price: "$3000"
//     },
//     {
//     name: "Head Phones",
//     price: "$100"
//     },
//     {
//     name: "Key Board",
//     price: "$200",
//     },
//     {
//     name: "Mouse",
//     price: "$150",
//     },
//     {
//     name: "Mouse Pad",
//     price: "$50",
//     }, 
// ];

APP.get('/', (req, res) => {
    res.send('<h1>Hello World!!!!</h1>');
});

routerApi(APP);

APP.listen(PORT, () => {
    console.log(`My port is ${PORT} `);
});