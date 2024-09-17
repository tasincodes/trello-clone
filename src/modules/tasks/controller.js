const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleswares/authMiddleware");
const taskService = require("../tasks/service");


const createTaskController = async(req,res)=>{
    const {boardId} = req.params;
const {title,description} = req.body;
try{
    if(!boardId){
        throw new Error("Please provide board ID");
    }
    const task = await taskService.createTask(boardId,description,title);
    res.json(task);

}
catch(error){
    res.status(500).json({message:"Internal server Error"})
}
}


router.post('/createTask/:boardId',authMiddleware,createTaskController);

module.exports= router;