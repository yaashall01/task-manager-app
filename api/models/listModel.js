import mongoose from "mongoose";

//List schema
const listSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const List = mongoose.model('List', listSchema);

export default List;
