const Song = require('../models/song');
const User = require('../models/user');


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
        res.render('songs/index', { 
            songs,
            user: req.user, 
        });
      });
}

 function newSong(req, res) {
    res.render('songs/new'),{
        user: req.user,
    };
}

function create(req, res) {
    const song = new Song(req.body);
    song.userCreated = req.user._id;
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
        res.render('songs/show', {
            song,
            user: req.user,
        });
    }
    )};

    function deleteOne(req, res) {
        
        Song.findByIdAndDelete(req.params.id, function(err, song){
         console.log(song);
        res.redirect('/songs');
        });
     }

        function update(req, res) {
            Song.findByIdAndUpdate(req.params.id, req.body, function(err, song) {
                console.log(song);
                res.redirect('/songs');
            });
            console.log(req.params.id);
        }