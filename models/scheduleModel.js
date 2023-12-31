// backend/models/scheduleModel.js
const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  patientId: {
    type: Number,
    required: true,
  },
  hour: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },

});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
