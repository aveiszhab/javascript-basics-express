const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacters,
} = require('../src/lib/strings');

exports.sayHello = (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
};
exports.uppercase = (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
};
exports.lowercase = (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
};
exports.countCharacters = (req, res) => {
  res.status(200).json({ result: countCharacters(req.params.string) });
};
exports.firstCharacters = (req, res) => {
  res.status(200).json({ result: firstCharacters(req.params.string, req.query.length || 1) });
};
