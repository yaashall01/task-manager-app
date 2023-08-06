import mongoose from "mongoose";
import bcrypt from 'bcrypt';

//User schema
const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required:[true,"Please enter a valid Username"],
        unique: true
        },
        password: { type: String, required: true }            

});

// Function to hash the password before saving to the database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  // Function to compare the entered password with the hashed password in the database
  userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

const User = mongoose.model('User', userSchema);
export default  User;
