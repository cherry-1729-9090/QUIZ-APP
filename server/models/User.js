const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  user_name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  jwt: { type: String },
});

module.exports = mongoose.model('User', userSchema);


