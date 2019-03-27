const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
  make: String,
  model: String,
  mileage: String,
  price: String,
});

const ModelClass = mongoose.model('car', carSchema);

module.exports = ModelClass;