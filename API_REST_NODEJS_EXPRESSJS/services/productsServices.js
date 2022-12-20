const faker = require('faker');

class ProductsServices {
    
    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {

        for (let index = 0; index < 15; index++) {
            this.products.push(
                {
                    name: faker.commerce.productName(),
                    price: +faker.commerce.price(),
                    image: faker.image.imageUrl(),
                }
            );
            
        };
    }

    create() {

    }

    find () {
        return this.products;
    }

    findBy () {

    }

    update () {

    }

    delete () {

    }
}

module.exports = ProductsServices;