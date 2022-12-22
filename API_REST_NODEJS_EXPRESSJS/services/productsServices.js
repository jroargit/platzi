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
        this.products.push(newProduct);
        return newProduct;
    }

    find () {
        return this.products;
    }

    findBy (id) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Product not found');
        }
        return this.products[index];
    }

    update (id, changes) {
        const index = this.products.findIndex(item => item.id === id);
        const newChanges = {
            id,
            ...changes
        }

        if (index === -1) {
            throw new Error('Product not found');
        }
        this.products[index] = newChanges;
        return this.products[index];
    }

    delete (id) {
        const index = this.products.findIndex(item => item.id === id);

        if (index === -1) {
            throw new Error('Product not found');
        }
        this.products.splice(index, 1);
        return {message: `${id} element delete`};
    }
}

module.exports = ProductsServices;