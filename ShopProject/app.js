const req = require("express/lib/request");

const	express		= require("express"),
		app 		= express(),
		bodyParser 	= require("body-parser"),
		mongoose 	= require('mongoose'),
		passport	= require('passport'),
		LocalStrategy = require('passport-local');
		Product       = require('./models/product'),	//Database
		User		= require('./models/user'),		//Database
		seedDB		= require('./seeds');			//Database

const	indexRoutes = require('./routes/index'),
		productRoutes = require('./routes/products');
		// commentRoutes = require('./routes/comments');

mongoose.connect('mongodb://localhost/ProjectShop');
app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}));

//If finished, jest comment this
// seedDB(); 

app.use(require('express-session')({
	secret: 'secret word',
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

app.use('/', indexRoutes);
app.use('/products', productRoutes);
// app.use('/prints/:id/comments', commentRoutes);

app.listen(3000, function(){
		console.log("Activated");
});