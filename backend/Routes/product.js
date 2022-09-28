const express = require('express');
const router = express.Router();
router.post('/', require('../Controllers/product').createProduct);
router.get('/', require('../Controllers/product').getProduct);
router.get('/:id', require('../Controllers/product').getP);
router.delete('/:id', require('../Controllers/product').deleteProduct);
router.put('/:id' , require('./../Controllers/product').updateP);
module.exports = router;