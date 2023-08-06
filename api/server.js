import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import tasksRoutes from './routes/tasks.js';
import listsRoutes from './routes/lists.js';
import usersRoutes from './routes/users.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


//Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/api', tasksRoutes);
app.use('/api', listsRoutes);
app.use('/api', usersRoutes);


//MongoDB connection 
mongoose.connect(process.env.MONGODB_URL, {
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