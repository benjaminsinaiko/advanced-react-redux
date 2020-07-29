const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const localStrategy = require('passport-local');

// Create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new localStrategy(localOptions, function (email, password, done) {
  // Verify username and password
  // If correct, call done with user
  // If wrong, call done with false
  User.findOne({ email: email }, function (err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }

    // compare passwords - is 'password' equal to user.password
    user.comparePassword(password, function (err, isMatch) {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false);
      }

      return done(null, user);
    });
  });
});

// Set up optoins for jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
};

// Create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // Check for user id in database
  // If user, call done with user
  // If no user, call done without user object
  User.findById(payload.sub, function (err, user) {
    if (err) {
      return done(err, false);
    }

    if (user) {
      return done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
