var express = require('express')
    , router = express.Router()
    , mongoose = require('mongoose');

var Genre = require('../model/genre');

/* GET /genres listing. */
router.get('/', function (req, res, next) {
    Genre.find(function (err, genres) {
        if (err) {
            return next(err);
        }
        else{
            res.json(genres);
        }
    });
});
router.get('/:id', function (req, res, next) {
    Genre.findById(req.params.id, function (err, post) {
        if (err) {
            return next(err);
        }
        else{
            res.json(post);
        }
    });
});

module.exports = router;