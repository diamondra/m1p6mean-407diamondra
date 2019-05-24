var express = require('express')
    , router = express.Router()
    , mongoose = require('mongoose');

var Playlist = require('../model/playlist');
var VideoPlaylist = require('../model/video_playlist');

/* GET /videos listing. */
router.get('/:idUser', function (req, res, next) {
    Playlist.find().populate('videos').where('user').equals(req.params.idUser).exec(function (err, playlist) {
        if (err) return next(err);
        res.json(playlist);
    });
});

router.get('/videos/:id', function (req, res, next) {
    Playlist.findOne().populate('videos').where('_id').equals(req.params.id).exec(function (err, playlist) {
        if (err){
            console.log(err);
            return next(err);
        }
        res.json(playlist);
    });
});

router.post('/addVideo/:id/:idVideo', function (req, res, next) {
    Playlist.findOne().populate('videos').where('_id').equals(req.params.id).exec(function (err, playlist) {
        if (err) return next(err);
        var p = playlist;
        p.videos.push(req.params.idVideo);
        p.save();
    });
});

router.post('/add', function (req, res, next) {
    var data = req.body;
    var playlist = new Playlist({ titre: data.titre, user: data.idUser, videos: []});
    playlist.save(function (err, results) {
        if(err){
            return err;
        }
       res.json(results._id);
    });
});

module.exports = router;