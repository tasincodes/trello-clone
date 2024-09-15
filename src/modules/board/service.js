const boardModel = require("../board/model");


const createBoard = async(name,userId)=>{
try{

    const board = new boardModel({name,user:userId})
    await board.save();
    return board;
}
catch(error){
    console.log(error);
}
}


module.exports = {createBoard}