const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  removeNthElement2,
  elementsStartingWithAVowel,
} = require('../src/lib/arrays');

exports.arrayGetNthElement = (req, res) => {
  const { array } = req.body;
  const { index } = req.params;
  return res.status(200).json({ result: getNthElement(index, array) });
};
exports.arrayArrayToCSVString = (req, res) => {
  const { array } = req.body;
  return res.status(200).json({ result: arrayToCSVString(array) });
};
exports.arrayAddToArray2 = (req, res) => {
  const element = req.body.value;
  const { array } = req.body;
  return res.status(200).json({ result: addToArray2(element, array) });
};
exports.arrayElementsStartingWithAVowel = (req, res) => {
  const { array } = req.body;
  return res.status(200).json({ result: elementsStartingWithAVowel(array) });
};
exports.arrayRemoveNthElement2 = (req, res) => {
  const index = parseInt(req.query.index, 10);
  const { array } = req.body;
  return res.status(200).json({ result: removeNthElement2(index || 0, array) });
};
