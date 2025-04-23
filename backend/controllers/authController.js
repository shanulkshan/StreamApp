const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Helper: Create JWT Token
const createToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '3d' });
};

// SIGNUP
exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ error: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed });
    const token = createToken(user._id);

    res.status(201).json({ message: 'User created', token });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed' });
  }
};

// SIGNIN
exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    const token = createToken(user._id);
    res.status(200).json({ message: 'Signed in', token });
  } catch (err) {
    res.status(500).json({ error: 'Signin failed' });
  }
};
