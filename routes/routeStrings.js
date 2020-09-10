const express = require('express');
const stringsController = require('../controllers/controllerStrings');

const router = express.Router();

router.get('/hello/:string', stringsController.sayHello);
router.get('/upper/:string', stringsController.uppercase);
router.get('/lower/:string', stringsController.lowercase);
router.get('/first-characters/:string', stringsController.firstCharacters);

module.exports = router;
