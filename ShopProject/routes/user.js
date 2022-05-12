const   express = require('express'),
        router  = express.Router(),
        User    = require('../models/user'),
		Product = require('../models/product'),
		Address = require('../models/address'),
		multer  = require('multer'),
		path	= require('path'),
		storage = multer.diskStorage({
					destination: function(req, file, callback){
						callback(null,'./public/upload/');
					},
					filename: function(req, file, callback){
						callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
					}
		});
		imageFilter = function(req, file, callback){
			if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)){
				return callback(new Error('Only jpg, jpeg, png and gif'), false);
			}
			callback(null, true);
		},
		upload = multer({storage:storage, fileFilter:imageFilter}),
        middleware = require('../middleware'),
        passport= require('passport');

router.get('/:id', middleware.isLoggedIn, function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		if(err){
			req.flash('error', 'There is something wrong');
			return res.redirect('/');
		}else{
			res.render('user/show.ejs', {user: foundUser});
			// Product.find().where('author.id').equals(foundUser._id).exec(function(err, foundPrint){
			// 	if(err){
			// 		req.flash('error', 'There is something wrong');
			// 		return res.redirect('/');
			// 	}else{
			// 		res.render('user/show.ejs', {user: foundUser, prints: foundPrint});
			// 	}
			// });
			// res.render('user/show.ejs', {user: foundUser});
		}
	});
});

router.get('/:id/profile', middleware.isLoggedIn, function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		if(err){
			req.flash('error', 'There is something wrong');
			return res.redirect('/');
		}else{
			res.render('user/profile.ejs', {user: foundUser});
			// Product.find().where('author.id').equals(foundUser._id).exec(function(err, foundPrint){
			// 	if(err){
			// 		req.flash('error', 'There is something wrong');
			// 		return res.redirect('/');
			// 	}else{
			// 		res.render('user/show.ejs', {user: foundUser, prints: foundPrint});
			// 	}
			// });
			// res.render('user/show.ejs', {user: foundUser});
		}
	});
});

router.get('/:id/delivery', middleware.isLoggedIn, function(req, res){
	// User.findById(req.params.id, function(err, foundUser){
	User.findById(req.params.id).populate('addresses').exec(function(err, foundUser){
		if(err){
			req.flash('error', 'There is something wrong');
			return res.redirect('/');
		}else{
			// Address.find().where('author.id').equals(foundUser._id).exec(function(err, foundPrint){
			// 	if(err){
			// 		req.flash('error', 'There is something wrong');
			// 		return res.redirect('/');
			// 	}else{
			// 		res.render('user/show.ejs', {user: foundUser, prints: foundPrint});
			// 	}
			// });

			res.render('delivery/show.ejs', {user: foundUser});
			// Product.find().where('author.id').equals(foundUser._id).exec(function(err, foundPrint){
			// 	if(err){
			// 		req.flash('error', 'There is something wrong');
			// 		return res.redirect('/');
			// 	}else{
			// 		res.render('user/show.ejs', {user: foundUser, prints: foundPrint});
			// 	}
			// });
			// res.render('user/show.ejs', {user: foundUser});
		}
	});
});

router.get('/:id/new_address', middleware.isLoggedIn, function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		if(err){
			req.flash('error', 'There is something wrong');
			return res.redirect('/');
		}else{
			res.render('delivery/new.ejs', {user: foundUser});
			// Product.find().where('author.id').equals(foundUser._id).exec(function(err, foundPrint){
			// 	if(err){
			// 		req.flash('error', 'There is something wrong');
			// 		return res.redirect('/');
			// 	}else{
			// 		res.render('user/show.ejs', {user: foundUser, prints: foundPrint});
			// 	}
			// });
			// res.render('user/show.ejs', {user: foundUser});
		}
	});
});

router.post("/:id/new_address", middleware.isLoggedIn, function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		if(err){
			console.log(err);
		} else{
			Address.create(req.body.address, function(err, address){
				if(err){
					console.log(err);
				}else{
					address.author.id = req.user._id;
					address.author.username = req.user.username;
					address.save();
					foundUser.addresses.push(address);
					foundUser.save();
					res.redirect('/user/' + foundUser._id +"/delivery");
				}
			});
		}
	});
});

