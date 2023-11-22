const express = require('express');
const path = require('path');

module.exports = (app)=>{

    app.use((req,res, next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        next();
    })

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../../views'));
    app.use('/arquivos/home', express.static(path.join(__dirname, '../../../arquivos/home')));


    app.get('/',(req,res)=>{ 
        console.log("Acabou de usar a rota /home");
        res.render("../../views/home")
    })

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../../views'));
    app.use('/arquivos/login', express.static(path.join(__dirname, '../../../arquivos/login')));


    app.get('/login',(req,res)=>{ 
        console.log("Acabou de usar a rota /login");
        res.render("../../views/login")
    })

    app.set('views', path.join(__dirname, '../../views'));
    app.use('/arquivos/compras', express.static(path.join(__dirname, '../../../arquivos/compras')));


    app.get('/compras',(req,res)=>{ 
        console.log("Acabou de usar a rota /compras");
        res.render("../../views/compras")
    })
}