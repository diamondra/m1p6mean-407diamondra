const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema({
  titre: {type: String},
  user : {type : mongoose.Schema.Types.ObjectId, ref : 'User' },
  videos : [{type : mongoose.Schema.Types.ObjectId, ref : 'Video' }]
});

module.exports = mongoose.model("Playlist", playlistSchema,'playlist');