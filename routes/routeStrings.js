const express = require('express');
const stringsController = require('../controllers/controllerStrings');

const router = express.Router();

router.get('/hello/:string', stringsController.hello);

module.exports = router;
