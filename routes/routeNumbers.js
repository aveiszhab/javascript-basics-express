const express = require('express');
const numbersController = require('../controllers/controllerNumbers');

const router = express.Router();

router.get('/add/:a/and/:b', numbersController.addNumbers);
router.get('/subtract/:b/from/:a', numbersController.subtractNumbers);
router.post('/multiply', numbersController.multiplyNumbers);
router.post('/divide', numbersController.divideNumbers);
router.post('/remainder', numbersController.remainderNumbers);

module.exports = router;
