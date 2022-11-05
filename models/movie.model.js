const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  director: {
    type: String,
    required: true,
  },
  cast: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  date_added: {
    type: String,
    required: true,
  },
  release_year: {
    type: Number,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  listed_in: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tipoplan: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('movies', movieSchema);













