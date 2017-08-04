'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
module.exports = app; // this line is only used to make testing easier.
var nunjucks = require('nunjucks');

// remember to plug in your router and any other middleware you may need here.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//nunjucks section
var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


app.use(morgan('dev'))
app.use(require('./routes'));
app.use(express.static('public'));


if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.

