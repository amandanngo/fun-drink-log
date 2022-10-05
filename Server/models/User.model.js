const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  drinks: [{
    type: Schema.Types.ObjectId,
    ref: 'Drink'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;