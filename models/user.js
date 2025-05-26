const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);
//We used passportLocalMongoose plugin here as it automatically adds -- 
// Username, hashing, salting, hash functions.
//We didn't have to build it from scratch.
module.exports = mongoose.model("User", userSchema);