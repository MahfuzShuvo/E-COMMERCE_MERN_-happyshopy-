const Product = require('../models/product');
const shortid = require('shortid');
const slugify = require('slugify');

exports.createProduct = (req, res) => {
    // return res.status(200).json({
    //     file: req.files,
    //     body: req.body
    // });

    const { name, description, price, quantity, category, createdBy } = req.body;
    let productPictures = [];

    if (req.files.length > 0) {
        productPictures = req.files.map(file => {
            return { img: file.filename }
        });
    }

    const product = new Product({ 
        name: name,
        slug: slugify(name),
        description,
        price,
        quantity,
        productPictures,
        category,
        createdBy: req.user._id
    });

    product.save((error, product) => {
        if (error) {
            return res.status(400).json({ error });
        }
        if (product) {
            return res.status(201).json({ product });
        }
    });
}