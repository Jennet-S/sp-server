// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const patientRoutes = require('./routes/patientRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes'); // Include the schedule routes

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = "mongodb+srv://myusername:mypassword@cluster0.h2lxr0p.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Include routes
app.use('/api/patients', patientRoutes);
app.use('/api/schedules', scheduleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
