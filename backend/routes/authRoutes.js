const express = require('express');
const router = express.Router();

let users = []; // Mock data store

const validateRegistration = (req, res, next) => {
  const { firstName, lastName, gender, email, password, course } = req.body;
  if (!firstName || !lastName || !gender || !email || !password || !course) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  next();
};

router.post('/register', validateRegistration, (req, res) => {
  const { firstName, lastName, gender, email, password, course } = req.body;

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = { firstName, lastName, gender, email, password, course };
  users.push(newUser);

  res.status(201).json({ message: 'Registration successful' });
});

router.post('/student-register', validateRegistration, (req, res) => {
  const { firstName, lastName, gender, email, password, course } = req.body;

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = { firstName, lastName, gender, email, password, course };
  users.push(newUser);

  res.status(201).json({ message: 'Student registration successful' });
});

module.exports = router;
