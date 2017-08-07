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

  User.findOrCreate({
    where: {
      name: req.body.AuthorName,
      email: req.body.AuthorEmail
    }
  })
  .then(function (values) {
    var user = values[0];
    var page = Page.build({
      title: req.body.title,
      content: req.body.TextArea
    });
    return page.save().then(function(page) {
      return page.setAuthor(user);
    })
  })
  .then(function(page) {
    res.redirect(page.route);
  })
  .catch(next)

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
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
