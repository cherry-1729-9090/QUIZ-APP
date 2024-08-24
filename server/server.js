const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const quizRoutes = require('./routes/quizRoutes');
const questionRoutes = require('./routes/questionRoutes');
const quizHistoryRoutes = require('./routes/quizHistoryRoutes');
const topScoreRoutes = require('./routes/topScoreRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use('/api/topscores',topScoreRoutes);
app.use('/api/users', userRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/quizHistory', quizHistoryRoutes);
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)))
  .catch(err => console.log(err));
