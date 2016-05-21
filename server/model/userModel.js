var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
