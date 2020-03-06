const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    songRating: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    }
});
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
    },
    rating: [ratingSchema], 
    userCreated: String,

  });
 

  module.exports = mongoose.model('Mood', songSchema);