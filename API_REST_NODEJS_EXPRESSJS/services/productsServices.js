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
                    id: faker.datatype.uuid(),
                    name: faker.commerce.productName(),
                    price: +faker.commerce.price(),
                    image: faker.image.imageUrl(),
                }
            );
            
        };
    }

    create(data) {

        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        };
        this.products.push(newProduct)
    }

    find () {
        return this.products;
    }

    findBy (id) {
        return this.products.find(item => item.id === id);
    }

    update () {

    }

    delete () {

    }
}

module.exports = ProductsServices;