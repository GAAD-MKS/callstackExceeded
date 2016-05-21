var mongoose = require('mongoose');

var violationSchema = new mongoose.Schema({
  locationName: String,
  violation: String,
  comment: String,
  geolocation: {
    type: [Number],
    index: '2dsphere'
  },
  status: { type: String, default: 'pending' },
}, {timestamps: true});

module.exports = mongoose.model('Violation', violationSchema);
