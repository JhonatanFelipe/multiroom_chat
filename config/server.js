/** importar o módulo do framework express */
var express = require('express');

/** importar o módulo do consign */
var consign = require('consign');

/** importar o módulo do body-parser */
var body_parser = require('body-parser');

/** importar o módulo do express-validator */
var expressValidator = require('express-validator');

/** inicia o objeto express */
var app = express();

/** setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views')

/** configurar o middleware express.static */
app.use(express.static('./app/public'));

/** configurar o middleware body-parser */
app.use(body_parser.urlencoded({ extended: true }));

/** configurar o middleware express-validator */
// app.use(expressValidator());

/** efetua o autoload das rotas dos models e dos controllers para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

/** exporta o objeto app */
module.exports = app;