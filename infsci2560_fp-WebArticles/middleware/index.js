// Alhanouf

var Comment = require("../models/comment");
var Blog = require("../models/blog");
// var Ulog = require("../models/user");

module.exports = {
  isLoggedIn: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("error", "You must be signed in first!");
    res.redirect("/login");
  },

  checkUser: function(req, res, next) {
    if (req.isAuthenticated()) {
      Blog.findById(req.params.id, function(err, blog) {
        if (blog.author.id.equals(req.user._id) || req.user.isAdmin === 1) {
          next();
        } else {
          req.flash("error", "You don't have permission to do that!");
          console.log("BADD!!!");
          res.redirect("/blogs/" + req.params.id);
        }
      });
    } else {
      req.flash("error", "You need to be signed in to do that!");
      res.redirect("/login");
    }
  },

  checkUserComment: function(req, res, next) {
    console.log("YOU MADE IT!");
    if (req.isAuthenticated()) {
      Comment.findById(req.params.commentId, function(err, comment) {
        if (comment.author.id.equals(req.user._id) || req.user.isAdmin === 1) {
          next();
        } else {
          req.flash("error", "You don't have permission to do that!");
          res.redirect("/blogs/" + req.params.id);
        }
      });
    } else {
      req.flash("error", "You need to be signed in to do that!");
      res.redirect("login");
    }
  }
};
