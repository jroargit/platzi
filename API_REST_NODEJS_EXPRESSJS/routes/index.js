const productsRouter = require("./productsRouter")
const categoriesRouter = require("./categoriesRouter")
const userRouter = require("./userRouter")

function routerApi(app) {
    // const router = EXPRESS.Router();
    app.use('/products', productsRouter)
    app.use('/categories', categoriesRouter)
    app.use('/user', userRouter)
}

module.exports = routerApi;