const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: {
    type: String,
  },
  description: String,
  date: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;