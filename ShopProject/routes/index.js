const   express = require('express'),
        router  = express.Router(),
        User    = require('../models/user'),
        passport= require('passport');

router.get("/", function(req, res){
	res.render("landing.ejs");
});

router.get('/register', function(req, res){
	res.render('register.ejs');
});

router.post('/register', function(req, res){
	let newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			console.log(err);
			req.flash('error', err.message);
			return res.redirect('/register');
		}else{
			passport.authenticate('local')(req, res, function(){
			req.flash('success', 'Welcome to GGPrint' + user.username);
			res.redirect('/products');
			});
		}
	});
});

router.get('/login', function(req, res){
	res.render('login.ejs');
});

router.post('/login', passport.authenticate('local',
	{	//Middleware
		successRedirect: '/products',
		failureRedirect: '/login',
		successFlash: true,
		failureFlash: true,
		successFlash: 'Successfully login',
		failureFlash: 'Invalid username or password'
	}), function(req,res){
});

router.get('/logout', function(req, res){
	req.logOut();
	req.flash('success', 'Log you out success');
	res.redirect('/');
});

module.exports = router;