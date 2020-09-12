// Jiaxiang Leng

// Route handlers
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// import data models
const Blog = require("../models/blog");
const Comment = require("../models/comment");
const User = require("../models/user");

const Auth = require("../middleware");

router.get("/", function(req, res){
    if (req.user.isAdmin === 0) 
    {
        Blog.find({"author": {id: req.user._id, username: req.user.username, image: req.user.image}}, function(err, allBlogs){
            if(err){
                req.flash("error", err.message);
                res.render("landing");
            } 
          else {
                Comment.find({"author": {id: req.user._id, username: req.user.username}}, function(error, allComments){
                    if(error){
                        req.flash("error", error.message);
                        res.render("landing");
                    } else {
                        Blog.find({}, function(err, all){
                            var info = {user: req.user, blogs:allBlogs, allBlog: all, comments: allComments};
                            res.render("homepages/userHome", {info: info});
                        })
                    }
                });
                
            }
        });
    } 
  else if (req.user.isAdmin === 1)
    {
 Blog.find({}, function (err, blog_list){
    Comment.find({}, function (err, comment_list){
        res.render("homepages/adminHome", {blog:blog_list, comment: comment_list});
    })
  });

    }
});

router.put("/edit/:id", Auth.isLoggedIn, function(req, res) {
    if (req.body.password != req.body.password1) {
        res.redirect("back");
        req.flash("error", "Confirm that you input same passwords.");
    } else {
        User.findByIdAndUpdate(req.params.id, {$set:{image:req.body.photo}}, function(err, foundUser) {
            if (err) {
                req.flash("error", err.message);
                res.redirect("back");
            } else {
                foundUser.setPassword(req.body.password, function() {
                    foundUser.save();
                    req.flash("success", "Profile edited!!!");
                    res.redirect("/login");
                });
            }
        });
    }
});


module.exports = router;
