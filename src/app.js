const express = require('express');
const routeArrays = require('../routes/routeArrays');
const routeBooleans = require('../routes/routeBooleans');
const routeNumbers = require('../routes/routeNumbers');
const routeStrings = require('../routes/routeStrings');

const app = express();

app.use(express.json());

app.use('/array', routeArrays);
app.use('/booleans', routeBooleans);
app.use('/numbers', routeNumbers);
app.use('/strings', routeStrings);

module.exports = app;
