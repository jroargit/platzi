const EXPRESS = require('express');
const router = EXPRESS.Router();

// localhost:3000/users?limit=10&offset=50
router.get('/users', (req, res) => {
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

module.exports = router;