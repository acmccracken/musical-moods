const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
    songName: {
        type: String,
        required: true, 
        unique: true
    },
    artistName: {
        type: String,
        required: true, 
        unique: true
    },
    mood: {
        type: String,
        enum: ['Peaceful', 'Hype', 'Transcendental', 'Relaxed', 'Happy']
    },
    year: {
        type: Number,
        min: 0,
        max: 2020,
        required: true
    }

  
  });

  module.exports = mongoose.model('Mood', songSchema);