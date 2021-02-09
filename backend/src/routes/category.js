const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { addCategory, getCategories } = require('../controller/category');
const router = express.Router();

router.post('/create', requireSignin, adminMiddleware, addCategory);
router.get('/show', getCategories);

module.exports = router;