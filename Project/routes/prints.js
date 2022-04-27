const   express = require('express'),
        router  = express.Router(),
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
        Print   = require('../models/print');

router.get("/", function(req, res){
	Print.find({}, function(err, allPrints){
		if(err){
			console.log(err);
		} else{
			res.render("print/index.ejs",{prints: allPrints});
		}
	});
});

router.post("/", upload.single('image'), function(req, res){
	req.body.print.image = '/upload/' + req.file.filename;
	req.body.print.author = {
		id: req.user._id,
		username: req.user.username
	};

	// let name = req.body.name;
	// let Artist = req.body.Artist; เปลี่ยนเป็ฯข้างบน
	// let url = req.body.url; ลบทิ้ง

	// let author = {
	// 	id: req.user._id,
	// 	username: req.user.username
	// };

	//let newPrint = {name:name, Artist:Artist, url:url, author:author};

	Print.create(/*newPrint*/req.body.print, function(err, newlyAdded){
		if(err){
			console.log(err);
		} else{
			res.redirect("/prints");
		}
	});
});

router.get("/new", function(req, res){
	res.render("print/new.ejs");
});

router.get("/:id", function(req, res){
	Print.findById(req.params.id).populate('comments').exec(function(err, foundPrint){
		if(err){
			console.log(err);
		} else{
			res.render('print/show.ejs', {print: foundPrint});
		}
	});
});

module.exports = router;