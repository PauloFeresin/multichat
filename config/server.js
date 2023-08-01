// Importando o modulo do framework express
const express = require("express");

// Importando o consign
const consign = require("consign");

// Importando o body-parse
const bodyParser = require("body-parser");

// Importando o modulo do express validator
//const expressValidator = require("express-validator");
//const { check, body } = require("express-validator"); -> Usar isso nos JS com tratamento de rota

// Iniciando o objeto do express
const app = express();

// Setar as variaveis "view engine" e "view" do express
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Configurando o middleware "express.static"
app.use(express.static("./app/public"));

// Configurando o middleware "body-parser"
app.use(bodyParser.urlencoded({ extended: true }));



// Configurando o middleware express-validator
// app.use(expressValidator());  NÃO É MAIS USADO DESSA FORMA
// usa-se "const { check, body } = require("express-validator");" em cada .js que há tratamento de rota


// Efetua o autoload dos models, controllers e rotas para o objeto "app"
consign()
    .include("app/routes")
    .then("app/models")
    .then("app/controllers")
    .into(app);



// Exporta o objeto app
module.exports = app;