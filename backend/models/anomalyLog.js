const mongoose = require('mongoose');

const AnomalyLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' },
  timestamp: { type: Date, default: Date.now },
  details: { type: String },
});

module.exports = mongoose.model('AnomalyLog', AnomalyLogSchema);
