// src/config/passport.js
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;
const User = require('../models/userModel');

passport.use(new OAuth2Strategy({
  authorizationURL: 'https://example.com/auth',
  tokenURL: 'https://example.com/token',
  clientID: 'your-client-id',
  clientSecret: 'your-client-secret',
  callbackURL: 'http://localhost:3000/auth/callback'
},
async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ where: { username: profile.username } });
    if (!user) {
      user = await User.create({ username: profile.username });
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
