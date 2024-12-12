import mongoose from "mongoose";

// Mongoose provides a schema-based solution for modeling data, handling validation, and interacting with the database.

const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    createdDate : {type : Date, default : Date.now},
})

export const User = mongoose.model("User", userSchema); 

// What is a Model?
//  A model is a wrapper around the schema that provides 
// an interface for interacting with the MongoDB collection.

//  It allows you to:
// Create documents.
// Query the database.
// Update or delete documents.