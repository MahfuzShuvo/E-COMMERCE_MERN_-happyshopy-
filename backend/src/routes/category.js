const express = require('express');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { addCategory, getCategories } = require('../controller/category');
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'images/category/'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
});

const upload = multer({ storage });

router.post('/create', requireSignin, adminMiddleware, upload.single('categoryImage'), addCategory);
router.get('/show', getCategories);

module.exports = router;