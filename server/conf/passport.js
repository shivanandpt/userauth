const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function (dbs) {
    var User = require('../models/userModel')(dbs.core);

    passport.use(new LocalStrategy(
        function (username, password, done) {
            User.findOne({ email: username }, function (err, user) {
                
                if (err) {
                    return done(err);
                }
                if(!user) {
                    return done(null, false);
                }
                if(!user.validatePassword(password)) {
                    return done(null, false);
                }
                return done(null, user);
            })
        }
    ));
    
    passport.serializeUser((user, done) => {
        console.log('Inside serializeUser callback. User id is save to the session file store here')
        return done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user){
            if(!err) done(null, user);
            else done(err, null);
        })
    });
    
}

