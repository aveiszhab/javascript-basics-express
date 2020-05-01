const express = require('express');
const arraysController = require('../controllers/controllerArrays');

const router = express.Router();

router.post('/element-at-index/:index', arraysController.arrayGetNthElement);
router.post('/to-string', arraysController.arrayArrayToCSVString);
router.post('/append', arraysController.arrayAddToArray2);
router.post('/starts-with-vowel', arraysController.arrayElementsStartingWithAVowel);
router.post('/remove-element', arraysController.arrayRemoveNthElement2);

module.exports = router;