router.get('/:id/:addressid/edit', middleware.isLoggedIn, function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		if(err){
			req.flash('error', 'There is something wrong');
			return res.redirect('/');
		}else{
			Address.findById(req.params.addressid, function(err, foundAddress){
				if(err){
					req.flash('error', 'There is something wrong');
					return res.redirect('/');
				}
				else
				{
					res.render('delivery/edit.ejs', {address: foundAddress});
				}
			});
		}
	});
});

router.put('/:id/:addressid', middleware.isLoggedIn, function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		if(err){
			req.flash('error', 'There is something wrong');
			return res.redirect('/');
		}else{
			Address.findByIdAndUpdate(req.params.addressid, req.body.address, function(err, foundAddress){
				if(err){
					req.flash('error', 'There is something wrong');
					return res.redirect('/');
				}
				else
				{
					res.redirect('/user/' + foundUser._id +"/delivery");
				}
			});
		}
	});
});

router.delete('/:id/:addressid', middleware.isLoggedIn, function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		if(err){
			req.flash('error', 'There is something wrong');
			return res.redirect('/');
		}else{
			Address.findByIdAndRemove(req.params.addressid, function(err){
			if(err){
				console.log(err);
			}
			res.redirect('/user/' + foundUser._id +"/delivery");
			});
		}
	});
});

router.get('/:id/basket', middleware.isLoggedIn, function(req, res){
	User.findById(req.params.id).populate('carts').exec(function(err, foundUser){
	// User.findById(req.params.id, function(err, foundUser){
		if(err){
			req.flash('error', 'There is something wrong');
			return res.redirect('/');
		}else{
			// res.render('basket/show.ejs', {user: foundUser});

			// User.carts.forEach(prod_id)
			// Product.find().where('._id').equals(prod_id._id).exec(function(err, foundPrint){
			// 	if(err){
			// 		req.flash('error', 'There is something wrong');
			// 		return res.redirect('/');
			// 	}else{
			// 		res.render('user/show.ejs', {user: foundUser, prints: foundPrint});
			// 	}
			// });
			Product.find({}, function(err, allProducts){
				if(err){
					console.log(err);
				} else{
					res.render('basket/show.ejs', {user: foundUser, products: allProducts});
					// res.render("product/index.ejs",{products: allProducts});
				}
			});
			// res.render('basket/show.ejs', {user: foundUser});
		}
	});
});

router.post('/quantity/:id/:cartid', middleware.isLoggedIn, function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		if(err){
			req.flash('error', 'There is something wrong');
			res.redirect('/user/' + foundUser._id +"/basket");
		}else{

			foundUser.carts.forEach(function(cart){
				if(cart._id.equals(req.params.cartid)){
					
					User.findByIdAndUpdate(
						foundUser,
						{$push: {"carts": {product: cart.product, quantity: cart.quantity}}},
						{safe: true, upsert: true},
						function(err, model) {
							console.log(err);
						}
					);

					User.findByIdAndUpdate(
						foundUser,
						{$pull: {"carts": {product: cart.product, quantity: cart.quantity}}},
						{safe: true, upsert: true},
						function(err, model) {
							console.log(err);
						}
					);
					res.redirect('/user/' + foundUser._id +"/basket");
				}
			});
		}
	});
});

router.post('/remove/:id/:cartid', middleware.isLoggedIn, function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		if(err){
			req.flash('error', 'There is something wrong');
			res.redirect('/user/' + foundUser._id +"/basket");
		}else{

			foundUser.carts.forEach(function(cart){
				if(cart._id.equals(req.params.cartid)){
					User.findByIdAndUpdate(
						foundUser,
						{$pull: {"carts": {product: cart.product, quantity: cart.quantity}}},
						{safe: true, upsert: true},
						function(err, model) {
							console.log(err);
						}
					);
					res.redirect('/user/' + foundUser._id +"/basket");
				}
			});
		}
	});
});


router.delete('/:id/:cartid', middleware.isLoggedIn, function(req, res){
	User.findById(req.params.id, function(err, foundUser){
		if(err){
			req.flash('error', 'There is something wrong');
			return res.redirect('/');
		}else{
			User.carts.findByIdAndRemove(req.params.cartid, function(err){
			if(err){
				console.log(err);
			}
			res.redirect('/user/' + foundUser._id +"/delivery");
			});
		}
	});
});

module.exports = router;