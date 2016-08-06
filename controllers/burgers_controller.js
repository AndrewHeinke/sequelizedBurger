var models = require('../models');
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var method = require('method-override');
var bodyParser = require('body-parser');

router.get('/', function(req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
  models.burger.findAll()
    .then(function(data) {
      res.render('index', {
        burgers: data
      });
    });
});

router.post('/burgers/create', function(req, res) {
  models.burger.create({
      burger_name: req.body.name,
      devoured: 0
    })
    .then(function(data) {
      res.redirect('/burgers');
    });
});

router.put('/burgers/update/:id', function(req, res) {
  var burgerID = req.params.id;
  models.burger.update({
      devoured: true
    }, {
      where: {
        id: burgerID
      }
    })
    .then(function(data) {
      res.redirect('/burgers');
    });
});

module.exports = router;
