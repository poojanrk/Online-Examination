const express = require('express');
const { logAnomaly, getAnomalies } = require('../controllers/anomalyDetectionController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/log', authMiddleware, logAnomaly);
router.get('/', authMiddleware, getAnomalies);

module.exports = router;
