const Song = require('../models/song');

module.exports = {
    create,
  };

  function create(req, res){
    Song.findById(req.params.id, function(err, song){
        song.ratings.push(req.body)
        song.save(function(err){
            console.log(song.ratings);
            res.redirect(`/songs/`)
        })
    })
}
