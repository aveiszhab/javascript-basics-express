const express = require('express');
const arraysController = require('../controllers/controllerArrays');

const router = express.Router();

router.get('/', arraysController.hello);

module.exports = router;
