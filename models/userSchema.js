const e = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userNameis: String,
    emailis: String,
    passwordis: String,
});


const User = mongoose.model("User", userSchema);

module.exports = User;