const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const TopScoresService = require('../services/TopScoreService');

dotenv.config();
console.log('env secret : ',process.env.JWT_SECRET);

exports.register = async (req, res) => {
  console.log('req body ',req.body);
  try {
    console.log('Register request received');
    const { user_name, password } = req.body;

    const existingUser = await User.findOne({ user_name });

    console.log('Existing user:', existingUser);


    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ user_name, password: hashedPassword });
    console.log('User created:', user);
    const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET, { expiresIn: '10h' });
    user.jwt = token;
    console.log('Token generated:', token);

    await user.save();


    console.log('User successfully registered:', user);
    console.log('Sending response with token:', token);

    await TopScoresService.createTopScoresForNewUser(user._id);
    console.log('Top scores created for new user');

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(400).json({ error: error.message });
  }
};


exports.login = async (req, res) => {
  console.log('Login request received');
  console.log(req.body);
  try {
    const { user_name, password } = req.body;
    const user = await User.findOne({ user_name });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    let token = user.jwt;
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET, { expiresIn: '10h' });
      user.jwt = token;
      await user.save();
    }

    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};