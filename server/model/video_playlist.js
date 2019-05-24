const mongoose = require('mongoose')

const videoplaylistSchema = new mongoose.Schema({
  _id : {type : mongoose.Schema.Types.ObjectId},
  video : {type : mongoose.Schema.Types.ObjectId, ref : 'Video' },
  playlist : {type : mongoose.Schema.Types.ObjectId, ref : 'Playlist' }
});

module.exports = mongoose.model("VideoPlaylist", videoplaylistSchema,'video_playlist');