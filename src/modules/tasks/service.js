const taskModel = require("../tasks/model");
const boardModel = require("../board/model");


const createTask = async(boardId,description,title)=>{
try{
    const board = await boardModel.findById(boardId);
    if(!board){
        throw new Error("Couldnt find Board");
    }
    const task = new taskModel({title,description,board:boardId})
    await task.save();
    board.tasks.push(task._id);
    await board.save();
    return task;

}
catch(error){
    console.log(error)
}
}

module.exports ={createTask}