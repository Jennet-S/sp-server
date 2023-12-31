// backend/routes/scheduleRoutes.js
const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

// Define routes for schedules
router.get('/api/schedules', scheduleController.getAllSchedules);
router.post('/api/schedules', scheduleController.createSchedule);

module.exports = router;
