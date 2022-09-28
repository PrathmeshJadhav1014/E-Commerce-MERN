const express = require('express');
const router = express.Router();
router.post('/', require('../Controllers/order').createOrder);
router.get('/', require('../Controllers/order').getOrder);
router.delete('/:id', require('../Controllers/order').deleteOrder);
router.put('/:id' , require('./../Controllers/order').updateOrder);

module.exports = router;