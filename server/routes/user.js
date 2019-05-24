var express = require('express')
    , router = express.Router()
    , mongoose = require('mongoose');
var passport = require('passport');

var User = require('../model/user');

/* GET /users listing. */
router.get('/', function (req, res, next) {
    User.find(function (err, users) {
        if (err) {
            return next(err);
        }
        else {
            res.json(users);
        }
    });
});
router.get('/:id', function (req, res, next) {
    User.findById(req.params.id, function (err, post) {
        if (err) {
            return next(err);
        }
        else {
            res.json(post);
        }
    });
});

router.post('/save', function (req, res, next) {
    var data = req.body;
    console.log("voaantso");
    var user = new User({ firstname: data.firstname, lastname: data.lastname, pseudo: data.pseudo, mdp: data.mdp });
    user.save(function (err, results) {
        console.log(results._id);
    });
});

module.exports = router;