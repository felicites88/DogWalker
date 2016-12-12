var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Walker = require('../models/Walker.js');
/* GET /walkers listing. */
router.get('/', function(req, res, next) {
  Walker.find(function (err, walkers) {
    if (err) return next(err);
    res.json(walkers);
  });
});

/* POST /walkers */
router.post('/', function(req, res, next) {
  Walker.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /walkers/id */
router.get('/:id', function(req, res, next) {
  Walker.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* PUT /walkers/:id */
router.put('/:id', function(req, res, next) {
  Walker.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /walkers/:id */
router.delete('/:id', function(req, res, next) {
  Walker.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;
