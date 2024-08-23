const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { user_name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ user_name, password: hashedPassword });

    const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET, { expiresIn: '10h' });
    user.jwt = token;
    await user.save();

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { user_name, password } = req.body;
    const user = await User.findOne({ user_name });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = user.jwt;
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      const newToken = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET, { expiresIn: '10h' });
      user.jwt = newToken;
      await user.save();
      res.status(200).json({ message: 'Login successful', token: newToken });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
