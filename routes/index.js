'use strict';

var express = require('express');
const router = express.Router();
module.exports = router;

var wiki = require('./wiki');
var user = require('./user');

var models = require('../models');
var Page = models.Page;
var User = models.User;

router.use('/wiki', wiki)
router.use('/users', user)
router.get('/', function (req, res, next) {
    Page.findAll().then(function (searchResults) {
        // console.log(searchResults)
        res.render('index', {pages: searchResults})
    }).catch(next);
})








// router.get('/example', (req, res) => {
//     res.json('son');
// })
// router.get('/sunn', (req, res) => {
//     res.json('son');
// })
// router.get('/', (req, res) => {
//     res.render('index', { data: {name: "sunny", number: 123 }});
// })
