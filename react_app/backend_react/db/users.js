const mongoose = require("mongoose");

const user_schema = mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    password: String
});

const user_model = mongoose.model("users", user_schema);
module.exports = user_model;