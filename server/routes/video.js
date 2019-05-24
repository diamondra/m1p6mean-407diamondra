var express = require('express')
    , router = express.Router()
    , mongoose = require('mongoose');

var Video = require('../model/video');

/* GET last inserted video. */
router.get('/newest', function (req, res, next) {
    Video.find({}).sort({_id:-1}).limit(1).populate('genre').exec(function (err, videos) {
        if (err) return next(err);
        res.json(videos);
    });
});

/* GET /videos listing. */
router.get('/', function (req, res, next) {
    Video.find().populate('genre').exec(function (err, videos) {
        if (err) return next(err);
        res.json(videos);
    });
});

/* GET video by id. */
router.get('/:id', function (req, res, next) {
    Video.findById(req.params.id, function (err, post) {
        if (err) {
            return next(err);
        }
        else {
            res.json(post);
        }
    });
});

/* GET videos where  */
router.get('/search/:str', function (req, res, next) {
    Video.find(
        {$or:[{"titre": { "$regex": req.params.str, "$options": "i" }},{"chanteur": { "$regex": req.params.str, "$options": "i" }}] },
        function (err, docs) {
            res.json(docs);
        }
    );
});

module.exports = router;