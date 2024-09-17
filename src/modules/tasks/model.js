const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
    board: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Board'
    }


}

)
const task = mongoose.model('task', taskSchema);
module.exports = task;