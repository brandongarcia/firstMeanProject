var passport = require('passport'),
	url = require('url'),
	FacebookStrategy = require('passport-facebook').Strategy,
	config = require('../config'),
	users = require('../../app/controllers/users.server.controller');

module.exports = function(){
	passport.use(new FacebookStrategy({
		clientID: config.facebook.clientID,
		clientSecret: config.facebook.clientSecret,
		callbackURL: config.facebook.callbackURL,
		passReqToCallback: true
	},
	function(req, accessToken, refreshToken, profile, done){
		var providerData = profile._json;
		providerData.accessToken = accessToken;
		providerData.refreshToken = refreshToken;

		var facebookUserName = function(possibleUserName, number){
			var combine = possibleUserName.split(" ").join("");
			if(combine){
				return combine + number;
			}else{
				return facebookUserName(possibleUserName, number + 1)
			}
		};

		var providerUserProfile = {
			firstName: profile.name.givenName,
			lastName: profile.name.familyName,
			fullName: profile.displayName,
			email: profile.username,
			username: facebookUserName(providerData.name,0),
			provider: 'facebook',
			providerId: profile.id,
			providerData: providerData
		};

		users.saveOAuthUserProfile(req, providerUserProfile, done);
	}));
};
