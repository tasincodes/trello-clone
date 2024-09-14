const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        username: { 
            type: String, 
            required: true 
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            minlength: 6 // Enforce a minimum length of 6 characters
        }
    }
)

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
