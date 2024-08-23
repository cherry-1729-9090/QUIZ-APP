const express = require('express');
const mongoose = require('mongoose');
// const userRoutes = require('./routes/userRoutes');
// const quizRoutes = require('./routes/quizRoutes');
// const questionRoutes = require('./routes/questionRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// // Routes
// app.use('/api/users', userRoutes);
// app.use('/api/quizzes', quizRoutes);
// app.use('/api/questions', questionRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)))
  .catch(err => console.log(err));
