// yec24 ~ Yen-Ming Chen

let mongoose = require("mongoose");

let commentSchema = mongoose.Schema({
  comment: [String],
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String,
    image: String
  },
  time: [String],
  edit: Boolean
});

module.exports = mongoose.model("Comment", commentSchema);
