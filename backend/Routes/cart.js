const express = require('express');
const router = express.Router();
router.post('/', require('../Controllers/cart').createCart);
router.get('/', require('../Controllers/cart').getCarts);
router.get('/:id', require('../Controllers/cart').getCart);
router.delete('/:id', require('../Controllers/cart').deleteCart);

module.exports = router;