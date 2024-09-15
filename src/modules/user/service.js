const userModel = require("../user/model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const createUser = async (username, email, password) => {

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return {
                success: false,
                error: "user already exists"
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            username, email, password: hashedPassword
        })
        await newUser.save();
        return {
            success: true, data: newUser
        }
    }
    catch (err) {
        console.log(err)
        return { success: false, error: err.message || "user creation failed" }
    }
}


const loginUser = async (email, password) => {
    try {
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            throw new Error("User not found");
        }
        else {
            const isMatch = await bcrypt.compare(password, existingUser.password)
            if (!isMatch) {
                throw new Error("Invalid Credentials");
            }
            const accessToken = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            return accessToken;
        }
    }
    catch (error) {
        console.log(error)
    }

}




module.exports = {
    createUser,
    loginUser
}