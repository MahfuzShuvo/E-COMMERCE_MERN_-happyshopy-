const express = require('express');
const { requireSignin, userMiddleware } = require('../common-middleware');
const { addItemToCart } = require('../controller/cart');
const router = express.Router();

router.post('/add-to-cart', requireSignin, userMiddleware, addItemToCart);
// router.get('/show', getCategories);

module.exports = router;