const { Schema } = require('mongoose');

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  type: {
    type: String,
    enum: [
      'dog',
      'cat',
      'hamster',
      'rabbit',
      'bird',
      'fish',
      'ferret',
      'turtle',
      'other',
    ],
    default: 'other',
    index: true,
  },
  description: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    index: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
    index: true,
  },
  fee: {
    type: Number,
    required: true,
    index: true,
  },
  image: {
    type: String,
    required: true,
    index: true,
  },
});

module.exports = petSchema;
