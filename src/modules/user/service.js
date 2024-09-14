const userModel = require("../user/model");
const bcrypt = require('bcryptjs');


const createUser = async (username, email, password) => {

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return {
                success: false,
                error: "user already exists"
            }
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new userModel({
            username, email, password:hashedPassword
        })
        await newUser.save();
        return {
            success: true, data: newUser
        }
    }
    catch (err) {
        console.log(err)
        return { success: false, error: err.message||"user creation failed" }
    }
}


const updateUserService = async (user_id, userData) => {
    try {
        const uodatedUser = await userModel.findByIdAndUpdate(user_id, userData, { new: true });
        if (!uodatedUser) {
            return { status: 404, message: "user couldnt be updated" }
        }
        return {
            status: 200, message: "user updated success", user: uodatedUser
        }
    }
    catch (err) {
        throw new Error("couldnt update user", err);
    }
}




module.exports = {
    createUser,
    updateUserService
}