const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstname : String,
  lastname : String,
  pseudo : String,
  mdp: String
})

module.exports = mongoose.model("User", userSchema ,"user");
