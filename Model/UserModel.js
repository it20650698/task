const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true
    },
    age: {
        type: Number, // Changed from 'Numbers' to 'Number'
        required: true
    },
    address: { // Changed 'Address' to 'address'
        type: String,
        required: true
    }
});

// Export the model
module.exports = mongoose.model("User", userSchema); // Changed model name to 'User' for clarity
