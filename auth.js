const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
  clientID:"66589550718-n4d3fntvukrqb1t8s7smafravutsli5d.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  console.log(user)
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
