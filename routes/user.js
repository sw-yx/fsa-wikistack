'use strict';

var express = require('express');
const router = express.Router();
module.exports = router;

var Users = require('../models/').User

router.get('/', function (req, res, next) {
  Users.findAll({}).then(function(users){
    res.render('users', {abc: users})
  }).catch(next)
});

router.get('/:id', function (req, res, next) {
  res
  // res.redirect('/')
});


router.post('/', function (req, res, next) {
  res.redirect('/')

});

router.put('/123', function (req, res, next) {
  res.redirect('/')
});

router.delete('/123', function (req, res, next) {
  res.redirect('/')
});
