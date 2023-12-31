// backend/models/patientModel.js

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  nhi: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  resus: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  history: {
    type: String,
    required: true,
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
