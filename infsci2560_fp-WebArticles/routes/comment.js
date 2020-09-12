// yec24 ~ Yen-Ming Chen

// init handlers
const express = require("express");
const router = express.Router({ mergeParams: true });

// import data
const Auth = require("../middleware");
const Blog = require("../models/blog");
const Comment = require("../models/comment");

// post
router.post("/", Auth.isLoggedIn, (req, res) => {
  console.log("request", req);
  const newComment = {
    comment: [req.body.comment],
    author: {
      id: req.user._id,
      username: req.user.username,
      image: req.user.image
    },
    time: [new Date().toLocaleString("en-US", { timeZone: "America/New_York" })],
    edit: false
  };

  Blog.findById(req.params.bid, (err, blog) => {
    if (err) {
      res.redirect("/blogs");
    } else {
      // use .then() to slove asynchronous issue
      Comment.create(newComment).then(comment => {
        blog.comments.push(comment);
        blog.save();
        req.flash("success", "Comment added!");
        res.redirect("/blogs/" + blog._id);
      });
    }
  });
});

// put
router.put("/:cid", (req, res) => {
  let updateComment = {
    comment: [req.body.updateComment],
    time: [new Date().toLocaleString("en-US", { timeZone: "America/New_York" })]
  };

  Comment.findByIdAndUpdate(req.params.cid, { $push: updateComment, $set: {edit: true} }, err => {
    if (err) {
      req.flash("error", err.message);
      res.redirect("/blogs");
    } else {
      req.flash("success", "Comment updated!");
      res.redirect("/blogs/" + req.params.bid);
    }
  });
});

// delete
router.delete("/:cid", (req, res) => {
  Comment.findByIdAndRemove(req.params.cid, err => {
    if (err) {
      res.redirect("back");
    } else {
      req.flash("success", "Comment deleted!");
      res.redirect("/blogs/" + req.params.bid);
    }
  });
});

module.exports = router;
