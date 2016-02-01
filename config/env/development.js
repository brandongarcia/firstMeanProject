module.exports = {
	db: 'mongodb://localhost/mean-book',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '1662220374034586',
		clientSecret: 'aaf71423d15971f1ae4727e7396bbabb',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	twitter:{
		clientID: 'nagmi1fei5rfNTD6RyFXjE2OA',
		clientSecret: 'yo720fRMEREGvcpMvrenkma6arKPwDRqnm1LchwbyKgrNpNCHQ',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google:{
		clientID: '660632790174-rr88m0sd6vteeigk6gkk0v08jrifkb7j.apps.googleusercontent.com',
		clientSecret: 'HKOchme_zT8vBvnCz-RYBsDb',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};
