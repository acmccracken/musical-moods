const Mood = require('../models/mood');

module.exports = {
    index,
    new: newMood,
  };

  function index(req, res) {
      res.render('moods/index', {});
  }

  function newMood(req, res) {
    res.render('moods/new');
}