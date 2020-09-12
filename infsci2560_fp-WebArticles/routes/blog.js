// Lulu - Chuanlu Chen

// Route handlers
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const Auth = require("../middleware");

//import data model
const Blog = require("../models/blog");

// GET: get all blogs
router.get("/", function(req, res) {
  // Get all blogs from MongoDB
  Blog.find({}, function(err, allBlogs) {
    if (err) {
      console.log(err);
      res.status(404).json({ message: "Could not find blogs" });
    } else {
      console.log("all blog found!");
      //res.json(allBlogs);
      res.render("./blogs/allBlogs", { blogs: allBlogs });
    }
  });
});

//POST: create a new blog
router.post("/", Auth.isLoggedIn, function(req, res) {
  // get author input from form
  var title = req.body.title;
  var image = req.body.image;
  var desc = req.body.description;
  var time = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  var addcheck = req.body.addresscheck;
  if(addcheck==="yes"){
    var add = req.body.address;
  } else {
    add = null;
  }
  
  // get user info
  var author = {
    id: req.user._id,
    username: req.user.username,
    image: req.user.image
  };
  
  var newBlog = {
    title: title,
    image: image,
    description: desc,
    address: add,
    author: author,
    time: time
  };

  // Create a new blog and save to MongoDB
  Blog.create(newBlog, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      //console.log(newlyCreated);
      console.log("New blog created.");
      res.redirect("/blogs");
    }
  });
});

//NEW - show form to create new blog
router.get("/new", Auth.isLoggedIn, function(req, res) {
  res.render("blogs/newBlog");
});

// GET - get blog by blogId
router.get("/:id", function(req, res) {
  //find the blog with provided ID
  //Blog.findById(req.params.bid, function(err, foundBlog) {
    Blog.findById(req.params.id).populate("comments").exec(function(err, foundBlog){ //  show comment
    if (err || !foundBlog) {
      console.log(err);
      res.status(404).json({ message: "Could not find blogs" });
    } else {
      console.log("found one blog");
      //res.json(foundBlog);
      res.render("blogs/oneBlog", { blog: foundBlog });
    }
  });
});

// GET: get comment by blogId
router.get("/:id/comments", function(req, res){
    Blog.findById(req.params.bid).populate("comments").exec(function(err, foundBlog){
        if(err){
            req.flash("error", err.message);
            //res.render("landing");
        } else {
            res.render("comments/show", {blog: foundBlog});
        }
    });
});


// PUT: Edit a blog
router.get( "/:id/edit", Auth.checkUser,function(req, res) {
    console.log("IN EDIT!");
    //find the blog with provided ID
    Blog.findById(req.params.id, function(err, foundBlog) {
      //res.json(foundBlog);
     // res.send(req.user._id);
      res.render("blogs/editBlog", { blog: foundBlog });
    });
  }
);

router.put("/:id", function(req, res) {
  var newData = {
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    time: new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
  };
  Blog.findByIdAndUpdate(req.params.id, { $set: newData }, function(err,blog) {
    console.log(blog);
    if (err) {
      req.flash("error", err.message);
      res.redirect("/blogs");
    } else {
      console.log("update successfully!");
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

// DELETE: delete a blog
router.delete("/:id", Auth.checkUser, function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err, data) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log("removed!");
        res.redirect("/blogs/");
      }
    });
  }
);

// Search blog by title
router.get("/search/name", function(req, res) {
  Blog.find({ title: new RegExp(req.query.search, "i") }, function(err,allBlogs) {
    if (err) {
      req.flash("error", err.message);
       res.render("landing");
    } else {
      res.render("blogs/searchBlog", { blogs: allBlogs });
    }
  });
});



module.exports = router;
