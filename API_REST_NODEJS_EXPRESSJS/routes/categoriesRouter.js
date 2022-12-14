const EXPRESS = require('express');
const router = EXPRESS.Router();

router.get('/categories/:categorieId/product/:productId', (req, res) => {
    const { categorieId, productId } = req.params;
    res.json(
        {
            categoriesId: categorieId,
            productId: productId
        }
    );
});

module.exports = router;