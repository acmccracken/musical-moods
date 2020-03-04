const Mood = require('../models/song');

module.exports = {
    index,
    
  };

  function index(req, res) {
      res.render('moods/index', {});
  }

 