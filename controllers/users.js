const User = require("../models/user");

module.exports = {
  index,
  addUser, };

function index(req, res) {
  User.find({}, function(err, users) {
    if (err) return next(err);
    res.render('users/index', {
      users,
      user: req.user,
      name: req.query.name,
  
    });
  });
}

function addUser(req, res, next) {
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/users');
  });
}