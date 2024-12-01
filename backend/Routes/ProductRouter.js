const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/',ensureAuthenticated,(req,res)=>{
    console.log('---- logged in user data ----',req.user);
    res.status(200).json([
        {
            vegname : "Heirloom tomatoes",
            quantity : "1kg",
            price : 100
        },
        {
            vegname : "Organic Ginger",
            quantity : "1kg",
            price : 150
        },
        {
            vegname : "Organic Onion",
            quantity : "1kg",
            price : 50
        }
    ])
});

module.exports = router;