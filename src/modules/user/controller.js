const express = require("express");
const router = express.Router();
const userService = require('../user/service');

const UserRegister = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const { success, data, error } = await userService.createUser(username, email, password);
        if (success) {
            res.status(200).json({
                message: "user creation success",
                user: data
            })
        }
        else {
            res.status(400).json({
                message: "user creation failed",
                error: error
            })
        }

    }
    catch (error) {
        res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}


const loginHandler = async(req,res)=>{
const {email,password}= req.body;
try{
    const token = await userService.loginUser(email,password);
    if(!token){
        throw new Error("couldnt find token")
    }
    res.status(200).json({token})
}
catch(error){
    res.status(500).json({
        message:"internal server error",
        error:error.message
    })
}
}


router.post('/createUser', UserRegister);
router.post('/loginUser',loginHandler);



module.exports = router;
