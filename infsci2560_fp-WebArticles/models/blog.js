// Lulu -- Chuanlu Chen
var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  time: String,
  address: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String,
    image: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Blog", blogSchema);
