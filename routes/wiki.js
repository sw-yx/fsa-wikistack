'use strict';

var express = require('express');
const router = express.Router();

var models = require('../models');
var Page = models.Page;
var User = models.User;

module.exports = router;


router.post('/', function(req, res, next) {

  // res.json(req.body)
  // res.send('got to POST /wiki/');
    // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  var page = Page.build({
    title: req.body.title,
    content: req.body.TextArea
  });
  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save()
  .then(function (savedPage) {
    res.redirect(savedPage.route)
});
  ;
});

router.get('/add', function(req, res, next) {
  res.render('addpage', {})
});



router.get('/:urlTitle', function (req, res, next) {
  Page.findOne({
    where: {
      urlTitle: req.params.urlTitle
    }
  }).then(function (obj) {
    res.render('wikipage', obj)
  }).catch(next);
  // res.send('hit dynamic route at ' + req.params.urlTitle);
});
