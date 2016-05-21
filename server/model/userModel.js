var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var userSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  password: String
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
