const User = require('../models/user');

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.email;

  // Check for user with email
  User.findOne({ email: email }, function (err, existingUser) {
    if (err) {
      return next(err);
    }

    // If user exists, return error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If user does not exist, create and save
    const user = new User({
      email: email,
      password: password,
    });

    user.save(function (err) {
      if (err) {
        return next(err);
      }

      // Respond to request
      res.json({ success: 'true' });
    });
  });
};
