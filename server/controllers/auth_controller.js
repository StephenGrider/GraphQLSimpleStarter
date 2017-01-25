const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = {
  signin(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); }
      if (!user) { return res.status(422).send({ error: 'Invalid credentials' }); }

      req.logIn(user, (err) => {
        if (err) { return next(err); }
        res.send({ id: user._id });
      });
    })(req, res, next);
  },

  signup(req, res, next) {
    const user = new User({
      email: req.body.email,
      password: req.body.password
    });

    User.findOne({ email: req.body.email }, (err, existingUser) => {
      if (err) { return next(err); }
      if (existingUser) {
        return res.send({ error: 'Email exists' });
      }
      user.save((err) => {
        if (err) { return next(err); }
        req.logIn(user, (err) => {
          if (err) { return next(err); }

          res.send({ id: user._id });
        });
      });
    });
  },

  logout(req, res) {
    req.logout();
    res.sendStatus(200);
  }
};
