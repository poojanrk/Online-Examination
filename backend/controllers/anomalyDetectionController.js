const AnomalyLog = require('../models/AnomalyLog');

exports.logAnomaly = async (req, res) => {
  const { examId, details } = req.body;
  try {
    const anomalyLog = new AnomalyLog({ userId: req.userId, examId, details });
    await anomalyLog.save();
    res.status(201).json({ message: 'Anomaly logged successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging anomaly', error });
  }
};

exports.getAnomalies = async (req, res) => {
  try {
    const anomalies = await AnomalyLog.find().populate('userId', 'username email').populate('examId', 'title');
    res.status(200).json(anomalies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching anomalies', error });
  }
};
