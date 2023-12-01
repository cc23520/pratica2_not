const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rotas = require('../app/ROTAS/rotas');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

rotas(app);

module.exports = app;
