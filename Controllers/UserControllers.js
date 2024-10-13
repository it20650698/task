const User = require('../Model/UserModel'); // Import the user model

// Get All Users
const getAllUsers = async (req, res) => {
    let users;

    try {
        users = await User.find();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }

    if (!users) {
        return res.status(404).json({ message: "Users Not Found" });
    }

    return res.status(200).json({ users });
};

// Data Insert Part
const addUsers = async (req, res) => {
    const { name, gmail, age, address } = req.body;

    let user;

    try {
        user = new User({ name, gmail, age, address });
        await user.save();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Unable to Add User" });
    }

    if (!user) {
        return res.status(400).json({ message: "User Not Created" });
    }

    return res.status(200).json({ user });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
