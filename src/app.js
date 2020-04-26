const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacters,
} = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const app = express();
app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: sayHello(string) });
});

app.get('/strings/upper/:string', (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: uppercase(string) });
});

app.get('/strings/lower/:string', (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: lowercase(string) });
});

app.get('/strings/count-characters/:string', (req, res) => {
  const { string } = req.params;
  res.status(200).json({ result: countCharacters(string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const { string } = req.params;
  const n = req.query.length || 1;
  res.status(200).json({ result: firstCharacters(string, n) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(a, b) });
});

app.get('/numbers/subtract/:b/from/:a', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(a, b) });
});

app.get('/numbers/multiply', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).send({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: add(a, b) });
});

app.post('/numbers/multiply', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;
  if (a === undefined || b === undefined) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(parseInt(a, 10)) || Number.isNaN(parseInt(b, 10))) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  return res.status(200).json({ result: multiply(a, b) });
});

app.post('/numbers/divide', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;
  if (b === 0) {
    return res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if (a === undefined || b === undefined) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(parseInt(a, 10)) || Number.isNaN(parseInt(b, 10))) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  return res.status(200).json({ result: divide(a, b) });
});

app.post('/numbers/remainder', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;
  if (b === 0) {
    return res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if (a === undefined || b === undefined) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(parseInt(a, 10)) || Number.isNaN(parseInt(b, 10))) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).json({ result: remainder(a, b) });
});

module.exports = app;
