'use strict';

var express = require('express');
const router = express.Router();
module.exports = router;


router.get('/example', (req, res) => {
    res.json('son');
})
router.get('/sunn', (req, res) => {
    res.json('son');
})
router.get('/', (req, res) => {
    res.render('index', { data: {name: "sunny", number: 123 }});
})