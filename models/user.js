// Mongoose Schema for users
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstname: {type: string, required: true},
    lastname: {type: string, required: true},
    email: {type: string, required: true, unique: true},
    password: {type: string, required: true}
})

UserSchema.pre