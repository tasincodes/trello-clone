const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(

    {
        name :{
            type : String,
            required:true
        },
        user :{
            type : mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        tasks:[{
            type : mongoose.Schema.Types.ObjectId,
            ref:'task'
        }]
    }
)
const Board = mongoose.model('Board',boardSchema);
module.exports= Board;