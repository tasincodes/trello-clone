const userModel = require("../user/model");


const createUser = async(username,email,password)=>{

    try{
        const newUser = await userModel.create({username,email,password});
        return newUser;
    }
    catch(err){
        console.log(err)

    }
}


const updateUserService = async(user_id,userData)=>{
    try{
        const uodatedUser = await userModel.findByIdAndUpdate(user_id,userData,{new:true});
        if(!uodatedUser){
            return {status : 404,message : "user couldnt be updated"}
        }
        return{
            status:200,message:"user updated success",user:uodatedUser
        }
    }
    catch(err)
    {
        throw new Error("couldnt update user",err);
    }
}




module.exports={
    createUser,
    updateUserService
}