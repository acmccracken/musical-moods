const Mood = require('../models/mood');

module.exports = {
    index,
    new: newMood,
    create,
  };

  function index(req, res) {
      res.render('moods/index', {});
  }

  function newMood(req, res) {
    res.render('moods/new');
}

function create(req, res) {
    console.log('create function?')
    const mood = new Mood(req.body);
    mood.save((err) => {
    if(err){
        console.log(err);
        return res.redirect('moods/new');
    } 
    res.redirect('/moods');
    });
}