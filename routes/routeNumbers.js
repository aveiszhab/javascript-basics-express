const express = require('express');
const numbersController = require('../controllers/controllerNumbers');

const router = express.Router();

router.get('/', numbersController.hello);

module.exports = router;
