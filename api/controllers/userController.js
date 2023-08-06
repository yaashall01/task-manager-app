import usertModel from './models/userModel.js';



// Signup route
exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    // Create a new user in the database
    const newUser = new User({ username, password });
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

// Login route
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Check if the user exists in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the password is correct
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // If the user exists and the password is correct, generate a token (you'll need jsonwebtoken package)
    const token = generateToken(user._id);

    // Send the token in the response
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

const generateToken = (userId) => {
    const secretKey = process.env.JWT_SECRET_KEY; 
    const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
    return token;
  };


  exports.getProfile = async (req, res) => {
    try {
      // Assuming you have authentication middleware that extracts the user ID from the token
      const userId = req.user.id;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  };

  exports.updateUser = async (req, res) => {
    try {
      // Assuming you have authentication middleware that extracts the user ID from the token
      const userId = req.user.id;
      const { username, password } = req.body;
      // Check if the user exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update the user's profile
      user.username = username || user.username;
      if (password) {
        user.password = password;
      }
      await user.save();
  
      return res.status(200).json({ message: 'User updated successfully', user });
    } catch (err) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  };

  exports.deleteUser = async (req, res) => {
    try {
      // Assuming you have authentication middleware that extracts the user ID from the token
      const userId = req.user.id;
      // Find the user and delete the profile
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (err) {
      return res.status(500).json({ error: 'Something went wrong' });
    }
  };
  