const express = require('express');
const { createExam, getExams } = require('../controllers/examController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createExam);
router.get('/', authMiddleware, getExams);

module.exports = router;
