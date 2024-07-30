const Exam = require('../models/Exam');

exports.createExam = async (req, res) => {
  const { title, questions } = req.body;
  try {
    const exam = new Exam({ title, questions, createdBy: req.userId });
    await exam.save();
    res.status(201).json({ message: 'Exam created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating exam', error });
  }
};

exports.getExams = async (req, res) => {
  try {
    const exams = await Exam.find().populate('createdBy', 'username email');
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exams', error });
  }
};
