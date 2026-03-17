// Authentication controller for signup and login
// Handles email and password validation and user creation/login

const pool = require('../db/db');

// Simple email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Signup handler
exports.signup = async (req, res) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password || !emailRegex.test(email) || password.length < 6) {
    return res.status(400).json({ error: 'Invalid email or password (min 6 chars)' });
  }

  try {
    // Check if user already exists
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Insert new user (store password as plain text for demo; use hashing in production)
    await pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password]);
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Login handler
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  try {
    // Check user credentials
    const user = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
    if (user.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
