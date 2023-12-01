// rotas.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const app = express();
app.use(bodyParser.json());


const CartController = require('../BD/CartDAO');
const { constants } = require('os');
const cartController = new CartController();

module.exports = (app, pool) => {
    // Middleware para configurar o cabeçalho CORS
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        next();
    });

   
    app.post('/adicionarItem', (req, res) => {
        console.log('Corpo da requisição:', req.body);
        const { nome, preco, quantidade } = req.body || {};
    
        
        if (!req.body || typeof req.body !== 'object' || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                error: 'Dados ausentes ou formato inválido'
            });
        }
    
        
        if (!nome || typeof nome !== 'string' || nome.trim() === '') {
            return res.status(400).json({
                error: 'Nome inválido'
            });
        }
    

        if (isNaN(preco) || isNaN(quantidade)) {
            return res.status(400).json({
                error: 'Valores de preço ou quantidade inválidos'
            });
        }
    
        
        cartController.adicionarItem(req, res);
    });
    

  
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../../views'));

    app.use('/arquivos/home', express.static(path.join(__dirname, '../../../arquivos/home')));
    app.use('/arquivos/login', express.static(path.join(__dirname, '../../../arquivos/login')));
    app.use('/arquivos/compras', express.static(path.join(__dirname, '../../../arquivos/compras')));

    app.get('/', (req, res) => {
        console.log("Acabou de usar a rota /home");
        res.render("../../views/home");
    });

    app.get('/login', (req, res) => {
        console.log("Acabou de usar a rota /login");
        res.render("../../views/login");
    });

    app.get('/compras', (req, res) => {
        console.log("Acabou de usar a rota /compras");
        res.render("../../views/compras");
    });
};