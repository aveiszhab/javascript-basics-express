const express = require('express');
const booleansController = require('../controllers/controllerBooleans');

const router = express.Router();

router.post('/negate', booleansController.booleansNegate);
router.post('/truthiness', booleansController.boolensTruthiness);
router.get('/is-odd/:number', booleansController.booleansIsOdd);
router.get('/:string/starts-with/:character', booleansController.booleanStartsWith);

module.exports = router;
