const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [{ question: String, options: [String], correctAnswer: String }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Exam', ExamSchema);
