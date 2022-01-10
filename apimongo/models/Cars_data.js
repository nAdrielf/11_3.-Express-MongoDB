const mongoose = require('mongoose');
const CarsSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  produsen: {
    type: String,
    required: true,
  },
  tahun: Number,
  stock: {
    type: Boolean,
    required: true,
  },
});

const Cars = mongoose.model('Cars', CarsSchema);
module.exports = Cars;
