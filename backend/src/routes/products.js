const { Router } = require('express');
const router = Router();

const { getProducts, createProducts, getProduct, updateProducts, deleteProducts } = require('../controllers/products.controllers');

router.route('/')
    .get(getProducts)
    .post(createProducts)

router.route('/:id')
    .get(getProduct)
    .put(updateProducts)
    .delete(deleteProducts)

module.exports = router;