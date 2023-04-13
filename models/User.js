const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  token: {
    type: String,
  },
  fb_count:Number,
  instaCount:Number,
  tikTok_count:Number,
  yt_count:Number,
  twitter_count:Number,
});

const User = mongoose.model("user", schema);

module.exports = User;