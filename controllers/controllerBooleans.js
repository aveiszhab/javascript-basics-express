const { negate, truthiness, isOdd, startsWith } = require('../src/lib/booleans');

exports.booleansNegate = (req, res) => {
  const a = req.body.value;
  return res.status(200).json({ result: negate(a) });
};

exports.boolensTruthiness = (req, res) => {
  const a = req.body.value;
  return res.status(200).json({ result: truthiness(a) });
};

exports.booleansIsOdd = (req, res) => {
  const a = parseInt(req.params.number, 10);
  if (Number.isNaN(a)) {
    return res.status(400).send({ error: 'Parameter must be a number.' });
  }
  return res.status(200).json({ result: isOdd(a) });
};

exports.booleanStartsWith = (req, res) => {
  const char = req.params.character;
  const strg = req.params.string;

  if (char.length > 1) {
    return res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  }
  return res.status(200).json({ result: startsWith(char, strg) });
};
