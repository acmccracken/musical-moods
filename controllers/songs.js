const Song = require('../models/song');


module.exports = {
    index,
    new: newSong,
    create,
    show,
    delete: deleteOne,
    update,
  };

  function index(req, res) {
    Song.find({}, function(err, songs) {
        res.render('songs/index', { songs });
      });
}

 function newSong(req, res) {
    res.render('songs/new');
}

function create(req, res) {
    console.log('create function?')
    const song = new Song(req.body);
    song.save((err) => {
    if(err){
        console.log(err);
        return res.redirect('songs/new');
    } 
    res.redirect('/songs');
    });
}

function show(req, res) {
    Song.findById(req.params.id, function(err, song){
        console.log(song)
        res.render('songs/show', {song});
    }
    )};

    function deleteOne(req, res) {
        Song.findByIdAndDelete(req.params.id, function(err, song){
         console.log(song);
        res.redirect('/songs');
        }
        )};

        function update(req, res) {
            Song.findByIdAndUpdate(req.params.id, req.body, function(err, song) {

                res.redirect('/songs');
            });
            console.log(req.params.id);
        }