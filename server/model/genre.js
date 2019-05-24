const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    nomGenre : {type : String}
});

module.exports = mongoose.model("Genre", genreSchema,"genre");