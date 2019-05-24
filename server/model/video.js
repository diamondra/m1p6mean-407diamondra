const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  _id : {type : mongoose.Schema.Types.ObjectId},
  titre: {type: String},
  chanteur: {type: String},
  description: {type: String},
  dateAjout: {type: Date},
  genre : {type : mongoose.Schema.Types.ObjectId, ref : 'Genre' }
});

module.exports = mongoose.model("Video", videoSchema,'video');