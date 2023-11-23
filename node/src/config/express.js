const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const rotas = require('../app/ROTAS/rotas');
rotas(app);

app.use(
    bodyParser.urlencoded({  
        extended:true,
    })
);

module.exports = app; 