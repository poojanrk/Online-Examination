const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS options
const corsOptions = {
  origin: 'http://localhost:3000', // Your frontend URL
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(bodyParser.json());
app.use(cors(corsOptions)); // Apply CORS middleware with options

app.use('/api/auth', authRoutes);

const mongoURI = 'mongodb://localhost:27017/OnlineDataDB'; // Replace with your MongoDB connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
