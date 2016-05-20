var mongoose = require('mongoose');

var violationSchema = new mongoose.Schema({
  id: Number,
  locationName: String,
  violation: String,
  comment: String,
  geolocation: String,
  status: { type: String, default: 'pending' },
  timestamps: true
})
