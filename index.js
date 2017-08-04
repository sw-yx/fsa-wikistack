'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
module.exports = app; // this line is only used to make testing easier.
var nunjucks = require('nunjucks');
var models = require('./models')


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


// if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.
models.db.sync({})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error)
