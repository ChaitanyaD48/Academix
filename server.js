const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// CORS middleware
app.use(cors());

// MongoDB connection
const mongoURI = 'mongodb+srv://admin:73HenTRzVG1FWuUt@cluster0.l1fikme.mongodb.net/';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Define Schema and Model for Notice
const noticeSchema = new mongoose.Schema({
  noticeText: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Notice = mongoose.model('Notice', noticeSchema);

// Define Schema and Model for Assignment
const assignmentSchema = new mongoose.Schema({
  assignmentText: String,
  deadline: String,
  topic: String,
  submissionType: String,
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

// Routes for Notices
app.get('/api/aptices', async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json(notices);
  } catch (err) {
    console.error('Error fetching notices:', err);
    res.status(500).send('Server Error');
  }
});

app.post('/api/aptices', async (req, res) => {
  try {
    const { noticeText } = req.body;
    const newNotice = new Notice({ noticeText, createdAt: new Date() });
    const savedNotice = await newNotice.save();
    res.json(savedNotice);
  } catch (err) {
    console.error('Error creating notice:', err);
    res.status(500).send('Server Error');
  }
});

// Routes for Assignments
app.get('/assignments', async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (err) {
    console.error('Error fetching assignments:', err);
    res.status(500).send('Server Error');
  }
});

app.post('/submit-assignment', async (req, res) => {
  try {
    const { assignmentText, deadline, topic, submissionType } = req.body;
    const newAssignment = new Assignment({ assignmentText, deadline, topic, submissionType });
    const savedAssignment = await newAssignment.save();
    res.json(savedAssignment);
  } catch (err) {
    console.error('Error creating assignment:', err);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
