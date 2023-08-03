import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


//Middleware
app.use(cors());
app.use(bodyParser.json());

//MongoDB connection 

mongoose.connect('mongodb://localhost:27017/task_manager_db', {
    useNewUrlParser : true,
    useUnifiedTopology :true,
}).then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});


//Start server
app.listen(PORT, () =>{
    console.log(`Task manager API is running on port : ${PORT}`);
})