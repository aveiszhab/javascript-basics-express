const express = require('express');
const booleansController = require('../controllers/controllerBooleans');

const router = express.Router();

router.get('/', booleansController.hello);

module.exports = router;
