const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
    borad: {
        type: String,
        required: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
    }


}

)
const task = mongoose.model('task', taskSchema);
module.exports = task;