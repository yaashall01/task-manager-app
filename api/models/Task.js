import mongoose from "mongoose";

// Task schema
const taskSchema = new mongoose.Schema({
    title : { type: String, required: true},
    dueDate : { type: Date, required: true},
    description:{type:String},
    completed: { type: Boolean, default: false },
    listId: { type: mongoose.Schema.Types.ObjectId, ref: 'List', required: true },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
