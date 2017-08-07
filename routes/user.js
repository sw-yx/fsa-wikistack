'use strict';

var express = require('express');
const router = express.Router();
module.exports = router;


router.get('/', function (req, res, next) {
  console.log('hello')
  res.redirect('/')
});

router.get('/123', function (req, res, next) {
  res.redirect('/')
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
