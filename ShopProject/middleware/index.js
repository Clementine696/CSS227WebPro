const   Product   = require('../models/product');
        // Comment = require('../models/comment');
        
const   middlewareObj = {};

middlewareObj.checkAdmin = function(req, res, next){
    if(req.isAuthenticated()){
        Product.findById(req.params.id, function(err, foundProduct){
            if(err){
                res.redirect('back');
            }else{
                if(req.user.isAdmin){
                    next();
                }else{
                    req.flash('error', "You do not have permission to do this action!");
                    res.redirect('back');
                }
            }
        });
    }else{
        req.flash('error', "You need to login first");
        res.redirect('/login');
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }else{
        req.flash('error','You need to login first');
        res.redirect('/login');
        // res.redirect('back');
    }
}

module.exports = middlewareObj;