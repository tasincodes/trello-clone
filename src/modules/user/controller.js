const express = require("express");
const router = express.Router();
const userService = require('../user/service');

const userController = async(req,res)=>{
    const {username,email,password}= req.body;
    const user = await userService.createUser(username,email,password);
    if(user){
     res.status(200).json({
        message :"user creation success",
        user :user
     })
     res.status(400).json({
        message:"user creation failed"
     })
    }

}

const updateUserControlller = async(req,res)=>{
    const userid = req.params;
    
}

router.post('/createUser',userController);



module.exports= router;
